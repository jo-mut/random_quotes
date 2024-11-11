goog.provide('random_quotes.frontend.core');
random_quotes.frontend.core.app = (function random_quotes$frontend$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"w-full h-[100h] flex justify-center items-center text-center"], null),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"w-[500] flex justify-center items-center text-center"], null)], null);
});
random_quotes.frontend.core.init = (function random_quotes$frontend$core$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [random_quotes.frontend.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('random_quotes.frontend.core.init', random_quotes.frontend.core.init);

//# sourceMappingURL=random_quotes.frontend.core.js.map
