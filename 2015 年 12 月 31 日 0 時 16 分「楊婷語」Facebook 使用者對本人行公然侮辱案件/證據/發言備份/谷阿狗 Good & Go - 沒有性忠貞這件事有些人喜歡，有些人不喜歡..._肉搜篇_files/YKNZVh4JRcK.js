/*!CK:1069237883!*//*1450669276,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["prnHq"]); }

__d('MessagingForwardingButtonNUX.react',['AsyncRequest','ChatConfig','React','XForwardingNUXSeenController','XUIAmbientNUX.react'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=j.PropTypes,n=j.createClass({displayName:'MessagingForwardingButtonNUX',propTypes:{contextRef:m.func.isRequired},getInitialState:function(){return {showNUX:!i.get('seen_forwarding_nux')&&i.get('forwarding_nux_gating')};},_onClose:function(){if(!this.state.showNUX)return;i.set('seen_forwarding_nux',true);new h(k.getURIBuilder().getURI()).send();this.setState({showNUX:false});},render:function(){return (j.createElement(l,{contextRef:this.props.contextRef,onCloseButtonClick:this._onClose,position:'left',width:'auto',shown:this.state.showNUX},this.props.children));},close:function(){this._onClose();}});f.exports=n;},null);