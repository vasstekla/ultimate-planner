import { Grid, Paper, Box, Typography } from '@mui/material';
import Task from './Task';
import { ITask, ITaskList } from '../../models/ITask';
import { useState } from 'react';
import NewTaskModalContainer from './NewTaskModalContainer';
import { daysOfTheWeek, tasks } from '../../TestData';

export default function TaskContainer() {

  const [tasksList, setTaskList] = useState(tasks)

  let taskDelete = (id: string) => {
    setTaskList(tasksList.filter(task => task.id !== id))
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
                    <Task key={task.id} task={task} onTaskDelete={taskDelete} />
                  )}
                </Grid>
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
      <NewTaskModalContainer />
    </>
  )
}