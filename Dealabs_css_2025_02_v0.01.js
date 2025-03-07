// ==UserScript==
// @version     0.01
// @name        dealabs css
// @namespace   https://www.dealabs.com/
// @description	css
// @author      ced
// @include https://www.dealabs.com/highlights
// @include https://www.dealabs.com/top
// @include https://www.dealabs.com/hot
// @include https://www.dealabs.com/nouveaux
// @include https://www.dealabs.com/search?merchant-id*
// @include https://www.dealabs.com/groupe/*
// @include https://www.dealabs.com/profile/*/keyword-alarms#feed
// @include https://www.dealabs.com/profile/*/bons-plans
// @include https://www.dealabs.com/profile/*/saved-deals
// @include https://www.dealabs.com/profile/*/discussions
// @include https://www.dealabs.com/discussions
// @include https://www.dealabs.com/discussions-commentes
// @grant       none
// @license     MIT
// @run-at document-end
// ==/UserScript==
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function modify_css()   
{  
  
/*  
var els_class_listLayout_side = document.getElementsByClassName("listLayout-side");  
for (i=0;i<els_class_listLayout_side.length;i++)  
    {
    els_class_listLayout_side[i].style.width="0%";
    els_class_listLayout_side[i].style.minWidth="0em";
    els_class_listLayout_side[i].style.maxWidth="0em";
    }    
*/  
  
document.getElementsByClassName("listLayout-main")[0].style.width="100%";    

if ( document.getElementById("threadListingDescriptionPortal") )
     document.getElementById("threadListingDescriptionPortal").parentElement.style.display = "none";//remove();
 
var els_class_threadListCard = document.getElementsByClassName("threadListCard");
for (i=0;i<els_class_threadListCard.length;i++)  
    {
    els_class_threadListCard[i].style.gridTemplateAreas = '"i b b h" "i b b f"';      
    //els_class_threadListCard[i].style.setProperty(" --card-padding",".75rem"); 
    //els_class_threadListCard[i].style.setProperty("--card-leftWidth","8rem;"); 
    els_class_threadListCard[i].style.gridTemplateColumns="8rem 1fr";
    els_class_threadListCard[i].style.minHeight="unset";
    }  
 
var els_threadListCard_image = document.getElementsByClassName("threadListCard-image");
for (i=0;i<els_class_threadListCard.length;i++)  
    {
    els_threadListCard_image[i].style.padding = "0.2rem 1rem";    
    }   
 
var els_class_threadListCard_header = document.getElementsByClassName("threadListCard-header");  
for (i=0;i<els_class_threadListCard_header.length;i++)  
    {
    els_class_threadListCard_header[i].style.gridColumn="unset";
    els_class_threadListCard_header[i].style.display="flex";
    els_class_threadListCard_header[i].style.justifyContent="flex-start";
    els_class_threadListCard_header[i].style.alignItems="start";
    els_class_threadListCard_header[i].style.padding="0.5rem";
       }  
  
var els_class_threadListCard_footer  = document.getElementsByClassName("threadListCard-footer");  
for (i=0;i<els_class_threadListCard_footer.length;i++)  
    {
    els_class_threadListCard_footer[i].style.gridColumn="unset";
    els_class_threadListCard_footer[i].style.display="flex";
    els_class_threadListCard_footer[i].style.alignItems="center";
    els_class_threadListCard_footer[i].style.padding="0"; //"0.5rem";
    els_class_threadListCard_footer[i].style.gap="0"; //"0.5rem";
    }    
  
var j=0; 
var els_articles = document.getElementsByTagName("article");  
for (i=0;i<els_articles.length;i++)  
    {
    if ( !els_articles[i].classList.contains("comment") )
       els_articles[i].style.border = "solid 2px white";  
    }  
  
var els_class_userHtml  = document.getElementsByClassName("userHtml");   
for (i=0;i<els_class_userHtml.length;i++)  
    {
    if ( !els_class_userHtml[i].parentElement.classList.contains("comment-body") )
       els_class_userHtml[i].style.display="none";
    }      

console.log("fin");
} 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function f_Over(e)   
{
console.log("over  "+e.target.tagName+" _  "+e.target.className);
 
if ( e.target.tagName == "article")
for ( const child of e.target.children ) 
    {
    if ( child.classList.contains('userHtml')) 
       {
       child.style.display="";
       } 
    } 
}   
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
function f_Out(e)   
{  
console.log("out  "+e.target.tagName+" _  "+e.target.className);
  
if ( e.target.tagName == "article")
for ( const child of e.target.children ) 
    {
    if ( child.classList.contains('userHtml')) 
       {
       child.style.display="none";
       } 
    } 
}   
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
modify_css();
//document.addEventListener("DOMNodeInserted", function() { if ( justAddDescription == false ) modify_css(); }, false);
//document.addEventListener("mouseover", function (e) { f_Over(e); }, false);
//document.addEventListener("mouseout" , function (e) { f_Out(e);  }, false);
document.addEventListener("DOMNodeInserted", modify_css , false);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://fr.javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave

/*


    var zImg = '';
    for ( const child of els_articles[i].children ) 
        {
        j++;
        console.log(j+"  "+child.tagName+"  "+child.className); 
       
        if ( child.classList.contains('thread-image') )
           {
           //zImg=child;
           //console.log(zImg) 
           //console.log("zImg") ;
           } 
                                                   
        if ( child.classList.contains('userHtml') ) 
           {
           //child.style.display="";
           console.log("child.textContent");
           //zImg.setAttribute('title',child.textContent);
           }         
        }   


    els_articles[i].onmouseover = function(e) { // onmouseover onmouseout onmousemove
                                               for ( const child of e.target.children ) 
                                                   {
                                                   if ( child.classList.contains('userHtml')) 
                                                      {
                                                      justAddDescription = true;
                                                      console.log(child.tagName);
                                                      child.style.display="";
                                                      justAddDescription = false;
                                                      } 
                                                   } 
                                               };
      
    els_articles[i].onmouseout  = function(e) { // onmouseover onmouseout onmousemove
                                               for ( const child of e.target.children ) 
                                                   {
                                                   if ( child.classList.contains('userHtml')) 
                                                      {
                                                      justAddDescription = true;
                                                      console.log(child.tagName);
                                                      child.style.display="";
                                                      justAddDescription = false;
                                                      } 
                                                   } 
                                               };    
*/


