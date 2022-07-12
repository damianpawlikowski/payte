<template>
  <aside id="sidebar" class="sidebar">
    <div class="sidebar-brand">
      <router-link :to="{ name: 'Overview' }">
        <img src="../assets/logo.svg" alt="Payte Logo" />
      </router-link>
      <button
        @click="hideSidebar"
        class="sidebar-button-hide"
        type="button"
      ></button>
    </div>
    <TheSidebarNavigation />
    <div class="sidebar-seperator"></div>
    <div class="sidebar-bottom">
      <TheSidebarFavorites />
      <div class="sidebar-bottom-user">
        <div class="sidebar-bottom-user-info">
          <img
            class="sidebar-bottom-user-info-picture"
            src="../assets/pictures/example.png"
            alt="Example User Picture"
          />
          <div class="sidebar-bottom-user-info-details">
            <span class="text-bolder">Marc Webber</span>
            <span class="text-muted">marc@riot.com</span>
          </div>
        </div>
        <button type="button" class="button-blank">
          <span class="icon icon-dots"></span>
        </button>
      </div>
    </div>
  </aside>
</template>

<script>
import TheSidebarNavigation from "@/components/TheSidebarNavigation.vue";
import TheSidebarFavorites from "@/components/TheSidebarFavorites.vue";

export default {
  components: {
    TheSidebarNavigation,
    TheSidebarFavorites,
  },
  setup() {
    const hideSidebar = () => {
      document.getElementById("sidebar").style.display = "none";
    };

    return { hideSidebar };
  },
};
</script>
