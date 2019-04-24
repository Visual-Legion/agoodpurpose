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
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

    <!-- <meta name="description" content="<?php //bloginfo('description'); ?>"> -->


    <link rel="preload" href="https://use.typekit.net/aqo8mdw.css" as="style" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.typekit.net/aqo8mdw.css" crossorigin="anonymous">

    <script>
    document.documentElement.className = "js";
    var supportsCssVars = function() {
        var e, t = document.createElement("style");
        return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window
                .CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t),
            e
    };
    supportsCssVars() || alert("Please view this demo in a modern browser that supports CSS Variables.");
    </script>


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


    <?php //$header = get_field('header','options'); ?>
    <!-- header -->
    <!-- this is where the header used to be -->