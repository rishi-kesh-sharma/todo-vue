<template>
  <div class="p-[1rem]">
    <div class="flex justify-between">
      <h2 class="text-center text-2xl">Your Todo</h2>
      <button
        @click="toggleAddForm()"
        :class="[
          'text-white px-2 rounded-md',
          showAddForm ? 'bg-red-600' : 'bg-green-600',
        ]">
        {{ showAddForm ? "Close" : "Add" }}
      </button>
    </div>
    <div v-show="showAddForm" class="py-[0.6rem] border-b w-full">
      <form @submit="postData" class="flex flex-col gap-3">
        <h1 class="text-center mb-[0.4rem] text-[1.5rem] capitalize">
          {{ mode }} Task
        </h1>
        <div class="w-full">
          <!-- <label>Email</label> -->
          <input
            v-model="title"
            placeholder="Enter new task"
            class="border border-1 col-span-2 rounded-md w-full p-2"
            type="text"
            name="email" />
        </div>
        <button
          class="bg-gray-800 text-white max-w-[80px] p-2 rounded-md"
          type="submit">
          Save
        </button>
      </form>
    </div>
    <ul class="flex flex-col gap-[0.5rem] mt-[1rem]">
      <li :key="todo.id" v-for="todo in todos">
        <TodoItem
          @edit-task="editTask"
          @delete-task="deleteTask"
          :todo="todo" />
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  data() {
    return {
      todos: [],
      showAddForm: false,
      title: "",
      mode: "add",
    };
  },
  components: {
    TodoItem,
  },
  methods: {
    async getData() {
      const res = await fetch("http://localhost:3000/tasks");
      return await res.json();
    },
    toggleAddForm() {
      this.mode = "add";
      this.showAddForm = !this.showAddForm;
    },
    async postData(e) {
      e.preventDefault();

      if (this.mode == "add") {
        const newTask = {
          title: this.title,
          status: "pending",
          id: Math.floor(Math.random()),
        };
        await fetch("http://localhost:3000/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
          // body: newTask,
        });
        this.todos = [...this.todos, newTask];
      }
    },

    async deleteTask(id) {
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
      this.todos = this.todos.filter((item) => {
        return item.id != id;
      });
    },
    async editTask(id) {
      this.mode = "edit";
      this.showAddForm = true;
      const currentTask = this.todos.find((item) => {
        return item.id == id;
      });
      this.title = currentTask.title;
      console.log(id, "id");
      // const editedTask={...currentTask,title}
      // await fetch("http://localhost:3000/tasks/${id}",{
      //   method:"PUT",
      //   body:
      // })
    },
  },
  async created() {
    const todos = await this.getData();
    this.todos = todos;
  },
  // emits: ["delete-task"],
};
</script>
