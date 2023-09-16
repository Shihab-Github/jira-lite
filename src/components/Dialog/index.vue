<template>
    <v-dialog v-model="props.open" width="800">
        <v-card :title="props.title ? props.title : ''">
            <slot></slot>
            <v-card-actions v-if="showFooter">
                <div class="d-flex flex-row-reverse w-100">
                    <v-btn class="align-right" @click="toggleDialog">Close</v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>

const props = defineProps({
    open: Boolean,
    title: String,
    toggleDialog: Function,
    showFooter: Boolean
})

</script>