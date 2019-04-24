<?php /* Template Name: Wellness Page */ ?>

<?php //get_view_top(); 
	get_header();
?>

<header class="header clear" role="banner">
    <div class="header_wrapper">
        <!-- logo -->
        <div class="logo link">
            <a href="<?php echo home_url(); ?>"></a>
            <h1>agoodpurpose</h1>
        </div>
        <!-- /logo -->

        <!-- nav -->
        <div class="navs_wrapper">
            <!-- <button class="nav-button"></button> -->
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
        <div class="back reveal">
            <div class="back-wrapper">
                <div class="back-group reveal link">
                    <a href="#"></a>
                    <!-- width="33.331" height="21.125" -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 33.331 21.125">
                        <g id="Arrows_Events" data-name="Arrows Events"
                            transform="translate(1755.873 990.563) rotate(180)">
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
                    <!-- <span>Back</span> -->
                </div>
            </div>
        </div>
        <!-- /nav -->
    </div>
</header>
<!-- /header -->

<!-- Move to functions.php? -->
<?php include('loader.php') ?>

<div id="luxy">
    <main class="wellness main" role="main" aria-label="Content">
        <!-- section -->

        <section class="website-features">
            <div class="wrapper">
                <h1>Website Features</h1>

                <div data-speed-y="5" data-offset="-50" class="feature-rect scroll luxy-el"></div>
                <img data-speed-y="6" data-offset="-60" class="scroll luxy-el"
                    src="/wp-content/uploads/2019/03/agoodpurpose-eye-image.jpg" alt="agoodprupose eye illustration">
                <div class="features">
                    <div class="feature">
                        <div class="left">
                            <h3>Main Features</h3>
                        </div>
                        <div class="right">
                            <ul>
                                <li>Event booking </li>
                                <li>Appointments scheduling</li>
                                <li>Shop and cart</li>
                                <li>Calendar</li>
                                <li>Media library</li>
                                <li>Offline memberships to your offline services</li>
                                <li>Online subscriptions to your online services</li>
                                <li>Coupons option for all services sold</li>

                            </ul>
                        </div>
                    </div>
                    <div class="feature over-eye">
                        <div class="left">
                            <h3>Comes with all our websites</h3>
                        </div>
                        <div class="right">
                            <ul>
                                <li>Beautiful design</li>
                                <li>Optimized for mobile & Tablet</li>
                                <li>Based on WordPress so you are in control</li>
                                <li>SEO friendly</li>
                                <li>Https security</li>
                            </ul>
                        </div>
                    </div>
                    <div class="feature over-eye">
                        <div class="left">
                            <h3>Included too</h3>
                        </div>
                        <div class="right">
                            <ul>
                                <li>Social media integration</li>
                                <li>Instagram feed integration</li>
                                <li>Contact information & form</li>
                                <li>Pop up chat linked to Facebook page</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                    <div class="feature">
                        <div class="left">
                            <h3>Support & Launch (Included)</h3>
                        </div>
                        <div class="right">
                            <ul>
                                <li>Training</li>
                                <li>30 days free post launch support</li>
                                <li>We set up your offerings for launch</li>
                            </ul>
                        </div>
                    </div>
                    <div class="feature pink">
                        <div class="backbround-box"></div>
                        <div class="left">
                            <h3>Optional</h3>
                        </div>
                        <div class="right">
                            <ul>
                                <li>Blog</li>
                                <li>Copywriting</li>
                                <li>Photo Editing</li>
                                <li>Video Editing</li>
                                <li>Photo & video production</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="what-will-you-get">
            <div class="wrapper">
                <h2>what will you get?</h2>

                <div class="features">

                    <div class="feature">
                        <div class="left">
                            <h3>bring your business online</h3>
                        </div>
                        <div class="right">
                            <ul>
                                <li><b>allow your customers to</b></li>
                                <li>Book your services 24/7, on desktop or mobile</li>
                                <li>book & register for private and group classes</li>
                                <li>book & register for workshops, courses, coaching plans (online and offline).</li>
                                <li>Pay or make deposits online securely</li>
                                <li>Stay on track with Google calendar Sync</li>
                            </ul>
                            <ul>
                                <li><b>retain your customers with</b> </li>
                                <li>membership/subscriptions</li>
                                <li>specific content available to members only</li>
                                <li>deals (through coupon codes)</li>
                            </ul>
                        </div>
                    </div>
                    <div class="feature dodge">
                        <img data-speed-y="6" data-offset="-60" class="scroll luxy-el"
                            src="/wp-content/uploads/2019/03/agoodpurpose-clouds-image.jpg"
                            alt="agoodprupose eye illustration">
                        <!-- <div class="text-group"> -->
                        <div class="left">
                            <h3>show your true values</h3>
                        </div>
                        <div class="right">

                            <ul>
                                <li>your audience will remember you with a beautiful branded design</li>
                            </ul>
                            <!-- </div> -->
                        </div>

                    </div>
                    <div class="feature">
                        <div class="left">
                            <h3>Navigate on the go</h3>
                        </div>
                        <div class="right">
                            <ul>
                                <li>Allow your customers to book you 24/7, our websites are optimized for tablet and
                                    mobile.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="process">
            <div class="wrapper">
                <h2>process</h2>

                <div class="steps">
                    <div class="step ">
                        <div class="left">
                            <h3></h3>
                        </div>
                        <div class="right dates">
                            <span class="date">
                                10/06
                            </span>
                            <span class="date">
                                10/06
                            </span>
                            <span class="date">
                                10/06
                            </span>
                            <span class="date">
                                10/06
                            </span>
                            <span class="date">
                                10/06
                            </span>
                            <span class="date">
                                10/06
                            </span>
                        </div>
                    </div>
                    <div class="step">
                        <div class="left">

                            <h3>Content</h3>
                        </div>
                        <div class="right">
                            <span class="start">START</span>
                            <div class="straight">
                                <div class="segment segment-1"></div>
                            </div>
                        </div>
                    </div>
                    <div class="step">
                        <div class="left">
                            <h3>Design</h3>
                        </div>
                        <div class="right">
                            <div class="straight">
                                <div class="segment segment-2"></div>
                            </div>
                        </div>
                    </div>
                    <div class="step">
                        <div class="left">
                            <h3>Design Revisions</h3>
                        </div>
                        <div class="right">
                            <div class="straight">
                                <div class="segment segment-3"></div>
                            </div>
                        </div>
                    </div>
                    <div class="step">
                        <div class="left">
                            <h3>Development</h3>
                        </div>
                        <div class="right">
                            <div class="straight">
                                <div class="segment segment-4"></div>
                            </div>
                        </div>
                    </div>
                    <div class="step">
                        <div class="left">
                            <h3>Second Revisions & Testing</h3>
                        </div>
                        <div class="right">
                            <div class="straight">
                                <div class="segment segment-5"></div>
                            </div>
                        </div>
                    </div>
                    <div class="step">
                        <div class="left">
                            <h3>Launch</h3>
                        </div>
                        <div class="right">
                            <span class="launch">LAUNCH</span>
                            <div class="straight">
                                <div class="segment segment-5"></div>
                            </div>
                        </div>
                    </div>

                </div>
        </section>
        <section class="work-with-us">
            <div class="wrapper">

                <div class="left">
                    <h2>work with us</h2>
                </div>
                <div class="right">
                    <div class="works">
                        <div class="work">
                            <div class="top">
                                <h3>Content</h3>
                            </div>
                            <div class="bottom">
                                <p>We will send you the layout of the website, and you will send us the content we need
                                    to
                                    upload on the website.</p>
                            </div>
                        </div>
                        <div class="work">
                            <div class="top">
                                <h3>Design</h3>
                            </div>
                            <div class="bottom">
                                <p>Relax while we design a beautiful website</p>
                            </div>
                        </div>
                        <div class="work">
                            <div class="top">
                                <h3>Design Revisions</h3>
                            </div>
                            <div class="bottom">
                                <p>Change what you don't like. You have 3 rounds.</p>
                            </div>
                        </div>
                        <div class="work">
                            <div class="top">
                                <h3>Development</h3>
                            </div>
                            <div class="bottom">
                                <p>Coding time. </p>
                            </div>
                        </div>
                        <div class="work">
                            <div class="top">
                                <h3>Second Revisions & Testing</h3>
                            </div>
                            <div class="bottom">
                                <p>We’ll make sure everything works well on different browsers, phones and tablets.
                                    + you have 3 more rounds of changes.</p>
                            </div>
                        </div>
                        <div class="work">
                            <div class="top">
                                <h3>Launch</h3>
                            </div>
                            <div class="bottom">
                                <p>We set all your offerings for a good start. Get ready to go live. </p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section class="order-your-website">
            <div class="wrapper">
                <div class="title-group left scroll luxy-el" data-speed-y="10" data-offset="-120">
                    <h2>order your website</h2>
                    <h2>for 2950€</h2>
                    <h3>or 12 times 246,00€ for a year</h3>
                </div>
                <div class="contact-us right scroll luxy-el" data-speed-y="6" data-offset="-60">
                    <div class="left">
                        <h3>contact us the way
                            you like </h3>
                    </div>
                    <div class="right">
                        <p><a class="messenger" target="_blank" href="https://m.me/571666800020233"><svg height="56.7px"
                                    id="Layer_1" style="enable-background:new 0 0 56.7 56.7;" version="1.1"
                                    viewBox="0 0 56.7 56.7" width="56.7px" xml:space="preserve"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="Facebook_Messenger_1_">
                                        <g>
                                            <path
                                                d="M28.4342,3.8416c-13.4521,0-24.3571,10.1599-24.3571,22.693c0,7.1415,3.5419,13.5115,9.0772,17.6713v8.6525l8.2934-4.5799    c2.2133,0.6163,4.5581,0.949,6.9866,0.949c13.4521,0,24.3571-10.1599,24.3571-22.693S41.8863,3.8416,28.4342,3.8416z     M30.8548,34.4015l-6.2027-6.6566l-12.1029,6.6566l13.3132-14.2209l6.354,6.6566l11.9516-6.6566L30.8548,34.4015z" />
                                        </g>
                                    </g>
                                </svg> chat on messenger</a></p>
                        <p><a class="email" href="mailto:contact@agoodpurpose.com"><svg height="128px" id="Layer_1"
                                    style="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128"
                                    width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g>
                                        <path
                                            d="M86.785,109.878   c-8.188,4.317-16.533,5.962-26.515,5.962c-24.428,0-45.133-17.879-45.133-46.479c0-30.687,21.299-57.201,54.376-57.201   c25.918,0,43.348,18.175,43.348,43.052c0,22.342-12.517,35.448-26.514,35.448c-5.968,0-11.475-4.021-11.025-13.105h-0.594   C69.514,86.342,62.66,90.66,53.721,90.66c-8.636,0-16.083-7-16.083-18.764c0-18.473,14.591-35.309,35.296-35.309   c6.403,0,12.067,1.34,15.937,3.13L83.813,66.68c-2.232,11.323-0.45,16.532,4.463,16.685c7.604,0.146,16.095-9.982,16.095-27.261   c0-21.602-12.964-37.09-36.06-37.09c-24.27,0-44.684,19.212-44.684,49.456c0,24.877,16.241,40.215,38.28,40.215   c8.491,0,16.387-1.783,22.499-5.21L86.785,109.878z M78.598,45.527c-1.493-0.449-4.027-1.043-7.446-1.043   c-13.112,0-23.689,12.366-23.689,26.812c0,6.556,3.275,11.322,9.836,11.322c8.637,0,16.532-11.025,18.169-20.256L78.598,45.527z"
                                            style="fill:#2F3435;stroke:#2F3435;stroke-width:3;stroke-miterlimit:10;" />
                                    </g>
                                </svg> send us an email</a></p>
                        <p><a class="message" href="#contact"><svg id="Layer_1" style="enable-background:new 0 0 30 30;"
                                    version="1.1" viewBox="0 0 30 30" xml:space="preserve"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <path
                                        d="M16.189,16.521L27.463,6H2.537l11.273,10.521C14.477,17.145,15.523,17.145,16.189,16.521z" />
                                    <polygon points="8.906,14.68 1,7.301 1,22.586 " />
                                    <polygon points="21.094,14.68 29,22.586 29,7.301 " />
                                    <path
                                        d="M19.631,16.045l-2.077,1.938c-0.717,0.669-1.636,1.003-2.555,1.003s-1.838-0.334-2.555-1.003l-2.077-1.938L2.414,24h25.172  L19.631,16.045z" />
                                </svg> write us a message</a></p>
                    </div>
                </div>
            </div>
        </section>
        <section class="you-are-not-alone">
            <div class="wrapper">
                <img data-speed-y="5" data-offset="-50" class="scroll luxy-el"
                    src="/wp-content/uploads/2019/03/agoodpurpose-mountains.jpg" alt="agoodprupose eye illustration">
                <div class="title-group left scroll luxy-el" data-speed-y="10" data-offset="-120">
                    <h2>you are not alone</h2>
                    <h2>150 €/month</h2>
                </div>
                <div class="contact-us right scroll luxy-el" data-speed-y="6" data-offset="-60">
                    <div class="left">
                        <h3>adopt us as your digital
                            partners
                        </h3>
                    </div>
                    <div class="right">
                        <p>Professional support including: adding, editing or modifying the website content, Website
                            monitoring, Website quality checks</p>
                        <p>Professional photo editing</p>
                        <p>Monthly Performance analytic reports to learn more about your website performance</p>
                        <p>30 minutes coaching a month</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="faq">
            <div class="wrapper">
                <div class="questions">
                    <div class="question">
                        <div class="left">
                            <span>?</span>
                            <h3>I need something that’s not included here</h3>
                        </div>
                        <div class="right">
                            <p>Chat with us and let us know what you need, we will do our best to help you.</p>
                        </div>
                    </div>
                    <div class="question">
                        <div class="left">
                            <span>?</span>
                            <h3>how long does it take?</h3>
                        </div>
                        <div class="right">
                            <p>Your website should be finished in 4 weeks. But this highly depends on the time you take
                                to
                                give us
                                the content we need.</p>
                        </div>
                    </div>
                    <div class="question">
                        <div class="left">
                            <span>?</span>
                            <h3>why adopting us as your digital partners?</h3>
                        </div>
                        <div class="right">
                            <p>Your website needs to be maintained by adding or updating its content to keep your user
                                engaged and stay listed on the search engines. You also need to make sure it runs
                                smoothly
                                at all times – if you are busy and feel you're getting crazy with all this online stuff,
                                we're here to take care of it.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php //include('modules/contact-form-7.php'); ?>
        <section class="contact" id="contact">
            <div class="wrapper">
                <?php echo do_shortcode('[contact-form-7 id="5" title="Contact form 1"]') ?>
                <div data-speed-y="6" data-offset="-60" class="contact-rect scroll luxy-el">
                    <h2 class="cursive">make it happen</h2>
                </div>

            </div>
        </section>
        <?php include('modules/creating-with-a-good-purpose.php'); ?>
    </main>

    <footer class="footer" role="contentinfo">
        <div class="footer__wrapper wrapper">
            <nav>
                <div class="rel-wrapper">
                    <a class="online" href="/#">Home</a>
                </div>
                <div class="rel-wrapper">
                    <a class="to-come" href="#about">About Us</a>
                    <div id="about" class="coming-soon-popup">
                        <div class="content">
                            <h3>Coming Soon!</h3>
                            <p>
                                We help conscious entrepreneurs build their business online and spread wellness. We
                                create software and products that allow conscious entrepreneurs to make their service
                                more accessible to their customers.</p>
                        </div>
                    </div>
                </div>
                <div class="rel-wrapper">
                    <a class="to-come" href="#media">Media Library</a>
                    <div id="media" class="coming-soon-popup">
                        <div class="content">
                            <h3>Coming Soon!</h3>
                            A collection of beautiful stock photos available for all our clients to use on their website
                        </div>
                    </div>
                </div>
                <div class="rel-wrapper">
                    <a class="online" href="#contact">Contact</a>
                </div>



            </nav>
        </div>
    </footer>
</div>


<?php get_footer(); ?>