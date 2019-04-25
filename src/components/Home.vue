<template>
    <div id="home">
         <!-- banner section -->
        <div class="banner-section">
        <div class="container" id="banner-content">
            <div class="row">
            <h3>Title</h3>
            <p class="quote">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem recusandae sit officia tempore, reprehenderit praesentium explicabo minima modi ipsa, unde laborum. Expedita, tempora necessitatibus accusamus vero quasi earum explicabo optio.<br>
                <span style="float: right;"> -&nbsp; Author</span>
            </p>

            <!-- quotes link -->
            <!-- Linking to quotes pages -->
            <router-link to="/quotes">Quotes</router-link>
            </div>
        </div>
        </div>





        <!-- app content -->
        <div class="container" id="app-body">
            <div class="row">

            <div class="col-md-4">
                <div id="profile-box">
                <img src="" alt="profile image"/>
                </div>
            </div>

            <div class="col-md-6">
                <!-- about developer goes here -->
                <div class="blocks">
                <h1>Obitrim Paul</h1>

                <div class="block block-about">
                    <i>tick-icon</i>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere blanditiis perspiciatis eligendi. Dignissimos, hic ex esse quo consectetur dolor non libero dolorum deleniti nostrum voluptate vel impedit et neque maiores.
                    </p>

                    <a href="#contact">Contact me</a>
                </div>

                <div class="block block-writers">
                    <i>tick-icon</i>
                    <ul>
                    <li>Quotes by</li>
                    <li>Writer's name</li>
                    <li>Writer's name</li>
                    <li>Writer's name</li>
                    <li>Writer's name</li>
                    <li>Writer's name</li>
                    </ul>
                </div>
                </div>
            </div>

            </div>
        </div>
    </div>
</template>


<script>
    export default {
        
    }
</script>



<style scoped>
    /* banner section */
  .banner-section {
    width: 100vw;
    height: 400px;
    background: darkviolet;
    color: rgb(238, 231, 231);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  #banner-content {
    width: 600px;
  }


   /* app body */
   #profile-box{
     display: block;
     width: 140px;
     height: 140px;
     border-radius: 50%;

     overflow: hidden;
     background: grey;
     margin: auto 0 auto auto;
   }

   #app-body {
     padding: 20vh 0;
   }

   .blocks {
     padding-left: 30px;
   }

   .block-writers{
     margin-top: 60px;
   }
</style>

