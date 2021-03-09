<template>
    <ul>
        <article-item v-for="article in articles" 
        :key="article.title"
        :title="article.title"
        :year="article.year"
        :citations="article.citations"
        ></article-item>
    </ul>
</template>
<script>
import ArticleItem from './ArticleItem';
export default {
    props: ['articles'],
    components: {
        ArticleItem,
    }
    
}
</script>
<style scoped>
ul {
    list-style: none;
    display: grid;
}

</style>