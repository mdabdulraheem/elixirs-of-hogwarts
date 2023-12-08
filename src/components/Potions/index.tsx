import { Box } from '@mui/material';
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
        <Box className="flex flex-col items-center">
            <Box className="flex w-full gap-2 items-center">
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
