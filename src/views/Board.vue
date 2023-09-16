<template>
    <v-sheet class="pa-2 page-height board-bg">
        <v-row>
            <v-col xs="12" md="4" lg="4">
                <Column title="Pending" name="todo" />
            </v-col>
            <v-col xs="12" md="4" lg="4">
                <Column title="Processing" name="doing" />
            </v-col>
            <v-col xs="12" md="4" lg="4">
                <Column title="Done" name="done" />
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script setup>
import Column from '../components/Board/Column'
</script>

