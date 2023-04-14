<template>
  <button class="btn -primary-1">
    <span>
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "FccButton", // vue component name
  props: {
    text: {
      type: String,
      default: "Enter Button Text Here"
    }
  },
};
</script>

<style>
/* @import '../../styles/_styles.css'; */

.btn {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  min-width: 120px;
  padding: 0 24px;

  border: none;
  border-radius: 8px;

}

.btn.-primary-1 {
  color: var(--color-white);

  background: var(--color-primary-1-day);

  text-transform: uppercase;
}

/* .btn.-primary-1 {
  color: var(--color-white);

  background: var(--color-primary-1-day);
} */
</style>