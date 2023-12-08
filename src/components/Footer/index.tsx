import { Container, Divider, Typography } from '@mui/material';
import React from 'react';

const index = () => {
    return (
        <>
            <Divider />
            <Container component="footer" sx={{ paddingY: '1.5rem' }}>
                <Typography textAlign={'center'}>Built by Raheem</Typography>
            </Container>
        </>
    );
};

export default index;
