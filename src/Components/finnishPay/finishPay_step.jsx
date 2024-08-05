import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import IconStepper from '../stepPay/stepPay';
import { useNavigate } from 'react-router-dom';
import SvgIconsSize from '../stepPay/cancel';
import PaymentConfirmation from './finishPay';

export default function FinishPay_Step() {
    const [open, setOpen] = React.useState(true); // פתח את המודאל כברירת מחדל
    const navigate = useNavigate();

    useEffect(() => {
        // Set a timeout to close the modal after 5 seconds
        const timer = setTimeout(() => {
            setOpen(false);
            navigate('/');
        }, 5000); // 5000 milliseconds = 5 seconds

        // Cleanup timeout if component unmounts before timeout completes
        return () => clearTimeout(timer);
    }, [navigate]);

    const handleClose = () => {
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
                <SvgIconsSize />
                <IconStepper activeStep={3} />
                <PaymentConfirmation />
            </div>
        </Modal>
    );
}
