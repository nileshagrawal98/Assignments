import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import BasicModal from './LoginModal';
import { useState, useContext } from 'react';
import {AuthContext} from '../context/AuthContext';

export const Navbar = () => {
    const { isAuth, toggleAuth, handleTokenChange} = useContext(AuthContext);

    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        toggleAuth();
        handleTokenChange('');
    }

    return <nav>
        <Box sx={{
            flexGrow: 1
        }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography 
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            // mr: 2,
                            // display: {
                            //     xs: 'none',
                            //     md: 'flexItem'
                            // }
                        }}
                    >
                        Auth Context
                    </Typography>
                    {
                        isAuth ? <Button onClick={handleLogout} color="inherit" variant='outlined' size="medium">Logout</Button> : <Button onClick={() => setOpen(true)} color="inherit" variant='outlined' size="medium">Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
        <BasicModal open={open} setOpen={setOpen}/>
    </nav>
}