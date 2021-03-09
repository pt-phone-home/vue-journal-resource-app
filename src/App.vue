<template>
  <the-header 
  :appTitle="appTitle"
  :appDescription="appDescription"
  ></the-header>
  <section>
    <journal-section></journal-section>
    <!-- <journal-resources></journal-resources> -->
  </section>
</template>

<script>
import TheHeader from './components/layouts/TheHeader';
import JournalSection from './components/journal-resources/JournalSection';
export default {
  name: 'App',
  components: {
    TheHeader,
    JournalSection,
  },
  data () {
    return {
      appTitle: 'Academic Journal Resource Application',
      appDescription: 'Relevant journals to target for publishing. Including their SCOPUS ranking.',
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body { 
  margin: 0;
}
</style>
