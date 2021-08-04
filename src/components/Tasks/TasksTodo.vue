<template>
    <div>
        <list-header bgColor="bg-blue-grey-4">Todo</list-header>
        <q-list
        separator
        bordered>
            <task
                v-for="(task, key) in tasksTodo"
                :key="key"
                :task="task"
                :id="key">
            </task>
        </q-list>
    </div>
</template>

<script>
export default {
    props: ['tasksTodo'],
    components: {
        'task': require("components/Tasks/Task.vue").default,
        'list-header': require("components/Tasks/Modals/Shared/ListHeader.vue").default,
    }
}
</script>

<style>

</style>