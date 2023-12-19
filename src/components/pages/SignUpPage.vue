<template>
  <div
    class="grid place-items-center h-[80vh] justify-center items-center focus:border-none border-none focus:outline-none">
    <form
      class="max-w-[350px] m-auto flex flex-col gap-3 p-[2rem] shadow-md border">
      <h1 class="text-center mb-[1rem] text-[1.5rem]">Sign Up</h1>
      <div class="grid grid-cols-3 items-center gap-3">
        <label>First Name</label>
        <input
          class="border border-1 col-span-2 rounded-md"
          type="text"
          name="firstName" />
      </div>
      <div class="grid grid-cols-3 gap-2 items-center">
        <label>First Name</label>
        <input
          class="border border-1 col-span-2 rounded-md"
          type="text"
          name="lastName" />
      </div>
      <div class="grid grid-cols-3 gap-2 items-center">
        <label>First Name</label>
        <input
          class="border border-1 col-span-2 rounded-md"
          type="text"
          name="age" />
      </div>
      <div class="grid grid-cols-3 gap-2 items-center">
        <label>Password</label>
        <input
          class="border border-1 col-span-2 rounded-md"
          type="text"
          name="password" />
      </div>
      <div class="grid grid-cols-3 gap-2 items-center">
        <label>Confirm Password</label>
        <input
          class="border border-1 col-span-2 rounded-md"
          type="text"
          name="confirm" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUpPage",
};
</script>
