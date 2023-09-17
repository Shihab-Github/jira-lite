<template>
    <div>
        <Card :card="selectedCard" :col="route.params.col" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBoardStore } from '@/store/board';
import { useRoute } from 'vue-router';
import Card from '@/components/Card'

const route = useRoute()
const { id, col } = route.params
const boardStore = useBoardStore()
const task = boardStore.findCard(id, col)
const selectedCard = ref(task)

</script>