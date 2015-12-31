/*!CK:430550726!*//*1450920138,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["2WeDo"]); }

__d('Token',['CSS','DataStore','DOM','Locale','UnicodeBidi','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(o,p){'use strict';this.info=o;this.paramName=p;}n.prototype.getInfo=function(){'use strict';return this.info;};n.prototype.getText=function(){'use strict';return this.info.text;};n.prototype.getValue=function(){'use strict';return this.info.uid;};n.prototype.isFreeform=function(){'use strict';return !!this.info.freeform;};n.prototype.setSelected=function(o){'use strict';h.conditionClass(this.getElement(),'uiTokenSelected',o);return this;};n.prototype.getElement=function(){'use strict';if(!this.element)this.setElement(this.createElement());return this.element;};n.prototype.setElement=function(o){'use strict';i.set(o,'Token',this);this.element=o;return this;};n.prototype.isRemovable=function(){'use strict';return h.hasClass(this.element,'removable');};n.prototype.getTextDirection=function(){'use strict';var o=l.isDirectionRTL(this.getText()),p=k.isRTL();if(o&&!p)return 'rtl';if(!o&&p)return 'ltr';return null;};n.prototype.createElement=function(o,p){'use strict';var q=this.paramName,r=this.getValue(),s=this.getText(),t=j.create('span',{className:'uiTokenText'},s),u=j.create('a',{href:'#','aria-label':m._("\u79fb\u9664{item}",[m.param('item',s)]),className:'remove uiCloseButton uiCloseButtonSmall'});if(o)h.addClass(u,'uiCloseButtonSmallGray');var v=j.create('input',{type:'hidden',value:r,name:q+'[]',autocomplete:'off'}),w=j.create('input',{type:'hidden',value:s,name:'text_'+q+'[]',autocomplete:'off'}),x={className:'removable uiToken'},y=this.getTextDirection();if(y!==null)x.dir=y;var z=j.create('span',x,[t,v,w,u]);if(o)h.addClass(z,'uiTokenGray');if(p){var aa=j.create('i',{className:p});j.prependContent(z,aa);}return z;};f.exports=n;},null);
__d('WeakToken',['CSS','Token'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;j=babelHelpers.inherits(l,i);k=j&&j.prototype;l.prototype.createElement=function(){'use strict';var m=k.createElement.call(this,true,'UFIWeakReferenceIcon');h.addClass(m,'uiTokenWeakReference');return m;};function l(){'use strict';j.apply(this,arguments);}f.exports=l;},null);
__d('Tokenizer',['Arbiter','ArbiterMixin','CSS','DataStore','DOM','DOMQuery','Event','Focus','Input','Keys','Parent','StickyPlaceholderInput','Style','TextMetrics','Token','UserAgent_DEPRECATED','WeakToken','createObjectFrom','emptyFunction','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa){if(c.__markCompiled)c.__markCompiled();var ba,ca,da=20;ba=babelHelpers.inherits(ea,aa(i));ca=ba&&ba.prototype;function ea(fa,ga,ha){'use strict';ca.constructor.call(this);this.element=fa;this.typeahead=ga;this.input=ga.getCore().getElement();if(ha)this.init(ha.tokenarea,ha.param_name,ha.initial_info,ha.options);k.set(this.element,'Tokenizer',this);}ea.prototype.init=function(fa,ga,ha,ia){'use strict';this._handleEvents=this.handleEvents.bind(this);this.init=z;this.setTokenarea(fa);this.paramName=ga;if(!this.placeholder)this.placeholder=this.input.getAttribute('data-placeholder')||this.input.getAttribute('placeholder')||'';Object.assign(this,ia);this.initEvents();this.initTypeahead();this.reset(ha);this.initBehaviors();setTimeout(this.adjustWidth.bind(this),0);h.inform('Tokenizer/init',this,h.BEHAVIOR_PERSISTENT);this.inform('init',{tokens:this.getTokens()});};ea.prototype.reset=function(fa){'use strict';this.tokens=[];this.unique={};if(fa){this.populate(fa);}else l.empty(this.tokenarea);this.updateTokenarea();};ea.prototype.populate=function(fa){'use strict';var ga=[];this.tokens=this.getTokenElements().map(function(ha,ia){var ja=fa[ia];ga.push(this._tokenKey(ja));return this.createToken(ja,ha);},this);this.unique=y(ga,this.tokens);};ea.prototype.setTokenarea=function(fa){'use strict';var ga=!this.tokenarea;if(fa!==this.tokenarea){if(this.tokenarea){l.remove(this.tokenarea);for(var ha in this._tokenareaListeners)this._tokenareaListeners[ha].remove();}this._tokenareaListeners=n.listen(fa,{click:this._handleEvents,keydown:this._handleEvents});this.tokenarea=fa;}if(!ga)this.reset();};ea.prototype.getElement=function(){'use strict';return this.element;};ea.prototype.getTypeahead=function(){'use strict';return this.typeahead;};ea.prototype.getInput=function(){'use strict';return this.input;};ea.prototype.initBehaviors=function(){'use strict';this.behaviors=this.behaviors||[];if(this.behaviors instanceof Array){this.behaviors.forEach((function(ha){ha.behavior(this,ha.config);}).bind(this));}else for(var fa in this.behaviors||{}){var ga=window.TokenizerBehaviors&&window.TokenizerBehaviors[fa];ga.call(null,this,this.behaviors[fa]);}};ea.prototype.initTypeahead=function(){'use strict';var fa=this.typeahead.getCore();fa.resetOnSelect=true;fa.setValueOnSelect=false;fa.preventFocusChangeOnTab=true;if(this.inline){var ga=this.typeahead.getView();j.addClass(ga.getElement(),'uiInlineTokenizerView');}this.typeahead.subscribe('select',(function(ha,ia){return this.handleSelect(ia);}).bind(this));this.typeahead.subscribe('blur',this.handleBlur.bind(this));};ea.prototype.handleBlur=function(event){'use strict';this.inform('blur',{event:event});this.updatePlaceholder();};ea.prototype.handleSelect=function(fa){'use strict';var ga=fa.selected;if('uid' in ga){this.updateInput();this.addToken(this.createToken(ga));}};ea.prototype.initEvents=function(){'use strict';var fa=w.firefox()<4?'keypress':'keydown';n.listen(this.input,'paste',this.paste.bind(this));n.listen(this.input,fa,this.keydown.bind(this));};ea.prototype.handleEvents=function(event){'use strict';var fa=event.getTarget(),ga=fa&&this.getTokenElementFromTarget(fa);if(!ga)return;if(event.type!='keydown'||n.getKeyCode(event)==q.RETURN)this.processEvents(event,fa,ga);};ea.prototype.processEvents=function(event,fa,ga){'use strict';if(r.byClass(fa,'remove')){var ha=ga.nextSibling;ha=ha&&m.scry(ga.nextSibling,'.remove')[0];var ia=this.getTokenFromElement(ga);ia=this.addTokenData(ia,fa);this.removeToken(ia);this.focusOnTokenRemoval(event,ha);event.kill();}};ea.prototype.focusOnTokenRemoval=function(event,fa){'use strict';o.set(event.type=='keydown'&&fa||this.input);};ea.prototype.addTokenData=function(fa,ga){'use strict';return fa;};ea.prototype.keydown=function(event){'use strict';this.inform('keydown',{event:event});var fa=n.getKeyCode(event),ga=this.input;if(this.inline&&fa==q.BACKSPACE&&p.isEmpty(ga)){var ha=this.getLastToken();if(ha&&ha.isRemovable())this.removeToken(ha);}this.updateInput();};ea.prototype.paste=function(event){'use strict';this.inform('paste',{event:event});this.updateInput(true);};ea.prototype.focusInput=function(){'use strict';o.set(this.input);};ea.prototype.updateInput=function(fa){'use strict';if(!this.inline)return;setTimeout((function(){this.adjustWidth(this.input.value);if(fa)this.input.value=this.input.value;}).bind(this),20);s.setPlaceholderText(this.input,'');this.inform('resize');};ea.prototype.setPlaceholder=function(fa){'use strict';this.placeholder=fa;if(this.stickyPlaceholder)s.setPlaceholderText(this.input,fa);this.updatePlaceholder();};ea.prototype.updatePlaceholder=function(){'use strict';if(!this.inline||this.input.value)return;var fa=!this.tokens.length,ga='';if(fa||this.stickyPlaceholder){this.adjustWidth(this.placeholder);ga=this.placeholder;}else this.adjustWidth(this.input.value);s.setPlaceholderText(this.input,ga);};ea.prototype.adjustWidth=function(fa){'use strict';if(!this.inline||!this._getIsInDOM())return;if(!fa&&this.input.value==='')fa=this.placeholder;var ga=da;if(fa!==this.placeholder||!this.getTokens().length||this.stickyPlaceholder){var ha=t.getFloat(this.getElement(),'width'),ia=this._getMetrics().measure(fa);ga=ia.width+this._getWidthOffset()+10;ga=ga>=ha?ha:ga;}t.set(this.input,'width',ga+'px');this.inform('resize');h.inform('reflow');};ea.prototype.getToken=function(fa){'use strict';return this.unique[fa]||null;};ea.prototype.getTokens=function(){'use strict';return this.tokens||[];};ea.prototype.getTokenElements=function(){'use strict';return m.scry(this.tokenarea,'span.uiToken');};ea.prototype.getTokenElementFromTarget=function(fa){'use strict';return r.byClass(fa,'uiToken');};ea.prototype.getTokenFromElement=function(fa){'use strict';return k.get(fa,'Token');};ea.prototype.getTokenValues=function(){'use strict';if(!this.tokens)return [];return this.tokens.map(function(fa){return fa.getValue();});};ea.prototype.getFirstToken=function(){'use strict';return this.tokens[0]||null;};ea.prototype.getLastToken=function(){'use strict';return this.tokens[this.tokens.length-1]||null;};ea.prototype.hasMaxTokens=function(){'use strict';return this.maxTokens&&this.maxTokens<=this.tokens.length;};ea.prototype.createToken=function(fa,ga){'use strict';var ha=this.getToken(this._tokenKey(fa));if(!ha)ha=fa.weak_reference?new x(fa,this.paramName):new v(fa,this.paramName);ga&&ha.setElement(ga);return ha;};ea.prototype.addToken=function(fa){'use strict';if(this.hasMaxTokens())return;var ga=this._tokenKey(fa.getInfo());if(ga in this.unique)return;this.unique[ga]=fa;this.tokens.push(fa);this.insertToken(fa);this.updateTokenarea();this.inform('addToken',fa);this.inform('changeTokens');h.inform('Form/change',{node:this.element});};ea.prototype.insertToken=function(fa){'use strict';l.appendContent(this.tokenarea,fa.getElement());};ea.prototype.removeToken=function(fa){'use strict';if(!fa)return;var ga=this.tokens.indexOf(fa);if(ga<0)return;this.tokens.splice(this.tokens.indexOf(fa),1);delete this.unique[this._tokenKey(fa.getInfo())];l.remove(fa.getElement());this.updateTokenarea();this.inform('removeToken',fa);this.inform('changeTokens');h.inform('Form/change',{node:this.element});};ea.prototype.removeAllTokens=function(){'use strict';this.reset();this.inform('changeTokens');this.inform('removeAllTokens');};ea.prototype.updateTokenarea=function(){'use strict';var fa=this.typeahead.getCore(),ga=this.getTokenValues();if(this.excludeDuplicates){this._exclusions||(this._exclusions=fa.getExclusions());fa.setExclusions(ga.concat(this._exclusions));}fa.setEnabled(!this.hasMaxTokens());this.updateTokenareaVisibility();this.updatePlaceholder();this.inform('resize');h.inform('reflow');};ea.prototype.updateTokenareaVisibility=function(){'use strict';j.conditionShow(this.tokenarea,this.tokens.length!==0);};ea.prototype._tokenKey=function(fa){'use strict';return fa.uid+(fa.freeform?':':'');};ea.prototype._getWidthOffset=function(){'use strict';if(this._widthOffset===null){var fa=this.input.clientWidth,ga=t.getFloat(this.input,'width');if(fa==ga){this._widthOffset=t.getFloat(this.input,'paddingLeft')+t.getFloat(this.input,'paddingRight');}else this._widthOffset=0;}return this._widthOffset;};ea.prototype._getMetrics=function(){'use strict';if(!this._metrics)this._metrics=new u(this.input,this.inline);return this._metrics;};ea.prototype._getIsInDOM=function(){'use strict';return this._isInDOM||(this._isInDOM=m.contains(document.body,this.input));};ea.getInstance=function(fa){'use strict';var ga=r.byClass(fa,'uiTokenizer');return ga?k.get(ga,'Tokenizer'):null;};ea.init=function(fa,ga){'use strict';fa.init(ga.tokenarea,ga.param_name,ga.initial_info,ga.options);};Object.assign(ea.prototype,{inline:false,maxTokens:null,excludeDuplicates:true,placeholder:'',_widthOffset:null,_metrics:null});f.exports=ea;},null);
__d('ProgressBarBase',['emptyFunction','requestAnimationFrame','removeFromArray','arrayContains'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=[];function m(n,o){'use strict';this._min=n||0;this._max=o||100;this._initialPosition=0;this._position=0;this._initialVelocity=0;this._velocity=0;this._acceleration=0;this.useAcceleration=true;this._targetPosition=0;this._targetTime=0;this._startTime=null;this._onComplete=h;}m.prototype.setPosition=function(n){'use strict';n=this._normalizePosition(n);this._initialPosition=n;this._position=n;this.updateMeter(this._position);this.stop();return this;};m.prototype.setCompleteHandler=function(n){'use strict';this._onComplete=n||h;return this;};m.prototype.setTarget=function(n,o){'use strict';this._stopAnimating();this._clearOnCompleteTimeout();this._targetPosition=n;var p=this._normalizePosition(n);this._targetTime=o;this._initialVelocity=this._velocity;this._initialPosition=this._position;if(this.useAcceleration){this._acceleration=2*(p-this._initialPosition-this._initialVelocity*o)/(o*o);}else{this._acceleration=0;this._velocity=this._initialVelocity=(p-this._initialPosition)/o;}if(this._position>=p){this._onComplete();}else this._start();return this;};m.prototype.setNoAcceleration=function(n){'use strict';this.useAcceleration=!n;return this;};m.prototype._clearOnCompleteTimeout=function(){'use strict';b.clearTimeout(this._onCompleteTimeout);};m.prototype.stop=function(){'use strict';this._clearOnCompleteTimeout();this._velocity=0;this._initialVelocity=0;this._acceleration=0;this._stopAnimating();return this;};m.prototype._start=function(){'use strict';this._startTime=Date.now();this._onCompleteTimeout=b.setTimeout((function(){this.setPosition(this._targetPosition);this._onComplete();}).bind(this),this._targetTime);this._startAnimating();return this;};m.prototype._loop=function(){'use strict';var n=Date.now()-this._startTime;this._position=.5*this._acceleration*n*n+this._initialVelocity*n+this._initialPosition;var o=this._velocity;this._velocity=this._acceleration*n+this._initialVelocity;var p=o<0!==this._velocity<0;if(this._position>this._normalizePosition(this._targetPosition)||p){this.setPosition(this._targetPosition);this._onComplete();}else this.updateMeter(this._position);};m.prototype.updateMeter=function(n){'use strict';throw "Unimplemented function: updateMeter";};m.prototype._normalizePosition=function(n){'use strict';return Math.min(Math.max((n-this._min)/(this._max-this._min),0),1);};m.prototype._startAnimating=function(){'use strict';if(!k(l,this)){l.push(this);if(l.length===1)i(m.prototype._requestAnimationFrameCallback);}};m.prototype._stopAnimating=function(){'use strict';j(l,this);};m.prototype._requestAnimationFrameCallback=function(){'use strict';l.forEach(function(n){n._loop();});if(l.length)i(m.prototype._requestAnimationFrameCallback);};m.setPosition=function(n,o){'use strict';n.setPosition(o);};m.setTarget=function(n,o,p){'use strict';n.setTarget(o,p);};f.exports=m;},null);
__d('ProgressBar',['ProgressBarBase','CSS','Style','cx','csx','DOM'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n,o;n=babelHelpers.inherits(p,h);o=n&&n.prototype;function p(q,r,s){'use strict';o.constructor.call(this,r,s);this._root=q;this._meter=m.find(q,"div._5e4k");this._meter2=m.scry(q,"div._5e2g")[0];}p.prototype.getRoot=function(){'use strict';return this._root;};p.prototype.updateMeter=function(q){'use strict';var r=Math.min(Math.max(q,0),1);i.conditionClass(this._meter,"_5e2d",r<=0);i.conditionClass(this._meter,"_5e4j",r>=1);r=r*100+'%';j.set(this._meter,'width',r);if(this._meter2){j.set(this._meter2,'left',r);j.set(this._meter2,'width',r);}};p.prototype.changeLabel=function(q){'use strict';var r=m.scry(this._root,"span._5e2h");r.forEach(function(s){m.setContent(s,q);});return this;};f.exports=p;},null);