import './assets/tailwind.css';
import App from './App.vue';
import apolloClient from './apoloClient';

import { createApp, provide, h } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';




/*
import { createApp } from 'vue';
import * as apolloProvider from './apollo.provider';

// createApp(App).mount('#app');
const app = createApp(App)
app.use(apolloProvider.provider);
app.mount('#app');
*/






const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
});

app.mount('#app');

