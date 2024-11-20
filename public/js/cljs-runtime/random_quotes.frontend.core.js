goog.provide('random_quotes.frontend.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
random_quotes.frontend.core.fetched_advice = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
random_quotes.frontend.core.quote = (function random_quotes$frontend$core$quote(advice){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-5 text-blue-500"], null),advice], null);
});
random_quotes.frontend.core.fetch_api_data = (function random_quotes$frontend$core$fetch_api_data(){
if((cljs.core.deref(random_quotes.frontend.core.fetched_advice) == null)){
return fetch("https://api.adviceslip.com/advice").then((function (response){
return response.json();
})).then((function (data){
return cljs.core.reset_BANG_(random_quotes.frontend.core.fetched_advice,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data));
})).catch((function (error){
return console.log("Error fetching API data:",error);
}));
} else {
return null;
}
});
random_quotes.frontend.core.app = (function random_quotes$frontend$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center h-screen bg-custom-bg \n                 bg-test-color bg-cover bg-center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center justify-center p-10 bg-white shadow-lg \n                  rounded-2xl h-[200px] w-[600px]"], null),(cljs.core.truth_(cljs.core.deref(random_quotes.frontend.core.fetched_advice))?(function (){var response = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(random_quotes.frontend.core.fetched_advice));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Quote",cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,"slip"),new cljs.core.Keyword(null,"advice","advice",-2107669329))], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [random_quotes.frontend.core.quote,cljs.core.deref(random_quotes.frontend.core.fetched_advice)], null);
})():null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-6 py-3 bg-[orangered] text-white rounded-md focus:outline-none \n                      focus:ring-2 focus:ring-indigo-500 active:bg-[orangered]",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return random_quotes.frontend.core.fetch_api_data();
})], null),"GIVE ME ADVICE"], null)], null)], null);
});
random_quotes.frontend.core.init = (function random_quotes$frontend$core$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [random_quotes.frontend.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('random_quotes.frontend.core.init', random_quotes.frontend.core.init);

//# sourceMappingURL=random_quotes.frontend.core.js.map
