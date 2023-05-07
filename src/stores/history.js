import { defineStore } from "pinia";

export const useHistoryStore = defineStore("histories", {
  state: () => {
    return {
      histories: []
    }
  },

  actions: {
    create(histories) {
      this.histories.push({
        ...histories
      })
    }
  }
})