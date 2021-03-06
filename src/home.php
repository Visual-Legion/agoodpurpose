<?php /* Template Name: Home Page */ ?>

<?php //get_view_top(); 
    get_header();
    
?>

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
    <!-- section -->
    <section class="landing-page " id="moving-image">

        <img class="bg" src="/wp-content/uploads/2019/03/a-good-purpose-home-background-compressed.jpg"
            alt="home background">
        <?php echo do_shortcode('[nk_awb awb_type="image" awb_image="60" awb_image_size="full" awb_image_background_size="cover" awb_image_background_position="50% 50%" awb_parallax="scroll" awb_parallax_speed="0.5" awb_parallax_mobile="true" awb_mouse_parallax="true" awb_mouse_parallax_size="30" awb_mouse_parallax_speed="10000"][/nk_awb]');?>
        <div class="middle-text">
            <h2><span>Improve Humans,</span> <span>Improve the world</span></h2>
        </div>
        <!-- nav -->
        <div class="navs_wrapper">
            <!-- <button class="nav-button"></button> -->
            <nav class="nav home_navs" role="navigation">
                <?php html5blank_nav_extra(); ?>
                <!-- /* ADD WHEN ADDING LANGS (DONT FORGER JS) */ -->
                <?php //echo do_shortcode('[wpml_language_switcher type="custom" flags=0 native=1 translated=0]'); ?>
            </nav>

        </div>

        <!-- /nav -->
    </section>
    <div class="back reveal">
        <div class="back-wrapper">
            <div class="back-group reveal-min-divi link">
                <a href="#"></a>
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