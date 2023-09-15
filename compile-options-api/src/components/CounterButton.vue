<template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CounterButton',
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      increment() {
        this.count++;
      },
    },
  };
  </script>
  