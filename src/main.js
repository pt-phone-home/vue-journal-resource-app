import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/BaseComponents/BaseCard';
import BaseButton from './components/BaseComponents/BaseButton';
import BaseDialog from './components/BaseComponents/BaseDialog';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app')
