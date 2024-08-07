import React from 'react';
import Modal from '@mui/material/Modal';
import Product from './product';
import IconStepper from '../stepPay/stepPay';
import { useNavigate } from 'react-router-dom';
import SvgIconsSize from '../stepPay/cancel'

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
                <SvgIconsSize/>
                <IconStepper activeStep={0} />
                <Product />
            </div>
        </Modal>
    );
}
