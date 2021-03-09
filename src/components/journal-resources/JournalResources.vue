<template>
   <ul>
       <journal-item v-for="journal in journals" 
       :key="journal.id"
       :id="journal.id"
       :title="journal.title"
       :description="journal.description"
       :rank="journal.rank"
       :link="journal.link"
       :articles="journal.myArticles"
    
       ></journal-item>
   </ul>
</template>
<script>
import JournalItem from './JournalItem';
export default {
    components: {
        JournalItem,
    },
    inject: ['journals'],   
}
</script>
<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 60rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: .5rem;
}
</style>