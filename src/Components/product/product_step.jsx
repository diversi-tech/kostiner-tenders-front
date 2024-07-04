import React from 'react';
import Modal from '@mui/material/Modal';
import Product from './product';
import IconStepper from '../stepPay/stepPay';
import { useNavigate } from 'react-router-dom';

export default function Product_Step() {
    const [open, setOpen] = React.useState(true); // פתח את המודאל כברירת מחדל
    const navigate = useNavigate();

    const handleClose = () => {
        console.log("handleClose called");
        setOpen(false);
        navigate('/');
    };

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
