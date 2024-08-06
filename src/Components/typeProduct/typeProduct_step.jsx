import React from 'react';
import Modal from '@mui/material/Modal';
import TypeProduct from './typeProduct';
import IconStepper from '../stepPay/stepPay';
import SvgIconsSize from '../stepPay/cancel';
import { useLocation } from 'react-router-dom';

export default function TypeProduct_Step() {
    const [open, setOpen] = React.useState(true); // Open the modal by default
    const handleClose = () => setOpen(true); // Close the modal

    const location = useLocation();
    const type = location.state || {}; // Destructure 'type' from location state
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            sx={{ alignItems: 'center' }}
        >
            <div>
                <SvgIconsSize />
                <IconStepper activeStep={1} />
                <TypeProduct typeTender={type} />
            </div>
        </Modal>
    );
}
