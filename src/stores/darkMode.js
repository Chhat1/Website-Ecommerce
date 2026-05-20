import { defineStore } from "pinia";

export const useDarkModeStore = defineStore("darkmode", {
    state: () => ({
        darkMode: false,
    }),

    actions: {
        initTheme() {
            const saved = localStorage.getItem("darkMode");
            this.darkMode = saved ? JSON.parse(saved) : false;
        },

        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem("darkMode", JSON.stringify(this.darkMode));
        },
    },
});