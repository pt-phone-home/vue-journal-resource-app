<template>
    <li><div>Title</div><div>Year</div><div>Citations</div></li>
    <li>
        <div>{{ title }}</div><div>{{ year }}</div><div>{{ citations}}</div>
    </li>
</template>
<script>
export default {
    props: ['title', 'year', 'citations']
}
</script>
<style scoped>
li {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    
}
</style>