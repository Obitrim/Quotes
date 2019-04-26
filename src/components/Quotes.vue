<template>
    <div class="container" id="quotes">
       <div class="row search-box">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                </div>

                <input class="form-control" type="search" placeholder="Search for items" />
            </div>
       </div>


       <div class="row content">
            <div class="col-sm-3 quotes-type">
                type
            </div>

            <div class="col-sm-9 quotes">
                quotes
            </div>
        </div>
    </div>

</template>

<script>
    export default{

    }
</script>



<style scoped>
    .search-box {
        margin: 60px 0;
    }

    input:focus {
        box-shadow: none;
    }

</style>
