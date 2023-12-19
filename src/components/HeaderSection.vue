<template>
  <div class="flex justify-end gap-4 mr-[2rem] py-[0.5rem]">
    <router-link to="/"> Home </router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/signup">SignUp</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  data() {
    return {
      links: [
        {
          id: 1,
          title: "Home",
          path: "/",
          // component: HomePage,
        },
        {
          id: 2,

          title: "Login",
          path: "/login",
          // component: LoginPage,
        },
        {
          id: 3,
          title: "Sign Up",
          path: "/signup",
          // component: SignUpPage,
        },
      ],
    };
  },
};
</script>
