import { Box } from '@mui/material';
import React from 'react';
import PotionSearch from './PotionSearch';
import PotionList from './PotionList';
import { getPotions } from '@/lib/apis/potions';
import PotionPagination from './PotionPagination';
import PotionFilter from './PotionFilter';
import { SearchParams } from '@/types/common';

type Props = {
    searchParams: SearchParams;
};

const index = async (props: Props) => {
    const { searchParams } = props;
    const { query, page, difficulty, characteristics } = searchParams;
    const { potions, pagination } = await getPotions(
        query,
        Number(page),
        difficulty,
        characteristics,
    );

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    gap: 2,
                    alignItems: 'center',
                }}
            >
                <PotionSearch placeholder="Search Potions" />
                <PotionFilter searchParams={searchParams} />
            </Box>

            {pagination && pagination?.records > 0 && (
                <PotionPagination
                    totalPages={pagination?.last || pagination?.current}
                />
            )}

            <PotionList potions={potions} />

            {pagination && pagination?.records > 0 && (
                <PotionPagination
                    totalPages={pagination?.last || pagination?.current}
                />
            )}
        </Box>
    );
};

export default index;
