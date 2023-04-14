<script>
import Vue from 'vue';

// Uncomment import and local "components" registration if library is not registered globally.
// import { VueComponentsLibrarySample } from '@/entry.esm';

import { FccButton } from '@/entry.esm'
import { BaseInput } from '@/entry.esm'

// import '../src/styles/_styles.css'

export default Vue.extend({
  name: 'ServeDev',

  components: {
    FccButton,
    BaseInput,
  },

});
</script>

<template>
  <div id="app">
    <h2>Vue UI componets</h2>

    <h3>Button</h3>
    <FccButton text="Button Primary" />

    <h3>Input</h3>
    <BaseInput
      label="Base Input"
      type="text"
    />
  </div>
</template>

<style>
@import '../src/styles/_styles.css';
</style>
