import React from 'react';
import Modal from '@mui/material/Modal';
import AutocompleteModal from './typeProduct';
import IconStepper from '../stepPay/stepPay';
import SvgIconsSize from '../stepPay/cancel';

export default function TypeProduct_Step() {
    const [open, setOpen] = React.useState(true); // Open the modal by default
    const handleClose = () => setOpen(true);

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
                <IconStepper activeStep={1} />
                <AutocompleteModal />
            </div>
        </Modal>
    );
}