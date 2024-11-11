goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18399 = arguments.length;
var i__5727__auto___18400 = (0);
while(true){
if((i__5727__auto___18400 < len__5726__auto___18399)){
args__5732__auto__.push((arguments[i__5727__auto___18400]));

var G__18401 = (i__5727__auto___18400 + (1));
i__5727__auto___18400 = G__18401;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq17885){
var G__17886 = cljs.core.first(seq17885);
var seq17885__$1 = cljs.core.next(seq17885);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17886,seq17885__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__17890 = cljs.core.seq(sources);
var chunk__17891 = null;
var count__17892 = (0);
var i__17893 = (0);
while(true){
if((i__17893 < count__17892)){
var map__17912 = chunk__17891.cljs$core$IIndexed$_nth$arity$2(null, i__17893);
var map__17912__$1 = cljs.core.__destructure_map(map__17912);
var src = map__17912__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17912__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17912__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17912__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17912__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17913){var e_18402 = e17913;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18402);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18402.message)].join('')));
}

var G__18403 = seq__17890;
var G__18404 = chunk__17891;
var G__18405 = count__17892;
var G__18406 = (i__17893 + (1));
seq__17890 = G__18403;
chunk__17891 = G__18404;
count__17892 = G__18405;
i__17893 = G__18406;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17890);
if(temp__5804__auto__){
var seq__17890__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17890__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17890__$1);
var G__18407 = cljs.core.chunk_rest(seq__17890__$1);
var G__18408 = c__5525__auto__;
var G__18409 = cljs.core.count(c__5525__auto__);
var G__18410 = (0);
seq__17890 = G__18407;
chunk__17891 = G__18408;
count__17892 = G__18409;
i__17893 = G__18410;
continue;
} else {
var map__17915 = cljs.core.first(seq__17890__$1);
var map__17915__$1 = cljs.core.__destructure_map(map__17915);
var src = map__17915__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17915__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17915__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17915__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17915__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17916){var e_18411 = e17916;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18411);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18411.message)].join('')));
}

var G__18412 = cljs.core.next(seq__17890__$1);
var G__18413 = null;
var G__18414 = (0);
var G__18415 = (0);
seq__17890 = G__18412;
chunk__17891 = G__18413;
count__17892 = G__18414;
i__17893 = G__18415;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__17917 = cljs.core.seq(js_requires);
var chunk__17918 = null;
var count__17919 = (0);
var i__17920 = (0);
while(true){
if((i__17920 < count__17919)){
var js_ns = chunk__17918.cljs$core$IIndexed$_nth$arity$2(null, i__17920);
var require_str_18416 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18416);


var G__18417 = seq__17917;
var G__18418 = chunk__17918;
var G__18419 = count__17919;
var G__18420 = (i__17920 + (1));
seq__17917 = G__18417;
chunk__17918 = G__18418;
count__17919 = G__18419;
i__17920 = G__18420;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17917);
if(temp__5804__auto__){
var seq__17917__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17917__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17917__$1);
var G__18421 = cljs.core.chunk_rest(seq__17917__$1);
var G__18422 = c__5525__auto__;
var G__18423 = cljs.core.count(c__5525__auto__);
var G__18424 = (0);
seq__17917 = G__18421;
chunk__17918 = G__18422;
count__17919 = G__18423;
i__17920 = G__18424;
continue;
} else {
var js_ns = cljs.core.first(seq__17917__$1);
var require_str_18425 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18425);


var G__18426 = cljs.core.next(seq__17917__$1);
var G__18427 = null;
var G__18428 = (0);
var G__18429 = (0);
seq__17917 = G__18426;
chunk__17918 = G__18427;
count__17919 = G__18428;
i__17920 = G__18429;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__17922){
var map__17923 = p__17922;
var map__17923__$1 = cljs.core.__destructure_map(map__17923);
var msg = map__17923__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17923__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17923__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17924(s__17925){
return (new cljs.core.LazySeq(null,(function (){
var s__17925__$1 = s__17925;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17925__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__17930 = cljs.core.first(xs__6360__auto__);
var map__17930__$1 = cljs.core.__destructure_map(map__17930);
var src = map__17930__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17930__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17930__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__17925__$1,map__17930,map__17930__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17923,map__17923__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17924_$_iter__17926(s__17927){
return (new cljs.core.LazySeq(null,((function (s__17925__$1,map__17930,map__17930__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17923,map__17923__$1,msg,info,reload_info){
return (function (){
var s__17927__$1 = s__17927;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17927__$1);
if(temp__5804__auto____$1){
var s__17927__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17927__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17927__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17929 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17928 = (0);
while(true){
if((i__17928 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__17928);
cljs.core.chunk_append(b__17929,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__18430 = (i__17928 + (1));
i__17928 = G__18430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17929),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17924_$_iter__17926(cljs.core.chunk_rest(s__17927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17929),null);
}
} else {
var warning = cljs.core.first(s__17927__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17924_$_iter__17926(cljs.core.rest(s__17927__$2)));
}
} else {
return null;
}
break;
}
});})(s__17925__$1,map__17930,map__17930__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17923,map__17923__$1,msg,info,reload_info))
,null,null));
});})(s__17925__$1,map__17930,map__17930__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17923,map__17923__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17924(cljs.core.rest(s__17925__$1)));
} else {
var G__18431 = cljs.core.rest(s__17925__$1);
s__17925__$1 = G__18431;
continue;
}
} else {
var G__18432 = cljs.core.rest(s__17925__$1);
s__17925__$1 = G__18432;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__17933_18433 = cljs.core.seq(warnings);
var chunk__17934_18434 = null;
var count__17935_18435 = (0);
var i__17936_18436 = (0);
while(true){
if((i__17936_18436 < count__17935_18435)){
var map__17949_18437 = chunk__17934_18434.cljs$core$IIndexed$_nth$arity$2(null, i__17936_18436);
var map__17949_18438__$1 = cljs.core.__destructure_map(map__17949_18437);
var w_18439 = map__17949_18438__$1;
var msg_18440__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17949_18438__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17949_18438__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17949_18438__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17949_18438__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18443)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18441),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18442),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18440__$1)].join(''));


var G__18444 = seq__17933_18433;
var G__18445 = chunk__17934_18434;
var G__18446 = count__17935_18435;
var G__18447 = (i__17936_18436 + (1));
seq__17933_18433 = G__18444;
chunk__17934_18434 = G__18445;
count__17935_18435 = G__18446;
i__17936_18436 = G__18447;
continue;
} else {
var temp__5804__auto___18448 = cljs.core.seq(seq__17933_18433);
if(temp__5804__auto___18448){
var seq__17933_18449__$1 = temp__5804__auto___18448;
if(cljs.core.chunked_seq_QMARK_(seq__17933_18449__$1)){
var c__5525__auto___18450 = cljs.core.chunk_first(seq__17933_18449__$1);
var G__18451 = cljs.core.chunk_rest(seq__17933_18449__$1);
var G__18452 = c__5525__auto___18450;
var G__18453 = cljs.core.count(c__5525__auto___18450);
var G__18454 = (0);
seq__17933_18433 = G__18451;
chunk__17934_18434 = G__18452;
count__17935_18435 = G__18453;
i__17936_18436 = G__18454;
continue;
} else {
var map__17950_18455 = cljs.core.first(seq__17933_18449__$1);
var map__17950_18456__$1 = cljs.core.__destructure_map(map__17950_18455);
var w_18457 = map__17950_18456__$1;
var msg_18458__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950_18456__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950_18456__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950_18456__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950_18456__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18461)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18459),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18460),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18458__$1)].join(''));


var G__18462 = cljs.core.next(seq__17933_18449__$1);
var G__18463 = null;
var G__18464 = (0);
var G__18465 = (0);
seq__17933_18433 = G__18462;
chunk__17934_18434 = G__18463;
count__17935_18435 = G__18464;
i__17936_18436 = G__18465;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__17921_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__17921_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__17951){
var map__17952 = p__17951;
var map__17952__$1 = cljs.core.__destructure_map(map__17952);
var msg = map__17952__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17952__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17952__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__17953 = cljs.core.seq(updates);
var chunk__17955 = null;
var count__17956 = (0);
var i__17957 = (0);
while(true){
if((i__17957 < count__17956)){
var path = chunk__17955.cljs$core$IIndexed$_nth$arity$2(null, i__17957);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18230_18466 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18234_18467 = null;
var count__18235_18468 = (0);
var i__18236_18469 = (0);
while(true){
if((i__18236_18469 < count__18235_18468)){
var node_18470 = chunk__18234_18467.cljs$core$IIndexed$_nth$arity$2(null, i__18236_18469);
if(cljs.core.not(node_18470.shadow$old)){
var path_match_18471 = shadow.cljs.devtools.client.browser.match_paths(node_18470.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18471)){
var new_link_18472 = (function (){var G__18286 = node_18470.cloneNode(true);
G__18286.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18471),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18286;
})();
(node_18470.shadow$old = true);

(new_link_18472.onload = ((function (seq__18230_18466,chunk__18234_18467,count__18235_18468,i__18236_18469,seq__17953,chunk__17955,count__17956,i__17957,new_link_18472,path_match_18471,node_18470,path,map__17952,map__17952__$1,msg,updates,reload_info){
return (function (e){
var seq__18291_18473 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18293_18474 = null;
var count__18294_18475 = (0);
var i__18295_18476 = (0);
while(true){
if((i__18295_18476 < count__18294_18475)){
var map__18300_18477 = chunk__18293_18474.cljs$core$IIndexed$_nth$arity$2(null, i__18295_18476);
var map__18300_18478__$1 = cljs.core.__destructure_map(map__18300_18477);
var task_18479 = map__18300_18478__$1;
var fn_str_18480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18300_18478__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18300_18478__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18482 = goog.getObjectByName(fn_str_18480,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18481)].join(''));

(fn_obj_18482.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18482.cljs$core$IFn$_invoke$arity$2(path,new_link_18472) : fn_obj_18482.call(null, path,new_link_18472));


var G__18483 = seq__18291_18473;
var G__18484 = chunk__18293_18474;
var G__18485 = count__18294_18475;
var G__18486 = (i__18295_18476 + (1));
seq__18291_18473 = G__18483;
chunk__18293_18474 = G__18484;
count__18294_18475 = G__18485;
i__18295_18476 = G__18486;
continue;
} else {
var temp__5804__auto___18487 = cljs.core.seq(seq__18291_18473);
if(temp__5804__auto___18487){
var seq__18291_18488__$1 = temp__5804__auto___18487;
if(cljs.core.chunked_seq_QMARK_(seq__18291_18488__$1)){
var c__5525__auto___18489 = cljs.core.chunk_first(seq__18291_18488__$1);
var G__18490 = cljs.core.chunk_rest(seq__18291_18488__$1);
var G__18491 = c__5525__auto___18489;
var G__18492 = cljs.core.count(c__5525__auto___18489);
var G__18493 = (0);
seq__18291_18473 = G__18490;
chunk__18293_18474 = G__18491;
count__18294_18475 = G__18492;
i__18295_18476 = G__18493;
continue;
} else {
var map__18301_18494 = cljs.core.first(seq__18291_18488__$1);
var map__18301_18495__$1 = cljs.core.__destructure_map(map__18301_18494);
var task_18496 = map__18301_18495__$1;
var fn_str_18497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18301_18495__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18301_18495__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18499 = goog.getObjectByName(fn_str_18497,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18498)].join(''));

(fn_obj_18499.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18499.cljs$core$IFn$_invoke$arity$2(path,new_link_18472) : fn_obj_18499.call(null, path,new_link_18472));


var G__18500 = cljs.core.next(seq__18291_18488__$1);
var G__18501 = null;
var G__18502 = (0);
var G__18503 = (0);
seq__18291_18473 = G__18500;
chunk__18293_18474 = G__18501;
count__18294_18475 = G__18502;
i__18295_18476 = G__18503;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18470);
});})(seq__18230_18466,chunk__18234_18467,count__18235_18468,i__18236_18469,seq__17953,chunk__17955,count__17956,i__17957,new_link_18472,path_match_18471,node_18470,path,map__17952,map__17952__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18471], 0));

goog.dom.insertSiblingAfter(new_link_18472,node_18470);


var G__18504 = seq__18230_18466;
var G__18505 = chunk__18234_18467;
var G__18506 = count__18235_18468;
var G__18507 = (i__18236_18469 + (1));
seq__18230_18466 = G__18504;
chunk__18234_18467 = G__18505;
count__18235_18468 = G__18506;
i__18236_18469 = G__18507;
continue;
} else {
var G__18508 = seq__18230_18466;
var G__18509 = chunk__18234_18467;
var G__18510 = count__18235_18468;
var G__18511 = (i__18236_18469 + (1));
seq__18230_18466 = G__18508;
chunk__18234_18467 = G__18509;
count__18235_18468 = G__18510;
i__18236_18469 = G__18511;
continue;
}
} else {
var G__18512 = seq__18230_18466;
var G__18513 = chunk__18234_18467;
var G__18514 = count__18235_18468;
var G__18515 = (i__18236_18469 + (1));
seq__18230_18466 = G__18512;
chunk__18234_18467 = G__18513;
count__18235_18468 = G__18514;
i__18236_18469 = G__18515;
continue;
}
} else {
var temp__5804__auto___18516 = cljs.core.seq(seq__18230_18466);
if(temp__5804__auto___18516){
var seq__18230_18517__$1 = temp__5804__auto___18516;
if(cljs.core.chunked_seq_QMARK_(seq__18230_18517__$1)){
var c__5525__auto___18518 = cljs.core.chunk_first(seq__18230_18517__$1);
var G__18519 = cljs.core.chunk_rest(seq__18230_18517__$1);
var G__18520 = c__5525__auto___18518;
var G__18521 = cljs.core.count(c__5525__auto___18518);
var G__18522 = (0);
seq__18230_18466 = G__18519;
chunk__18234_18467 = G__18520;
count__18235_18468 = G__18521;
i__18236_18469 = G__18522;
continue;
} else {
var node_18523 = cljs.core.first(seq__18230_18517__$1);
if(cljs.core.not(node_18523.shadow$old)){
var path_match_18524 = shadow.cljs.devtools.client.browser.match_paths(node_18523.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18524)){
var new_link_18525 = (function (){var G__18304 = node_18523.cloneNode(true);
G__18304.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18524),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18304;
})();
(node_18523.shadow$old = true);

(new_link_18525.onload = ((function (seq__18230_18466,chunk__18234_18467,count__18235_18468,i__18236_18469,seq__17953,chunk__17955,count__17956,i__17957,new_link_18525,path_match_18524,node_18523,seq__18230_18517__$1,temp__5804__auto___18516,path,map__17952,map__17952__$1,msg,updates,reload_info){
return (function (e){
var seq__18305_18526 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18307_18527 = null;
var count__18308_18528 = (0);
var i__18309_18529 = (0);
while(true){
if((i__18309_18529 < count__18308_18528)){
var map__18325_18530 = chunk__18307_18527.cljs$core$IIndexed$_nth$arity$2(null, i__18309_18529);
var map__18325_18531__$1 = cljs.core.__destructure_map(map__18325_18530);
var task_18532 = map__18325_18531__$1;
var fn_str_18533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18325_18531__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18325_18531__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18535 = goog.getObjectByName(fn_str_18533,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18534)].join(''));

(fn_obj_18535.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18535.cljs$core$IFn$_invoke$arity$2(path,new_link_18525) : fn_obj_18535.call(null, path,new_link_18525));


var G__18536 = seq__18305_18526;
var G__18537 = chunk__18307_18527;
var G__18538 = count__18308_18528;
var G__18539 = (i__18309_18529 + (1));
seq__18305_18526 = G__18536;
chunk__18307_18527 = G__18537;
count__18308_18528 = G__18538;
i__18309_18529 = G__18539;
continue;
} else {
var temp__5804__auto___18540__$1 = cljs.core.seq(seq__18305_18526);
if(temp__5804__auto___18540__$1){
var seq__18305_18541__$1 = temp__5804__auto___18540__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18305_18541__$1)){
var c__5525__auto___18542 = cljs.core.chunk_first(seq__18305_18541__$1);
var G__18543 = cljs.core.chunk_rest(seq__18305_18541__$1);
var G__18544 = c__5525__auto___18542;
var G__18545 = cljs.core.count(c__5525__auto___18542);
var G__18546 = (0);
seq__18305_18526 = G__18543;
chunk__18307_18527 = G__18544;
count__18308_18528 = G__18545;
i__18309_18529 = G__18546;
continue;
} else {
var map__18326_18547 = cljs.core.first(seq__18305_18541__$1);
var map__18326_18548__$1 = cljs.core.__destructure_map(map__18326_18547);
var task_18549 = map__18326_18548__$1;
var fn_str_18550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18326_18548__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18326_18548__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18552 = goog.getObjectByName(fn_str_18550,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18551)].join(''));

(fn_obj_18552.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18552.cljs$core$IFn$_invoke$arity$2(path,new_link_18525) : fn_obj_18552.call(null, path,new_link_18525));


var G__18553 = cljs.core.next(seq__18305_18541__$1);
var G__18554 = null;
var G__18555 = (0);
var G__18556 = (0);
seq__18305_18526 = G__18553;
chunk__18307_18527 = G__18554;
count__18308_18528 = G__18555;
i__18309_18529 = G__18556;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18523);
});})(seq__18230_18466,chunk__18234_18467,count__18235_18468,i__18236_18469,seq__17953,chunk__17955,count__17956,i__17957,new_link_18525,path_match_18524,node_18523,seq__18230_18517__$1,temp__5804__auto___18516,path,map__17952,map__17952__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18524], 0));

goog.dom.insertSiblingAfter(new_link_18525,node_18523);


var G__18557 = cljs.core.next(seq__18230_18517__$1);
var G__18558 = null;
var G__18559 = (0);
var G__18560 = (0);
seq__18230_18466 = G__18557;
chunk__18234_18467 = G__18558;
count__18235_18468 = G__18559;
i__18236_18469 = G__18560;
continue;
} else {
var G__18561 = cljs.core.next(seq__18230_18517__$1);
var G__18562 = null;
var G__18563 = (0);
var G__18564 = (0);
seq__18230_18466 = G__18561;
chunk__18234_18467 = G__18562;
count__18235_18468 = G__18563;
i__18236_18469 = G__18564;
continue;
}
} else {
var G__18565 = cljs.core.next(seq__18230_18517__$1);
var G__18566 = null;
var G__18567 = (0);
var G__18568 = (0);
seq__18230_18466 = G__18565;
chunk__18234_18467 = G__18566;
count__18235_18468 = G__18567;
i__18236_18469 = G__18568;
continue;
}
}
} else {
}
}
break;
}


var G__18569 = seq__17953;
var G__18570 = chunk__17955;
var G__18571 = count__17956;
var G__18572 = (i__17957 + (1));
seq__17953 = G__18569;
chunk__17955 = G__18570;
count__17956 = G__18571;
i__17957 = G__18572;
continue;
} else {
var G__18573 = seq__17953;
var G__18574 = chunk__17955;
var G__18575 = count__17956;
var G__18576 = (i__17957 + (1));
seq__17953 = G__18573;
chunk__17955 = G__18574;
count__17956 = G__18575;
i__17957 = G__18576;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17953);
if(temp__5804__auto__){
var seq__17953__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17953__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17953__$1);
var G__18577 = cljs.core.chunk_rest(seq__17953__$1);
var G__18578 = c__5525__auto__;
var G__18579 = cljs.core.count(c__5525__auto__);
var G__18580 = (0);
seq__17953 = G__18577;
chunk__17955 = G__18578;
count__17956 = G__18579;
i__17957 = G__18580;
continue;
} else {
var path = cljs.core.first(seq__17953__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18327_18581 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18331_18582 = null;
var count__18332_18583 = (0);
var i__18333_18584 = (0);
while(true){
if((i__18333_18584 < count__18332_18583)){
var node_18585 = chunk__18331_18582.cljs$core$IIndexed$_nth$arity$2(null, i__18333_18584);
if(cljs.core.not(node_18585.shadow$old)){
var path_match_18586 = shadow.cljs.devtools.client.browser.match_paths(node_18585.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18586)){
var new_link_18587 = (function (){var G__18359 = node_18585.cloneNode(true);
G__18359.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18586),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18359;
})();
(node_18585.shadow$old = true);

(new_link_18587.onload = ((function (seq__18327_18581,chunk__18331_18582,count__18332_18583,i__18333_18584,seq__17953,chunk__17955,count__17956,i__17957,new_link_18587,path_match_18586,node_18585,path,seq__17953__$1,temp__5804__auto__,map__17952,map__17952__$1,msg,updates,reload_info){
return (function (e){
var seq__18360_18588 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18362_18589 = null;
var count__18363_18590 = (0);
var i__18364_18591 = (0);
while(true){
if((i__18364_18591 < count__18363_18590)){
var map__18368_18592 = chunk__18362_18589.cljs$core$IIndexed$_nth$arity$2(null, i__18364_18591);
var map__18368_18593__$1 = cljs.core.__destructure_map(map__18368_18592);
var task_18594 = map__18368_18593__$1;
var fn_str_18595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18368_18593__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18368_18593__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18597 = goog.getObjectByName(fn_str_18595,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18596)].join(''));

(fn_obj_18597.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18597.cljs$core$IFn$_invoke$arity$2(path,new_link_18587) : fn_obj_18597.call(null, path,new_link_18587));


var G__18598 = seq__18360_18588;
var G__18599 = chunk__18362_18589;
var G__18600 = count__18363_18590;
var G__18601 = (i__18364_18591 + (1));
seq__18360_18588 = G__18598;
chunk__18362_18589 = G__18599;
count__18363_18590 = G__18600;
i__18364_18591 = G__18601;
continue;
} else {
var temp__5804__auto___18602__$1 = cljs.core.seq(seq__18360_18588);
if(temp__5804__auto___18602__$1){
var seq__18360_18603__$1 = temp__5804__auto___18602__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18360_18603__$1)){
var c__5525__auto___18604 = cljs.core.chunk_first(seq__18360_18603__$1);
var G__18605 = cljs.core.chunk_rest(seq__18360_18603__$1);
var G__18606 = c__5525__auto___18604;
var G__18607 = cljs.core.count(c__5525__auto___18604);
var G__18608 = (0);
seq__18360_18588 = G__18605;
chunk__18362_18589 = G__18606;
count__18363_18590 = G__18607;
i__18364_18591 = G__18608;
continue;
} else {
var map__18369_18609 = cljs.core.first(seq__18360_18603__$1);
var map__18369_18610__$1 = cljs.core.__destructure_map(map__18369_18609);
var task_18611 = map__18369_18610__$1;
var fn_str_18612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18369_18610__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18369_18610__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18614 = goog.getObjectByName(fn_str_18612,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18613)].join(''));

(fn_obj_18614.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18614.cljs$core$IFn$_invoke$arity$2(path,new_link_18587) : fn_obj_18614.call(null, path,new_link_18587));


var G__18615 = cljs.core.next(seq__18360_18603__$1);
var G__18616 = null;
var G__18617 = (0);
var G__18618 = (0);
seq__18360_18588 = G__18615;
chunk__18362_18589 = G__18616;
count__18363_18590 = G__18617;
i__18364_18591 = G__18618;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18585);
});})(seq__18327_18581,chunk__18331_18582,count__18332_18583,i__18333_18584,seq__17953,chunk__17955,count__17956,i__17957,new_link_18587,path_match_18586,node_18585,path,seq__17953__$1,temp__5804__auto__,map__17952,map__17952__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18586], 0));

goog.dom.insertSiblingAfter(new_link_18587,node_18585);


var G__18619 = seq__18327_18581;
var G__18620 = chunk__18331_18582;
var G__18621 = count__18332_18583;
var G__18622 = (i__18333_18584 + (1));
seq__18327_18581 = G__18619;
chunk__18331_18582 = G__18620;
count__18332_18583 = G__18621;
i__18333_18584 = G__18622;
continue;
} else {
var G__18623 = seq__18327_18581;
var G__18624 = chunk__18331_18582;
var G__18625 = count__18332_18583;
var G__18626 = (i__18333_18584 + (1));
seq__18327_18581 = G__18623;
chunk__18331_18582 = G__18624;
count__18332_18583 = G__18625;
i__18333_18584 = G__18626;
continue;
}
} else {
var G__18627 = seq__18327_18581;
var G__18628 = chunk__18331_18582;
var G__18629 = count__18332_18583;
var G__18630 = (i__18333_18584 + (1));
seq__18327_18581 = G__18627;
chunk__18331_18582 = G__18628;
count__18332_18583 = G__18629;
i__18333_18584 = G__18630;
continue;
}
} else {
var temp__5804__auto___18631__$1 = cljs.core.seq(seq__18327_18581);
if(temp__5804__auto___18631__$1){
var seq__18327_18632__$1 = temp__5804__auto___18631__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18327_18632__$1)){
var c__5525__auto___18633 = cljs.core.chunk_first(seq__18327_18632__$1);
var G__18634 = cljs.core.chunk_rest(seq__18327_18632__$1);
var G__18635 = c__5525__auto___18633;
var G__18636 = cljs.core.count(c__5525__auto___18633);
var G__18637 = (0);
seq__18327_18581 = G__18634;
chunk__18331_18582 = G__18635;
count__18332_18583 = G__18636;
i__18333_18584 = G__18637;
continue;
} else {
var node_18638 = cljs.core.first(seq__18327_18632__$1);
if(cljs.core.not(node_18638.shadow$old)){
var path_match_18639 = shadow.cljs.devtools.client.browser.match_paths(node_18638.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18639)){
var new_link_18640 = (function (){var G__18370 = node_18638.cloneNode(true);
G__18370.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18639),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18370;
})();
(node_18638.shadow$old = true);

(new_link_18640.onload = ((function (seq__18327_18581,chunk__18331_18582,count__18332_18583,i__18333_18584,seq__17953,chunk__17955,count__17956,i__17957,new_link_18640,path_match_18639,node_18638,seq__18327_18632__$1,temp__5804__auto___18631__$1,path,seq__17953__$1,temp__5804__auto__,map__17952,map__17952__$1,msg,updates,reload_info){
return (function (e){
var seq__18371_18641 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18373_18642 = null;
var count__18374_18643 = (0);
var i__18375_18644 = (0);
while(true){
if((i__18375_18644 < count__18374_18643)){
var map__18379_18645 = chunk__18373_18642.cljs$core$IIndexed$_nth$arity$2(null, i__18375_18644);
var map__18379_18646__$1 = cljs.core.__destructure_map(map__18379_18645);
var task_18647 = map__18379_18646__$1;
var fn_str_18648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18379_18646__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18379_18646__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18650 = goog.getObjectByName(fn_str_18648,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18649)].join(''));

(fn_obj_18650.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18650.cljs$core$IFn$_invoke$arity$2(path,new_link_18640) : fn_obj_18650.call(null, path,new_link_18640));


var G__18651 = seq__18371_18641;
var G__18652 = chunk__18373_18642;
var G__18653 = count__18374_18643;
var G__18654 = (i__18375_18644 + (1));
seq__18371_18641 = G__18651;
chunk__18373_18642 = G__18652;
count__18374_18643 = G__18653;
i__18375_18644 = G__18654;
continue;
} else {
var temp__5804__auto___18655__$2 = cljs.core.seq(seq__18371_18641);
if(temp__5804__auto___18655__$2){
var seq__18371_18656__$1 = temp__5804__auto___18655__$2;
if(cljs.core.chunked_seq_QMARK_(seq__18371_18656__$1)){
var c__5525__auto___18657 = cljs.core.chunk_first(seq__18371_18656__$1);
var G__18658 = cljs.core.chunk_rest(seq__18371_18656__$1);
var G__18659 = c__5525__auto___18657;
var G__18660 = cljs.core.count(c__5525__auto___18657);
var G__18661 = (0);
seq__18371_18641 = G__18658;
chunk__18373_18642 = G__18659;
count__18374_18643 = G__18660;
i__18375_18644 = G__18661;
continue;
} else {
var map__18380_18662 = cljs.core.first(seq__18371_18656__$1);
var map__18380_18663__$1 = cljs.core.__destructure_map(map__18380_18662);
var task_18664 = map__18380_18663__$1;
var fn_str_18665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18380_18663__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18380_18663__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18667 = goog.getObjectByName(fn_str_18665,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18666)].join(''));

(fn_obj_18667.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18667.cljs$core$IFn$_invoke$arity$2(path,new_link_18640) : fn_obj_18667.call(null, path,new_link_18640));


var G__18668 = cljs.core.next(seq__18371_18656__$1);
var G__18669 = null;
var G__18670 = (0);
var G__18671 = (0);
seq__18371_18641 = G__18668;
chunk__18373_18642 = G__18669;
count__18374_18643 = G__18670;
i__18375_18644 = G__18671;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18638);
});})(seq__18327_18581,chunk__18331_18582,count__18332_18583,i__18333_18584,seq__17953,chunk__17955,count__17956,i__17957,new_link_18640,path_match_18639,node_18638,seq__18327_18632__$1,temp__5804__auto___18631__$1,path,seq__17953__$1,temp__5804__auto__,map__17952,map__17952__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18639], 0));

goog.dom.insertSiblingAfter(new_link_18640,node_18638);


var G__18672 = cljs.core.next(seq__18327_18632__$1);
var G__18673 = null;
var G__18674 = (0);
var G__18675 = (0);
seq__18327_18581 = G__18672;
chunk__18331_18582 = G__18673;
count__18332_18583 = G__18674;
i__18333_18584 = G__18675;
continue;
} else {
var G__18676 = cljs.core.next(seq__18327_18632__$1);
var G__18677 = null;
var G__18678 = (0);
var G__18679 = (0);
seq__18327_18581 = G__18676;
chunk__18331_18582 = G__18677;
count__18332_18583 = G__18678;
i__18333_18584 = G__18679;
continue;
}
} else {
var G__18680 = cljs.core.next(seq__18327_18632__$1);
var G__18681 = null;
var G__18682 = (0);
var G__18683 = (0);
seq__18327_18581 = G__18680;
chunk__18331_18582 = G__18681;
count__18332_18583 = G__18682;
i__18333_18584 = G__18683;
continue;
}
}
} else {
}
}
break;
}


var G__18684 = cljs.core.next(seq__17953__$1);
var G__18685 = null;
var G__18686 = (0);
var G__18687 = (0);
seq__17953 = G__18684;
chunk__17955 = G__18685;
count__17956 = G__18686;
i__17957 = G__18687;
continue;
} else {
var G__18688 = cljs.core.next(seq__17953__$1);
var G__18689 = null;
var G__18690 = (0);
var G__18691 = (0);
seq__17953 = G__18688;
chunk__17955 = G__18689;
count__17956 = G__18690;
i__17957 = G__18691;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__18381){
var map__18382 = p__18381;
var map__18382__$1 = cljs.core.__destructure_map(map__18382);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18382__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__18383,done,error){
var map__18384 = p__18383;
var map__18384__$1 = cljs.core.__destructure_map(map__18384);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18384__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__18385,done,error){
var map__18386 = p__18385;
var map__18386__$1 = cljs.core.__destructure_map(map__18386);
var msg = map__18386__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18386__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18386__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18386__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__18387){
var map__18388 = p__18387;
var map__18388__$1 = cljs.core.__destructure_map(map__18388);
var src = map__18388__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18388__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__18389 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__18389) : done.call(null, G__18389));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__18390){
var map__18391 = p__18390;
var map__18391__$1 = cljs.core.__destructure_map(map__18391);
var msg__$1 = map__18391__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18391__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e18392){var ex = e18392;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__18393){
var map__18394 = p__18393;
var map__18394__$1 = cljs.core.__destructure_map(map__18394);
var env = map__18394__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18394__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__18395){
var map__18396 = p__18395;
var map__18396__$1 = cljs.core.__destructure_map(map__18396);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18396__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18396__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__18397){
var map__18398 = p__18397;
var map__18398__$1 = cljs.core.__destructure_map(map__18398);
var svc = map__18398__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18398__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
