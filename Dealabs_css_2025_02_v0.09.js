// ==UserScript==
// @version     0.09
// @name        dealabs css
// @namespace   https://www.dealabs.com/
// @description	css et filtres
// @author      ced
// @updateURL   https://greasyfork.org/fr/scripts/526927-dealabs-css
// @downloadURL https://greasyfork.org/fr/scripts/526927-dealabs-css
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
// @grant       GM_addStyle
// @license     MIT
// @run-at document-end
// ==/UserScript==
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var VarApplyMyfilters = 0;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if ( document.getElementById("threadListingDescriptionPortal") ) // verifier que le menu existe, ce n'est pas le cas sur toutes les pages
   {
   // les deux menus sur une seule ligne
   document.getElementById("tour-filter").after( document.getElementById("header-navigation") );
   
   // ajout du lien discussions
   var myli = document.createElement("li");   
   myli.setAttribute('class', 'subNavMenu-item--separator');    
   myli.setAttribute('data-t', 'subNav');  
   let zhtml  = "<a class=\"subNavMenu-item subNavMenu-link boxAlign-ai--all-c \" href=\"https://www.dealabs.com/discussions\">";
       zhtml += "<span class=\"box--all-i size--all-s vAlign--all-m\">Discussions</span></a>";
   myli.innerHTML = zhtml;
   document.getElementById("tour-filter").children[0].children[0].appendChild(myli);    
   }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// veiller à utiliser backticks (`) appelés guillemets inversés en français
var mycss1 =`
.listLayout                                { width:70%; max-width:unset; }  
.listLayout-main                           { width:100%; } 
.threadListCard                            { grid-template-areas : "i h b" "i h b" "i h f" ;  grid-template-columns:8.0rem 10.5rem ;  min-height:unset; } 
.threadListCard-image                      { padding = 0.2rem 1rem; background-color:var(--bgBaseSecondary); } 
.threadListCard-header                     { grid-column:unset; display:flex; flex-direction:column; padding:unset; justify-content: space-between; ; }  
.vote-box                                  { margin: 0.5rem 0.25rem 0      0.25rem; }
.chip                                      { margin: 0      0.25rem 0.5rem 0.25rem; }  
.chip--type-default                        { background-color:white; color:black; }  
.chip--type-warning                        { background-color:#ff000011; color:red; }  
.chip--type-expired                        { background-color:white; color:red; }  
button.cept-vote-temp                      { width:2.5rem; text-align: center;} 
.threadListCard-body                       { margin:unset; margin-top:0.5rem; }  
.threadListCard-footer                     { grid-column:unset; display:flex:; align-items:center; padding:unset; gap:0.25rem; margin:0.5rem; }                                              
a.threadListCard-mainButton                { border-radius:0%;} 
article                                    { border-radius:0%;} 
article.thread--expired                    { opacity:70%; }  
div:has(> #threadListingDescriptionPortal) { display:none; } 
#main                                      { background-color: #707071;} 
`;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mycss2 =`
.listLayout-side                           { width:0%; max-width:0em; min-width:0em; }  
`;
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
// soit pour mettre en évidence un deal  { background-color: #ffa500; } { border:solid 5px red; } 
// soit pour le supprimer                { display:none; }  
  
// article:has(a[href*="pc"])                                                                 cibler un article avec un lien contenant "pc"   
// article:has(a[title*="pc"])                                                                cibler un article avec un titre contenant "pc" mais pas PC
 
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
// text-content  PC Fixe Firebreather Epic Mini - RTX 4060 Ryzen 5 9600x, 1 To, 16 Go Ram - dragoncomputers.eu  
  
// href          https://www.dealabs.com/bons-plans/pc-fixe-gaming-csl-sprint-5682-ryzen-5-5500y-16go-ram-3200mhz-500go-ssd-kingston-nv2-rx6600-8go-msi-a520m-pro-alim-500w-sans-os-3002634 
// title         PC fixe Gaming CSL Sprint 5682 - Ryzen 5 5500, 16Go RAM 3200MHz, 500Go SSD Kingston NV2, RX6600 8Go, MSI A520M-Pro, Alim 500W, Sans OS  
// text-content  PC fixe Gaming CSL Sprint 5682 - Ryzen 5 5500, 16Go RAM 3200MHz, 500Go SSD Kingston NV2, RX6600 8Go, MSI A520M-Pro, Alim 500W, Sans OS  

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
var mycssfilters =`
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
           {background-color: #ffa500;}

article:has(  
           a[href$="merchant-id=38" i]
           )  
           {background-color: #9bc848;}  
`;

// un petit filtre pour ceux que çà ennuye de voir des petites culottes ou du contenu pour adulte 
var mycssadultfilters =`
article:has(
           a[href*="soutien" i]
           )
       :has(
           a[href*="gorge" i]
           )
           { opacity:10%;}  

article:has(
           a[href*="brassiere" i],
           a[href*="tanga" i],
           a[href*="menstruel" i],
           a[href*="jarretelle" i],
           a[href*="lingerie" i],
           a[href*="culotte" i],
           a[href*="brassiere" i],
           a[href*="string" i],
           a[href*="shorty" i],
           a[href*="bustier" i],
           a[href*="nuisette" i],
           a[href*="dentelle" i],
           a[href*="corset" i],

           a[href*="anal" i],
           a[href*="vibro" i],
           a[href*="sextoy" i],
           a[href*="clito" i],
           a[href*="masturbateur" i],
           a[title*="anal" i], 
           a[title*="vibro" i], 
           a[title*="sextoy" i], 
           a[title*="clito" i], 
           a[title*="masturbateur" i]
           )
           {opacity:10%;} 
`;  
  
addMyCSS(mycssfilters);
addMyCSS(mycssadultfilters);        
}  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addMyCSS(mycss1);

if ( window.location.href.indexOf("https://www.dealabs.com/search") < 0 && window.location.href.indexOf("https://www.dealabs.com/groupe") < 0)  
   {
   addMyCSS(mycss2);
   }

if ( window.location.href.indexOf("discussions") < 0)   
   {
   addMyCSS(mycss3);
   }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if ( VarApplyMyfilters == 1 ) 
   if ( window.location.href.indexOf("/groupe") < 0 && window.location.href.indexOf("/search?merchant") < 0  
        && window.location.href.indexOf("/keyword-alarms") < 0 )   
      {
      applyMyfilters();
      }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stuff
// https://www.w3.org/TR/selectors-3/#selectors
// https://stackoverflow.com/questions/23683439/gm-addstyle-equivalent-in-tampermonkey
// https://fr.javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting
// https://www.alsacreations.com/article/lire/1924-css-has-selecteur-parent.html
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
/*

Userscript:
https://greasyfork.org/fr/scripts/526927-dealabs-css

gihub pour les anciennes versions
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


*/

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
*/