<template>
    <v-sheet class="pa-2 page-height board-bg">
        <div class="text-black text-center mb-1">Total Completion: {{ percentage }}%</div>
        <v-row>
            <v-col xs="12" sm="12" md="4" lg="4">
                <Column title="Pending" name="todo" />
            </v-col>
            <v-col xs="12" sm="12" md="4" lg="4">
                <Column title="Processing" name="doing" />
            </v-col>
            <v-col xs="12" sm="12" md="4" lg="4">
                <Column title="Done" name="done" />
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import Column from '../components/Board/Column'
import { useBoardStore } from "@/store/board";

const boardStore = useBoardStore()
const percentage = computed(() => boardStore.completionPercentage) 

onMounted(() => {
    boardStore.reset()
    unhighlight(boardStore.todos)
    unhighlight(boardStore.doings)
    unhighlight(boardStore.dones)
    boardStore.fromDate = null
    boardStore.toDate = null
})

const unhighlight = (list) => {
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        item.highlighted = false;
    }
};

</script>

