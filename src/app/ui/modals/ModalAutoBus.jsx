import { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const ModalAutoBus = ({ modalValue }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };
    console.log(modalValue);
    return (
        <>
            <div>
                <Modal
                    open={modalValue}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Seleccionar Micro disponible según su ubicación.
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Acá deberia estar un select con las opciones disponibles.!!
                        </Typography>
                    </Box>
                    <Button onClick={handleClose}>Cerrar</Button>
                </Modal>
            </div>
        </>
    );
}

export default ModalAutoBus;