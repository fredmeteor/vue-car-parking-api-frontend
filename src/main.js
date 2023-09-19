@tailwind base;
@tailwind components;
@tailwind utilities;

import "@/bootstrap.js";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ValidationError from "@/components/ValidationError.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("ValidationError", ValidationError);
app.mount("#app");

@layer components {
    label.required {
        @apply before:text-red-600 before:content-['*'] before:mr-1;
    }

    .form-input {
        @apply p-1 border bg-gray-100 disabled:opacity-50;
    }

    .btn {
        @apply inline-flex items-center gap-2 justify-center p-2 font-bold relative disabled:!opacity-50 disabled:!cursor-progress;
    }

    .btn-primary {
        @apply text-white bg-blue-600 hover:bg-blue-500;
    }
}

.router-link {
	@apply text-blue-600 hover:underline;
}

.router-link-active.router-link {
	@apply underline;
}