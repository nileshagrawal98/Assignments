import { Card, CardContent, Container, Typography } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export const Status = () => {

    const { token } = useContext(AuthContext);

    return <Card sx={{ width: 275, mt: '15ch', ml: '39vw', boxShadow: '0 0 10px #777' }}>
        <CardContent>
            <Typography color="text.primary" gutterBottom >
                Status: {token ? 'Logged In' : 'Logged Out'}
            </Typography>
            {
                token && <Typography color="text.primary" gutterBottom >
                    Token: {token}
                </Typography>
            }
        </CardContent>
    </Card>

}