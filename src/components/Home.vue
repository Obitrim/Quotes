<template>
    <div id="home">
        <!-- banner section -->
        <div class="banner-section">
            <div class="container" id="banner-content">
                <div class="row">
                    <i class="fas fa-quote-left banner-quote-left"></i>

                    <div class="quote-today col-sm-10 offset-1">
                        <h3>Title</h3>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem recusandae sit officia
                            tempore, reprehenderit praesentium explicabo minima modi ipsa, unde laborum. Expedita,
                            tempora
                            necessitatibus accusamus vero quasi earum explicabo optio.<br>
                            <span style="float: right;"> -&nbsp;Author</span>
                        </p>
                    </div>

                    <i class="fas fa-quote-right banner-quote-right"></i>

                </div>
            </div>

            <!-- quotes link -->
            <!-- Linking to quotes pages -->
            <router-link tag="div" to="/quotes" class="quotes-link" title="check out quotes">
                <a><i class="fas fa-quote-right"></i></a>

            </router-link>

        </div>



        <!-- -------------MAIN CONTENT---------------- -->
        <main>

            <!-- Introduction  -->
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="content-intro">
                                <h3 class="section-title">
                                    All About Quotes
                                    <span class="h-rule box-dark"></span>
                                </h3>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore quos iure
                                    error, nobis, iusto, ex fuga quam quia aperiam et in! Cumque assumenda dolorum et
                                    quae corrupti harum natus!</p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore quos iure
                                    error, nobis, iusto, ex fuga quam quia aperiam et in! Cumque assumenda dolorum et
                                    quae corrupti harum natus!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <!-- Biblical proverbs -->
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md">
                            <div class="content">
                                <img src="" alt="bible" />
                            </div>
                        </div>
                        <div class="col-md align-items-center">
                            <div class="content">
                                <h3 class="section-title">
                                    Biblical Proverbs
                                    <span class="h-rule box-light"></span>
                                </h3>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore quos iure
                                    error, nobis, iusto, ex fuga quam quia aperiam et in! Cumque assumenda dolorum et
                                    quae corrupti harum natus!</p>

                                <a href="#">Read Quotes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Movie quotes section -->
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md">
                            <div class="content">
                                <h3 class="section-title">
                                    Movie Quotes
                                    <span class="h-rule box-dark"></span>
                                </h3>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore quos iure
                                    error, nobis, iusto, ex fuga quam quia aperiam et in! Cumque assumenda dolorum et
                                    quae corrupti harum natus!</p>

                                <a href="#">Read Quotes</a>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="content">
                                <img src="" alt="movie pictures slide show" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- love quotes section-->
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md">
                            <div class="content">
                                <img src="" alt="bible" />
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="content">
                                <h3 class="section-title">
                                    Love quotes
                                    <span class="h-rule box-light"></span>
                                </h3>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore quos iure
                                    error, nobis, iusto, ex fuga quam quia aperiam et in! Cumque assumenda dolorum et
                                    quae corrupti harum natus!</p>

                                <a href="#">Read Quotes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- educational  quotes section-->
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md">
                            <div class="content">
                                <h3 class="section-title">
                                    Educational Quotes
                                    <span class="h-rule box-dark"></span>
                                </h3>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore quos iure
                                    error, nobis, iusto, ex fuga quam quia aperiam et in! Cumque assumenda dolorum et
                                    quae corrupti harum natus!</p>

                                <a href="#">Read Quotes</a>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="content">
                                <img src="" alt="movie pictures slide show" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- write from experience Experience section-->
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md">
                            <div class="content">
                                <h3 class="section-title">
                                    Write A Quote
                                    <span class="h-rule box-light"></span>
                                </h3>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore quos iure
                                    error,
                                    nobis, iusto, ex fuga quam quia aperiam et in! Cumque assumenda dolorum et quae
                                    corrupti
                                    harum natus!</p>

                                <a href="#">Write Quote</a>
                            </div>
                        </div>

                        <div class="col-md">
                            <h3>Rules</h3>
                        </div>
                    </div>
                </div>
            </section>

        </main>

    </div>
</template>


<script>
    export default {

    }
</script>



<style scoped>
    /* banner section */
    .banner-section {
        position: relative;

        width: 100vw;
        height: 100vh;
        padding: 100px 0;
        color: rgb(238, 231, 231);
        background: radial-gradient(rgb(245, 28, 93), rgb(175, 6, 48));

        display: flex;
        align-items: center;
        justify-content: center;
    }


    #banner-content {
        max-width: 600px;
        position: relative;
    }


    .quote-today {
        font-size: 38px;
        line-height: 80%;
        font-weight: 300px;
        font-family: quotes;
        letter-spacing: 1.2px;
    }



    .quotes-link {
        position: absolute;
        right: 10vw;
        bottom: -30px;

        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: orange;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .quotes-link:hover {
        cursor: pointer;
        background: rgb(219, 144, 4);
    }

    .quotes-link a {
        color: #fff;
    }

    .fa-quote-right {
        font-size: 1.4rem;
    }

    /* banner quote iconss */
    .banner-quote-left,
    .banner-quote-right {
        opacity: 0.6;
        color: #fff;
        font-size: 10rem;

        position: absolute;
    }

    .banner-quote-left {
        left: -237px;
        top: -132px;
    }

    .banner-quote-right {
        right: -237px;
        bottom: -132px;
    }




    /* main content */

    main > section {
        min-height: 100vh;
        background: white;
        text-align: center;
    }

    section p {
        padding: 20px;
    }

    main section:nth-child(even) {
        color: rgb(228, 228, 228);
        background: rgb(15, 15, 15);
    }

    main section:last-child {
        background: linear-gradient(to bottom, rgb(15, 15, 15), black);
    }

    section > div.container {
        display: flex;
        align-items: center;
        min-height: inherit !important;
    }

    .content,
    .content-intro {
        margin: 30px auto;
    }

    .section-title {
        position: relative;
        padding-bottom: 15px;
    }

    .h-rule {
        position: absolute;
        left: 50%;
        bottom: 0;

        display: block;
        width: 70px;
        transform: translateX(-50%);
        border-bottom: 2px dotted grey;
    }

    .h-rule::before {
        content: '';
        width: 10px;
        height: 10px;
        background: black;

        position: absolute;
        top: 0;
        left: 50%;

        transform: rotate(45deg) translateX(-50%);
        transform-origin: 50% 50%;
    }

    .h-rule.box-dark::before {
        background-color: black;
    }

    .h-rule.box-light::before {
        background-color: grey;
    }

</style>