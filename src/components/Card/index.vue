<template>
    <div>I am detail card</div>
</template>

<script setup>
const props = defineProps(['card'])

console.log('card to edit: ', props.card)
</script>