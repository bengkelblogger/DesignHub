//Sticky Menu
$(document).ready(function(){var a=$("#menu-wrapper").offset().top;var b=function(){var c=$(window).scrollTop();if(c>a){$("#menu-wrapper").css({position:"fixed",top:0,left:0,"z-index":99})}else{$("#menu-wrapper").css({position:"relative"})}};b();$(window).scroll(function(){b()})});
//Search button
$(function(){$(".searchbutton").click(function(){$(this).toggleClass("active");$(".search-form").slideToggle("normal")})});
//Menu Top
$(document).ready(function(){var str=location.href.toLowerCase();$('.main-nav ul li a').each(function(){if(str.indexOf(this.href.toLowerCase())>-1){$("li.highlight").removeClass("highlight");$(this).parent().addClass("highlight")}})})
$(function(){var pull=$('#pull');menu=$('.main-nav ul');menuHeight=menu.height();$(pull).on('click',function(e){e.preventDefault();menu.slideToggle()});$(window).resize(function(){var w=$(window).width();if(w>320&&menu.is(':hidden')){menu.removeAttr('style')}})});
//Title
$(document).ready(function(){$(".sidebar h2").each(function(){var a=$(this);a.html(a.html().replace(/^(\w+)/,"<span>$1</span>"))})});
//Youtube Thumbnail
$(document).ready(function(){$("#play").click(function(){$("#remove").hide();$("#add").show()})});
//Random Post
function showLucky(b){var e=b.feed;var a=e.entry||[];var d=e.entry[0];for(var c=0;c<d.link.length;++c){if(d.link[c].rel=="alternate"){window.location=d.link[c].href}}}function fetchLuck(a){script=document.createElement("script");script.src="/feeds/posts/summary?start-index="+a+"&max-results=1&alt=json-in-script&callback=showLucky";script.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(script)}function readLucky(b){var d=b.feed;var c=parseInt(d.openSearch$totalResults.$t,10);var a=Math.floor(Math.random()*c);a++;fetchLuck(a)}function feelingLucky(){var a=document.createElement("script");a.type="text/javascript";a.src="/feeds/posts/summary?max-results=0&alt=json-in-script&callback=readLucky";document.getElementsByTagName("head")[0].appendChild(a)};
