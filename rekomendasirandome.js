<b:if cond='data:blog.pageType == &quot;item&quot;'>
<div class='slidebox'>
  <div class='header-slidebox'>Recommended For You</div>
<ul id='random-posts'>
<script type='text/javascript'>
//<![CDATA[
var rdp_numposts=1;
var rdp_snippet_length=100;
var rdp_info='no';
var rdp_comment='Comment';
var rdp_disable='';
var rdp_current=[];var rdp_total_posts=0;var rdp_current=new Array(rdp_numposts);function totalposts(json){rdp_total_posts=json.feed.openSearch$totalResults.$t}document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&max-results=0&callback=totalposts\"><\/script>');function getvalue(){for(var i=0;i<rdp_numposts;i++){var found=false;var rndValue=get_random();for(var j=0;j<rdp_current.length;j++){if(rdp_current[j]==rndValue){found=true;break}};if(found){i--}else{rdp_current[i]=rndValue}}};function get_random(){var ranNum=1+Math.round(Math.random()*(rdp_total_posts-1));return ranNum};
//]]>
</script>
<script type='text/javascript'>
//<![CDATA[
    function random_posts(json){a=location.href;y=a.indexOf('?m=0');for(var i=0;i<rdp_numposts;i++){var entry=json.feed.entry[i];var rdp_posttitle=entry.title.$t;if('content'in entry){var rdp_get_snippet=entry.content.$t}else{if('summary'in entry){var rdp_get_snippet=entry.summary.$t}else{var rdp_get_snippet="";}};rdp_get_snippet=rdp_get_snippet.replace(/<[^>]*>/g,"");if(rdp_get_snippet.length<rdp_snippet_length){var rdp_snippet=rdp_get_snippet}else{rdp_get_snippet=rdp_get_snippet.substring(0,rdp_snippet_length);var space=rdp_get_snippet.lastIndexOf(" ");rdp_snippet=rdp_get_snippet.substring(0,space)+"&#133;";};for(var j=0;j<entry.link.length;j++){if('thr$total'in entry){var rdp_commentsNum=entry.thr$total.$t+' '+rdp_comment}else{rdp_commentsNum=rdp_disable};if(entry.link[j].rel=='alternate'){var rdp_posturl=entry.link[j].href;if(y!=-1){rdp_posturl=rdp_posturl+'?m=0'}var rdp_postdate=entry.published.$t;if('media$thumbnail'in entry){var rdp_thumb=entry.media$thumbnail.url}else{rdp_thumb="https://lh5.googleusercontent.com/-hxY0rTdcuyM/UfUyPpaoBKI/AAAAAAAACsQ/vFtqfUwj074/s72-no/no-image.PNG"}}};document.write('<li>');document.write('<a href="'+rdp_posturl+'" rel="nofollow" title="'+rdp_posttitle+'"><img alt="'+rdp_posttitle+'" title="'+rdp_posttitle+'" src="'+rdp_thumb+'"/></a>');document.write('<div><a href="'+rdp_posturl+'" rel="nofollow" title="'+rdp_posttitle+'">'+rdp_posttitle+'</a></div>');document.write('<div class="readmorerandom"><a href="'+rdp_posturl+'" rel="nofollow" title="Read More">Read More</a></div>');if(rdp_info=='yes'){document.write('<span>'+rdp_postdate.substring(8,10)+'/'+rdp_postdate.substring(5,7)+'/'+rdp_postdate.substring(0,4)+' - '+rdp_commentsNum)+'</span>'}document.write('<div style="clear:both"></div></li>')}};getvalue();for(var i=0;i<rdp_numposts;i++){document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&start-index='+rdp_current[i]+'&max-results=1&callback=random_posts\"><\/script>')};
//]]>
</script>
</ul>
    <div class='closeslidebox'>&#215;</div>
</div>

<script type='text/javascript'>
//<![CDATA[
$(window).load(function(){
$(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
       $('.slidebox').stop().animate({ right: '0px' });
    }
});
$(function() { 
    $('.closeslidebox').click(function () {
    $('.slidebox').css({right:'-300px'});
    $('.slidebox').fadeOut();
});
     });
});
//]]> 
</script>
</b:if>