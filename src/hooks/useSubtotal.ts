import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const useSubtotal = () => {
    const items = useSelector((state: RootState) => state.invoice.items);
    const subtotal = items.reduce((sum, item) => sum + ((item.quantity ?? 0) * (item.rate ?? 0)), 0);
    return subtotal;
};

export default useSubtotal;
