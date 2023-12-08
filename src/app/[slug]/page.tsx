import React from 'react';
import { getPotionDetails } from '@/lib/apis/potions';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import PotionDetailAccordion from './PotionDetailAccordion';

type Props = { params: { slug: string } };

/**
 * A route segment for showing all the details of a potion.
 */
const page = async (props: Props) => {
    const { slug } = props.params;

    const potionDetails = await getPotionDetails(slug);

    if (!potionDetails)
        return <div>Something went wrong. Please refresh the page.</div>;

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h4" fontWeight={'bold'}>
                {potionDetails.name}
            </Typography>

            <Box
                component="img"
                src={potionDetails.image}
                alt={potionDetails.name}
                sx={{
                    marginY: '1.5rem',
                    boxShadow: '0 0 10px lightgray',
                }}
            />

            <Button
                variant="contained"
                href={potionDetails.wiki}
                target="_blank"
                size="large"
            >
                Link to Wiki
            </Button>

            <Box sx={{ marginY: '1.5rem', width: '100%', maxWidth: '800px' }}>
                {Object.entries(potionDetails).map(([key, value], index) => {
                    if (['slug', 'image', 'wiki'].includes(key)) return null;
                    return (
                        <PotionDetailAccordion
                            key={index}
                            name={key}
                            details={value}
                        />
                    );
                })}
            </Box>
        </Box>
    );
};

export default page;
