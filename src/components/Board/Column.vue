<template>
    <v-sheet @dragover.prevent="dragOver" @drop="dragEnter($event, name)" rounded elevation="5" class="pa-3"
        :data-col-name="name">
        <div class="d-flex justify-space-between align-center mb-1">
            <div class="text-subtitle-2">{{ title }}</div>
            <v-btn size="x-small" icon @click="">
            <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
        </div>

        <div>
            <v-sheet draggable="true" @dragstart="dragStart($event, item, name)" @dragend="dragEnd" v-for="item in tasks"
                :key="item.id" :style="{ border: item.highlighted ? '2px solid yellow' : 'none' }" elevation="1"
                class="pa-2 mb-2" color="info" rounded>
                <div class="d-flex justify-space-between align-center">
                    <div>
                        <v-chip size="x-small" v-for="chip in item.labels" :style="{ background: chip.color }" class="mr-1" text-color="white">
                            {{ chip.value }}
                        </v-chip>
                        <br v-if="item.labels.length > 0" />
                        <router-link :to="{ name: 'TaskDetail', params: { id: item.id, col: name } }"
                            class="text-body-2 font-weight-bold text-white">{{ item.title }}</router-link>
                    </div>
                    <v-btn variant="text" density="compact" icon="mdi-pencil" @click="onEditCard(item)"></v-btn>
                </div>
            </v-sheet>
        </div>

        <v-text-field autofocus v-model="card.title" @keyup.enter="addCard" bg-color="blue-grey-darken-4" v-if="addingCard"
            class="mt-1" placeholder="Enter title for this card" variant="outlined"></v-text-field>
        <div v-if="!addingCard" class="d-flex mt-2">
            <v-btn block prepend-icon="mdi-plus" @click="toggleAddCard">Add a new card</v-btn>
        </div>
        <div v-if="addingCard" class="d-flex align-center" style="gap: 8px;">
            <v-btn color="#4f545c" density="compact" @click="addCard">Add card</v-btn>
            <v-btn color="#4f545c" density="compact" icon="mdi-cancel" @click="toggleAddCard"></v-btn>
        </div>
    </v-sheet>

    <Dialog :open="showEditDialog" :showFooter="true" :toggleDialog="toggleDialog">
        <Card :card="selectedCard" :col="name" />
    </Dialog>
</template>

<script setup>
import { computed } from 'vue'
import Dialog from '@/components/Dialog'
import Card from '@/components/Card'
import useAddCard from '@/composables/useAddCard';
import useDragAndDrop from '@/composables/useDragAndDrop'
import useDialog from '@/composables/useDialog'
import useEditCard from '@/composables/useEditCard'
import { useBoardStore } from '@/store/board';

const { name, title } = defineProps({
    name: String,
    title: String
})

const boardStore = useBoardStore()
const { card, addingCard, toggleAddCard, addCard } = useAddCard(name)
const { dragEnd, dragEnter, dragOver, dragStart } = useDragAndDrop()
const { showEditDialog, toggleDialog } = useDialog()
const { selectedCard, editCard } = useEditCard()
const tasks = computed(() => boardStore[`${name}s`])

const onEditCard = (item) => {
    editCard(item)
    toggleDialog()
}

</script>

<style>
.matched {
    border: 2px solid yellow;
}
</style>