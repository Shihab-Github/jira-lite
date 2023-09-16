<template>
    <v-container>
        <v-row no-gutters>
            <v-col md="6" cols="12">
                <v-text-field class="mr-2" v-model="card.title" density="compact" variant="solo-filled"
                    placeholder="Enter title" label="Title"></v-text-field>
            </v-col>
            <v-col md="6" cols="12">
                <v-select density="compact" v-model="card.status" 
                placeholder="Select status"
                label="Select status"
                variant="solo-filled" 
                item-value="value"
                item-title="title"
                :items="statuses"></v-select>
            </v-col>
            <v-col md="12" cols="12">
                <v-textarea label="Description" v-model="card.description" density="compact" variant="solo-filled"
                    placeholder="Enter task description"></v-textarea>
            </v-col>
            <v-col md="6" cols="12">
                <v-select chips class="mr-2" density="compact" variant="solo-filled" label="Labels"
                    placeholder="Select labels" v-model="card.labels" item-title="value" item-value="value"
                    :items="fixedLabels" multiple></v-select>
            </v-col>
            <v-col md="6" cols="12">
                <VueDatePicker input-class-name="custom-height v-field--variant-solo-filled v-field--variant-solo"
                    label="Select Date" v-model="card.estimatedDate" dark placeholder="Enter estimation date" text-input />
            </v-col>
        </v-row>
    </v-container>
    <v-divider></v-divider>
<div class="d-flex pa-3 flex-row-reverse flex-item-gap w-100">
        <v-btn variant="tonal" @click="toggle($event, createTask)">Save</v-btn>
        <v-btn variant="text" @click="toggle($event)">Cancel</v-btn>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import useLabels from '@/composables/useLabels'
import useAddCard from '@/composables/useAddCard'
const { toggle } = defineProps({
    toggle: Function
})

const statuses = ref([
    {
        title: 'Pending',
        value: 'todo'
    },
    {
        title: 'Processing',
        value: 'doing'
    },
    {
        title: 'Done',
        value: 'done'
    }
])

const { fixedLabels } = useLabels()
const { card, createTask } = useAddCard()

</script>

<style>
.custom-height {
    height: 47px;
}
</style>