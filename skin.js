// Garden Gnome Software - Skin
// Pano2VR 7.1.7/20981
// Filename: Tour_Skin.ggsk
// Generated 2025-08-26T06:33:22

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._buttons_container=document.createElement('div');
		el.ggId="buttons_container";
		el.ggDx=23.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 33px;';
		hs+='left : calc(50% - ((281px + 0px) / 2) + 23.5px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 281px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._buttons_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._buttons_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_zoom_in=document.createElement('div');
		els=me._button_zoom_in__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NSAgICBIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2djQuODY1YzAsMC42NiwwLjUzNiwx'+
			'LjE5NiwxLjE5NiwxLjE5NiAgICBjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3ogICAgIE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUgICAgQzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMT'+
			'QtMS4xMjktNy4xNDYtMi45NiAgICBDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxICAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gt'+
			'NC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1ICAgIEg5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiAgICAgTTE2LDMuNUM5Lj'+
			'A5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2ICAgIEM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEgICAgYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMs'+
			'Ny4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_zoom_in__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_zoom_in__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gtNC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1ICAgIEg5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5'+
			'N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiAgICAgTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy'+
			'41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2ICAgIEM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEgICAgYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHRyYW5z'+
			'Zm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NSAgICBIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2djQuODY1YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NiAgICBjMC42NjEsMCwxLjE5Ny0wLj'+
			'UzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3ogICAgIE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUgICAgQzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NiAgICBDNy4wMjIsMjEuMzE0LDUu'+
			'ODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxICAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_zoom_in__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_zoom_in";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_zoom_in.onmouseenter=function (e) {
			me._button_zoom_in__img.style.visibility='hidden';
			me._button_zoom_in__imgo.style.visibility='inherit';
			me.elementMouseOver['button_zoom_in']=true;
		}
		me._button_zoom_in.onmousedown=function (e) {
			me.elementMouseDown['button_zoom_in']=true;
		}
		me._button_zoom_in.onmouseup=function (e) {
			me.elementMouseDown['button_zoom_in']=false;
		}
		me._button_zoom_in.onmouseleave=function (e) {
			me._button_zoom_in__img.style.visibility='inherit';
			me._button_zoom_in__imgo.style.visibility='hidden';
			me.elementMouseDown['button_zoom_in']=false;
			me.elementMouseOver['button_zoom_in']=false;
		}
		me._button_zoom_in.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['button_zoom_in']) {
				player.changeFovLog(-1,true);
			}
		}
		me._button_zoom_in.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_container.appendChild(me._button_zoom_in);
		el=me._button_zoom_out=document.createElement('div');
		els=me._button_zoom_out__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcgICAgYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5'+
			'NiwzLjUsMTYgICAgYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYgICAgYy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgICBjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxICAgIG'+
			'MxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcgICAgYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4w'+
			'OTYsMy41LDMuNSw5LjA5NiwzLjUsMTYgICAgYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYgICAgYy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgICBjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLD'+
			'cuMTQ2LDIuOTYxICAgIGMxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_zoom_out__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_zoom_out__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8cGF0aCBkPSJNMjEuNzU4LDE0LjgwNEgxMC4yNDFjLTAuNjYsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDExLjUxNyAgICBjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NkMyMi45NTUsMTUu'+
			'MzM5LDIyLjQxOSwxNC44MDQsMjEuNzU4LDE0LjgwNHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiAgICBjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NiAgICBjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0Lj'+
			'M1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjEgICAgYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0yMS43NTgsMTQuODA0SDEwLjI0MWMtMC42NiwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41'+
			'MzYsMS4xOTYsMS4xOTYsMS4xOTZoMTEuNTE3ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2QzIyLjk1NSwxNS4zMzksMjIuNDE5LDE0LjgwNCwyMS43NTgsMTQuODA0eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2ICAgIGMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ2ICAgIGMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Lj'+
			'g5NCwxOC43OTUsNS44OTMsMTYgICAgYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2MSAgICBjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_zoom_out__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_zoom_out";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_zoom_out.onmouseenter=function (e) {
			me._button_zoom_out__img.style.visibility='hidden';
			me._button_zoom_out__imgo.style.visibility='inherit';
			me.elementMouseOver['button_zoom_out']=true;
		}
		me._button_zoom_out.onmousedown=function (e) {
			me.elementMouseDown['button_zoom_out']=true;
		}
		me._button_zoom_out.onmouseup=function (e) {
			me.elementMouseDown['button_zoom_out']=false;
		}
		me._button_zoom_out.onmouseleave=function (e) {
			me._button_zoom_out__img.style.visibility='inherit';
			me._button_zoom_out__imgo.style.visibility='hidden';
			me.elementMouseDown['button_zoom_out']=false;
			me.elementMouseOver['button_zoom_out']=false;
		}
		me._button_zoom_out.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['button_zoom_out']) {
				player.changeFovLog(1,true);
			}
		}
		me._button_zoom_out.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_container.appendChild(me._button_zoom_out);
		el=me._button_home=document.createElement('div');
		els=me._button_home__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTE2Ljg3NCw4LjEzNWMtMC4yMjUtMC4yNC0wLjUzMi0wLjM3Ni0wLjg2MS0wLjM3OWMtMC4zMjgtMC4wMDQtMC42MzksMC4xMjUtMC44NjgsMC4zNmwtNS43NjEsNS44OTUgICAgYy0wLjIxNywwLjIyMi0wLjM0MSwwLjUyNS0wLjM0MSwwLjgzNnY1LjkwNWMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2czAuNTMxLDAuMzUxLDAuODQ2LDAu'+
			'MzUxaDExLjUyMiAgICBjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MXMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di01LjYzOWMwLTAuMzA2LTAuMTE0LTAuNTk0LTAuMzIyLTAuODE3TDE2Ljg3NCw4LjEzNXogTTIwLjU2NSwxOS41NTYgICAgSDE1Ljk1YzAuMDA5LTAuMDU5LDAuMDE4LTAuMTE2LDAuMDE4LTAuMTc3di0yLjMxYzAtMC42Ni0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djIuMzEgICAgYzAsMC4wNjEsMC4wMDksMC4xMTgsMC4wMTgsMC4xNzdoLTIuMTU4di00LjIyMmw0LjU0Ni00LjY1MWw0LjU4NCw0LjkwMVYxOS41NT'+
			'Z6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYgICAgYzAsNi45MDQsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTYsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDcgICAgYy0xLjgzMywxLjgzLTQuMzUzLDIuOTU5LTcuMTQ3LDIuOTZjLTIuNzk1LTAuMDAxLTUuMzE0LTEuMTMtNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTZj'+
			'Mi43OTUsMCw1LjMxMywxLjEyOSw3LjE0NywyLjk2ICAgIGMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ3eiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTE2Ljg3NCw4LjEzNWMtMC4yMjUtMC4yNC0wLjUzMi0wLjM3Ni0wLjg2MS0wLjM3OWMtMC4zMjgtMC4wMDQtMC42MzksMC4xMjUtMC44NjgsMC4zNmwtNS43NjEsNS44OTUgICAgYy0wLjIxNywwLjIyMi0wLjM0MSwwLjUyNS0wLjM0MSwwLjgzNnY1LjkwNWMwLD'+
			'AuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2czAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDExLjUyMiAgICBjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MXMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di01LjYzOWMwLTAuMzA2LTAuMTE0LTAuNTk0LTAuMzIyLTAuODE3TDE2Ljg3NCw4LjEzNXogTTIwLjU2NSwxOS41NTYgICAgSDE1Ljk1YzAuMDA5LTAuMDU5LDAuMDE4LTAuMTE2LDAuMDE4LTAuMTc3di0yLjMxYzAtMC42Ni0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djIuMzEgICAgYzAsMC4wNjEsMC4wMDksMC4xMTgsMC4wMTgs'+
			'MC4xNzdoLTIuMTU4di00LjIyMmw0LjU0Ni00LjY1MWw0LjU4NCw0LjkwMVYxOS41NTZ6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYgICAgYzAsNi45MDQsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTYsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDcgICAgYy0xLjgzMywxLjgzLTQuMzUzLDIuOTU5LTcuMTQ3LDIuOTZjLTIuNzk1LTAuMDAxLTUuMzE0LTEuMTMtNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01Lj'+
			'MxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTZjMi43OTUsMCw1LjMxMywxLjEyOSw3LjE0NywyLjk2ICAgIGMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ3eiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_home__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_home__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8cGF0aCBkPSJNMTYuODc0LDguMTM1Yy0wLjIyNS0wLjI0LTAuNTMyLTAuMzc2LTAuODYxLTAuMzc5Yy0wLjMyOC0wLjAwNC0wLjYzOSwwLjEyNS0wLjg2OCwwLjM2bC01Ljc2MSw1Ljg5NSAgICBjLTAuMjE3LDAuMjIyLTAuMzQxLDAuNTI1LTAuMzQxLDAuODM2'+
			'djUuOTA1YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDZzMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMTEuNTIyICAgIGMwLjMxNCwwLDAuNjIzLTAuMTI4LDAuODQ2LTAuMzUxczAuMzUxLTAuNTMsMC4zNTEtMC44NDZ2LTUuNjM5YzAtMC4zMDYtMC4xMTQtMC41OTQtMC4zMjItMC44MTdMMTYuODc0LDguMTM1eiBNMjAuNTY1LDE5LjU1NiAgICBIMTUuOTVjMC4wMDktMC4wNTksMC4wMTgtMC4xMTYsMC4wMTgtMC4xNzd2LTIuMzFjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2Yy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2Mi4zMSAgICBjMCwwLjA2MSwwLjAwOSwwLj'+
			'ExOCwwLjAxOCwwLjE3N2gtMi4xNTh2LTQuMjIybDQuNTQ2LTQuNjUxbDQuNTg0LDQuOTAxVjE5LjU1NnogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiAgICBjMCw2LjkwNCw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NiwxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0NyAgICBjLTEuODMzLDEuODMtNC4zNTMsMi45NTktNy4xNDcsMi45NmMtMi43OTUtMC4wMDEtNS4zMTQtMS4xMy03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYgICAgYzAuMDAxLTIuNzk1'+
			'LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NmMyLjc5NSwwLDUuMzEzLDEuMTI5LDcuMTQ3LDIuOTYgICAgYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDd6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0xNi44NzQsOC4xMzVjLTAuMjI1LTAuMjQtMC41Mz'+
			'ItMC4zNzYtMC44NjEtMC4zNzljLTAuMzI4LTAuMDA0LTAuNjM5LDAuMTI1LTAuODY4LDAuMzZsLTUuNzYxLDUuODk1ICAgIGMtMC4yMTcsMC4yMjItMC4zNDEsMC41MjUtMC4zNDEsMC44MzZ2NS45MDVjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NnMwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgxMS41MjIgICAgYzAuMzE0LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTFzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtNS42MzljMC0wLjMwNi0wLjExNC0wLjU5NC0wLjMyMi0wLjgxN0wxNi44NzQsOC4xMzV6IE0yMC41NjUsMTkuNTU2ICAgIEgxNS45NWMwLjAwOS0wLjA1OSwwLjAxOC0wLjEx'+
			'NiwwLjAxOC0wLjE3N3YtMi4zMWMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYyLjMxICAgIGMwLDAuMDYxLDAuMDA5LDAuMTE4LDAuMDE4LDAuMTc3aC0yLjE1OHYtNC4yMjJsNC41NDYtNC42NTFsNC41ODQsNC45MDFWMTkuNTU2eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2ICAgIGMwLDYuOTA0LDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ3ICAgIGMtMS44MzMsMS44My'+
			'00LjM1MywyLjk1OS03LjE0NywyLjk2Yy0yLjc5NS0wLjAwMS01LjMxNC0xLjEzLTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgICBjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2YzIuNzk1LDAsNS4zMTMsMS4xMjksNy4xNDcsMi45NiAgICBjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0N3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_home__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_home";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_home.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_home.onclick=function (e) {
			player.moveToDefaultViewEx(10,0);
		}
		me._button_home.onmouseenter=function (e) {
			me._button_home__img.style.visibility='hidden';
			me._button_home__imgo.style.visibility='inherit';
			me.elementMouseOver['button_home']=true;
		}
		me._button_home.onmouseleave=function (e) {
			me._button_home__img.style.visibility='inherit';
			me._button_home__imgo.style.visibility='hidden';
			me.elementMouseOver['button_home']=false;
		}
		me._button_home.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_container.appendChild(me._button_home);
		el=me._button_full_screen=document.createElement('div');
		els=me._button_full_screen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNTEgICAgQzMuNjI4LDcuMjU3LDMuNSw3LjU2NCwzLjUsNy44OHY4LjExOGMwLDAuMDAxLDAsMC4wMDIsMCwwLjAwMnY4LjEyYzAsMC4zMTUsMC4xMjcsMC42MjMsMC4zNSwwLjg0NiAgICBjMC4y'+
			'MjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMCwwLDAuMDAxLDAsMC4wMDEsMGgxMS4zMDJjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxICAgIGMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTE0LjgwNCwyMi45MjRINS44OTN2LTUuNzI4aDguOTExVjIyLjkyNHogICAgIE0yNi4xMDcsMjIuOTI0aC04LjkxMVYxNmMwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDUuODkzVjkuMDc3aDIwLjIxNVYyMi'+
			'45MjR6ICAgICBNMTguNjgyLDE1LjEzNWMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTZsMC4yMjEtMC4xNDhjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTEgICAgYy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5LTAuMjU3bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTEgICAgQzE4LjA4NywxNC45OSwxOC4zODIsMTUuMTM1LDE4LjY4MiwxNS4xMzV6IE0yNC4yMDgsMTEuNDQyYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTYtMC4xNTdsMC4yMjItMC4xNDggICAgYzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkx'+
			'Yy0wLjI4NS0wLjQyNy0wLjg2Mi0wLjU0Mi0xLjI5LTAuMjU2bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTYsMS4yOSAgICBDMjMuNjEzLDExLjI5NywyMy45MDcsMTEuNDQyLDI0LjIwOCwxMS40NDJ6IE0yMS40NDQsMTMuMjg5YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcgICAgYzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxYy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMiwwLjE0N2MtMC40MjgsMC4yODYtMC41NDMsMC44NjMtMC4yNTcsMS4yOTEgICAgQzIwLjg1LDEzLjE0NCwyMS'+
			'4xNDUsMTMuMjg5LDIxLjQ0NCwxMy4yODl6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyNy0wLjg0NiwwLjM1MSAgICBDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djguMTE4YzAsMC4wMDEsMCwwLjAwMiwwLDAuMDAydjguMTJjMCwwLjMxNSwwLjEyNywwLjYyMywwLjM1LDAuODQ2ICAgIGMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMw'+
			'LDAsMC4wMDEsMCwwLjAwMSwwaDExLjMwMmMwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEgICAgYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNMTQuODA0LDIyLjkyNEg1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiAgICAgTTI2LjEwNywyMi45MjRoLTguOTExVjE2YzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NmMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINS44OTNWOS4wNzdoMjAuMjE1VjIyLjkyNHogICAgIE0xOC42ODIsMTUuMTM1YzAuMTc4LDAsMC4zNT'+
			'ctMC4wNSwwLjUxNy0wLjE1NmwwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MSAgICBjLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjktMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MSAgICBDMTguMDg3LDE0Ljk5LDE4LjM4MiwxNS4xMzUsMTguNjgyLDE1LjEzNXogTTI0LjIwOCwxMS40NDJjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNi0wLjE1N2wwLjIyMi0wLjE0OCAgICBjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFjLTAuMjg1LTAuNDI3LTAuODYyLTAuNTQyLTEuMjktMC4yNTZs'+
			'LTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5ICAgIEMyMy42MTMsMTEuMjk3LDIzLjkwNywxMS40NDIsMjQuMjA4LDExLjQ0MnogTTIxLjQ0NCwxMy4yODljMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyAgICBjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU3bC0wLjIyLDAuMTQ3Yy0wLjQyOCwwLjI4Ni0wLjU0MywwLjg2My0wLjI1NywxLjI5MSAgICBDMjAuODUsMTMuMTQ0LDIxLjE0NSwxMy4yODksMjEuNDQ0LDEzLjI4OXoiLz4KIDwvZz4KPC'+
			'9zdmc+Cg==';
		me._button_full_screen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_full_screen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyNy0wLjg0NiwwLjM1MSAgICBDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djguMTE4YzAsMC4wMDEs'+
			'MCwwLjAwMiwwLDAuMDAydjguMTJjMCwwLjMxNSwwLjEyNywwLjYyMywwLjM1LDAuODQ2ICAgIGMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLDAsMC4wMDEsMCwwLjAwMSwwaDExLjMwMmMwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEgICAgYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNMTQuODA0LDIyLjkyNEg1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiAgICAgTTI2LjEwNywyMi45MjRoLTguOTExVjE2YzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0Nm'+
			'MtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINS44OTNWOS4wNzdoMjAuMjE1VjIyLjkyNHogICAgIE0xOC42ODIsMTUuMTM1YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1NmwwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MSAgICBjLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjktMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MSAgICBDMTguMDg3LDE0Ljk5LDE4LjM4MiwxNS4xMzUsMTguNjgyLDE1LjEzNXogTTI0LjIwOCwxMS40NDJjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUx'+
			'Ni0wLjE1N2wwLjIyMi0wLjE0OCAgICBjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFjLTAuMjg1LTAuNDI3LTAuODYyLTAuNTQyLTEuMjktMC4yNTZsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5ICAgIEMyMy42MTMsMTEuMjk3LDIzLjkwNywxMS40NDIsMjQuMjA4LDExLjQ0MnogTTIxLjQ0NCwxMy4yODljMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyAgICBjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU3bC0wLjIyLDAuMT'+
			'Q3Yy0wLjQyOCwwLjI4Ni0wLjU0MywwLjg2My0wLjI1NywxLjI5MSAgICBDMjAuODUsMTMuMTQ0LDIxLjE0NSwxMy4yODksMjEuNDQ0LDEzLjI4OXoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNTEgICAgQzMuNjI4LDcuMjU3LDMuNSw3LjU2NCwz'+
			'LjUsNy44OHY4LjExOGMwLDAuMDAxLDAsMC4wMDIsMCwwLjAwMnY4LjEyYzAsMC4zMTUsMC4xMjcsMC42MjMsMC4zNSwwLjg0NiAgICBjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMCwwLDAuMDAxLDAsMC4wMDEsMGgxMS4zMDJjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxICAgIGMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTE0LjgwNCwyMi45MjRINS44OTN2LTUuNzI4aDguOTExVjIyLjkyNHogICAgIE0yNi4xMDcsMjIuOTI0aC04LjkxMVYxNmMwLTAuMzE1LT'+
			'AuMTI4LTAuNjIzLTAuMzUtMC44NDZjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDUuODkzVjkuMDc3aDIwLjIxNVYyMi45MjR6ICAgICBNMTguNjgyLDE1LjEzNWMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTZsMC4yMjEtMC4xNDhjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTEgICAgYy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5LTAuMjU3bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTEgICAgQzE4LjA4NywxNC45OSwxOC4zODIsMTUuMTM1LDE4LjY4MiwxNS4xMzV6IE0yNC4yMDgsMTEuNDQyYzAu'+
			'MTc4LDAsMC4zNTctMC4wNTEsMC41MTYtMC4xNTdsMC4yMjItMC4xNDggICAgYzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxYy0wLjI4NS0wLjQyNy0wLjg2Mi0wLjU0Mi0xLjI5LTAuMjU2bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTYsMS4yOSAgICBDMjMuNjEzLDExLjI5NywyMy45MDcsMTEuNDQyLDI0LjIwOCwxMS40NDJ6IE0yMS40NDQsMTMuMjg5YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcgICAgYzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxYy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi'+
			'0xLjI5MS0wLjI1N2wtMC4yMiwwLjE0N2MtMC40MjgsMC4yODYtMC41NDMsMC44NjMtMC4yNTcsMS4yOTEgICAgQzIwLjg1LDEzLjE0NCwyMS4xNDUsMTMuMjg5LDIxLjQ0NCwxMy4yODl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_full_screen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_full_screen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_full_screen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_full_screen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_full_screen.onmouseenter=function (e) {
			me._button_full_screen__img.style.visibility='hidden';
			me._button_full_screen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_full_screen']=true;
		}
		me._button_full_screen.onmouseleave=function (e) {
			me._button_full_screen__img.style.visibility='inherit';
			me._button_full_screen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_full_screen']=false;
		}
		me._button_full_screen.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_container.appendChild(me._button_full_screen);
		el=me._vr=document.createElement('div');
		els=me._vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgOTAgOTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDkwIDkwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik04MS42NzEsMjEuMzIzYy0yLjA4NS0yLjA4NC03Mi41MDMtMS41NTMtNzQuMDU0LDBjLTEuNjc4LDEuNjc4LTEuNjg0LDQ2LjAzMywwLDQ3LjcxMyAgYzAuNTU4LDAuNTU5LDEyLjE1MSwwLjg5NiwyNi4wMDcsMS4wMTJsMy4wNjgtOC40ODZjMC'+
			'wwLDEuOTg3LTguMDQsNy45Mi04LjA0YzYuMjU3LDAsOC45OSw5LjY3NSw4Ljk5LDkuNjc1bDIuNTU1LDYuODQ4ICBjMTMuNjMzLTAuMTE2LDI0Ljk1Ny0wLjQ1MywyNS41MTQtMS4wMDhDODMuMjI0LDY3LjQ4Myw4My42NzIsMjMuMzI0LDgxLjY3MSwyMS4zMjN6IE0yNC41NzIsNTQuNTgyICBjLTYuMDYzLDAtMTAuOTc4LTQuOTE0LTEwLjk3OC0xMC45NzljMC02LjA2Myw0LjkxNS0xMC45NzgsMTAuOTc4LTEwLjk3OHMxMC45NzksNC45MTUsMTAuOTc5LDEwLjk3OCAgQzM1LjU1MSw0OS42NjgsMzAuNjM1LDU0LjU4MiwyNC41NzIsNTQuNTgyeiBNNjQuMzM0LDU0LjU4MmMtNi4wNjMsMC0xMC45'+
			'NzktNC45MTQtMTAuOTc5LTEwLjk3OSAgYzAtNi4wNjMsNC45MTYtMTAuOTc4LDEwLjk3OS0xMC45NzhjNi4wNjIsMCwxMC45NzgsNC45MTUsMTAuOTc4LDEwLjk3OEM3NS4zMTIsNDkuNjY4LDcwLjM5Niw1NC41ODIsNjQuMzM0LDU0LjU4MnoiLz4KPC9zdmc+Cg==';
		me._vr__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="VR";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -52px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vr.onclick=function (e) {
			player.openUrl("Vr_pano.html","_self");
		}
		me._vr.onmouseenter=function (e) {
			me.elementMouseOver['vr']=true;
		}
		me._vr.onmouseleave=function (e) {
			me._vr.style.transition='none';
			me._vr.ggParameter.sx=1;me._vr.ggParameter.sy=1;
			me._vr.style.transform=parameterToTransform(me._vr.ggParameter);
			skin.updateSize(me._vr);
			me.elementMouseOver['vr']=false;
		}
		me._vr.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['vr']) {
				me._vr.style.transition='none';
				me._vr.ggParameter.sx=1.1;me._vr.ggParameter.sy=1.1;
				me._vr.style.transform=parameterToTransform(me._vr.ggParameter);
				skin.updateSize(me._vr);
			}
		}
		me._vr.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_container.appendChild(me._vr);
		me.divSkin.appendChild(me._buttons_container);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((210px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style.transition='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingbrd=document.createElement('div');
		el.ggId="loadingbrd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 58px;';
		hs+='left : -1px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loadingbrd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbrd.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbrd);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var params = [];
			params.push(player._(String((player.getPercentLoaded()*100.0).toFixed(0))));
			var hs = player._("Loading... %1%", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #808080;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 12px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._hide_template=document.createElement('div');
		el.ggId="hide_template";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 44px;';
		hs+='visibility : hidden;';
		hs+='width : 187px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hide_template.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hide_template.ggUpdatePosition=function (useTransition) {
		}
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.onmouseenter=function (e) {
			me._marker_title.style.transition='none';
			me._marker_title.style.visibility=(Number(me._marker_title.style.opacity)>0||!me._marker_title.style.opacity)?'inherit':'hidden';
			me._marker_title.ggVisible=true;
			me.elementMouseOver['markertemplate']=true;
		}
		me._markertemplate.onmouseleave=function (e) {
			me._marker_title.style.transition='none';
			me._marker_title.style.visibility='hidden';
			me._marker_title.ggVisible=false;
			me.elementMouseOver['markertemplate']=false;
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title=document.createElement('div');
		els=me._marker_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : -38px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._marker_title.ggUpdateText();
		});
		el.appendChild(els);
		me._marker_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title.ggUpdatePosition=function (useTransition) {
		}
		me._markertemplate.appendChild(me._marker_title);
		me._hide_template.appendChild(me._markertemplate);
		me.divSkin.appendChild(me._hide_template);
		el=me._main_title=document.createElement('div');
		els=me._main_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Main Title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((462px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 462px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._main_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h2>Sammakka Saralamma Jatara<\/h2>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._main_title.ggUpdateText();
		el.appendChild(els);
		me._main_title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._main_title.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._main_title);
		me.elementMouseOver['button_zoom_in']=false;
		me.elementMouseOver['button_zoom_out']=false;
		me.elementMouseOver['button_home']=false;
		me.elementMouseOver['button_full_screen']=false;
		me.elementMouseOver['vr']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._marker_normal;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='0px';
		me._markertemplate__normal.style.top='0px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._marker_active;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='0px';
		me._markertemplate__active.style.top='0px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me.elementMouseOver['markertemplate']=false;
		player.addListener('beforechangenode', function(event) {
			me._loading.style.transition='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		});
		player.addListener('imagesready', function(event) {
			me._loading.style.transition='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
	};
	function SkinElement_marker_normal_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker_normal=document.createElement('div');
		els=me._marker_normal__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgd2lkdGg9IjMwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIH'+
			'g9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjMwcHgiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzAgMzAiPgogPGcgaWQ9IkxheWVyXzEiIGRpc3BsYXk9Im5vbmUiPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0xOS43NTQsMi45MTUgICBjLTAuMzUzLDIuMTUzLTEuOTM5LDQuMDY2LTQuNzYsNC4wNjZjLTIuODI1LDAtNC40MTItMS45MTktNC43NjItNC4wNzZjLTQuODI5LDEuODk5LTguMjU3LDYuNTgtOC4yNTcsMTIuMDgzICAgYzAsNy4xODMsNS44MjMsMTMuMDA3LDEzLjAwNiwxMy4wMDdjNy4xODQsMCwx'+
			'My4wMDctNS44MjQsMTMuMDA3LTEzLjAwN0MyNy45ODcsOS40OTQsMjQuNTcsNC44MjEsMTkuNzU0LDIuOTE1eiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGRpc3BsYXk9ImlubGluZSIgc3Ryb2tlPSIjOTk5OTk5Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMV9jb3B5IiBkaXNwbGF5PSJub25lIj4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMTkuNzU0LDIuOTE1ICAgYy0wLjM1MywyLjE1My0xLjkzOSw0LjA2Ni00Ljc2LDQuMDY2Yy0yLjgyNSwwLTQuNDEyLTEuOTE5LTQuNzYyLTQuMDc2Yy00LjgyOSwxLjg5OS04LjI1Nyw2LjU4LTguMjU3LDEyLjA4MyAgIGMwLD'+
			'cuMTgzLDUuODIzLDEzLjAwNywxMy4wMDYsMTMuMDA3YzcuMTg0LDAsMTMuMDA3LTUuODI0LDEzLjAwNy0xMy4wMDdDMjcuOTg3LDkuNDk0LDI0LjU3LDQuODIxLDE5Ljc1NCwyLjkxNXoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkaXNwbGF5PSJpbmxpbmUiIHN0cm9rZT0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzMiPgogIDxjaXJjbGUgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzIiBjeD0iMTUiIGN5PSIxNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiByPSI4LjA1MyIgc3Ryb2tlPSIjOTk5OTk5Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfM19j'+
			'b3B5Ij4KICA8Y2lyY2xlIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMiIgY3g9IjE1IiBjeT0iMTUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcj0iOC4wNTMiIHN0cm9rZT0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzUiIGRpc3BsYXk9Im5vbmUiPgogIDxjaXJjbGUgZmlsbD0iI0VFMUQzQSIgcj0iMi4wNTMiIGN4PSIxNSIgY3k9IjIuMDA3IiBkaXNwbGF5PSJpbmxpbmUiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._marker_normal__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_normal";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_normal.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_normal.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement_marker_active_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker_active=document.createElement('div');
		els=me._marker_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgd2lkdGg9IjMwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIH'+
			'g9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjMwcHgiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzAgMzAiPgogPGcgaWQ9IkxheWVyXzEiPgogIDxjaXJjbGUgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSI1IiBjeD0iMTQuOTgxIiBjeT0iMTQuOTg3IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHI9IjEwLjk5NCIgc3Ryb2tlPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMV9jb3B5Ij4KICA8Y2lyY2xlIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMyIgY3g9IjE0Ljk4MSIgY3k9IjE0Ljk4NyIg'+
			'c3Ryb2tlLW1pdGVybGltaXQ9IjEwIiByPSIxMC45OTQiIHN0cm9rZT0iI0ZGRkZGRiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzMiIGRpc3BsYXk9Im5vbmUiPgogIDxjaXJjbGUgcj0iMi4xMTciIGZpbGw9IiNFRDFGMjQiIHN0cm9rZS13aWR0aD0iMC41IiBjeD0iMTQuOTgiIGN5PSIzLjk5NCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkaXNwbGF5PSJpbmxpbmUiIHN0cm9rZT0iI0VFMUQzQSIvPgogPC9nPgo8L3N2Zz4K';
		me._marker_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 31px;';
		hs+='left : 105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_active.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_active.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinHotspotClass_hs(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hs=document.createElement('div');
		el.ggId="hs";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 153px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hs.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hs.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hs.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin._marker_title.style.transition='none';
			skin._marker_title.style.visibility=(Number(skin._marker_title.style.opacity)>0||!skin._marker_title.style.opacity)?'inherit':'hidden';
			skin._marker_title.ggVisible=true;
			me.elementMouseOver['hs']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hs.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			skin._marker_title.style.transition='none';
			skin._marker_title.style.visibility='hidden';
			skin._marker_title.ggVisible=false;
			me.elementMouseOver['hs']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hs.ggUpdatePosition=function (useTransition) {
		}
		el=me._target=document.createElement('div');
		els=me._target__img=document.createElement('img');
		els.className='ggskin ggskin_target';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Target";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._target.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._target.ggUpdatePosition=function (useTransition) {
		}
		me._hs.appendChild(me._target);
		el=me._marker_title2=document.createElement('div');
		els=me._marker_title2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -74px;';
		hs+='position : absolute;';
		hs+='top : -54px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title2.ggUpdateText();
		player.addListener('changenode', function() {
			me._marker_title2.ggUpdateText();
		});
		el.appendChild(els);
		me._marker_title2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_title2.ggUpdatePosition=function (useTransition) {
		}
		me._hs.appendChild(me._marker_title2);
		me.elementMouseOver['hs']=false;
			me.__div = me._hs;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'hs';
				hsinst = new SkinHotspotClass_hs(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._button_zoom_in.ggUpdateConditionTimer();
		me._button_zoom_out.ggUpdateConditionTimer();
		me._vr.ggUpdateConditionTimer();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style.transform=hs;
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};