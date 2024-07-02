import React from 'react';
import Modal from '@mui/material/Modal';
import IconStepper from './stepPay';
import TypeProduct from './typeProduct';

export default function TypeProduct_Step() {
    const [open, setOpen] = React.useState(true); // Open the modal by default
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            sx={{ alignItems: 'center' }}
            BackdropProps={{
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // פחות שקוף (יותר כהה)
                },
            }}
        >
            <div>
                <IconStepper activeStep={1} />
                <TypeProduct />
            </div>
        </Modal>
    );
}
