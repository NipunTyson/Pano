// Garden Gnome Software - VR - Skin
// Pano2VR 7.1.7/20981
// Filename: SilhouetteVR.ggsk
// Generated 2025-08-26T06:28:14

function pano2vrVrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var vrSkinAdded=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.vrSkinObj=this;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
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
	var hs,el,els,elo,ela,geometry,material;
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.skinGroup);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.userData.ggId)) r.push(e);
			} else {
				if (e.userData.ggId==id) r.push(e);
			}
			if (e.children.length > 0) {
				for(var i=0;i<e.children.length;i++) {
					stack.push(e.children[i]);
				}
			}
		}
		return r;
	}
	
	this.posInSkin=function(el, clonerParent) {
		var curParent = el.parent;
		var pos = {x: el.position.x, y: el.position.y};
		while (curParent && curParent != me.skinGroup) {
			pos.x += curParent.position.x;
			pos.y += curParent.position.y;
			if (curParent.parent) {
				curParent = curParent.parent;
			} else {
				curParent = clonerParent
			}
		}
		return pos;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	this.languageChanged=function() {
		if (!me.skinGroup) return;
		var stack=[];
		stack.push(me.skinGroup);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.userData && e.userData.ggUpdateText) {
				e.userData.ggUpdateText();
			}
			for(var i=0;i<e.children.length;i++) {
				stack.push(e.children[i]);
			}
		}
	}
	player.addListener('languagechanged', this.languageChanged);
	this.getElementVrPosition = function(el, x, y) {
		var vrPos = {};
		var renderableEl = el.parent && (el.parent.type == 'Mesh' || el.parent.type == 'Group');
		switch (el.userData.hanchor) {
			case 0:
			vrPos.x = (renderableEl ? el.parent.position.x : 0) - ((renderableEl ? el.parent.userData.width : 800) / 200.0) + (x / 100.0) + (el.userData.width / 200.0);
			break;
			case 1:
			vrPos.x = (renderableEl ? el.parent.position.x : 0) + (x / 100.0);
			break;
			case 2:
			vrPos.x = (renderableEl ? el.parent.position.x : 0) + ((renderableEl ? el.parent.userData.width : 800) / 200.0) - (x / 100.0) - (el.userData.width / 200.0);
			break;
		}
		switch (el.userData.vanchor) {
			case 0:
			vrPos.y = (renderableEl ? el.parent.position.y : 0) + ((renderableEl ? el.parent.userData.height : 600) / 200.0) - (y / 100.0) - (el.userData.height / 200.0);
			break;
			case 1:
			vrPos.y = (renderableEl ? el.parent.position.y : 0) - (y / 100.0);
			break;
			case 2:
			vrPos.y = (renderableEl ? el.parent.position.y : 0) - ((renderableEl ? el.parent.userData.height : 600) / 200.0) + (y / 100.0) + (el.userData.height / 200.0);
			break;
		}
		vrPos.x += el.userData.curScaleOffX;
		vrPos.y += el.userData.curScaleOffY;
		return vrPos;
	}
	this.skin_nodechangeCallback = function() {
		me.ggUserdata=player.userdata;
	};
	this.addSkin=function() {
		if (me.vrSkinAdded) return;
		me.vrSkinAdded = true;
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this.skinGroup=player.getSkinGroup();
		geometry = new THREE.PlaneGeometry(0.1, 0.1, 5, 5 );
		geometry.name = 'Aim_geometry';
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAKklEQVQImWP4//8/w////xkYGBgaYGwmBiyAkYGBoQHKbkBiwwFcAKt2AP1CDnqHspqBAAAAAElFTkSuQmCC');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true, } );
		material.name = 'Aim_material';
		el = new THREE.Mesh( geometry, material );
		el.translateX(0.03);
		el.translateY(-0.03);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 10;
		el.userData.height = 10;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.name = 'Aim';
		el.userData.x = 0.03;
		el.userData.y = -0.03;
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.translateZ(0.010);
		el.renderOrder = 1;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.setOpacityInternal = function(v) {
			if (me._aim.material) me._aim.material.opacity = v;
			me._aim.visible = (v>0 && me._aim.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._aim.visible
			let parentEl = me._aim.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._aim.userData.opacity = v;
			v = v * me._aim.userData.parentOpacity;
			me._aim.userData.setOpacityInternal(v);
			for (let i = 0; i < me._aim.children.length; i++) {
				let child = me._aim.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._aim.userData.parentOpacity = v;
			v = v * me._aim.userData.opacity
			me._aim.userData.setOpacityInternal(v);
			for (let i = 0; i < me._aim.children.length; i++) {
				let child = me._aim.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._aim = el;
		el.userData.ggId="Aim";
		me._aim.userData.ggUpdatePosition=function (useTransition) {
		}
		me.skinGroup.add(me._aim);
		geometry = new THREE.PlaneGeometry(0.32, 0.32, 5, 5 );
		geometry.name = 'desktop_geometry';
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABLklEQVR4nO2bMUoDURgGR0lAEUttUnoDi9zCLvfwDN7AK1iIfYIHsPYKXkNIlVjE6rkkwsu+gbxvYGF5u8vODvxb7UIIS2Db6bY8+93plnNbwKb7AJOBtRfgidMbjQvgFbgvD5QvhkVbr6Y8Uzxv9yOQALaATQLYAjYJYAvYJIAtYJMAtoBNAtgCNglgC9gkgC1gkwC2gE0C2AI2CWAL2CSALWCTALaATQLYAjYJYAvYJIAtYJMAA2u3zS3acVMuDH0nuAY+gU0Lo4ZcAvNyMR9K2gI23QeYAG/AA7txGIOryuu/j2Lxly2wGuuhyxvVMKpj9yOQALaATQLYAjYJYAvYdB9g6JeZkhnwMbbIHr4qrn0E3ved8J8AU+CuQqKWmntfHzqh+xFIAFsgBJ'+
	'cft4lZfp1keasAAAAASUVORK5CYII=');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'desktop_material';
		el = new THREE.Mesh( geometry, material );
		el.userData.materialNormal = material;
		el.translateX(-3.79);
		el.translateY(-2.79);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 32;
		el.userData.height = 32;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.name = 'desktop';
		el.userData.x = -3.79;
		el.userData.y = -2.79;
		el.userData.hanchor = 0;
		el.userData.vanchor = 2;
		el.translateZ(0.020);
		el.renderOrder = 2;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.setOpacityInternal = function(v) {
			if (me._desktop.material) me._desktop.material.opacity = v;
			me._desktop.visible = (v>0 && me._desktop.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._desktop.visible
			let parentEl = me._desktop.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._desktop.userData.opacity = v;
			v = v * me._desktop.userData.parentOpacity;
			me._desktop.userData.setOpacityInternal(v);
			for (let i = 0; i < me._desktop.children.length; i++) {
				let child = me._desktop.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._desktop.userData.parentOpacity = v;
			v = v * me._desktop.userData.opacity
			me._desktop.userData.setOpacityInternal(v);
			for (let i = 0; i < me._desktop.children.length; i++) {
				let child = me._desktop.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._desktop = el;
		el.userData.ggId="desktop";
		me._desktop.userData.onclick=function (e) {
			player.openUrl("index.html","_self");
		}
		me._desktop.userData.ggUpdatePosition=function (useTransition) {
		}
		me.skinGroup.add(me._desktop);
		me._aim.userData.setOpacity(1.00);
		me._desktop.userData.setOpacity(1.00);
		me.eventchangenodeCallback = function() {
			me.skin_nodechangeCallback();
		};
		player.addListener('changenode', me.eventchangenodeCallback);
	};
	this.removeSkin=function() {
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeId=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {};
		el.name = 'ht_image';
		el.userData.x = -3.8;
		el.userData.y = 2.81;
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.translateZ(0.000);
		el.renderOrder = 0;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.isVisible = function() {
			let vis = me._ht_image.visible
			let parentEl = me._ht_image.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_image.userData.opacity = v;
			v = v * me._ht_image.userData.parentOpacity;
			me._ht_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_image.children.length; i++) {
				let child = me._ht_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_image.userData.parentOpacity = v;
			v = v * me._ht_image.userData.opacity
			me._ht_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_image.children.length; i++) {
				let child = me._ht_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_image = el;
		el.userData.ggId="ht_image";
		el.userData.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.userData.ggElementNodeId)) {
					return this.parentNode.userData.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.userData.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.userData.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.userData.setOpacity(1.00);
		me.elementMouseOver['ht_image']=false;
			me.__obj = me._ht_image;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeId=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {};
		el.name = 'ht_url';
		el.userData.x = -3.54;
		el.userData.y = 2.81;
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.translateZ(0.000);
		el.renderOrder = 0;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.isVisible = function() {
			let vis = me._ht_url.visible
			let parentEl = me._ht_url.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_url.userData.opacity = v;
			v = v * me._ht_url.userData.parentOpacity;
			me._ht_url.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url.children.length; i++) {
				let child = me._ht_url.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_url.userData.parentOpacity = v;
			v = v * me._ht_url.userData.opacity
			me._ht_url.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url.children.length; i++) {
				let child = me._ht_url.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_url = el;
		el.userData.ggId="ht_url";
		el.userData.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.userData.ggElementNodeId)) {
					return this.parentNode.userData.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.userData.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.userData.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.userData.setOpacity(1.00);
		me.elementMouseOver['ht_url']=false;
			me.__obj = me._ht_url;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeId=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {};
		el.name = 'ht_node';
		el.userData.x = -2.11;
		el.userData.y = 0.31;
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.translateZ(0.000);
		el.renderOrder = 0;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.isVisible = function() {
			let vis = me._ht_node.visible
			let parentEl = me._ht_node.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node.userData.opacity = v;
			v = v * me._ht_node.userData.parentOpacity;
			me._ht_node.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node.children.length; i++) {
				let child = me._ht_node.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node.userData.parentOpacity = v;
			v = v * me._ht_node.userData.opacity
			me._ht_node.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node.children.length; i++) {
				let child = me._ht_node.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node = el;
		el.userData.ggId="ht_node";
		el.userData.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.userData.ggElementNodeId)) {
					return this.parentNode.userData.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.userData.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.ggUpdatePosition=function (useTransition) {
		}
		geometry = new THREE.PlaneGeometry(0.31, 0.31, 5, 5 );
		geometry.name = 'Target_geometry';
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,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');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true, } );
		material.name = 'Target_material';
		el = new THREE.Mesh( geometry, material );
		el.translateX(-0.005);
		el.translateY(-0.025);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 31;
		el.userData.height = 31;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.name = 'Target';
		el.userData.x = -0.005;
		el.userData.y = -0.025;
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.translateZ(0.010);
		el.renderOrder = 1;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.setOpacityInternal = function(v) {
			if (me._target.material) me._target.material.opacity = v;
			me._target.visible = (v>0 && me._target.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._target.visible
			let parentEl = me._target.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._target.userData.opacity = v;
			v = v * me._target.userData.parentOpacity;
			me._target.userData.setOpacityInternal(v);
			for (let i = 0; i < me._target.children.length; i++) {
				let child = me._target.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._target.userData.parentOpacity = v;
			v = v * me._target.userData.opacity
			me._target.userData.setOpacityInternal(v);
			for (let i = 0; i < me._target.children.length; i++) {
				let child = me._target.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._target = el;
		el.userData.ggId="Target";
		me._target.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.add(me._target);
		me._ht_node.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node']=false;
		me._target.userData.setOpacity(1.00);
			me.__obj = me._ht_node;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_url') {
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_image') {
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return (hsinst ? hsinst.__obj : null);
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = [];
	}
	me.skinTimerEvent=function() {
		if (!player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	player.addListener('vrconfigloaded', function() { me.addSkin();if (me.eventconfigloadedCallback) me.eventconfigloadedCallback();if (me.eventchangenodeCallback) me.eventchangenodeCallback();});
	player.addListener('exitvr', function() { me.removeSkin(); });
	me.skinTimerEvent();
};