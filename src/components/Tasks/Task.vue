<template>
    <q-item 
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
</template>

<script>
export default {
    props: ['task','id']
}
</script>

<style scoped>

</style>