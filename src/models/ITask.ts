export interface ITask {
    id: string,
    name: string,
    description: string,
    category: string,
    priority: number,
    day: string,
    status: string
}

export interface ITaskList extends Array<ITask> { }
