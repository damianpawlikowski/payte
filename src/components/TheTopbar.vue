<template>
  <div class="topbar">
    <input
      class="topbar-search-input"
      type="text"
      :placeholder="$t('topbar.search')"
    />
    <div class="topbar-group">
      <div class="topbar-brand">
        <router-link :to="{ name: 'Overview' }">
          <img src="../assets/logo.svg" alt="Payte Logo" />
        </router-link>
      </div>
      <button class="topbar-button" type="button">
        <div class="topbar-button-white-eclipse">
          <div class="topbar-button-red-eclipse"></div>
        </div>
        <span class="topbar-icon topbar-icon-bell"></span>
      </button>
      <button
        @click="
          $i18n.locale == 'en' ? ($i18n.locale = 'pl') : ($i18n.locale = 'en')
        "
        class="topbar-button"
        type="button"
      >
        <span
          :class="
            $i18n.locale == 'en'
              ? 'topbar-icon topbar-icon-language'
              : 'topbar-icon topbar-icon-language topbar-icon-language-active'
          "
        ></span>
      </button>
      <button
        class="topbar-button topbar-button-burger"
        @click="toggleSidebar"
        type="button"
      >
        <span class="topbar-icon topbar-icon-burger"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const toggleSidebar = () => {
      document.getElementById("sidebar").style.display = "block";
    };

    return { toggleSidebar };
  },
};
</script>
