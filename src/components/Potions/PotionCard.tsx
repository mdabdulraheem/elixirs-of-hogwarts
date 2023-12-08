import React from 'react';
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
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <CardMedia
                component={'img'}
                image={potion.image}
                alt={potion.name}
                sx={{
                    maxWidth: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    transition: 'transform 500ms',
                    ':hover': {
                        transform: 'scale(1.1)',
                    },
                }}
            />

            <CardContent sx={{ flex: '1' }}>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >
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
                <Link href={`/${potion.slug}`} style={{ width: '100%' }}>
                    <Button variant="contained" size="medium" fullWidth>
                        View Potion Details
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default PotionCard;
