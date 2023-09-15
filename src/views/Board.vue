<template>
    <v-sheet class="pa-2 page-height board-bg">
        <v-row>
            <v-col xs="12" md="4" lg="4">
                <Column name="To Do" />
            </v-col>
            <v-col xs="12" md="4" lg="4">
                <Column name="Doing" />
            </v-col>
            <v-col xs="12" md="4" lg="4">
                <Column name="Done" />
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script setup>
import Column from '../components/Board/Column'
</script>

