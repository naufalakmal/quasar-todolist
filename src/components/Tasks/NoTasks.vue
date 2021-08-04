<template>
    <q-banner class="bg-grey-3 text-right">
        <template v-slot:avatar>
            <q-icon name="check" color="primary" />
            <span class="q-ml-md">No tasks to do today!</span>
        </template>
        <template>
            <q-btn
                @click="$emit('showAddTask')"
                flat
                color="primary"
                label="Add Tasks" />
        </template>
    </q-banner>
</template>

<script>
export default {

}
</script>

<style>

</style>