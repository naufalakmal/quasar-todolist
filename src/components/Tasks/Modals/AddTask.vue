<template>
    <q-card>  

        <modal-header>Add Task</modal-header>

        <form @submit.prevent="submitForm">
            <q-card-section class="q-pt-none">

                <!-- kirim props || sync buat sinkronise ke taskToSubmit biar sama -->
                <modal-task-name :name.sync="taskToSubmit.name" ref="modalTaskName" />

                <modal-due-date
                  :dueDate.sync="taskToSubmit.dueDate"
                  @clear="clearDueDate" />

                <modal-due-time
                  :dueTime.sync="taskToSubmit.dueTime"
                  v-if="taskToSubmit.dueDate" />

            </q-card-section>

           <modal-buttons></modal-buttons>

            <!-- <pre>{{taskToSubmit}}</pre> -->
        </form>

    </q-card>
</template>

<script>
import { mapActions } from "vuex"

export default {
    
    data() {
        return {
            taskToSubmit: {
                name: '',
                dueDate: '',
                dueTime: '',
                completed: false
            }
        }
    },
    methods: {
        //mapping action dari store-tasks lalu acion yg mau di map apa
        ...mapActions('tasks', ['addTask']),
        submitForm() {
            this.$refs.modalTaskName.$refs.name.validate()
            // console.log(this.$refs.name)
            if (!this.$refs.modalTaskName.$refs.name.hasError) {
                this.submitTask()
            }
        },
        submitTask() {
            this.addTask(this.taskToSubmit)
            this.$emit('close')
        },
        clearDueDate() {
            this.taskToSubmit.dueDate = ''
            this.taskToSubmit.dueTime = ''
        }
    },
    components: {
        'modal-header' : require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
        'modal-task-name' : require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
        'modal-due-date' : require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
        'modal-due-time' : require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,
        'modal-buttons' : require('components/Tasks/Modals/Shared/ModalButtons.vue').default
    }
}
</script>
        ModalDueDate

<style>

</style>