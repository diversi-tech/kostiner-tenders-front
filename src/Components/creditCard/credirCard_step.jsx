import React from 'react';
import Modal from '@mui/material/Modal';
import IconStepper from '../stepPay/stepPay';
import CreditCard from './creditCard';
import SvgIconsSize from '../stepPay/cancel';
import { useLocation } from 'react-router-dom';


export default function CreditCard_Step() {

    const [open, setOpen] = React.useState(true); // Open the modal by default
    const handleClose = () => setOpen(true);
    const location = useLocation();
    const { type, items } = location.state || {};
    // console.log("type.type ", type.type);
    console.log("type ", type);
    console.log("items", items);
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
                <IconStepper activeStep={2}/>
                {/* <CreditCard type={JSON.parse(type)} items={JSON.parse(type)} /> */}
                <CreditCard type={type} items={{...items}} />
            </div>
        </Modal>
    );
}