import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import useTotal from './useTotal';

const useBalance = () => {
    const total = useTotal()
    const { paid } = useSelector((state: RootState) => state.invoice);
    return total - (typeof (paid.value) === 'number' ? paid.value : 0)
};

export default useBalance;
