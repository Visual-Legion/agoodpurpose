<?php /* Template Name: Contact */ ?>

<?php get_header(); ?>
<header class="header clear" role="banner">
    <div class="header_wrapper">
        <!-- logo -->
        <div class="logo link">
            <a href="<?php echo home_url(); ?>"></a>
            <h1>agoodpurpose</h1>
            <!-- <span>agoodpurpose</span> -->

        </div>
        <!-- /logo -->
    </div>
</header>

<div class="loader-rectangle-2"></div>

<main class=" main" role="main" aria-label="Content">
    <section class="contact-section contaaaaccct">
        <div class="wrapper">
            <div class="text-group">
                <div class="social">
                    <h3><a class="messenger" target="_blank" href="https://m.me/571666800020233"><svg
                                xmlns="http://www.w3.org/2000/svg" width="15.368" height="15.367"
                                viewBox="0 0 15.368 15.367">
                                <path
                                    d="M15.831,2H3.537A1.535,1.535,0,0,0,2.008,3.537L2,17.367l3.073-3.073H15.831a1.541,1.541,0,0,0,1.537-1.537V3.537A1.541,1.541,0,0,0,15.831,2ZM7.379,8.915H5.842V7.379H7.379Zm3.073,0H8.915V7.379h1.537Zm3.073,0H11.989V7.379h1.537Z"
                                    transform="translate(-2 -2)" /></svg>
                            chat on messenger</a></h3>
                </div>
                <div class="social">
                    <h3><a class="" target="_blank" href="mailto:contact@agoodpurpose.com"><svg
                                xmlns="http://www.w3.org/2000/svg" width="18.441" height="18.441"
                                viewBox="0 0 18.441 18.441">
                                <g opacity="0.54">
                                    <path
                                        d="M9.684,2a7.684,7.684,0,0,0,0,15.367h3.842V15.831H9.684A6.226,6.226,0,0,1,3.537,9.684,6.226,6.226,0,0,1,9.684,3.537a6.226,6.226,0,0,1,6.147,6.147v1.1a1.242,1.242,0,0,1-1.153,1.206,1.242,1.242,0,0,1-1.153-1.206v-1.1A3.843,3.843,0,1,0,12.4,12.4a2.845,2.845,0,0,0,2.274,1.13,2.7,2.7,0,0,0,2.689-2.743v-1.1A7.687,7.687,0,0,0,9.684,2Zm0,9.989a2.305,2.305,0,1,1,2.305-2.305A2.3,2.3,0,0,1,9.684,11.989Z"
                                        transform="translate(-0.463 -0.463)" />
                                    <path d="M0,0H18.441V18.441H0Z" fill="none" />
                                </g>
                            </svg>
                            send us an email</a></h3>
                </div>
                <h3 class="form-title">write us a message</h3>
            </div>

            <?php echo do_shortcode('[contact-form-7 id="53" title="Contact Home"]') ?>
        </div>
    </section>
    <div class="back">
        <div class="back-wrapper">
            <div class="back-group link">
                <a href="/"></a>
                <svg xmlns="http://www.w3.org/2000/svg" width="33.331" height="21.125" viewBox="0 0 33.331 21.125">
                    <g id="Arrows_Events" data-name="Arrows Events" transform="translate(1755.873 990.563) rotate(180)">
                        <line id="Line_77" data-name="Line 77" x2="30.917" transform="translate(1723.542 979.685)"
                            fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2" />
                        <line id="Line_78" data-name="Line 78" x2="9.464" y2="8.833"
                            transform="translate(1744.994 970.851)" fill="none" stroke="#fff" stroke-linecap="round"
                            stroke-width="2" />
                        <line id="Line_79" data-name="Line 79" y1="9.464" x2="9.464"
                            transform="translate(1744.994 979.685)" fill="none" stroke="#fff" stroke-linecap="round"
                            stroke-width="2" />
                    </g>
                </svg>
                <span>Back</span>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>