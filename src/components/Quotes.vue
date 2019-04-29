<template>
    <div class="container" id="quotes">
       <div class="row search-box">
            <div class="input-group">
                <div class="input-group-prepend" title="Home">
                    <router-link 
                        to="/"
                        tag="span"
                        class="input-group-text">
                        
                        <a><i i class="fas fa-arrow-left"></i></a>
                    </router-link>
                </div>

                <input class="form-control" type="search" placeholder="Search for items" />
            </div>
       </div>


       <div class="row quotes">
            <div class="col-sm-3" 
                v-for="(quote, index) in quotes" 
                :key="index">

                <div class="quote" :style="{ 'background-color' : quote.bg }">
                    <p>{{ quote.message }}</p>
                    <small> -&nbsp;{{ quote.author }}</small>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default{
        data(){
            return {
                quotes: [
                    {
                        bg: 'yellow',
                        message: 'some quote',
                        author: 'author\'s name',
                    },

                    {
                        bg: 'lightblue',
                        message: "Some quote",
                        author: 'author\'s name'
                    },

                    {
                        bg: 'blue',
                        message: "Some quote",
                        author: 'author\'s name'
                    },

                    {
                        bg: 'pink',
                        message: "Some quote",
                        author: 'author\'s name'
                    }
                ]
            }
        }
    }
</script>



<style scoped>
    .search-box {
        margin: 60px 0;
    }

    input:focus {
        box-shadow: none;
        border-left: none;
    }

    .input-group-prepend:hover {
        cursor: pointer;
    }

    .input-group-text {
        border-right: none;
        background: white;
    }

    .quotes {
        margin: 100px 0;
    }


    .quote {
        padding: 15px;
        font-size: 2rem;
        font-family: quotes;

        position: relative;
    }

    .quote small {
        position: absolute;
        right: 15px;
        bottom: 20px;

        font-size: 1rem;
        font-family: roboto;
    }
</style>
