<template>
  <div
    class="border border-1 p-[0.5rem] rounded-md flex justify-between items-center">
    <p class="">
      {{ todo.title }}
    </p>
    <div class="flex gap-2 items-center">
      <i
        @click="deleteTask"
        class="fa fa-trash text-blue-500 cursor-pointer"
        aria-hidden="true"></i>
      <i
        @click="$emit('edit-task', todo.id)"
        class="fa fa-pencil text-red-500 cursor-pointer"
        aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    deleteTask() {
      this.$emit("delete-task", this.todo.id);
    },
  },
};
</script>
