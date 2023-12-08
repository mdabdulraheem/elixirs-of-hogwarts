'use client';
import { useEffect } from 'react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Global error:: ', error);
    }, [error]);

    return (
        <html>
            <body>
                <div className="w-full h-full flex items-center justify-center">
                    <p>Oops, something went wrong.</p>
                    <button onClick={() => reset()}>Try again.</button>
                </div>
            </body>
        </html>
    );
}
