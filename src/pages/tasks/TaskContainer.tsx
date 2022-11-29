import { Grid, Paper, Box, Typography, Button } from '@mui/material';
import Task from './Task';
import { ITask } from '../../models/ITask';
import { useState } from 'react';
import TaskModal from './TaskModal';
import { daysOfTheWeek, tasks } from '../../TestData';

export default function TaskContainer() {

  const [tasksList, setTaskList] = useState(tasks)
  const [openCreate, setOpenCreate] = useState(false)
  const [openUpdate, setOpenUpdate] = useState(false)
  const [task, setTask] = useState({
    id: '',
    name: '',
    description: '',
    category: '',
    priority: 0,
    day: '',
    status: ''
  } as ITask)

  const taskDelete = (id: string) => {
    setTaskList(tasksList.filter(task => task.id !== id))
  }

  const taskCreate = (task: ITask) => {
    let newTaskList = [...tasksList]
    newTaskList.push(task)
    setTaskList(newTaskList)
  }

  const taskUpdate = (task: ITask) => {
    let newTaskList = [...tasksList]
    newTaskList[newTaskList.findIndex(taskListItem => taskListItem.id === task.id)] = task
    setTaskList(newTaskList)
  }

  const onOpenUpdate = (open: boolean) => {
    setOpenUpdate(open)
  }

  const onOpenCreate = (open: boolean) => {
    setOpenCreate(open)
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Grid container>
          {daysOfTheWeek.map(days =>
            <Grid key={days} item xs>
              <Paper>
                <Typography mt={2} variant="h5">
                  {days}
                </Typography>
              </Paper>
              <Box sx={{ width: '100%' }}>
                <Grid container style={{ 'flexDirection': 'column' }}>
                  {tasksList.filter(task => task.day === days).map(task =>
                    <div onClick={() => { onOpenUpdate(true); setTask(task) }}>
                      <Task key={task.id} task={task} onTaskDelete={taskDelete} />
                    </div>
                  )}
                </Grid>
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
      <Button onClick={() => onOpenCreate(true)}> New Task </Button>
      <TaskModal onSubmit={taskCreate} isOpen={openCreate} updateIsOpen={onOpenCreate} submitMessage="Add Task" task={task} />
      <TaskModal onSubmit={taskUpdate} isOpen={openUpdate} updateIsOpen={onOpenUpdate} task={task} submitMessage="Update Task" />

    </>
  )
}