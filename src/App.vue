<template>
  <div id="app" >
    <navbar id="navbar"></navbar>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Maler Ranzinger</h1>
          <h2 class="subtitle">Ihr Partner für Farbe und Lacke</h2>
        </div>
      </div>
    </section>
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-three-quarters">
          <router-view></router-view>
        </div>
        <div class="column">
          <sidebar id="sidebar" class="column"></sidebar>
        </div>
      </div>
      <div class="columns">
        <div class="column">

        </div>
      </div>
    </div>
    <footbar id="footbar"></footbar>
  </div>
</template>

<script>

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footbar from './components/Footbar';

export default {
  name: 'app',
  components: { Navbar, Sidebar, Footbar },
};
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Lobster');

  html, body {
    height: 100%;
  }

  #app {
    position: relative;

    padding-bottom: 24px;
    min-height: 100%;

  }

  .hero {
    background: #5C258D;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4389A2, #5C258D);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4389A2, #5C258D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    margin-bottom: 1rem;
  }
  .hero .title {
    font-family: "brush-script-std",sans-serif;

    display: table;
    color: #d90000;
    background-color: #fff;
    padding: .2rem;
    font-size: 50px;
  }
  .hero .subtitle {
    display: table;
    color: rgb(0,105,178);
    background-color: #fff;
    padding: .2rem;
    font-weight: 500;
  }

  #sidebar {
    background-color: rgba(194, 194, 194, 0.21);
  }

  #footbar {
    position: absolute;
    height: 24px;
    right: 0;
    bottom: 0;
    left: 0;


    text-align: center;

    color: #fff;
    background-color: rgba(0, 0, 0, 0.81);
  }


  /* vendor changes*/
  .nav-item img#logo {
    height: 80px;
  }



</style>
