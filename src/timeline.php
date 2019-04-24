<?php /* Template Name: Timeline Page */ ?>

<?php //get_view_top(); 
    get_header();
    
?>

<header class="header clear" role="banner">
    <div class="header_wrapper">
        <!-- logo -->
        <div class="logo link reveal-min-divi">
            <a href="<?php echo home_url(); ?>"></a>
            <h1>agoodpurpose</h1>
            <!-- <span>agoodpurpose</span> -->

        </div>
        <!-- /logo -->
    </div>
</header>

<div class="loader-rectangle-3"></div>
<div class="loader-rectangle-4"></div>

<main class=" main" role="main" aria-label="Content">

    <section class="timeline">
        <div class="wrapper">
            <div class="events">
                <h1 class="reveal-min-divi">TIMELINE</h1>
                <div class="event">
                    <div class="left reveal-min-divi">
                        <div class="date">
                            <h3>March 2019</h3>
                        </div>
                        <div class="title">
                            <p>Product announcement for the wellness market.</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="details">
                            <p>In our first step, we’ll be helping conscious entrepreneurs improve
                                wellness in
                                the world, because we believe that any big change comes from self-change, and wellness
                                is
                                the
                                foundation for a positive, personal transformation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="back">
        <div class="back-wrapper">
            <div class="back-group reveal-min-divi link">
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