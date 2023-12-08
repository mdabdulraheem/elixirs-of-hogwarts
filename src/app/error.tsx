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
        console.error('Error:: ', error);
    }, [error]);

    return (
        <div>
            <Box className="w-full h-full flex items-center justify-center">
                <Typography color="warn">
                    Oops, something went wrong.
                </Typography>
                <Button onClick={() => reset()}>Try again.</Button>
            </Box>
        </div>
    );
}
