import { AppBar, Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const index = () => {
    return (
        <AppBar position="static">
            <Container>
                <Link
                    href="/"
                    style={{
                        padding: '1.5rem 0',
                        display: 'inline-flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: '#fff',
                    }}
                >
                    <Image
                        width={48}
                        height={48}
                        src={'/images/magicPotion.png'}
                        alt={'Potions'}
                    />
                    <Box>
                        <Typography variant="h4" fontWeight="bold">
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
