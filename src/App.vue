<template>
  <div id="app">

    <!-- navigation bar -->
    <div class="sticky-top" id="app-nav">
      <div class="container">
        <div class="row">
          <app-navbar></app-navbar>
        </div>
      </div>
    </div>


    <!-- router view -->
    <div id="router-view-section">
      <router-view></router-view>
    </div>


    <!-- footer -->
    <div id="contact">
      <app-footer></app-footer>
    </div>
  </div>
</template>



<script>

  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'app',

    components: {
      'app-navbar': Navbar,
      'app-footer': Footer
    }
  }
</script>



<style>
  body {
    background: #ebebea;
    scroll-behavior: smooth;
  }

  #app {
    font-family: roboto, roboto-condensed;
    font-weight: 200;
  }

  #app {
    overflow-x: hidden;
  }

  .container {
    max-width: 992px;
  }

  #app-nav {
    width: 100vw;
    color: rgb(226, 226, 226);
    background: rgb(14, 13, 13);
  }

</style>
