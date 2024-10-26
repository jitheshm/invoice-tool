import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import useSubtotal from './useSubtotal';

const useTotal = () => {
    const subtotal = useSubtotal()
    const { discount, shipping, tax } = useSelector((state: RootState) => state.invoice);
    const shippingCharge = typeof (shipping.value) === "number" ? shipping.value : 0
    const discountAmount = typeof (discount.value) === "number" ? discount.value : 0
    const taxValue = typeof (tax.value) === "number" ? tax.value : 0
    const amount = subtotal + shippingCharge - discountAmount
    const total=amount+((amount*taxValue)/100)
    return total;
};

export default useTotal;
