// ==UserScript==
// @name        dealabs css
// @version     0.15
// @namespace   https://www.dealabs.com/
// @description	css et filtres
// @author      ced
// @updateURL   https://greasyfork.org/fr/scripts/526927-dealabs-css
// @downloadURL https://greasyfork.org/fr/scripts/526927-dealabs-css
// @include     https://www.dealabs.com*
// @exclude     https://www.dealabs.com/submission*
// @grant       GM_addStyle
// @license     MIT
// @run-at document-end
// ==/UserScript==
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var VarApplyMyfilters = 1;

var myMerchantsList  = [ [[9,28,32,61,215,217,304,306,1207,1586,1588,1590,1591,2157,2193],"#ffa500","merchant-id-color"] , [[38],"#9bc848","merchant-id-color"] , [[36],"#ebf8ff","merchant-id-color"] ]; //  array-id-merchant-length can be 1
var myAdultWordsList = [ [["brassiere","tanga","menstruel","jarretelle","lingerie","culotte","string","shorty","shorties","bustier","nuisette","dentelle","corset","anal ","vibro","sextoy","clito","masturbateur",["soutien","gorge"]] , 10 ,"adult"] ]; 
    
var myWordListTest  = [  [[9,28,32,61,215,217,304,306,1207,1586,1588,1590,1591,2157,2193],"#ffa500","merchant-id-color"] 
                       , [["brassiere","tanga","menstruel","jarretelle","lingerie","culotte","string","shorty","shorties","bustier","nuisette","dentelle","corset","anal ","vibro","sextoy","clito","masturbateur",["soutien","gorge"]] , 10 ,"adult"] 
                       , [[38],"#9bc848","merchant-id-color"]                        
                      ];  // amazon  , [[36],"#5fcdf5","merchant-id-color","#000000"] 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function myModifyMenu() 
{    
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
  
let chat_ul = "<ul style=\"margin:1rem;\">";
    chat_ul += "<li  style=\"margin-bottom:1rem;\"><a href=\"https://www.dealabs.com/discussions\">Discussions</a></li>";
 
for ( i=0; i<MyMenuDiscussions.length/3; i++)  
    {        
    chat_ul += '<li><img src="'+ MyMenuDiscussions_Prefix_URL_IMG + MyMenuDiscussions[3*i+1] +'" alt="" style="vertical-align:middle;" />';
    chat_ul += '<a href="'+ MyMenuDiscussions_Prefix_URL + MyMenuDiscussions[3*i+0] +'">';
    chat_ul += MyMenuDiscussions[3*i+2] +'</a></li>';      
    }
  
    chat_ul += "<li  style=\"margin-top:1rem;\"><a href=\"https://www.dealabs.com/feedback\">Feedback</a></li>";  
    chat_ul += "<li  style=\"margin-top:1rem;\"><a href=\"https://www.dealabs.com/discussions/httpsgreasyforkorgfrscripts526927-dealabs-css-3001223\">--> Script discussion</a></li>";
    chat_ul += "</ul>";  

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
//document.body.prepend(my_Div_Chat_Menu); 
document.getElementsByClassName("subNav--light")[0].children[0].children[0].children[0].children[0].children[4].after(my_Div_Chat_Menu);   
document.getElementById("chatMenu").addEventListener('click', function() { 
                                                                         var myChatMenu = document.getElementById("my_Div_Chat_Menu_Ul");        
                                                                         if ( myChatMenu.style.display == "none" )
                                                                            myChatMenu.style.display = "block";
                                                                         else  
                                                                            myChatMenu.style.display = "none";
                                                                         }); 
  
//////////// incruster la seconde ligne de menu dans la premiere  
const MyMenu = [ 
                "/nouveaux","Tous","/assets/img/ico_707ed.svg#plus"
               /*,"/hot","Tendance","/assets/img/ico_707ed.svg#trending"  // tendance = bons plans  */
               ,"/top","Les + hot","/assets/img/ico_707ed.svg#flame"
               ,"/highlights","Pour vous","/assets/img/ico_707ed.svg#people" 
               ];  
 
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

`;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mycss1_not_main_discussion =` div:has(>section):has(#tour-filter) { display:none; } `;
// #discussionHeaderPortal  .thread--discussion  .threadGrid-headerMeta  .threadGrid-footerMeta
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mycss2 =` .listLayout-side  { width:0%; max-width:0em; min-width:0em; } `;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mycss3 =` .userHtml  { display:none; } `;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Myfilters(myWordListTemp)  
{
var myCssTemp = ''; 
if ( myWordListTemp.length > 0 )
   {
   for ( i=0; i<myWordListTemp.length; i++ )
       {      
       if ( myWordListTemp[i][2] == "merchant-id-color" || myWordListTemp[i][2] == "keywords-color")   
           myCssTemp += 'article:not(.thread--expired):has('; 
           
       if ( myWordListTemp[i][2] == "adult" )
          myCssTemp += 'article:has(';     
            
       for ( j=0; j<myWordListTemp[i][0].length; j++ )
           {               
           if ( j > 0 ) myCssTemp += ' , ';     

    
           //////// selector merchant id
           if ( myWordListTemp[i][2] == "merchant-id-color" )
              {      
              myCssTemp += 'a[href$="merchant-id=' +myWordListTemp[i][0][j]+'" i] \n'; 
              }  
             
           //////// selector keyword(s)  
           if ( myWordListTemp[i][2] == "keywords-color" )
           if ( !(myWordListTemp[i][0][j] instanceof Array )) // multiple keywords ?
              {                
              myCssTemp += 'a[href*="' +myWordListTemp[i][0][j]+'" i] , a[title*="'+myWordListTemp[i][0][j]+'" i] \n'; 
              }      
           else 
              { 
              // [["blablabla",["XXX","YYY","ZZZ"]],"#ebf8ff","keywords-color"]   
              // les "k" mots doivent être présents  a[href*="XXX" i][href*="YYY" i][href*="ZZZ" i]   
              for ( k = 0; k<myWordListTemp[i][0][j].length; k++ )  
                  {                   
                  if ( k == 0 )  
                     myCssTemp += 'a';  
                  myCssTemp += '[href*="'+myWordListTemp[i][0][j][k]+'" i]';                     
                  }  
              myCssTemp += ' , ';  
                
              for ( k = 0; k<myWordListTemp[i][0][j].length; k++ )  
                  {                   
                  if ( k == 0 )  
                     myCssTemp += 'a';  
                  myCssTemp += '[title*="'+myWordListTemp[i][0][j][k]+'" i]';                     
                  }  
              myCssTemp += ' \n';
              }    
           
           //////// selectors adult  
           if ( myWordListTemp[i][2] == "adult" )
           if ( !(myWordListTemp[i][0][j] instanceof Array ))
              {                
              myCssTemp += 'a[href*="' +myWordListTemp[i][0][j]+'" i] , a[title*="'+myWordListTemp[i][0][j]+'" i] \n'; 
              }      
           else 
              {  
              for ( k = 0; k<myWordListTemp[i][0][j].length; k++ )  
                  {                   
                  if ( k == 0 )  
                     myCssTemp += 'a';  
                  myCssTemp += '[href*="'+myWordListTemp[i][0][j][k]+'" i]';                     
                  }  
              myCssTemp += ' , ';  
                
              for ( k = 0; k<myWordListTemp[i][0][j].length; k++ )  
                  {                   
                  if ( k == 0 )  
                     myCssTemp += 'a';  
                  myCssTemp += '[title*="'+myWordListTemp[i][0][j][k]+'" i]';                     
                  }  
              myCssTemp += ' \n';                
              }    
             
           }          
       // ajout du css  
       if ( myWordListTemp[i][2] == "merchant-id-color" || myWordListTemp[i][2] == "keywords-color" )
          {
          myCssTemp += '){background-color:'+myWordListTemp[i][1]+'; \n'; 
          myCssTemp += '& .chip--type-default , & .chip--type-warning  {background-color:'+myWordListTemp[i][1]+';  border:0;box-shadow:unset;} \n'; 
          myCssTemp += '& .vote-temp , & .vote-box {background-color:#ffffff;} \n'; 
          
          // ultilisation de(s) couleur(s) supplémentaire(s) 
          if ( myWordListTemp[i].length  >= 4 )  
             {
             myCssTemp += '& .threadListCard-footer-action {background-color:#ffffff; color:'+myWordListTemp[i][3]+'; border:0;box-shadow:unset;} \n'; 
             myCssTemp += '& .chip--type-default , & .chip--type-warning  { color:'+myWordListTemp[i][3]+'; } \n';    
             } 
          else
             {
             myCssTemp += '& .threadListCard-footer-action {background-color:#ffffff; color:'+myWordListTemp[i][1]+'; border:0;box-shadow:unset;} \n'; 
             myCssTemp += '& .chip--type-default , & .chip--type-warning  { color:#ffffff; } \n';   
             } 
          myCssTemp += '}';    
          } 
        
       if ( myWordListTemp[i][2] == "adult" )
          {
          myCssTemp += '){ & .threadListCard-image { opacity:0%; } }';   
          } 
        
       }
  }     
addMyCSS(myCssTemp); 
}    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addMyCSS(mycss1);

if ( window.location.href != "https://www.dealabs.com/discussions" && window.location.href != "https://www.dealabs.com/groupe/les-demandes-de-deals" )
    addMyCSS(mycss1_not_main_discussion);

if ( window.location.href.indexOf("https://www.dealabs.com/search") < 0 && window.location.href.indexOf("https://www.dealabs.com/groupe") < 0 )
   {
   addMyCSS(mycss2);   // réduire les div sur les côtés
   }

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
      
   if ( VarApplyMyfilters == 1 ) 
      {
      Myfilters(myWordListTest);      // combiner les deux suivants
      // Myfilters(myMerchantsList);  // juste le filtre couleur marchand  
      // Myfilters(myAdultWordsList); // juste le filtre adulte        
      }  
   } 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Release notes

Userscript:
https://greasyfork.org/fr/scripts/526927-dealabs-css

Github pour les anciennes versions
https://github.com/cednieb/dealabs_css_2025

Mises à jour
0.02:
Mise à jour des // @include

0.03:
Ajout des url d'update

0.05:
Utilisation de MutationObserver au lieu de DOMNodeInserted

0.06:
Menu sur une seule ligne
Ne traiter que les articles non modifiés
Ajout du lien discussions dans le menu

0.07:
Autre approche, ajouter une balise style

0.08:
Un peu de css, voir le screenshot

0.09:
Des filtres basés sur le contenu avec du css uniquement

Orange correspond à un de mes filtres regroupant les marchands de jeux PC
Vert pour la Xbox
Fade - pour les deals expirés
Fade + pour les deals avec de la lingerie ou des jouets pour adultes( j'ai vu que la demande était passée pour ce type de filtre)

0.10
Cosmétique

0.11
Cosmétique
Les deals destinés au adultes ne sont plus cachés, juste la photo.

0.12
Simplification des includes
Ajout d'une exclusion https://www.dealabs.com/submission*
Suite à la nouvelle apparence du premier menu, j'incruste ceux de la deuxiéme ligne

0.15
Ajout d'un menu pour les différentes catégories des discussions qui s'ouvre en haut à gauche
Amélioration des filtres, possibilité de cibler un ensemble de mots 
Exemple  : [["walkman",["drone","cam"],["tv","45","oled"],"skate""],"#5fcdf5","keywords-color","#000000"] 
Résultat : 
un walman 
un drone muni d'une camera
une tv oled de 45 pouces   !! pas de guillemets
un skate
Couleur de fond en bleu

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// links
/*
https://www.w3.org/TR/selectors-3/#selectors
https://stackoverflow.com/questions/23683439/gm-addstyle-equivalent-in-tampermonkey
https://fr.javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave
https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting
https://www.alsacreations.com/article/lire/1924-css-has-selecteur-parent.html

https://la-cascade.io/articles/un-monde-de-possibilites-nouvelles-avec-css-has
https://www.matuzo.at/blog/2022/100-days-of-more-or-less-modern-css
https://www.matuzo.at/blog/2022/100daysof-day22   Day 22: the ::backdrop pseudo-element
https://www.matuzo.at/blog/2022/100daysof-day34   Day 34: :is() or :where()
https://www.matuzo.at/blog/2022/100daysof-day44   Day 44: logical floating and clearing
https://www.matuzo.at/blog/2023/100daysof-day71   Day 71: the masonry keyword
https://www.matuzo.at/blog/2023/100daysof-day75   Day 75: font palettes
https://www.matuzo.at/blog/2023/100daysof-day76   Day 76: overwriting colors in font palettes
https://www.matuzo.at/blog/2023/100daysof-day87   Day 87: mask properties
https://www.matuzo.at/blog/2023/100daysof-day88   Day 88: CSS Motion Path
https://www.matuzo.at/blog/2023/100daysof-day91   Day 91: a previous sibling selector with :has()
https://www.matuzo.at/blog/2023/100daysof-day96   Day 96: the margin-trim property
https://www.matuzo.at/blog/2023/100daysof-day99   Day 99: native nesting
https://www.matuzo.at/blog/2023/100daysof-day103  Day 103: the prefers-reduced-transparency media feature
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var old_include=`
// @include https://www.dealabs.com/
// @include https://www.dealabs.com/?page=*
// @include https://www.dealabs.com/highlights*
// @include https://www.dealabs.com/top*
// @include https://www.dealabs.com/hot*
// @include https://www.dealabs.com/nouveaux*
// @include https://www.dealabs.com/search?merchant-id*
// @include https://www.dealabs.com/search?q=*
// @include https://www.dealabs.com/groupe/*
// @include https://www.dealabs.com/profile/*/keyword-alarms*#feed
// @include https://www.dealabs.com/profile/*/bons-plans*
// @include https://www.dealabs.com/profile/*/saved-deals*
// @include https://www.dealabs.com/profile/*/discussions*
// @include https://www.dealabs.com/discussions*
// @include https://www.dealabs.com/discussions-commentes*
`;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
// recup mon feed 
var temp ='';  
var els = document.getElementsByClassName("flex--inline boxAlign-ai--all-c");
for ( i=0; i<els.length; i++) 
    {    
    if (els[i].textContent.length>0) 
       temp += els[i].textContent+' '; 
    console.log(temp);
    }
    
granblue
logitech 
pebble   
imprimantes 3d   
papier 
toilette   
tapo   
xbox store   
mini pc   
redmi   
eneloop   
lessive   
imprimante laser   
arctic f8 pwm pst   
pwm pst
microsoft store   
prime gaming (twitch)  
dove   
vélos électriques   
chromebook   
en magasin : pas-de-calais   
cafetières   
songmics   
vasagle   
xbox game pass      
ssd   
disque dur   
humble bundle choice   
fanatical    
*/  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////