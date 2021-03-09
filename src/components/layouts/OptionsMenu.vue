<template>
    <div class="options_menu">
        <base-button @click="$emit('change-component', 'journal-resources')">Journals</base-button>
        <base-button @click="$emit('change-component', 'add-journal')">Add Journal</base-button>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style scoped>
.options_menu {
    margin: auto;
    max-width: 40rem;
    display: flex;
    justify-content: center;
}
</style>