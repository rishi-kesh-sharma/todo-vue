<template>
  <div
    class="grid place-items-center h-[80vh] justify-center items-center focus:border-none border-none focus:outline-none">
    <form
      class="max-w-[300px] m-auto flex flex-col gap-3 border p-[2rem] rounded-lg shadow-md">
      <h1 class="text-center mb-[1rem] text-[1.5rem]">Login</h1>
      <div class="grid grid-cols-3 items-center gap-3">
        <label>Email</label>
        <input
          class="border border-1 col-span-2 rounded-md"
          type="text"
          name="email" />
      </div>

      <div class="grid grid-cols-3 gap-2 items-center">
        <label>Password</label>
        <input
          class="border border-1 col-span-2 rounded-md"
          type="text"
          name="password" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>
