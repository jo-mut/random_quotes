goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_11829 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_11829(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_11841 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_11841(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__10150 = coll;
var G__10151 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__10150,G__10151) : shadow.dom.lazy_native_coll_seq.call(null, G__10150,G__10151));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__10188 = arguments.length;
switch (G__10188) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__10196 = arguments.length;
switch (G__10196) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__10199 = arguments.length;
switch (G__10199) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__10205 = arguments.length;
switch (G__10205) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__10217 = arguments.length;
switch (G__10217) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__10229 = arguments.length;
switch (G__10229) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e10243){if((e10243 instanceof Object)){
var e = e10243;
return console.log("didnt support attachEvent",el,e);
} else {
throw e10243;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__10272 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__10273 = null;
var count__10274 = (0);
var i__10275 = (0);
while(true){
if((i__10275 < count__10274)){
var el = chunk__10273.cljs$core$IIndexed$_nth$arity$2(null, i__10275);
var handler_11931__$1 = ((function (seq__10272,chunk__10273,count__10274,i__10275,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__10272,chunk__10273,count__10274,i__10275,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_11931__$1);


var G__11932 = seq__10272;
var G__11933 = chunk__10273;
var G__11934 = count__10274;
var G__11935 = (i__10275 + (1));
seq__10272 = G__11932;
chunk__10273 = G__11933;
count__10274 = G__11934;
i__10275 = G__11935;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10272);
if(temp__5804__auto__){
var seq__10272__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10272__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10272__$1);
var G__11938 = cljs.core.chunk_rest(seq__10272__$1);
var G__11939 = c__5525__auto__;
var G__11940 = cljs.core.count(c__5525__auto__);
var G__11941 = (0);
seq__10272 = G__11938;
chunk__10273 = G__11939;
count__10274 = G__11940;
i__10275 = G__11941;
continue;
} else {
var el = cljs.core.first(seq__10272__$1);
var handler_11942__$1 = ((function (seq__10272,chunk__10273,count__10274,i__10275,el,seq__10272__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__10272,chunk__10273,count__10274,i__10275,el,seq__10272__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_11942__$1);


var G__11943 = cljs.core.next(seq__10272__$1);
var G__11944 = null;
var G__11945 = (0);
var G__11946 = (0);
seq__10272 = G__11943;
chunk__10273 = G__11944;
count__10274 = G__11945;
i__10275 = G__11946;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__10345 = arguments.length;
switch (G__10345) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__10366 = cljs.core.seq(events);
var chunk__10367 = null;
var count__10368 = (0);
var i__10369 = (0);
while(true){
if((i__10369 < count__10368)){
var vec__10411 = chunk__10367.cljs$core$IIndexed$_nth$arity$2(null, i__10369);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10411,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10411,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__11954 = seq__10366;
var G__11955 = chunk__10367;
var G__11956 = count__10368;
var G__11957 = (i__10369 + (1));
seq__10366 = G__11954;
chunk__10367 = G__11955;
count__10368 = G__11956;
i__10369 = G__11957;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10366);
if(temp__5804__auto__){
var seq__10366__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10366__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10366__$1);
var G__11960 = cljs.core.chunk_rest(seq__10366__$1);
var G__11961 = c__5525__auto__;
var G__11962 = cljs.core.count(c__5525__auto__);
var G__11963 = (0);
seq__10366 = G__11960;
chunk__10367 = G__11961;
count__10368 = G__11962;
i__10369 = G__11963;
continue;
} else {
var vec__10421 = cljs.core.first(seq__10366__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10421,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10421,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__11965 = cljs.core.next(seq__10366__$1);
var G__11966 = null;
var G__11967 = (0);
var G__11968 = (0);
seq__10366 = G__11965;
chunk__10367 = G__11966;
count__10368 = G__11967;
i__10369 = G__11968;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__10433 = cljs.core.seq(styles);
var chunk__10434 = null;
var count__10435 = (0);
var i__10436 = (0);
while(true){
if((i__10436 < count__10435)){
var vec__10481 = chunk__10434.cljs$core$IIndexed$_nth$arity$2(null, i__10436);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__11974 = seq__10433;
var G__11975 = chunk__10434;
var G__11976 = count__10435;
var G__11977 = (i__10436 + (1));
seq__10433 = G__11974;
chunk__10434 = G__11975;
count__10435 = G__11976;
i__10436 = G__11977;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10433);
if(temp__5804__auto__){
var seq__10433__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10433__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10433__$1);
var G__11978 = cljs.core.chunk_rest(seq__10433__$1);
var G__11979 = c__5525__auto__;
var G__11980 = cljs.core.count(c__5525__auto__);
var G__11981 = (0);
seq__10433 = G__11978;
chunk__10434 = G__11979;
count__10435 = G__11980;
i__10436 = G__11981;
continue;
} else {
var vec__10500 = cljs.core.first(seq__10433__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10500,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10500,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__11988 = cljs.core.next(seq__10433__$1);
var G__11989 = null;
var G__11990 = (0);
var G__11991 = (0);
seq__10433 = G__11988;
chunk__10434 = G__11989;
count__10435 = G__11990;
i__10436 = G__11991;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__10519_11992 = key;
var G__10519_11993__$1 = (((G__10519_11992 instanceof cljs.core.Keyword))?G__10519_11992.fqn:null);
switch (G__10519_11993__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_11996 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_11996,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_11996,"aria-");
}
})())){
el.setAttribute(ks_11996,value);
} else {
(el[ks_11996] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__10589){
var map__10590 = p__10589;
var map__10590__$1 = cljs.core.__destructure_map(map__10590);
var props = map__10590__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10590__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__10591 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10591,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10591,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10591,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__10594 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__10594,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__10594;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__10600 = arguments.length;
switch (G__10600) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__10611){
var vec__10612 = p__10611;
var seq__10613 = cljs.core.seq(vec__10612);
var first__10614 = cljs.core.first(seq__10613);
var seq__10613__$1 = cljs.core.next(seq__10613);
var nn = first__10614;
var first__10614__$1 = cljs.core.first(seq__10613__$1);
var seq__10613__$2 = cljs.core.next(seq__10613__$1);
var np = first__10614__$1;
var nc = seq__10613__$2;
var node = vec__10612;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10615 = nn;
var G__10616 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__10615,G__10616) : create_fn.call(null, G__10615,G__10616));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10620 = nn;
var G__10621 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__10620,G__10621) : create_fn.call(null, G__10620,G__10621));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__10626 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10626,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10626,(1),null);
var seq__10629_11999 = cljs.core.seq(node_children);
var chunk__10630_12000 = null;
var count__10631_12001 = (0);
var i__10632_12002 = (0);
while(true){
if((i__10632_12002 < count__10631_12001)){
var child_struct_12006 = chunk__10630_12000.cljs$core$IIndexed$_nth$arity$2(null, i__10632_12002);
var children_12007 = shadow.dom.dom_node(child_struct_12006);
if(cljs.core.seq_QMARK_(children_12007)){
var seq__10702_12008 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12007));
var chunk__10704_12009 = null;
var count__10705_12010 = (0);
var i__10706_12011 = (0);
while(true){
if((i__10706_12011 < count__10705_12010)){
var child_12012 = chunk__10704_12009.cljs$core$IIndexed$_nth$arity$2(null, i__10706_12011);
if(cljs.core.truth_(child_12012)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12012);


var G__12013 = seq__10702_12008;
var G__12014 = chunk__10704_12009;
var G__12015 = count__10705_12010;
var G__12016 = (i__10706_12011 + (1));
seq__10702_12008 = G__12013;
chunk__10704_12009 = G__12014;
count__10705_12010 = G__12015;
i__10706_12011 = G__12016;
continue;
} else {
var G__12017 = seq__10702_12008;
var G__12018 = chunk__10704_12009;
var G__12019 = count__10705_12010;
var G__12020 = (i__10706_12011 + (1));
seq__10702_12008 = G__12017;
chunk__10704_12009 = G__12018;
count__10705_12010 = G__12019;
i__10706_12011 = G__12020;
continue;
}
} else {
var temp__5804__auto___12021 = cljs.core.seq(seq__10702_12008);
if(temp__5804__auto___12021){
var seq__10702_12022__$1 = temp__5804__auto___12021;
if(cljs.core.chunked_seq_QMARK_(seq__10702_12022__$1)){
var c__5525__auto___12023 = cljs.core.chunk_first(seq__10702_12022__$1);
var G__12024 = cljs.core.chunk_rest(seq__10702_12022__$1);
var G__12025 = c__5525__auto___12023;
var G__12026 = cljs.core.count(c__5525__auto___12023);
var G__12027 = (0);
seq__10702_12008 = G__12024;
chunk__10704_12009 = G__12025;
count__10705_12010 = G__12026;
i__10706_12011 = G__12027;
continue;
} else {
var child_12028 = cljs.core.first(seq__10702_12022__$1);
if(cljs.core.truth_(child_12028)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12028);


var G__12029 = cljs.core.next(seq__10702_12022__$1);
var G__12030 = null;
var G__12031 = (0);
var G__12032 = (0);
seq__10702_12008 = G__12029;
chunk__10704_12009 = G__12030;
count__10705_12010 = G__12031;
i__10706_12011 = G__12032;
continue;
} else {
var G__12033 = cljs.core.next(seq__10702_12022__$1);
var G__12034 = null;
var G__12035 = (0);
var G__12036 = (0);
seq__10702_12008 = G__12033;
chunk__10704_12009 = G__12034;
count__10705_12010 = G__12035;
i__10706_12011 = G__12036;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12007);
}


var G__12037 = seq__10629_11999;
var G__12038 = chunk__10630_12000;
var G__12039 = count__10631_12001;
var G__12040 = (i__10632_12002 + (1));
seq__10629_11999 = G__12037;
chunk__10630_12000 = G__12038;
count__10631_12001 = G__12039;
i__10632_12002 = G__12040;
continue;
} else {
var temp__5804__auto___12041 = cljs.core.seq(seq__10629_11999);
if(temp__5804__auto___12041){
var seq__10629_12042__$1 = temp__5804__auto___12041;
if(cljs.core.chunked_seq_QMARK_(seq__10629_12042__$1)){
var c__5525__auto___12043 = cljs.core.chunk_first(seq__10629_12042__$1);
var G__12044 = cljs.core.chunk_rest(seq__10629_12042__$1);
var G__12045 = c__5525__auto___12043;
var G__12046 = cljs.core.count(c__5525__auto___12043);
var G__12047 = (0);
seq__10629_11999 = G__12044;
chunk__10630_12000 = G__12045;
count__10631_12001 = G__12046;
i__10632_12002 = G__12047;
continue;
} else {
var child_struct_12048 = cljs.core.first(seq__10629_12042__$1);
var children_12049 = shadow.dom.dom_node(child_struct_12048);
if(cljs.core.seq_QMARK_(children_12049)){
var seq__10740_12050 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12049));
var chunk__10742_12051 = null;
var count__10743_12052 = (0);
var i__10744_12053 = (0);
while(true){
if((i__10744_12053 < count__10743_12052)){
var child_12054 = chunk__10742_12051.cljs$core$IIndexed$_nth$arity$2(null, i__10744_12053);
if(cljs.core.truth_(child_12054)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12054);


var G__12055 = seq__10740_12050;
var G__12056 = chunk__10742_12051;
var G__12057 = count__10743_12052;
var G__12058 = (i__10744_12053 + (1));
seq__10740_12050 = G__12055;
chunk__10742_12051 = G__12056;
count__10743_12052 = G__12057;
i__10744_12053 = G__12058;
continue;
} else {
var G__12059 = seq__10740_12050;
var G__12060 = chunk__10742_12051;
var G__12061 = count__10743_12052;
var G__12062 = (i__10744_12053 + (1));
seq__10740_12050 = G__12059;
chunk__10742_12051 = G__12060;
count__10743_12052 = G__12061;
i__10744_12053 = G__12062;
continue;
}
} else {
var temp__5804__auto___12063__$1 = cljs.core.seq(seq__10740_12050);
if(temp__5804__auto___12063__$1){
var seq__10740_12064__$1 = temp__5804__auto___12063__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10740_12064__$1)){
var c__5525__auto___12065 = cljs.core.chunk_first(seq__10740_12064__$1);
var G__12066 = cljs.core.chunk_rest(seq__10740_12064__$1);
var G__12067 = c__5525__auto___12065;
var G__12068 = cljs.core.count(c__5525__auto___12065);
var G__12069 = (0);
seq__10740_12050 = G__12066;
chunk__10742_12051 = G__12067;
count__10743_12052 = G__12068;
i__10744_12053 = G__12069;
continue;
} else {
var child_12070 = cljs.core.first(seq__10740_12064__$1);
if(cljs.core.truth_(child_12070)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12070);


var G__12071 = cljs.core.next(seq__10740_12064__$1);
var G__12072 = null;
var G__12073 = (0);
var G__12074 = (0);
seq__10740_12050 = G__12071;
chunk__10742_12051 = G__12072;
count__10743_12052 = G__12073;
i__10744_12053 = G__12074;
continue;
} else {
var G__12075 = cljs.core.next(seq__10740_12064__$1);
var G__12076 = null;
var G__12077 = (0);
var G__12078 = (0);
seq__10740_12050 = G__12075;
chunk__10742_12051 = G__12076;
count__10743_12052 = G__12077;
i__10744_12053 = G__12078;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12049);
}


var G__12081 = cljs.core.next(seq__10629_12042__$1);
var G__12082 = null;
var G__12083 = (0);
var G__12084 = (0);
seq__10629_11999 = G__12081;
chunk__10630_12000 = G__12082;
count__10631_12001 = G__12083;
i__10632_12002 = G__12084;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__10773 = cljs.core.seq(node);
var chunk__10774 = null;
var count__10775 = (0);
var i__10776 = (0);
while(true){
if((i__10776 < count__10775)){
var n = chunk__10774.cljs$core$IIndexed$_nth$arity$2(null, i__10776);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12088 = seq__10773;
var G__12089 = chunk__10774;
var G__12090 = count__10775;
var G__12091 = (i__10776 + (1));
seq__10773 = G__12088;
chunk__10774 = G__12089;
count__10775 = G__12090;
i__10776 = G__12091;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10773);
if(temp__5804__auto__){
var seq__10773__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10773__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10773__$1);
var G__12092 = cljs.core.chunk_rest(seq__10773__$1);
var G__12093 = c__5525__auto__;
var G__12094 = cljs.core.count(c__5525__auto__);
var G__12095 = (0);
seq__10773 = G__12092;
chunk__10774 = G__12093;
count__10775 = G__12094;
i__10776 = G__12095;
continue;
} else {
var n = cljs.core.first(seq__10773__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12100 = cljs.core.next(seq__10773__$1);
var G__12101 = null;
var G__12102 = (0);
var G__12103 = (0);
seq__10773 = G__12100;
chunk__10774 = G__12101;
count__10775 = G__12102;
i__10776 = G__12103;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__10802 = arguments.length;
switch (G__10802) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__10810 = arguments.length;
switch (G__10810) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__10830 = arguments.length;
switch (G__10830) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12116 = arguments.length;
var i__5727__auto___12117 = (0);
while(true){
if((i__5727__auto___12117 < len__5726__auto___12116)){
args__5732__auto__.push((arguments[i__5727__auto___12117]));

var G__12118 = (i__5727__auto___12117 + (1));
i__5727__auto___12117 = G__12118;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__10857_12119 = cljs.core.seq(nodes);
var chunk__10858_12120 = null;
var count__10859_12121 = (0);
var i__10860_12122 = (0);
while(true){
if((i__10860_12122 < count__10859_12121)){
var node_12123 = chunk__10858_12120.cljs$core$IIndexed$_nth$arity$2(null, i__10860_12122);
fragment.appendChild(shadow.dom._to_dom(node_12123));


var G__12124 = seq__10857_12119;
var G__12125 = chunk__10858_12120;
var G__12126 = count__10859_12121;
var G__12127 = (i__10860_12122 + (1));
seq__10857_12119 = G__12124;
chunk__10858_12120 = G__12125;
count__10859_12121 = G__12126;
i__10860_12122 = G__12127;
continue;
} else {
var temp__5804__auto___12128 = cljs.core.seq(seq__10857_12119);
if(temp__5804__auto___12128){
var seq__10857_12129__$1 = temp__5804__auto___12128;
if(cljs.core.chunked_seq_QMARK_(seq__10857_12129__$1)){
var c__5525__auto___12130 = cljs.core.chunk_first(seq__10857_12129__$1);
var G__12131 = cljs.core.chunk_rest(seq__10857_12129__$1);
var G__12132 = c__5525__auto___12130;
var G__12133 = cljs.core.count(c__5525__auto___12130);
var G__12134 = (0);
seq__10857_12119 = G__12131;
chunk__10858_12120 = G__12132;
count__10859_12121 = G__12133;
i__10860_12122 = G__12134;
continue;
} else {
var node_12135 = cljs.core.first(seq__10857_12129__$1);
fragment.appendChild(shadow.dom._to_dom(node_12135));


var G__12136 = cljs.core.next(seq__10857_12129__$1);
var G__12137 = null;
var G__12138 = (0);
var G__12139 = (0);
seq__10857_12119 = G__12136;
chunk__10858_12120 = G__12137;
count__10859_12121 = G__12138;
i__10860_12122 = G__12139;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq10851){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10851));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__10880_12140 = cljs.core.seq(scripts);
var chunk__10881_12141 = null;
var count__10882_12142 = (0);
var i__10883_12143 = (0);
while(true){
if((i__10883_12143 < count__10882_12142)){
var vec__10897_12144 = chunk__10881_12141.cljs$core$IIndexed$_nth$arity$2(null, i__10883_12143);
var script_tag_12145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10897_12144,(0),null);
var script_body_12146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10897_12144,(1),null);
eval(script_body_12146);


var G__12147 = seq__10880_12140;
var G__12148 = chunk__10881_12141;
var G__12149 = count__10882_12142;
var G__12150 = (i__10883_12143 + (1));
seq__10880_12140 = G__12147;
chunk__10881_12141 = G__12148;
count__10882_12142 = G__12149;
i__10883_12143 = G__12150;
continue;
} else {
var temp__5804__auto___12151 = cljs.core.seq(seq__10880_12140);
if(temp__5804__auto___12151){
var seq__10880_12152__$1 = temp__5804__auto___12151;
if(cljs.core.chunked_seq_QMARK_(seq__10880_12152__$1)){
var c__5525__auto___12153 = cljs.core.chunk_first(seq__10880_12152__$1);
var G__12154 = cljs.core.chunk_rest(seq__10880_12152__$1);
var G__12155 = c__5525__auto___12153;
var G__12156 = cljs.core.count(c__5525__auto___12153);
var G__12157 = (0);
seq__10880_12140 = G__12154;
chunk__10881_12141 = G__12155;
count__10882_12142 = G__12156;
i__10883_12143 = G__12157;
continue;
} else {
var vec__10902_12158 = cljs.core.first(seq__10880_12152__$1);
var script_tag_12159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10902_12158,(0),null);
var script_body_12160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10902_12158,(1),null);
eval(script_body_12160);


var G__12161 = cljs.core.next(seq__10880_12152__$1);
var G__12162 = null;
var G__12163 = (0);
var G__12164 = (0);
seq__10880_12140 = G__12161;
chunk__10881_12141 = G__12162;
count__10882_12142 = G__12163;
i__10883_12143 = G__12164;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__10905){
var vec__10907 = p__10905;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10907,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10907,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__10923 = arguments.length;
switch (G__10923) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__10934 = cljs.core.seq(style_keys);
var chunk__10935 = null;
var count__10936 = (0);
var i__10937 = (0);
while(true){
if((i__10937 < count__10936)){
var it = chunk__10935.cljs$core$IIndexed$_nth$arity$2(null, i__10937);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12174 = seq__10934;
var G__12175 = chunk__10935;
var G__12176 = count__10936;
var G__12177 = (i__10937 + (1));
seq__10934 = G__12174;
chunk__10935 = G__12175;
count__10936 = G__12176;
i__10937 = G__12177;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10934);
if(temp__5804__auto__){
var seq__10934__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10934__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10934__$1);
var G__12178 = cljs.core.chunk_rest(seq__10934__$1);
var G__12179 = c__5525__auto__;
var G__12180 = cljs.core.count(c__5525__auto__);
var G__12181 = (0);
seq__10934 = G__12178;
chunk__10935 = G__12179;
count__10936 = G__12180;
i__10937 = G__12181;
continue;
} else {
var it = cljs.core.first(seq__10934__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12182 = cljs.core.next(seq__10934__$1);
var G__12183 = null;
var G__12184 = (0);
var G__12185 = (0);
seq__10934 = G__12182;
chunk__10935 = G__12183;
count__10936 = G__12184;
i__10937 = G__12185;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k10963,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__10977 = k10963;
var G__10977__$1 = (((G__10977 instanceof cljs.core.Keyword))?G__10977.fqn:null);
switch (G__10977__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10963,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__10988){
var vec__10989 = p__10988;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10989,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10989,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10962){
var self__ = this;
var G__10962__$1 = this;
return (new cljs.core.RecordIter((0),G__10962__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10964,other10965){
var self__ = this;
var this10964__$1 = this;
return (((!((other10965 == null)))) && ((((this10964__$1.constructor === other10965.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10964__$1.x,other10965.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10964__$1.y,other10965.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10964__$1.__extmap,other10965.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k10963){
var self__ = this;
var this__5307__auto____$1 = this;
var G__11001 = k10963;
var G__11001__$1 = (((G__11001 instanceof cljs.core.Keyword))?G__11001.fqn:null);
switch (G__11001__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k10963);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__10962){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__11002 = cljs.core.keyword_identical_QMARK_;
var expr__11003 = k__5309__auto__;
if(cljs.core.truth_((pred__11002.cljs$core$IFn$_invoke$arity$2 ? pred__11002.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__11003) : pred__11002.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__11003)))){
return (new shadow.dom.Coordinate(G__10962,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11002.cljs$core$IFn$_invoke$arity$2 ? pred__11002.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__11003) : pred__11002.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__11003)))){
return (new shadow.dom.Coordinate(self__.x,G__10962,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__10962),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__10962){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__10962,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__10968){
var extmap__5342__auto__ = (function (){var G__11023 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10968,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__10968)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11023);
} else {
return G__11023;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__10968),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__10968),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k11037,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__11044 = k11037;
var G__11044__$1 = (((G__11044 instanceof cljs.core.Keyword))?G__11044.fqn:null);
switch (G__11044__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11037,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__11047){
var vec__11048 = p__11047;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11048,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11048,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11036){
var self__ = this;
var G__11036__$1 = this;
return (new cljs.core.RecordIter((0),G__11036__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11038,other11039){
var self__ = this;
var this11038__$1 = this;
return (((!((other11039 == null)))) && ((((this11038__$1.constructor === other11039.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11038__$1.w,other11039.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11038__$1.h,other11039.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11038__$1.__extmap,other11039.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k11037){
var self__ = this;
var this__5307__auto____$1 = this;
var G__11079 = k11037;
var G__11079__$1 = (((G__11079 instanceof cljs.core.Keyword))?G__11079.fqn:null);
switch (G__11079__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k11037);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__11036){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__11088 = cljs.core.keyword_identical_QMARK_;
var expr__11089 = k__5309__auto__;
if(cljs.core.truth_((pred__11088.cljs$core$IFn$_invoke$arity$2 ? pred__11088.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__11089) : pred__11088.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__11089)))){
return (new shadow.dom.Size(G__11036,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11088.cljs$core$IFn$_invoke$arity$2 ? pred__11088.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__11089) : pred__11088.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__11089)))){
return (new shadow.dom.Size(self__.w,G__11036,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__11036),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__11036){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__11036,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__11040){
var extmap__5342__auto__ = (function (){var G__11106 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11040,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__11040)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11106);
} else {
return G__11106;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__11040),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__11040),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__12259 = (i + (1));
var G__12260 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12259;
ret = G__12260;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11163){
var vec__11166 = p__11163;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11166,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11166,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__11186 = arguments.length;
switch (G__11186) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12276 = ps;
var G__12277 = (i + (1));
el__$1 = G__12276;
i = G__12277;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__11318 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11318,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11318,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11318,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__11321_12287 = cljs.core.seq(props);
var chunk__11322_12288 = null;
var count__11323_12289 = (0);
var i__11324_12290 = (0);
while(true){
if((i__11324_12290 < count__11323_12289)){
var vec__11331_12294 = chunk__11322_12288.cljs$core$IIndexed$_nth$arity$2(null, i__11324_12290);
var k_12295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11331_12294,(0),null);
var v_12296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11331_12294,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12295);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12295),v_12296);


var G__12302 = seq__11321_12287;
var G__12303 = chunk__11322_12288;
var G__12304 = count__11323_12289;
var G__12305 = (i__11324_12290 + (1));
seq__11321_12287 = G__12302;
chunk__11322_12288 = G__12303;
count__11323_12289 = G__12304;
i__11324_12290 = G__12305;
continue;
} else {
var temp__5804__auto___12306 = cljs.core.seq(seq__11321_12287);
if(temp__5804__auto___12306){
var seq__11321_12308__$1 = temp__5804__auto___12306;
if(cljs.core.chunked_seq_QMARK_(seq__11321_12308__$1)){
var c__5525__auto___12309 = cljs.core.chunk_first(seq__11321_12308__$1);
var G__12311 = cljs.core.chunk_rest(seq__11321_12308__$1);
var G__12312 = c__5525__auto___12309;
var G__12313 = cljs.core.count(c__5525__auto___12309);
var G__12314 = (0);
seq__11321_12287 = G__12311;
chunk__11322_12288 = G__12312;
count__11323_12289 = G__12313;
i__11324_12290 = G__12314;
continue;
} else {
var vec__11352_12317 = cljs.core.first(seq__11321_12308__$1);
var k_12318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11352_12317,(0),null);
var v_12319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11352_12317,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12318);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12318),v_12319);


var G__12322 = cljs.core.next(seq__11321_12308__$1);
var G__12323 = null;
var G__12324 = (0);
var G__12325 = (0);
seq__11321_12287 = G__12322;
chunk__11322_12288 = G__12323;
count__11323_12289 = G__12324;
i__11324_12290 = G__12325;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__11426 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11426,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11426,(1),null);
var seq__11429_12334 = cljs.core.seq(node_children);
var chunk__11431_12335 = null;
var count__11432_12336 = (0);
var i__11433_12337 = (0);
while(true){
if((i__11433_12337 < count__11432_12336)){
var child_struct_12339 = chunk__11431_12335.cljs$core$IIndexed$_nth$arity$2(null, i__11433_12337);
if((!((child_struct_12339 == null)))){
if(typeof child_struct_12339 === 'string'){
var text_12341 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12341),child_struct_12339].join(''));
} else {
var children_12343 = shadow.dom.svg_node(child_struct_12339);
if(cljs.core.seq_QMARK_(children_12343)){
var seq__11623_12344 = cljs.core.seq(children_12343);
var chunk__11625_12345 = null;
var count__11626_12346 = (0);
var i__11627_12347 = (0);
while(true){
if((i__11627_12347 < count__11626_12346)){
var child_12350 = chunk__11625_12345.cljs$core$IIndexed$_nth$arity$2(null, i__11627_12347);
if(cljs.core.truth_(child_12350)){
node.appendChild(child_12350);


var G__12353 = seq__11623_12344;
var G__12354 = chunk__11625_12345;
var G__12355 = count__11626_12346;
var G__12356 = (i__11627_12347 + (1));
seq__11623_12344 = G__12353;
chunk__11625_12345 = G__12354;
count__11626_12346 = G__12355;
i__11627_12347 = G__12356;
continue;
} else {
var G__12357 = seq__11623_12344;
var G__12358 = chunk__11625_12345;
var G__12359 = count__11626_12346;
var G__12360 = (i__11627_12347 + (1));
seq__11623_12344 = G__12357;
chunk__11625_12345 = G__12358;
count__11626_12346 = G__12359;
i__11627_12347 = G__12360;
continue;
}
} else {
var temp__5804__auto___12361 = cljs.core.seq(seq__11623_12344);
if(temp__5804__auto___12361){
var seq__11623_12362__$1 = temp__5804__auto___12361;
if(cljs.core.chunked_seq_QMARK_(seq__11623_12362__$1)){
var c__5525__auto___12363 = cljs.core.chunk_first(seq__11623_12362__$1);
var G__12364 = cljs.core.chunk_rest(seq__11623_12362__$1);
var G__12365 = c__5525__auto___12363;
var G__12366 = cljs.core.count(c__5525__auto___12363);
var G__12367 = (0);
seq__11623_12344 = G__12364;
chunk__11625_12345 = G__12365;
count__11626_12346 = G__12366;
i__11627_12347 = G__12367;
continue;
} else {
var child_12368 = cljs.core.first(seq__11623_12362__$1);
if(cljs.core.truth_(child_12368)){
node.appendChild(child_12368);


var G__12370 = cljs.core.next(seq__11623_12362__$1);
var G__12371 = null;
var G__12372 = (0);
var G__12373 = (0);
seq__11623_12344 = G__12370;
chunk__11625_12345 = G__12371;
count__11626_12346 = G__12372;
i__11627_12347 = G__12373;
continue;
} else {
var G__12377 = cljs.core.next(seq__11623_12362__$1);
var G__12378 = null;
var G__12379 = (0);
var G__12380 = (0);
seq__11623_12344 = G__12377;
chunk__11625_12345 = G__12378;
count__11626_12346 = G__12379;
i__11627_12347 = G__12380;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12343);
}
}


var G__12382 = seq__11429_12334;
var G__12383 = chunk__11431_12335;
var G__12384 = count__11432_12336;
var G__12385 = (i__11433_12337 + (1));
seq__11429_12334 = G__12382;
chunk__11431_12335 = G__12383;
count__11432_12336 = G__12384;
i__11433_12337 = G__12385;
continue;
} else {
var G__12386 = seq__11429_12334;
var G__12387 = chunk__11431_12335;
var G__12388 = count__11432_12336;
var G__12389 = (i__11433_12337 + (1));
seq__11429_12334 = G__12386;
chunk__11431_12335 = G__12387;
count__11432_12336 = G__12388;
i__11433_12337 = G__12389;
continue;
}
} else {
var temp__5804__auto___12390 = cljs.core.seq(seq__11429_12334);
if(temp__5804__auto___12390){
var seq__11429_12391__$1 = temp__5804__auto___12390;
if(cljs.core.chunked_seq_QMARK_(seq__11429_12391__$1)){
var c__5525__auto___12392 = cljs.core.chunk_first(seq__11429_12391__$1);
var G__12393 = cljs.core.chunk_rest(seq__11429_12391__$1);
var G__12394 = c__5525__auto___12392;
var G__12395 = cljs.core.count(c__5525__auto___12392);
var G__12396 = (0);
seq__11429_12334 = G__12393;
chunk__11431_12335 = G__12394;
count__11432_12336 = G__12395;
i__11433_12337 = G__12396;
continue;
} else {
var child_struct_12397 = cljs.core.first(seq__11429_12391__$1);
if((!((child_struct_12397 == null)))){
if(typeof child_struct_12397 === 'string'){
var text_12398 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12398),child_struct_12397].join(''));
} else {
var children_12399 = shadow.dom.svg_node(child_struct_12397);
if(cljs.core.seq_QMARK_(children_12399)){
var seq__11673_12400 = cljs.core.seq(children_12399);
var chunk__11675_12401 = null;
var count__11676_12402 = (0);
var i__11677_12403 = (0);
while(true){
if((i__11677_12403 < count__11676_12402)){
var child_12404 = chunk__11675_12401.cljs$core$IIndexed$_nth$arity$2(null, i__11677_12403);
if(cljs.core.truth_(child_12404)){
node.appendChild(child_12404);


var G__12405 = seq__11673_12400;
var G__12406 = chunk__11675_12401;
var G__12407 = count__11676_12402;
var G__12408 = (i__11677_12403 + (1));
seq__11673_12400 = G__12405;
chunk__11675_12401 = G__12406;
count__11676_12402 = G__12407;
i__11677_12403 = G__12408;
continue;
} else {
var G__12409 = seq__11673_12400;
var G__12410 = chunk__11675_12401;
var G__12411 = count__11676_12402;
var G__12412 = (i__11677_12403 + (1));
seq__11673_12400 = G__12409;
chunk__11675_12401 = G__12410;
count__11676_12402 = G__12411;
i__11677_12403 = G__12412;
continue;
}
} else {
var temp__5804__auto___12413__$1 = cljs.core.seq(seq__11673_12400);
if(temp__5804__auto___12413__$1){
var seq__11673_12415__$1 = temp__5804__auto___12413__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11673_12415__$1)){
var c__5525__auto___12417 = cljs.core.chunk_first(seq__11673_12415__$1);
var G__12418 = cljs.core.chunk_rest(seq__11673_12415__$1);
var G__12419 = c__5525__auto___12417;
var G__12420 = cljs.core.count(c__5525__auto___12417);
var G__12421 = (0);
seq__11673_12400 = G__12418;
chunk__11675_12401 = G__12419;
count__11676_12402 = G__12420;
i__11677_12403 = G__12421;
continue;
} else {
var child_12422 = cljs.core.first(seq__11673_12415__$1);
if(cljs.core.truth_(child_12422)){
node.appendChild(child_12422);


var G__12424 = cljs.core.next(seq__11673_12415__$1);
var G__12425 = null;
var G__12426 = (0);
var G__12427 = (0);
seq__11673_12400 = G__12424;
chunk__11675_12401 = G__12425;
count__11676_12402 = G__12426;
i__11677_12403 = G__12427;
continue;
} else {
var G__12428 = cljs.core.next(seq__11673_12415__$1);
var G__12429 = null;
var G__12430 = (0);
var G__12431 = (0);
seq__11673_12400 = G__12428;
chunk__11675_12401 = G__12429;
count__11676_12402 = G__12430;
i__11677_12403 = G__12431;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12399);
}
}


var G__12432 = cljs.core.next(seq__11429_12391__$1);
var G__12433 = null;
var G__12434 = (0);
var G__12435 = (0);
seq__11429_12334 = G__12432;
chunk__11431_12335 = G__12433;
count__11432_12336 = G__12434;
i__11433_12337 = G__12435;
continue;
} else {
var G__12436 = cljs.core.next(seq__11429_12391__$1);
var G__12437 = null;
var G__12438 = (0);
var G__12439 = (0);
seq__11429_12334 = G__12436;
chunk__11431_12335 = G__12437;
count__11432_12336 = G__12438;
i__11433_12337 = G__12439;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12446 = arguments.length;
var i__5727__auto___12447 = (0);
while(true){
if((i__5727__auto___12447 < len__5726__auto___12446)){
args__5732__auto__.push((arguments[i__5727__auto___12447]));

var G__12448 = (i__5727__auto___12447 + (1));
i__5727__auto___12447 = G__12448;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq11774){
var G__11775 = cljs.core.first(seq11774);
var seq11774__$1 = cljs.core.next(seq11774);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11775,seq11774__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
