import { generatePDF, InvoiceData } from '@/lib/utils/generatePdf'
import React from 'react'

function InvoiceCard({ data }: { data: InvoiceData }) {
    return (
        <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-start w-64 h-80 relative overflow-hidden">
            {/* PDF background icon */}
            <div className="absolute inset-0 opacity-100 flex justify-center items-center">
                <img src="https://img.icons8.com/ios-filled/100/000000/pdf-2.png" alt="PDF Icon" className="w-24 h-24" />
            </div>
            {/* Card Content */}
            <h2 className="text-xl font-semibold mb-2 z-10">{data.invoiceId.value}</h2>

            <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 z-10" onClick={() => generatePDF(data)}>
                Download
            </button>
        </div>
    )
}

export default InvoiceCard