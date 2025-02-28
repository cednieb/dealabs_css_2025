// ==UserScript==
// @name        dealabs css
// @name:fr     dealabs css
// @version     0.25
// @author      ced
// @namespace   https://www.dealabs.com/
// @description	       dealabs css et filtres
// @description:fr     dealabs css et filtres
// @icon        data:image/x-icon;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQABADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDwD4V+GX8X+P8ARNGFvJPbz3KfahGdpWAMDK2e2Ezz64qx8YfCbeCviDq2jpbywWaSF7PzG3F4G+427v6fUEdqq+ENX0vS45XvIblbwOGiubeRkdB7FSCKteO/FI8TxWrXeo6tqN1bjy45b+UOY4+SVBAySSc5PPFacnu810YKs+fk5H69D//Z
// @updateURL   https://greasyfork.org/fr/scripts/526927-dealabs-css
// @downloadURL https://greasyfork.org/fr/scripts/526927-dealabs-css
// @supportURL  https://github.com/cednieb/dealabs_css_2025
// @include     https://www.dealabs.com*
// @exclude     https://www.dealabs.com/submission*
// @grant       GM_addStyle
// @license     MIT
// @run-at document-end
// ==/UserScript==
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var vAddMyAdultFilter      = 1;
var vAddmyVideoGamesFilter = 1;
var vAddmyFurnitureFilter  = 1;
var vAddmySsdFilter        = 1;
var vAddmyComponentFilter  = 1;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const MyMenu = [ 
                "/nouveaux","Tous","/assets/img/ico_707ed.svg#plus"
            /* ,"/hot","Tendance","/assets/img/ico_707ed.svg#trending" // tendance = bons plans */
               ,"/top","Les + hot","/assets/img/ico_707ed.svg#flame"
               ,"/highlights","Pour vous","/assets/img/ico_707ed.svg#people" 
               ];  

const MyMenuDiscussions_Prefix_URL     = 'https://www.dealabs.com/groupe';
const MyMenuDiscussions_Prefix_URL_IMG = 'https://static-pepper.dealabs.com/thread_groups/raw/avatar';

const MyMenuDiscussions = [                                                                                                  
 "/offres-permanentes","/2204_2/re/38x38/qt/70/2204_2.jpg","Offres permanentes"
,"/les-demandes-de-deals","/22_1/re/38x38/qt/70/22_1.jpg","Les demandes de deals"
,"/blabla-parlez-de-tout-et-de-rien","/23_1/re/38x38/qt/70/23_1.jpg","Blabla"
,"/achats-ventes-echanges-estimations-dons","/28_1/re/38x38/qt/70/28_1.jpg","Achats / Ventes"

,"/le-laboratoire-high-tech-informatique","/33_1/re/38x38/qt/70/33_1.jpg","High-tech & informatique"
,"/le-laboratoire-des-gamers","/32_1/re/38x38/qt/70/32_1.jpg","Gaming"
,"/vos-avisdemandes-sur-les-marchands-et-leurs-offres","/27_1/re/38x38/qt/70/27_1.jpg","Les marchands et leurs offres"
,"/le-laboratoire-audiovisuel","/34_1/re/38x38/qt/70/34_1.jpg","Image, son, photo"

,"/vos-astuces-pour-faire-des-economies","/24_1/re/38x38/qt/70/24_1.jpg","Astuces pour économiser"  
,"/mieux-se-connaitre-presentez-vous","/18_1/re/38x38/qt/70/18_1.jpg","Présentez-vous !"
,"/le-laboratoire-des-voyages-loisirs","/31_1/re/38x38/qt/70/31_1.jpg","Voyages & loisirs"
,"/annonces-officielles","/54_1/re/38x38/qt/70/54_1.jpg","Annonces officielles"

,"/limport-sites-avis-questions-langues","/21_1/re/38x38/qt/70/21_1.jpg","Achats à l'étranger"
,"/concours","/30_1/re/38x38/qt/70/30_1.jpg","Concours"
,"/le-laboratoire-de-la-mode-beaute","/35_1/re/38x38/qt/70/35_1.jpg","Mode & beauté" 
];  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// veiller à utiliser backticks (`) appelés guillemets inversés en français
var mycss1 =`
#main                                      { background-color:#707071; }                      

.listLayout                                { width:70%; max-width:unset; }  
.listLayout-main                           { width:100%; } 

div>div>#discussionHeaderPortal            { display:none; }   /* manque un menu discusssion -> cat */

div:has(> #threadListingDescriptionPortal) { display:none; }                          /* gros encart */

article                                    { border-radius:0%; } 
article.thread--expired                    { opacity:70%; }                           /* deals expirés */

.threadListCard                            { grid-template-areas : "i h b" "i h b" "i h f" ;  grid-template-columns:8.0rem 10.5rem ;  min-height:unset; } 

.threadListCard-image                      { padding = 0.2rem 1rem; background-color:var(--bgBaseSecondary); } 

.threadListCard-header                     { grid-column:unset; display:flex; flex-direction:column; padding:unset; justify-content: space-between; ; }  
.vote-box                                  { margin: 0.5rem 0.25rem 0      0.25rem; }
.chip                                      { margin: 0      0.25rem 0.5rem 0.25rem; }  
.chip--type-default                        { background-color:white; color:black; }  
.chip--type-warning                        { background-color:#ff000011; color:red; }  
.chip--type-expired                        { background-color:white; color:red; }  
.fadeOuterEdge--r                          { box-shadow:unset; z-index: 10; }
button.cept-vote-temp                      { width:2.5rem; text-align: center; } 

.threadListCard-body                       { margin:unset; margin-top:0.5rem; }  

.threadListCard-footer                     { grid-column:unset; display:flex:; align-items:center; padding:unset; gap:0.25rem; margin:0.5rem; }   

a.threadListCard-mainButton                { border-radius:0%; } 

.threadGrid-image                          { display:none; }                         /* image à gauche dans discussions */
.threadGrid                                { padding: 0.1em 1em;}                    /* le contneneur d'une discussion */

// article:not(.thread--expired):has( a[title~="ssd" i]:not( [title~="ram" i],[href*="ram-" i] )) { background-color:#ff000011; color:red; } 
`;

/*
// mode une ligne à faire
//.threadListCard                          { grid-template-areas : "i b h" "i b f" }  
//.threadListCard-header                   { grid-column:unset; display:flex; flex-direction:row; padding:unset; justify-content: space-between; ; }  
// .imgframe                               { display: block; margin: auto; height: auto; max-height: 100%; width: auto; max-width: 100%; } 
// .threadListCard-image                   { padding = 0.1rem 0.1rem; } 
// threadListCard-footer                   { grid-column:unset; display:flex:; align-items:center; padding:unset; gap:0.25rem;  margin-right:0.25rem; }       
//.threadListCard-header                   { grid-column:unset;  display:flex; flex-direction:row-reverse; align-items:center; gap:0.1rem; margin:0.1rem 0.1rem 0 0; padding:unset; }  
//.threadListCard-body                     { white-space: nowrap; overflow: hidden;  text-overflow: ellipsis; margin-right:2rem; }

.threadListCard                            { grid-template-areas : "i b f h";  grid-template-columns:5.0rem 40.0rem 5.0rem 5.0rem;    } 
.threadListCard-header                     { flex-direction:column; } 
.threadListCard-footer                     { flex-direction:row; } 
.threadListCard-body                       { white-space: nowrap; overflow: hidden;  ext-overflow: ellipsis; word-break: break-word; margin-right:2rem; }
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mycss1_not_main_discussion =` div:has(>section):has(#tour-filter) { display:none; } `; 
// #discussionHeaderPortal  .thread--discussion  .threadGrid-headerMeta  .threadGrid-footerMeta

var mycss2 =` .listLayout-side  { width:0%; max-width:0em; min-width:0em; } `;
var mycss3 =` .userHtml  { display:none; } `;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// un petit filtre pour ceux que çà ennuye de voir des petites culottes ou du contenu pour adulte 
var myAdultFilter =`
article:has(
           a[href*="soutien" i]
           )
       :has(
           a[href*="gorge" i]
           )
,    
article:has(
           a[title*="soutien" i]
           )
       :has(
           a[title*="gorge" i]
           )
,
article:has(
           a[href*="brassiere"     i],
           a[href*="tanga"         i],
           a[href*="menstruel"     i],
           a[href*="jarretelle"    i],
           a[href*="lingerie"      i],
           a[href*="culotte"       i],
           a[href*="brassiere"     i],
           a[href*="string"        i],
           a[href*="shorty"        i],
           a[href*="shorties"      i],
           a[href*="bustier"       i],
           a[href*="nuisette"      i],
           a[href*="dentelle"      i],
           a[href*="corset"        i],           
           a[href*="vibromasseur"  i],
           a[href*="sextoy"        i],           
           a[href*="masturbateur"  i],  
           a[href*="clito"         i],          
           a[href*="anal-"         i],                    
           
           a[title*="brassiere"    i],
           a[title*="tanga"        i],
           a[title*="menstruel"    i],
           a[title*="jarretelle"   i],
           a[title*="lingerie"     i],
           a[title*="culotte"      i],
           a[title*="brassiere"    i],
           a[title*="string"       i],
           a[title*="shorty"       i],
           a[title*="shorties"     i],
           a[title*="bustier"      i],
           a[title*="nuisette"     i],
           a[title*="dentelle"     i],
           a[title*="corset"       i],
           a[title*="vibromasseur" i],
           a[title*="sextoy"       i],           
           a[title*="masturbateur" i],
           a[title*="clito"        i],           
           a[title~="anal"         i]            
           )
           {
           background-color:#ffddda;           
           & .threadListCard-image                        { opacity:0%; }  
           & .threadListCard-image:hover                  { opacity:100%; }             
           & .chip--type-default , & .chip--type-warning  { background-color:#ffddda;  border:0; box-shadow:unset; }
           & .vote-temp , & .vote-box                     { background-color:#ffffff;}
           & .threadListCard-footer-action                { background-color:#ffffff;  border:0; box-shadow:unset; color:#000000; } 
           & .chip--type-default , & .chip--type-warning  { color:#000000; }           
           } 
`;  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// petits filtres perso
//
// Quelques couleurs #5fcdf5 #55cd95 #9bc899 #ffa500 #9bc848 #9070aa  #cd853f; #ffddda ,""
//
/////////////////////////////////////////////////////////////////////////
//
// !!! attention à la mise en page pour faciliter la lecture
// Ne jamais insérer un espace ou un retour à la ligne avant le :not() 
// Ce n'est plus la même signification en CSS
// 
// Bon exemple:
//
// article:not(.thread--expired) 
//        :has(             
//            a[title*="ssd" i]:not( [title*="msi" i],   - 
           
// Mauvais exemples:  
//
// article:not(.thread--expired) 
//        :has(             
//            a[title*="ssd" i] :not( [title*="msi" i],   -
//            
// article:not(.thread--expired) 
//        :has(             
//            a[title*="ssd" i]
//            :not( [title*="msi" i],   
// 
/////////////////////////////////////////////////////////////////////////
//
////////////////////////////
// jeux vidéos
////////////////////////////
var myVideoGamesFilter =`
article:not(.thread--expired)  
       :has(           
           a[href$="merchant-id=9"    i],
           a[href$="merchant-id=28"   i],
           a[href$="merchant-id=32"   i],
           a[href$="merchant-id=61"   i],
           a[href$="merchant-id=215"  i],
           a[href$="merchant-id=217"  i],
           a[href$="merchant-id=304"  i],
           a[href$="merchant-id=306"  i],           
           a[href$="merchant-id=1207" i],
           a[href$="merchant-id=1586" i],
           a[href$="merchant-id=1588" i],
           a[href$="merchant-id=1590" i],
           a[href$="merchant-id=1591" i],           
           a[href$="merchant-id=2157" i], 
           a[href$="merchant-id=2193" i]
           )  
,
article:not(.thread--expired) 
       :has(  
           a[href$="merchant-id=38" i]
           )  
           
           {
           background-color: #9bc848;
           & .chip--type-default , & .chip--type-warning  { background-color:#9bc848; color:#ffffff; border:0;box-shadow:unset; }
           & .vote-temp , & .vote-box                     { background-color:#ffffff; }
           & .threadListCard-footer-action                { background-color:#ffffff; color:#9bc848; border:0;box-shadow:unset; }    
           }  
`; 
////////////////////////////
// mobiliers 
////////////////////////////
var myFurnitureFilter =`
article:not(.thread--expired) 
       :has(  
           a[href$="merchant-id=2087" i]
           )  
,
article:not(.thread--expired) 
       :has(
        :is(
           a[href*="vasagle"   i],
            [href*="songmics"  i],
            [href*="meuble"    i],
            [href*="étagère"   i],
            [href*="bureau"    i],
            [href*="chaise"    i],
            [href*="chariot"   i],
            [href*="banc"      i],
            [href*="buffet"    i],
            [href*="fauteuil"  i],
            [href*="matelas"   i],
            [href*="-table"    i],
            [href~="lit-"      i],
           
            [title*="vasagle"  i],
            [title*="songmics" i],
            [title*="meuble"   i],
            [title*="étagère"  i],
            [title*="bureau"   i],
            [title*="chaise"   i],
            [title*="chariot"  i],
            [title*="banc"     i],
            [title*="buffet"   i],
            [title*="fauteuil" i],
            [title*="matelas"  i],
            [title~="table"    i],
            [title~="lit"      i]
           ):not(
                [title*="pc" i],
                [href*="pc" i]
                )
           )
           
           {
           background-color: #cd853f;
           & .chip--type-default , & .chip--type-warning { background-color:#cd853f; color:#ffffff; border:0;box-shadow:unset; }
           & .vote-temp , & .vote-box                    { background-color:#ffffff; } 
           & .threadListCard-footer-action               { background-color:#ffffff; color:#cd853f; border:0;box-shadow:unset; }
           }  
`; 

////////////////////////////
// ssd 
// pas en nvme 
// pas dans un pc ...
////////////////////////////
var mySsdFilter =`
article:not(.thread--expired) 
       :has(  
        :is(a[href*="ssd"  i],[title~="ssd" i]):not(           
                                                   [title*="portable" i],
                                                   [title*="chromebook" i],
                                                   [title*="xbox" i],
                                                   [title*="playstation" i],
                                                   [title*="intel" i],
                                                   [title*="apple" i],
                                                   [title*="amd" i],
                                                   [title*="ryzen" i],
                                                   [title*="radeon" i],
                                                   [title*="nvidia" i],
                                                   [title*="gtx" i],
                                                   [title*="nvme" i],
                                                   [title*="ddr" i],
                                                   [title*="ram" i],
                                                   [title*="pci" i],
                                                   [title*="externe" i],
                                                   [title*="usb" i],
                                                   [href*="portable" i],
                                                   [href*="chromebook" i],
                                                   [href*="xbox" i],
                                                   [href*="playstation" i],
                                                   [href*="intel" i],
                                                   [href*="apple" i],
                                                   [href*="amd" i],
                                                   [href*="ryzen" i],
                                                   [href*="radeon" i],
                                                   [href*="nvidia" i],
                                                   [href*="gtx" i],
                                                   [href*="nvme" i],
                                                   [href*="ddr" i],
                                                   [href*="ram" i],
                                                   [href*="pci" i],
                                                   [href*="externe" i],
                                                   [href*="usb" i]
                                                   )
           )
           {
           background-color: #9bc899;
           & .chip--type-default , & .chip--type-warning { background-color:#9bc899; color:#ffffff; border:0;box-shadow:unset; }
           & .vote-temp , & .vote-box                    { background-color:#ffffff; }
           & .threadListCard-footer-action               { background-color:#ffffff; color:#9bc899; border:0;box-shadow:unset; }
           }             
`; 

////////////////////////////
//
// materiel pc ...
//
// Attention au lien "sauvegarder" et au mot clé "vega"
//
////////////////////////////

var myComponentFilter =`
article:not(.thread--expired) 
       :has(  
           a[title*="2060"  i],
            [title*="3060"  i],
            [title*="4060"  i],
            [title*="3050"  i],
            [title*="4050"  i],
            [title*="ryzen" i],
            [title*="5600g" i],
            [title~="vega"  i],
            
            [href*="2060"   i],
            [href*="3060"   i],
            [href*="4060"   i],
            [href*="3050"   i],
            [href*="4050"   i],
            [href*="ryzen"  i],
            [href*="5600g"  i],
            [href*="vega"   i]
            
            [title~="ryzen" i][title~="ai" i],
            [href~="ryzen"  i][href~="ai"  i]
           )
           {
           background-color: #00aaff;
           & .chip--type-default , & .chip--type-warning { background-color:#00aaff; color:#ffffff; border:0;box-shadow:unset; }
           & .vote-temp , & .vote-box                    { background-color:#ffffff; } 
           & .threadListCard-footer-action               { background-color:#ffffff; color:#00aaff; border:0;box-shadow:unset; }
           }             
`; 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function myModifyMenu() 
{      
let chat_ul = '<ul style="margin:1rem;">';
    chat_ul += '<li style="margin-top:1rem;"><a href="https://www.dealabs.com/discussions">Discussions</a></li>';
 
for ( i=0; i<MyMenuDiscussions.length/3; i++)  
    {        
    chat_ul += '<li style="margin-top:1rem;"><img style="margin-right:1rem;" width="32px" src="'+ MyMenuDiscussions_Prefix_URL_IMG + MyMenuDiscussions[3*i+1] +'" alt="" style="vertical-align:middle;" />';
    chat_ul += '<a href="'+ MyMenuDiscussions_Prefix_URL + MyMenuDiscussions[3*i+0] +'">';
    chat_ul += MyMenuDiscussions[3*i+2] +'</a></li>';      
    }
  
    chat_ul += '<li  style="margin-top:1rem;"><img style="margin-right:1rem;" width="32px" src="'+ MyMenuDiscussions_Prefix_URL_IMG + MyMenuDiscussions[3*2+1] +'" alt="" style="vertical-align:middle;"/><a href="https://www.dealabs.com/feedback">Feedback</a></li>';  
    chat_ul += '<li  style="margin-top:1rem;"><img style="margin-right:1rem;" width="32px" src="'+ MyMenuDiscussions_Prefix_URL_IMG + MyMenuDiscussions[3*2+1] +'" alt="" style="vertical-align:middle;"/><a href="https://www.dealabs.com/discussions/httpsgreasyforkorgfrscripts526927-dealabs-css-3001223">--> Script discussion</a></li>';
    chat_ul += '<li  style="margin-top:1rem;"><img style="margin-right:1rem;" width="32px" src="https://greasyfork.org/vite/assets/blacklogo16-DftkYuVe.png" alt="" style="vertical-align:middle;"/><a href="https://greasyfork.org/fr/scripts/526927-dealabs-css">Greasyfork</a></li>';  
    chat_ul += '<li  style="margin-top:1rem;"><img style="margin-right:1rem;" width="32px" src="https://github.com/fluidicon.png" alt="" style="vertical-align:middle;"/><a href="https://github.com/cednieb/dealabs_css_2025">Github</a></li>';  
    chat_ul += '</ul>';  

var my_Div_Chat_Menu_Ul = document.createElement("div"); 
    my_Div_Chat_Menu_Ul.setAttribute('id', 'my_Div_Chat_Menu_Ul'); 
    my_Div_Chat_Menu_Ul.style.top        = "30";                                            
    my_Div_Chat_Menu_Ul.style.left       = "0";     
    my_Div_Chat_Menu_Ul.style.position   = "fixed"; 
    my_Div_Chat_Menu_Ul.style.zIndex     = "9999";
    my_Div_Chat_Menu_Ul.style.display    = "none"; 
    my_Div_Chat_Menu_Ul.style.background = "white";    
    my_Div_Chat_Menu_Ul.style.color      = "black";               
    my_Div_Chat_Menu_Ul.style.fontSize   = "18px";    
    my_Div_Chat_Menu_Ul.innerHTML = chat_ul;  
  
document.body.prepend(my_Div_Chat_Menu_Ul);   
 
var my_Div_Chat_Menu = document.createElement("div");   
    my_Div_Chat_Menu.setAttribute('id', 'my_Div_Chat_Menu');   

var zhtml  = '<a  id="chatMenu" class="space--mr-2 text--normal size--all-m space--h-2 button button--type-tag button--mode-flat">';
    zhtml += ' <span class="flex--inline boxAlign-ai--all-c">';
    zhtml += '  <svg width="16" height="16" class="space--mr-1 color--graphic-TranslucentSecondary icon icon--tag icon-d--1">';
    zhtml += '   <use xlink:href="/assets/img/ico_632f5.svg#comments"></use>';
    zhtml += '  </svg> + ';
    zhtml += ' </span>';   
    zhtml += '</a>';
    my_Div_Chat_Menu.innerHTML = zhtml;    
  
document.getElementsByClassName("subNav--light")[0].children[0].children[0].children[0].children[0].children[4].after(my_Div_Chat_Menu);   
document.getElementById("chatMenu").addEventListener('click', function() { 
                                                                         var myChatMenu = document.getElementById("my_Div_Chat_Menu_Ul");        
                                                                         if ( myChatMenu.style.display == "none" )
                                                                            myChatMenu.style.display = "block";
                                                                         else  
                                                                            myChatMenu.style.display = "none";
                                                                         });   
//////////// incruster la seconde ligne de menu dans la premiere  
for ( i=0; i<MyMenu.length/3; i++)  
    {
    var mydiv = document.createElement("div");   
        mydiv.setAttribute('class', 'scrollBox-item flex--shrink-0');    
    let zhtml  = '<a href="'+MyMenu[3*i+0]+'" class="space--mr-2 text--normal size--all-m space--h-2 button button--type-tag button--mode-flat">';
        zhtml += ' <span class="flex--inline boxAlign-ai--all-c">';
        zhtml += '  <svg width="16" height="16" class="space--mr-1 color--graphic-TranslucentSecondary icon icon--tag icon-d--1">';
        zhtml += '   <use xlink:href="'+MyMenu[3*i+2]+'"></use>';
        zhtml += '  </svg> '+MyMenu[3*i+1];
        zhtml += ' </span>';
        zhtml += '</a>';
        mydiv.innerHTML = zhtml;  
      
    document.getElementsByClassName("subNav--light")[0].children[0].children[0].children[0].children[0].children[1].after(mydiv); 
    }   
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addMyCSS(mycss)
{  
     if ( typeof GM_addStyle  != "undefined" ) GM_addStyle(mycss);
else if ( typeof PRO_addStyle != "undefined" ) PRO_addStyle(mycss);
else if ( typeof addStyle     != "undefined" ) addStyle(mycss);
else 
   {
   var node = document.createElement("style");
   node.type = "text/css";
   node.appendChild(document.createTextNode(mycss));
   var heads = document.getElementsByTagName("head");     
   if ( heads.length > 0 ) heads[0].appendChild(node);      
   else document.documentElement.appendChild(node); // no head yet, stick it whereever   
   }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// le menu sur une ligne
// ! verifier que le menu existe, ce n'est pas le cas sur toutes les pages
// id="threadListingDescriptionPortal" pour les deals , menu présent
// id="discussionHeaderPortal pour discussions , menu présent
// id="groupHeaderPortal" pour https://www.dealabs.com/groupe/high-tech https://www.dealabs.com/groupe/jeux-pc  , menu absent
// id="UserProfileHeader" page de profil, alertes ... , menu absent
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var nbLoop = 0; // pour arreter le setInterval
if ( !document.getElementById("UserProfileHeader") )  //if(document.getElementById("threadListingDescriptionPortal")||document.getElementById("discussionHeaderPortal")) 
   {                                                             
   var existCondition = setInterval(function() {          
                                               nbLoop++;
                                               if (  nbLoop == 40 )  
                                                  clearInterval(existCondition);     
     
                                               if ( document.getElementsByClassName("subNav--light").length > 0 
                                                    && document.getElementsByClassName("subNav--light")[0].children[0].children[0].children[0].children[0]   
                                                  )
                                                  {     
                                                  clearInterval(existCondition);   
                                                  myModifyMenu();  
                                                  }   
                                               }, 250 );
   } 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addMyCSS(mycss1);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if ( window.location.href != "https://www.dealabs.com/discussions" && window.location.href != "https://www.dealabs.com/groupe/les-demandes-de-deals" )
    addMyCSS(mycss1_not_main_discussion);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if ( window.location.href.indexOf("https://www.dealabs.com/search") < 0 && window.location.href.indexOf("https://www.dealabs.com/groupe") < 0 )
   {
   addMyCSS(mycss2);   // réduire les div sur les côtés
   }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (    window.location.href.indexOf("dealabs.com/highlights") > 0
     || window.location.href == "https://www.dealabs.com/bons-plans"  //  window.location.href = url car les deals https://www.dealabs.com/bons-plans/*
     || window.location.href.indexOf("dealabs.com/top") > 0
     || window.location.href.indexOf("dealabs.com/hot") > 0
     || window.location.href.indexOf("dealabs.com/nouveaux") > 0
     || window.location.href.indexOf("dealabs.com/search?q=") > 0  
     || window.location.href.indexOf("/keyword-alarms") > 0  
     || window.location.href == "https://www.dealabs.com"
     || window.location.href == "https://www.dealabs.com/"
     || window.location.href.indexOf("dealabs.com/?page=") > 0  
   ) 
   {
   addMyCSS(mycss3); // cacher la description    
   
   if ( vAddMyAdultFilter == 1 )       addMyCSS(myAdultFilter);
   if ( vAddmyVideoGamesFilter == 1 )  addMyCSS(myVideoGamesFilter);
   if ( vAddmyFurnitureFilter == 1 )   addMyCSS(myFurnitureFilter);
   if ( vAddmySsdFilter == 1 )         addMyCSS(mySsdFilter);
   if ( vAddmyComponentFilter == 1 )   addMyCSS(myComponentFilter);
   
   }  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////