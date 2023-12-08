import { Button } from '@mui/material';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center">
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
