goog.provide('random_quotes.frontend.core');
random_quotes.frontend.core.quote = (function random_quotes$frontend$core$quote(advice){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-5 text-blue-500"], null),advice], null);
});
random_quotes.frontend.core.app = (function random_quotes$frontend$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center h-screen bg-custom-bg \n                 bg-test-color bg-cover bg-center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center justify-center p-10 bg-white shadow-lg \n                  rounded-2xl h-[200px] w-[600px]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [random_quotes.frontend.core.quote,"Here we will show the quote"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-6 py-3 bg-[orangered] text-white rounded-md focus:outline-none \n                      focus:ring-2 focus:ring-indigo-500 active:bg-[orangered]"], null),"GIVE ME ADVICE"], null)], null)], null);
});
random_quotes.frontend.core.init = (function random_quotes$frontend$core$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [random_quotes.frontend.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('random_quotes.frontend.core.init', random_quotes.frontend.core.init);

//# sourceMappingURL=random_quotes.frontend.core.js.map
