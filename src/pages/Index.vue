<template>
  <q-page padding>
    <ul>
      <task
      v-for="(task, index) in tasks"
      :key="task.id"
      :task="task"
      :index="index"
      :method="deleteTask">
      {{ task.name }}
      </task>
    </ul>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        tasks: [
          {
            id: 1,
            name: 'Go to shop',
            dueDate: '2021/04/05',
            dueTime: '18:30'
          },
          {
            id: 2,
            name: 'Get bananas',
            dueDate: '2021/04/06',
            dueTime: '18:00'
          },
          {
            id: 3,
            name: 'Get Apples',
            dueDate: '2021/04/07',
            dueTime: '17:30'
          }
        ]
      }
    },
    methods: {
      deleteTask(index) {
        this.tasks.splice(index, 1);
      }
    },
    components: {
      'task' : require('components/Task.vue').default
    }
  }
</script>

<style scoped>
  
</style>
