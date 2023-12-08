import { Box, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
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
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={12}
                    width={'100%'}
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
                <Box sx={{ paddingY: '1.5rem', widht: '100%' }}>
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
