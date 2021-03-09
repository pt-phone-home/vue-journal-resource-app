<template>
    <base-card width="narrow">
        <li>
            <header>
                <h3>{{title}}</h3>
                <div>
                    <base-button @click="deleteJournal(id)">Delete</base-button>
                </div>
            </header>
            <section>
                <div class="journal_info">
                    <p>{{description}}</p>
                    <div>
                        <div class="rank" :class="rank">{{rank}}</div>
                        <div><a :href="link" target="_blank">Visit Journal</a></div>
                    </div>
                </div>
            </section>
            <section class="show_articles">
                <base-button mode="cta" @click="showArticles = !showArticles">{{showArticles ? 'Hide Articles' : 'Show Articles'}}</base-button>
            </section>
            <section class="articles" v-if="showArticles">
               <h4>List of Articles I have published here</h4>
               <article-resource :articles="articles"></article-resource>
            </section>
        </li>
    </base-card>
</template>
<script>
import ArticleResource from './ArticleResource';
export default {
    props: ['id', 'title', 'description', 'rank', 'link', 'articles'],
    inject: ['deleteJournal'],
    components: {
        ArticleResource,
    },
    data () {
        return {
            showArticles: false,
        }
    },
    methods: {
        test() {
            console.log(this.id);
        }
    }
    
}
</script>
<style scoped>
li {
    display: grid;
    grid-template-rows: auto;
}

header {
    display: grid;
    grid-template-columns: 3fr 1fr;
}

header div {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.journal_info {
    display: grid;
    grid-template-columns: 3fr 1fr;
}

.journal_info div {
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
    }
.show_articles {
    display: grid;
    justify-content: center;
}
.rank {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
}
.Q1 {
    background-color: green;
}

.Q2 {
    background-color: yellow;
}

.Q3 {
    background-color: orangered;
}

.Q4 {
    background-color: red;
}

</style>