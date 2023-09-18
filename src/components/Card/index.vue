<template>
    <v-sheet class="pa-4" color="grey-darken-3">
        <div class="d-flex align-center" style="gap: 8px;">
            <v-icon>mdi-card-text-outline</v-icon>
            <div v-if="!fields.title" @click="fields.title = true" class="text-h6">{{ selectedCard.title }}</div>
            <v-icon size="x-small" v-if="!fields.title" @click="fields.title = true">mdi-pencil</v-icon>
            <v-text-field v-if="fields.title" autofocus v-model="selectedCard.title" variant="underlined" density="compact"
                single-line></v-text-field>
            <v-btn v-if="fields.title" density="compact" icon="mdi-check" @click="update('title')"></v-btn>
            <v-btn v-if="fields.title" density="compact" icon="mdi-cancel" @click="cancelTtitle"></v-btn>
        </div>

        <div class="d-flex align-center mt-4" style="gap: 8px;">
            <v-icon
                :style="{ alignSelf: selectedCard.description ? 'flex-start' : 'center' }">mdi-reorder-horizontal</v-icon>
            <div v-if="!fields.desc" @click="fields.desc = true" class="text-grey-2 text-body-2">{{ selectedCard.description
                ?
                selectedCard.description : 'Add a more detailed description' }}</div>
            <v-icon size="x-small" v-if="!fields.desc" @click="fields.desc = true">mdi-pencil</v-icon>
            <v-textarea v-if="fields.desc" autofocus v-model="selectedCard.description" rows="1" variant="underlined"
                placeholder="Add a detailed description"></v-textarea>
            <v-btn v-if="fields.desc" density="compact" icon="mdi-check" @click="update('desc')"></v-btn>
            <v-btn v-if="fields.desc" density="compact" icon="mdi-cancel" @click="cancelDesc"></v-btn>
        </div>

        <div class="d-flex align-center mt-4" style="gap: 8px;">
            <v-icon>mdi-calendar-blank-outline</v-icon>
            <div v-if="!fields.date" @click="fields.date = true" class="text-body-2">{{ selectedCard.estimatedDate ?
                formateDate(selectedCard.estimatedDate) : 'Add estimation date' }}</div>
            <v-icon size="x-small" v-if="!fields.date" @click="fields.date = true">mdi-pencil</v-icon>
            <VueDatePicker v-if="fields.date" dark v-model="selectedCard.estimatedDate" placeholder="Enter estimation date"
                text-input />
            <v-btn v-if="fields.date" density="compact" icon="mdi-check" @click="update('date')"></v-btn>
            <v-btn v-if="fields.date" density="compact" icon="mdi-cancel" @click="cancelDate"></v-btn>
        </div>

        <div class="d-flex align-center mt-4" style="gap: 8px;">
            <v-icon>mdi-label-outline</v-icon>
            <v-btn size="x-small" class="rounded-xl" @click="showLabel = !showLabel">Add labels to card</v-btn>
        </div>
        <div v-if="selectedCard.labels.length > 0" class="d-flex align-center mt-2" style="gap: 8px;">
            <v-icon></v-icon>
            <v-chip v-for="item in selectedCard.labels" :style="{ background: item.color }" text-color="white">
                {{ item.value }}
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
                    <v-btn variant="text" size="small" @click="showLabel = false">
                        Cancel
                    </v-btn>
                </div>
            </v-card>
        </div>

        <div class="d-flex align-center mt-4 w-100" style="gap: 8px;">
            <v-icon>mdi-attachment</v-icon>
            <div class="text-body-1 flex-grow-1">Attachments</div>
            <div>
                <input type="file" @change="previewFile" id="actual-btn" hidden />
                <label class="clabel" for="actual-btn">Upload File</label>
            </div>
        </div>

        <div class="d-flex mt-2">
            <v-icon></v-icon>
            <div class="w-100 d-flex flex-wrap">
                <v-sheet v-for="item in selectedCard.attachments" :key="item.id" elevation="6"
                    class="d-flex rounded align-center flex-item-gap ma-1 pa-1">
                    <v-img min-width="100" max-width="100" min-height="100" max-height="100" aspect-ratio="16/9" cover
                        :src="item.previewUrl">
                    </v-img>
                    <div>
                        <div class="font-weight-bold text-caption">{{ item.name }}</div>
                        <v-btn size="x-small" variant="tonal" @click="deleteFile(item.id)">Delete</v-btn>
                    </div>
                </v-sheet>
            </div>
        </div>


        <div class="d-flex align-center mt-4" style="gap: 8px;">
            <v-icon>mdi-comment-outline</v-icon>
            <div class="text-body-1">Activity</div>
        </div>

        <div class="mt-4 d-flex align-center flex-item-gap">
            <v-avatar color="teal-darken-4" class="align-self-start" size="small">
                <span class="text-h5">R</span>
            </v-avatar>
            <div class="w-100">
                <v-text-field placeholder="Write a comment..." @keyup.enter="addComment" v-model="comment" density="compact"
                    variant="solo-filled"></v-text-field>
                <v-btn size="small" class="mr-1" @click="addComment">Save</v-btn><v-btn @click="cancelComment"
                    variant="text" size="small">Cancel</v-btn>
            </div>
        </div>
        <div class="mt-4" v-if="card.comments.length > 0">
            <div class="d-flex flex-item-gap mt-3" v-for="(item, index) in card.comments" :key="index">
                <v-avatar color="teal-darken-4" class="align-self-start" size="small">
                    <span class="text-h5">R</span>
                </v-avatar>
                <div class="d-block pa-2 w-100 bg-grey-darken-4 rounded">
                    {{ item }}
                </div>
            </div>
        </div>
    </v-sheet>
</template>

<script setup>
import useEditCard from '@/composables/useEditCard';
import useLabels from '@/composables/useLabels';
import useComment from '@/composables/useComment'
import useAttachment from '@/composables/useAttachment';

const props = defineProps(['card', 'col'])

const {
    selectedCard,
    fields,
    update,
    cancelTtitle,
    cancelDesc,
    cancelDate
} = useEditCard(props.card, props.col)

const { fixedLabels, saveLabels, showLabel } = useLabels(selectedCard, props.col)

const { comment, addComment, cancelComment } = useComment(selectedCard, props.col)

const { previewFile, deleteFile } = useAttachment(selectedCard)


const formateDate = (date) => {
    const dateTime = new Date(date)
    const day = String(dateTime.getDate()).padStart(2, '0');
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const year = dateTime.getFullYear();

    return `${month}-${day}-${year}`;
}

</script>

<style>
.clabel {
    background-color: #A1BDD914;
    color: #fff;
    padding: 0.5rem;
    font-family: sans-serif;
    border-radius: 0.3rem;
    cursor: pointer;
    margin-top: 1rem;
}
</style>