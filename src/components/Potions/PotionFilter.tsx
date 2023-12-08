'use client';
import { FilterData, SearchParams, SelectedFilters } from '@/types/common';
import Filter from '../Shared/Filter';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { POTION_FILTER_OPTIONS } from '@/utils/constants';

type Props = {
    searchParams: SearchParams;
};

/**
 * A component for filtering potions. It uses the common Filter Component.
 */
const PotionFilter = (props: Props) => {
    const { searchParams: params } = props;
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    /*
        Calculate initial state of the filter component based on the options and search params.
        And update it if the search params change.
    */
    const initialState = useMemo(
        () =>
            POTION_FILTER_OPTIONS.reduce(
                (acc, element: FilterData) => {
                    const filterName = element.name.toLowerCase();
                    let filterValues: string[] = [];
                    filterValues = params?.[filterName]?.split(',') || [];
                    acc[filterName] = filterValues;
                    return acc;
                },
                {} as Record<string, string[]>,
            ),
        [params],
    );

    /*
        Update the url based on the applied filters.
        Filtered data will be fetched based on this.
    */
    const handleFiltersChange = (selectedFilters: SelectedFilters) => {
        const params = new URLSearchParams(searchParams);
        // Reset page number to 1 when filter is applied/changed to maintain the correctness of the data.
        params.set('page', '1');
        Object.entries(selectedFilters).forEach(([category, values]) => {
            if (values.length > 0) {
                params.set(category, values.join(','));
            } else {
                params.delete(category);
            }
        });
        // Update url
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <Filter
            onFilterChange={handleFiltersChange}
            data={POTION_FILTER_OPTIONS}
            filterState={initialState}
        />
    );
};

export default PotionFilter;
