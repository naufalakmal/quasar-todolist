<template>
  <q-page class="q-ma-md">
    <q-list
    separator
    bordered>

      <q-item 
      v-for="task in tasks"
      :key="task.id"
      @click="task.completed = !task.completed"
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

      </q-item>

    </q-list>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        tasks: [
          {
            id: 1,
            name: 'Makan',
            completed: false,
            dueDate: '2021/04/05',
            dueTime: '15:30'
          },
          {
            id: 2,
            name: 'Kajian',
            completed: false,
            dueDate: '2021/04/06',
            dueTime: '19:30'
          },
          {
            id: 3,
            name: 'Belajar',
            completed: false,
            dueDate: '2021/04/07',
            dueTime: '12:30'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
