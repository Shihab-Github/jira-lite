<template>
    <v-sheet class="pa-2 page-height board-bg">
        <v-row>
            <v-col xs="12" md="4" lg="4">
                <v-sheet rounded elevation="5" class="pa-3">
                    <div class="d-flex justify-space-between align-center">
                        <div class="text-subtitle-2">To Do</div>
                        <v-btn size="x-small" icon @click="">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </div>
                </v-sheet>

            </v-col>
            <v-col xs="12" md="4" lg="4">
                <v-sheet rounded elevation="5" class="pa-3">
                    <div class="d-flex justify-space-between align-center">
                        <div class="text-subtitle-2">Doing</div>
                        <v-btn size="x-small" icon @click="">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </div>
                </v-sheet>
            </v-col>
            <v-col xs="12" md="4" lg="4">
                <v-sheet rounded elevation="5" class="pa-3">
                    <div class="d-flex justify-space-between align-center">
                        <div class="text-subtitle-2">Done</div>
                        <v-btn size="x-small" icon @click="">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </div>
                </v-sheet>
            </v-col>

        </v-row>
    </v-sheet>
</template>

<script setup>
console.log('Boards')
</script>

