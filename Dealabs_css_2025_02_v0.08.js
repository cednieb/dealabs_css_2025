// ==UserScript==
// @version     0.08
// @name        dealabs css
// @namespace   https://www.dealabs.com/
// @description	css v2 autre approche, ajouter une balise style 
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
//https://stackoverflow.com/questions/23683439/gm-addstyle-equivalent-in-tampermonkey
// veiller à utiliser backticks (`) appelés guillemets inversés en français

var mycss1_old =`
.listLayout                                { width:70%; max-width:unset; }  
.listLayout-main                           { width:100%; } 
.threadListCard                            { grid-template-areas : "i b f h";  grid-template-columns:8.0rem 1fr;  min-height:unset; } 
.threadListCard-image                      { padding = 0.2rem; } 
.threadListCard-header                     { grid-column:unset;  display:flex; align-items:center; gap:0.25rem; margin:0.1rem 0.25rem 0 0; padding:unset; }  
.threadListCard-body                       { margin:unset; } 
.threadListCard-footer                     { grid-column:unset; display:flex:; align-items:center; padding:unset; gap:0.25rem;  margin:0.1rem 0 0 0; }       
article:not(.comment):nth-of-type(2n + 1)  { border-bottom:solid 1px white;   border-left:solid 1px white;  } 
article:not(.comment):nth-of-type(2n )     { border-bottom:solid 1px #00a1bf; border-left:solid 1px #00a1bf;  } 
div:has(> #threadListingDescriptionPortal) { display:none; } 
`;

var mycss1 =`
.listLayout                                { width:70%; max-width:unset; }  
.listLayout-main                           { width:100%; } 
.threadListCard                            { grid-template-areas : "i h b" "i h b" "i h f" ;  grid-template-columns:8.0rem 10.5rem ;  min-height:unset; } 
.threadListCard-image                      { padding = 0.2rem 1rem; background-color:var(--bgBaseSecondary); } 
.threadListCard-header                     { grid-column:unset; display:flex; flex-direction:column;  
                                             padding:unset; justify-content: space-between; ; }  
.vote-box                                  { margin: 0.5rem 0.25rem 0      0.25rem; }
.chip                                      { margin: 0      0.25rem 0.5rem 0.25rem; }                                            
.threadListCard-body                       { margin:unset; margin-top:0.5rem; } 
.threadListCard-footer                     { grid-column:unset; display:flex:; align-items:center; padding:unset; gap:0.25rem;  margin:0.5rem; }  
a.threadListCard-mainButton                { border-radius:0%;} 
article                                    { border-radius:0%;} 
div:has(> #threadListingDescriptionPortal) { display:none; } 
#main                                      { background-color:#707071; } 
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
addMyCSS(mycss1);

if ( window.location.href.indexOf("https://www.dealabs.com/search") < 0 && window.location.href.indexOf("https://www.dealabs.com/groupe") < 0)  
   addMyCSS(mycss2);

if ( window.location.href.indexOf("discussions") < 0)   
   addMyCSS(mycss3);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////