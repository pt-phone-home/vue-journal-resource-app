<template>
    <section>
        <options-menu @change-component="changeComponent"></options-menu>
  </section>
  <section>
    <component :is="selectedComponent"> </component>
  </section>
</template>
<script>
import OptionsMenu from '../layouts/OptionsMenu';
import JournalResources from './JournalResources';
import AddJournal from './AddJournal';
export default {
    components: {
        OptionsMenu,
        JournalResources,
        AddJournal,
    },
    data () {
        return {
            selectedComponent: 'journal-resources',
            journals: [
                {
                    id: new Date().toISOString(),
                    title: 'Education and Information Technologies',
                    description: 'This is the official journal of the IFIP Technical Committee on Education. It covers the complex relationships between information and communication technologies and education. The journal provides perspectives at all levels, from the micro of specific applications or instances of use in classrooms to macro concerns of national policies and major projects; from classes of five year olds to adults in tertiary institutions; from teachers and administrators, to researchers and designers; from institutions to open, distance and lifelong learning.',
                    rank: 'Q2',
                    link: 'https://www.springer.com/journal/10639',
                    myArticles: [
                        {
                            title: 'The use of Twitter for lecture engagement and discussion',
                            year: 2013,
                            citations: 55
                        },
                    ]
                },
                
            ],
        }
    },
    provide () {
        return {
            journals: this.journals,
            addJournal: this.addJournal,
            deleteJournal: this.deleteJournal,
        }
    },
    methods: {
    changeComponent(component) {
      this.selectedComponent = component;
    },
    addJournal(title, description, rank, link) {
        const newJournal = {
            id: new Date().toISOString(),
            title: title,
            description: description,
            rank: rank,
            link: link,
        }

        this.journals.unshift(newJournal);
        this.selectedComponent = 'journal-resources';
    },
    deleteJournal(id) {
        const journalIndex = this.journals.findIndex(function (journal) {
            return journal.id === id;
        });
        console.log(journalIndex);
        this.journals.splice(journalIndex, 1);
    }
  }
}
</script>