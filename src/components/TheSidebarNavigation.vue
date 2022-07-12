<template>
  <nav>
    <ul class="sidebar-menu">
      <li class="sidebar-menu-item">
        <router-link
          @click="hideSidebar"
          class="sidebar-menu-link"
          :to="{ name: 'Overview' }"
        >
          <span class="icon icon-overview"></span>
          <span>{{ $t("sidebar.overview") }}</span>
          <div class="sidebar-menu-link-badge">
            <div class="sidebar-menu-link-badge-content">
              <span>9+</span>
            </div>
          </div>
        </router-link>
      </li>
      <li class="sidebar-menu-item">
        <router-link
          @click="hideSidebar"
          class="sidebar-menu-link"
          :to="{ name: 'Trade' }"
        >
          <span class="icon icon-trade"></span>
          <span>{{ $t("sidebar.trade") }}</span>
        </router-link>
      </li>
      <li class="sidebar-menu-item">
        <router-link
          @click="hideSidebar"
          class="sidebar-menu-link"
          :to="{ name: 'Wallets' }"
        >
          <span class="icon icon-wallets"></span>
          <span>{{ $t("sidebar.wallets") }}</span>
        </router-link>
      </li>
      <li class="sidebar-menu-item">
        <router-link
          @click="hideSidebar"
          class="sidebar-menu-link"
          :to="{ name: 'Bundles' }"
        >
          <span class="icon icon-bundles"></span>
          <span>{{ $t("sidebar.bundles") }}</span>
        </router-link>
      </li>
      <li class="sidebar-menu-item">
        <router-link
          @click="hideSidebar"
          class="sidebar-menu-link"
          :to="{ name: 'Reporting' }"
        >
          <span class="icon icon-reporting"></span>
          <span>{{ $t("sidebar.reporting") }}</span>
        </router-link>
      </li>
      <li class="sidebar-menu-item">
        <router-link
          @click="hideSidebar"
          class="sidebar-menu-link"
          :to="{ name: 'Community' }"
        >
          <span class="icon icon-community"></span>
          <span>{{ $t("sidebar.community") }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  setup() {
    const hideSidebar = () => {
      document.getElementById("sidebar").style.display = "none";
    };

    return { hideSidebar };
  },
};
</script>
