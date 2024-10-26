import { InvoiceState, Item } from '@/types/InvoiceTypes';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';

interface FinalItem extends Item {
    amount: number;
}

interface InvoiceData extends InvoiceState {
    items: FinalItem[];
}

const splitTextToLines = (text: string, maxLength: number) => {
    const lines: string[] = [];
    for (let i = 0; i < text.length; i += maxLength) {
        lines.push(text.substring(i, i + maxLength));
    }
    return lines.join('\n');
};

export const generatePDF = (invoiceData: InvoiceData) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Header
    doc.setFontSize(30);
    doc.setFont("helvetica", "bold");
    const headerText = "Invoice";
    const headerTextWidth = doc.getTextWidth(headerText);
    doc.text(headerText, pageWidth - headerTextWidth - 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    // Invoice details
    let textwidth = doc.getTextWidth(`${invoiceData.invoiceId.label}:`);
    doc.text(`${invoiceData.invoiceId.label}:`, pageWidth - textwidth - 70, 30);
    textwidth = doc.getTextWidth(`${invoiceData.invoiceId.value}`);
    doc.text(`${invoiceData.invoiceId.value}`, pageWidth - textwidth - 20, 30);

    textwidth = doc.getTextWidth(`${invoiceData.invoiceDate.label}:`);
    doc.text(`${invoiceData.invoiceDate.label}:`, pageWidth - textwidth - 70, 38);
    textwidth = doc.getTextWidth(`${invoiceData.invoiceDate.value}:`);
    doc.text(`${invoiceData.invoiceDate.value}`, pageWidth - textwidth - 20, 38);

    textwidth = doc.getTextWidth(`${invoiceData.dueDate.label}:`);
    doc.text(`${invoiceData.dueDate.label}:`, pageWidth - textwidth - 70, 46);
    textwidth = doc.getTextWidth(`${invoiceData.dueDate.value}:`);
    doc.text(`${invoiceData.dueDate.value}`, pageWidth - textwidth - 20, 46);


    let text = splitTextToLines((invoiceData.from.value as string), 30)
    let textHeight = text.split('\n').length * 5

    doc.text(`${invoiceData.from.label}:`, 20, 60);
    doc.text(`${invoiceData.from.value}`, 20, 68);

    let fieldPos = 68 + textHeight;
    doc.text(`${invoiceData.to.label}:`, 20, fieldPos + 8);
    doc.text(`${invoiceData.to.value}`, 20, fieldPos + 16);

    text = splitTextToLines((invoiceData.to.value as string), 30)
    textHeight = text.split('\n').length * 5
    fieldPos = textHeight + fieldPos + 16;

    // Table of items
    const items = invoiceData.items.map(ele => [
        ele.item,
        ele.quantity,
        ele.rate?.toFixed(2),
        ele.amount.toFixed(2),
    ]) as RowInput[];

    let finalY;
    autoTable(doc, {
        head: [['Item', 'Quantity', 'Rate', 'Amount']],
        body: items,
        startY: fieldPos + 8,
        didDrawPage: (data) => {
            finalY = data.cursor?.y;
        },
        columnStyles: {
            0: { halign: 'center' }, // Item - center aligned
            1: { halign: 'center' }, // Quantity - center aligned
            2: { halign: 'center' }, // Rate - center aligned
            3: { halign: 'right' },  // Amount - right aligned
        },
        headStyles: {
            fillColor: [60, 60, 60], // Dark background color for the header
            textColor: [255, 255, 255], // White text color for contrast
            halign: 'center', // Center align the header text
        },
        styles: {
            cellPadding: 2,
            fontSize: 10,
            overflow: 'linebreak',
            lineColor: [255, 255, 255], // White for visibility
            lineWidth: 0, // Set line width to 0 to remove borders
            fillColor: [240, 240, 240], // Light color for the table body rows
        },
        alternateRowStyles: {
            fillColor: [230, 230, 230], // Slightly darker light color for alternate rows
        },
        margin: { top: fieldPos + 8, right: 20, bottom: 20, left: 20 },
        theme: 'plain',
    });

    // Footer Details: Add cells for Subtotal, Tax, Discount, and Total
    const cellWidth = 70; // Width of the cells
    const cellHeight = 10;
    const cellX = pageWidth - cellWidth - 20;
    const labels = [
        { label: invoiceData.subtotal.label, value: (invoiceData.subtotal.value! as number).toFixed(2) + ' INR' },
        { label: invoiceData.discount.label, value: (invoiceData.discount.value! as number).toFixed(2) + ' INR' },
        { label: invoiceData.shipping.label, value: (invoiceData.shipping.value! as number).toFixed(2) + ' INR' },
        { label: invoiceData.tax.label, value: (invoiceData.tax.value! as number).toFixed(2) + '   %' },
        { label: invoiceData.balance.label, value: (invoiceData.balance.value! as number).toFixed(2) + ' INR' },
    ];

    labels.forEach((item, index) => {
        const cellY = finalY! + 10 + index * cellHeight;

        // Conditionally fill color for first and last cells
        if (index === 0 || index === labels.length - 1) {
            doc.setFillColor(60, 60, 60); // Dark background for first and last cells
            doc.rect(cellX, cellY, cellWidth, cellHeight, 'F'); // Fill background

            // White text for filled cells
            doc.setTextColor(255, 255, 255);
        } else {
            // Black text for unfilled cells
            doc.setTextColor(0, 0, 0);
        }

        // Center label inside cell
        const labelWidth = doc.getTextWidth(item.label);
        const labelX = cellX + (cellWidth - labelWidth) / 2;
        const labelY = cellY + (cellHeight / 2) + 1;
        doc.text(item.label, labelX, labelY);

        // Right-align value inside cell
        const valueWidth = doc.getTextWidth(item.value);
        const valueX = cellX + cellWidth - valueWidth - 2;
        doc.text(item.value, valueX, labelY);
    });

    doc.setTextColor(0, 0, 0);
    text = splitTextToLines((invoiceData.terms.value as string), 30)
    textHeight = text.split('\n').length * 5
    doc.text(`${invoiceData.terms.label}:`, 20, finalY! + 8);
    doc.text(`${text}`, 20, finalY! + 16);

    fieldPos = finalY! + 16 + textHeight;
    text = splitTextToLines((invoiceData.note.value as string), 30)
    doc.text(`${invoiceData.note.label}:`, 20, fieldPos + 8);
    doc.text(`${text}`, 20, fieldPos + 16);


    // Save the PDF
    doc.save("invoice.pdf");
};
