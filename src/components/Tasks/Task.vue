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
          :class="{ 'text-strikethrough' : task.completed}">
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
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
          <q-btn
            @click.stop='promptToDelete(id)'
            flat
            round
            dense
            color="red"
            icon="delete" />
        </q-item-section>        
      </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['task','id'],
    methods: {
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
    }
}
</script>

<style scoped>

</style>