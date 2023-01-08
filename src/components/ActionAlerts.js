import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Fade from '@mui/material/Fade';
import { useState } from 'react';

export default function ActionAlerts() {

    const [open, setOpen] = useState(true);

    return (
        <Fade in={open} timeout={1000} style={{ display: !open ? 'none' : 'flex' }}>
            <Alert onClose={() => setOpen(false)}>agregado a favoritos!</Alert>
        </Fade>
    );
}
