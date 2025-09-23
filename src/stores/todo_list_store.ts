import { defineStore } from "pinia"
import type { ToDoList } from "@/todo/IToDo"

// const fakeList = () => {
//     return new Promise<ToDoList>((resolve) => {
//             const toDoList = new Array<IToDo>()

//             toDoList.push({
//                     id: 1,
//                     progressStatus: "not started",
//                     title: "Shopping",
//                     description: "Don't forget milk...!!!"
//                 })

//             toDoList.push({
//                 id: 2,
//                 progressStatus: "in progress",
//                 title: "Lecture Slides",
//                 description: "Write a lecture on all things blue"
//             })
            
//             resolve(toDoList)
//         }
//     )
// }

export const useToDoListStore = defineStore('todos', {
    state: () => ({ toDoList: [] as ToDoList }),

    actions: {
        async fetchToDoList() : Promise<boolean> {
            // this.toDoList = await fakeList()
            // const response = await fetch('http://127.0.0.1:7071/api/GetToDoList/')
            const response = await fetch('https://week1-lab-sjm01-func.azurewebsites.net/api/gettodolist')

            if(response.ok) {
                const data = await response.json()

                this.toDoList = data as ToDoList

                console.log(this.toDoList)
            }

            return response.ok
        },

        deleteToDoItem(id: number) {
            const index = this.toDoList.findIndex((item) => item.id == id)

            if(index != -1) {
                this.toDoList.splice(index, 1)
            }
        }
    }
})