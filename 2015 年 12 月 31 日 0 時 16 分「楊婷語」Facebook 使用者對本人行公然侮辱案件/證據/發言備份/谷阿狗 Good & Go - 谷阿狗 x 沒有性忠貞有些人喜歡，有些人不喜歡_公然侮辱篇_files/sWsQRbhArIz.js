/*!CK:3146900335!*//*1451358595,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["mM9IU"]); }

__d("ComposedBlockType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={UNSTYLED:0,PARAGRAPH:1,UNORDERED_LIST_ITEM:2,ORDERED_LIST_ITEM:3,BLOCKQUOTE:4,HEADER_ONE:5,HEADER_TWO:6,CODE:7,MEDIA:8,PULLQUOTE:9};},null);
__d("ComposedInlineStyle",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NONE:0,BOLD:1,ITALIC:2,UNDERLINE:4,CODE:8,STRIKETHROUGH:16,SUBSCRIPT:32,SUPERSCRIPT:64};},null);
__d('CloseButton.react',['React','Image.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.createClass({displayName:'CloseButton',render:function(){var m=this.props,n=m.size||'medium',o=m.appearance||'normal',p=n==='small',q=n==='huge',r=o==='dark',s=o==='inverted',t=m.ajaxify||null,u=m.rel||null,v="uiCloseButton"+(p?' '+"uiCloseButtonSmall":'')+(q?' '+"uiCloseButtonHuge":'')+(p&&r?' '+"uiCloseButtonSmallDark":'')+(p&&s?' '+"uiCloseButtonSmallInverted":'')+(!p&&r?' '+"uiCloseButtonDark":'')+(!p&&s?' '+"uiCloseButtonInverted":'');return (h.createElement('a',babelHelpers._extends({},this.props,{ajaxify:t,href:'#',role:'button','aria-label':m.tooltip,'data-hover':m.tooltip&&'tooltip','data-tooltip-alignh':m.tooltip&&'center',className:k(this.props.className,v),rel:u}),h.createElement(i,{className:'uiCloseButtonHighContrast',src:'/images/chat/tab/close.png'})));}});f.exports=l;},null);
__d('TypeaheadViewPropTypes',['React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h.PropTypes,j={ariaOwneeID:i.string,highlightedEntry:i.object,entries:i.array.isRequired,onSelect:i.func.isRequired,onHighlight:i.func,onRenderHighlight:i.func,role:i.string};f.exports=j;},null);
__d('XUITypeaheadViewContainer.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'XUITypeaheadViewContainer',render:function(){return (h.createElement('ul',{className:j("_599r",this.props.className),id:this.props.arieaOwneeID,role:this.props.role},this.props.children));}});f.exports=k;},null);
__d('XUITypeaheadViewItem.react',['BackgroundImage.react','Badge.react','ImageBlock.react','React','TypeaheadViewItem','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=k.PropTypes,p=k.createClass({displayName:'XUITypeaheadViewItem',mixins:[l.Mixin],propTypes:babelHelpers._extends({},l.propTypes,{splitText:o.bool}),render:function(){var q=this.props.entry,r=this.props.splitSubtext?q.getSubtitle().split(' \u00b7 ')[0]:q.getSubtitle(),s=r?k.createElement('div',{className:"_599q"},r):null,t=q.getPhoto()?k.createElement(h,{width:32,height:32,backgroundSize:'cover',src:q.getPhoto()}):k.createElement('span',null),u=q.getAuxiliaryData(),v=null;if(u&&u.verified)v=k.createElement(i,null);var w="_599m"+(!s?' '+"_5mne":'')+(this.props.highlighted?' '+"_599n":'');w=n(w,this.props.className);return (k.createElement('li',{'aria-selected':this.props.highlighted,className:w,onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role},k.createElement(j,{spacing:'medium'},t,k.createElement('div',null,k.createElement('div',{className:"_599p"},q.getTitle(),v),s))));}});f.exports=p;},null);
__d('XUITypeaheadView.react',['React','TypeaheadViewPropTypes','XUITypeaheadViewContainer.react','XUITypeaheadViewItem.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=h.createClass({displayName:'XUITypeaheadView',propTypes:i,getDefaultProps:function(){return {role:'listbox'};},_renderItem:function(n){var o=n===this.props.highlightedEntry;return (h.createElement(k,{key:n.getUniqueID(),entry:n,highlighted:o,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));},render:function(){var n=!this.props.entries.length?"_599s":'';return (h.createElement(j,{className:n,id:this.props.ariaOwneeID,role:this.props.role},this.props.entries.map(this._renderItem)));}});f.exports=m;},null);
__d('SelectionState',['immutable'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j;'use strict';var k=h.Record,l={anchorKey:'',anchorOffset:0,focusKey:'',focusOffset:0,isBackward:false,hasFocus:false},m=k(l);i=babelHelpers.inherits(n,m);j=i&&i.prototype;n.prototype.serialize=function(){return ('Anchor: '+this.getAnchorKey()+':'+this.getAnchorOffset()+', '+'Focus: '+this.getFocusKey()+':'+this.getFocusOffset()+', '+'Is Backward: '+String(this.getIsBackward())+', '+'Has Focus: '+String(this.getHasFocus()));};n.prototype.getAnchorKey=function(){return this.get('anchorKey');};n.prototype.getAnchorOffset=function(){return this.get('anchorOffset');};n.prototype.getFocusKey=function(){return this.get('focusKey');};n.prototype.getFocusOffset=function(){return this.get('focusOffset');};n.prototype.getIsBackward=function(){return this.get('isBackward');};n.prototype.getHasFocus=function(){return this.get('hasFocus');};n.prototype.hasEdgeWithin=function(o,p,q){var r=this.getAnchorKey(),s=this.getFocusKey();if(r===s&&r===o){var t=this.getStartOffset(),u=this.getEndOffset();return p<=u&&t<=q;}if(o!==r&&o!==s)return false;var v=o===r?this.getAnchorOffset():this.getFocusOffset();return p<=v&&q>=v;};n.prototype.isCollapsed=function(){return (this.getAnchorKey()===this.getFocusKey()&&this.getAnchorOffset()===this.getFocusOffset());};n.prototype.getStartKey=function(){return this.getIsBackward()?this.getFocusKey():this.getAnchorKey();};n.prototype.getStartOffset=function(){return this.getIsBackward()?this.getFocusOffset():this.getAnchorOffset();};n.prototype.getEndKey=function(){return this.getIsBackward()?this.getAnchorKey():this.getFocusKey();};n.prototype.getEndOffset=function(){return this.getIsBackward()?this.getAnchorOffset():this.getFocusOffset();};n.createEmpty=function(o){return new n({anchorKey:o,anchorOffset:0,focusKey:o,focusOffset:0,isBackward:false,hasFocus:false});};function n(){i.apply(this,arguments);}f.exports=n;},null);
__d('MentionResultsPropTypes',['React','SearchableEntry','SelectionState'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l={viewID:k.string.isRequired,selection:k.instanceOf(j).isRequired,contextComponent:k.object.isRequired,mentionableEntries:k.array.isRequired,highlightedMentionable:k.instanceOf(i),onMentionSelect:k.func.isRequired,onMentionHighlight:k.func.isRequired,onMentionRenderHighlight:k.func.isRequired};f.exports=l;},null);
__d('DraftCharacters',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={BLOCK_DELIMITER:'\u000D',SOFT_NEWLINE:'\u000A',PHOTO:'\ud83d\udcf7',VIDEO:'\ud83d\udcf9'};f.exports=h;},null);
__d('CharacterMetadata',['ComposedInlineStyle','immutable'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;'use strict';var l=h.NONE,m=i.Map,n=i.Record,o={style:l,entity:null},p=n(o);j=babelHelpers.inherits(q,p);k=j&&j.prototype;q.prototype.getStyle=function(){return this.get('style');};q.prototype.getEntity=function(){return this.get('entity');};q.prototype.hasStyle=function(t){return !!(this.getStyle()&t);};q.applyStyle=function(t,u){var v=t.set('style',t.getStyle()|u);return q.create(v.toJS());};q.removeStyle=function(t,u){var v=t.set('style',t.getStyle()&~u);return q.create(v.toJS());};q.applyEntity=function(t,u){var v=t.getEntity()===u?t:t.set('entity',u);return q.create(v.toJS());};q.create=function(t){if(!t)return r;var u=m(babelHelpers._extends({style:l,entity:null},t)),v=s.get(u);if(v)return v;var w=new q(t);s=s.set(u,w);return w;};function q(){j.apply(this,arguments);}var r=new q(),s=m([[m(o),r]]);q.EMPTY=r;f.exports=q;},null);
__d('findRangesImmutable',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l){if(!i.size)return;var m=0;i.reduce(function(n,o,p){if(!j(n,o)){if(k(n))l(m,p);m=p;}return o;});k(i.last())&&l(m,i.count());}f.exports=h;},null);
__d('ContentBlock',['ComposedBlockType','ComposedInlineStyle','immutable','findRangesImmutable'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;'use strict';var n=h.UNSTYLED,o=i.NONE,p=j.List,q=j.Record,r={key:'',type:n,text:'',characterList:p(),depth:0},s=q(r);l=babelHelpers.inherits(t,s);m=l&&l.prototype;t.prototype.getKey=function(){return this.get('key');};t.prototype.getType=function(){return this.get('type');};t.prototype.getText=function(){return this.get('text');};t.prototype.getCharacterList=function(){return this.get('characterList');};t.prototype.getLength=function(){return this.getText().length;};t.prototype.getDepth=function(){return this.get('depth');};t.prototype.getInlineStyleAt=function(w){var x=this.getCharacterList().get(w);return x?x.getStyle():o;};t.prototype.getEntityAt=function(w){var x=this.getCharacterList().get(w);return x?x.getEntity():null;};t.prototype.findStyleRanges=function(w,x){k(this.getCharacterList(),u,w,x);};t.prototype.findEntityRanges=function(w,x){k(this.getCharacterList(),v,w,x);};function t(){l.apply(this,arguments);}function u(w,x){return w.getStyle()===x.getStyle();}function v(w,x){return w.getEntity()===x.getEntity();}f.exports=t;},null);
__d('generateBlockKey',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={},i=Math.pow(2,24);function j(){var k;while(k===undefined||h.hasOwnProperty(k)||!isNaN(+k))k=Math.floor(Math.random()*i).toString(32);h[k]=true;return k;}f.exports=j;},null);
__d('sanitizeDraftText',['DraftCharacters'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=h.BLOCK_DELIMITER,j=new RegExp(i,'g');function k(l){return l.replace(j,'');}f.exports=k;},null);
__d('createPlainBlocksFromText',['CharacterMetadata','ComposedBlockType','ContentBlock','immutable','generateBlockKey','sanitizeDraftText'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=k.List,o=k.Repeat,p=h.EMPTY,q=i.UNSTYLED;function r(s){return s.map(function(t){t=m(t);var u=t.length;return new j({key:l(),text:t,type:q,characterList:n(o(p,u))});});}f.exports=r;},null);
__d('DraftEntityInstance',['immutable'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j;'use strict';var k=h.Record,l=k({type:'TOKEN',mutability:'IMMUTABLE',data:Object});i=babelHelpers.inherits(m,l);j=i&&i.prototype;m.prototype.getType=function(){return this.get('type');};m.prototype.getMutability=function(){return this.get('mutability');};m.prototype.getData=function(){return this.get('data');};function m(){i.apply(this,arguments);}f.exports=m;},null);
__d('DraftEntity',['DraftEntityInstance','immutable','invariant'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=i.Map,l=k(),m=0,n={create:function(o,p,q){return n.add(new h({type:o,mutability:p,data:q||{}}));},add:function(o){var p=''+ ++m;l=l.set(p,o);return p;},get:function(o){var p=l.get(o);!!!p?j(0):undefined;return p;},mergeData:function(o,p){var q=n.get(o),r=babelHelpers._extends({},q.getData(),p),s=q.set('data',r);l=l.set(o,s);return s;}};f.exports=n;},null);
__d('BlockMapBuilder',['immutable'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=h.OrderedMap,j={createFromArray:function(k){return i(k.map(function(l){return [l.getKey(),l];}));}};f.exports=j;},null);
__d('BlockTree',['immutable','emptyFunction','findRangesImmutable'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=h.List,l=h.Repeat,m=h.Record,n=i.thatReturnsTrue,o='-',p={start:null,end:null},q=m(p),r={start:null,end:null,decoratorKey:null,leaves:null},s=m(r),t={generate:function(w,x){var y=w.getLength();if(!y)return k.of(new s({start:0,end:0,decoratorKey:null,leaves:k.of(new q({start:0,end:0}))}));var z=[],aa=x?x.getDecorations(w):k(l(null,y)),ba=w.getCharacterList();j(aa,v,n,function(ca,da){z.push(new s({start:ca,end:da,decoratorKey:aa.get(ca),leaves:u(ba.slice(ca,da).toList(),ca)}));});return k(z);},getFingerprint:function(w){return w.map(function(x){var y=x.get('decoratorKey'),z=y!==null?y+'.'+(x.get('end')-x.get('start')):'';return ''+z+'.'+x.get('leaves').size;}).join(o);}};function u(w,x){var y=[],z=w.map(function(aa){return aa.getStyle();}).toList();j(z,v,n,function(aa,ba){y.push(new q({start:aa+x,end:ba+x}));});return k(y);}function v(w,x){return w===x;}f.exports=t;},null);
__d('ContentState',['BlockMapBuilder','DraftCharacters','immutable','SelectionState'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;'use strict';var n=i.SOFT_NEWLINE,o=j.Record,p={blockMap:null,selectionBefore:null,selectionAfter:null},q=o(p);l=babelHelpers.inherits(r,q);m=l&&l.prototype;r.prototype.getBlockMap=function(){return this.get('blockMap');};r.prototype.getSelectionBefore=function(){return this.get('selectionBefore');};r.prototype.getSelectionAfter=function(){return this.get('selectionAfter');};r.prototype.getBlockForKey=function(s){var t=this.getBlockMap().get(s);return t;};r.prototype.getKeyBefore=function(s){return this.getBlockMap().reverse().keySeq().skipUntil(function(t){return t===s;}).skip(1).first();};r.prototype.getKeyAfter=function(s){return this.getBlockMap().keySeq().skipUntil(function(t){return t===s;}).skip(1).first();};r.prototype.getBlockAfter=function(s){return this.getBlockMap().skipUntil(function(t,u){return u===s;}).skip(1).first();};r.prototype.getBlockBefore=function(s){return this.getBlockMap().reverse().skipUntil(function(t,u){return u===s;}).skip(1).first();};r.prototype.getBlocksAsArray=function(){return this.getBlockMap().toArray();};r.prototype.getLastBlock=function(){return this.getBlockMap().last();};r.prototype.getPlainText=function(s){return this.getBlockMap().map(function(t){return t?t.getText():'';}).join(s||n);};r.prototype.hasText=function(){var s=this.getBlockMap();return (s.size>1||s.first().getLength()>0);};r.createFromBlockArray=function(s){var t=h.createFromArray(s),u=k.createEmpty(t.first().getKey());return new r({blockMap:t,selectionBefore:u,selectionAfter:u});};function r(){l.apply(this,arguments);}f.exports=r;},null);
__d('UnicodeBidiService',['UnicodeBidi','UnicodeBidiDirection','invariant'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();function k(l){if(!l)l=i.getGlobalDir();!i.isStrong(l)?j(0):undefined;this.defaultDir=l;this.reset();}k.prototype.reset=function(){this.lastDir=this.defaultDir;};k.prototype.getDirection=function(l){this.lastDir=h.getDirection(l,this.lastDir);return this.lastDir;};f.exports=k;},null);
__d('EditorBidiService',['immutable','UnicodeBidiService','nullthrows'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=h.OrderedMap,l,m={getDirectionMap:function(n,o){if(!l){l=new i();}else l.reset();var p=n.getBlockMap(),q=p.valueSeq().map(function(s){return j(l).getDirection(s.getText());}),r=k(p.keySeq().zip(q));if(o!=null&&h.is(o,r))return o;return r;}};f.exports=m;},null);
__d('EditorState',['BlockTree','ComposedInlineStyle','ContentState','EditorBidiService','immutable','SelectionState','createPlainBlocksFromText'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=l.Record,p=l.Stack,q={allowUndo:true,currentContent:null,decorator:null,directionMap:null,forceSelection:false,inCompositionMode:false,inlineStyleOverride:null,lastChangeType:null,nativelyRenderedContent:null,redoStack:p(),selection:null,treeMap:null,undoStack:p()},r=o(q);s.createEmpty=function(ba){var ca=n(['']),da=j.createFromBlockArray(ca);return s.createWithContent(da,ba);};s.createWithContent=function(ba,ca){var da=ba.getBlockMap().first().getKey();return s.create({currentContent:ba,undoStack:p(),redoStack:p(),decorator:ca||null,selection:m.createEmpty(da)});};s.create=function(ba){var ca=ba.currentContent,da=ba.decorator,ea=babelHelpers._extends({},ba,{treeMap:u(ca,da),directionMap:k.getDirectionMap(ca)});return new s(new r(ea));};s.set=function(ba,ca){var da=ba.getImmutable().withMutations(function(ea){var fa=ea.get('decorator'),ga=fa;if(ca.decorator===null){ga=null;}else if(ca.decorator)ga=ca.decorator;var ha=ca.currentContent||ba.getCurrentContent();if(ga!==fa){var ia=ea.get('treeMap'),ja;if(ga&&fa){ja=w(ha.getBlockMap(),ia,ga,fa);}else ja=u(ha,ga);ea.merge({decorator:ga,treeMap:ja,nativelyRenderedContent:null});return;}var ka=ba.getCurrentContent();if(ha!==ka)ea.set('treeMap',v(ba,ha.getBlockMap(),ga));ea.merge(ca);});return new s(da);};s.prototype.toJS=function(){return this.getImmutable().toJS();};s.prototype.getAllowUndo=function(){return this.getImmutable().get('allowUndo');};s.prototype.getCurrentContent=function(){return this.getImmutable().get('currentContent');};s.prototype.getUndoStack=function(){return this.getImmutable().get('undoStack');};s.prototype.getRedoStack=function(){return this.getImmutable().get('redoStack');};s.prototype.getSelection=function(){return this.getImmutable().get('selection');};s.prototype.getDecorator=function(){return this.getImmutable().get('decorator');};s.prototype.isInCompositionMode=function(){return this.getImmutable().get('inCompositionMode');};s.prototype.mustForceSelection=function(){return this.getImmutable().get('forceSelection');};s.prototype.getNativelyRenderedContent=function(){return this.getImmutable().get('nativelyRenderedContent');};s.prototype.getLastChangeType=function(){return this.getImmutable().get('lastChangeType');};s.prototype.getInlineStyleOverride=function(){return this.getImmutable().get('inlineStyleOverride');};s.prototype.getCurrentInlineStyle=function(){var ba=this.getInlineStyleOverride();if(ba!=null)return ba;var ca=this.getCurrentContent(),da=this.getSelection();if(da.isCollapsed())return y(ca,da);return z(ca,da);};s.prototype.getBlockTree=function(ba){return this.getImmutable().getIn(['treeMap',ba]);};s.prototype.isSelectionAtStartOfContent=function(){var ba=this.getCurrentContent().getBlockMap().first().getKey();return this.getSelection().hasEdgeWithin(ba,0,0);};s.prototype.isSelectionAtEndOfContent=function(){var ba=this.getCurrentContent(),ca=ba.getBlockMap(),da=ca.last(),ea=da.getLength();return this.getSelection().hasEdgeWithin(da.getKey(),ea,ea);};s.prototype.getDirectionMap=function(){return this.getImmutable().get('directionMap');};s.acceptSelection=function(ba,ca){return t(ba,ca,false);};s.forceSelection=function(ba,ca){if(!ca.getHasFocus())ca=ca.set('hasFocus',true);return t(ba,ca,true);};s.moveSelectionToEnd=function(ba){var ca=ba.getCurrentContent(),da=ca.getLastBlock(),ea=da.getKey(),fa=da.getLength();return s.acceptSelection(ba,new m({anchorKey:ea,anchorOffset:fa,focusKey:ea,focusOffset:fa,isBackward:false}));};s.moveFocusToEnd=function(ba){var ca=s.moveSelectionToEnd(ba);return s.forceSelection(ca,ca.getSelection());};s.push=function(ba,ca,da){if(ba.getCurrentContent()===ca)return ba;var ea=da!=='insert-characters',fa=k.getDirectionMap(ca,ba.getDirectionMap());if(!ba.getAllowUndo())return s.set(ba,{currentContent:ca,directionMap:fa,lastChangeType:da,selection:ca.getSelectionAfter(),forceSelection:ea,inlineStyleOverride:null});var ga=ba.getSelection(),ha=ba.getCurrentContent(),ia=ba.getUndoStack(),ja=ca;if(ga!==ha.getSelectionAfter()||x(ba,da)){ia=ia.push(ha);ja=ja.set('selectionBefore',ga);}else if(da==='insert-characters'||da==='backspace-character'||da==='delete-character')ja=ja.set('selectionBefore',ha.getSelectionBefore());return s.set(ba,{currentContent:ja,directionMap:fa,undoStack:ia,redoStack:p(),lastChangeType:da,selection:ca.getSelectionAfter(),forceSelection:ea,inlineStyleOverride:null});};s.undo=function(ba){if(!ba.getAllowUndo())return ba;var ca=ba.getUndoStack(),da=ca.peek();if(!da)return ba;var ea=ba.getCurrentContent(),fa=k.getDirectionMap(da,ba.getDirectionMap());return s.set(ba,{currentContent:da,directionMap:fa,undoStack:ca.shift(),redoStack:ba.getRedoStack().push(ea),forceSelection:true,inlineStyleOverride:null,lastChangeType:'undo',nativelyRenderedContent:null,selection:ea.getSelectionBefore()});};s.redo=function(ba){if(!ba.getAllowUndo())return ba;var ca=ba.getRedoStack(),da=ca.peek();if(!da)return ba;var ea=ba.getCurrentContent(),fa=k.getDirectionMap(da,ba.getDirectionMap());return s.set(ba,{currentContent:da,directionMap:fa,undoStack:ba.getUndoStack().push(ea),redoStack:ca.shift(),forceSelection:true,inlineStyleOverride:null,lastChangeType:'redo',nativelyRenderedContent:null,selection:da.getSelectionAfter()});};function s(ba){this.$EditorState1=ba;}s.prototype.getImmutable=function(){return this.$EditorState1;};function t(ba,ca,da){return s.set(ba,{selection:ca,forceSelection:da,nativelyRenderedContent:null,inlineStyleOverride:null});}function u(ba,ca){return ba.getBlockMap().map(function(da){return h.generate(da,ca);}).toOrderedMap();}function v(ba,ca,da){var ea=ba.getCurrentContent().getBlockMap(),fa=ba.getImmutable().get('treeMap');return fa.merge(ca.toSeq().filter(function(ga,ha){return ga!==ea.get(ha);}).map(function(ga){return h.generate(ga,da);}));}function w(ba,ca,da,ea){return ca.merge(ba.toSeq().filter(function(fa){return (da.getDecorations(fa)!==ea.getDecorations(fa));}).map(function(fa){return h.generate(fa,da);}));}function x(ba,ca){var da=ba.getLastChangeType();return (ca!==da||ca!=='insert-characters'&&ca!=='backspace-character'&&ca!=='delete-character');}function y(ba,ca){var da=ca.getStartKey(),ea=ca.getStartOffset(),fa=ba.getBlockForKey(da);if(ea>0)return fa.getInlineStyleAt(ea-1);if(fa.getLength())return fa.getInlineStyleAt(0);return aa(ba,da);}function z(ba,ca){var da=ca.getStartKey(),ea=ca.getStartOffset(),fa=ba.getBlockForKey(da);if(ea<fa.getLength())return fa.getInlineStyleAt(ea);if(ea>0)return fa.getInlineStyleAt(ea-1);return aa(ba,da);}function aa(ba,ca){var da=ba.getBlockBefore(ca),ea;while(da){ea=da.getLength();if(ea)return da.getInlineStyleAt(ea-1);da=ba.getBlockBefore(da.getKey());}return i.NONE;}f.exports=s;},null);
__d('DocumentMentionsSource',['invariant'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(j,k){!(typeof j.findMentionableString==='function')?h(0):undefined;this.$DocumentMentionsSource1=j;this.$DocumentMentionsSource2=k;this.$DocumentMentionsSource3=false;}i.prototype.findMatch=function(j){return this.$DocumentMentionsSource1.findMentionableString(j);};i.prototype.bootstrap=function(j){if(!this.$DocumentMentionsSource3){this.$DocumentMentionsSource3=true;this.$DocumentMentionsSource2.bootstrap(j);}};i.prototype.search=function(j,k){this.$DocumentMentionsSource2.search(j,k,{strategyName:this.$DocumentMentionsSource1.name});};f.exports=i;},null);
__d('createMentionEntity',['DraftEntity'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){var k=j.getType().toLowerCase();if(k==='hashtag')return h.create('HASHTAG','IMMUTABLE');var l=k==='user'||k==='fb4c'?'SEGMENTED':'IMMUTABLE',m=j.getAuxiliaryData();return h.create('MENTION',l,{id:j.getUniqueID(),isWeak:m&&m.renderType==='non_member',type:k});}f.exports=i;},null);
__d('getMentionsTextForContentState',['DraftCharacters','DraftEntity','emptyFunction'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=h.SOFT_NEWLINE,l=j.thatReturnsTrue,m=/[\\\]:]/g;function n(p){var q=p.getBlockMap().map(function(r){var s=r.getText(),t=[];r.findEntityRanges(l,function(u,v){t.push(o(s.slice(u,v),r.getEntityAt(u)));});return t.join('');});return q.join(k);}function o(p,q){if(q){var r=i.get(q);if(r.getType()==='MENTION'){p=p.replace(m,function(s){return '\\'+s;});return '@['+r.getData().id+':'+p+']';}else if(r.getType()==='EMOTICON')return r.getData().originalEmoticon;}return p.replace('@[','@ [');}f.exports=n;},null);
__d('AbstractSearchSource',['Promise'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(){}var j={bootstrap:function(k){if(!this._bootstrapPromise)this._bootstrapPromise=new h((function(l){this.bootstrapImpl(l);}).bind(this));return this._bootstrapPromise.then(k);},search:function(k,l,m){this.searchImpl(k,l,m);},bootstrapImpl:function(k){k();},searchImpl:function(k,l,m){throw new Error('Abstract method #searchImpl is not implemented.');}};Object.assign(i.prototype,j);i.Mixin=j;f.exports=i;},null);
__d('SearchSourceQueryStatus',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={ACTIVE:'ACTIVE',COMPLETE:'COMPLETE'};f.exports=h;},null);
__d('SearchSourceCallbackManager',['SearchSourceQueryStatus','createObjectFrom','invariant'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.ACTIVE,l=h.COMPLETE;function m(o){'use strict';this.$SearchSourceCallbackManager1=o.parseFn;!(typeof this.$SearchSourceCallbackManager1==='function')?j(0):undefined;this.$SearchSourceCallbackManager2=o.matchFn;!(typeof this.$SearchSourceCallbackManager2==='function')?j(0):undefined;this.$SearchSourceCallbackManager3=o.alwaysPrefixMatch||false;this.$SearchSourceCallbackManager4=o.indexFn||n;this.reset();}m.prototype.search=function(o,p,q){'use strict';var r=this.$SearchSourceCallbackManager5(o,p,q);if(r)return 0;this.$SearchSourceCallbackManager6.push({queryString:o,callback:p,options:q});var s=this.$SearchSourceCallbackManager6.length-1;this.$SearchSourceCallbackManager7.push(s);return s;};m.prototype.$SearchSourceCallbackManager5=function(o,p,q){'use strict';var r=this.$SearchSourceCallbackManager8(o),s=!!this.$SearchSourceCallbackManager9[o];if(!r.length){p([],o,s?l:k);return s;}var t=r.map(function(u){return this.$SearchSourceCallbackManager10[u];},this);p(t,o,s?l:k);return s;};m.prototype.$SearchSourceCallbackManager11=function(){'use strict';var o=this.$SearchSourceCallbackManager7;this.$SearchSourceCallbackManager7=[];o.forEach(this.$SearchSourceCallbackManager12,this);};m.prototype.$SearchSourceCallbackManager12=function(o){'use strict';var p=this.$SearchSourceCallbackManager6[o];if(!p)return;var q=this.$SearchSourceCallbackManager5(p.queryString,p.callback,p.options);if(q){delete this.$SearchSourceCallbackManager6[o];return;}this.$SearchSourceCallbackManager7.push(o);};m.prototype.reset=function(){'use strict';this.$SearchSourceCallbackManager10={};this.$SearchSourceCallbackManager13={};this.$SearchSourceCallbackManager14={};this.$SearchSourceCallbackManager15={};this.$SearchSourceCallbackManager9={};this.$SearchSourceCallbackManager7=[];this.$SearchSourceCallbackManager6=[undefined];};m.prototype.addLocalEntries=function(o){'use strict';o.forEach(function(p){var q=p.getUniqueID(),r=this.$SearchSourceCallbackManager4(p);this.$SearchSourceCallbackManager10[q]=p;this.$SearchSourceCallbackManager13[q]=r;var s=this.$SearchSourceCallbackManager1(r);s.tokens.forEach(function(t){if(!this.$SearchSourceCallbackManager14.hasOwnProperty(t))this.$SearchSourceCallbackManager14[t]={};this.$SearchSourceCallbackManager14[t][q]=true;},this);},this);this.$SearchSourceCallbackManager11();};m.prototype.addQueryEntries=function(o,p,q){'use strict';if(q===l)this.setQueryStringAsExhausted(p);var r=this.$SearchSourceCallbackManager8(p),s=this.$SearchSourceCallbackManager1(p).flatValue;this.$SearchSourceCallbackManager15[s]=i(r,true);o.forEach(function(t){var u=t.getUniqueID();this.$SearchSourceCallbackManager10[u]=t;this.$SearchSourceCallbackManager13[u]=this.$SearchSourceCallbackManager4(t);this.$SearchSourceCallbackManager15[s][u]=true;},this);this.$SearchSourceCallbackManager11();};m.prototype.unsubscribe=function(o){'use strict';delete this.$SearchSourceCallbackManager6[o];};m.prototype.removeEntry=function(o){'use strict';delete this.$SearchSourceCallbackManager10[o];};m.prototype.getAllEntriesMap=function(){'use strict';return this.$SearchSourceCallbackManager10;};m.prototype.setQueryStringAsExhausted=function(o){'use strict';this.$SearchSourceCallbackManager9[o]=true;};m.prototype.unsetQueryStringAsExhausted=function(o){'use strict';delete this.$SearchSourceCallbackManager9[o];};m.prototype.$SearchSourceCallbackManager8=function(o){'use strict';var p=this.$SearchSourceCallbackManager16(o,this.$SearchSourceCallbackManager17(o)),q=this.$SearchSourceCallbackManager16(o,this.$SearchSourceCallbackManager18(o)),r=p.concat(q),s={},t=[];r.forEach(function(u){if(!s[u]&&this.$SearchSourceCallbackManager10[u]!==undefined){t.push(u);s[u]=true;}},this);return t;};m.prototype.$SearchSourceCallbackManager16=function(o,p){'use strict';var q=this.$SearchSourceCallbackManager19(o,p),r=this.$SearchSourceCallbackManager10;function s(t,u){if(q[t]!==q[u])return q[t]?-1:1;var v=r[t],w=r[u];if(v.getOrder()!==w.getOrder())return v.getOrder()-w.getOrder();var x=v.getTitle().length,y=w.getTitle().length;if(x!==y)return x-y;return v.getUniqueID()-w.getUniqueID();}return p.sort(s).slice();};m.prototype.$SearchSourceCallbackManager19=function(o,p){'use strict';var q={};p.forEach(function(r){q[r]=this.$SearchSourceCallbackManager2(o,this.$SearchSourceCallbackManager13[r]);},this);return q;};m.prototype.$SearchSourceCallbackManager17=function(o){'use strict';var p=this.$SearchSourceCallbackManager1(o,this.$SearchSourceCallbackManager3),q=this.$SearchSourceCallbackManager3?p.sortedTokens:p.tokens,r=q.length,s=p.isPrefixQuery?r-1:null,t={},u={},v={},w=false,x={},y=0;q.forEach(function(aa,ba){if(x.hasOwnProperty(aa))return;y++;x[aa]=true;for(var ca in this.$SearchSourceCallbackManager14){var da=ca===aa&&!t.hasOwnProperty(ca),ea=false;if(!da)ea=(this.$SearchSourceCallbackManager3||s===ba)&&ca.indexOf(aa)===0;if(!da&&!ea)continue;if(ca===aa){if(u.hasOwnProperty(ca))w=true;t[ca]=true;}else{if(t.hasOwnProperty(ca)||u.hasOwnProperty(ca))w=true;u[ca]=true;}for(var fa in this.$SearchSourceCallbackManager14[ca])if(ba===0||v.hasOwnProperty(fa)&&v[fa]==y-1)v[fa]=y;}},this);var z=Object.keys(v).filter(function(aa){return v[aa]==y;});if(w||y<r)z=this.$SearchSourceCallbackManager20(o,z);return z;};m.prototype.$SearchSourceCallbackManager18=function(o){'use strict';var p=this.$SearchSourceCallbackManager1(o).flatValue,q=this.$SearchSourceCallbackManager21(p);if(this.$SearchSourceCallbackManager15.hasOwnProperty(p))return q;return this.$SearchSourceCallbackManager20(o,q);};m.prototype.$SearchSourceCallbackManager21=function(o){'use strict';var p=0,q=null,r=this.$SearchSourceCallbackManager15;Object.keys(r).forEach(function(s){if(o.indexOf(s)===0&&s.length>p){p=s.length;q=s;}});return (r.hasOwnProperty(q)?Object.keys(r[q]):[]);};m.prototype.$SearchSourceCallbackManager20=function(o,p){'use strict';return p.filter(function(q){return this.$SearchSourceCallbackManager2(o,this.$SearchSourceCallbackManager13[q]);},this);};function n(o){return [o.getTitle(),o.getKeywordString()].join(' ');}f.exports=m;},null);
__d('AbstractAsyncSearchSource',['AbstractSearchSource','SearchSourceCallbackManager','SearchSourceQueryStatus','SearchableEntry','TokenizeUtil','emptyFunction','isValidUniqueID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o,p,q=j.ACTIVE,r=j.COMPLETE;o=babelHelpers.inherits(s,h);p=o&&o.prototype;function s(t,u,v){'use strict';p.constructor.call(this);this.$AbstractAsyncSearchSource1=t.bootstrapRequests;this.$AbstractAsyncSearchSource2=t.queryRequests;this.$AbstractAsyncSearchSource3=t.auxiliaryFields;this.$AbstractAsyncSearchSource4=t.asyncErrorHandler||m;this.$AbstractAsyncSearchSource5=t.packageFn||this.$AbstractAsyncSearchSource6;this.$AbstractAsyncSearchSource7=t.requestData||{};this.$AbstractAsyncSearchSource8=t.getAllForEmptyQuery;this.$AbstractAsyncSearchSource9=[];this.$AbstractAsyncSearchSource10=new i({parseFn:l.parse,matchFn:l.isQueryMatch,indexFn:t.indexFn});this.$AbstractAsyncSearchSource11=u;this.$AbstractAsyncSearchSource12=v;}s.prototype.bootstrapImpl=function(t){'use strict';if(!this.$AbstractAsyncSearchSource1||!this.$AbstractAsyncSearchSource1.length){t();return;}var u=this.$AbstractAsyncSearchSource1.length,v=0;this.$AbstractAsyncSearchSource1.forEach((function(w){this.$AbstractAsyncSearchSource13(this.$AbstractAsyncSearchSource7,w,(function(x){this.$AbstractAsyncSearchSource10.addLocalEntries(x);this.$AbstractAsyncSearchSource9=this.$AbstractAsyncSearchSource9.concat(x);v++;if(v===u){t();t=null;}}).bind(this));}).bind(this));};s.prototype.searchImpl=function(t,u,v){'use strict';if(this.$AbstractAsyncSearchSource8&&t===''){this.getBootstrappedEntries(function(ba){u(ba,t);});return;}var w=null,x={},y=this.$AbstractAsyncSearchSource10.search(t,function(ba,ca,da){if(!w){w=ba;w.forEach(function(ea){x[ea.getUniqueID()]=true;});}else ba.forEach(function(ea){var fa=ea.getUniqueID();if(!x[fa]){w.push(ea);x[fa]=true;}});u(w,ca,da);},v);if(!y||!this.$AbstractAsyncSearchSource2||!this.$AbstractAsyncSearchSource2.length)return;var z=babelHelpers._extends({value:t,existing_ids:w&&w.map(function(ba){return ba.getUniqueID();}).join(',')},this.$AbstractAsyncSearchSource7),aa=this.$AbstractAsyncSearchSource2.length;this.$AbstractAsyncSearchSource2.forEach(function(ba){this.$AbstractAsyncSearchSource13(z,ba,(function(ca){aa--;this.$AbstractAsyncSearchSource14(ca,t,aa?q:r);}).bind(this));},this);};s.prototype.getBootstrappedEntries=function(t){'use strict';return this.bootstrap((function(){return t(this.$AbstractAsyncSearchSource9||[]);}).bind(this));};s.prototype.getAllEntriesMap=function(){'use strict';return this.$AbstractAsyncSearchSource10.getAllEntriesMap();};s.prototype.setRequestData=function(t){'use strict';this.$AbstractAsyncSearchSource7=t;};s.prototype.$AbstractAsyncSearchSource13=function(t,u,v){'use strict';this.$AbstractAsyncSearchSource11(t,u,(function(w){return (v(this.$AbstractAsyncSearchSource12(w,this.$AbstractAsyncSearchSource5).filter(function(x){return !!x;})));}).bind(this),this.$AbstractAsyncSearchSource4);};s.prototype.$AbstractAsyncSearchSource15=function(t){'use strict';this.$AbstractAsyncSearchSource10.addLocalEntries(t);};s.prototype.$AbstractAsyncSearchSource14=function(t,u,v){'use strict';this.$AbstractAsyncSearchSource10.addQueryEntries(t,u,v);};s.prototype.$AbstractAsyncSearchSource6=function(t,u){'use strict';var v=t.title||t.text,w=t.uniqueID||t.uid;if(!v||!n(w))return null;return new k({uniqueID:w,order:t.order||t.index||u,title:v,subtitle:t.subtitle||t.category||t.subtext,keywordString:t.keywordString||t.tokens,type:t.type,photo:t.photo,uri:t.uri||t.path,auxiliaryData:this.$AbstractAsyncSearchSource16(t)});};s.prototype.$AbstractAsyncSearchSource16=function(t){'use strict';var u;if(this.$AbstractAsyncSearchSource3){u={};for(var v in this.$AbstractAsyncSearchSource3){var w=this.$AbstractAsyncSearchSource3[v];u[v]=t[w];}}if(t.aux_data)u=babelHelpers._extends({},u,t.aux_data);return u;};f.exports=s;},null);
__d('FilteredSearchSource',['AbstractSearchSource'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j;i=babelHelpers.inherits(k,h);j=i&&i.prototype;function k(l,m){'use strict';j.constructor.call(this);this.$FilteredSearchSource1=l;this.$FilteredSearchSource2=m;}k.prototype.bootstrapImpl=function(l){'use strict';this.$FilteredSearchSource2.bootstrap(l);};k.prototype.searchImpl=function(l,m,n){'use strict';var o=(function(p,q){p=this.$FilteredSearchSource3(p,q);m(p,q);}).bind(this);this.$FilteredSearchSource2.search(l,o,n);};k.prototype.$FilteredSearchSource3=function(l,m){'use strict';var n=this.$FilteredSearchSource1;return l.filter(function(o){return n(o,m);});};f.exports=k;},null);
__d("TypeaheadNavigation",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={moveUp:function(i,j,k){var l=i.indexOf(j),m=l==-1?i.length-1:l-1;k(m==-1?null:i[m]);},moveDown:function(i,j,k){var l=i.indexOf(j)+1;k(l==i.length?null:i[l]);}};f.exports=h;},null);
__d('CommentsPluginActions',['CommentsPluginStore','DevxProxyActions'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();f.exports=new i(h);},null);
__d('WebAsyncSearchSourceUtils',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={normalizeResponse:function(i,j){var k=i.getPayload(),l;if(Array.isArray(k)){l=k;}else if(k&&k.entries){l=k.entries;}else l=[];return l.map(j,this);}};f.exports=h;},null);
__d('WebAsyncSearchSource',['AbstractAsyncSearchSource','AbstractSearchSource','AsyncRequest','WebAsyncSearchSourceUtils'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;l=babelHelpers.inherits(n,i);m=l&&l.prototype;function n(o){'use strict';m.constructor.call(this);this.$WebAsyncSearchSource1=new h(o,this.$WebAsyncSearchSource2,k.normalizeResponse);}n.prototype.bootstrapImpl=function(o){'use strict';this.$WebAsyncSearchSource1.bootstrap(o);};n.prototype.searchImpl=function(o,p,q){'use strict';this.$WebAsyncSearchSource1.search(o,p,q);};n.prototype.getBootstrappedEntries=function(o){'use strict';return this.$WebAsyncSearchSource1.getBootstrappedEntries(o);};n.prototype.getAllEntriesMap=function(){'use strict';return this.$WebAsyncSearchSource1.getAllEntriesMap();};n.prototype.setRequestData=function(o){'use strict';this.$WebAsyncSearchSource1.setRequestData(o);};n.prototype.$WebAsyncSearchSource2=function(o,p,q,r){'use strict';new j(p.uri).setData(babelHelpers._extends({},o,p.data)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(q).setErrorHandler(r).send();};f.exports=n;},null);
__d("XDeveloperDocumentationController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/docs\/{?path1}\/{?path2}\/{?path3}\/{?path4}\/{?path5}\/{?path6}\/",{path:{type:"String"},version:{type:"String"},preview:{type:"Exists",defaultValue:false},revisionid:{type:"Int"},locale:{type:"String"},path1:{type:"String"},path2:{type:"String"},path3:{type:"String"},path4:{type:"String"},path5:{type:"String"},path6:{type:"String"}});},null);