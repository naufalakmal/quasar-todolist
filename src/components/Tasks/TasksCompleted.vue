<template>
  <div>
    <list-header bgColor="bg-primary">Completed</list-header>
    <q-list
      separator
      bordered>
        <task
          v-for="(task, key) in tasksCompleted"
          :key="key"
          :task="task"
          :id="key">
        </task>
      </q-list>
  </div>
</template>

<script>
export default {
    props: ['tasksCompleted'],
    components: {
        'task': require("components/Tasks/Task.vue").default,
        'list-header': require("components/Tasks/Modals/Shared/ListHeader.vue").default,
    }
}
</script>

<style>

</style>