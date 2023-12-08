import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h5>404 | Page not found.</h5>
            <Link href="/">
                <Button variant="outlined" size="large">
                    Goto Home
                </Button>
            </Link>
        </div>
    );
};

export default NotFound;
