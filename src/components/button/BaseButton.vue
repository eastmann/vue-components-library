<template>
  <button
    class="base-button"
    :class="computedClasses"
    :disabled="computedDisabled"
    :type="type"
    v-bind="$attrs">
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: 'primary-1-day'
    },

    size: {
      type: String,
      default: 'medium'
    },

    text: {
      type: String,
      default: 'Add Button Text'
    },

    rounded: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'button',
      validator: (value) => {
        return [
          'button',
          'submit',
          'reset'
        ].indexOf(value) >= 0
      }
    },

    disabled: {
      type: Boolean
    },
  },

  computed: {
    computedClasses() {
      return [
        `-${this.color}`,
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
