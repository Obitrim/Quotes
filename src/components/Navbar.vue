<template>
  <nav class="navbar navbar-expand-md p-1" id="app-navbar">

    <!-- brand and logo -->
    <span class="navbar-brand">
      <img src="" alt="logo"/>
    </span>


    <button class="navbar-toggler ml-auto" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
      <i>Toggler</i>
    </button>

    <!-- navigation links -->
    <div class="collapse navbar-collapse" id="main-nav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Link</a>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
  export default {
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  nav {
    width: 100%;
  }

</style>
