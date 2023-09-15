<template>
  <div id="app">
    <HelloGreetings />
    <CounterButton />
  </div>
</template>

<script>
import HelloGreetings from './components/HelloGreetings.vue';
import CounterButton from './components/CounterButton.vue';

export default {
  components: {
    HelloGreetings,
    CounterButton,
  },
};
</script>