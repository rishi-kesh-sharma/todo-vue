<template>
  <div class="max-w-[400px] m-auto border shadow-lg">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "../TodoList.vue";
export default {
  name: "HomePage",
  components: {
    TodoList,
  },
};
</script>
