goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__7693__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7695__i = 0, G__7695__a = new Array(arguments.length -  0);
while (G__7695__i < G__7695__a.length) {G__7695__a[G__7695__i] = arguments[G__7695__i + 0]; ++G__7695__i;}
  args = new cljs.core.IndexedSeq(G__7695__a,0,null);
} 
return G__7693__delegate.call(this,args);};
G__7693.cljs$lang$maxFixedArity = 0;
G__7693.cljs$lang$applyTo = (function (arglist__7697){
var args = cljs.core.seq(arglist__7697);
return G__7693__delegate(args);
});
G__7693.cljs$core$IFn$_invoke$arity$variadic = G__7693__delegate;
return G__7693;
})()
);

(o.error = (function() { 
var G__7700__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7702__i = 0, G__7702__a = new Array(arguments.length -  0);
while (G__7702__i < G__7702__a.length) {G__7702__a[G__7702__i] = arguments[G__7702__i + 0]; ++G__7702__i;}
  args = new cljs.core.IndexedSeq(G__7702__a,0,null);
} 
return G__7700__delegate.call(this,args);};
G__7700.cljs$lang$maxFixedArity = 0;
G__7700.cljs$lang$applyTo = (function (arglist__7703){
var args = cljs.core.seq(arglist__7703);
return G__7700__delegate(args);
});
G__7700.cljs$core$IFn$_invoke$arity$variadic = G__7700__delegate;
return G__7700;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
