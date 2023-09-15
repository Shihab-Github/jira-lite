<template>
    <v-dialog v-model="props.open" width="800">
        <v-card>
            <slot></slot>
            <v-card-actions>
                <div class="d-flex flex-row-reverse w-100">
                    <v-btn color="primary" class="align-right" @click="toggleDialog">Close</v-btn>
                </div>

            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>

const props = defineProps({
    open: Boolean,
    title: String,
    toggleDialog: Function
})

</script>