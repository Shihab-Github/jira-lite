<template>
    <v-sheet rounded elevation="5" class="pa-3">
        <div class="d-flex justify-space-between align-center">
            <div class="text-subtitle-2">{{name}}</div>
            <v-btn size="x-small" icon @click="">
                <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
        </div>
        <div class="d-flex mt-3">
            <v-btn block prepend-icon="mdi-plus">Add a new card</v-btn>
        </div>
    </v-sheet>
</template>

<script setup>
const { name } = defineProps({
    name: String
})

console.log('column name: ', name)
</script>