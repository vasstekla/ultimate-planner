import { Box, Button, FormControl, MenuItem, Modal, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ITask } from "../../models/ITask";
import { categories, daysOfTheWeek } from "../../TestData";

interface TaskModalProps {
    onSubmit: Function,
    updateIsOpen: Function,
    isOpen: boolean,
    submitMessage: string,
    task: ITask
}

export default function TaskModal(props: TaskModalProps) {
    const { onSubmit, isOpen, updateIsOpen, task, submitMessage } = props

    const [open, setOpen] = useState(isOpen);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [newTask, setNewTask] = useState(task)
    const [changedInside, setChangedInside] = useState(false)

    useEffect(() => {
        if (isOpen !== open) {
            setOpen(isOpen)
        }
        if (task !== newTask && !changedInside) {
            setNewTask(task)
        }
    });


    const handleSubmit = () => {
        const task = newTask
        onSubmit(task)
        setOpen(false)
        updateIsOpen(false)
    }

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
    }

    return (
        <>
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
                    <FormControl fullWidth>
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            margin="dense"
                            value={newTask.name}
                            onChange={(event) => { setNewTask({ ...newTask, name: event.target.value as string }); setChangedInside(true) }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Description"
                            variant="outlined"
                            margin="dense"
                            value={newTask.description}
                            onChange={(event) => { setNewTask({ ...newTask, description: event.target.value as string }); setChangedInside(true) }}
                        />
                        <TextField
                            id="category-select"
                            select
                            label="Category"
                            margin="dense"
                            value={newTask.category}
                            onChange={(event) => { setNewTask({ ...newTask, category: event.target.value as string }); setChangedInside(true) }}
                        >
                            {categories.map(category =>
                                <MenuItem value={category} key={category}>{category}</MenuItem>
                            )}
                        </TextField>
                        <TextField
                            id="outlined-basic"
                            label="Priority"
                            variant="outlined"
                            margin="dense"
                            value={newTask.priority}
                            onChange={(event) => { setNewTask({ ...newTask, priority: Number(event.target.value) }); setChangedInside(true) }}
                        />
                        <TextField
                            id="day-select"
                            select
                            label="Day"
                            margin="dense"
                            value={newTask.day}
                            onChange={(event) => { setNewTask({ ...newTask, day: event.target.value as string }); setChangedInside(true) }}
                        >
                            {daysOfTheWeek.map(day =>
                                <MenuItem value={day} key={day}>{day}</MenuItem>
                            )}
                        </TextField>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            {submitMessage}
                        </Button>
                    </FormControl>
                </Box>
            </Modal>
        </>
    )
}
