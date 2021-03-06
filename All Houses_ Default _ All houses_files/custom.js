jQuery(document).ready(function () {

  //if (jQuery("[rel=tooltip]").length) {jQuery("[rel=tooltip]").tooltip();}
 // jQuery('button').addClass('btn');
// ____________________________________________________________________________________________ resize display

        var myWidth = 0;
        myWidth = window.innerWidth;
        jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
        jQuery(window).resize(function(){
            var myWidth = 0;
            myWidth = window.innerWidth;
            jQuery('#size').remove();
            jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
        });

// ____________________________________________________________________________________________ responsive menu

	var mainMenu = jQuery('.main_menu ul.menu');
  mainMenu.find('li.parent > a').append('<span class="arrow"></span>');
  mainMenu.find(' > li').last().addClass('lastChild');
// ____________________________________________________________________________________________

 jQuery("#mod_simple_membership_user_profile label, #mod_user_profile label, label").removeClass('hasPopover').attr('title', '');

 jQuery('[type="text"]').removeClass('hasTooltip');


/* Active Count Column Houses */

 var countCollumn = 4;
 jQuery(".okno_R").attr('data-columns', countCollumn);
 jQuery('.controls .collumn .btn:contains('+countCollumn+')').addClass('active');


/* Size Margin between Houses Column */

 function maxMargin(item){

    var A = item, max = 0, elem;
        A.each(function () {

            var margin = parseInt( jQuery(this).css('margin-left'), 10) ;

            if ( margin > max)
            max = margin, elem = this;
            jQuery('.okno_R').css('margin-bottom', max);
        });
 };

     maxMargin(jQuery('.okno_R'));

     /* Hide Additional section */

     jQuery(".search_map_layout, .sidebar-left, .sidebar-right").addClass("hide");
     var sideBarLeft = jQuery(".sidebar-left"),
      sideBarRight = jQuery(".sidebar-right"),
      centralContent = jQuery("#contentBox");


/* Switch Count Column Houses */

    jQuery(".controls .collumn .btn").click(function(event) {
        /* Act on the event */
        var countCollumn = jQuery(this).text();
        jQuery(".okno_R").attr('data-columns', countCollumn);
        
        maxMargin( jQuery('.okno_R'));

    });


/* Switch Count Views Type */
     jQuery(".controls .view_type .btn").click(function(event) {
         /* Act on the event */
        var viewType = jQuery(this).text();
         jQuery("#real_estate_container").attr('data-view', viewType);

     });

     /* Styled Btn Active*/

      jQuery(".controls  .btn").click(function(event) {
          /* Act on the event */
         jQuery(this).addClass('active').siblings().removeClass('active');

      });

    /* Controls View Type */

     jQuery(".view_type .btn").click(function(event) {
         /* Act on the event */

         if (jQuery(this).text() == 'list') {
             // statement

             /* Remove collumn houses and it controls */
             
             jQuery('.okno_R').removeAttr('style');
             jQuery('.controls .collumn').addClass('hide');

         } else {
             // statement
            jQuery('.controls .collumn').removeClass('hide');
            maxMargin( jQuery('.okno_R'));
         }


         if (jQuery(this).text() == 'map'||jQuery(this).text() == 'map-reverse') {
            // statement
            jQuery(".rem_search ,.search.btn, .search-ordering.btn").addClass('hide');

            jQuery(".rem_all_houses_block").removeClass('span9').addClass('span12');

            var countCollumn = 2;
            jQuery(".okno_R").attr('data-columns', countCollumn);
            jQuery('.controls .collumn .btn:contains('+countCollumn+')').addClass('active').siblings().removeClass('active');
            jQuery('.controls .collumn .btn:contains(5), .controls .collumn .btn:contains(4), .controls .collumn .btn:contains(3)').addClass('hide');

            jQuery(".search_map_layout").removeClass("hide");

         } else {
             // statement

              jQuery(".controls .collumn .btn , .search.btn, .search-ordering.btn").removeClass('hide');

              jQuery(".search_map_layout").addClass("hide");
         }


     });

     /* direction Page */
     

     jQuery(".direction.btn").click(function(event) {
         /* Act on the event */

        var page_dir = jQuery("html").attr('dir');

         if (page_dir == "ltr") {
             // statement
            jQuery("html").attr('dir', 'rtl');

         } else {
            jQuery("html").attr('dir', 'ltr');
         }
     });

     /* Switch Layout */

     jQuery(".search-controls .btn, .sidebar-controls .btn").click(function(event) {
         /* Act on the event */
         maxMargin( jQuery('.okno_R'));
     });

     jQuery(".btn.search").click(function(event) {
         /* Act on the event */

         jQuery(".rem_all_houses_block").toggleClass('span12').toggleClass('span9');

         jQuery(".rem_search").toggleClass('hide');

        var countCollumn = 4;
        jQuery(".okno_R").attr('data-columns', countCollumn);
        jQuery('.controls .collumn .btn:contains('+countCollumn+')').addClass('active').siblings().removeClass('active');
        jQuery('.controls .collumn .btn:contains(5)').toggleClass('hide');

     });

/* Switch Ordering Search */

     jQuery(".btn.search-ordering").click(function(event) {
         /* Act on the event */
         jQuery(".house_container>.row-fluid").toggleClass('reverse');
     });

     /* Sidebars */

     jQuery(".sidebar-controls .btn").click(function(event) {
    /* Act on the event */

    if (jQuery(this).hasClass('sidebar_left') || jQuery(this).hasClass('sidebar_right') ) {
        // statement

        if (jQuery(this).hasClass('sidebar_left')) {
        // statement

            var activeBlock = sideBarLeft,
            hideBlock = sideBarRight;

        }

        else if (jQuery(this).hasClass('sidebar_right')) {

            var activeBlock = sideBarRight,
            hideBlock = sideBarLeft;

        }

        if (sideBarLeft.is(':visible')==true && sideBarRight.is(':visible')==true)
        {
            centralContent.removeClass('col-lg-6 col-md-6 col-sm-6');
        }

        else if (activeBlock.hasClass('hide')) {

            centralContent.removeClass('col-lg-12 col-md-12 col-sm-12');

        }


        if
        (activeBlock.hasClass('hide') || sideBarLeft.is(':visible')==true && sideBarRight.is(':visible')==true) {
        // statement
            activeBlock.removeClass('hide');
            centralContent.addClass('col-lg-9 col-md-9 col-sm-9');
            hideBlock.addClass("hide");

        } else {
        // statement
            activeBlock.addClass('hide');
            centralContent.addClass('col-lg-12 col-md-12 col-sm-12').removeClass('col-lg-9 col-md-9 col-sm-9');
        }

    } else {
        // statement
    }

    });

     jQuery(".btn.sidebar_left_right").click(function(event) {

        if (sideBarLeft.is(':visible')==true || sideBarRight.is(':visible')==true) {
            centralContent.addClass('col-lg-6 col-md-6 col-sm-6').removeClass('col-lg-9 col-md-9 col-sm-9');
        }
        
        if (sideBarLeft.is(':hidden')==true && sideBarRight.is(':hidden')==true ) {
        // statement
            centralContent.addClass('col-lg-6 col-md-6 col-sm-6').removeClass('col-lg-12 col-md-12 col-sm-12');
        } 
        if (sideBarLeft.is(':visible')==true && sideBarRight.is(':visible')==true ) {

            centralContent.removeClass('col-lg-6 col-md-6 col-sm-6').addClass('col-lg-12 col-md-12 col-sm-12');

        }

        if  (sideBarLeft.is(':visible')==true && sideBarRight.is(':visible')==true ) {
        // statement
            sideBarRight.addClass('hide');
            sideBarLeft.addClass("hide");

        } else {

            sideBarRight.removeClass('hide');
            sideBarLeft.removeClass("hide");
        }
        
     });


     
     

 });


// })(jQuery);