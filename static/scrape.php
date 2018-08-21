<?php


$youtube = 'https://www.youtube.com/user/TheCatch13777/about'; //get the html returned from the following url
$facebookurl = "https://www.facebook.com/Iglesia-de-Cristo-en-Elgin-243271119073381/";
$facebook = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIglesia-de-Cristo-en-Elgin-243271119073381%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=555207491508441'; //get the html returned from the following url
$twitter = 'https://twitter.com/CristoElgin?ref_src=twsrc%5Etfw'; //get the html returned from the following url
$insta = 'https://www.instagram.com/cristoelgin'; //get the html returned from the following url


function scrape_media($url) {
	$insta_source = file_get_contents($url);
	$shards = explode('window._sharedData = ', $insta_source);
	$insta_json = explode(';</script>', $shards[1]); 
	$insta_array = json_decode($insta_json[0], TRUE);
	return $insta_array;
}

function curlFunction($source_url){
    $ch = curl_init();
    $userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:15.0) Gecko/20100101 Firefox/15.0.1';

    curl_setopt($ch, CURLOPT_USERAGENT,       $userAgent);
    curl_setopt($ch, CURLOPT_URL,             $source_url);
    curl_setopt($ch, CURLOPT_HEADER,      false);
    curl_setopt($ch, CURLOPT_FAILONERROR,     true);
    curl_setopt($ch, CURLOPT_ENCODING,        "UTF-8" );
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION,  true);
    curl_setopt($ch, CURLOPT_AUTOREFERER,         true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,  true);
    curl_setopt($ch, CURLOPT_TIMEOUT,             60);
  
    $html= curl_exec($ch);
    curl_close($ch);
    return $html;
  }   


  $w = curlFunction($facebook);


$html = file_get_contents($youtube, false, stream_context_create(array('ssl' => array('verify_peer' => false, 'verify_peer_name' => false))));
$html3 = file_get_contents($twitter, false, stream_context_create(array('ssl' => array('verify_peer' => false, 'verify_peer_name' => false))));

		
$dom = new DomDocument();
@$dom->loadHTML($html);
$finder = new DomXPath($dom);
$nodes = $finder->evaluate("//*[@id='browse-items-primary']/li/div/div[3]/div/span[2]/b");
$node = $nodes->item(0);
$youtubeValue = $node->nodeValue;
 
 
$dom2 = new DomDocument();
@$dom2->loadHTML($w);
$finder2 = new DomXPath($dom2);
$nodes2 = $finder2->evaluate("//*[@id='u_0_1']/div[2]/div[2]/div[2]");
$node2 = $nodes2->item(0);
$facebookValue = $node2->nodeValue;

$dom3 = new DomDocument();
@$dom3->loadHTML($html3);
$finder3 = new DomXPath($dom3);
$nodes3 = $finder3->evaluate("//*[@id='page-container']/div[1]/div/div[2]/div/div/div[2]/div/div/ul/li[3]/a/span[3]");
$node3 = $nodes3->item(0);
$twitterValue = $node3->nodeValue;

$results_insta= scrape_media($insta);
$instaValue = $results_insta['entry_data']['ProfilePage'][0]['graphql']['user']['edge_followed_by']['count'];

 


$res1['name'] = "youtube";
$res1['value'] = $youtubeValue . " views";
$res1['url']= $youtube;
$res1['class'] = "youtube-icon social-links";

$res2['name'] = "twitter";
$res2['value'] = $twitterValue . " followers";
$res2['url']= $twitter;
$res2['class'] = "twitter-icon social-links";


$res3['name'] = "facebook";
$res3['value'] = $facebookValue;
$res3['url']= $facebookurl;
$res3['class'] = "facebook-icon social-links";


$res4['name'] = "instagram";
$res4['value'] = $instaValue . " followers";
$res4['url']= $insta;
$res4['class'] = "insta-icon social-links";


// header("Content-type: application/json");      
echo json_encode(array($res1,$res2,$res3,$res4));
    

?>