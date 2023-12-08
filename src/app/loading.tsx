import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// Common Loading UI between page loads
const loading = () => {
    return (
        <div>
            <Backdrop className="text-white" open={true}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
};

export default loading;
