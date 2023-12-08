'use client';
import TextField from '@mui/material/TextField';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { debounce } from '@/utils/helper';

type Props = {
    placeholder: string;
};

/**
 * A component for searching potions.
 */
const PotionSearch = (props: Props) => {
    const { placeholder } = props;
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    /*
        Handle user search query and update url to reflect that.
    */
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const params = new URLSearchParams(searchParams);
        // Reset page number to 1 when search query is applied/changed to maintain the correctness of the data.
        params.set('page', '1');
        const searchTerm = event.target.value;
        if (searchTerm) {
            params.set('query', searchTerm);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    };

    // Debounce the search handler to improve performance and reduce networks calls.
    const debouncedHandleSearch = debounce(handleSearch, 300);

    return (
        <TextField
            id="outlined-basic"
            label={placeholder || 'Search'}
            variant="outlined"
            onChange={debouncedHandleSearch}
            defaultValue={searchParams.get('query')?.toString()}
            className="flex-1"
            color="primary"
        />
    );
};

export default PotionSearch;
