import React from 'react';
import Modal from '@mui/material/Modal';
import IconStepper from '../stepPay/stepPay';
import CreditCard from './card';
import SvgIconsSize from '../stepPay/cancel';


export default function CreditCard_Step() {
    const [open, setOpen] = React.useState(true); // Open the modal by default
    const handleClose = () => setOpen(false);
    console.log("fdgh");

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
                <IconStepper activeStep={2} />
                <CreditCard />
            </div>
        </Modal>
    );
}