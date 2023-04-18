<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      class="base-input"
      :class="computedClasses"
      :value=value
      :placeholder=placeholder
      :disabled="computedDisabled"
      @input="$emit('input', $event.target.value)"
      v-bind="$attrs"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseInput',

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      required: false
    },

    placeholder: {
      type: String,
      default: 'Add Placeholder Value'
    },

    value: {
      type: [String, Number],
      default: ''
    },

    background: {
      type: String,
      default: 'background'
    },

    size: {
      type: String,
      default: 'medium'
    },

    rounded: {
      type: String,
      default: ''
    },
  },

  computed: {
    computedClasses() {
      return [
        `-${this.background}`,
        `-${this.size}`,
        `-${this.rounded}`
      ]
    },

    computedDisabled() {
      return this.disabled ? true : null
    }
  }
}
</script>