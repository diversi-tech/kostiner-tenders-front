import React from 'react';
import Modal from '@mui/material/Modal';
import Product from './product';
import IconStepper from '../stepPay/stepPay';

export default function Product_Step() {
    const [open, setOpen] = React.useState(true); // Open the modal by default
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            sx={{ alignItems: 'center' }}
        >
            <div>
                <IconStepper activeStep={0} />
                <Product />
            </div>
        </Modal>
    );
}