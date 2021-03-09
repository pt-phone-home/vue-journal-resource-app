<template>
    <header>
        <h2>{{appTitle}}</h2>
        <p>{{appDescription}}</p>
    </header>
</template>
<script>
export default {
    props: ['appTitle', 'appDescription'],
}
</script>
<style scoped>
header {
    width: 100%;
    background-color: burlywood; 
    text-align: center;
}

h2 {
    margin: 0;
    padding-top: 1rem;
    padding-bottom: .3rem;
}

p {
    padding-bottom: 1rem;
}

</style>