<template>
  <div id="app">

    <!-- navigation bar -->
    <div class="sticky-tops" id="app-nav">
      <div class="container">
        <div class="row">
          <app-navbar></app-navbar>
        </div>
      </div>
    </div>


    <div id="router-view-section">
      <router-view></router-view>
    </div>


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

  .container {
    max-width: 992px;
  }

  #app-nav {
    background: rgb(14, 13, 13);
    color: rgb(226, 226, 226);
  }

</style>
