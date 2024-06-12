window.isMobile=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){window.isMobile=!0}
window.isSafari=!1;if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){window.isSafari=!0}
window.isSafariVersion='';if(window.isSafari){var version=(navigator.appVersion).match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/);if(version!==null){window.isSafariVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]}}
function t1093__init(recID){var rec=document.getElementById('rec'+recID);if(!rec)return;var popup=rec.querySelector('.t-popup');if(!popup)return;t1093__processGlobalObj();t1093__updateGlobalObj('popupList',popup,'array');t1093__processPopupClassList(popup);var popupContainer=popup.querySelector('.t-popup__container');if(!popupContainer)return;var blockList=popup.getAttribute('data-popup-rec-ids');blockList=blockList.split(',');blockList.forEach(function(blockID){var blockRec=document.getElementById('rec'+blockID);if(!blockRec)return;var recordType=blockRec.getAttribute('data-record-type');if(recordType!=='396'&&recordType!=='121')return;popupContainer.appendChild(blockRec);t1093__setPointerEventsToZeroBlock(blockRec);t_onFuncLoad('t396_init',function(){t396_init(blockID)})});var currentEvent=t1093__getGlobalObjValue('isMobile')?'orientationchange':'resize';window.removeEventListener(currentEvent,t1093__resizeAllPopups);window.addEventListener(currentEvent,t1093__resizeAllPopups);t1093__processScrollablePopup(popup)}
function t1093__processGlobalObj(){if(typeof window.t1093_popupList==='undefined')window.t1093_popupList=[];if(typeof window.t1093_resizeTimer==='undefined')window.t1093_resizeTimer=0;if(typeof window.t1093_hoverTimer==='undefined')window.t1093_hoverTimer=0;if(typeof window.t1093_activeHoverHook==='undefined')window.t1093_activeHoverHook='';if(typeof window.t1093_isMobile==='undefined'){window.t1093_isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||('ontouchend' in document&&navigator.userAgent.indexOf('AppleWebKit')!==-1)}
if(typeof window.t1093_windowWidth==='undefined')window.t1093_windowWidth=t1093__getWindowWidth();if(typeof window.t1093_isMobRes==='undefined')window.t1093_isMobRes=window.t1093_windowWidth<980;if(typeof window.t1093_isSafari==='undefined'){window.t1093_isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}}
function t1093__processScrollablePopup(popup){if(!popup)return;var popupContainer=popup.querySelector('.t-popup__container');if(!popupContainer)return;popup.style.display='block';var popupHeight=popupContainer.offsetHeight;popup.style.display='';var windowHeight=window.t1093_isMobile?document.documentElement.clientHeight:window.innerHeight;if(popupHeight>windowHeight){popupContainer.classList.add('t-popup__container-static')}}
function t1093__updateGlobalObj(key,value,type){switch(type){case 'array':window['t1093_'+key].push(value);break;case 'boolean':window['t1093_'+key]=value;break;case 'string':window['t1093_'+key]=value||'';break;case 'timeout':if(window['t1093_'+key])clearTimeout(window['t1093_'+key]);window['t1093_'+key]=value;break}}
function t1093__getGlobalObjValue(key){return window['t1093_'+key]}
function t1093__getWindowWidth(){return t1093__getGlobalObjValue('isMobile')?document.documentElement.clientWidth:window.innerWidth}
function t1093__resizeAllPopups(){var newTimeout=setTimeout(function(){var currentWindowWidth=t1093__getWindowWidth();var isMobile=currentWindowWidth<980;var isMobileResolution=t1093__getGlobalObjValue('isMobRes');if(isMobile===isMobileResolution)return;t1093__updateGlobalObj('isMobRes',isMobile,'boolean');t1093__getGlobalObjValue('popupList').forEach(function(popup){t1093__processPopupClassList(popup)});t1093__updateGlobalObj('resizeTimer',0,'timeout')},500);t1093__updateGlobalObj('resizeTimer',newTimeout,'timeout')}
function t1093__processPopupClassList(popup){t1093__clearPopupClassList(popup);var popupClassList=[];var safariDesktopClassName='t-popup-safari';var isMobileResolution=t1093__getGlobalObjValue('isMobRes');var isSafari=t1093__getGlobalObjValue('isSafari');if(!isMobileResolution&&isSafari&&!popup.classList.contains(safariDesktopClassName)){popupClassList.push(safariDesktopClassName)}
var animAttr='data-anim';var mobileAttr=animAttr+'-mobile';var attrValue=popup.getAttribute(animAttr);if(isMobileResolution){var mobileAttrValue=popup.getAttribute(mobileAttr);if(mobileAttrValue)attrValue=mobileAttrValue}
if((isMobileResolution&&attrValue!=='empty')||(!isMobileResolution&&attrValue)){popupClassList.push('t-popup-anim-'+attrValue);popupClassList.push('t-popup-transition')}
popupClassList.forEach(function(className){popup.classList.add(className)})}
function t1093__clearPopupClassList(popup){popup.classList.remove('t-popup-transition');for(var key=0;key<popup.classList.length;key++){var className=popup.classList[key];if(className.indexOf('t-popup-anim-')!==-1)popup.classList.remove(className)}}
function t1093__setPointerEventsToZeroBlock(rec){var artBoard=rec.querySelector('.t396__artboard');if(!artBoard)return;var abFilter=artBoard.querySelector('.t396__filter');var artBoardStyle=getComputedStyle(artBoard);var abFilterBG=abFilter?getComputedStyle(abFilter).backgroundImage:'';var hasBG=abFilterBG!=='none'||artBoardStyle.backgroundColor!=='rgba(0, 0, 0, 0)'||artBoardStyle.backgroundImage!=='none';if(hasBG)artBoard.classList.add('t396__artboard_pointer-events-auto')}
function t1093__initPopup(recID){var rec=document.getElementById('rec'+recID);if(!rec)return;rec.setAttribute('data-animationappear','off');rec.style.opacity='1';var popup=rec.querySelector('.t-popup');var hook=popup.getAttribute('data-tooltip-hook');if(!popup||!hook)return;t1093__generatePopupObj();t1093__updatePopupObjValue('hookList',hook);var isMobile=t1093__getGlobalObjValue('isMobile');var isHoverTrigger=t1093__getBooleanPopupAttribute(popup,'hover-trigger')&&!isMobile;if(isHoverTrigger){t1093__updatePopupObjValue('hoverHookList',hook);popup.classList.add('t-popup_hover-trigger')}
t1093__setListenersForPopup(popup,isHoverTrigger);t1093__setListenersForDocument(isHoverTrigger);t_onFuncLoad('t_popup__addClassOnTriggerButton',function(){t_popup__addClassOnTriggerButton(document,hook)});t_onFuncLoad('t_popup__addAttributesForAccessibility',function(){t_popup__addAttributesForAccessibility(hook)});if(!isHoverTrigger)t1093__setAnalyticsListeners(popup);if(t1093__getBooleanPopupAttribute(popup,'open-on-page-load')){t1093__onReady(function(){setTimeout(function(){t1093__showCurrentPopup(popup)},1000)})}}
function t1093__onReady(callback){document.readyState!=='loading'?callback():document.addEventListener('DOMContentLoaded',callback)}
function t1093__generatePopupObj(){if(window.tPopupObj)return;window.tPopupObj={hookList:[],hoverHookList:[],openPopUpList:[],}}
function t1093__updatePopupObjValue(key,value){if(!window.tPopupObj||!window.tPopupObj[key])return;if(window.tPopupObj[key].indexOf(value)===-1)window.tPopupObj[key].push(value)}
function t1093__getPopupObjValue(key){return window.tPopupObj[key]}
function t1093__showOnHover(e){var popup=e.target.closest('.t-popup');if(!popup)e.preventDefault();if(popup&&!popup.classList.contains('t-popup_show'))return;t1093__updateGlobalObj('hoverTimer',0,'timeout');var targetHook=t1093__getHookOnHover(e);var activeHoverHook=t1093__getGlobalObjValue('activeHoverHook');if(targetHook&&targetHook===activeHoverHook)return;if(!popup)t1093__closePopup(!0,-1,!1);t1093__updateGlobalObj('activeHoverHook',targetHook,'string');t1093__processCurrentPopupOnShow(targetHook)}
function t1093__hideOnHover(e){var targetHook=t1093__getHookOnHover(e);var newTimeout=setTimeout(function(){t1093__updateGlobalObj('activeHoverHook','','string');var openPopupList=t1093__getPopupObjValue('openPopUpList');var openPopupIndex=openPopupList.indexOf(targetHook);if(openPopupIndex!==-1){t1093__closePopup(!1,openPopupIndex,!1)}
t1093__updateGlobalObj('hoverTimer',0,'timeout')},300);t1093__updateGlobalObj('hoverTimer',newTimeout,'timeout')}
function t1093__getHookOnHover(e){var target=e.target;var targetHref=target.getAttribute('href');var popupTarget=target.closest('.t-popup');var hookList=t1093__getPopupObjValue('hoverHookList');if(hookList.length&&hookList.indexOf(targetHref)!==-1)return targetHref;return(popupTarget&&popupTarget.getAttribute('data-tooltip-hook'))||targetHref||''}
function t1093__showOnClick(e){var hookList=t1093__getPopupObjValue('hookList');if(!hookList.length)return;var target=e.target;var hookListSelector=t1093__createSelectorFromHookList(!1);var targetLink=target.closest(hookListSelector);if(!targetLink)return;e.preventDefault();var targetHook=targetLink.getAttribute('href')||'';var openPopupList=t1093__getPopupObjValue('openPopUpList');var openPopupIndex=openPopupList.indexOf(targetHook);if(openPopupIndex!==-1&&e.isTrusted){t1093__closePopup(!1,openPopupIndex,!1);return}
t1093__processCurrentPopupOnShow(targetHook)}
function t1093__processCurrentPopupOnShow(targetHook){var currentPopup=document.querySelector('[data-tooltip-hook="'+targetHook+'"]');var currentPopupRec=currentPopup?currentPopup.closest('.r'):null;t1093__showCurrentPopup(currentPopup);if(currentPopupRec){t_onFuncLoad('t_popup__resizePopup',function(){t_popup__resizePopup(currentPopupRec.id.replace('rec',''))})}
var isScrollablePopup=currentPopup.querySelector('.t-popup__container-static');var isPopupHasDisabledBG=t1093__getBooleanPopupAttribute(currentPopup,'disabled-bg');var isPopupHasLockScroll=t1093__getBooleanPopupAttribute(currentPopup,'disable-lock-scroll');if(isScrollablePopup){if(isPopupHasLockScroll)t1093__updateBodyOnAction('add');if(isPopupHasDisabledBG)currentPopup.classList.remove('t-popup-disabled-bg')}else if(isPopupHasDisabledBG)currentPopup.classList.add('t-popup-disabled-bg')}
function t1093__getBooleanPopupAttribute(popup,attrName){return popup.getAttribute('data-popup-'+attrName)==='y'}
function t1093__createSelectorFromHookList(isHoverTrigger){var hookListName=isHoverTrigger?'hoverHookList':'hookList';var hookList=t1093__getPopupObjValue(hookListName);var selectorList=hookList.map(function(hook){return 'a[href="'+hook+'"]'});return selectorList.join(', ')}
function t1093__setListenersForPopup(popup,isHoverTrigger){if(!popup)return;if(isHoverTrigger){t1093__processEventsOnHover(popup)}else{popup.removeEventListener('click',t1093__closePopupOnClick);popup.addEventListener('click',t1093__closePopupOnClick)}
popup.removeEventListener('click',t1093__closePopupOnCloseButton);popup.addEventListener('click',t1093__closePopupOnCloseButton)}
function t1093__setListenersForDocument(isHoverTrigger){if(isHoverTrigger){var selectorList=t1093__createSelectorFromHookList(isHoverTrigger);var hookLinks=Array.prototype.slice.call(document.querySelectorAll(selectorList));hookLinks.forEach(function(link){t1093__processEventsOnHover(link)})}else{document.removeEventListener('click',t1093__showOnClick);document.addEventListener('click',t1093__showOnClick)}
document.removeEventListener('click',t1093__processCloseLink);document.removeEventListener('keydown',t1093__closeOnESC);document.addEventListener('keydown',t1093__closeOnESC);document.addEventListener('click',t1093__processCloseLink)}
function t1093__setAnalyticsListeners(popup){var popupAnalytics=popup.getAttribute('data-track-popup');if(!popupAnalytics)return;var currentHook=popup.getAttribute('data-tooltip-hook');document.addEventListener('click',function(e){var hookLink=e.target.closest('a[href="'+currentHook+'"]');if(!hookLink)return;if(window.Tilda)Tilda.sendEventToStatistics(popupAnalytics,currentHook)})}
function t1093__processEventsOnHover(elem){elem.removeEventListener('mouseover',t1093__showOnHover);elem.removeEventListener('mouseout',t1093__hideOnHover);elem.addEventListener('mouseover',t1093__showOnHover);elem.addEventListener('mouseout',t1093__hideOnHover)}
function t1093__closeOnESC(e){if(e.keyCode===27){e.preventDefault();t1093__closePopup(!1,-1,!0)}}
function t1093__processCloseLink(e){var isCloseLink=e.target.closest('a[href="#closepopup"]');var isAllCloseLink=e.target.closest('a[href="#closeallpopup"]');if(!isCloseLink&&!isAllCloseLink)return;e.preventDefault();t1093__closePopup(Boolean(isAllCloseLink),-1,!0)}
function t1093__closeOnLink(e){var openPopupList=t1093__getPopupObjValue('openPopUpList');if(!openPopupList.length)return;var popupLink=e.target.closest('a[href*="#"]');if(!popupLink)return;var exceptionSelectors=['.t978__tm-link','.t966__tm-link','.t794__tm-link','a[href="#closepopup"]','a[href="#closeallpopup"]',];var isLinkHasSubmenu=exceptionSelectors.some(function(selector){return popupLink.closest(selector)});if(!isLinkHasSubmenu)t1093__closePopup(!0,-1,!0)}
function t1093__closePopupOnClick(e){var isPopupBackground=!e.target.closest('.t-popup__container');if(!isPopupBackground)return;var currentPopup=e.target.closest('.t-popup');var currentPopupHook=currentPopup?currentPopup.getAttribute('data-tooltip-hook'):'';var openPopupList=t1093__getPopupObjValue('openPopUpList');var currentPopupIndex=openPopupList.indexOf(currentPopupHook);t1093__closePopup(!1,currentPopupIndex,!0)}
function t1093__closePopupOnCloseButton(e){var isCloseButton=e.target.closest('.t-popup__close');if(!isCloseButton)return;t1093__closePopup(!1,-1,!0)}
function t1093__showCurrentPopup(popup){if(!popup)return;if(popup.closeTimerID)clearTimeout(popup.closeTimerID);var rec=popup.closest('.r');var windowWidth=window.innerWidth;var screenMin=rec.getAttribute('data-screen-min');var screenMax=rec.getAttribute('data-screen-max');if(screenMin&&windowWidth<parseInt(screenMin,10))return;if(screenMax&&windowWidth>parseInt(screenMax,10))return;var popupHook=popup.getAttribute('data-tooltip-hook');t1093__updatePopupObjValue('openPopUpList',popupHook);document.removeEventListener('click',t1093__closeOnLink);document.addEventListener('click',t1093__closeOnLink);popup.style.display='block';var popupBG=popup.nextElementSibling;if(popupBG)popupBG.classList.add('t-popup__bg-active');var allRecords=document.getElementById('allrecords');var isLazy=allRecords?allRecords.getAttribute('data-tilda-lazy')==='yes':!1;if(window.lazy==='y'||isLazy){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}
var artBoard=popup.querySelector('.t396__artboard');if(artBoard&&!popup.resizeProcessed){var blockID=artBoard.getAttribute('data-artboard-recid')||'';t_onFuncLoad('t396_doResize',function(){t396_doResize(blockID);popup.resizeProcessed=!0})}
var galleryElems=Array.prototype.slice.call(popup.querySelectorAll('[data-elem-type="gallery"]'));if(galleryElems.length){t_onFuncLoad('t_slds_updateSlider',function(){galleryElems.forEach(function(element){t_slds_updateSlider([element])})})}
var formElems=Array.prototype.slice.call(popup.querySelectorAll('[data-elem-type="form"]'));formElems.forEach(function(elem){var form=elem.querySelector('.t-form');if(!form)return;form.removeAttribute('data-success-popup')});setTimeout(function(){popup.focus();var popupContainer=popup.querySelector('.t-popup__container');if(popupContainer)popupContainer.classList.add('t-popup__container-animated');popup.classList.add('t-popup_show');t_onFuncLoad('t_popup__trapFocus',function(){t_popup__trapFocus(popup)})},50);var popupTimer=t1093__getTimer(popup,'open');var needFadeOut=t1093__getResponsiveAttr(popup,'anim-close')==='fadein';if(needFadeOut){popup.openTimerID=setTimeout(function(){popup.classList.add('t-popup-fadeout');popup.openTimerID=0},popupTimer)}
if((popupTimer&&window.lazy==='y')||isLazy){setTimeout(function(){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})},popupTimer)}
if(!t1093__getBooleanPopupAttribute(popup,'disable-lock-scroll')){t1093__updateBodyOnAction('add')}}
function t1093__closePopup(closeAll,index,removeAnimOnCloseFromHook){var openPopupList=t1093__getPopupObjValue('openPopUpList');if(!openPopupList.length)return;var popupList=t1093__processClosedPopupList(closeAll,index);if(!popupList.length)return;openPopupList=t1093__getPopupObjValue('openPopUpList');var isLastPopup=openPopupList.length===0;popupList.forEach(function(popup){if(isLastPopup)t1093__updateBodyOnAction('remove');popup.classList.remove('t-popup_show');if(popup.openTimerID)clearTimeout(popup.openTimerID);t1093__removeAnimationOnClose(popup);if(removeAnimOnCloseFromHook)t1093__removeAnimFromHookLinkOnClose(popup);t_onFuncLoad('t_popup__addFocusOnTriggerButton',function(){t_popup__addFocusOnTriggerButton()});var popupCloseTimer=t1093__getTimer(popup,'close');popup.closeTimerID=setTimeout(function(){if(!popup.classList.contains('t-popup_show'))popup.style.display='none';var popupBG=popup.nextElementSibling;if(popupBG)popupBG.classList.remove('t-popup__bg-active');popup.classList.remove('t-popup-fadeout');t1093__pauseAllVideo(popup);popup.closeTimerID=0},popupCloseTimer)})}
function t1093__updateBodyOnAction(action){var triggeredEvent=action==='add'?'popupShowed':'popupHidden';var body=document.body;if(typeof t_triggerEvent==='function')t_triggerEvent(body,triggeredEvent);body.classList[action]('t-body_popupshowed')}
function t1093__pauseAllVideo(popup){if(!popup)return;var videoElems=Array.prototype.slice.call(popup.querySelectorAll('[data-elem-type="video"], [data-elem-type="gallery"]'));videoElems.forEach(function(element){var videoElem=element.querySelector('video, iframe');if(!videoElem)return;if(videoElem.tagName==='VIDEO')videoElem.pause();if(videoElem.tagName!=='IFRAME'||!videoElem.src)return;if(videoElem.src.indexOf('&enablejsapi=1')!==-1){videoElem.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*')}
if(videoElem.src.indexOf('vimeo')!==-1&&videoElem.src.indexOf('&api=1')!==-1){videoElem.contentWindow.postMessage('{"method":"pause","value":"true"}','*')}})}
function t1093__getTimer(popup,action){var isMobileResolution=t1093__getGlobalObjValue('isMobRes');if(typeof isMobileResolution==='undefined')return 50;var isZeroTimer=t1093__getResponsiveAttr(popup,'anim-close')==='empty';if((isZeroTimer&&action==='close')||!popup.classList.contains('t-popup-transition'))return 0;var popupTimer=popup.getAttribute('data-anim-timeout');if(popupTimer)popupTimer*=1000;return popupTimer||0}
function t1093__getResponsiveAttr(popup,attr){var isMobileResolution=t1093__getGlobalObjValue('isMobRes');if(typeof isMobileResolution==='undefined')return null;var currentAttr='data-'+attr;if(isMobileResolution){var attrMob=popup.getAttribute(currentAttr+'-mobile');if(attrMob)return attrMob}
return popup.getAttribute(currentAttr)}
function t1093__removeAnimFromHookLinkOnClose(popup){var popupHook=popup.getAttribute('data-tooltip-hook');var popupInitLinks=Array.prototype.slice.call(document.querySelectorAll('a[href="'+popupHook+'"]'));popupInitLinks.forEach(function(link){var animEl=link.closest('.js-sbs-anim-trigger_click');if(!animEl)return;var animElID=animEl.getAttribute('data-elem-id');var animElArtBoard=animEl.closest('.t396__artboard');var alreadyAnimatedEls=Array.prototype.slice.call(animElArtBoard.querySelectorAll('.t-sbs-anim_started'));alreadyAnimatedEls.forEach(function(animEl){var triggersList=animEl.getAttribute('data-animate-sbs-trgels');if(!triggersList||triggersList.indexOf(animElID)===-1)return;animEl.classList.remove('t-sbs-anim_started')})})}
function t1093__processClosedPopupList(closeAll,index){var openPopupList=t1093__getPopupObjValue('openPopUpList');var hookList=closeAll?openPopupList:openPopupList.slice(index);var popupSelectors=hookList.map(function(hook){return '[data-tooltip-hook="'+hook+'"]'});popupSelectors=popupSelectors.join(', ');t1093__clearPopupObjKey('openPopUpList',closeAll,index);return Array.prototype.slice.call(document.querySelectorAll(popupSelectors))}
function t1093__removeAnimationOnClose(popup){var popupAnimElems=Array.prototype.slice.call(popup.querySelectorAll('.t-animate_started'));var windowWidth=(window.tn&&window.tn.curResolution)||window.innerWidth;popupAnimElems.forEach(function(elem){if(windowWidth<1200&&elem.getAttribute('data-animate-mobile')!=='y')return;elem.classList.remove('t-animate_started');elem.classList.add('t-animate_wait')})}
function t1093__clearPopupObjKey(key,emptyAll,index){if(!window.tPopupObj||!window.tPopupObj[key])return;if(emptyAll){window.tPopupObj[key]=[]}else if(index===-1){window.tPopupObj[key].pop()}else{window.tPopupObj[key]=window.tPopupObj[key].slice(0,index)}}