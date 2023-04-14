<template>
  <div>
    <label>{{ label }}</label>
    <input
      class="field"
      :placeholder="label"
      :value="value"
      @input="$emit('input', $event.target.value)"
      v-bind="$attrs"
    >
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  name: 'BaseInput',

  props: {
    label: {
      type: String,
      default: ''
    },

    value: {
      type: [String, Number],
      default: ''
    }
  },
}
</script>