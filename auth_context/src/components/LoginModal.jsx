import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { AuthContext } from '../context/AuthContext';
import { Typography } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.default',
    border: '2px solid primary.main',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
};

export default function BasicModal({ open, setOpen }) {

    const { toggleAuth, handleTokenChange } = React.useContext(AuthContext);

    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();


    const handleClose = () => setOpen(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email: email,
            password: password
        }
        console.log(email, password);
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (!data.error) {
                handleTokenChange(data.token);
                toggleAuth();
                handleClose();
            }
        })
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
            >

                <Box
                    component="form"
                    sx={{
                        ...style,
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="on"
                    onSubmit={handleSubmit}
                >
                    
                    
                    <Typography variant="h6" component='h6' id="modal-modal-title" sx={{ mb:2, ml:1}}>
                        User Login
                    </Typography>
                        <TextField
                            required
                            label="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            required
                            label="Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <Button varitant="contained" size="large" type="submit" sx={{mt:2}}>Login</Button>
                   
                </Box>
            </Modal>
        </div>
    );
}
