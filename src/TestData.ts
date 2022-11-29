import { ITaskList } from "./models/ITask"

export const daysOfTheWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
]

export const categories = [
    'School', 'Work', 'Personal'
]

export const categoriesColor = {
    'School': 'red',
    'Work': 'blue',
    'Personal': 'green'
}

export const tasks: ITaskList = [
    { id: '1', name: 'English homework', description: 'Do a,b,c', category: 'School', priority: 1, day: 'Monday', status: 'New' },
    { id: '2', name: 'Geography homework', description: 'Do a,b,c', category: 'School', priority: 1, day: 'Monday', status: 'New' },
    { id: '3', name: 'History homework', description: 'Do a,b,c', category: 'School', priority: 1, day: 'Monday', status: 'New' },
    { id: '4', name: 'Math homework', description: 'Do 1,2,3', category: 'School', priority: 1, day: 'Tuesday', status: 'New' },
]