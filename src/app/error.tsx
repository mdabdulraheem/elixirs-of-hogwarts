'use client';
import { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography color="warn">
                    Oops, something went wrong.
                </Typography>
                <Button onClick={() => reset()}>Try again.</Button>
            </Box>
        </div>
    );
}
