<template>
  <div>
    <input type="checkbox" :checked="todo.checked" @change="toggleCheckBox" />
    <span
      :class="todo.checked ? 'text-primary' : ''"
      :style="todo.checked ? 'text-decoration: line-through' : ''"
      >{{ todo.text }}</span
    >
    <button class="btn btn-danger btn-sm" @click="clickDelete">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleCheckBox(e) {
      this.$emit("toggle-checkbox", {
        id: this.todo.id,
        checked: e.target.checked,
      });
    },
    clickDelete() {
      this.$emit("click-delete", this.todo.id);
    },
  },
};
</script>

<style></style>
