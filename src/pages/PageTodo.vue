<template>
  <q-page class="q-ma-md">
    
    <no-tasks
      @showAddTask="showAddTask = true"
      v-if="!Object.keys(tasksTodo).length"></no-tasks>
    
    <tasks-todo
      v-else
      :tasksTodo="tasksTodo" />

    <q-linear-progress size="20px" :value="progressTask" class="q-my-md">
    <div class="absolute-full flex flex-center" v-if="Object.keys(tasksCompleted).length">
        <q-badge color="white" text-color="primary" :label="labelTask" />
      </div>
    </q-linear-progress>

    <tasks-completed
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted" />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", 'tasksCompleted']),
    progressTask() {
      let tasksTodo = Object.keys(this.tasksTodo).length
      let tasksCompleted = Object.keys(this.tasksCompleted).length
      if(tasksCompleted == 0 && tasksTodo == 0 ){
        return 0;
      }else{
        return tasksCompleted / (tasksCompleted+tasksTodo)
      }
    },
    labelTask(){
      let tasksTodo = Object.keys(this.tasksTodo).length
      let tasksCompleted = Object.keys(this.tasksCompleted).length
      let total = (tasksCompleted / (tasksCompleted+tasksTodo) * 100).toFixed(2) + '%'
      return total;
    }
  },
  components: {
    "add-task": require("components/Tasks/Modals/AddTask.vue").default,
    "tasks-todo": require("components/Tasks/TasksTodo.vue").default,
    "tasks-completed": require("components/Tasks/TasksCompleted.vue").default,
    "no-tasks": require("components/Tasks/NoTasks.vue").default
  }
};
</script>

<style scoped></style>
