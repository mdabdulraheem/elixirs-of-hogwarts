import { Box, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import PotionCard from './PotionCard';
import { PotionSubset } from '@/types/potion';

type Props = {
    potions: PotionSubset[];
};

/**
 * A component to list all the potions.
 */
const PotionList = async (props: Props) => {
    const { potions } = props;
    return (
        <>
            {potions.length > 0 && (
                <Grid
                    className="w-full"
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={12}
                >
                    {potions.map((potion, index) => (
                        <Grid xs={12} sm={6} md={4} lg={3} key={index}>
                            <PotionCard potion={potion} key={index} />
                        </Grid>
                    ))}
                </Grid>
            )}

            {/* Fallback UI when applied filters/search result in 0 potions data. */}
            {potions.length === 0 && (
                <Box className="py-[1.5rem] w-full">
                    <Typography color="error" textAlign={'center'}>
                        Oops, there are no potions for your search/filter query.
                        Please try a different search/filter.
                    </Typography>
                </Box>
            )}
        </>
    );
};

export default PotionList;
