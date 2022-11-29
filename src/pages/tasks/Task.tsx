import { Grid, Card, CardContent, CardActions, Button, Typography, IconButton } from "@mui/material";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ITask } from "../../models/ITask";
import { useState } from "react";

interface TaskContainerProps {
    task: ITask,
    onTaskDelete: Function
}

const statuses = {
    'Cancelled': 'blue',
    'Done': 'yellow',
    'DoneOnTime': 'green'
}

export default function Task(props: TaskContainerProps) {
    const { task, onTaskDelete } = props
    let [currTask, setCurrTask] = useState(task)

    let onChangeStatus = (newStatus: string) => {
        if (newStatus === currTask.status) {
            newStatus = 'New'
        }
        setCurrTask(prevTask => ({ ...prevTask, status: newStatus }))
    }

    return (
        <Grid key={task.id} item xs>
            <Card sx={{ minWidth: 275 }} style={{ 'backgroundColor': statuses[currTask.status as keyof typeof statuses] }}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {task.name}
                    </Typography>
                    <Typography variant="body1">
                        {task.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={() => onTaskDelete(task.id)} aria-label="delete">
                        <DeleteOutlineIcon />
                    </IconButton>
                    <IconButton onClick={() => onChangeStatus('Cancelled')} aria-label="cancel">
                        <CloseIcon />
                    </IconButton>
                    <IconButton onClick={() => onChangeStatus('Done')} aria-label="done but not on time">
                        <DoneIcon />
                    </IconButton>
                    <IconButton onClick={() => onChangeStatus('DoneOnTime')} aria-label="done on time">
                        <DoneAllIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}