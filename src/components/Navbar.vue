<template lang="html">
<nav class="nav">
  <div class="nav-left">
    <div class="nav-item">
      <img id="logo" src="../assets/logo.png" alt="Ranzinger Logo">
    </div>
  </div>
  <span class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>
  <div id="menu" class="nav-right nav-menu">
      <router-link
      class="nav-item"
      v-for="link in links"
      :to="link.target"
      :key="link.id">
        {{link.text}}
      </router-link>
  </div>
</nav>
</template>

<script>

import Router from '../router/index';

export default {
  name: 'navbar',
  Router,
  data() {
    return {
      mobileIsActive: false,
      links: [
        {
          text: 'Start',
          target: '/',
        },
        {
          text: 'Über uns',
          target: '/ueber_uns',
        },
        {
          text: 'Services',
          target: '/services',
        },
        {
          text: 'Projekte + Partner',
          target: '/projekte_partner',
        },
        {
          text: 'Kontakt',
          target: '/kontakt',
        },
        {
          text: 'Impressum',
          target: '/impressum',
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.nav {
  height: 90px;
}
</style>
