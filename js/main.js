//responsive nav
$(document).ready(function () {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });
});


//owl carousel
jQuery(document).ready(function ($) {
  // smooth scrolling
  $('a').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });

  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('.owl-carousel').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 4000,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });
});

//pricing js

function myFunction() {
  var chooseIssue = $("#select-issue").val();
  var chooseDeviceModel = $("#select-device-model").val();
  var chooseDevice = $('#select-device').val();

  //choose iphone,ipad,pixel, samsung
  if (chooseDevice === "iphone") {
    $('#select-device').show();
    console.log('h');
  } if (chooseDevice === 'iPad') {

  }




  if (chooseIssue == "screen" && chooseDeviceModel == "8plus") {
    $("#total-price-text").text("$149");

  } if (chooseIssue == "battery" && chooseDeviceModel == "8plus") {
    $("#total-price-text").text("80");
    $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDeviceModel == "8") {
    $("#total-price-text").text("139");
  } if (chooseIssue == "battery" && chooseDeviceModel == "8") {
    $("#total-price-text").text("70");
    $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDeviceModel == "7plus") {
    $("#total-price-text").text("109");
  } if (chooseIssue == "battery" && chooseDeviceModel == "7plus") {
    $("#total-price-text").text("70");
    $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDeviceModel == "7") {
    $("#total-price-text").text("109");
  } if (chooseIssue == "battery" && chooseDeviceModel == "7") {
    $("#total-price-text").text("70");
    $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDeviceModel == "6splus") {
    $("#total-price-text").text("99");
  } if (chooseIssue == "battery" && chooseDeviceModel == "6splus") {
    $("#total-price-text").text("65");
    $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDeviceModel == "6s") {
    $("#total-price-text").text("$99");
  } if (chooseIssue == "battery" && chooseDeviceModel == "6s") {
    $("#total-price-text").text("60");
    $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDeviceModel == "SE") {
    $("#total-price-text").text("70");
  } if (chooseIssue == "screen" && chooseDeviceModel == "SE") {
    $("#total-price-text").text("65");
  } if (chooseIssue == "screen" && chooseDeviceModel == "6plus") {
    $("#total-price-text").text("90");
  } if (chooseIssue == "battery" && chooseDeviceModel == "6plus") {
    $("#total-price-text").text("60");
    $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDeviceModel == "6") {
    $("#total-price-text").text("80");
  } if (chooseIssue == "battery" && chooseDeviceModel == "6") {
    $("#total-price-text").text("50");
    $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDeviceModel == "5s") {
    $("#total-price-text").text("70");
  } if (chooseIssue == "battery" && chooseDeviceModel == "5s") {
    $("#total-price-text").text("50");
    $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDeviceModel == "5") {
    $("#total-price-text").text("70");
  } if (chooseIssue == "battery" && chooseDeviceModel == "5") {
    $("#total-price-text").text("45");
    $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "battery" && chooseDeviceModel == "x") {
    $("#total-price-text").text("89");
    $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDeviceModel == "x") {
    $("#total-price-text").text("259")
  } if (chooseIssue == "screen" && chooseDeviceModel == "xs") {
    $("#total-price-text").text("280")
  } if (chooseIssue == "screen" && chooseDeviceModel == "xsmax") {
    $("#total-price-text").text("330")
  } if (chooseIssue == "screen" && chooseDeviceModel == "xr") {
    $("#total-price-text").text("200")
  } if (chooseIssue == "battery" && chooseDeviceModel == "xsmax") {
    $("#total-price-text").text("92")
  } if (chooseIssue == "battery" && chooseDeviceModel == "xs") {
    $("#total-price-text").text("87")
  } if (chooseIssue == "battery" && chooseDeviceModel == "xr") {
    $("#total-price-text").text("79")
  }

  $(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 300) {
        $("#nav").css();
      }

      else {
        $("#nav").css("background", "#333");
      }
    })
  })

  //ipad if statements
  // if (selectIpadIssue == "screen" && selectIpadDevice =="mini4"){
  // $("#total-price-text-ipad").text("249");
  // } if (selectIpadIssue == "screen" && selectIpadDevice =="mini3"){
  // $("#total-price-text-ipad").text("209");
  // } if (selectIpadIssue == "screen" && selectIpadDevice =="mini2"){
  // $("#total-price-text-ipad").text("159");
  // } if (selectIpadIssue == "screen" && selectIpadDevice =="mini1"){
  // $("#total-price-text-ipad").text("159");
  // } if (selectIpadIssue == "screen" && selectIpadDevice =="ipad5"){
  // $("#total-price-text-ipad").text("209");
  // } if (selectIpadIssue == "screen" && selectIpadDevice =="air1"){
  // $("#total-price-text-ipad").text("159");
  // } if (selectIpadIssue == "screen" && selectIpadDevice =="air2"){
  // $("#total-price-text-ipad").text("329");
  // } if (selectIpadIssue == "screen" && selectIpadDevice =="pro"){
  // $("#total-price-text-ipad").text("249");
  // } if (selectIpadIssue == "screen" && selectIpadDevice =="ipad4"){
  // $("#total-price-text-ipad").text("89");
  // } if (selectIpadIssue == "screen" && selectIpadDevice =="ipad3"){                                                                                         $("#total-price-text-ipad").text("89");
  // } if (selectIpadIssue == "screen" && selectIpadDevice =="ipad2"){
  //   $("#total-price-text-ipad").text("89")                                                                                             }
}


$(function () {
  var d = new Date(),
    h = d.getHours(),
    m = d.getMinutes();
  if (h < 10) h = '0' + h;
  if (m < 10) m = '0' + m;
  $('input[type="time"][value="now"]').each(function () {
    $(this).attr({ 'value': h + ':' + m });
  });
});