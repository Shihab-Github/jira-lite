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
            <v-icon>mdi-reorder-horizontal</v-icon>
            <div v-if="!fields.desc" @click="fields.desc = true" class="text-grey-2">{{ selectedCard.description ?
                selectedCard.description : 'Add a more detailed description' }}</div>
            <v-textarea v-if="fields.desc" autofocus v-model="selectedCard.description" rows="1" variant="underlined"
                placeholder="Add a detailed description"></v-textarea>
            <v-btn v-if="fields.desc" density="compact" icon="mdi-check" @click="update('desc')"></v-btn>
            <v-btn v-if="fields.desc" density="compact" icon="mdi-cancel" @click="cancelDesc"></v-btn>
        </div>

        <div class="d-flex align-center mt-4" style="gap: 8px;">
            <v-icon>mdi-label-outline</v-icon>
            <v-btn size="x-small" class="rounded-xl">Add labels to card</v-btn>

        </div>
        <v-card class="mt-2" width="300">
            <v-card-item>
                <div>One</div>
                <div>One</div>
            </v-card-item>
        </v-card>

    </v-sheet>
</template>

<script setup>
import useEditCard from '@/composables/useEditCard';

const props = defineProps(['card', 'col'])

const {
    selectedCard,
    fields,
    update,
    cancelTtitle,
    cancelDesc
}
    = useEditCard(props.card, props.col)
</script>