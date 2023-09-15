export default {
    template: `<div>
      <h2>Count: {{ count }}</h2>
      <button @click="increment">Increment</button>
    </div>`,
    data: () => {
      return {
        count: 0
      };
    },
    methods: {
      increment() {
        this.count++;
      }
    }
  };