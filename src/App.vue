<template>
  <div class="">
    <HeaderSection />
    <router-view />
  </div>
</template>

<script>
import HeaderSection from "./components/HeaderSection.vue";
export default {
  components: {
    HeaderSection,
  },
};
</script>
