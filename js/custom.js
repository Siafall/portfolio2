/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */

$(function() {
    $('.chart').easyPieChart({
      scaleColor: false,
      lineWidth: 15,
      lineCap: 'round',
      barColor: '#FB7A1E',//'#1abc9c',
      trackColor:	"#ecf0f1",
      size: 160,
      easing: 'easeOutBounce',
      animate: 1800,

      //Affiche les pourcentages
      onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
      }		    
    });
});

// Permet de voir les graphiques se remplir
var once=false;
$(document).scroll(function(){ 
var docScroll = $(document).scrollTop(), 
eventShow = $("#sec-comp").offset().top-61;
if(docScroll >= eventShow && once == false){
  once = true;

  //Permet de centrer le texte dans le cercle
  $('.chart').css({
      width: $('canvas').attr('width')+'px',
      height: $('canvas').attr('height')+'px',
      // 'line-height': $('canvas').attr('height')+'px'
  })

  $('#htmlcss').data('easyPieChart').update(75);
  $('#php').data('easyPieChart').update(75);
  $('#csharp').data('easyPieChart').update(70);
  $('#c').data('easyPieChart').update(70);
  $('#sql').data('easyPieChart').update(60);
  $('#javaandroid').data('easyPieChart').update(40);
  $('#bootstrapjs').data('easyPieChart').update(30);
  $('#mvcasp').data('easyPieChart').update(30);
}
});