const CountComponent = {
  template: `<div>
    <h2>Count: {{ count }}</h2>
    <button @click="increment">Increment</button>
  </div>`,
  setup() {
    const count = Vue.ref(0);

    const increment = () => {
      count.value++;
    };

    return {
      count,
      increment,
    };
  },
};

export default CountComponent;