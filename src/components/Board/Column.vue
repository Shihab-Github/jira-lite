<template>
    <v-sheet rounded elevation="5" class="pa-3">
        <div class="d-flex justify-space-between align-center">
            <div class="text-subtitle-2">{{name}}</div>
            <v-btn size="x-small" icon @click="">
                <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
        </div>
        <v-textarea bg-color="blue-grey-darken-4" v-if="addingCard" rows="1" row-height="15" placeholder="Enter title for this card" variant="outlined"></v-textarea>
        <div v-if="!addingCard" class="d-flex mt-2">
            <v-btn block prepend-icon="mdi-plus" @click="toggleAddCard">Add a new card</v-btn>
        </div>
    </v-sheet>
</template>

<script setup>
import useAddCard from '../../composables/useAddCard';

const { name } = defineProps({
    name: String
})

const { addingCard, toggleAddCard } = useAddCard()


console.log('column name: ', name)
</script>