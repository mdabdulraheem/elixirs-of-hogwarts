import { AppBar, Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const index = () => {
    return (
        <AppBar position="static">
            <Container>
                <Link
                    href="/"
                    className="py-[1.5rem] inline-flex items-center no-underline text-white"
                >
                    <Image
                        width={48}
                        height={48}
                        src={'/images/magicPotion.png'}
                        alt={'Potions'}
                    />
                    <Box>
                        <Typography variant="h4" className="font-bold">
                            Elixirs of Hogwarts
                        </Typography>
                        <Typography variant="body2">
                            Unveiling the Mystique of Magical Potions from the
                            Wizarding World
                        </Typography>
                    </Box>
                </Link>
            </Container>
        </AppBar>
    );
};

export default index;
