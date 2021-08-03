<template>
    <div class="row q-mb-sm">
        <!-- @input="$emit('update:name', pass the text the users entered)" @input = event input /v.on:input/click -->
        <q-input
        outlined
        :value="name"
        @input="$emit('update:name', $event)"
        :rules="[val => !!val || 'Field is required']"
        autofocus
        ref="name"
        label="Task name"
        class="col" >
            <template v-slot:append>
                <q-icon
                v-if="name"
                @click="$emit('update:name', '')"
                name="close"
                class="cursor-pointer" />
            </template>
        </q-input>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style>

</style>