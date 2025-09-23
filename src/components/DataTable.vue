<script setup lang="ts">
import { useToDoListStore } from "../stores/todo_list_store"
import type { IToDo } from "../todo/IToDo"

const toDoListStore = useToDoListStore()

const fetchSuccess = await toDoListStore.fetchToDoList()

const deleteItem = (item: IToDo) => {

  if(confirm(`Do you really want to delete item ${item.title}`)) {
    toDoListStore.deleteToDoItem(item.id)

    // alert(`Deleted Item ${item.title}`)
  }

}
</script>

<template>
    <div v-if="fetchSuccess">
    <table dataTable>
      <thead>
        <tr>
          <th>Status</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo_item in toDoListStore.toDoList">
          <td>{{ todo_item.progressStatus }}</td>
          <td>{{ todo_item.title }}</td>
          <td>{{ todo_item.description }}</td>
          <td class="actions"><a href="#" @click.once="deleteItem(todo_item)">Delete Item {{ todo_item.id }}</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="error" >
    Unable to fetch data
  </div>
</template>

<style scoped>
table[dataTable] {
  width: 100%;
  border-collapse: collapse;

  th {
    background-color: black;
    color: white;
  }
  td, th {
    border: 1px solid black;
  }
}
</style>