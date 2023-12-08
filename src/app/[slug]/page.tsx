import { getPotionDetails } from '@/lib/apis/potions';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import PotionDetailAccordion from './PotionDetailAccordion';
import { SHOW_POTION_PROPERTIES } from '@/utils/constants';

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
        <Box className="flex items-center justify-center flex-col">
            <Typography variant="h4" className="font-bold">
                {potionDetails.name}
            </Typography>

            <Box
                component="img"
                src={potionDetails.image}
                alt={potionDetails.name}
                className="my-[1.5rem] shadow-[0 0 10px lightgray] shadow-xl"
            />

            <Button
                variant="contained"
                href={potionDetails.wiki}
                target="_blank"
                size="large"
            >
                Link to Wiki
            </Button>

            <Box className="my-[1.5rem] w-full max-w-[800px]">
                {Object.entries(potionDetails).map(([key, value], index) => {
                    // Show only the required potion properties
                    if (!Object.hasOwn(SHOW_POTION_PROPERTIES, key))
                        return null;

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
