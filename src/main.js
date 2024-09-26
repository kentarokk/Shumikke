import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

import router from "./router";
import store from "./store";

Amplify.configure(outputs);

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
