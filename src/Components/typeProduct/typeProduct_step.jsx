import React from 'react';
import Modal from '@mui/material/Modal';
import TypeProduct from './typeProduct';
import IconStepper from '../stepPay/stepPay';
<<<<<<< Updated upstream
=======
import SvgIconsSize from '../stepPay/cancel';
import { useLocation } from 'react-router-dom';
>>>>>>> Stashed changes

export default function TypeProduct_Step() {
    const [open, setOpen] = React.useState(true); // Open the modal by default
    const handleClose = () => setOpen(false); // Close the modal

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
<<<<<<< Updated upstream
=======
                <SvgIconsSize />
>>>>>>> Stashed changes
                <IconStepper activeStep={1} />
                <TypeProduct typeTender={type} />
            </div>
        </Modal>
    );
}
