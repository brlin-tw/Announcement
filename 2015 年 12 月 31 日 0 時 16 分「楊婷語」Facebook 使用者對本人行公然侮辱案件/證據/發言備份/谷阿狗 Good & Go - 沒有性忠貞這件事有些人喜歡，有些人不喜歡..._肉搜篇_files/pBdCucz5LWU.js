/*!CK:3908508729!*//*1451342120,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Ef23F"]); }

__d('sortReactionTypes',['UFIConstants','UFIReactionTypes'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={};i.ordering.forEach(function(l,m){j[l]=m;});function k(l,m){return Object.keys(l).map(function(n){return Number(n);}).sort(function(n,o){if(m&&n===h.LikeReaction)return -1;if(l[n]['default']===l[o]['default'])return j[n]-j[o];return l[o]['default']-l[n]['default'];});}f.exports=k;},null);
__d('UFIReactionsBlingComments.react',['ActorURI','React','XUFICommentTooltipController','fbt'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;l=babelHelpers.inherits(n,i.Component);m=l&&l.prototype;n.getLabel=function(o,p){'use strict';return k._({"Comment":"{count}\u5247\u7559\u8a00","Comments":"{count}\u5247\u7559\u8a00"},[k.param('count',p),k['enum'](o===1?'Comment':'Comments',{Comment:'Comment',Comments:'Comments'})]);};function n(o,p){'use strict';m.constructor.call(this);}n.prototype.render=function(){'use strict';var o=h.create(j.getURIBuilder().setString('ft_ent_identifier',this.props.feedback.entidentifier).getURI(),this.props.feedback.actorforpost);return (i.createElement('a',babelHelpers._extends({},this.props,{'aria-live':'polite','data-hover':'tooltip','data-tooltip-uri':o,href:this.props.href,role:'button'}),this.props.children));};f.exports=n;},null);
__d('UFIReactionsBlingSeens.react',['ProfileBrowserLink','ProfileBrowserTypes','React','URI','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m,n;m=babelHelpers.inherits(o,j.Component);n=m&&m.prototype;function o(p,q){'use strict';n.constructor.call(this);}o.prototype.render=function(){'use strict';var p=this.props.feedback.seencount,q=i.GROUP_MESSAGE_VIEWERS,r={id:this.props.feedback.targetfbid},s=new k('/ajax/ufi/seen_tooltip.php').setQueryData({ft_ent_identifier:this.props.feedback.entidentifier,displayed_count:p}),t;if(this.props.feedback.seenbyall){t=l._("\u6240\u6709\u4eba\u90fd\u5df2\u770b\u904e");}else if(p===1){t=l._("1 \u4eba\u770b\u904e");}else t=l._("{count}\u4eba\u5df2\u770b\u904e",[l.param('count',p)]);return (j.createElement('a',babelHelpers._extends({},this.props,{ajaxify:h.constructDialogURI(q,r),'aria-live':'polite','data-hover':'tooltip','data-tooltip-uri':s,href:h.constructPageURI(q,r),rel:'dialog'}),t));};f.exports=o;},null);
__d("XUFIShareTooltipController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ufi\/share\/tooltip\/",{ft_ent_identifier:{type:"String",required:true},seen_user_fbids:{type:"IntVector",defaultValue:[]}});},null);
__d('UFIReactionsBlingShares.react',['ActorURI','React','URI','XUFIShareTooltipController','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m,n;m=babelHelpers.inherits(o,i.Component);n=m&&m.prototype;o.getLabel=function(p,q){'use strict';return l._({"Share":"{count}\u5247\u5206\u4eab","Shares":"{count}\u5247\u5206\u4eab"},[l.param('count',q),l['enum'](p===1?'Share':'Shares',{Share:'Share',Shares:'Shares'})]);};function o(p,q){'use strict';n.constructor.call(this);}o.prototype.render=function(){'use strict';var p=h.create(new j('/ajax/shares/view').setQueryData({target_fbid:this.props.feedback.targetfbid}),this.props.feedback.actorforpost),q=h.create(new j('/shares/view').setSubdomain('www').setQueryData({id:this.props.feedback.targetfbid}),this.props.feedback.actorforpost),r=h.create(k.getURIBuilder().setString('ft_ent_identifier',this.props.feedback.entidentifier).getURI(),this.props.feedback.actorforpost);return (i.createElement('a',babelHelpers._extends({},this.props,{ajaxify:p,'aria-live':'polite','data-hover':'tooltip','data-tooltip-uri':r,href:q,rel:'dialog',role:'button'}),this.props.children));};f.exports=o;},null);
__d('UFIReactionsProfileBrowserUtils',['ActorURI','XUFIReactionProfileBrowserController','XUFIReactionProfileDialogController'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={getDialogURI:function(l,m){return h.create(j.getURIBuilder().setString('ft_ent_identifier',l.entidentifier).setEnum('reaction_type',m).getURI(),l.actorforpost);},getPageURI:function(l){return h.create(i.getURIBuilder().setString('ft_ent_identifier',l.entidentifier).getURI(),l.actorforpost);}};f.exports=k;},null);
__d('UFIReactionsBlingTokens.react',['BootloadedComponent.react','Event','JSResource','RTLKeys','React','ReactDOM','UFIReactionIconImpl.react','UFIReactionTypes','UFIReactionsProfileBrowserUtils','cx','fbt','joinClasses','sortReactionTypes'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u,v,w=l.PropTypes;u=babelHelpers.inherits(x,l.Component);v=u&&u.prototype;function x(y,z){'use strict';v.constructor.call(this);this.index=-1;this.onBlur=this.onBlur.bind(this);this.onKeyDown=this.onKeyDown.bind(this);this.onKeyUp=this.onKeyUp.bind(this);this.state={active:null,canFocus:false,selectedIndex:0,shouldRemoveOutline:true,useTooltip:false};}x.prototype.componentDidUpdate=function(){'use strict';var y=this.state,z=y.canFocus,aa=y.selectedIndex;if(z&&aa>-1)m.findDOMNode(this.refs[aa]).focus();};x.prototype.componentDidMount=function(){'use strict';this.focusInListener=i.listen(document.documentElement,'focusin',this.onBlur);};x.prototype.componentWillUnmount=function(){'use strict';this.focusInListener.remove();};x.prototype.componentWillUpdate=function(){'use strict';this.index=-1;};x.prototype.componentWillReceiveProps=function(y){'use strict';if(y.feedback.reactioncount!==this.props.feedback.reactioncount)this.setState({active:null});};x.prototype.onBlur=function(event){'use strict';var y=event.target instanceof Node&&this.refs.tokens.contains(event.target);if(!y)this.setState({canFocus:false});};x.prototype.onMouseEnter=function(y){'use strict';this.setState({active:y,useTooltip:true,shouldRemoveOutline:true});};x.prototype.onKeyDown=function(event){'use strict';switch(event.keyCode){case k.TAB:this.setState({selectedIndex:0});break;case k.getLeft():case k.getRight():event.preventDefault();var y=this.state.selectedIndex+(event.keyCode===k.getLeft()?-1:1),z=this.index;if(y>=0&&y<=z)this.setState({canFocus:true,selectedIndex:y});break;}};x.prototype.onKeyUp=function(event){'use strict';if(event.keyCode===k.TAB)this.setState({shouldRemoveOutline:false});};x.prototype.onTokenClick=function(y){'use strict';this.setState({selectedIndex:y});};x.prototype.renderToken=function(y){'use strict';var z=this.props.feedback,aa=r._("{reduced_count}\u500b{reaction_type}",[r.param('reduced_count',z.reactioncountmap[y].reduced),r.param('reaction_type',o.reactions[y].display_name)]),ba=++this.index,ca={ajaxify:p.getDialogURI(z,y),'aria-label':aa,className:"_27jf"+(this.state.shouldRemoveOutline?' '+"_2f24":'')+(' '+"_3emk"),href:p.getPageURI(z),key:'reactionType-'+y,onClick:this.onTokenClick.bind(this,ba),ref:ba,rel:'dialog',role:'button',tabIndex:this.state.selectedIndex===ba?0:-1},da=l.createElement(n,{className:"_4-op",reaction:y}),ea=this.state.useTooltip,fa=!ea?this.onMouseEnter.bind(this,y):null,ga=l.createElement('a',babelHelpers._extends({onMouseEnter:fa},ca),da,l.createElement('span',{className:"_3chu"},z.reactioncountmap[y].reduced));if(!ea)return ga;return (l.createElement(h,babelHelpers._extends({bootloadPlaceholder:ga,bootloadLoader:j('UFIReactionsTooltipImpl.react'),active:this.state.active===y,feedback:z,reaction:y,onComponentLoad:this.props.onComponentLoad},ca),da,l.createElement('span',{className:"_3chu"},z.reactioncountmap[y].reduced)));};x.prototype.render=function(){'use strict';var y=this.props.feedback.reactioncountmap,z=t(y,this.props.hoistLike);if(this.props.max)z=z.slice(0,this.props.max);z=z.map((function(aa){if(!o.reactions[aa]||!y[aa]['default'])return null;return this.renderToken(aa);}).bind(this));return (l.createElement('div',{className:s("_3t53",this.props.className),onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp},l.createElement('span',{'aria-label':r._("\u770b\u770b\u8ab0\u5c0d\u9019\u500b\u50b3\u9054\u4e86\u5fc3\u60c5"),className:"_3t54",ref:'tokens',role:'toolbar'},z),this.props.children));};x.propTypes={className:w.string,hoistLike:w.bool,max:w.number};x.defaultProps={className:null,hoistLike:false};f.exports=x;},null);
__d('UFIReactionsBlingSocialSentence.react',['ActorURI','ProfileBrowserLink','ProfileBrowserTypes','React','UFIReactionsBlingTokens.react','UFIReactionsProfileBrowserUtils','URI','XUFICommentTooltipController','XUFIShareTooltipController','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s,t,u=3;s=babelHelpers.inherits(v,k.Component);t=s&&s.prototype;function v(w,x){'use strict';t.constructor.call(this);this.state={};}v.prototype.renderComments=function(){'use strict';var w=this.props.contextArgs.isstreaming;if(!this.props.commentCount||this.props.contextArgs.feedbackMode==='expanded'&&!w)return null;var x=this.props.contextArgs.commentajaxify,y=isNaN(this.props.feedback.commentcountreduced)&&!w?this.props.feedback.commentcountreduced:this.props.commentCount,z=h.create(o.getURIBuilder().setString('ft_ent_identifier',this.props.feedback.entidentifier).getURI(),this.props.feedback.actorforpost);return (k.createElement('a',{ajaxify:x,'aria-live':'polite',className:"_ipm",'data-comment-prelude-ref':this.props['data-comment-prelude-ref'],'data-ft':this.props['data-ft'],'data-hover':'tooltip','data-tooltip-uri':z,href:this.props.href,onClick:this.props.onCommentClick,rel:x?'dialog':'ignore',role:'button'},this.props.children,r._({"Comment":"{count}\u5247\u7559\u8a00","Comments":"{count}\u5247\u7559\u8a00"},[r.param('count',y),r['enum'](this.props.commentCount===1?'Comment':'Comments',{Comment:'Comment',Comments:'Comments'})])));};v.prototype.renderSeens=function(){'use strict';if(this.props.contextArgs.entstream||!this.props.feedback.seencount)return null;var w=this.props.feedback.seencount,x=j.GROUP_MESSAGE_VIEWERS,y={id:this.props.feedback.targetfbid},z=new n('/ajax/ufi/seen_tooltip.php').setQueryData({ft_ent_identifier:this.props.feedback.entidentifier,displayed_count:w}),aa;if(this.props.feedback.seenbyall){aa=r._("\u6240\u6709\u4eba\u90fd\u5df2\u770b\u904e");}else if(w===1){aa=r._("1 \u4eba\u770b\u904e");}else aa=r._("{count}\u4eba\u5df2\u770b\u904e",[r.param('count',w)]);return (k.createElement('a',{ajaxify:i.constructDialogURI(x,y),'aria-live':'polite',className:"_ipm",'data-hover':'tooltip','data-tooltip-uri':z,href:i.constructPageURI(x,y),rel:'dialog'},aa));};v.prototype.renderShares=function(){'use strict';if(!this.props.feedback.sharecount)return null;var w=h.create(new n('/ajax/shares/view').setQueryData({target_fbid:this.props.feedback.targetfbid}),this.props.feedback.actorforpost),x=h.create(new n('/shares/view').setSubdomain('www').setQueryData({id:this.props.feedback.targetfbid}),this.props.feedback.actorforpost),y=h.create(p.getURIBuilder().setString('ft_ent_identifier',this.props.feedback.entidentifier).getURI(),this.props.feedback.actorforpost);return (k.createElement('a',{ajaxify:w,'aria-live':'polite',className:"_ipm",'data-hover':'tooltip','data-tooltip-uri':y,href:x,rel:'dialog',role:'button'},r._({"Share":"{count}\u5247\u5206\u4eab","Shares":"{count}\u5247\u5206\u4eab"},[r.param('count',this.props.feedback.sharecountreduced),r['enum'](this.props.feedback.sharecount===1?'Share':'Shares',{Share:'Share',Shares:'Shares'})])));};v.prototype.renderViews=function(){'use strict';var w=this.props.contextArgs.viewCount;if(!w)return null;return (k.createElement('span',{'aria-live':'polite',className:"_ipm"},r._({"View":"{count}\u6b21\u89c0\u770b","Views":"{count}\u500b\u700f\u89bd\u6b21\u6578"},[r.param('count',this.props.contextArgs.viewCountReduced),r['enum'](w==='1'?'View':'Views',{View:'View',Views:'Views'})])));};v.prototype.render=function(){'use strict';var w=this.props.feedback,x=null,y=w.reactionsentences,z=y&&y.current,aa=m.getDialogURI(w),ba=m.getPageURI(w);if(z&&z.text)x=k.createElement('a',{ajaxify:aa,className:"_4arz",href:ba,rel:'dialog'},z.text);var ca;if(w.reactioncount)ca=k.createElement('a',{ajaxify:aa,className:"_1g5v",href:ba,rel:'dialog'},w.reactioncountreduced);return (k.createElement('div',{className:"_ipn"},k.createElement('div',{className:"_ipo"},this.renderComments(),this.renderShares(),this.renderSeens(),this.renderViews()),k.createElement('div',{className:"_ipp",ref:'bling'},k.createElement(l,{className:"_4ar-",feedback:w,max:u,ref:'tokens'},ca,x))));};f.exports=v;},null);
__d('UFIReactionsBlingSocialSentenceBelowImpl.react',['React','UFIConfig','UFIReactionsBlingTokens.react','UFIReactionsProfileBrowserUtils','cx'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m,n;m=babelHelpers.inherits(o,h.Component);n=m&&m.prototype;function o(p,q){'use strict';n.constructor.call(this,p,q);}o.prototype.render=function(){'use strict';var p=this.props.feedback,q=p.likesentences,r=p.reactioncountreduced,s=p.reactionsentences,t=null;if(i.reactionsSocialSentence&&i.reactionsSocialSentence.type==='short'&&s&&s.current){t=s.current.text;}else if(q&&q.current){t=q.current.text;}else t=r;var u=k.getDialogURI(p),v=k.getPageURI(p),w;if(t)w=h.createElement('a',{ajaxify:u,className:"_4arz",href:v,rel:'dialog'},t);var x;if(p.reactioncount)x=h.createElement('a',{ajaxify:u,className:"_1g5v",href:v,rel:'dialog'},p.reactioncountreduced);return (h.createElement('div',{className:"_ipp"},h.createElement(j,{className:"_4ar- _ipn",feedback:p,max:3},x,w)));};f.exports=o;},null);
__d('UFIReactionsBlingViews.react',['React','fbt'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;j=babelHelpers.inherits(l,h.Component);k=j&&j.prototype;l.prototype.render=function(){'use strict';return (h.createElement('span',babelHelpers._extends({},this.props,{'aria-live':'polite'}),i._({"View":"{count}\u6b21\u89c0\u770b","Views":"{count}\u500b\u700f\u89bd\u6b21\u6578"},[i.param('count',this.props.reducedCount),i['enum'](this.props.count==='1'?'View':'Views',{View:'View',Views:'Views'})])));};function l(){'use strict';j.apply(this,arguments);}f.exports=l;},null);
__d('UFIReactionsLinkImpl.react',['Arbiter','BanzaiLogger','BootloadedComponent.react','Event','JSResource','RTLKeys','React','ReactDOM','ReactionsWaterfallTypedLogger','SubscriptionsHandler','UFIConstants','UFILikeWebDriverIDs','UFIReactionIconImpl.react','UFIReactionTypes','UFIUserActions','UFIUIEvents','cx','shallowCompare'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){if(c.__markCompiled)c.__markCompiled();var z,aa,ba=n.PropTypes,ca=false,da=null,ea=n.createElement('div',null),fa=u.reactions,ga=Object.keys(fa),ha=10,ia=500,ja=250,ka=5,la=500,ma=('ontouchstart' in window);z=babelHelpers.inherits(na,n.Component);aa=z&&z.prototype;function na(oa,pa){'use strict';aa.constructor.call(this,oa,pa);this.hideDialog=this.hideDialog.bind(this);this.onBlur=this.onBlur.bind(this);this.onClick=this.onClick.bind(this);this.onClickCapture=this.onClickCapture.bind(this);this.onDragStart=this.onDragStart.bind(this);this.onKeyUp=this.onKeyUp.bind(this);this.onMouseDown=this.onMouseDown.bind(this);this.onMouseEnter=this.onMouseEnter.bind(this);this.onMouseMove=this.onMouseMove.bind(this);this.onMouseLeave=this.onMouseLeave.bind(this);this.onMouseUp=this.onMouseUp.bind(this);this.onReactionChange=this.onReactionChange.bind(this);this.onReactionMouseEnter=this.onReactionMouseEnter.bind(this);this.onReactionMouseLeave=this.onReactionMouseLeave.bind(this);this.onReactionKeyUp=this.onReactionKeyUp.bind(this);this.onReactionTriggerKeyDown=this.onReactionTriggerKeyDown.bind(this);this.showDialog=this.showDialog.bind(this);this.dragStartX=null;this.dragStartY=null;this.subscriptionsHandler=new q();if(ma){this.onTouchEnd=this.onTouchEnd.bind(this);this.onTouchMove=this.onTouchMove.bind(this);this.onTouchStart=this.onTouchStart.bind(this);}this.state={dialogShown:false,isLongPressing:false,isMouseDown:false,isMouseOver:false,isScrubbing:false,NUXShown:false};}na.prototype.shouldComponentUpdate=function(oa,pa){'use strict';return y(this,oa,pa);};na.prototype.componentWillUpdate=function(oa,pa){'use strict';if(this.state.dialogShown&&!pa.dialogShown){this.$UFIReactionsLink1(this.props.reaction);if(!this.reactionSelected)this.$UFIReactionsLink2(this.props.reaction);}};na.prototype.componentDidUpdate=function(oa,pa){'use strict';if(!pa.dialogShown&&this.state.dialogShown){this.subscriptionsHandler.addSubscriptions(k.listen(document.documentElement,'click',this.onBlur),k.listen(document.documentElement,'focusin',this.onBlur));if(ma){var qa;this.subscriptionsHandler.addSubscriptions(k.listen(document.documentElement,'touchstart',function(event){qa=event.touches[0];}),k.listen(document.documentElement,'touchmove',function(event){qa=event.touches[0];}),k.listen(document.documentElement,'touchend',(function(event){if(!this.refs.root.contains(document.elementFromPoint(qa.clientX,qa.clientY)))this.setState({dialogShown:false,isLongPressing:false,isMouseDown:false,isScrubbing:false});}).bind(this)));}}else if(pa.dialogShown&&!this.state.dialogShown){this.subscriptionsHandler.release();this.subscriptionsHandler=new q();}};na.prototype.componentDidMount=function(){'use strict';this.$UFIReactionsLink3();};na.prototype.componentWillUnmount=function(){'use strict';this.subscriptionsHandler.release();};na.prototype.maybeShowNUX=function(){'use strict';if(this.props.hasNUX&&!ca){ca=true;this.setState({NUXShown:true,dialogShown:false});i.log('WebReactionsNuxLoggerConfig',{feedback_id:this.props.id,'interface':'www'});}};na.prototype.hideDialog=function(){'use strict';this.setState({dialogShown:false,isScrubbing:false});};na.prototype.showDialog=function(){'use strict';if(this.dialogShownTime===0)this.dialogShownTime=Date.now();ca=true;this.setState({dialogShown:true,NUXShown:false});};na.prototype.onBlur=function(event){'use strict';var oa=event.target instanceof Node&&o.findDOMNode(this.refs.root).contains(event.target);if(!oa)this.setState({dialogShown:oa});};na.prototype.onClick=function(event){'use strict';var oa=this.props.reaction;if(!oa||oa===r.LikeReaction||!fa[oa]){this.maybeShowNUX();this.props.onActionLikeClick(event);}else this.onReactionChange(0,event);this.setState({dialogShown:false,isMouseOver:false,isScrubbing:false});};na.prototype.onClickCapture=function(event){'use strict';event.stopPropagation();this.setState({isLongPressing:false});};na.prototype.onDragStart=function(event){'use strict';event.preventDefault();};na.prototype.onKeyUp=function(event){'use strict';if(event.keyCode==m.TAB)this.setState({dialogShown:true});};na.prototype.onMouseDown=function(event){'use strict';clearTimeout(this.hoverTimeout);this.mouseDownTime=event.timeStamp;this.setState({isMouseDown:true});};na.prototype.onMouseEnter=function(event){'use strict';clearTimeout(this.hoverTimeout);this.setState({isMouseOver:true});this.reactionSelected=false;this.initialReaction=this.props.reaction;this.mouseDownTime=0;this.mouseEnterTime=event.timeStamp;this.mouseLeaveTime=0;this.mouseUpTime=0;};na.prototype.onMouseLeave=function(event){'use strict';clearTimeout(this.hoverTimeout);this.hoverTimeout=setTimeout(this.hideDialog,ja);this.setState({isMouseOver:false});this.mouseLeaveTime=event.timeStamp;if(!this.state.dialogShown&&this.refs.trigger.contains(event.target))this.$UFIReactionsLink2(this.props.reaction);};na.prototype.onMouseMove=function(event){'use strict';var oa=event.clientX,pa=event.clientY;clearTimeout(this.hoverTimeout);if(typeof this.hoverX==='number'&&typeof this.hoverY==='number'&&this.hoverX<oa+ka&&this.hoverX>oa-ka&&this.hoverY<pa+ka&&this.hoverY>pa-ka)this.hoverTimeout=setTimeout(this.showDialog,ia);this.hoverX=oa;this.hoverY=pa;};na.prototype.onMouseUp=function(event){'use strict';this.mouseUpTime=event.timeStamp;this.setState({isMouseDown:false});};na.prototype.onTouchStart=function(event){'use strict';if(!this.state.dialogShown){this.mouseDownTime=Date.now();this.mouseUpTime=0;this.longPressTimeout=setTimeout((function(){if(this.dialogShownTime===0)this.dialogShownTime=Date.now();this.setState({dialogShown:true,NUXShown:false,isLongPressing:true});}).bind(this),la);}};na.prototype.onTouchEnd=function(event){'use strict';if(this.state.isLongPressing)this.mouseUpTime=Date.now();this.dragStartX=null;this.dragStartY=null;clearTimeout(this.longPressTimeout);};na.prototype.onTouchMove=function(event){'use strict';if(this.state.isScrubbing)return;var oa=event.touches[0],pa=oa.clientX,qa=oa.clientY;if(this.dragStartX===null&&this.dragStartY===null){this.dragStartX=pa;this.dragStartY=qa;return;}if(typeof this.dragStartX==='number'&&typeof this.dragStartY==='number'&&(this.dragStartX<pa+ha||this.dragStartX>pa-ha||this.dragStartY<qa+ha||this.dragStartY>qa-ha))this.setState({isScrubbing:true});};na.prototype.onReactionChange=function(oa,event){'use strict';this.$UFIReactionsLink1(oa);this.reactionSelected=true;this.$UFIReactionsLink2(oa);v.changeReaction(this.props.id,oa,{target:event.target});h.inform(w.ReactionButtonClicked,{ft_id:this.props.id,like_action:oa>0,target:event.target});this.setState({dialogShown:false,isLongPressing:false,isMouseDown:false,isScrubbing:false});};na.prototype.onReactionKeyUp=function(event){'use strict';if(event.keyCode==m.ESC||event.keyCode==m.RETURN)this.hideDialog();};na.prototype.onReactionMouseEnter=function(oa,event){'use strict';if(this.reactionsHoverStartTimeMap[oa]===0)this.reactionsHoverStartTimeMap[oa]=Date.now();};na.prototype.onReactionMouseLeave=function(oa,event){'use strict';if(this.reactionsHoverStartTimeMap[oa]){this.reactionsHoverTotalTimeMap[oa]+=Date.now()-this.reactionsHoverStartTimeMap[oa];this.reactionsHoverStartTimeMap[oa]=0;}};na.prototype.onReactionTriggerKeyDown=function(event){'use strict';switch(event.keyCode){case m.ESC:this.hideDialog();break;}};na.prototype.renderTrigger=function(){'use strict';var oa=this.props.reaction;if(oa&&!fa[oa])oa=null;var pa;if(!oa||oa==r.LikeReaction){pa=fa[r.LikeReaction].display_name;}else pa=fa[oa].display_name;var qa=!oa||oa==r.LikeReaction?null:n.createElement(t,{className:"_1ktw",reaction:oa,size:'13'}),ra=oa?s.UNLIKE_LINK:s.LIKE_LINK;return (n.createElement('a',{className:"UFILikeLink"+(!qa?' '+"_48-k":'')+(oa?' '+"UFILinkBright":''),'data-testid':ra,href:'#',onClick:this.onClick,onClickCapture:this.state.isLongPressing?this.onClickCapture:null,onContextMenu:function(event){event.preventDefault();},onDragStart:this.onDragStart,onKeyDown:this.onReactionTriggerKeyDown,onKeyUp:this.onKeyUp,onMouseDown:this.onMouseDown,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onMouseMove:this.state.isMouseOver?this.onMouseMove:null,onMouseUp:this.onMouseUp,onTouchEnd:ma?this.onTouchEnd:null,onTouchMove:ma?this.onTouchMove:null,onTouchStart:ma?this.onTouchStart:null,ref:'trigger',role:'button',style:{color:oa?fa[oa].color:null},tabIndex:'-1'},qa,pa));};na.prototype.renderMenu=function(){'use strict';if(!this.state.dialogShown&&!da)return null;return (n.createElement(j,{bootloadPlaceholder:ea,bootloadLoader:l('UFIReactionsMenuImpl.react'),initialReaction:this.props.reaction,isLongPressing:this.state.isLongPressing,mouseActivated:this.state.isMouseOver,onComponentLoad:function(oa){da=oa;},onMouseEnter:(function(){clearTimeout(this.hoverTimeout);}).bind(this),onMouseLeave:this.onMouseLeave,onReactionClick:this.onReactionChange,onReactionFocus:this.showDialog,onReactionKeyUp:this.onReactionKeyUp,onReactionMouseEnter:this.onReactionMouseEnter,onReactionMouseLeave:this.onReactionMouseLeave,shown:this.state.dialogShown,supportedReactions:this.props.supportedReactions}));};na.prototype.renderNUX=function(){'use strict';var oa=o.findDOMNode(this.refs.root);if(!this.state.NUXShown||!oa)return null;return (n.createElement(j,{bootloadPlaceholder:n.createElement('div',null),bootloadLoader:l('UFIReactionsNUX.react'),context:oa}));};na.prototype.render=function(){'use strict';return (n.createElement('div',{className:"uiContextualLayerParent"+(' '+"_khz")+(this.state.isScrubbing?' '+"_4bdq":''),ref:'root'},this.renderTrigger(),this.renderMenu(),this.renderNUX()));};na.prototype.$UFIReactionsLink3=function(){'use strict';this.dialogShownTime=0;this.reactionsHoverStartTimeMap={};this.reactionsHoverTotalTimeMap={};ga.forEach((function(oa){this.reactionsHoverStartTimeMap[oa]=0;this.reactionsHoverTotalTimeMap[oa]=0;}).bind(this));};na.prototype.$UFIReactionsLink1=function(oa){'use strict';if(this.dialogShownTime!==0){var pa=babelHelpers._extends({feedback_id:this.props.id,final_reaction:oa,initial_reaction:this.props.reaction,'interface':'www',long_press_duration:this.mouseDownTime!==0&&this.mouseUpTime!==0?this.mouseUpTime-this.mouseDownTime:0,time_spent:Date.now()-this.dialogShownTime},{});for(var qa in this.reactionsHoverTotalTimeMap){var ra='time_spent_'+fa[qa].name.toLowerCase();pa[ra]=this.reactionsHoverTotalTimeMap[qa];}i.log('UserReactionsLoggerConfig',pa);this.$UFIReactionsLink3();}};na.prototype.$UFIReactionsLink2=function(oa){'use strict';var pa=this.mouseUpTime>0&&this.mouseDownTime>0?this.mouseUpTime-this.mouseDownTime:0,qa=this.mouseLeaveTime-this.mouseEnterTime;if(qa>0)new p().setClickDuration(pa).setFinalState(oa).setHoverDuration(qa).setInitialState(this.initialReaction).setHasReactions(true).log();};na.propTypes={hasNUX:ba.bool.isRequired,id:ba.string.isRequired,onActionLikeClick:ba.func.isRequired,reaction:ba.number.isRequired,supportedReactions:ba.arrayOf(ba.number).isRequired};f.exports=na;},null);