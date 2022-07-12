<template>
  <TheSidebar />
  <main class="main-wrapper">
    <TheTopbar />
    <router-view />
  </main>
</template>

<script>
import TheSidebar from "@/components/TheSidebar.vue";
import TheTopbar from "@/components/TheTopbar.vue";

export default {
  components: {
    TheSidebar,
    TheTopbar,
  },
};
</script>
