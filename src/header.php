<!doctype html>
<html <?php language_attributes(); ?> class="no-js">

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' : '; } ?><?php bloginfo('name'); ?></title>

    <link href="//www.google-analytics.com" rel="dns-prefetch" />
    <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon" />
    <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed" />
    <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?>"
        href="<?php bloginfo('rss2_url'); ?>" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <meta name="description" content="<?php //bloginfo('description'); ?>"> -->

    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link rel="preload" href="https://use.typekit.net/ecq5blu.css" as="style" crossorigin>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet">
    <link rel="stylesheet" href="https://use.typekit.net/ecq5blu.css">


    <?php wp_head(); ?>
    <script>
    // conditionizr.com
    // configure environment tests
    conditionizr.config({
        assets: '<?php echo get_template_directory_uri(); ?>',
        tests: {}
    });
    </script>

</head>

<body <?php body_class(); ?>>


    <?php $header = get_field('header','options'); ?>
    <!-- header -->
    <header class="header clear" role="banner">
        <div class="header_wrapper">
            <!-- logo -->
            <div class="logo link">
                <a href="<?php echo home_url(); ?>"></a>
                <img src="<?php echo $header['image'] ?>">
            </div>
            <!-- /logo -->

            <!-- nav -->
            <div class="navs_wrapper">
                <nav class="nav" role="navigation">
                    <?php html5blank_nav(); ?>
                    <!-- /* ADD WHEN ADDING LANGS (DONT FORGER JS) */ -->
                    <?php //echo do_shortcode('[wpml_language_switcher type="custom" flags=0 native=1 translated=0]'); ?>
                </nav>
                <a id="hamburger-icon" href="#" title="Menu">
                    <span class="line line-1"></span>
                    <span class="line line-2"></span>
                    <span class="line line-3"></span>
                </a>
            </div>

            <!-- /nav -->
        </div>
    </header>
    <!-- /header -->

    <!-- Move to functions.php? -->
    <?php include('loader.php') ?>