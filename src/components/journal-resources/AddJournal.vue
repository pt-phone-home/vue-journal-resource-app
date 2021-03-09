<template>
    <base-dialog v-if="invalidForm" @close="confirmError">
        <template #header>
            <h2>Danger</h2>
        </template>
        <template #default>
            <p>There is a problem with your form</p>
            <p>Please check that you have entered valid values for each of the inputs</p>
        </template>
        <template #actions>
            <base-button mode="cta" @click="confirmError">Okay</base-button>
        </template>
    </base-dialog>
    <base-card width="wide">
        <form @submit.prevent="createEntry">
            <div>
                <h2>Add Journal</h2>
            </div>
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" ref="inputTitle">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description" id="decription" rows="10" ref="inputDescription"></textarea>
            </div>
            <div class="form-control">
                <label for="rank">Rank</label>
                <input type="text" id="rank" ref="inputRank">
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" id="link" ref="inputLink">
            </div>
            <div>
                <base-button mode="cta">Add</base-button>
            </div>
        </form>
    </base-card>
</template>
<script>
export default {
    inject: ['addJournal'],
    data () {
        return {
            invalidForm: false,            
        }
    },
    methods: {
        createEntry() {
            const title = this.$refs.inputTitle.value;
            const description = this.$refs.inputDescription.value;
            const rank = this.$refs.inputRank.value;
            const link = this.$refs.inputLink.value;

            if (title === '' || description === '' || rank === '' || link === '') {
                this.invalidForm = true;
                return;
            }
            
            // this.$emit('add-journal', title, description, rank, link);
            this.addJournal(title, description, rank, link)

            this.$refs.inputTitle.value = '';
            this.$refs.inputDescription.value = '';
            this.$refs.inputRank.value = '';
            this.$refs.inputLink.value = '';            
        },
        confirmError() {
            this.invalidForm = false;
        }
    }
}
</script>
<style scoped>
form {
    display: grid;
    grid-template-rows: auto;
    padding: 1rem;
}

form h2 {
    color: darkblue;
    font-size: 1.4rem;
    text-align: center;
}

form .form-control {
    display: grid;
    grid-template-rows: auto;
    margin-bottom: .5rem;
}

form .form-control label {
    color: darkblue;
    font-size: 1.2rem;
    margin-bottom: .2rem;
}

form .form-control input {
    line-height: 1.5;
}



</style>