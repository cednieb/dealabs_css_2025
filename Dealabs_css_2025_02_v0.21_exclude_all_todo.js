// ==UserScript==
// @name        dealabs css
// @name:fr     dealabs css
// @version     0.21
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
var VarApplyMyAdultFilter = 1; // myAdultFilter
var VarApplyMyfilters     = 1; // myFilters 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Toujours utiliser des tableaux, même si il n'y a qu'une seule valeur. 
// Exemple ["tv"] et pas "tv"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// filtre marchand, cibler le(s) marchand(s) présents(s) dans la liste
// var List = [ [[9,28,...,2193],"#ffa500","merchant-id"] ,... ]; 
// var List = [ [9,"#ffa500","merchant-id"] ,... ];  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// filtre adulte, cibler un mot de la liste ou l'ensemble des mots d'un sous-tableau ( ["soutien","gorge"] )
// var list = [ [["brassiere","tanga",...,["soutien","gorge"]] , 10 ,"adult"] ,... ];  
//          // on cible brassiere ou tanga ... ou (soutien et gorge) // 10 pour l'opacité
// var list =  [ [["sextoy"] , 10 ,"adult"] ,... ]; 
// var list =  [ ["sextoy" , 10 ,"adult"]];  // !!!!!! NON, "sextoy" n'est pas un tableau
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// filtre keywords, cibler un mot de la liste ou l'ensemble des mots d'un sous-tableau
// var list =  [[  [["45","converse","chuck"],["savon"],["coffret","seigneur"],"corsair"] ,"#ff55ff","keywords"] ,... ];  
//          // on cible au choix des converse chuck en taile 45, du savon, un coffret du seigneur des anneaux ou un matériel de marque corsair
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// filtre keywords-exclude1, cibler un mot ou un ensemble de mots ne contenant pas au moins un des termes à exclure
// var list =  [ [["converse","chuck"]] ,"#55cd95","keywords-exclude1",["noir","violet"]  ]  ,... ];  
            // on cible des converse chuck n"étant ni noire, ni violette
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// filtre keywords-exclude, cibler un mot ou un ensemble de mots ne contenant pas tous les termes à exclure
// var list =  [ [["tv","oled"]] ,"#55cd95","keywords-exclude1",["45","incurvé"]  ]  ,... ];  
            // on cible une tv oled non incurvée n"étant pas de taille 45      
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// On peut détourner les deux derniers filtres en excluant une valeur farfelue (zzzzzzzzzzz par exemple pour rechercher tous les termes
// var list =  [ [["tv","oled","45","incurv"]] ,"#55cd95","keywords-exclude",["zzzzzzzzzzz"]  ]  ,... ];  
            // on cible une tv oled ncurvée de taille 45 pouces     
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
var myAdultFilter = 
[  
[["brassiere","tanga","menstruel","jarretelle","lingerie","culotte","string","shorty","shorties","bustier","nuisette","dentelle","corset","anal "
 ,"vibro","clito","masturbateur",["soutien","gorge"],"soutien-gorge"] , 10 ,"adult"] 
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Quelques couleurs #5fcdf5 #55cd95 #9bc899 #ffa500 #9bc848 #9070aa  #cd853f; #ffddda ,""
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
var myFilters = 
[  // mes filtres  
  [[9,28,32,61,215,217,304,306,1207,1586,1588,1590,1591,2157,2193],"#ffa500","merchant-id"]   
, [38,"#9bc848","merchant-id"]                  
, [["xbox"],"#9bc848","keywords"]                        
/* #55cd95 */ 
, [ [["ssd"]] ,"#ff0000","keywords-exclude1" 
                        , ["portable","nvme","ddr","intel","amd","chromebook","xbox","playstation","pci","ryzen","radeon","gtx","nvidia","apple"]  ] 
, [ ["3060","4060","3050","4050","4070","ryzen","5600",["ryzen","ai"],"vega",["mini","pc"]],"#0000ff","keywords"]  
, [2087,"#cd853f","merchant-id"] 
, [ ["vasagle","songmics","meuble","étagère","table","bureau","chaise","chariot","banc","buffet","fauteuil","matelas","lit"],"#cd853f","keywords"] 

/////////// 
          // https://www.dealabs.com/bons-plans/velo-electrique-kalkhoff-entice-3-move-performance-line-500wh-avec-shimano-cues-43cm-3008124
          // Vélo électrique Kalkhoff Entice 3 MOVE Performance Line 500Wh avec Shimano CUES - 43cm
  
//, [ [["Entice","MOVE"]] ,"#00ff00","keywords"]  
  
, [ ["Entice","MOVE"] ,"#00ff00","keywords-exclude1" , ["zzzzzzzz","yyyy"] ]
  
/*
article:not(.thread--expired)
:has(a[title~="Entice" i][title~="MOVE" i]
:not([title~="zzzzzzzz" i],[href*="zzzzzzzz-" i]
,[title~="yyyy" i],[href*="yyyy-" i])
)
*/
  
  
  
/*  
  [ [["xbox"]],"#5fcdf5","keywords-exclude1",["pc"] ]
, [ [["ssd"]] ,"#55cd95","keywords-exclude1" 
                        , ["portable","nvme","ddr","intel","amd","chromebook","xbox","playstation","pci","ryzen","radeon","gtx","nvidia","apple"]  ] 
*/   
//, [ [["lit"]]      ,"#cd853f","keywords-exclude1" ,["fidélité","litre"]                          ] // obosléte                        
//, [ [["table"]]    ,"#cd853f","keywords-exclude1" ,["portable","jetable","tablette","ajustable"] ] // obosléte  
//, [ [["tag","re"]] ,"#cd853f","keywords-exclude1" ,["partag"," tag"]                             ] // obosléte // étagère sans les accents  
];  
///////////////////////////////////////////
function applyFilters(myWordListTemp)  
{
var myCssTemp = ''; 
if ( myWordListTemp.length > 0 )
   {
   for ( i=0; i<myWordListTemp.length; i++ )
       {    
       if ( myWordListTemp[i][2] == "adult" )
          myCssTemp += '\n'+'\n'+'article:has(';   
       else
         //myCssTemp += '\n'+'\n'+'article:not():has(';     // :not(.modified)
         myCssTemp += '\n'+'\n'+'article:not(.thread--expired):has('; 
   
       //////////////////////////////// selector merchant-id ////////////////////////////////   : 
       if ( myWordListTemp[i][2] == "merchant-id" )
          if ( !(myWordListTemp[i][0] instanceof Array ))
             { 
             myCssTemp += 'a[href$="merchant-id=' +myWordListTemp[i][0]+'" i] \n';   
             }
          else
             {
             for ( j=0; j<myWordListTemp[i][0].length; j++ )
                 {                    
                 if ( j > 0 ) 
                    myCssTemp += ' , ';  
                
                 myCssTemp += 'a[href$="merchant-id=' +myWordListTemp[i][0][j]+'" i] \n'; 
                 }
             }        
       //////////////////////////////// selectors ///////////////////////////////////////////         
       if ( myWordListTemp[i][2] != "merchant-id" )
          {   
          for ( j=0; j<myWordListTemp[i][0].length; j++ ) 
              { 
              if ( j == 0 )  
                 myCssTemp += 'a';
                    
              if ( myWordListTemp[i][2] != "keywords-exclude1" && myWordListTemp[i][2] != "keywords-exclude" )// a voir si on recherche un mot ou l ensemble
                 if ( j > 0 ) 
                    myCssTemp += '\n,';  
                   
              if ( myWordListTemp[i][0][j] instanceof Array === false )  
                 {  
                 myCssTemp += '[title~="'+myWordListTemp[i][0][j]+'" i]';
                 
                 // on fait l'impasse sur les termes pouvant être contenus dans href en cas de filtre avec exclusion
                 
                 if ( myWordListTemp[i][2] != "keywords-exclude1" && myWordListTemp[i][2] != "keywords-exclude" ) 
                    {
                    myCssTemp += ',';  // correction v0.20, mots différents url et title
                    myCssTemp += '[href*="'+myWordListTemp[i][0][j]+'-" i]';
                    }
                 }   
              else 
                 { 
                 if ( j > 0 )
                    myCssTemp += '\n,'; 
                   
                 for ( k=0; k<myWordListTemp[i][0][j].length; k++ )
                     { 
                     myCssTemp += '[title~="' +myWordListTemp[i][0][j][k]+'" i]'; 
                     }  
                   
                 if ( myWordListTemp[i][2] != "keywords-exclude1" && myWordListTemp[i][2] != "keywords-exclude" ) 
                    { 
                    myCssTemp += ',';
                      
                    for ( k=0; k<myWordListTemp[i][0][j].length; k++ )
                        { 
                        myCssTemp += '[href*="' +myWordListTemp[i][0][j][k]+'-" i]'; 
                        }  
                    }
                 }  
              }     
          ///////////////////////////// partie exclude  ////////////////////////////////   
          // article:not(.thread--expired):has(a[title~="ssd" i]:not([title~="ram" i],[href*="ram-" i])){ background-color:#ff000011; color:red; } 
          if ( myWordListTemp[i][2] == "keywords-exclude1" )  // exclure si au moins un des mots 
             {               
             myCssTemp += '\n:not(';  
               
             for ( j=0; j<myWordListTemp[i][3].length; j++ ) 
                 { 
                 if ( j > 0 )
                    myCssTemp += '\n,';   
                   
                 if ( myWordListTemp[i][3][j] instanceof Array === false )  
                    { 
                    myCssTemp += '[title~="'+myWordListTemp[i][3][j]+'" i]'; 
                    myCssTemp += ','; 
                    myCssTemp += '[href*="'+myWordListTemp[i][3][j]+'-" i]';  
                    }
                 else
                    {
                    for ( k=0; k<myWordListTemp[i][3][j].length; k++ )
                        {      
                        myCssTemp += '[title~="' +myWordListTemp[i][3][j][k]+'" i]'; 
                        } 
  
                    myCssTemp += ',';
                      
                    for ( k=0; k<myWordListTemp[i][3][j].length; k++ )
                        {      
                        myCssTemp += '[href*="' +myWordListTemp[i][3][j][k]+'-" i]'; 
                        } 
                    }
                 }
              myCssTemp += ')'; 
               

             }   
            
          /////////// 
          // https://www.dealabs.com/bons-plans/velo-electrique-kalkhoff-entice-3-move-performance-line-500wh-avec-shimano-cues-43cm-3008124
          // Vélo électrique Kalkhoff Entice 3 MOVE Performance Line 500Wh avec Shimano CUES - 43cm
          // , [ ["Entice","MOVE"] ,"#00ff00","keywords-exclude" , ["zzzzzzzz"] ] 
            
          if ( myWordListTemp[i][2] == "keywords-exclude" )  // exclure si tous les mots  
             {  
             for ( j=0; j<myWordListTemp[i][3].length; j++ ) 
                 {  
                 myCssTemp += '[title~="'+myWordListTemp[i][3][j]+'" i]';   
                 }
            
             myCssTemp += '\n,';
                   
             for ( j=0; j<myWordListTemp[i][3].length; j++ ) 
                 {     
                 myCssTemp += '[href*="'+myWordListTemp[i][3][j]+'-" i]';
                 }
               
             myCssTemp += ')\n';                     
             } 
             
          
          }    
       //////////////////////////////// ajout du css ////////////////////////////////  
       if ( myWordListTemp[i][2] != "adult" )
          {
          // myCssTemp += '\n){\nbackground-color:'+myWordListTemp[i][1]+';\n}'; // short version               
          
          myCssTemp += '\n){\nbackground-color:'+myWordListTemp[i][1]+';';             
          myCssTemp += '\n& .chip--type-default , & .chip--type-warning  {background-color:'+myWordListTemp[i][1]+';  border:0;box-shadow:unset;}'; 
          myCssTemp += '\n& .vote-temp , & .vote-box {background-color:#ffffff;}'; 
          
          //////////////////////////////// ultilisation de(s) couleur(s) supplémentaire(s) 
          if ( myWordListTemp[i].length  >= 4 && myWordListTemp[i][2] != "keywords-exclude1" && myWordListTemp[i][2] != "keywords-exclude" )  
             {
             myCssTemp += '\n& .threadListCard-footer-action {background-color:#ffffff; color:'+myWordListTemp[i][3]+'; border:0;box-shadow:unset;}'; 
             myCssTemp += '\n& .chip--type-default , & .chip--type-warning  { color:'+myWordListTemp[i][3]+'; }';    
             } 
          else
             {
             myCssTemp += '\n& .threadListCard-footer-action {background-color:#ffffff; color:'+myWordListTemp[i][1]+'; border:0;box-shadow:unset;}'; 
             myCssTemp += '\n& .chip--type-default , & .chip--type-warning  { color:#ffffff; } \n';   
             } 
          myCssTemp += '\n}';   
          
          } 
       //////////////////////////////// ajout du css adult ////////////////////////////////        
       if ( myWordListTemp[i][2] == "adult" )
          {
          //myCssTemp += '\n)\n{\n & .threadListCard-image       {opacity:0%;} '; 
          //myCssTemp +=       '\n & .threadListCard-image:hover {opacity:100%;}\n}';             
            
          // test pink/skin
          myCssTemp += '\n)\n{\n & .threadListCard-image       {opacity:0%;} '; 
          myCssTemp +=       '\n & .threadListCard-image:hover {opacity:100%;}';           
            
          myCssTemp += '\nbackground-color:#ffddda;';             
          myCssTemp += '\n& .chip--type-default , & .chip--type-warning  {background-color:#ffddda;  border:0;box-shadow:unset;}'; 
          myCssTemp += '\n& .vote-temp , & .vote-box {background-color:#ffffff;}'; 
          myCssTemp += '\n& .threadListCard-footer-action {background-color:#ffffff; color:#000000; border:0;box-shadow:unset;}'; 
          myCssTemp += '\n& .chip--type-default , & .chip--type-warning  { color:#000000; } \n';  
          myCssTemp += '\n}';
          }          
////////////////       
       }
  }     
addMyCSS(myCssTemp); 
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
     
   if ( VarApplyMyAdultFilter == 1 ) applyFilters(myAdultFilter); 
     
   if ( VarApplyMyfilters  == 1 )    applyFilters(myFilters);  
   }  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
Exemple  : [["walkman",["drone","cam"],["tv","45","oled"],"skate""],"#5fcdf5","keywords","#000000"] 
Résultat : 
un walman 
un drone muni d'une camera
une tv oled de 45 pouces   !! pas de guillemets
un skate
Couleur de fond en bleu

0.16
Réorganisarion du code
Les images cachées apparaissent au survol

0.18
Optimisation de la fonction filtre perso
- filtre pour mot ou groupe de mots, statut ok.
- filtre pour mot ou groupe de mots en ignorant certains termes, statut ok.

0.19
Ajout de 2 variables ( 1 pour activer le filtre )
- VarApplyMyAdultFilter 
- VarApplyMyfilters 

Amélioration de la fonction filtre perso, renommée en applyFilters()
 Que sait-on à propos des url ?
 - pas les même termes que les title
 - pas d'accents
 - tout en minuscule
 - chaque mot est suivi d'un tiret    
 
 3 exemples:
 - https://www.dealabs.com/bons-plans/ensemble-sommier-lit-140-190-123456789
 - https://www.dealabs.com/bons-plans/table-basse-123456789
 - https://www.dealabs.com/bons-plans/pc-portable-123456789   
 
 !! Limite : [href*="'table-" i]';   
 
 Solution:
 - changement du selecteur  [title~="table" i]' (mot complet) au lieu de * (chaine dans un mot) 
 
0.20
Amélioration de la fonction filtre perso
 Que sait-on à propos des url ?
 - pas les même termes que les title
 
 Exemple:
 !! https://www.dealabs.com/bons-plans/pc-portable-gamer-erazer-deputy-p60-156-fhd-144hz-i7-12650h-16go-ssd-512go-rtx-4070-livre-sans-windows-3007406
 Présence de virgules.
 En cherchant 4070: 
 - ok pour l'url: pc-portable-gamer-erazer-deputy-p60-156-fhd-144hz-i7-12650h-16go-ssd-512go-rtx-4070-livre-sans-windows-3007406
 - pas ok pour le title: PC Portable 15,6" Erazer Deputy P60 - FHD 144Hz, i7-12650H, 16 Go ram, SSD 512 Go, RTX 4070, Sans OS 

 Solution:
 ,[title~="4070" i][href*="4070-" i]
 devrait être 
 ,[title~="4070" i],[href*="4070-" i]
 
 

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// links
/*
https://base64.guru/converter/encode/image/ico
https://www.rapidtables.com/web/color/RGB_Color.html
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

var myFeeds  = [  [["granblue","logitech","pebble",["imprimante","3d"],["papier","toilette"],"tapo",["mini","pc"],"redmi","eneloop","lessive",["imprimante","laser"]
                  ,["arctic","f8","pwm","pst"],["pwm","pst"],["prime","gaming"],"dove",["vélos","électriques"]  ,"chromebook ","cafetière","songmics","vasagle","ssd"
                  ,["disque","dur"],["humble","bundle","choice"] ],"#9bc848","keywords"]  ]; 
                  
Myfilters(myFeeds);                  
*/  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//Select the target element(s) to observe
const articles = document.querySelectorAll('article');

// Create a MutationObserver instance
const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
      const target = mutation.target;
      const id = target.id;
      const backgroundColor = window.getComputedStyle(target).backgroundColor;

      // Check if the background color has changed to a specific value
      //if (backgroundColor === 'rgb(255, 255, 255)') { // Example: red color
        target.classList.add('bg-changed');
        console.log(`${id} Background color changed to: ${backgroundColor}`);     
      // }
    }
  });
});

// Configure the observer to watch for style attribute changes
const config = { attributes: true, attributeFilter: ['style'] };

// Start observing each <article>
articles.forEach((article) => observer.observe(article, config));



let tttest = 0;
var stopCondition = setInterval(function() 
                    {          
                    tttest++;
  
                    if ( tttest == 12 )  
                       { 
                       var els = document.getElementsByTagName("article");
                         
                       for ( i=0; i<els.length; i++)
                           {
                           els[i].style.backgroundColor = "pink"; 
                           }
  
                       clearInterval(stopCondition); 
                       }
  
                     }, 250 );
            

I create an userscript with grease monkey extension.
The goal is to modify the background of an article if it contains some words.
I have several filters containing a specific group of words and a dedicated background-color
how fire the change of color ?
  
i have modified this

    const filters = [
        { keywords: ["important", "urgent", "priority", "hello"], color: "lightcoral" },
        { keywords: ["info", "information", "details"], color: "lightblue" },
        { keywords: ["success", "completed", "done", "hello"], color: "lightgreen" }
    ];

the word "hello" is in the first and the third filter.
I want not change the color again if a previous filter has matched

with the mutation observer , I want fire the change of background-color and add a class to this color modified article
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////