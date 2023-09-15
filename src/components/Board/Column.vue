<template>
    <v-sheet @dragover.prevent="dragOver" @drop="dragEnter(event, name)" :id="name" rounded elevation="5" class="pa-3" :data-col-name="name">
        <div class="d-flex justify-space-between align-center mb-1">
            <div class="text-subtitle-2">{{ title }}</div>
            <v-btn size="x-small" icon @click="">
                <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
        </div>

        <div>
            <v-sheet draggable="true" @dragstart="dragStart" @dragend="dragEnd" v-for="item in tasks" :key="item.id" elevation="1"
                class="pa-3 mb-2" color="info" rounded>
                <div class="text-body-2">{{ item.title }}</div>
            </v-sheet>
        </div>


        <v-textarea autofocus v-model="card.title" bg-color="blue-grey-darken-4" v-if="addingCard" class="mt-1" rows="1"
            row-height="15" placeholder="Enter title for this card" variant="outlined"></v-textarea>
        <div v-if="!addingCard" class="d-flex mt-2">
            <v-btn block prepend-icon="mdi-plus" @click="toggleAddCard">Add a new card</v-btn>
        </div>
        <div v-if="addingCard" class="d-flex align-center" style="gap: 8px;">
            <v-btn color="#4f545c" density="compact" @click="addCard">Add card</v-btn>
            <v-btn color="#4f545c" density="compact" icon="mdi-cancel" @click="toggleAddCard"></v-btn>
        </div>
    </v-sheet>
</template>

<script setup>
import useAddCard from '../../composables/useAddCard';
import useDragAndDrop from '../../composables/useDragAndDrop'

const { name } = defineProps({
    name: String,
    title: String
})

const { tasks, card, addingCard, toggleAddCard, addCard } = useAddCard(name)
const { dragEnd, dragEnter, dragOver, dragStart } = useDragAndDrop(name)

</script>