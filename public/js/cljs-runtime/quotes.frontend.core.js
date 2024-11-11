goog.provide('quotes.frontend.core');
quotes.frontend.core.app = (function quotes$frontend$core$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"App works well"], null);
});
quotes.frontend.core.init = (function quotes$frontend$core$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quotes.frontend.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('quotes.frontend.core.init', quotes.frontend.core.init);

//# sourceMappingURL=quotes.frontend.core.js.map
