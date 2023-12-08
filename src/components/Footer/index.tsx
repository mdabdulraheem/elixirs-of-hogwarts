import { Container, Divider, Typography } from '@mui/material';

const index = () => {
    return (
        <>
            <Divider />
            <Container component="footer" className="py-[1.5rem]">
                <Typography textAlign={'center'}>
                    Developed by Raheem
                </Typography>
            </Container>
        </>
    );
};

export default index;
