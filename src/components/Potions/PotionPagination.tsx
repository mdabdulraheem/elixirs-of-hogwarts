'use client';
import React, { ChangeEvent } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Pagination } from '@mui/material';

type Props = {
    totalPages: number;
};

/**
 * A component for paginating between different pages of potions.
 */
const PotionPatination = (props: Props) => {
    const { totalPages } = props;
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const currentPage = Number(searchParams.get('page')) || 1;

    /*
        Update url to reflect the selected page number.
        And get the data for it.
    */
    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', value.toString());
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
            sx={{ paddingY: '1.5rem' }}
            color="primary"
        />
    );
};

export default PotionPatination;
