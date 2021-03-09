<template>
   <div :class="width">
       <slot></slot>
    </div> 
</template>
<script>
export default {
    props: ['width']
}
</script>
<style scoped>
    div {
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        margin: 2rem auto;
    }
    .narrow {
        width: 30rem;
        max-width: 30rem;
    }

    .wide {
        max-width: 60rem;
    }
</style>