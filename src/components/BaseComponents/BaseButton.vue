<template>
    <button :class="mode">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: ['mode']
}
</script>
<style scoped>
button {
    padding: 0.75rem 1.5rem;
  background-color: burlywood;
  border: 1px solid burlywood;
  color: white;
  cursor: pointer;
}

button:hover, 
button:active {
    background-color: rgb(184, 150, 106);
    border-color: rgb(184, 150, 106);
}

.flat {
    background-color: transparent;
    color: burlywood;
    border: none;
}

.flat:hover, 
.flat:active  {
    background-color: rgb(238, 215, 185);
    color: white;
}

.cta {
    background-color: darkblue;
    color: white;
}

.cta:hover,
.cta:active {
    background-color: rgb(14, 14, 187);
}
</style>