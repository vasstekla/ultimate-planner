import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { style } from "@mui/system";
import { useState } from "react";

export default function NewTaskModalContainer() {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen}> New Task </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        New Task
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Description" variant="outlined" />
                        <TextField id="outlined-basic" label="Category" variant="outlined" />
                        <TextField id="outlined-basic" label="Priority" variant="outlined" />
                        <TextField id="outlined-basic" label="Day" variant="outlined" />
                        <TextField id="outlined-basic" label="Status" variant="outlined" />
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}