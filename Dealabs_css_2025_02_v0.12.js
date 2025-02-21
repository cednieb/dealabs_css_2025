// ==UserScript==
// @name        dealabs css
// @version     0.12
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// le menu sur une ligne
// verifier que le menu existe, ce n'est pas le cas sur toutes les pages
// id="threadListingDescriptionPortal" pour les deals , menu présent
// id="discussionHeaderPortal pour discussions , menu présent
// id="groupHeaderPortal" pour https://www.dealabs.com/groupe/high-tech https://www.dealabs.com/groupe/jeux-pc  , menu absent
// id="UserProfileHeader" page de profil, alertes ... , menu absent

var nbLoop = 0; // pour arreter le setInterval
if ( !document.getElementById("UserProfileHeader") )  //if(document.getElementById("threadListingDescriptionPortal")||document.getElementById("discussionHeaderPortal")) 
   {                                                             
   var existCondition = setInterval(function() {   
   
   nbLoop++;
   //console.log(nbLoop);  
     
   if (  nbLoop == 40 )  
      { 
      clearInterval(existCondition); 
      //console.log("-->  nbLoop = "+nbLoop+" , clearInterval");
      }       
     
   if ( document.getElementsByClassName("subNav--light").length > 0 
        && document.getElementsByClassName("subNav--light")[0].children[0].children[0].children[0].children[0]   
      )
      {     
      clearInterval(existCondition);   
      //console.log("--> els found , clearInterval");
     
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
     
   }, 250 );
} 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// veiller à utiliser backticks (`) appelés guillemets inversés en français
var mycss1 =`

#main                                      { background-color:#707071; }                      

.listLayout                                { width:70%; max-width:unset; }  
.listLayout-main                           { width:100%; } 

div:has(>section):has(#tour-filter)        { display:none; }  
 
div>div>#discussionHeaderPortal            { display:none; } 

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

/*
#discussionHeaderPortal
.thread--discussion
.threadGrid-headerMeta
.threadGrid-footerMeta
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mycss2 =`
.listLayout-side                           { width:0%; max-width:0em; min-width:0em; }  
`;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mycss3 =`
.userHtml                                  { display:none; } 
`;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addMyCSS(mycss)
{  
if ( typeof GM_addStyle != "undefined") 
   {
   GM_addStyle(mycss);
   } 
else if (typeof PRO_addStyle != "undefined") 
   {
   PRO_addStyle(mycss);
   } 
else if (typeof addStyle != "undefined") 
   {
   addStyle(mycss);
   } 
else 
   {
   var node = document.createElement("style");
   node.type = "text/css";
   node.appendChild(document.createTextNode(mycss));
   var heads = document.getElementsByTagName("head");
   if ( heads.length > 0 ) 
      {
      heads[0].appendChild(node);
      } 
   else 
      {
      // no head yet, stick it whereever
      document.documentElement.appendChild(node);
      }
   }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function applyMyfilters()
{
// Deux manières de se servir du filtre:
// soit pour mettre en évidence un deal  
// soit pour le supprimer               
  
// article:has(a[href*="pc"])                                                                 cibler un article avec un lien contenant "pc"   
// article:has(a[title*="pc"])                                                                cibler un article avec un titre contenant "pc" mais pas PC
// les liens sont en minuscules mais pas les titres
 
// article:has(a[href*="pc"]):has(a[href*="portable"])                                        cibler un article avec un lien contenant "pc" et "portable" 
// article:has(a[href*="pc"] , a[href*="portable"])                                           cibler un article avec un lien contenant "pc" ou "portable"  
// article:has(a[href*="pc"] , a[href*="portable"]):has(a[href*="4060"] , a[href*="6600"])    cibler un article contenant "pc" ou "portable" avec 4060 ou 6600 
// article:has(a[href*="pc"]):not(:has(a[href*="portable"]))                                  cibler un article avec un lien contenant "pc" mais pas "portable"  
 
// href          https://www.dealabs.com/bons-plans/adaptateur-usb-bluetooth-54-pour-pc-dongle-3002928
// title         Adaptateur USB Bluetooth 5.4 Ugreen pour PC - Dongle
// text-content  Adaptateur USB Bluetooth 5.4 Ugreen pour PC - Dongle
  
// href          https://www.dealabs.com/bons-plans/adaptateur-mural-1-prise-schuko-16a-avec-veilleuse-support-pour-smartphone-tablette-2-ports-usb-et-indicateur-led-blanc-3002848  
// title         Adaptateur Mural 1 prise Schuko - 16A avec veilleuse, support pour Smartphone/ Tablette, 2 ports USB et indicateur LED Blanc (Vendeur Tiers)
// text-content  Adaptateur Mural 1 prise Schuko - 16A avec veilleuse, support pour Smartphone/ Tablette, 2 ports USB et indicateur LED Blanc (Vendeur Tiers)  

// Examinons  article:has(a[href*="pc"] , a[href*="portable"]):has(a[href*="4060"] , a[href*="6600"])        
  
// href          https://www.dealabs.com/bons-plans/firebreather-epic-mini-rtx-4060-ryzen-5-9600x-1tb-16-ram-3002725  
// title         PC Fixe Firebreather Epic Mini - RTX 4060 Ryzen 5 9600x, 1 To, 16 Go Ram - dragoncomputers.eu

// href          https://www.dealabs.com/bons-plans/pc-fixe-gaming-csl-sprint-5682-ryzen-5-5500y-16go-ram-3200mhz-500go-ssd-kingston-nv2-rx6600-8go-msi-a520m-pro-alim-500w-sans-os-3002634 
// title         PC fixe Gaming CSL Sprint 5682 - Ryzen 5 5500, 16Go RAM 3200MHz, 500Go SSD Kingston NV2, RX6600 8Go, MSI A520M-Pro, Alim 500W, Sans OS  

// le 1er deal n est pas retenu tandis que le second l'est.
// Car certains mots ne sont pas présents selon la méthode choisie. 
  
// !!!  Attention à la casse en utilisant title ou text-content , utiliser le i avant de fermer le crochet ]  a[href*="soutien" i]  a[title*="soutien" i]

// petit filtre perso pour tester  
// article:has(a[href*="pc"],a[href*="portable"],a[href*="4060"],a[href*="6600"]):not(:has(a[href*="demat"])){background-color: #ffff00;}
// :has(a[href*="demat"])

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// filtre marchand jeux vidéos 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// pc en orange 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//
//  "9","Microsoft","28","Steam","32","Green Man Gaming","61","GOG","304","Humble Bundle","306","Indiegala","1207","Epic Games Store"
// ,"1586","Instant Gaming","215","Fanatical","217","Games Planet","1588","Gamivo","1590","Kinguin","1591","CDKeys","2157","Eneba","2193","itch.io"	
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// xbox-store en vert  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
//  
//  "38","xbox-store"
//  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// threadListCard thread-clickRoot
// & :has([class$="thread-clickRoot" i]) {border:solid 10rem #ffffff;} 
// overflow--ellipsis
// threadListCard-mainButton button button--shape-circle button--type-primary button--mode-brand threadListCard-footer-action
//  & div[class*="thread-clickRoot" i]  {  border:solid 5px red;} 
//  .thread-clickRoot { border:solid 5px red;} 
// :not(:has(a[href*="playstation" i],a[href*="ps4" i],a[href*="ps5" i] ))  
 
var mycssfilters =`
article:not(.thread--expired) 
       :has(
            a[href$="merchant-id=9"    i]
           ,a[href$="merchant-id=28"   i]
           ,a[href$="merchant-id=32"   i]
           ,a[href$="merchant-id=61"   i]
           ,a[href$="merchant-id=215"  i]
           ,a[href$="merchant-id=217"  i]
           ,a[href$="merchant-id=304"  i]
           ,a[href$="merchant-id=306"  i]           
           ,a[href$="merchant-id=1207" i]
           ,a[href$="merchant-id=1586" i]
           ,a[href$="merchant-id=1588" i]
           ,a[href$="merchant-id=1590" i]
           ,a[href$="merchant-id=1591" i]           
           ,a[href$="merchant-id=2157" i]
           ,a[href$="merchant-id=2193" i]   
           )         
           {               
            background-color:#ffa500;  
            & .chip--type-default , & .chip--type-warning  {background-color:#ffa500; color:#ffffff; border:0;box-shadow:unset;}  
            & .vote-temp , & .vote-box {background-color:#ffffff;}  
            & .threadListCard-footer-action {background-color:#ffffff; color:#ffa500; border:0;box-shadow:unset;}             
           }

article:not(.thread--expired) 
       :has(  
           a[href$="merchant-id=38" i]
           )  
           {
           background-color:#9bc848;
           & .chip--type-default , & .chip--type-warning  {background-color:#9bc848; color:#ffffff; border:0;box-shadow:unset;}             
           & .vote-temp ,& .vote-box {background-color:#ffffff; }    
           & .threadListCard-footer-action {background-color:#ffffff; color:#9bc848; border:0;box-shadow:unset;}            
           }  
`;

// un petit filtre pour ceux que çà ennuye de voir des petites culottes ou du contenu pour adulte, l'image n'apparait plus  
var mycssadultfilters =`
article:has(
            a[href*="brassiere" i]
           ,a[href*="tanga" i]
           ,a[href*="menstruel" i]
           ,a[href*="jarretelle" i]
           ,a[href*="lingerie" i]
           ,a[href*="culotte" i]
           ,a[href*="string" i]
           ,a[href*="shorty" i]
           ,a[href*="bustier" i]
           ,a[href*="nuisette" i]
           ,a[href*="dentelle" i]
           ,a[href*="corset" i]
           ,a[href*="soutien" i][href*="gorge" i]           
                      
           ,a[title*="brassiere" i]
           ,a[title*="tanga" i]
           ,a[title*="menstruel" i]
           ,a[title*="jarretelle" i]
           ,a[title*="lingerie" i]
           ,a[title*="culotte" i]
           ,a[title*="string" i]
           ,a[title*="shorty" i]
           ,a[title*="bustier" i]
           ,a[title*="nuisette" i]
           ,a[title*="dentelle" i]
           ,a[title*="corset" i]           
           ,a[title*="soutien" i][title*="gorge" i] 

           ,a[href*="anal " i]
           ,a[href*="vibro" i]
           ,a[href*="sextoy" i]
           ,a[href*="clito" i]
           ,a[href*="masturbateur" i]
           
           ,a[title*="anal " i] 
           ,a[title*="vibro" i] 
           ,a[title*="sextoy" i] 
           ,a[title*="clito" i] 
           ,a[title*="masturbateur" i]     
           )
           {          
           &  .threadListCard-image { opacity:0%; }
           }
`;  
  
addMyCSS(mycssfilters);
addMyCSS(mycssadultfilters);        
}  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addMyCSS(mycss1);

if ( window.location.href.indexOf("https://www.dealabs.com/search") < 0 && window.location.href.indexOf("https://www.dealabs.com/groupe") < 0 )
   {
   addMyCSS(mycss2);
   }

if (    window.location.href.indexOf("dealabs.com/highlights") > 0
     || window.location.href == "https://www.dealabs.com/bons-plans"  //  window.location.href = url car les deals https://www.dealabs.com/bons-plans/*
     || window.location.href.indexOf("dealabs.com/top") > 0
     || window.location.href.indexOf("dealabs.com/hot") > 0
     || window.location.href.indexOf("dealabs.com/nouveaux") > 0
     || window.location.href.indexOf("dealabs.com/search?q=") > 0  
     || window.location.href.indexOf("/keyword-alarms") > 0  
     || window.location.href=="https://www.dealabs.com"
     || window.location.href=="https://www.dealabs.com/"
     || window.location.href.indexOf("dealabs.com/?page=") > 0  
   ) 
   {
   addMyCSS(mycss3);
      
   if ( VarApplyMyfilters == 1 ) 
      applyMyfilters();
   } 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
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

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stuff
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



/*

#UserProfileHeader :has( .listLayout-main  )          aGrid userProfile-header-avatar
                             display;flex
                             flex-drection:column;


<div>
  <div id="UserProfileHeader" track-pass-by="">
    <section class="userProfile-header space--v-4 color--bg-BaseSecondary">
      <div class="userProfile-header-inner page-header page-center page-content">
        <div class="listLayout-main color--text-TranslucentPrimary flex flex--dir-col space--mh-a hAlign--all-c bRad--a-l">
          <div class="bRad--a-l">
            <div class="bRad--a-l space--h-3 space--v-4 userProfile-loyaltyTier1">
              <div class="space--b-3">
                <div class="aGrid userProfile-header-avatar">
                  <img src="https://static-pepper.dealabs.com/users/raw/default/29436_1/fi/96x96/qt/45/29436_1.jpg" srcset="https://static-pepper.dealabs.com/users/raw/default/29436_1/fi/192x192/qt/45/29436_1.jpg 2x" alt="Avatar de cedni" class="img img--type-entity img--square-xl">
                  <!---->
                </div>
              </div>
              <div class="vAlign--all-m flex--grow-1 color--text-TranslucentPrimary">
                <div class="width--all-12 flex flex--dir-col">
                  <div class="flex flex--dir-col boxAlign-ai--all-c">
                    <div class="overflow--wrap-off flex--inline boxAlign-ai--all-c">
                      <span class="size--all-xxl">cedni</span>
                      <div class="space--ml-2">
                        <!---->
                        <!---->
                      </div>
                    </div>
                    <div class="flex flex--dir-col flex-dir-column-reverse">
                      <div class="flex flex--dir-col space--mh-a space--mt-2">
                        <div class="lbox--f lbox--v-2 space--mh-a">
                          <span class="overflow--wrap-off size--all-s color--text-TranslucentPrimary">Inscrit(e) depuis le 28 avril 2014</span>
                        </div>
                        <div class="flex boxAlign-jc--all-c boxAlign-ai--all-c space--mh-a space--fromW2-ml-0 space--fromW2-mr-0 color--text-TranslucentPrimary gap-2 space--mt-2">
                          <span class="size--all-s">
                            <span class="text--b">29</span> deals </span>
                          <svg width="8" height="8" class="space--mh-2 color--text-TranslucentQuaternary icon icon--dot">
                            <use xlink:href="/assets/img/ico_707ed.svg#dot"></use>
                          </svg>
                          <span class="size--all-s">
                            <span class="text--b">299</span> commentaires </span>
                        </div>
                      </div>
                      <a href="/profile/cedni/badges" class="gap-1 flex flex--wrap boxAlign-ai--all-c space--mt-2 space--mh-a" data-t-click="" data-t="viewBadges">
                        <img width="24" height="24" src="/assets/img/badges/voteCountLevel2-active.svg" title="Professeur : Vous avez voté sur 1200 deals">
                        <img width="24" height="24" src="/assets/img/badges/maxTemperatureLevelLevel1-active.svg" title="Étincelle : Un de vos deals a atteint au moins 250°">
                        <img width="24" height="24" src="/assets/img/badges/threadCountLevel1-active.svg" title="Cobaye : Vous avez posté au moins 10 deals">
                        <img width="24" height="24" src="/assets/img/badges/voteCountLevel1-active.svg" title="Surveillant : Vous avez voté sur 300 deals">
                        <span class="flex--inline justify-content-center boxAlign-ai--all-c">
                          <svg width="18" height="6" class="color--graphic-TranslucentSecondary icon icon--overflow space--ml-2">
                            <use xlink:href="/assets/img/ico_707ed.svg#overflow"></use>
                          </svg>
                        </span>
                      </a>
                      <blockquote class="space--mt-2">
                        <p class="text--quoteInline size--all-s box--all-i">Bien faire, laisser dire ...</p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!---->
        </div>
      </div>
    </section>
  </div>
  

*/



/*
https://www.dealabs.com/highlights     /assets/img/ico_707ed.svg#people     /assets/img/profile-placeholder_09382.png  https://static-pepper.dealabs.com/users/raw/default/2858187_4/fi/96x96/qt/45/2858187_4.jpg
https://www.dealabs.com/top            /assets/img/ico_707ed.svg#trending
https://www.dealabs.com/hot            /assets/img/ico_707ed.svg#flame
https://www.dealabs.com/nouveaux       /assets/img/ico_707ed.svg#plus

<div class="subNav--light" style="height: 46px;" data-t="subNav">
  <div class="page-center space--fromW3-l-3 space--l-1 space--v-1">
    <div>
      <div class="aGrid flex">
        <!---->
        <div class="scrollBox-container overflow--avoid-vClip flex flex--grow-1 overflow--scrollX-raw hide-scrollbar carousel--isNext scrollBox-container--space carousel-list--air">
        
          <div class="scrollBox-item flex--shrink-0">
            <a href="/bons-plans" class="space--mr-2 text--normal size--all-m space--h-2 button button--type-tag button--mode-flat" to="[object Object]" data-t-click="" data-t="dealsLink">
              <!---->
              <span class="flex--inline boxAlign-ai--all-c">
                <svg width="16" height="16" class="space--mr-1 color--graphic-TranslucentSecondary icon icon--tag icon-d--1">
                  <use xlink:href="/assets/img/ico_707ed.svg#tag"></use>
                </svg> Bons plans </span>
            </a>
          </div>
          
<button type="button" class="carousel-air-arrow space--ml-3 hide--touch-on button button--shape-circle button--type-secondary button--mode-default button--square">
  <!---->
  <span class="flex--inline boxAlign-ai--all-c">
    <svg width="9" height="14" class="icon icon--left">
      <use xlink:href="/assets/img/ico_707ed.svg#left"></use>
    </svg>
  </span>
</button>

          
<ul class="subNavMenu-list " data-track="{&quot;category&quot;:&quot;subnav_bar&quot;}">
  <li class="subNavMenu-item--separator test-tablink-highlights" data-t="subNav" data-t-d="{&quot;sort&quot;:&quot;highlights&quot;}">
    <a class="subNavMenu-item subNavMenu-link boxAlign-ai--all-c" href="https://www.dealabs.com/highlights" data-handler="track" data-track="{&quot;action&quot;:&quot;goto_menu_target&quot;,&quot;label&quot;:&quot;pour_vous&quot;,&quot;beacon&quot;:true}">
      <span class="box--all-i size--all-s vAlign--all-m"> Pour vous </span>
    </a>
  </li>
  <li class="subNavMenu-item--separator test-tablink-top" data-t="subNav" data-t-d="{&quot;sort&quot;:&quot;top&quot;}">
    <button class="subNavMenu-item subNavMenu-link width--all-12 boxAlign-ai--all-c" data-handler="track cloak-link" data-track="{&quot;action&quot;:&quot;goto_menu_target&quot;,&quot;label&quot;:&quot;les_+_hot&quot;,&quot;beacon&quot;:true}" data-cloak-link="{&quot;path&quot;:&quot; top&quot;,&quot;target&quot;:&quot;_self&quot;}">
      <span class="box--all-i size--all-s vAlign--all-m"> Les + hot </span>
    </button>
  </li>
...
</ul>   
*/



/*  
       :not(.thread--expired) 
      
       :not(
       :has(
            a[href*="nintendo"],
            a[href*="ps4"],
            a[href*="ps5"],
            a[title*="nintendo"],
            a[title*="ps4"],
            a[title*="ps5"]     
           )
           )             
       
       :not(:has(a[href*="ps4" i])) 
       :not(:has(a[href*="ps5" i])) 
       :not(:has(a[title*="nintendo" i])) 
       :not(:has(a[title*="ps4" i])) 
       :not(:has(a[title*="ps5" i]))     
       
       :has(
           a[href*="demat" i],
           a[href*="steam" i],
           a[href*="gog" i],
           a[href*="epic" i],
           a[title*="demat" i],
           a[title*="steam" i],
           a[title*="gog" i],
           a[title*="epic" i]                                                   
           )   
           
           a[textContent*="Microsoft" i],
           a[textContent*="Steam" i],
           a[textContent*="Green Man Gaming" i],
           a[textContent*="GOG" i],
           a[textContent*="Humble Bundle" i],
           a[textContent*="Indiegala" i],
           a[textContent*="Epic Games Store" i],
           a[textContent*="Instant Gaming" i],
           a[textContent*="Fanatical" i],
           a[textContent*="Games Planet" i],
           a[textContent*="Gamivo" i],
           a[textContent*="Kinguin" i],
           a[textContent*="CDKeys" i],
           a[textContent*=" Eneba " i],
           a[textContent*="itch.io" i],           
           
           a[text*="Microsoft" i],
           a[text*="Steam" i],
           a[text*="Green Man Gaming" i],
           a[text*="GOG" i],
           a[text*="Humble Bundle" i],
           a[text*="Indiegala" i],
           a[text*="Epic Games Store" i],
           a[text*="Instant Gaming" i],
           a[text*="Fanatical" i],
           a[text*="Games Planet" i],
           a[text*="Gamivo" i],
           a[text*="Kinguin" i],
           a[text*="CDKeys" i],
           a[text*=" Eneba " i],
           a[text*="itch.io" i],   
           
           a[innerHTML*="Microsoft" i],
           a[innerHTML*="Steam" i],
           a[innerHTML*="Green Man Gaming" i],
           a[innerHTML*="GOG" i],
           a[innerHTML*="Humble Bundle" i],
           a[innerHTML*="Indiegala" i],
           a[innerHTML*="Epic Games Store" i],
           a[innerHTML*="Instant Gaming" i],
           a[innerHTML*="Fanatical" i],
           a[innerHTML*="Games Planet" i],
           a[innerHTML*="Gamivo" i],
           a[innerHTML*="Kinguin" i],
           a[innerHTML*="CDKeys" i],
           a[innerHTML*="Eneba" i],
           a[innerHTML*="itch.io" i],   
                                            
           a[innerText*="Microsoft" i],
           a[innerText*="Steam" i],
           a[innerText*="Green Man Gaming" i],
           a[innerText*="GOG" i],
           a[innerText*="Humble Bundle" i],
           a[innerText*="Indiegala" i],
           a[innerText*="Epic Games Store" i],
           a[innerText*="Instant Gaming" i],
           a[innerText*="Fanatical" i],
           a[innerText*="Games Planet" i],
           a[innerText*="Gamivo" i],
           a[innerText*="Kinguin" i],
           a[innerText*="CDKeys" i],
           a[innerText*="Eneba" i],
           a[innerText*="itch.io" i]               
           
*/