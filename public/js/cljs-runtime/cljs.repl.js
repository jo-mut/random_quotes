goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15808){
var map__15809 = p__15808;
var map__15809__$1 = cljs.core.__destructure_map(map__15809);
var m = map__15809__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15809__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15809__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15824_16191 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15825_16192 = null;
var count__15826_16193 = (0);
var i__15827_16194 = (0);
while(true){
if((i__15827_16194 < count__15826_16193)){
var f_16195 = chunk__15825_16192.cljs$core$IIndexed$_nth$arity$2(null, i__15827_16194);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_16195], 0));


var G__16196 = seq__15824_16191;
var G__16197 = chunk__15825_16192;
var G__16198 = count__15826_16193;
var G__16199 = (i__15827_16194 + (1));
seq__15824_16191 = G__16196;
chunk__15825_16192 = G__16197;
count__15826_16193 = G__16198;
i__15827_16194 = G__16199;
continue;
} else {
var temp__5804__auto___16200 = cljs.core.seq(seq__15824_16191);
if(temp__5804__auto___16200){
var seq__15824_16201__$1 = temp__5804__auto___16200;
if(cljs.core.chunked_seq_QMARK_(seq__15824_16201__$1)){
var c__5525__auto___16202 = cljs.core.chunk_first(seq__15824_16201__$1);
var G__16204 = cljs.core.chunk_rest(seq__15824_16201__$1);
var G__16205 = c__5525__auto___16202;
var G__16206 = cljs.core.count(c__5525__auto___16202);
var G__16207 = (0);
seq__15824_16191 = G__16204;
chunk__15825_16192 = G__16205;
count__15826_16193 = G__16206;
i__15827_16194 = G__16207;
continue;
} else {
var f_16208 = cljs.core.first(seq__15824_16201__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_16208], 0));


var G__16210 = cljs.core.next(seq__15824_16201__$1);
var G__16211 = null;
var G__16212 = (0);
var G__16213 = (0);
seq__15824_16191 = G__16210;
chunk__15825_16192 = G__16211;
count__15826_16193 = G__16212;
i__15827_16194 = G__16213;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16215 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_16215], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_16215)))?cljs.core.second(arglists_16215):arglists_16215)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15849_16233 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15850_16234 = null;
var count__15851_16235 = (0);
var i__15852_16236 = (0);
while(true){
if((i__15852_16236 < count__15851_16235)){
var vec__15874_16237 = chunk__15850_16234.cljs$core$IIndexed$_nth$arity$2(null, i__15852_16236);
var name_16238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15874_16237,(0),null);
var map__15877_16239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15874_16237,(1),null);
var map__15877_16240__$1 = cljs.core.__destructure_map(map__15877_16239);
var doc_16241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15877_16240__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15877_16240__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_16238], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_16242], 0));

if(cljs.core.truth_(doc_16241)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_16241], 0));
} else {
}


var G__16248 = seq__15849_16233;
var G__16249 = chunk__15850_16234;
var G__16250 = count__15851_16235;
var G__16251 = (i__15852_16236 + (1));
seq__15849_16233 = G__16248;
chunk__15850_16234 = G__16249;
count__15851_16235 = G__16250;
i__15852_16236 = G__16251;
continue;
} else {
var temp__5804__auto___16253 = cljs.core.seq(seq__15849_16233);
if(temp__5804__auto___16253){
var seq__15849_16254__$1 = temp__5804__auto___16253;
if(cljs.core.chunked_seq_QMARK_(seq__15849_16254__$1)){
var c__5525__auto___16255 = cljs.core.chunk_first(seq__15849_16254__$1);
var G__16256 = cljs.core.chunk_rest(seq__15849_16254__$1);
var G__16257 = c__5525__auto___16255;
var G__16258 = cljs.core.count(c__5525__auto___16255);
var G__16259 = (0);
seq__15849_16233 = G__16256;
chunk__15850_16234 = G__16257;
count__15851_16235 = G__16258;
i__15852_16236 = G__16259;
continue;
} else {
var vec__15881_16260 = cljs.core.first(seq__15849_16254__$1);
var name_16261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15881_16260,(0),null);
var map__15884_16262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15881_16260,(1),null);
var map__15884_16263__$1 = cljs.core.__destructure_map(map__15884_16262);
var doc_16264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15884_16263__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15884_16263__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_16261], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_16265], 0));

if(cljs.core.truth_(doc_16264)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_16264], 0));
} else {
}


var G__16268 = cljs.core.next(seq__15849_16254__$1);
var G__16269 = null;
var G__16270 = (0);
var G__16271 = (0);
seq__15849_16233 = G__16268;
chunk__15850_16234 = G__16269;
count__15851_16235 = G__16270;
i__15852_16236 = G__16271;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__15893 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15894 = null;
var count__15895 = (0);
var i__15896 = (0);
while(true){
if((i__15896 < count__15895)){
var role = chunk__15894.cljs$core$IIndexed$_nth$arity$2(null, i__15896);
var temp__5804__auto___16275__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___16275__$1)){
var spec_16279 = temp__5804__auto___16275__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_16279)], 0));
} else {
}


var G__16280 = seq__15893;
var G__16281 = chunk__15894;
var G__16282 = count__15895;
var G__16283 = (i__15896 + (1));
seq__15893 = G__16280;
chunk__15894 = G__16281;
count__15895 = G__16282;
i__15896 = G__16283;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__15893);
if(temp__5804__auto____$1){
var seq__15893__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__15893__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15893__$1);
var G__16284 = cljs.core.chunk_rest(seq__15893__$1);
var G__16285 = c__5525__auto__;
var G__16286 = cljs.core.count(c__5525__auto__);
var G__16287 = (0);
seq__15893 = G__16284;
chunk__15894 = G__16285;
count__15895 = G__16286;
i__15896 = G__16287;
continue;
} else {
var role = cljs.core.first(seq__15893__$1);
var temp__5804__auto___16292__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___16292__$2)){
var spec_16293 = temp__5804__auto___16292__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_16293)], 0));
} else {
}


var G__16295 = cljs.core.next(seq__15893__$1);
var G__16296 = null;
var G__16297 = (0);
var G__16298 = (0);
seq__15893 = G__16295;
chunk__15894 = G__16296;
count__15895 = G__16297;
i__15896 = G__16298;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__15932 = datafied_throwable;
var map__15932__$1 = cljs.core.__destructure_map(map__15932);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15932__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15932__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15932__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__15933 = cljs.core.last(via);
var map__15933__$1 = cljs.core.__destructure_map(map__15933);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15933__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15933__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15933__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__15934 = data;
var map__15934__$1 = cljs.core.__destructure_map(map__15934);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15934__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15934__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15934__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__15935 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__15935__$1 = cljs.core.__destructure_map(map__15935);
var top_data = map__15935__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15935__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__15936 = phase;
var G__15936__$1 = (((G__15936 instanceof cljs.core.Keyword))?G__15936.fqn:null);
switch (G__15936__$1) {
case "read-source":
var map__15939 = data;
var map__15939__$1 = cljs.core.__destructure_map(map__15939);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15939__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15939__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__15940 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__15940__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15940,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15940);
var G__15940__$2 = (cljs.core.truth_((function (){var fexpr__15948 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__15948.cljs$core$IFn$_invoke$arity$1 ? fexpr__15948.cljs$core$IFn$_invoke$arity$1(source) : fexpr__15948.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15940__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15940__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15940__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15940__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__15955 = top_data;
var G__15955__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15955,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15955);
var G__15955__$2 = (cljs.core.truth_((function (){var fexpr__15960 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__15960.cljs$core$IFn$_invoke$arity$1 ? fexpr__15960.cljs$core$IFn$_invoke$arity$1(source) : fexpr__15960.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15955__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15955__$1);
var G__15955__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15955__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15955__$2);
var G__15955__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15955__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15955__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15955__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15955__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__15981 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15981,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15981,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15981,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15981,(3),null);
var G__15986 = top_data;
var G__15986__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15986,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__15986);
var G__15986__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15986__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__15986__$1);
var G__15986__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15986__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__15986__$2);
var G__15986__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15986__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15986__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15986__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15986__$4;
}

break;
case "execution":
var vec__15999 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15999,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15999,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15999,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15999,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__15925_SHARP_){
var or__5002__auto__ = (p1__15925_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__16009 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__16009.cljs$core$IFn$_invoke$arity$1 ? fexpr__16009.cljs$core$IFn$_invoke$arity$1(p1__15925_SHARP_) : fexpr__16009.call(null, p1__15925_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__16019 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__16019__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16019,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__16019);
var G__16019__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16019__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16019__$1);
var G__16019__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16019__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__16019__$2);
var G__16019__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16019__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__16019__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16019__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16019__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15936__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__16074){
var map__16076 = p__16074;
var map__16076__$1 = cljs.core.__destructure_map(map__16076);
var triage_data = map__16076__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__16112 = phase;
var G__16112__$1 = (((G__16112 instanceof cljs.core.Keyword))?G__16112.fqn:null);
switch (G__16112__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__16120 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__16121 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16122 = loc;
var G__16123 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16130_16344 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16131_16345 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16132_16346 = true;
var _STAR_print_fn_STAR__temp_val__16133_16347 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16132_16346);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16133_16347);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16060_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16060_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16131_16345);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16130_16344);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__16120,G__16121,G__16122,G__16123) : format.call(null, G__16120,G__16121,G__16122,G__16123));

break;
case "macroexpansion":
var G__16138 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__16139 = cause_type;
var G__16140 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16141 = loc;
var G__16142 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16138,G__16139,G__16140,G__16141,G__16142) : format.call(null, G__16138,G__16139,G__16140,G__16141,G__16142));

break;
case "compile-syntax-check":
var G__16144 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__16145 = cause_type;
var G__16146 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16147 = loc;
var G__16148 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16144,G__16145,G__16146,G__16147,G__16148) : format.call(null, G__16144,G__16145,G__16146,G__16147,G__16148));

break;
case "compilation":
var G__16152 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__16153 = cause_type;
var G__16154 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16155 = loc;
var G__16156 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16152,G__16153,G__16154,G__16155,G__16156) : format.call(null, G__16152,G__16153,G__16154,G__16155,G__16156));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__16159 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__16160 = symbol;
var G__16161 = loc;
var G__16162 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16163_16366 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16165_16367 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16166_16368 = true;
var _STAR_print_fn_STAR__temp_val__16167_16369 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16166_16368);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16167_16369);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16072_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16072_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16165_16367);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16163_16366);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__16159,G__16160,G__16161,G__16162) : format.call(null, G__16159,G__16160,G__16161,G__16162));
} else {
var G__16172 = "Execution error%s at %s(%s).\n%s\n";
var G__16173 = cause_type;
var G__16174 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16175 = loc;
var G__16176 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16172,G__16173,G__16174,G__16175,G__16176) : format.call(null, G__16172,G__16173,G__16174,G__16175,G__16176));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16112__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
