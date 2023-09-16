<template>
    <v-sheet class="pa-4" color="grey-darken-3">
        <div class="d-flex align-center" style="gap: 8px;">
            <v-icon>mdi-card-text-outline</v-icon>
            <div v-if="!fields.title" @click="fields.title = true" class="text-h6">{{ selectedCard.title }}</div>
            <v-text-field v-if="fields.title" autofocus v-model="selectedCard.title" variant="underlined" density="compact"
                single-line></v-text-field>
            <v-btn v-if="fields.title" density="compact" icon="mdi-check" @click="update('title')"></v-btn>
            <v-btn v-if="fields.title" density="compact" icon="mdi-cancel" @click="cancelTtitle"></v-btn>
        </div>

        <div class="d-flex align-center mt-4" style="gap: 8px;">
            <v-icon :style="{alignSelf: selectedCard.description ? 'flex-start' : 'center'}">mdi-reorder-horizontal</v-icon>
            <div v-if="!fields.desc" @click="fields.desc = true" class="text-grey-2">{{ selectedCard.description ?
                selectedCard.description : 'Add a more detailed description' }}</div>
            <v-textarea v-if="fields.desc" autofocus v-model="selectedCard.description" rows="1" variant="underlined"
                placeholder="Add a detailed description"></v-textarea>
            <v-btn v-if="fields.desc" density="compact" icon="mdi-check" @click="update('desc')"></v-btn>
            <v-btn v-if="fields.desc" density="compact" icon="mdi-cancel" @click="cancelDesc"></v-btn>
        </div>

        <div class="d-flex align-center mt-4" style="gap: 8px;">
            <v-icon>mdi-label-outline</v-icon>
            <v-btn size="x-small" class="rounded-xl" @click="showLabel = !showLabel">Add labels to card</v-btn>
        </div>
        <div v-if="selectedCard.labels.length > 0" class="d-flex align-center mt-2" style="gap: 8px;">
            <v-icon></v-icon>
            <v-chip v-for="item in selectedCard.labels" :style="{background: item.color}" text-color="white">
                {{item.value}}
            </v-chip>
        </div>
        <div class="d-flex align-center" style="gap: 8px;" v-if="showLabel">
            <v-icon></v-icon>
            <v-card class="mt-2" width="300">
                <div class="pa-3">
                    <div v-for="item in fixedLabels" :key="item.color" style="gap: 8px;" class="d-flex align-center mb-2">
                        <input type="checkbox" v-model="item.checked" :value="item.color" />
                        <v-sheet class="w-100 pa-1 rounded" height="35" :color="item.color">
                            <div class="text-caption">{{ item.value }}</div>
                        </v-sheet>
                    </div>
                </div>
                <v-divider></v-divider>
                <div class="pa-2 d-flex flex-row-reverse">
                    <v-btn variant="tonal" size="small" @click="saveLabels">
                        Save
                    </v-btn>
                    <v-btn variant="text" size="small">
                        Cancel
                    </v-btn>
                </div>
            </v-card>
        </div>


    </v-sheet>
</template>

<script setup>
import useEditCard from '@/composables/useEditCard';
import useLabels from '@/composables/useLabels';

const props = defineProps(['card', 'col'])

const {
    selectedCard,
    fields,
    update,
    cancelTtitle,
    cancelDesc
} = useEditCard(props.card, props.col)

const { fixedLabels, saveLabels, showLabel } = useLabels(selectedCard)

</script>