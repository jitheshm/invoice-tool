import { RootState } from "@/lib/store";
import { validateInvoice } from "@/lib/utils/validations/invoiceValidation";
import { useDispatch, useSelector } from "react-redux";
import usePdf from "../usePdf";
import { setErrors } from "@/lib/features/errors/errorSlice";

const useAction = () => {
    const invoiceData = useSelector((state: RootState) => state.invoice);
    const errors = useSelector((state: RootState) => state.errors);
    const { generateAndDownloadPdf } = usePdf()
    const dispatch = useDispatch()

    const handleDownload = () => {
        console.log(invoiceData)
        const { errors } = validateInvoice(invoiceData);
        console.log(errors, "error")
        if (Object.keys(errors).length > 0) {
            dispatch(setErrors(errors))

            return;
        }

        setErrors({});
        generateAndDownloadPdf()
    }
    return { handleDownload }
}

export default useAction