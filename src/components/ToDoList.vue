<script setup lang="ts">
import DataTable from './DataTable.vue';

</script>

<template>
  <h1>My ToDo List</h1>
  <Suspense>
  <DataTable />

  <template #fallback> Loading ToDoList... </template>
  </Suspense>
  
</template>

<!-- <style scoped>


</style> -->
