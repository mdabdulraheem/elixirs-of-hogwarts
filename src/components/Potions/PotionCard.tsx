import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { PotionSubset } from '@/types/potion';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';

type Props = {
    potion: PotionSubset;
};

/**
 * A component for each potion card.
 */
const PotionCard = (props: Props) => {
    const { potion } = props;
    return (
        <Card className="flex h-full flex-col justify-between">
            <CardMedia
                component={'img'}
                image={potion.image}
                alt={potion.name}
                className={`max-w-full h-[250px] object-cover transition-transform
                     duration-500 hover:transfom hover:scale-110`}
            />

            <CardContent className="flex-1">
                <List className="w-full max-w-[360px]">
                    <ListItem>
                        <ListItemText primary="Name" secondary={potion.name} />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                        <ListItemText
                            primary="Effect"
                            secondary={potion.effect}
                        />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                        <ListItemText
                            primary="Difficulty"
                            secondary={potion.difficulty}
                        />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                        <ListItemText
                            primary="Characteristics"
                            secondary={potion.characteristics}
                        />
                    </ListItem>
                </List>
            </CardContent>

            <CardActions>
                <Link href={`/${potion.slug}`} className="w-full">
                    <Button variant="contained" size="medium" fullWidth>
                        View Potion Details
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default PotionCard;
