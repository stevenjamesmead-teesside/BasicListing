type ProgressStatus = "not started" | "in progress" | "finished"

interface IToDo {
    id: number
    progressStatus: ProgressStatus
    title: string
    description: string
}

type ToDoList = Array<IToDo>

export type { IToDo, ToDoList }