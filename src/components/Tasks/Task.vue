<template>
    <q-item 
      @click="updateTask({ id: id, updates: { completed: !task.completed } })"
      :class="!task.completed ? 'bg-grey-1' : 'bg-green-11' "
      clickable
      v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed"/>
        </q-item-section>

        <q-item-section>
          <q-item-label
          :class="{ 'text-strikethrough' : task.completed }">
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section
        v-if="task.dueDate"
        side>
          <div class="row">
            <div class="column justify-center">
              <q-icon
              name="events"
              size="20px"/>
            </div>
            <div class="column">
              <q-item-label
              class="row justify-end"
              caption>
                {{ task.dueDate }}
              </q-item-label>
              <q-item-label 
              class="row justify-end"
              caption>
                <small>{{ task.dueTime }}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>

        <q-item-section side>
          <div class="row">
          <q-btn
            @click.stop='showEditTask = true'
            flat
            round
            dense
            color="primary"
            icon="edit" />
          <q-btn
            @click.stop='promptToDelete(id)'
            flat
            round
            dense
            color="red"
            icon="delete" />
          </div>
        </q-item-section>        

      <q-dialog v-model="showEditTask">
        <edit-task
          :id="id"
          :task="task"
          @close="showEditTask = false" />
      </q-dialog>

      </q-item>

</template>

<script>
import { mapActions } from 'vuex'

export default {
    // dari store
    props: ['task','id'],
    data() {
      return {
        showEditTask: false
      }
    },
    methods: {
      // mapActions ngambil data action dari store-tasks
      ...mapActions('tasks', ['updateTask','deleteTask']),
      promptToDelete(id) {
          this.$q.dialog({
            title: 'Confirm',
            message: 'Yakin ingin menghapusnya?',
            cancel: true,
            persistent: true
          }).onOk(() => {
            this.deleteTask(id)
          })
      }
    },
    components :{
      'edit-task' : require('components/Tasks/Modals/EditTask.vue').default
    }
}
</script>

<style scoped>

</style>