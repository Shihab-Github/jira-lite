<template>
    <v-container>
        <v-row no-gutters>
            <v-col md="6" cols="12">
                <v-text-field class="mr-2" v-model="card.title" density="compact" variant="solo-filled"
                    placeholder="Enter title" label="Title"></v-text-field>
            </v-col>
            <v-col md="6" cols="12">
                <v-select density="compact" v-model="card.status" placeholder="Select status" label="Select status"
                    variant="solo-filled" item-value="value" item-title="title" :items="statuses"></v-select>
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

            <div class="d-flex align-center w-100">
                <div class="mr-1">
                    <v-icon>mdi-attachment</v-icon>
                </div>
                <div class="text-subtitle-2 flex-grow-1" style="margin-top: 3px;">Attachments</div>
                <div>
                    <input type="file" @change="previewFile" id="actual-btn" hidden />
                    <label class="clabel" for="actual-btn">Choose File</label>
                </div>
            </div>

            <v-col md="4" class="rounded-lg mt-2" v-for="item in card.attachments" :key="item.id" cols="12">
                <v-sheet elevation="12" class="d-flex align-center flex-item-gap ma-2">
                    <v-img min-width="100" max-width="100" min-height="100" max-height="100"
                        aspect-ratio="16/9" cover
                        :src="item.previewUrl">
                    </v-img>
                    <div>
                        <div class="font-weight-bold text-caption">{{ item.name }}</div>
                        <v-btn size="x-small" variant="tonal" @click="deleteFile(item.id)">Delete</v-btn>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
    <v-divider></v-divider>
    <div class="d-flex pa-3 flex-row-reverse flex-item-gap w-100">
        <v-btn variant="tonal" @click="toggle($event, createTask)" :disabled="!card.title">Save</v-btn>
        <v-btn variant="text" @click="toggle($event)">Cancel</v-btn>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import useLabels from '@/composables/useLabels'
import useAddCard from '@/composables/useAddCard'
import useAttachment from '@/composables/useAttachment';

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
const { previewFile, deleteFile } = useAttachment(card)

</script>

<style>
.custom-height {
    height: 47px;
}

.clabel {
    background-color: #A1BDD914;
    color: #fff;
    padding: 0.5rem;
    font-family: sans-serif;
    border-radius: 0.3rem;
    cursor: pointer;
    margin-top: 1rem;
}

#file-chosen {
    margin-left: 0.3rem;
    font-family: sans-serif;
}
</style>