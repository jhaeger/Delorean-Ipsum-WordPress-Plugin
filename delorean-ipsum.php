<?php 
/*
Plugin Name: Delorean Ipsum
Plugin URI: https://github.com/jhaeger/
Description: This plugin adds Delorean Ipsum from https://github.com/polevaultweb/DeLorean-Ipsum to elements with specified class of .dolorean-elementName
Version: 1.0
Author: Jason Haeger
Author URI: http://greyleafmedia.com
*/
add_action('wp_enqueue_scripts', 'delorean_ipsum_scripts');
function delorean_ipsum_scripts() {
    wp_enqueue_script('delorean-ipsum', '/wp-content/plugins/delorean-ipsum/js/jquery.delorean.ipsum.min.js', array('jquery'), 0.1, true);
    wp_enqueue_script('delorean-init', '/wp-content/plugins/delorean-ipsum/js/script.js', array('jquery', 'delorean-ipsum'), 0.1, true);
}