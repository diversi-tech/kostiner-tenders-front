import React from 'react';
import Modal from '@mui/material/Modal';
import IconStepper from '../stepPay/stepPay';
import { useNavigate } from 'react-router-dom';
import SvgIconsSize from '../stepPay/cancel'
import PaymentConfirmation from './finishPay'
export default function FinishPay_Step() {
    console.log("fi");
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
                <IconStepper activeStep={3} />
                <PaymentConfirmation />
            </div>
        </Modal>
    );
}