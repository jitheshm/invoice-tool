import { RiDeleteBinLine } from "react-icons/ri";
import { deleteItem, updateItemData } from '@/lib/features/invoice/invoiceUtils';
import InputField from '../common/InputField';
import { memo } from "react";
import { Item } from "@/types/InvoiceTypes";
import { AppDispatch } from "@/lib/store";

type PropTypes = {
    index: number
    ele: Item
    dispatch: AppDispatch
}

const TableRow = memo(({ index, ele, dispatch }: PropTypes) => {
    return (
        <tr key={index} >
            <td className="px-2 py-1 text-center flex gap-3 items-center">
                {index + 1}
                <button onClick={() => deleteItem(dispatch, index)} className='border border-[#dc3545] text-[#dc3545] px-1 py-2 rounded-md opacity-0 group-hover:opacity-100'>
                    <RiDeleteBinLine />
                </button>
            </td>
            <td className="px-2 py-1 truncate">
                <InputField
                    className='border-[#ffca58] border-solid border-[1px] rounded-sm !py-0 h-[25px] flex'
                    type='text'
                    placeholder='Description'
                    inputClass='h-full'
                    value={ele.item}
                    onChange={(e) => updateItemData(dispatch, index, { item: e.target.value })}
                />
            </td>
            <td className="px-2 py-1 truncate">
                <InputField
                    className='border-[#ffca58] border-solid border-[1px] rounded-sm !py-0 h-[25px] flex'
                    type='number'
                    placeholder='Quantity'
                    value={ele.quantity}
                    onChange={(e) => updateItemData(dispatch, index, { quantity: e.target.value ? parseFloat(e.target.value) : undefined })}
                />
            </td>
            <td className="px-2 py-1 truncate">
                <InputField
                    className='border-[#ffca58] border-solid border-[1px] rounded-sm !py-0 h-[25px] flex'
                    type='number'
                    placeholder='Rate'
                    value={ele.rate}
                    onChange={(e) => updateItemData(dispatch, index, { rate: e.target.value ? parseFloat(e.target.value) : undefined })}
                />
            </td>
            <td className="px-2 py-1 truncate text-end">
                {ele.quantity && ele.rate ? (ele.quantity * ele.rate).toFixed(2) : '0.00'}
            </td>
        </tr>
    );
});

TableRow.displayName = 'TableRow';
export default TableRow