goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12950 = (function (f,blockable,meta12951){
this.f = f;
this.blockable = blockable;
this.meta12951 = meta12951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12952,meta12951__$1){
var self__ = this;
var _12952__$1 = this;
return (new cljs.core.async.t_cljs$core$async12950(self__.f,self__.blockable,meta12951__$1));
}));

(cljs.core.async.t_cljs$core$async12950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12952){
var self__ = this;
var _12952__$1 = this;
return self__.meta12951;
}));

(cljs.core.async.t_cljs$core$async12950.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12950.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12950.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async12950.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async12950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12951","meta12951",-1700716402,null)], null);
}));

(cljs.core.async.t_cljs$core$async12950.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12950");

(cljs.core.async.t_cljs$core$async12950.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async12950");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12950.
 */
cljs.core.async.__GT_t_cljs$core$async12950 = (function cljs$core$async$__GT_t_cljs$core$async12950(f,blockable,meta12951){
return (new cljs.core.async.t_cljs$core$async12950(f,blockable,meta12951));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12947 = arguments.length;
switch (G__12947) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async12950(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__12977 = arguments.length;
switch (G__12977) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__12986 = arguments.length;
switch (G__12986) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__12994 = arguments.length;
switch (G__12994) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15507 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15507) : fn1.call(null, val_15507));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15507) : fn1.call(null, val_15507));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__12996 = arguments.length;
switch (G__12996) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___15509 = n;
var x_15510 = (0);
while(true){
if((x_15510 < n__5593__auto___15509)){
(a[x_15510] = x_15510);

var G__15511 = (x_15510 + (1));
x_15510 = G__15511;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13002 = (function (flag,meta13003){
this.flag = flag;
this.meta13003 = meta13003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13004,meta13003__$1){
var self__ = this;
var _13004__$1 = this;
return (new cljs.core.async.t_cljs$core$async13002(self__.flag,meta13003__$1));
}));

(cljs.core.async.t_cljs$core$async13002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13004){
var self__ = this;
var _13004__$1 = this;
return self__.meta13003;
}));

(cljs.core.async.t_cljs$core$async13002.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13002.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13003","meta13003",-238698991,null)], null);
}));

(cljs.core.async.t_cljs$core$async13002.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13002");

(cljs.core.async.t_cljs$core$async13002.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13002");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13002.
 */
cljs.core.async.__GT_t_cljs$core$async13002 = (function cljs$core$async$__GT_t_cljs$core$async13002(flag,meta13003){
return (new cljs.core.async.t_cljs$core$async13002(flag,meta13003));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13002(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13007 = (function (flag,cb,meta13008){
this.flag = flag;
this.cb = cb;
this.meta13008 = meta13008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13009,meta13008__$1){
var self__ = this;
var _13009__$1 = this;
return (new cljs.core.async.t_cljs$core$async13007(self__.flag,self__.cb,meta13008__$1));
}));

(cljs.core.async.t_cljs$core$async13007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13009){
var self__ = this;
var _13009__$1 = this;
return self__.meta13008;
}));

(cljs.core.async.t_cljs$core$async13007.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13007.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13007.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13007.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13008","meta13008",14605873,null)], null);
}));

(cljs.core.async.t_cljs$core$async13007.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13007");

(cljs.core.async.t_cljs$core$async13007.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13007");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13007.
 */
cljs.core.async.__GT_t_cljs$core$async13007 = (function cljs$core$async$__GT_t_cljs$core$async13007(flag,cb,meta13008){
return (new cljs.core.async.t_cljs$core$async13007(flag,cb,meta13008));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13007(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13018_SHARP_){
var G__13024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13018_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13024) : fret.call(null, G__13024));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13020_SHARP_){
var G__13026 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13020_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13026) : fret.call(null, G__13026));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15525 = (i + (1));
i = G__15525;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15526 = arguments.length;
var i__5727__auto___15527 = (0);
while(true){
if((i__5727__auto___15527 < len__5726__auto___15526)){
args__5732__auto__.push((arguments[i__5727__auto___15527]));

var G__15531 = (i__5727__auto___15527 + (1));
i__5727__auto___15527 = G__15531;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13031){
var map__13032 = p__13031;
var map__13032__$1 = cljs.core.__destructure_map(map__13032);
var opts = map__13032__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13028){
var G__13029 = cljs.core.first(seq13028);
var seq13028__$1 = cljs.core.next(seq13028);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13029,seq13028__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13038 = arguments.length;
switch (G__13038) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12797__auto___15535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_13071){
var state_val_13072 = (state_13071[(1)]);
if((state_val_13072 === (7))){
var inst_13066 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
var statearr_13078_15536 = state_13071__$1;
(statearr_13078_15536[(2)] = inst_13066);

(statearr_13078_15536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (1))){
var state_13071__$1 = state_13071;
var statearr_13079_15537 = state_13071__$1;
(statearr_13079_15537[(2)] = null);

(statearr_13079_15537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (4))){
var inst_13047 = (state_13071[(7)]);
var inst_13047__$1 = (state_13071[(2)]);
var inst_13050 = (inst_13047__$1 == null);
var state_13071__$1 = (function (){var statearr_13081 = state_13071;
(statearr_13081[(7)] = inst_13047__$1);

return statearr_13081;
})();
if(cljs.core.truth_(inst_13050)){
var statearr_13082_15539 = state_13071__$1;
(statearr_13082_15539[(1)] = (5));

} else {
var statearr_13083_15540 = state_13071__$1;
(statearr_13083_15540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (13))){
var state_13071__$1 = state_13071;
var statearr_13084_15544 = state_13071__$1;
(statearr_13084_15544[(2)] = null);

(statearr_13084_15544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (6))){
var inst_13047 = (state_13071[(7)]);
var state_13071__$1 = state_13071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13071__$1,(11),to,inst_13047);
} else {
if((state_val_13072 === (3))){
var inst_13068 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13071__$1,inst_13068);
} else {
if((state_val_13072 === (12))){
var state_13071__$1 = state_13071;
var statearr_13086_15549 = state_13071__$1;
(statearr_13086_15549[(2)] = null);

(statearr_13086_15549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (2))){
var state_13071__$1 = state_13071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13071__$1,(4),from);
} else {
if((state_val_13072 === (11))){
var inst_13059 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
if(cljs.core.truth_(inst_13059)){
var statearr_13087_15550 = state_13071__$1;
(statearr_13087_15550[(1)] = (12));

} else {
var statearr_13088_15551 = state_13071__$1;
(statearr_13088_15551[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (9))){
var state_13071__$1 = state_13071;
var statearr_13089_15552 = state_13071__$1;
(statearr_13089_15552[(2)] = null);

(statearr_13089_15552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (5))){
var state_13071__$1 = state_13071;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13090_15554 = state_13071__$1;
(statearr_13090_15554[(1)] = (8));

} else {
var statearr_13092_15555 = state_13071__$1;
(statearr_13092_15555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (14))){
var inst_13064 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
var statearr_13093_15556 = state_13071__$1;
(statearr_13093_15556[(2)] = inst_13064);

(statearr_13093_15556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (10))){
var inst_13056 = (state_13071[(2)]);
var state_13071__$1 = state_13071;
var statearr_13098_15560 = state_13071__$1;
(statearr_13098_15560[(2)] = inst_13056);

(statearr_13098_15560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13072 === (8))){
var inst_13053 = cljs.core.async.close_BANG_(to);
var state_13071__$1 = state_13071;
var statearr_13099_15562 = state_13071__$1;
(statearr_13099_15562[(2)] = inst_13053);

(statearr_13099_15562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11970__auto__ = null;
var cljs$core$async$state_machine__11970__auto____0 = (function (){
var statearr_13100 = [null,null,null,null,null,null,null,null];
(statearr_13100[(0)] = cljs$core$async$state_machine__11970__auto__);

(statearr_13100[(1)] = (1));

return statearr_13100;
});
var cljs$core$async$state_machine__11970__auto____1 = (function (state_13071){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_13071);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e13101){var ex__11973__auto__ = e13101;
var statearr_13102_15569 = state_13071;
(statearr_13102_15569[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_13071[(4)]))){
var statearr_13103_15573 = state_13071;
(statearr_13103_15573[(1)] = cljs.core.first((state_13071[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15574 = state_13071;
state_13071 = G__15574;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$state_machine__11970__auto__ = function(state_13071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11970__auto____1.call(this,state_13071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11970__auto____0;
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11970__auto____1;
return cljs$core$async$state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_13105 = f__12798__auto__();
(statearr_13105[(6)] = c__12797__auto___15535);

return statearr_13105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__13109){
var vec__13110 = p__13109;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13110,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13110,(1),null);
var job = vec__13110;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12797__auto___15576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_13122){
var state_val_13123 = (state_13122[(1)]);
if((state_val_13123 === (1))){
var state_13122__$1 = state_13122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13122__$1,(2),res,v);
} else {
if((state_val_13123 === (2))){
var inst_13119 = (state_13122[(2)]);
var inst_13120 = cljs.core.async.close_BANG_(res);
var state_13122__$1 = (function (){var statearr_13124 = state_13122;
(statearr_13124[(7)] = inst_13119);

return statearr_13124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13122__$1,inst_13120);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0 = (function (){
var statearr_13126 = [null,null,null,null,null,null,null,null];
(statearr_13126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__);

(statearr_13126[(1)] = (1));

return statearr_13126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1 = (function (state_13122){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_13122);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e13128){var ex__11973__auto__ = e13128;
var statearr_13129_15583 = state_13122;
(statearr_13129_15583[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_13122[(4)]))){
var statearr_13130_15585 = state_13122;
(statearr_13130_15585[(1)] = cljs.core.first((state_13122[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15587 = state_13122;
state_13122 = G__15587;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__ = function(state_13122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1.call(this,state_13122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_13135 = f__12798__auto__();
(statearr_13135[(6)] = c__12797__auto___15576);

return statearr_13135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__13136){
var vec__13137 = p__13136;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13137,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13137,(1),null);
var job = vec__13137;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___15588 = n;
var __15590 = (0);
while(true){
if((__15590 < n__5593__auto___15588)){
var G__13141_15591 = type;
var G__13141_15592__$1 = (((G__13141_15591 instanceof cljs.core.Keyword))?G__13141_15591.fqn:null);
switch (G__13141_15592__$1) {
case "compute":
var c__12797__auto___15594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15590,c__12797__auto___15594,G__13141_15591,G__13141_15592__$1,n__5593__auto___15588,jobs,results,process__$1,async){
return (function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = ((function (__15590,c__12797__auto___15594,G__13141_15591,G__13141_15592__$1,n__5593__auto___15588,jobs,results,process__$1,async){
return (function (state_13154){
var state_val_13155 = (state_13154[(1)]);
if((state_val_13155 === (1))){
var state_13154__$1 = state_13154;
var statearr_13156_15595 = state_13154__$1;
(statearr_13156_15595[(2)] = null);

(statearr_13156_15595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13155 === (2))){
var state_13154__$1 = state_13154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13154__$1,(4),jobs);
} else {
if((state_val_13155 === (3))){
var inst_13152 = (state_13154[(2)]);
var state_13154__$1 = state_13154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13154__$1,inst_13152);
} else {
if((state_val_13155 === (4))){
var inst_13144 = (state_13154[(2)]);
var inst_13145 = process__$1(inst_13144);
var state_13154__$1 = state_13154;
if(cljs.core.truth_(inst_13145)){
var statearr_13158_15596 = state_13154__$1;
(statearr_13158_15596[(1)] = (5));

} else {
var statearr_13159_15598 = state_13154__$1;
(statearr_13159_15598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13155 === (5))){
var state_13154__$1 = state_13154;
var statearr_13160_15601 = state_13154__$1;
(statearr_13160_15601[(2)] = null);

(statearr_13160_15601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13155 === (6))){
var state_13154__$1 = state_13154;
var statearr_13161_15605 = state_13154__$1;
(statearr_13161_15605[(2)] = null);

(statearr_13161_15605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13155 === (7))){
var inst_13150 = (state_13154[(2)]);
var state_13154__$1 = state_13154;
var statearr_13162_15606 = state_13154__$1;
(statearr_13162_15606[(2)] = inst_13150);

(statearr_13162_15606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15590,c__12797__auto___15594,G__13141_15591,G__13141_15592__$1,n__5593__auto___15588,jobs,results,process__$1,async))
;
return ((function (__15590,switch__11969__auto__,c__12797__auto___15594,G__13141_15591,G__13141_15592__$1,n__5593__auto___15588,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0 = (function (){
var statearr_13164 = [null,null,null,null,null,null,null];
(statearr_13164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__);

(statearr_13164[(1)] = (1));

return statearr_13164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1 = (function (state_13154){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_13154);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e13166){var ex__11973__auto__ = e13166;
var statearr_13167_15610 = state_13154;
(statearr_13167_15610[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_13154[(4)]))){
var statearr_13171_15611 = state_13154;
(statearr_13171_15611[(1)] = cljs.core.first((state_13154[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15612 = state_13154;
state_13154 = G__15612;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__ = function(state_13154){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1.call(this,state_13154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__;
})()
;})(__15590,switch__11969__auto__,c__12797__auto___15594,G__13141_15591,G__13141_15592__$1,n__5593__auto___15588,jobs,results,process__$1,async))
})();
var state__12799__auto__ = (function (){var statearr_13175 = f__12798__auto__();
(statearr_13175[(6)] = c__12797__auto___15594);

return statearr_13175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
});})(__15590,c__12797__auto___15594,G__13141_15591,G__13141_15592__$1,n__5593__auto___15588,jobs,results,process__$1,async))
);


break;
case "async":
var c__12797__auto___15613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15590,c__12797__auto___15613,G__13141_15591,G__13141_15592__$1,n__5593__auto___15588,jobs,results,process__$1,async){
return (function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = ((function (__15590,c__12797__auto___15613,G__13141_15591,G__13141_15592__$1,n__5593__auto___15588,jobs,results,process__$1,async){
return (function (state_13188){
var state_val_13189 = (state_13188[(1)]);
if((state_val_13189 === (1))){
var state_13188__$1 = state_13188;
var statearr_13190_15614 = state_13188__$1;
(statearr_13190_15614[(2)] = null);

(statearr_13190_15614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13189 === (2))){
var state_13188__$1 = state_13188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13188__$1,(4),jobs);
} else {
if((state_val_13189 === (3))){
var inst_13186 = (state_13188[(2)]);
var state_13188__$1 = state_13188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13188__$1,inst_13186);
} else {
if((state_val_13189 === (4))){
var inst_13178 = (state_13188[(2)]);
var inst_13179 = async(inst_13178);
var state_13188__$1 = state_13188;
if(cljs.core.truth_(inst_13179)){
var statearr_13191_15615 = state_13188__$1;
(statearr_13191_15615[(1)] = (5));

} else {
var statearr_13192_15616 = state_13188__$1;
(statearr_13192_15616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13189 === (5))){
var state_13188__$1 = state_13188;
var statearr_13193_15617 = state_13188__$1;
(statearr_13193_15617[(2)] = null);

(statearr_13193_15617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13189 === (6))){
var state_13188__$1 = state_13188;
var statearr_13197_15622 = state_13188__$1;
(statearr_13197_15622[(2)] = null);

(statearr_13197_15622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13189 === (7))){
var inst_13184 = (state_13188[(2)]);
var state_13188__$1 = state_13188;
var statearr_13198_15623 = state_13188__$1;
(statearr_13198_15623[(2)] = inst_13184);

(statearr_13198_15623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15590,c__12797__auto___15613,G__13141_15591,G__13141_15592__$1,n__5593__auto___15588,jobs,results,process__$1,async))
;
return ((function (__15590,switch__11969__auto__,c__12797__auto___15613,G__13141_15591,G__13141_15592__$1,n__5593__auto___15588,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0 = (function (){
var statearr_13203 = [null,null,null,null,null,null,null];
(statearr_13203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__);

(statearr_13203[(1)] = (1));

return statearr_13203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1 = (function (state_13188){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_13188);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e13205){var ex__11973__auto__ = e13205;
var statearr_13206_15624 = state_13188;
(statearr_13206_15624[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_13188[(4)]))){
var statearr_13207_15625 = state_13188;
(statearr_13207_15625[(1)] = cljs.core.first((state_13188[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15632 = state_13188;
state_13188 = G__15632;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__ = function(state_13188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1.call(this,state_13188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__;
})()
;})(__15590,switch__11969__auto__,c__12797__auto___15613,G__13141_15591,G__13141_15592__$1,n__5593__auto___15588,jobs,results,process__$1,async))
})();
var state__12799__auto__ = (function (){var statearr_13209 = f__12798__auto__();
(statearr_13209[(6)] = c__12797__auto___15613);

return statearr_13209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
});})(__15590,c__12797__auto___15613,G__13141_15591,G__13141_15592__$1,n__5593__auto___15588,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13141_15592__$1)].join('')));

}

var G__15634 = (__15590 + (1));
__15590 = G__15634;
continue;
} else {
}
break;
}

var c__12797__auto___15636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_13237){
var state_val_13238 = (state_13237[(1)]);
if((state_val_13238 === (7))){
var inst_13232 = (state_13237[(2)]);
var state_13237__$1 = state_13237;
var statearr_13239_15640 = state_13237__$1;
(statearr_13239_15640[(2)] = inst_13232);

(statearr_13239_15640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13238 === (1))){
var state_13237__$1 = state_13237;
var statearr_13240_15641 = state_13237__$1;
(statearr_13240_15641[(2)] = null);

(statearr_13240_15641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13238 === (4))){
var inst_13214 = (state_13237[(7)]);
var inst_13214__$1 = (state_13237[(2)]);
var inst_13217 = (inst_13214__$1 == null);
var state_13237__$1 = (function (){var statearr_13241 = state_13237;
(statearr_13241[(7)] = inst_13214__$1);

return statearr_13241;
})();
if(cljs.core.truth_(inst_13217)){
var statearr_13242_15646 = state_13237__$1;
(statearr_13242_15646[(1)] = (5));

} else {
var statearr_13243_15647 = state_13237__$1;
(statearr_13243_15647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13238 === (6))){
var inst_13221 = (state_13237[(8)]);
var inst_13214 = (state_13237[(7)]);
var inst_13221__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13223 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13224 = [inst_13214,inst_13221__$1];
var inst_13225 = (new cljs.core.PersistentVector(null,2,(5),inst_13223,inst_13224,null));
var state_13237__$1 = (function (){var statearr_13244 = state_13237;
(statearr_13244[(8)] = inst_13221__$1);

return statearr_13244;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13237__$1,(8),jobs,inst_13225);
} else {
if((state_val_13238 === (3))){
var inst_13234 = (state_13237[(2)]);
var state_13237__$1 = state_13237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13237__$1,inst_13234);
} else {
if((state_val_13238 === (2))){
var state_13237__$1 = state_13237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13237__$1,(4),from);
} else {
if((state_val_13238 === (9))){
var inst_13229 = (state_13237[(2)]);
var state_13237__$1 = (function (){var statearr_13245 = state_13237;
(statearr_13245[(9)] = inst_13229);

return statearr_13245;
})();
var statearr_13246_15653 = state_13237__$1;
(statearr_13246_15653[(2)] = null);

(statearr_13246_15653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13238 === (5))){
var inst_13219 = cljs.core.async.close_BANG_(jobs);
var state_13237__$1 = state_13237;
var statearr_13247_15654 = state_13237__$1;
(statearr_13247_15654[(2)] = inst_13219);

(statearr_13247_15654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13238 === (8))){
var inst_13221 = (state_13237[(8)]);
var inst_13227 = (state_13237[(2)]);
var state_13237__$1 = (function (){var statearr_13248 = state_13237;
(statearr_13248[(10)] = inst_13227);

return statearr_13248;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13237__$1,(9),results,inst_13221);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0 = (function (){
var statearr_13252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13252[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__);

(statearr_13252[(1)] = (1));

return statearr_13252;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1 = (function (state_13237){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_13237);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e13253){var ex__11973__auto__ = e13253;
var statearr_13257_15661 = state_13237;
(statearr_13257_15661[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_13237[(4)]))){
var statearr_13259_15662 = state_13237;
(statearr_13259_15662[(1)] = cljs.core.first((state_13237[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15669 = state_13237;
state_13237 = G__15669;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__ = function(state_13237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1.call(this,state_13237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_13266 = f__12798__auto__();
(statearr_13266[(6)] = c__12797__auto___15636);

return statearr_13266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));


var c__12797__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_13309){
var state_val_13310 = (state_13309[(1)]);
if((state_val_13310 === (7))){
var inst_13305 = (state_13309[(2)]);
var state_13309__$1 = state_13309;
var statearr_13314_15674 = state_13309__$1;
(statearr_13314_15674[(2)] = inst_13305);

(statearr_13314_15674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (20))){
var state_13309__$1 = state_13309;
var statearr_13316_15675 = state_13309__$1;
(statearr_13316_15675[(2)] = null);

(statearr_13316_15675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (1))){
var state_13309__$1 = state_13309;
var statearr_13320_15676 = state_13309__$1;
(statearr_13320_15676[(2)] = null);

(statearr_13320_15676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (4))){
var inst_13270 = (state_13309[(7)]);
var inst_13270__$1 = (state_13309[(2)]);
var inst_13271 = (inst_13270__$1 == null);
var state_13309__$1 = (function (){var statearr_13321 = state_13309;
(statearr_13321[(7)] = inst_13270__$1);

return statearr_13321;
})();
if(cljs.core.truth_(inst_13271)){
var statearr_13323_15677 = state_13309__$1;
(statearr_13323_15677[(1)] = (5));

} else {
var statearr_13324_15678 = state_13309__$1;
(statearr_13324_15678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (15))){
var inst_13286 = (state_13309[(8)]);
var state_13309__$1 = state_13309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13309__$1,(18),to,inst_13286);
} else {
if((state_val_13310 === (21))){
var inst_13299 = (state_13309[(2)]);
var state_13309__$1 = state_13309;
var statearr_13327_15679 = state_13309__$1;
(statearr_13327_15679[(2)] = inst_13299);

(statearr_13327_15679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (13))){
var inst_13302 = (state_13309[(2)]);
var state_13309__$1 = (function (){var statearr_13329 = state_13309;
(statearr_13329[(9)] = inst_13302);

return statearr_13329;
})();
var statearr_13332_15692 = state_13309__$1;
(statearr_13332_15692[(2)] = null);

(statearr_13332_15692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (6))){
var inst_13270 = (state_13309[(7)]);
var state_13309__$1 = state_13309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13309__$1,(11),inst_13270);
} else {
if((state_val_13310 === (17))){
var inst_13294 = (state_13309[(2)]);
var state_13309__$1 = state_13309;
if(cljs.core.truth_(inst_13294)){
var statearr_13337_15693 = state_13309__$1;
(statearr_13337_15693[(1)] = (19));

} else {
var statearr_13338_15694 = state_13309__$1;
(statearr_13338_15694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (3))){
var inst_13307 = (state_13309[(2)]);
var state_13309__$1 = state_13309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13309__$1,inst_13307);
} else {
if((state_val_13310 === (12))){
var inst_13282 = (state_13309[(10)]);
var state_13309__$1 = state_13309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13309__$1,(14),inst_13282);
} else {
if((state_val_13310 === (2))){
var state_13309__$1 = state_13309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13309__$1,(4),results);
} else {
if((state_val_13310 === (19))){
var state_13309__$1 = state_13309;
var statearr_13343_15698 = state_13309__$1;
(statearr_13343_15698[(2)] = null);

(statearr_13343_15698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (11))){
var inst_13282 = (state_13309[(2)]);
var state_13309__$1 = (function (){var statearr_13346 = state_13309;
(statearr_13346[(10)] = inst_13282);

return statearr_13346;
})();
var statearr_13350_15700 = state_13309__$1;
(statearr_13350_15700[(2)] = null);

(statearr_13350_15700[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (9))){
var state_13309__$1 = state_13309;
var statearr_13351_15704 = state_13309__$1;
(statearr_13351_15704[(2)] = null);

(statearr_13351_15704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (5))){
var state_13309__$1 = state_13309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13353_15705 = state_13309__$1;
(statearr_13353_15705[(1)] = (8));

} else {
var statearr_13357_15706 = state_13309__$1;
(statearr_13357_15706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (14))){
var inst_13286 = (state_13309[(8)]);
var inst_13288 = (state_13309[(11)]);
var inst_13286__$1 = (state_13309[(2)]);
var inst_13287 = (inst_13286__$1 == null);
var inst_13288__$1 = cljs.core.not(inst_13287);
var state_13309__$1 = (function (){var statearr_13360 = state_13309;
(statearr_13360[(8)] = inst_13286__$1);

(statearr_13360[(11)] = inst_13288__$1);

return statearr_13360;
})();
if(inst_13288__$1){
var statearr_13361_15707 = state_13309__$1;
(statearr_13361_15707[(1)] = (15));

} else {
var statearr_13362_15708 = state_13309__$1;
(statearr_13362_15708[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (16))){
var inst_13288 = (state_13309[(11)]);
var state_13309__$1 = state_13309;
var statearr_13366_15709 = state_13309__$1;
(statearr_13366_15709[(2)] = inst_13288);

(statearr_13366_15709[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (10))){
var inst_13277 = (state_13309[(2)]);
var state_13309__$1 = state_13309;
var statearr_13368_15710 = state_13309__$1;
(statearr_13368_15710[(2)] = inst_13277);

(statearr_13368_15710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (18))){
var inst_13291 = (state_13309[(2)]);
var state_13309__$1 = state_13309;
var statearr_13369_15711 = state_13309__$1;
(statearr_13369_15711[(2)] = inst_13291);

(statearr_13369_15711[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13310 === (8))){
var inst_13274 = cljs.core.async.close_BANG_(to);
var state_13309__$1 = state_13309;
var statearr_13373_15712 = state_13309__$1;
(statearr_13373_15712[(2)] = inst_13274);

(statearr_13373_15712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0 = (function (){
var statearr_13374 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__);

(statearr_13374[(1)] = (1));

return statearr_13374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1 = (function (state_13309){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_13309);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e13375){var ex__11973__auto__ = e13375;
var statearr_13376_15716 = state_13309;
(statearr_13376_15716[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_13309[(4)]))){
var statearr_13377_15717 = state_13309;
(statearr_13377_15717[(1)] = cljs.core.first((state_13309[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15718 = state_13309;
state_13309 = G__15718;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__ = function(state_13309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1.call(this,state_13309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11970__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_13379 = f__12798__auto__();
(statearr_13379[(6)] = c__12797__auto__);

return statearr_13379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));

return c__12797__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__13391 = arguments.length;
switch (G__13391) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__13403 = arguments.length;
switch (G__13403) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__13419 = arguments.length;
switch (G__13419) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12797__auto___15774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_13453){
var state_val_13454 = (state_13453[(1)]);
if((state_val_13454 === (7))){
var inst_13449 = (state_13453[(2)]);
var state_13453__$1 = state_13453;
var statearr_13462_15778 = state_13453__$1;
(statearr_13462_15778[(2)] = inst_13449);

(statearr_13462_15778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13454 === (1))){
var state_13453__$1 = state_13453;
var statearr_13463_15783 = state_13453__$1;
(statearr_13463_15783[(2)] = null);

(statearr_13463_15783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13454 === (4))){
var inst_13428 = (state_13453[(7)]);
var inst_13428__$1 = (state_13453[(2)]);
var inst_13429 = (inst_13428__$1 == null);
var state_13453__$1 = (function (){var statearr_13465 = state_13453;
(statearr_13465[(7)] = inst_13428__$1);

return statearr_13465;
})();
if(cljs.core.truth_(inst_13429)){
var statearr_13469_15785 = state_13453__$1;
(statearr_13469_15785[(1)] = (5));

} else {
var statearr_13470_15786 = state_13453__$1;
(statearr_13470_15786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13454 === (13))){
var state_13453__$1 = state_13453;
var statearr_13472_15787 = state_13453__$1;
(statearr_13472_15787[(2)] = null);

(statearr_13472_15787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13454 === (6))){
var inst_13428 = (state_13453[(7)]);
var inst_13436 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13428) : p.call(null, inst_13428));
var state_13453__$1 = state_13453;
if(cljs.core.truth_(inst_13436)){
var statearr_13476_15788 = state_13453__$1;
(statearr_13476_15788[(1)] = (9));

} else {
var statearr_13478_15789 = state_13453__$1;
(statearr_13478_15789[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13454 === (3))){
var inst_13451 = (state_13453[(2)]);
var state_13453__$1 = state_13453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13453__$1,inst_13451);
} else {
if((state_val_13454 === (12))){
var state_13453__$1 = state_13453;
var statearr_13481_15790 = state_13453__$1;
(statearr_13481_15790[(2)] = null);

(statearr_13481_15790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13454 === (2))){
var state_13453__$1 = state_13453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13453__$1,(4),ch);
} else {
if((state_val_13454 === (11))){
var inst_13428 = (state_13453[(7)]);
var inst_13440 = (state_13453[(2)]);
var state_13453__$1 = state_13453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13453__$1,(8),inst_13440,inst_13428);
} else {
if((state_val_13454 === (9))){
var state_13453__$1 = state_13453;
var statearr_13486_15791 = state_13453__$1;
(statearr_13486_15791[(2)] = tc);

(statearr_13486_15791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13454 === (5))){
var inst_13431 = cljs.core.async.close_BANG_(tc);
var inst_13433 = cljs.core.async.close_BANG_(fc);
var state_13453__$1 = (function (){var statearr_13487 = state_13453;
(statearr_13487[(8)] = inst_13431);

return statearr_13487;
})();
var statearr_13488_15792 = state_13453__$1;
(statearr_13488_15792[(2)] = inst_13433);

(statearr_13488_15792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13454 === (14))){
var inst_13447 = (state_13453[(2)]);
var state_13453__$1 = state_13453;
var statearr_13490_15793 = state_13453__$1;
(statearr_13490_15793[(2)] = inst_13447);

(statearr_13490_15793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13454 === (10))){
var state_13453__$1 = state_13453;
var statearr_13493_15794 = state_13453__$1;
(statearr_13493_15794[(2)] = fc);

(statearr_13493_15794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13454 === (8))){
var inst_13442 = (state_13453[(2)]);
var state_13453__$1 = state_13453;
if(cljs.core.truth_(inst_13442)){
var statearr_13495_15798 = state_13453__$1;
(statearr_13495_15798[(1)] = (12));

} else {
var statearr_13497_15799 = state_13453__$1;
(statearr_13497_15799[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11970__auto__ = null;
var cljs$core$async$state_machine__11970__auto____0 = (function (){
var statearr_13500 = [null,null,null,null,null,null,null,null,null];
(statearr_13500[(0)] = cljs$core$async$state_machine__11970__auto__);

(statearr_13500[(1)] = (1));

return statearr_13500;
});
var cljs$core$async$state_machine__11970__auto____1 = (function (state_13453){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_13453);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e13503){var ex__11973__auto__ = e13503;
var statearr_13504_15805 = state_13453;
(statearr_13504_15805[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_13453[(4)]))){
var statearr_13506_15806 = state_13453;
(statearr_13506_15806[(1)] = cljs.core.first((state_13453[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15807 = state_13453;
state_13453 = G__15807;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$state_machine__11970__auto__ = function(state_13453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11970__auto____1.call(this,state_13453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11970__auto____0;
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11970__auto____1;
return cljs$core$async$state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_13511 = f__12798__auto__();
(statearr_13511[(6)] = c__12797__auto___15774);

return statearr_13511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12797__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_13538){
var state_val_13539 = (state_13538[(1)]);
if((state_val_13539 === (7))){
var inst_13534 = (state_13538[(2)]);
var state_13538__$1 = state_13538;
var statearr_13544_15813 = state_13538__$1;
(statearr_13544_15813[(2)] = inst_13534);

(statearr_13544_15813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (1))){
var inst_13516 = init;
var inst_13517 = inst_13516;
var state_13538__$1 = (function (){var statearr_13546 = state_13538;
(statearr_13546[(7)] = inst_13517);

return statearr_13546;
})();
var statearr_13550_15814 = state_13538__$1;
(statearr_13550_15814[(2)] = null);

(statearr_13550_15814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (4))){
var inst_13520 = (state_13538[(8)]);
var inst_13520__$1 = (state_13538[(2)]);
var inst_13521 = (inst_13520__$1 == null);
var state_13538__$1 = (function (){var statearr_13553 = state_13538;
(statearr_13553[(8)] = inst_13520__$1);

return statearr_13553;
})();
if(cljs.core.truth_(inst_13521)){
var statearr_13554_15815 = state_13538__$1;
(statearr_13554_15815[(1)] = (5));

} else {
var statearr_13555_15816 = state_13538__$1;
(statearr_13555_15816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (6))){
var inst_13517 = (state_13538[(7)]);
var inst_13525 = (state_13538[(9)]);
var inst_13520 = (state_13538[(8)]);
var inst_13525__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13517,inst_13520) : f.call(null, inst_13517,inst_13520));
var inst_13526 = cljs.core.reduced_QMARK_(inst_13525__$1);
var state_13538__$1 = (function (){var statearr_13560 = state_13538;
(statearr_13560[(9)] = inst_13525__$1);

return statearr_13560;
})();
if(inst_13526){
var statearr_13562_15817 = state_13538__$1;
(statearr_13562_15817[(1)] = (8));

} else {
var statearr_13563_15818 = state_13538__$1;
(statearr_13563_15818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (3))){
var inst_13536 = (state_13538[(2)]);
var state_13538__$1 = state_13538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13538__$1,inst_13536);
} else {
if((state_val_13539 === (2))){
var state_13538__$1 = state_13538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13538__$1,(4),ch);
} else {
if((state_val_13539 === (9))){
var inst_13525 = (state_13538[(9)]);
var inst_13517 = inst_13525;
var state_13538__$1 = (function (){var statearr_13567 = state_13538;
(statearr_13567[(7)] = inst_13517);

return statearr_13567;
})();
var statearr_13569_15823 = state_13538__$1;
(statearr_13569_15823[(2)] = null);

(statearr_13569_15823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (5))){
var inst_13517 = (state_13538[(7)]);
var state_13538__$1 = state_13538;
var statearr_13572_15828 = state_13538__$1;
(statearr_13572_15828[(2)] = inst_13517);

(statearr_13572_15828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (10))){
var inst_13532 = (state_13538[(2)]);
var state_13538__$1 = state_13538;
var statearr_13577_15829 = state_13538__$1;
(statearr_13577_15829[(2)] = inst_13532);

(statearr_13577_15829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13539 === (8))){
var inst_13525 = (state_13538[(9)]);
var inst_13528 = cljs.core.deref(inst_13525);
var state_13538__$1 = state_13538;
var statearr_13582_15831 = state_13538__$1;
(statearr_13582_15831[(2)] = inst_13528);

(statearr_13582_15831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__11970__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11970__auto____0 = (function (){
var statearr_13586 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13586[(0)] = cljs$core$async$reduce_$_state_machine__11970__auto__);

(statearr_13586[(1)] = (1));

return statearr_13586;
});
var cljs$core$async$reduce_$_state_machine__11970__auto____1 = (function (state_13538){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_13538);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e13588){var ex__11973__auto__ = e13588;
var statearr_13589_15837 = state_13538;
(statearr_13589_15837[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_13538[(4)]))){
var statearr_13590_15841 = state_13538;
(statearr_13590_15841[(1)] = cljs.core.first((state_13538[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15842 = state_13538;
state_13538 = G__15842;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11970__auto__ = function(state_13538){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11970__auto____1.call(this,state_13538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11970__auto____0;
cljs$core$async$reduce_$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11970__auto____1;
return cljs$core$async$reduce_$_state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_13595 = f__12798__auto__();
(statearr_13595[(6)] = c__12797__auto__);

return statearr_13595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));

return c__12797__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__12797__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_13605){
var state_val_13606 = (state_13605[(1)]);
if((state_val_13606 === (1))){
var inst_13600 = cljs.core.async.reduce(f__$1,init,ch);
var state_13605__$1 = state_13605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13605__$1,(2),inst_13600);
} else {
if((state_val_13606 === (2))){
var inst_13602 = (state_13605[(2)]);
var inst_13603 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_13602) : f__$1.call(null, inst_13602));
var state_13605__$1 = state_13605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13605__$1,inst_13603);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11970__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11970__auto____0 = (function (){
var statearr_13614 = [null,null,null,null,null,null,null];
(statearr_13614[(0)] = cljs$core$async$transduce_$_state_machine__11970__auto__);

(statearr_13614[(1)] = (1));

return statearr_13614;
});
var cljs$core$async$transduce_$_state_machine__11970__auto____1 = (function (state_13605){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_13605);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e13615){var ex__11973__auto__ = e13615;
var statearr_13617_15859 = state_13605;
(statearr_13617_15859[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_13605[(4)]))){
var statearr_13618_15864 = state_13605;
(statearr_13618_15864[(1)] = cljs.core.first((state_13605[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15866 = state_13605;
state_13605 = G__15866;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11970__auto__ = function(state_13605){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11970__auto____1.call(this,state_13605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11970__auto____0;
cljs$core$async$transduce_$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11970__auto____1;
return cljs$core$async$transduce_$_state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_13622 = f__12798__auto__();
(statearr_13622[(6)] = c__12797__auto__);

return statearr_13622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));

return c__12797__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__13634 = arguments.length;
switch (G__13634) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12797__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_13664){
var state_val_13665 = (state_13664[(1)]);
if((state_val_13665 === (7))){
var inst_13645 = (state_13664[(2)]);
var state_13664__$1 = state_13664;
var statearr_13677_15879 = state_13664__$1;
(statearr_13677_15879[(2)] = inst_13645);

(statearr_13677_15879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (1))){
var inst_13639 = cljs.core.seq(coll);
var inst_13640 = inst_13639;
var state_13664__$1 = (function (){var statearr_13686 = state_13664;
(statearr_13686[(7)] = inst_13640);

return statearr_13686;
})();
var statearr_13687_15880 = state_13664__$1;
(statearr_13687_15880[(2)] = null);

(statearr_13687_15880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (4))){
var inst_13640 = (state_13664[(7)]);
var inst_13643 = cljs.core.first(inst_13640);
var state_13664__$1 = state_13664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13664__$1,(7),ch,inst_13643);
} else {
if((state_val_13665 === (13))){
var inst_13658 = (state_13664[(2)]);
var state_13664__$1 = state_13664;
var statearr_13688_15885 = state_13664__$1;
(statearr_13688_15885[(2)] = inst_13658);

(statearr_13688_15885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (6))){
var inst_13648 = (state_13664[(2)]);
var state_13664__$1 = state_13664;
if(cljs.core.truth_(inst_13648)){
var statearr_13689_15886 = state_13664__$1;
(statearr_13689_15886[(1)] = (8));

} else {
var statearr_13690_15887 = state_13664__$1;
(statearr_13690_15887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (3))){
var inst_13662 = (state_13664[(2)]);
var state_13664__$1 = state_13664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13664__$1,inst_13662);
} else {
if((state_val_13665 === (12))){
var state_13664__$1 = state_13664;
var statearr_13695_15888 = state_13664__$1;
(statearr_13695_15888[(2)] = null);

(statearr_13695_15888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (2))){
var inst_13640 = (state_13664[(7)]);
var state_13664__$1 = state_13664;
if(cljs.core.truth_(inst_13640)){
var statearr_13700_15890 = state_13664__$1;
(statearr_13700_15890[(1)] = (4));

} else {
var statearr_13701_15891 = state_13664__$1;
(statearr_13701_15891[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (11))){
var inst_13655 = cljs.core.async.close_BANG_(ch);
var state_13664__$1 = state_13664;
var statearr_13702_15892 = state_13664__$1;
(statearr_13702_15892[(2)] = inst_13655);

(statearr_13702_15892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (9))){
var state_13664__$1 = state_13664;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13703_15899 = state_13664__$1;
(statearr_13703_15899[(1)] = (11));

} else {
var statearr_13707_15902 = state_13664__$1;
(statearr_13707_15902[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (5))){
var inst_13640 = (state_13664[(7)]);
var state_13664__$1 = state_13664;
var statearr_13709_15903 = state_13664__$1;
(statearr_13709_15903[(2)] = inst_13640);

(statearr_13709_15903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (10))){
var inst_13660 = (state_13664[(2)]);
var state_13664__$1 = state_13664;
var statearr_13710_15904 = state_13664__$1;
(statearr_13710_15904[(2)] = inst_13660);

(statearr_13710_15904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13665 === (8))){
var inst_13640 = (state_13664[(7)]);
var inst_13650 = cljs.core.next(inst_13640);
var inst_13640__$1 = inst_13650;
var state_13664__$1 = (function (){var statearr_13715 = state_13664;
(statearr_13715[(7)] = inst_13640__$1);

return statearr_13715;
})();
var statearr_13716_15906 = state_13664__$1;
(statearr_13716_15906[(2)] = null);

(statearr_13716_15906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11970__auto__ = null;
var cljs$core$async$state_machine__11970__auto____0 = (function (){
var statearr_13717 = [null,null,null,null,null,null,null,null];
(statearr_13717[(0)] = cljs$core$async$state_machine__11970__auto__);

(statearr_13717[(1)] = (1));

return statearr_13717;
});
var cljs$core$async$state_machine__11970__auto____1 = (function (state_13664){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_13664);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e13721){var ex__11973__auto__ = e13721;
var statearr_13723_15909 = state_13664;
(statearr_13723_15909[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_13664[(4)]))){
var statearr_13724_15910 = state_13664;
(statearr_13724_15910[(1)] = cljs.core.first((state_13664[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15911 = state_13664;
state_13664 = G__15911;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$state_machine__11970__auto__ = function(state_13664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11970__auto____1.call(this,state_13664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11970__auto____0;
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11970__auto____1;
return cljs$core$async$state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_13725 = f__12798__auto__();
(statearr_13725[(6)] = c__12797__auto__);

return statearr_13725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));

return c__12797__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__13728 = arguments.length;
switch (G__13728) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_15917 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_15917(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15918 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_15918(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15920 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_15920(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15926 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_15926(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13735 = (function (ch,cs,meta13736){
this.ch = ch;
this.cs = cs;
this.meta13736 = meta13736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13737,meta13736__$1){
var self__ = this;
var _13737__$1 = this;
return (new cljs.core.async.t_cljs$core$async13735(self__.ch,self__.cs,meta13736__$1));
}));

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13737){
var self__ = this;
var _13737__$1 = this;
return self__.meta13736;
}));

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async13735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13736","meta13736",1710898726,null)], null);
}));

(cljs.core.async.t_cljs$core$async13735.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13735");

(cljs.core.async.t_cljs$core$async13735.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13735");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13735.
 */
cljs.core.async.__GT_t_cljs$core$async13735 = (function cljs$core$async$__GT_t_cljs$core$async13735(ch,cs,meta13736){
return (new cljs.core.async.t_cljs$core$async13735(ch,cs,meta13736));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async13735(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__12797__auto___15938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_13889){
var state_val_13890 = (state_13889[(1)]);
if((state_val_13890 === (7))){
var inst_13885 = (state_13889[(2)]);
var state_13889__$1 = state_13889;
var statearr_13895_15941 = state_13889__$1;
(statearr_13895_15941[(2)] = inst_13885);

(statearr_13895_15941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (20))){
var inst_13778 = (state_13889[(7)]);
var inst_13793 = cljs.core.first(inst_13778);
var inst_13794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13793,(0),null);
var inst_13795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13793,(1),null);
var state_13889__$1 = (function (){var statearr_13896 = state_13889;
(statearr_13896[(8)] = inst_13794);

return statearr_13896;
})();
if(cljs.core.truth_(inst_13795)){
var statearr_13898_15950 = state_13889__$1;
(statearr_13898_15950[(1)] = (22));

} else {
var statearr_13899_15954 = state_13889__$1;
(statearr_13899_15954[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (27))){
var inst_13834 = (state_13889[(9)]);
var inst_13824 = (state_13889[(10)]);
var inst_13826 = (state_13889[(11)]);
var inst_13743 = (state_13889[(12)]);
var inst_13834__$1 = cljs.core._nth(inst_13824,inst_13826);
var inst_13835 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13834__$1,inst_13743,done);
var state_13889__$1 = (function (){var statearr_13900 = state_13889;
(statearr_13900[(9)] = inst_13834__$1);

return statearr_13900;
})();
if(cljs.core.truth_(inst_13835)){
var statearr_13901_15961 = state_13889__$1;
(statearr_13901_15961[(1)] = (30));

} else {
var statearr_13902_15962 = state_13889__$1;
(statearr_13902_15962[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (1))){
var state_13889__$1 = state_13889;
var statearr_13903_15967 = state_13889__$1;
(statearr_13903_15967[(2)] = null);

(statearr_13903_15967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (24))){
var inst_13778 = (state_13889[(7)]);
var inst_13801 = (state_13889[(2)]);
var inst_13802 = cljs.core.next(inst_13778);
var inst_13752 = inst_13802;
var inst_13753 = null;
var inst_13754 = (0);
var inst_13755 = (0);
var state_13889__$1 = (function (){var statearr_13906 = state_13889;
(statearr_13906[(13)] = inst_13801);

(statearr_13906[(14)] = inst_13753);

(statearr_13906[(15)] = inst_13752);

(statearr_13906[(16)] = inst_13755);

(statearr_13906[(17)] = inst_13754);

return statearr_13906;
})();
var statearr_13907_15984 = state_13889__$1;
(statearr_13907_15984[(2)] = null);

(statearr_13907_15984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (39))){
var state_13889__$1 = state_13889;
var statearr_13911_15985 = state_13889__$1;
(statearr_13911_15985[(2)] = null);

(statearr_13911_15985[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (4))){
var inst_13743 = (state_13889[(12)]);
var inst_13743__$1 = (state_13889[(2)]);
var inst_13744 = (inst_13743__$1 == null);
var state_13889__$1 = (function (){var statearr_13912 = state_13889;
(statearr_13912[(12)] = inst_13743__$1);

return statearr_13912;
})();
if(cljs.core.truth_(inst_13744)){
var statearr_13913_15987 = state_13889__$1;
(statearr_13913_15987[(1)] = (5));

} else {
var statearr_13918_15988 = state_13889__$1;
(statearr_13918_15988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (15))){
var inst_13753 = (state_13889[(14)]);
var inst_13752 = (state_13889[(15)]);
var inst_13755 = (state_13889[(16)]);
var inst_13754 = (state_13889[(17)]);
var inst_13770 = (state_13889[(2)]);
var inst_13771 = (inst_13755 + (1));
var tmp13908 = inst_13753;
var tmp13909 = inst_13752;
var tmp13910 = inst_13754;
var inst_13752__$1 = tmp13909;
var inst_13753__$1 = tmp13908;
var inst_13754__$1 = tmp13910;
var inst_13755__$1 = inst_13771;
var state_13889__$1 = (function (){var statearr_13923 = state_13889;
(statearr_13923[(14)] = inst_13753__$1);

(statearr_13923[(15)] = inst_13752__$1);

(statearr_13923[(18)] = inst_13770);

(statearr_13923[(16)] = inst_13755__$1);

(statearr_13923[(17)] = inst_13754__$1);

return statearr_13923;
})();
var statearr_13924_16006 = state_13889__$1;
(statearr_13924_16006[(2)] = null);

(statearr_13924_16006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (21))){
var inst_13805 = (state_13889[(2)]);
var state_13889__$1 = state_13889;
var statearr_13928_16007 = state_13889__$1;
(statearr_13928_16007[(2)] = inst_13805);

(statearr_13928_16007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (31))){
var inst_13834 = (state_13889[(9)]);
var inst_13839 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_13834);
var state_13889__$1 = state_13889;
var statearr_13932_16008 = state_13889__$1;
(statearr_13932_16008[(2)] = inst_13839);

(statearr_13932_16008[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (32))){
var inst_13823 = (state_13889[(19)]);
var inst_13825 = (state_13889[(20)]);
var inst_13824 = (state_13889[(10)]);
var inst_13826 = (state_13889[(11)]);
var inst_13841 = (state_13889[(2)]);
var inst_13842 = (inst_13826 + (1));
var tmp13925 = inst_13823;
var tmp13926 = inst_13825;
var tmp13927 = inst_13824;
var inst_13823__$1 = tmp13925;
var inst_13824__$1 = tmp13927;
var inst_13825__$1 = tmp13926;
var inst_13826__$1 = inst_13842;
var state_13889__$1 = (function (){var statearr_13934 = state_13889;
(statearr_13934[(19)] = inst_13823__$1);

(statearr_13934[(20)] = inst_13825__$1);

(statearr_13934[(21)] = inst_13841);

(statearr_13934[(10)] = inst_13824__$1);

(statearr_13934[(11)] = inst_13826__$1);

return statearr_13934;
})();
var statearr_13935_16028 = state_13889__$1;
(statearr_13935_16028[(2)] = null);

(statearr_13935_16028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (40))){
var inst_13854 = (state_13889[(22)]);
var inst_13861 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_13854);
var state_13889__$1 = state_13889;
var statearr_13942_16029 = state_13889__$1;
(statearr_13942_16029[(2)] = inst_13861);

(statearr_13942_16029[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (33))){
var inst_13845 = (state_13889[(23)]);
var inst_13847 = cljs.core.chunked_seq_QMARK_(inst_13845);
var state_13889__$1 = state_13889;
if(inst_13847){
var statearr_13943_16034 = state_13889__$1;
(statearr_13943_16034[(1)] = (36));

} else {
var statearr_13944_16035 = state_13889__$1;
(statearr_13944_16035[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (13))){
var inst_13764 = (state_13889[(24)]);
var inst_13767 = cljs.core.async.close_BANG_(inst_13764);
var state_13889__$1 = state_13889;
var statearr_13945_16042 = state_13889__$1;
(statearr_13945_16042[(2)] = inst_13767);

(statearr_13945_16042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (22))){
var inst_13794 = (state_13889[(8)]);
var inst_13798 = cljs.core.async.close_BANG_(inst_13794);
var state_13889__$1 = state_13889;
var statearr_13974_16057 = state_13889__$1;
(statearr_13974_16057[(2)] = inst_13798);

(statearr_13974_16057[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (36))){
var inst_13845 = (state_13889[(23)]);
var inst_13849 = cljs.core.chunk_first(inst_13845);
var inst_13850 = cljs.core.chunk_rest(inst_13845);
var inst_13851 = cljs.core.count(inst_13849);
var inst_13823 = inst_13850;
var inst_13824 = inst_13849;
var inst_13825 = inst_13851;
var inst_13826 = (0);
var state_13889__$1 = (function (){var statearr_13975 = state_13889;
(statearr_13975[(19)] = inst_13823);

(statearr_13975[(20)] = inst_13825);

(statearr_13975[(10)] = inst_13824);

(statearr_13975[(11)] = inst_13826);

return statearr_13975;
})();
var statearr_13976_16059 = state_13889__$1;
(statearr_13976_16059[(2)] = null);

(statearr_13976_16059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (41))){
var inst_13845 = (state_13889[(23)]);
var inst_13863 = (state_13889[(2)]);
var inst_13864 = cljs.core.next(inst_13845);
var inst_13823 = inst_13864;
var inst_13824 = null;
var inst_13825 = (0);
var inst_13826 = (0);
var state_13889__$1 = (function (){var statearr_13978 = state_13889;
(statearr_13978[(19)] = inst_13823);

(statearr_13978[(20)] = inst_13825);

(statearr_13978[(10)] = inst_13824);

(statearr_13978[(25)] = inst_13863);

(statearr_13978[(11)] = inst_13826);

return statearr_13978;
})();
var statearr_13979_16071 = state_13889__$1;
(statearr_13979_16071[(2)] = null);

(statearr_13979_16071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (43))){
var state_13889__$1 = state_13889;
var statearr_13980_16073 = state_13889__$1;
(statearr_13980_16073[(2)] = null);

(statearr_13980_16073[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (29))){
var inst_13872 = (state_13889[(2)]);
var state_13889__$1 = state_13889;
var statearr_13983_16075 = state_13889__$1;
(statearr_13983_16075[(2)] = inst_13872);

(statearr_13983_16075[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (44))){
var inst_13882 = (state_13889[(2)]);
var state_13889__$1 = (function (){var statearr_13984 = state_13889;
(statearr_13984[(26)] = inst_13882);

return statearr_13984;
})();
var statearr_13987_16081 = state_13889__$1;
(statearr_13987_16081[(2)] = null);

(statearr_13987_16081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (6))){
var inst_13815 = (state_13889[(27)]);
var inst_13814 = cljs.core.deref(cs);
var inst_13815__$1 = cljs.core.keys(inst_13814);
var inst_13816 = cljs.core.count(inst_13815__$1);
var inst_13817 = cljs.core.reset_BANG_(dctr,inst_13816);
var inst_13822 = cljs.core.seq(inst_13815__$1);
var inst_13823 = inst_13822;
var inst_13824 = null;
var inst_13825 = (0);
var inst_13826 = (0);
var state_13889__$1 = (function (){var statearr_13992 = state_13889;
(statearr_13992[(28)] = inst_13817);

(statearr_13992[(19)] = inst_13823);

(statearr_13992[(27)] = inst_13815__$1);

(statearr_13992[(20)] = inst_13825);

(statearr_13992[(10)] = inst_13824);

(statearr_13992[(11)] = inst_13826);

return statearr_13992;
})();
var statearr_13996_16092 = state_13889__$1;
(statearr_13996_16092[(2)] = null);

(statearr_13996_16092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (28))){
var inst_13823 = (state_13889[(19)]);
var inst_13845 = (state_13889[(23)]);
var inst_13845__$1 = cljs.core.seq(inst_13823);
var state_13889__$1 = (function (){var statearr_13998 = state_13889;
(statearr_13998[(23)] = inst_13845__$1);

return statearr_13998;
})();
if(inst_13845__$1){
var statearr_14000_16110 = state_13889__$1;
(statearr_14000_16110[(1)] = (33));

} else {
var statearr_14002_16111 = state_13889__$1;
(statearr_14002_16111[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (25))){
var inst_13825 = (state_13889[(20)]);
var inst_13826 = (state_13889[(11)]);
var inst_13828 = (inst_13826 < inst_13825);
var inst_13830 = inst_13828;
var state_13889__$1 = state_13889;
if(cljs.core.truth_(inst_13830)){
var statearr_14003_16113 = state_13889__$1;
(statearr_14003_16113[(1)] = (27));

} else {
var statearr_14004_16114 = state_13889__$1;
(statearr_14004_16114[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (34))){
var state_13889__$1 = state_13889;
var statearr_14010_16119 = state_13889__$1;
(statearr_14010_16119[(2)] = null);

(statearr_14010_16119[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (17))){
var state_13889__$1 = state_13889;
var statearr_14012_16124 = state_13889__$1;
(statearr_14012_16124[(2)] = null);

(statearr_14012_16124[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (3))){
var inst_13887 = (state_13889[(2)]);
var state_13889__$1 = state_13889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13889__$1,inst_13887);
} else {
if((state_val_13890 === (12))){
var inst_13810 = (state_13889[(2)]);
var state_13889__$1 = state_13889;
var statearr_14015_16134 = state_13889__$1;
(statearr_14015_16134[(2)] = inst_13810);

(statearr_14015_16134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (2))){
var state_13889__$1 = state_13889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13889__$1,(4),ch);
} else {
if((state_val_13890 === (23))){
var state_13889__$1 = state_13889;
var statearr_14022_16135 = state_13889__$1;
(statearr_14022_16135[(2)] = null);

(statearr_14022_16135[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (35))){
var inst_13870 = (state_13889[(2)]);
var state_13889__$1 = state_13889;
var statearr_14023_16136 = state_13889__$1;
(statearr_14023_16136[(2)] = inst_13870);

(statearr_14023_16136[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (19))){
var inst_13778 = (state_13889[(7)]);
var inst_13782 = cljs.core.chunk_first(inst_13778);
var inst_13786 = cljs.core.chunk_rest(inst_13778);
var inst_13787 = cljs.core.count(inst_13782);
var inst_13752 = inst_13786;
var inst_13753 = inst_13782;
var inst_13754 = inst_13787;
var inst_13755 = (0);
var state_13889__$1 = (function (){var statearr_14024 = state_13889;
(statearr_14024[(14)] = inst_13753);

(statearr_14024[(15)] = inst_13752);

(statearr_14024[(16)] = inst_13755);

(statearr_14024[(17)] = inst_13754);

return statearr_14024;
})();
var statearr_14028_16143 = state_13889__$1;
(statearr_14028_16143[(2)] = null);

(statearr_14028_16143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (11))){
var inst_13778 = (state_13889[(7)]);
var inst_13752 = (state_13889[(15)]);
var inst_13778__$1 = cljs.core.seq(inst_13752);
var state_13889__$1 = (function (){var statearr_14030 = state_13889;
(statearr_14030[(7)] = inst_13778__$1);

return statearr_14030;
})();
if(inst_13778__$1){
var statearr_14031_16150 = state_13889__$1;
(statearr_14031_16150[(1)] = (16));

} else {
var statearr_14032_16151 = state_13889__$1;
(statearr_14032_16151[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (9))){
var inst_13812 = (state_13889[(2)]);
var state_13889__$1 = state_13889;
var statearr_14033_16158 = state_13889__$1;
(statearr_14033_16158[(2)] = inst_13812);

(statearr_14033_16158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (5))){
var inst_13750 = cljs.core.deref(cs);
var inst_13751 = cljs.core.seq(inst_13750);
var inst_13752 = inst_13751;
var inst_13753 = null;
var inst_13754 = (0);
var inst_13755 = (0);
var state_13889__$1 = (function (){var statearr_14034 = state_13889;
(statearr_14034[(14)] = inst_13753);

(statearr_14034[(15)] = inst_13752);

(statearr_14034[(16)] = inst_13755);

(statearr_14034[(17)] = inst_13754);

return statearr_14034;
})();
var statearr_14035_16164 = state_13889__$1;
(statearr_14035_16164[(2)] = null);

(statearr_14035_16164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (14))){
var state_13889__$1 = state_13889;
var statearr_14036_16168 = state_13889__$1;
(statearr_14036_16168[(2)] = null);

(statearr_14036_16168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (45))){
var inst_13879 = (state_13889[(2)]);
var state_13889__$1 = state_13889;
var statearr_14037_16169 = state_13889__$1;
(statearr_14037_16169[(2)] = inst_13879);

(statearr_14037_16169[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (26))){
var inst_13815 = (state_13889[(27)]);
var inst_13874 = (state_13889[(2)]);
var inst_13875 = cljs.core.seq(inst_13815);
var state_13889__$1 = (function (){var statearr_14045 = state_13889;
(statearr_14045[(29)] = inst_13874);

return statearr_14045;
})();
if(inst_13875){
var statearr_14046_16170 = state_13889__$1;
(statearr_14046_16170[(1)] = (42));

} else {
var statearr_14047_16171 = state_13889__$1;
(statearr_14047_16171[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (16))){
var inst_13778 = (state_13889[(7)]);
var inst_13780 = cljs.core.chunked_seq_QMARK_(inst_13778);
var state_13889__$1 = state_13889;
if(inst_13780){
var statearr_14048_16177 = state_13889__$1;
(statearr_14048_16177[(1)] = (19));

} else {
var statearr_14049_16178 = state_13889__$1;
(statearr_14049_16178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (38))){
var inst_13867 = (state_13889[(2)]);
var state_13889__$1 = state_13889;
var statearr_14050_16180 = state_13889__$1;
(statearr_14050_16180[(2)] = inst_13867);

(statearr_14050_16180[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (30))){
var state_13889__$1 = state_13889;
var statearr_14051_16181 = state_13889__$1;
(statearr_14051_16181[(2)] = null);

(statearr_14051_16181[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (10))){
var inst_13753 = (state_13889[(14)]);
var inst_13755 = (state_13889[(16)]);
var inst_13763 = cljs.core._nth(inst_13753,inst_13755);
var inst_13764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13763,(0),null);
var inst_13765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13763,(1),null);
var state_13889__$1 = (function (){var statearr_14052 = state_13889;
(statearr_14052[(24)] = inst_13764);

return statearr_14052;
})();
if(cljs.core.truth_(inst_13765)){
var statearr_14054_16182 = state_13889__$1;
(statearr_14054_16182[(1)] = (13));

} else {
var statearr_14055_16183 = state_13889__$1;
(statearr_14055_16183[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (18))){
var inst_13808 = (state_13889[(2)]);
var state_13889__$1 = state_13889;
var statearr_14056_16184 = state_13889__$1;
(statearr_14056_16184[(2)] = inst_13808);

(statearr_14056_16184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (42))){
var state_13889__$1 = state_13889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13889__$1,(45),dchan);
} else {
if((state_val_13890 === (37))){
var inst_13845 = (state_13889[(23)]);
var inst_13743 = (state_13889[(12)]);
var inst_13854 = (state_13889[(22)]);
var inst_13854__$1 = cljs.core.first(inst_13845);
var inst_13858 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13854__$1,inst_13743,done);
var state_13889__$1 = (function (){var statearr_14057 = state_13889;
(statearr_14057[(22)] = inst_13854__$1);

return statearr_14057;
})();
if(cljs.core.truth_(inst_13858)){
var statearr_14058_16186 = state_13889__$1;
(statearr_14058_16186[(1)] = (39));

} else {
var statearr_14059_16187 = state_13889__$1;
(statearr_14059_16187[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13890 === (8))){
var inst_13755 = (state_13889[(16)]);
var inst_13754 = (state_13889[(17)]);
var inst_13757 = (inst_13755 < inst_13754);
var inst_13758 = inst_13757;
var state_13889__$1 = state_13889;
if(cljs.core.truth_(inst_13758)){
var statearr_14060_16189 = state_13889__$1;
(statearr_14060_16189[(1)] = (10));

} else {
var statearr_14061_16190 = state_13889__$1;
(statearr_14061_16190[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__11970__auto__ = null;
var cljs$core$async$mult_$_state_machine__11970__auto____0 = (function (){
var statearr_14066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14066[(0)] = cljs$core$async$mult_$_state_machine__11970__auto__);

(statearr_14066[(1)] = (1));

return statearr_14066;
});
var cljs$core$async$mult_$_state_machine__11970__auto____1 = (function (state_13889){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_13889);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e14069){var ex__11973__auto__ = e14069;
var statearr_14071_16203 = state_13889;
(statearr_14071_16203[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_13889[(4)]))){
var statearr_14072_16209 = state_13889;
(statearr_14072_16209[(1)] = cljs.core.first((state_13889[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16214 = state_13889;
state_13889 = G__16214;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11970__auto__ = function(state_13889){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11970__auto____1.call(this,state_13889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11970__auto____0;
cljs$core$async$mult_$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11970__auto____1;
return cljs$core$async$mult_$_state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_14073 = f__12798__auto__();
(statearr_14073[(6)] = c__12797__auto___15938);

return statearr_14073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14077 = arguments.length;
switch (G__14077) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16232 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16232(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16252 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16252(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16267 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16267(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16276 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16276(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16294 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16294(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16312 = arguments.length;
var i__5727__auto___16313 = (0);
while(true){
if((i__5727__auto___16313 < len__5726__auto___16312)){
args__5732__auto__.push((arguments[i__5727__auto___16313]));

var G__16314 = (i__5727__auto___16313 + (1));
i__5727__auto___16313 = G__16314;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14098){
var map__14099 = p__14098;
var map__14099__$1 = cljs.core.__destructure_map(map__14099);
var opts = map__14099__$1;
var statearr_14100_16315 = state;
(statearr_14100_16315[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_14101_16316 = state;
(statearr_14101_16316[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14105_16318 = state;
(statearr_14105_16318[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14092){
var G__14093 = cljs.core.first(seq14092);
var seq14092__$1 = cljs.core.next(seq14092);
var G__14094 = cljs.core.first(seq14092__$1);
var seq14092__$2 = cljs.core.next(seq14092__$1);
var G__14095 = cljs.core.first(seq14092__$2);
var seq14092__$3 = cljs.core.next(seq14092__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14093,G__14094,G__14095,seq14092__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14130 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14131){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14131 = meta14131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14132,meta14131__$1){
var self__ = this;
var _14132__$1 = this;
return (new cljs.core.async.t_cljs$core$async14130(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14131__$1));
}));

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14132){
var self__ = this;
var _14132__$1 = this;
return self__.meta14131;
}));

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async14130.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async14130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14131","meta14131",-170391923,null)], null);
}));

(cljs.core.async.t_cljs$core$async14130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14130");

(cljs.core.async.t_cljs$core$async14130.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14130.
 */
cljs.core.async.__GT_t_cljs$core$async14130 = (function cljs$core$async$__GT_t_cljs$core$async14130(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14131){
return (new cljs.core.async.t_cljs$core$async14130(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14131));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async14130(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__12797__auto___16331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_14251){
var state_val_14252 = (state_14251[(1)]);
if((state_val_14252 === (7))){
var inst_14201 = (state_14251[(2)]);
var state_14251__$1 = state_14251;
if(cljs.core.truth_(inst_14201)){
var statearr_14253_16337 = state_14251__$1;
(statearr_14253_16337[(1)] = (8));

} else {
var statearr_14254_16338 = state_14251__$1;
(statearr_14254_16338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (20))){
var inst_14190 = (state_14251[(7)]);
var state_14251__$1 = state_14251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14251__$1,(23),out,inst_14190);
} else {
if((state_val_14252 === (1))){
var inst_14169 = calc_state();
var inst_14170 = cljs.core.__destructure_map(inst_14169);
var inst_14171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14170,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14170,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14170,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14174 = inst_14169;
var state_14251__$1 = (function (){var statearr_14262 = state_14251;
(statearr_14262[(8)] = inst_14173);

(statearr_14262[(9)] = inst_14171);

(statearr_14262[(10)] = inst_14172);

(statearr_14262[(11)] = inst_14174);

return statearr_14262;
})();
var statearr_14263_16340 = state_14251__$1;
(statearr_14263_16340[(2)] = null);

(statearr_14263_16340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (24))){
var inst_14177 = (state_14251[(12)]);
var inst_14174 = inst_14177;
var state_14251__$1 = (function (){var statearr_14266 = state_14251;
(statearr_14266[(11)] = inst_14174);

return statearr_14266;
})();
var statearr_14267_16341 = state_14251__$1;
(statearr_14267_16341[(2)] = null);

(statearr_14267_16341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (4))){
var inst_14196 = (state_14251[(13)]);
var inst_14190 = (state_14251[(7)]);
var inst_14189 = (state_14251[(2)]);
var inst_14190__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14189,(0),null);
var inst_14192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14189,(1),null);
var inst_14196__$1 = (inst_14190__$1 == null);
var state_14251__$1 = (function (){var statearr_14269 = state_14251;
(statearr_14269[(13)] = inst_14196__$1);

(statearr_14269[(7)] = inst_14190__$1);

(statearr_14269[(14)] = inst_14192);

return statearr_14269;
})();
if(cljs.core.truth_(inst_14196__$1)){
var statearr_14271_16343 = state_14251__$1;
(statearr_14271_16343[(1)] = (5));

} else {
var statearr_14272_16348 = state_14251__$1;
(statearr_14272_16348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (15))){
var inst_14178 = (state_14251[(15)]);
var inst_14219 = (state_14251[(16)]);
var inst_14219__$1 = cljs.core.empty_QMARK_(inst_14178);
var state_14251__$1 = (function (){var statearr_14273 = state_14251;
(statearr_14273[(16)] = inst_14219__$1);

return statearr_14273;
})();
if(inst_14219__$1){
var statearr_14274_16349 = state_14251__$1;
(statearr_14274_16349[(1)] = (17));

} else {
var statearr_14275_16350 = state_14251__$1;
(statearr_14275_16350[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (21))){
var inst_14177 = (state_14251[(12)]);
var inst_14174 = inst_14177;
var state_14251__$1 = (function (){var statearr_14276 = state_14251;
(statearr_14276[(11)] = inst_14174);

return statearr_14276;
})();
var statearr_14277_16355 = state_14251__$1;
(statearr_14277_16355[(2)] = null);

(statearr_14277_16355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (13))){
var inst_14208 = (state_14251[(2)]);
var inst_14209 = calc_state();
var inst_14174 = inst_14209;
var state_14251__$1 = (function (){var statearr_14278 = state_14251;
(statearr_14278[(17)] = inst_14208);

(statearr_14278[(11)] = inst_14174);

return statearr_14278;
})();
var statearr_14279_16357 = state_14251__$1;
(statearr_14279_16357[(2)] = null);

(statearr_14279_16357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (22))){
var inst_14242 = (state_14251[(2)]);
var state_14251__$1 = state_14251;
var statearr_14283_16358 = state_14251__$1;
(statearr_14283_16358[(2)] = inst_14242);

(statearr_14283_16358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (6))){
var inst_14192 = (state_14251[(14)]);
var inst_14199 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14192,change);
var state_14251__$1 = state_14251;
var statearr_14284_16364 = state_14251__$1;
(statearr_14284_16364[(2)] = inst_14199);

(statearr_14284_16364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (25))){
var state_14251__$1 = state_14251;
var statearr_14285_16365 = state_14251__$1;
(statearr_14285_16365[(2)] = null);

(statearr_14285_16365[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (17))){
var inst_14192 = (state_14251[(14)]);
var inst_14182 = (state_14251[(18)]);
var inst_14221 = (inst_14182.cljs$core$IFn$_invoke$arity$1 ? inst_14182.cljs$core$IFn$_invoke$arity$1(inst_14192) : inst_14182.call(null, inst_14192));
var inst_14222 = cljs.core.not(inst_14221);
var state_14251__$1 = state_14251;
var statearr_14288_16370 = state_14251__$1;
(statearr_14288_16370[(2)] = inst_14222);

(statearr_14288_16370[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (3))){
var inst_14249 = (state_14251[(2)]);
var state_14251__$1 = state_14251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14251__$1,inst_14249);
} else {
if((state_val_14252 === (12))){
var state_14251__$1 = state_14251;
var statearr_14289_16371 = state_14251__$1;
(statearr_14289_16371[(2)] = null);

(statearr_14289_16371[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (2))){
var inst_14177 = (state_14251[(12)]);
var inst_14174 = (state_14251[(11)]);
var inst_14177__$1 = cljs.core.__destructure_map(inst_14174);
var inst_14178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14177__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14177__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14177__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14251__$1 = (function (){var statearr_14291 = state_14251;
(statearr_14291[(15)] = inst_14178);

(statearr_14291[(12)] = inst_14177__$1);

(statearr_14291[(18)] = inst_14182);

return statearr_14291;
})();
return cljs.core.async.ioc_alts_BANG_(state_14251__$1,(4),inst_14183);
} else {
if((state_val_14252 === (23))){
var inst_14233 = (state_14251[(2)]);
var state_14251__$1 = state_14251;
if(cljs.core.truth_(inst_14233)){
var statearr_14297_16375 = state_14251__$1;
(statearr_14297_16375[(1)] = (24));

} else {
var statearr_14298_16376 = state_14251__$1;
(statearr_14298_16376[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (19))){
var inst_14225 = (state_14251[(2)]);
var state_14251__$1 = state_14251;
var statearr_14299_16377 = state_14251__$1;
(statearr_14299_16377[(2)] = inst_14225);

(statearr_14299_16377[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (11))){
var inst_14192 = (state_14251[(14)]);
var inst_14205 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14192);
var state_14251__$1 = state_14251;
var statearr_14300_16378 = state_14251__$1;
(statearr_14300_16378[(2)] = inst_14205);

(statearr_14300_16378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (9))){
var inst_14178 = (state_14251[(15)]);
var inst_14192 = (state_14251[(14)]);
var inst_14213 = (state_14251[(19)]);
var inst_14213__$1 = (inst_14178.cljs$core$IFn$_invoke$arity$1 ? inst_14178.cljs$core$IFn$_invoke$arity$1(inst_14192) : inst_14178.call(null, inst_14192));
var state_14251__$1 = (function (){var statearr_14302 = state_14251;
(statearr_14302[(19)] = inst_14213__$1);

return statearr_14302;
})();
if(cljs.core.truth_(inst_14213__$1)){
var statearr_14303_16381 = state_14251__$1;
(statearr_14303_16381[(1)] = (14));

} else {
var statearr_14304_16382 = state_14251__$1;
(statearr_14304_16382[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (5))){
var inst_14196 = (state_14251[(13)]);
var state_14251__$1 = state_14251;
var statearr_14305_16386 = state_14251__$1;
(statearr_14305_16386[(2)] = inst_14196);

(statearr_14305_16386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (14))){
var inst_14213 = (state_14251[(19)]);
var state_14251__$1 = state_14251;
var statearr_14306_16392 = state_14251__$1;
(statearr_14306_16392[(2)] = inst_14213);

(statearr_14306_16392[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (26))){
var inst_14238 = (state_14251[(2)]);
var state_14251__$1 = state_14251;
var statearr_14307_16396 = state_14251__$1;
(statearr_14307_16396[(2)] = inst_14238);

(statearr_14307_16396[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (16))){
var inst_14227 = (state_14251[(2)]);
var state_14251__$1 = state_14251;
if(cljs.core.truth_(inst_14227)){
var statearr_14308_16397 = state_14251__$1;
(statearr_14308_16397[(1)] = (20));

} else {
var statearr_14309_16398 = state_14251__$1;
(statearr_14309_16398[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (10))){
var inst_14244 = (state_14251[(2)]);
var state_14251__$1 = state_14251;
var statearr_14310_16399 = state_14251__$1;
(statearr_14310_16399[(2)] = inst_14244);

(statearr_14310_16399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (18))){
var inst_14219 = (state_14251[(16)]);
var state_14251__$1 = state_14251;
var statearr_14311_16400 = state_14251__$1;
(statearr_14311_16400[(2)] = inst_14219);

(statearr_14311_16400[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14252 === (8))){
var inst_14190 = (state_14251[(7)]);
var inst_14203 = (inst_14190 == null);
var state_14251__$1 = state_14251;
if(cljs.core.truth_(inst_14203)){
var statearr_14312_16405 = state_14251__$1;
(statearr_14312_16405[(1)] = (11));

} else {
var statearr_14313_16406 = state_14251__$1;
(statearr_14313_16406[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__11970__auto__ = null;
var cljs$core$async$mix_$_state_machine__11970__auto____0 = (function (){
var statearr_14314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14314[(0)] = cljs$core$async$mix_$_state_machine__11970__auto__);

(statearr_14314[(1)] = (1));

return statearr_14314;
});
var cljs$core$async$mix_$_state_machine__11970__auto____1 = (function (state_14251){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_14251);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e14315){var ex__11973__auto__ = e14315;
var statearr_14316_16413 = state_14251;
(statearr_14316_16413[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_14251[(4)]))){
var statearr_14317_16414 = state_14251;
(statearr_14317_16414[(1)] = cljs.core.first((state_14251[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16415 = state_14251;
state_14251 = G__16415;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11970__auto__ = function(state_14251){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11970__auto____1.call(this,state_14251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11970__auto____0;
cljs$core$async$mix_$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11970__auto____1;
return cljs$core$async$mix_$_state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_14318 = f__12798__auto__();
(statearr_14318[(6)] = c__12797__auto___16331);

return statearr_14318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16421 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16421(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16429 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16429(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16432 = (function() {
var G__16433 = null;
var G__16433__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16433__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16433 = function(p,v){
switch(arguments.length){
case 1:
return G__16433__1.call(this,p);
case 2:
return G__16433__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16433.cljs$core$IFn$_invoke$arity$1 = G__16433__1;
G__16433.cljs$core$IFn$_invoke$arity$2 = G__16433__2;
return G__16433;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14336 = arguments.length;
switch (G__14336) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16432(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16432(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14348 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14349){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14349 = meta14349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14350,meta14349__$1){
var self__ = this;
var _14350__$1 = this;
return (new cljs.core.async.t_cljs$core$async14348(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14349__$1));
}));

(cljs.core.async.t_cljs$core$async14348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14350){
var self__ = this;
var _14350__$1 = this;
return self__.meta14349;
}));

(cljs.core.async.t_cljs$core$async14348.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14348.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14348.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14348.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async14348.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14348.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14349","meta14349",849195691,null)], null);
}));

(cljs.core.async.t_cljs$core$async14348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14348");

(cljs.core.async.t_cljs$core$async14348.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14348.
 */
cljs.core.async.__GT_t_cljs$core$async14348 = (function cljs$core$async$__GT_t_cljs$core$async14348(ch,topic_fn,buf_fn,mults,ensure_mult,meta14349){
return (new cljs.core.async.t_cljs$core$async14348(ch,topic_fn,buf_fn,mults,ensure_mult,meta14349));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14343 = arguments.length;
switch (G__14343) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__14337_SHARP_){
if(cljs.core.truth_((p1__14337_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14337_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14337_SHARP_.call(null, topic)))){
return p1__14337_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14337_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async14348(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__12797__auto___16450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_14430){
var state_val_14431 = (state_14430[(1)]);
if((state_val_14431 === (7))){
var inst_14426 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
var statearr_14432_16466 = state_14430__$1;
(statearr_14432_16466[(2)] = inst_14426);

(statearr_14432_16466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (20))){
var state_14430__$1 = state_14430;
var statearr_14433_16467 = state_14430__$1;
(statearr_14433_16467[(2)] = null);

(statearr_14433_16467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (1))){
var state_14430__$1 = state_14430;
var statearr_14434_16469 = state_14430__$1;
(statearr_14434_16469[(2)] = null);

(statearr_14434_16469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (24))){
var inst_14409 = (state_14430[(7)]);
var inst_14418 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14409);
var state_14430__$1 = state_14430;
var statearr_14435_16474 = state_14430__$1;
(statearr_14435_16474[(2)] = inst_14418);

(statearr_14435_16474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (4))){
var inst_14355 = (state_14430[(8)]);
var inst_14355__$1 = (state_14430[(2)]);
var inst_14356 = (inst_14355__$1 == null);
var state_14430__$1 = (function (){var statearr_14436 = state_14430;
(statearr_14436[(8)] = inst_14355__$1);

return statearr_14436;
})();
if(cljs.core.truth_(inst_14356)){
var statearr_14437_16476 = state_14430__$1;
(statearr_14437_16476[(1)] = (5));

} else {
var statearr_14438_16477 = state_14430__$1;
(statearr_14438_16477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (15))){
var inst_14403 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
var statearr_14439_16481 = state_14430__$1;
(statearr_14439_16481[(2)] = inst_14403);

(statearr_14439_16481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (21))){
var inst_14423 = (state_14430[(2)]);
var state_14430__$1 = (function (){var statearr_14440 = state_14430;
(statearr_14440[(9)] = inst_14423);

return statearr_14440;
})();
var statearr_14441_16482 = state_14430__$1;
(statearr_14441_16482[(2)] = null);

(statearr_14441_16482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (13))){
var inst_14385 = (state_14430[(10)]);
var inst_14387 = cljs.core.chunked_seq_QMARK_(inst_14385);
var state_14430__$1 = state_14430;
if(inst_14387){
var statearr_14442_16486 = state_14430__$1;
(statearr_14442_16486[(1)] = (16));

} else {
var statearr_14443_16487 = state_14430__$1;
(statearr_14443_16487[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (22))){
var inst_14415 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
if(cljs.core.truth_(inst_14415)){
var statearr_14444_16492 = state_14430__$1;
(statearr_14444_16492[(1)] = (23));

} else {
var statearr_14445_16493 = state_14430__$1;
(statearr_14445_16493[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (6))){
var inst_14355 = (state_14430[(8)]);
var inst_14409 = (state_14430[(7)]);
var inst_14411 = (state_14430[(11)]);
var inst_14409__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14355) : topic_fn.call(null, inst_14355));
var inst_14410 = cljs.core.deref(mults);
var inst_14411__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14410,inst_14409__$1);
var state_14430__$1 = (function (){var statearr_14446 = state_14430;
(statearr_14446[(7)] = inst_14409__$1);

(statearr_14446[(11)] = inst_14411__$1);

return statearr_14446;
})();
if(cljs.core.truth_(inst_14411__$1)){
var statearr_14447_16498 = state_14430__$1;
(statearr_14447_16498[(1)] = (19));

} else {
var statearr_14448_16499 = state_14430__$1;
(statearr_14448_16499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (25))){
var inst_14420 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
var statearr_14449_16503 = state_14430__$1;
(statearr_14449_16503[(2)] = inst_14420);

(statearr_14449_16503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (17))){
var inst_14385 = (state_14430[(10)]);
var inst_14394 = cljs.core.first(inst_14385);
var inst_14395 = cljs.core.async.muxch_STAR_(inst_14394);
var inst_14396 = cljs.core.async.close_BANG_(inst_14395);
var inst_14397 = cljs.core.next(inst_14385);
var inst_14365 = inst_14397;
var inst_14366 = null;
var inst_14367 = (0);
var inst_14368 = (0);
var state_14430__$1 = (function (){var statearr_14450 = state_14430;
(statearr_14450[(12)] = inst_14368);

(statearr_14450[(13)] = inst_14396);

(statearr_14450[(14)] = inst_14366);

(statearr_14450[(15)] = inst_14367);

(statearr_14450[(16)] = inst_14365);

return statearr_14450;
})();
var statearr_14451_16513 = state_14430__$1;
(statearr_14451_16513[(2)] = null);

(statearr_14451_16513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (3))){
var inst_14428 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14430__$1,inst_14428);
} else {
if((state_val_14431 === (12))){
var inst_14405 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
var statearr_14455_16522 = state_14430__$1;
(statearr_14455_16522[(2)] = inst_14405);

(statearr_14455_16522[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (2))){
var state_14430__$1 = state_14430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14430__$1,(4),ch);
} else {
if((state_val_14431 === (23))){
var state_14430__$1 = state_14430;
var statearr_14456_16523 = state_14430__$1;
(statearr_14456_16523[(2)] = null);

(statearr_14456_16523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (19))){
var inst_14355 = (state_14430[(8)]);
var inst_14411 = (state_14430[(11)]);
var inst_14413 = cljs.core.async.muxch_STAR_(inst_14411);
var state_14430__$1 = state_14430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14430__$1,(22),inst_14413,inst_14355);
} else {
if((state_val_14431 === (11))){
var inst_14385 = (state_14430[(10)]);
var inst_14365 = (state_14430[(16)]);
var inst_14385__$1 = cljs.core.seq(inst_14365);
var state_14430__$1 = (function (){var statearr_14457 = state_14430;
(statearr_14457[(10)] = inst_14385__$1);

return statearr_14457;
})();
if(inst_14385__$1){
var statearr_14458_16525 = state_14430__$1;
(statearr_14458_16525[(1)] = (13));

} else {
var statearr_14459_16526 = state_14430__$1;
(statearr_14459_16526[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (9))){
var inst_14407 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
var statearr_14460_16527 = state_14430__$1;
(statearr_14460_16527[(2)] = inst_14407);

(statearr_14460_16527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (5))){
var inst_14362 = cljs.core.deref(mults);
var inst_14363 = cljs.core.vals(inst_14362);
var inst_14364 = cljs.core.seq(inst_14363);
var inst_14365 = inst_14364;
var inst_14366 = null;
var inst_14367 = (0);
var inst_14368 = (0);
var state_14430__$1 = (function (){var statearr_14461 = state_14430;
(statearr_14461[(12)] = inst_14368);

(statearr_14461[(14)] = inst_14366);

(statearr_14461[(15)] = inst_14367);

(statearr_14461[(16)] = inst_14365);

return statearr_14461;
})();
var statearr_14462_16530 = state_14430__$1;
(statearr_14462_16530[(2)] = null);

(statearr_14462_16530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (14))){
var state_14430__$1 = state_14430;
var statearr_14466_16535 = state_14430__$1;
(statearr_14466_16535[(2)] = null);

(statearr_14466_16535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (16))){
var inst_14385 = (state_14430[(10)]);
var inst_14389 = cljs.core.chunk_first(inst_14385);
var inst_14390 = cljs.core.chunk_rest(inst_14385);
var inst_14391 = cljs.core.count(inst_14389);
var inst_14365 = inst_14390;
var inst_14366 = inst_14389;
var inst_14367 = inst_14391;
var inst_14368 = (0);
var state_14430__$1 = (function (){var statearr_14467 = state_14430;
(statearr_14467[(12)] = inst_14368);

(statearr_14467[(14)] = inst_14366);

(statearr_14467[(15)] = inst_14367);

(statearr_14467[(16)] = inst_14365);

return statearr_14467;
})();
var statearr_14468_16544 = state_14430__$1;
(statearr_14468_16544[(2)] = null);

(statearr_14468_16544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (10))){
var inst_14368 = (state_14430[(12)]);
var inst_14366 = (state_14430[(14)]);
var inst_14367 = (state_14430[(15)]);
var inst_14365 = (state_14430[(16)]);
var inst_14373 = cljs.core._nth(inst_14366,inst_14368);
var inst_14374 = cljs.core.async.muxch_STAR_(inst_14373);
var inst_14375 = cljs.core.async.close_BANG_(inst_14374);
var inst_14376 = (inst_14368 + (1));
var tmp14463 = inst_14366;
var tmp14464 = inst_14367;
var tmp14465 = inst_14365;
var inst_14365__$1 = tmp14465;
var inst_14366__$1 = tmp14463;
var inst_14367__$1 = tmp14464;
var inst_14368__$1 = inst_14376;
var state_14430__$1 = (function (){var statearr_14470 = state_14430;
(statearr_14470[(12)] = inst_14368__$1);

(statearr_14470[(14)] = inst_14366__$1);

(statearr_14470[(15)] = inst_14367__$1);

(statearr_14470[(17)] = inst_14375);

(statearr_14470[(16)] = inst_14365__$1);

return statearr_14470;
})();
var statearr_14471_16556 = state_14430__$1;
(statearr_14471_16556[(2)] = null);

(statearr_14471_16556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (18))){
var inst_14400 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
var statearr_14475_16562 = state_14430__$1;
(statearr_14475_16562[(2)] = inst_14400);

(statearr_14475_16562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (8))){
var inst_14368 = (state_14430[(12)]);
var inst_14367 = (state_14430[(15)]);
var inst_14370 = (inst_14368 < inst_14367);
var inst_14371 = inst_14370;
var state_14430__$1 = state_14430;
if(cljs.core.truth_(inst_14371)){
var statearr_14476_16566 = state_14430__$1;
(statearr_14476_16566[(1)] = (10));

} else {
var statearr_14477_16571 = state_14430__$1;
(statearr_14477_16571[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11970__auto__ = null;
var cljs$core$async$state_machine__11970__auto____0 = (function (){
var statearr_14481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14481[(0)] = cljs$core$async$state_machine__11970__auto__);

(statearr_14481[(1)] = (1));

return statearr_14481;
});
var cljs$core$async$state_machine__11970__auto____1 = (function (state_14430){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_14430);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e14482){var ex__11973__auto__ = e14482;
var statearr_14483_16579 = state_14430;
(statearr_14483_16579[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_14430[(4)]))){
var statearr_14484_16584 = state_14430;
(statearr_14484_16584[(1)] = cljs.core.first((state_14430[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16585 = state_14430;
state_14430 = G__16585;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$state_machine__11970__auto__ = function(state_14430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11970__auto____1.call(this,state_14430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11970__auto____0;
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11970__auto____1;
return cljs$core$async$state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_14485 = f__12798__auto__();
(statearr_14485[(6)] = c__12797__auto___16450);

return statearr_14485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__14487 = arguments.length;
switch (G__14487) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__14496 = arguments.length;
switch (G__14496) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__14508 = arguments.length;
switch (G__14508) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__12797__auto___16590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_14560){
var state_val_14561 = (state_14560[(1)]);
if((state_val_14561 === (7))){
var state_14560__$1 = state_14560;
var statearr_14570_16594 = state_14560__$1;
(statearr_14570_16594[(2)] = null);

(statearr_14570_16594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14561 === (1))){
var state_14560__$1 = state_14560;
var statearr_14577_16595 = state_14560__$1;
(statearr_14577_16595[(2)] = null);

(statearr_14577_16595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14561 === (4))){
var inst_14514 = (state_14560[(7)]);
var inst_14515 = (state_14560[(8)]);
var inst_14517 = (inst_14515 < inst_14514);
var state_14560__$1 = state_14560;
if(cljs.core.truth_(inst_14517)){
var statearr_14578_16596 = state_14560__$1;
(statearr_14578_16596[(1)] = (6));

} else {
var statearr_14579_16597 = state_14560__$1;
(statearr_14579_16597[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14561 === (15))){
var inst_14546 = (state_14560[(9)]);
var inst_14551 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_14546);
var state_14560__$1 = state_14560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14560__$1,(17),out,inst_14551);
} else {
if((state_val_14561 === (13))){
var inst_14546 = (state_14560[(9)]);
var inst_14546__$1 = (state_14560[(2)]);
var inst_14547 = cljs.core.some(cljs.core.nil_QMARK_,inst_14546__$1);
var state_14560__$1 = (function (){var statearr_14589 = state_14560;
(statearr_14589[(9)] = inst_14546__$1);

return statearr_14589;
})();
if(cljs.core.truth_(inst_14547)){
var statearr_14590_16601 = state_14560__$1;
(statearr_14590_16601[(1)] = (14));

} else {
var statearr_14591_16602 = state_14560__$1;
(statearr_14591_16602[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14561 === (6))){
var state_14560__$1 = state_14560;
var statearr_14592_16604 = state_14560__$1;
(statearr_14592_16604[(2)] = null);

(statearr_14592_16604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14561 === (17))){
var inst_14553 = (state_14560[(2)]);
var state_14560__$1 = (function (){var statearr_14608 = state_14560;
(statearr_14608[(10)] = inst_14553);

return statearr_14608;
})();
var statearr_14609_16609 = state_14560__$1;
(statearr_14609_16609[(2)] = null);

(statearr_14609_16609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14561 === (3))){
var inst_14558 = (state_14560[(2)]);
var state_14560__$1 = state_14560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14560__$1,inst_14558);
} else {
if((state_val_14561 === (12))){
var _ = (function (){var statearr_14616 = state_14560;
(statearr_14616[(4)] = cljs.core.rest((state_14560[(4)])));

return statearr_14616;
})();
var state_14560__$1 = state_14560;
var ex14607 = (state_14560__$1[(2)]);
var statearr_14617_16619 = state_14560__$1;
(statearr_14617_16619[(5)] = ex14607);


if((ex14607 instanceof Object)){
var statearr_14618_16624 = state_14560__$1;
(statearr_14618_16624[(1)] = (11));

(statearr_14618_16624[(5)] = null);

} else {
throw ex14607;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14561 === (2))){
var inst_14513 = cljs.core.reset_BANG_(dctr,cnt);
var inst_14514 = cnt;
var inst_14515 = (0);
var state_14560__$1 = (function (){var statearr_14619 = state_14560;
(statearr_14619[(7)] = inst_14514);

(statearr_14619[(8)] = inst_14515);

(statearr_14619[(11)] = inst_14513);

return statearr_14619;
})();
var statearr_14620_16629 = state_14560__$1;
(statearr_14620_16629[(2)] = null);

(statearr_14620_16629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14561 === (11))){
var inst_14525 = (state_14560[(2)]);
var inst_14526 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_14560__$1 = (function (){var statearr_14621 = state_14560;
(statearr_14621[(12)] = inst_14525);

return statearr_14621;
})();
var statearr_14622_16634 = state_14560__$1;
(statearr_14622_16634[(2)] = inst_14526);

(statearr_14622_16634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14561 === (9))){
var inst_14515 = (state_14560[(8)]);
var _ = (function (){var statearr_14623 = state_14560;
(statearr_14623[(4)] = cljs.core.cons((12),(state_14560[(4)])));

return statearr_14623;
})();
var inst_14532 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_14515) : chs__$1.call(null, inst_14515));
var inst_14533 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_14515) : done.call(null, inst_14515));
var inst_14534 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_14532,inst_14533);
var ___$1 = (function (){var statearr_14624 = state_14560;
(statearr_14624[(4)] = cljs.core.rest((state_14560[(4)])));

return statearr_14624;
})();
var state_14560__$1 = state_14560;
var statearr_14625_16647 = state_14560__$1;
(statearr_14625_16647[(2)] = inst_14534);

(statearr_14625_16647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14561 === (5))){
var inst_14544 = (state_14560[(2)]);
var state_14560__$1 = (function (){var statearr_14626 = state_14560;
(statearr_14626[(13)] = inst_14544);

return statearr_14626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14560__$1,(13),dchan);
} else {
if((state_val_14561 === (14))){
var inst_14549 = cljs.core.async.close_BANG_(out);
var state_14560__$1 = state_14560;
var statearr_14629_16652 = state_14560__$1;
(statearr_14629_16652[(2)] = inst_14549);

(statearr_14629_16652[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14561 === (16))){
var inst_14556 = (state_14560[(2)]);
var state_14560__$1 = state_14560;
var statearr_14633_16658 = state_14560__$1;
(statearr_14633_16658[(2)] = inst_14556);

(statearr_14633_16658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14561 === (10))){
var inst_14515 = (state_14560[(8)]);
var inst_14537 = (state_14560[(2)]);
var inst_14538 = (inst_14515 + (1));
var inst_14515__$1 = inst_14538;
var state_14560__$1 = (function (){var statearr_14634 = state_14560;
(statearr_14634[(8)] = inst_14515__$1);

(statearr_14634[(14)] = inst_14537);

return statearr_14634;
})();
var statearr_14635_16661 = state_14560__$1;
(statearr_14635_16661[(2)] = null);

(statearr_14635_16661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14561 === (8))){
var inst_14542 = (state_14560[(2)]);
var state_14560__$1 = state_14560;
var statearr_14637_16662 = state_14560__$1;
(statearr_14637_16662[(2)] = inst_14542);

(statearr_14637_16662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11970__auto__ = null;
var cljs$core$async$state_machine__11970__auto____0 = (function (){
var statearr_14638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14638[(0)] = cljs$core$async$state_machine__11970__auto__);

(statearr_14638[(1)] = (1));

return statearr_14638;
});
var cljs$core$async$state_machine__11970__auto____1 = (function (state_14560){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_14560);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e14639){var ex__11973__auto__ = e14639;
var statearr_14640_16668 = state_14560;
(statearr_14640_16668[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_14560[(4)]))){
var statearr_14641_16669 = state_14560;
(statearr_14641_16669[(1)] = cljs.core.first((state_14560[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16676 = state_14560;
state_14560 = G__16676;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$state_machine__11970__auto__ = function(state_14560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11970__auto____1.call(this,state_14560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11970__auto____0;
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11970__auto____1;
return cljs$core$async$state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_14642 = f__12798__auto__();
(statearr_14642[(6)] = c__12797__auto___16590);

return statearr_14642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__14651 = arguments.length;
switch (G__14651) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12797__auto___16683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_14683){
var state_val_14684 = (state_14683[(1)]);
if((state_val_14684 === (7))){
var inst_14662 = (state_14683[(7)]);
var inst_14663 = (state_14683[(8)]);
var inst_14662__$1 = (state_14683[(2)]);
var inst_14663__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14662__$1,(0),null);
var inst_14664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14662__$1,(1),null);
var inst_14665 = (inst_14663__$1 == null);
var state_14683__$1 = (function (){var statearr_14685 = state_14683;
(statearr_14685[(7)] = inst_14662__$1);

(statearr_14685[(8)] = inst_14663__$1);

(statearr_14685[(9)] = inst_14664);

return statearr_14685;
})();
if(cljs.core.truth_(inst_14665)){
var statearr_14686_16686 = state_14683__$1;
(statearr_14686_16686[(1)] = (8));

} else {
var statearr_14687_16689 = state_14683__$1;
(statearr_14687_16689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (1))){
var inst_14652 = cljs.core.vec(chs);
var inst_14653 = inst_14652;
var state_14683__$1 = (function (){var statearr_14688 = state_14683;
(statearr_14688[(10)] = inst_14653);

return statearr_14688;
})();
var statearr_14689_16692 = state_14683__$1;
(statearr_14689_16692[(2)] = null);

(statearr_14689_16692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (4))){
var inst_14653 = (state_14683[(10)]);
var state_14683__$1 = state_14683;
return cljs.core.async.ioc_alts_BANG_(state_14683__$1,(7),inst_14653);
} else {
if((state_val_14684 === (6))){
var inst_14679 = (state_14683[(2)]);
var state_14683__$1 = state_14683;
var statearr_14690_16699 = state_14683__$1;
(statearr_14690_16699[(2)] = inst_14679);

(statearr_14690_16699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (3))){
var inst_14681 = (state_14683[(2)]);
var state_14683__$1 = state_14683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14683__$1,inst_14681);
} else {
if((state_val_14684 === (2))){
var inst_14653 = (state_14683[(10)]);
var inst_14655 = cljs.core.count(inst_14653);
var inst_14656 = (inst_14655 > (0));
var state_14683__$1 = state_14683;
if(cljs.core.truth_(inst_14656)){
var statearr_14692_16704 = state_14683__$1;
(statearr_14692_16704[(1)] = (4));

} else {
var statearr_14693_16706 = state_14683__$1;
(statearr_14693_16706[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (11))){
var inst_14653 = (state_14683[(10)]);
var inst_14672 = (state_14683[(2)]);
var tmp14691 = inst_14653;
var inst_14653__$1 = tmp14691;
var state_14683__$1 = (function (){var statearr_14706 = state_14683;
(statearr_14706[(10)] = inst_14653__$1);

(statearr_14706[(11)] = inst_14672);

return statearr_14706;
})();
var statearr_14707_16710 = state_14683__$1;
(statearr_14707_16710[(2)] = null);

(statearr_14707_16710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (9))){
var inst_14663 = (state_14683[(8)]);
var state_14683__$1 = state_14683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14683__$1,(11),out,inst_14663);
} else {
if((state_val_14684 === (5))){
var inst_14677 = cljs.core.async.close_BANG_(out);
var state_14683__$1 = state_14683;
var statearr_14708_16712 = state_14683__$1;
(statearr_14708_16712[(2)] = inst_14677);

(statearr_14708_16712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (10))){
var inst_14675 = (state_14683[(2)]);
var state_14683__$1 = state_14683;
var statearr_14709_16714 = state_14683__$1;
(statearr_14709_16714[(2)] = inst_14675);

(statearr_14709_16714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (8))){
var inst_14662 = (state_14683[(7)]);
var inst_14653 = (state_14683[(10)]);
var inst_14663 = (state_14683[(8)]);
var inst_14664 = (state_14683[(9)]);
var inst_14667 = (function (){var cs = inst_14653;
var vec__14658 = inst_14662;
var v = inst_14663;
var c = inst_14664;
return (function (p1__14649_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14649_SHARP_);
});
})();
var inst_14668 = cljs.core.filterv(inst_14667,inst_14653);
var inst_14653__$1 = inst_14668;
var state_14683__$1 = (function (){var statearr_14710 = state_14683;
(statearr_14710[(10)] = inst_14653__$1);

return statearr_14710;
})();
var statearr_14711_16720 = state_14683__$1;
(statearr_14711_16720[(2)] = null);

(statearr_14711_16720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11970__auto__ = null;
var cljs$core$async$state_machine__11970__auto____0 = (function (){
var statearr_14712 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14712[(0)] = cljs$core$async$state_machine__11970__auto__);

(statearr_14712[(1)] = (1));

return statearr_14712;
});
var cljs$core$async$state_machine__11970__auto____1 = (function (state_14683){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_14683);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e14713){var ex__11973__auto__ = e14713;
var statearr_14714_16725 = state_14683;
(statearr_14714_16725[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_14683[(4)]))){
var statearr_14715_16727 = state_14683;
(statearr_14715_16727[(1)] = cljs.core.first((state_14683[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16728 = state_14683;
state_14683 = G__16728;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$state_machine__11970__auto__ = function(state_14683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11970__auto____1.call(this,state_14683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11970__auto____0;
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11970__auto____1;
return cljs$core$async$state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_14716 = f__12798__auto__();
(statearr_14716[(6)] = c__12797__auto___16683);

return statearr_14716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__14726 = arguments.length;
switch (G__14726) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12797__auto___16746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_14763){
var state_val_14764 = (state_14763[(1)]);
if((state_val_14764 === (7))){
var inst_14738 = (state_14763[(7)]);
var inst_14738__$1 = (state_14763[(2)]);
var inst_14739 = (inst_14738__$1 == null);
var inst_14743 = cljs.core.not(inst_14739);
var state_14763__$1 = (function (){var statearr_14771 = state_14763;
(statearr_14771[(7)] = inst_14738__$1);

return statearr_14771;
})();
if(inst_14743){
var statearr_14772_16749 = state_14763__$1;
(statearr_14772_16749[(1)] = (8));

} else {
var statearr_14773_16750 = state_14763__$1;
(statearr_14773_16750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14764 === (1))){
var inst_14730 = (0);
var state_14763__$1 = (function (){var statearr_14774 = state_14763;
(statearr_14774[(8)] = inst_14730);

return statearr_14774;
})();
var statearr_14775_16757 = state_14763__$1;
(statearr_14775_16757[(2)] = null);

(statearr_14775_16757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14764 === (4))){
var state_14763__$1 = state_14763;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14763__$1,(7),ch);
} else {
if((state_val_14764 === (6))){
var inst_14758 = (state_14763[(2)]);
var state_14763__$1 = state_14763;
var statearr_14776_16763 = state_14763__$1;
(statearr_14776_16763[(2)] = inst_14758);

(statearr_14776_16763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14764 === (3))){
var inst_14760 = (state_14763[(2)]);
var inst_14761 = cljs.core.async.close_BANG_(out);
var state_14763__$1 = (function (){var statearr_14777 = state_14763;
(statearr_14777[(9)] = inst_14760);

return statearr_14777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14763__$1,inst_14761);
} else {
if((state_val_14764 === (2))){
var inst_14730 = (state_14763[(8)]);
var inst_14735 = (inst_14730 < n);
var state_14763__$1 = state_14763;
if(cljs.core.truth_(inst_14735)){
var statearr_14778_16776 = state_14763__$1;
(statearr_14778_16776[(1)] = (4));

} else {
var statearr_14779_16781 = state_14763__$1;
(statearr_14779_16781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14764 === (11))){
var inst_14730 = (state_14763[(8)]);
var inst_14747 = (state_14763[(2)]);
var inst_14751 = (inst_14730 + (1));
var inst_14730__$1 = inst_14751;
var state_14763__$1 = (function (){var statearr_14780 = state_14763;
(statearr_14780[(10)] = inst_14747);

(statearr_14780[(8)] = inst_14730__$1);

return statearr_14780;
})();
var statearr_14781_16787 = state_14763__$1;
(statearr_14781_16787[(2)] = null);

(statearr_14781_16787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14764 === (9))){
var state_14763__$1 = state_14763;
var statearr_14782_16788 = state_14763__$1;
(statearr_14782_16788[(2)] = null);

(statearr_14782_16788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14764 === (5))){
var state_14763__$1 = state_14763;
var statearr_14784_16789 = state_14763__$1;
(statearr_14784_16789[(2)] = null);

(statearr_14784_16789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14764 === (10))){
var inst_14755 = (state_14763[(2)]);
var state_14763__$1 = state_14763;
var statearr_14785_16791 = state_14763__$1;
(statearr_14785_16791[(2)] = inst_14755);

(statearr_14785_16791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14764 === (8))){
var inst_14738 = (state_14763[(7)]);
var state_14763__$1 = state_14763;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14763__$1,(11),out,inst_14738);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11970__auto__ = null;
var cljs$core$async$state_machine__11970__auto____0 = (function (){
var statearr_14787 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14787[(0)] = cljs$core$async$state_machine__11970__auto__);

(statearr_14787[(1)] = (1));

return statearr_14787;
});
var cljs$core$async$state_machine__11970__auto____1 = (function (state_14763){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_14763);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e14788){var ex__11973__auto__ = e14788;
var statearr_14789_16797 = state_14763;
(statearr_14789_16797[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_14763[(4)]))){
var statearr_14790_16798 = state_14763;
(statearr_14790_16798[(1)] = cljs.core.first((state_14763[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16800 = state_14763;
state_14763 = G__16800;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$state_machine__11970__auto__ = function(state_14763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11970__auto____1.call(this,state_14763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11970__auto____0;
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11970__auto____1;
return cljs$core$async$state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_14792 = f__12798__auto__();
(statearr_14792[(6)] = c__12797__auto___16746);

return statearr_14792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14806 = (function (f,ch,meta14796,_,fn1,meta14807){
this.f = f;
this.ch = ch;
this.meta14796 = meta14796;
this._ = _;
this.fn1 = fn1;
this.meta14807 = meta14807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14808,meta14807__$1){
var self__ = this;
var _14808__$1 = this;
return (new cljs.core.async.t_cljs$core$async14806(self__.f,self__.ch,self__.meta14796,self__._,self__.fn1,meta14807__$1));
}));

(cljs.core.async.t_cljs$core$async14806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14808){
var self__ = this;
var _14808__$1 = this;
return self__.meta14807;
}));

(cljs.core.async.t_cljs$core$async14806.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14806.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14806.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14806.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__14794_SHARP_){
var G__14811 = (((p1__14794_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14794_SHARP_) : self__.f.call(null, p1__14794_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14811) : f1.call(null, G__14811));
});
}));

(cljs.core.async.t_cljs$core$async14806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14796","meta14796",-237439974,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14795","cljs.core.async/t_cljs$core$async14795",-391442727,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14807","meta14807",-1685636805,null)], null);
}));

(cljs.core.async.t_cljs$core$async14806.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14806");

(cljs.core.async.t_cljs$core$async14806.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14806");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14806.
 */
cljs.core.async.__GT_t_cljs$core$async14806 = (function cljs$core$async$__GT_t_cljs$core$async14806(f,ch,meta14796,_,fn1,meta14807){
return (new cljs.core.async.t_cljs$core$async14806(f,ch,meta14796,_,fn1,meta14807));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14795 = (function (f,ch,meta14796){
this.f = f;
this.ch = ch;
this.meta14796 = meta14796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14797,meta14796__$1){
var self__ = this;
var _14797__$1 = this;
return (new cljs.core.async.t_cljs$core$async14795(self__.f,self__.ch,meta14796__$1));
}));

(cljs.core.async.t_cljs$core$async14795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14797){
var self__ = this;
var _14797__$1 = this;
return self__.meta14796;
}));

(cljs.core.async.t_cljs$core$async14795.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14795.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14795.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14795.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14795.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async14806(self__.f,self__.ch,self__.meta14796,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14821 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14821) : self__.f.call(null, G__14821));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async14795.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14795.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14796","meta14796",-237439974,null)], null);
}));

(cljs.core.async.t_cljs$core$async14795.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14795");

(cljs.core.async.t_cljs$core$async14795.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14795");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14795.
 */
cljs.core.async.__GT_t_cljs$core$async14795 = (function cljs$core$async$__GT_t_cljs$core$async14795(f,ch,meta14796){
return (new cljs.core.async.t_cljs$core$async14795(f,ch,meta14796));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async14795(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14822 = (function (f,ch,meta14823){
this.f = f;
this.ch = ch;
this.meta14823 = meta14823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14824,meta14823__$1){
var self__ = this;
var _14824__$1 = this;
return (new cljs.core.async.t_cljs$core$async14822(self__.f,self__.ch,meta14823__$1));
}));

(cljs.core.async.t_cljs$core$async14822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14824){
var self__ = this;
var _14824__$1 = this;
return self__.meta14823;
}));

(cljs.core.async.t_cljs$core$async14822.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14822.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14822.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14822.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14822.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14822.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async14822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14823","meta14823",517097905,null)], null);
}));

(cljs.core.async.t_cljs$core$async14822.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14822");

(cljs.core.async.t_cljs$core$async14822.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14822");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14822.
 */
cljs.core.async.__GT_t_cljs$core$async14822 = (function cljs$core$async$__GT_t_cljs$core$async14822(f,ch,meta14823){
return (new cljs.core.async.t_cljs$core$async14822(f,ch,meta14823));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async14822(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14844 = (function (p,ch,meta14845){
this.p = p;
this.ch = ch;
this.meta14845 = meta14845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14846,meta14845__$1){
var self__ = this;
var _14846__$1 = this;
return (new cljs.core.async.t_cljs$core$async14844(self__.p,self__.ch,meta14845__$1));
}));

(cljs.core.async.t_cljs$core$async14844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14846){
var self__ = this;
var _14846__$1 = this;
return self__.meta14845;
}));

(cljs.core.async.t_cljs$core$async14844.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14844.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14844.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14844.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14844.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14844.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14844.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14845","meta14845",998521410,null)], null);
}));

(cljs.core.async.t_cljs$core$async14844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14844");

(cljs.core.async.t_cljs$core$async14844.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14844.
 */
cljs.core.async.__GT_t_cljs$core$async14844 = (function cljs$core$async$__GT_t_cljs$core$async14844(p,ch,meta14845){
return (new cljs.core.async.t_cljs$core$async14844(p,ch,meta14845));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async14844(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__14881 = arguments.length;
switch (G__14881) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12797__auto___16857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_14910){
var state_val_14911 = (state_14910[(1)]);
if((state_val_14911 === (7))){
var inst_14906 = (state_14910[(2)]);
var state_14910__$1 = state_14910;
var statearr_14912_16859 = state_14910__$1;
(statearr_14912_16859[(2)] = inst_14906);

(statearr_14912_16859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (1))){
var state_14910__$1 = state_14910;
var statearr_14913_16863 = state_14910__$1;
(statearr_14913_16863[(2)] = null);

(statearr_14913_16863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (4))){
var inst_14892 = (state_14910[(7)]);
var inst_14892__$1 = (state_14910[(2)]);
var inst_14893 = (inst_14892__$1 == null);
var state_14910__$1 = (function (){var statearr_14914 = state_14910;
(statearr_14914[(7)] = inst_14892__$1);

return statearr_14914;
})();
if(cljs.core.truth_(inst_14893)){
var statearr_14915_16867 = state_14910__$1;
(statearr_14915_16867[(1)] = (5));

} else {
var statearr_14916_16868 = state_14910__$1;
(statearr_14916_16868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (6))){
var inst_14892 = (state_14910[(7)]);
var inst_14897 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14892) : p.call(null, inst_14892));
var state_14910__$1 = state_14910;
if(cljs.core.truth_(inst_14897)){
var statearr_14917_16869 = state_14910__$1;
(statearr_14917_16869[(1)] = (8));

} else {
var statearr_14918_16870 = state_14910__$1;
(statearr_14918_16870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (3))){
var inst_14908 = (state_14910[(2)]);
var state_14910__$1 = state_14910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14910__$1,inst_14908);
} else {
if((state_val_14911 === (2))){
var state_14910__$1 = state_14910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14910__$1,(4),ch);
} else {
if((state_val_14911 === (11))){
var inst_14900 = (state_14910[(2)]);
var state_14910__$1 = state_14910;
var statearr_14919_16872 = state_14910__$1;
(statearr_14919_16872[(2)] = inst_14900);

(statearr_14919_16872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (9))){
var state_14910__$1 = state_14910;
var statearr_14920_16873 = state_14910__$1;
(statearr_14920_16873[(2)] = null);

(statearr_14920_16873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (5))){
var inst_14895 = cljs.core.async.close_BANG_(out);
var state_14910__$1 = state_14910;
var statearr_14927_16879 = state_14910__$1;
(statearr_14927_16879[(2)] = inst_14895);

(statearr_14927_16879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (10))){
var inst_14903 = (state_14910[(2)]);
var state_14910__$1 = (function (){var statearr_14928 = state_14910;
(statearr_14928[(8)] = inst_14903);

return statearr_14928;
})();
var statearr_14929_16891 = state_14910__$1;
(statearr_14929_16891[(2)] = null);

(statearr_14929_16891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (8))){
var inst_14892 = (state_14910[(7)]);
var state_14910__$1 = state_14910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14910__$1,(11),out,inst_14892);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11970__auto__ = null;
var cljs$core$async$state_machine__11970__auto____0 = (function (){
var statearr_14930 = [null,null,null,null,null,null,null,null,null];
(statearr_14930[(0)] = cljs$core$async$state_machine__11970__auto__);

(statearr_14930[(1)] = (1));

return statearr_14930;
});
var cljs$core$async$state_machine__11970__auto____1 = (function (state_14910){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_14910);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e14931){var ex__11973__auto__ = e14931;
var statearr_14932_16896 = state_14910;
(statearr_14932_16896[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_14910[(4)]))){
var statearr_14933_16897 = state_14910;
(statearr_14933_16897[(1)] = cljs.core.first((state_14910[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16899 = state_14910;
state_14910 = G__16899;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$state_machine__11970__auto__ = function(state_14910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11970__auto____1.call(this,state_14910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11970__auto____0;
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11970__auto____1;
return cljs$core$async$state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_14934 = f__12798__auto__();
(statearr_14934[(6)] = c__12797__auto___16857);

return statearr_14934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14937 = arguments.length;
switch (G__14937) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12797__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_15016){
var state_val_15017 = (state_15016[(1)]);
if((state_val_15017 === (7))){
var inst_15011 = (state_15016[(2)]);
var state_15016__$1 = state_15016;
var statearr_15018_16930 = state_15016__$1;
(statearr_15018_16930[(2)] = inst_15011);

(statearr_15018_16930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (20))){
var inst_14980 = (state_15016[(7)]);
var inst_14992 = (state_15016[(2)]);
var inst_14993 = cljs.core.next(inst_14980);
var inst_14966 = inst_14993;
var inst_14967 = null;
var inst_14968 = (0);
var inst_14969 = (0);
var state_15016__$1 = (function (){var statearr_15019 = state_15016;
(statearr_15019[(8)] = inst_14966);

(statearr_15019[(9)] = inst_14968);

(statearr_15019[(10)] = inst_14967);

(statearr_15019[(11)] = inst_14969);

(statearr_15019[(12)] = inst_14992);

return statearr_15019;
})();
var statearr_15023_16939 = state_15016__$1;
(statearr_15023_16939[(2)] = null);

(statearr_15023_16939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (1))){
var state_15016__$1 = state_15016;
var statearr_15024_16943 = state_15016__$1;
(statearr_15024_16943[(2)] = null);

(statearr_15024_16943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (4))){
var inst_14955 = (state_15016[(13)]);
var inst_14955__$1 = (state_15016[(2)]);
var inst_14956 = (inst_14955__$1 == null);
var state_15016__$1 = (function (){var statearr_15025 = state_15016;
(statearr_15025[(13)] = inst_14955__$1);

return statearr_15025;
})();
if(cljs.core.truth_(inst_14956)){
var statearr_15026_16946 = state_15016__$1;
(statearr_15026_16946[(1)] = (5));

} else {
var statearr_15027_16947 = state_15016__$1;
(statearr_15027_16947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (15))){
var state_15016__$1 = state_15016;
var statearr_15034_16949 = state_15016__$1;
(statearr_15034_16949[(2)] = null);

(statearr_15034_16949[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (21))){
var state_15016__$1 = state_15016;
var statearr_15035_16953 = state_15016__$1;
(statearr_15035_16953[(2)] = null);

(statearr_15035_16953[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (13))){
var inst_14966 = (state_15016[(8)]);
var inst_14968 = (state_15016[(9)]);
var inst_14967 = (state_15016[(10)]);
var inst_14969 = (state_15016[(11)]);
var inst_14976 = (state_15016[(2)]);
var inst_14977 = (inst_14969 + (1));
var tmp15028 = inst_14966;
var tmp15029 = inst_14968;
var tmp15030 = inst_14967;
var inst_14966__$1 = tmp15028;
var inst_14967__$1 = tmp15030;
var inst_14968__$1 = tmp15029;
var inst_14969__$1 = inst_14977;
var state_15016__$1 = (function (){var statearr_15036 = state_15016;
(statearr_15036[(8)] = inst_14966__$1);

(statearr_15036[(14)] = inst_14976);

(statearr_15036[(9)] = inst_14968__$1);

(statearr_15036[(10)] = inst_14967__$1);

(statearr_15036[(11)] = inst_14969__$1);

return statearr_15036;
})();
var statearr_15040_16954 = state_15016__$1;
(statearr_15040_16954[(2)] = null);

(statearr_15040_16954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (22))){
var state_15016__$1 = state_15016;
var statearr_15041_16958 = state_15016__$1;
(statearr_15041_16958[(2)] = null);

(statearr_15041_16958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (6))){
var inst_14955 = (state_15016[(13)]);
var inst_14964 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14955) : f.call(null, inst_14955));
var inst_14965 = cljs.core.seq(inst_14964);
var inst_14966 = inst_14965;
var inst_14967 = null;
var inst_14968 = (0);
var inst_14969 = (0);
var state_15016__$1 = (function (){var statearr_15042 = state_15016;
(statearr_15042[(8)] = inst_14966);

(statearr_15042[(9)] = inst_14968);

(statearr_15042[(10)] = inst_14967);

(statearr_15042[(11)] = inst_14969);

return statearr_15042;
})();
var statearr_15043_16960 = state_15016__$1;
(statearr_15043_16960[(2)] = null);

(statearr_15043_16960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (17))){
var inst_14980 = (state_15016[(7)]);
var inst_14985 = cljs.core.chunk_first(inst_14980);
var inst_14986 = cljs.core.chunk_rest(inst_14980);
var inst_14987 = cljs.core.count(inst_14985);
var inst_14966 = inst_14986;
var inst_14967 = inst_14985;
var inst_14968 = inst_14987;
var inst_14969 = (0);
var state_15016__$1 = (function (){var statearr_15044 = state_15016;
(statearr_15044[(8)] = inst_14966);

(statearr_15044[(9)] = inst_14968);

(statearr_15044[(10)] = inst_14967);

(statearr_15044[(11)] = inst_14969);

return statearr_15044;
})();
var statearr_15045_16963 = state_15016__$1;
(statearr_15045_16963[(2)] = null);

(statearr_15045_16963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (3))){
var inst_15013 = (state_15016[(2)]);
var state_15016__$1 = state_15016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15016__$1,inst_15013);
} else {
if((state_val_15017 === (12))){
var inst_15001 = (state_15016[(2)]);
var state_15016__$1 = state_15016;
var statearr_15051_16965 = state_15016__$1;
(statearr_15051_16965[(2)] = inst_15001);

(statearr_15051_16965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (2))){
var state_15016__$1 = state_15016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15016__$1,(4),in$);
} else {
if((state_val_15017 === (23))){
var inst_15009 = (state_15016[(2)]);
var state_15016__$1 = state_15016;
var statearr_15055_16971 = state_15016__$1;
(statearr_15055_16971[(2)] = inst_15009);

(statearr_15055_16971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (19))){
var inst_14996 = (state_15016[(2)]);
var state_15016__$1 = state_15016;
var statearr_15056_16973 = state_15016__$1;
(statearr_15056_16973[(2)] = inst_14996);

(statearr_15056_16973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (11))){
var inst_14966 = (state_15016[(8)]);
var inst_14980 = (state_15016[(7)]);
var inst_14980__$1 = cljs.core.seq(inst_14966);
var state_15016__$1 = (function (){var statearr_15060 = state_15016;
(statearr_15060[(7)] = inst_14980__$1);

return statearr_15060;
})();
if(inst_14980__$1){
var statearr_15063_16983 = state_15016__$1;
(statearr_15063_16983[(1)] = (14));

} else {
var statearr_15064_16984 = state_15016__$1;
(statearr_15064_16984[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (9))){
var inst_15003 = (state_15016[(2)]);
var inst_15004 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15016__$1 = (function (){var statearr_15065 = state_15016;
(statearr_15065[(15)] = inst_15003);

return statearr_15065;
})();
if(cljs.core.truth_(inst_15004)){
var statearr_15066_16995 = state_15016__$1;
(statearr_15066_16995[(1)] = (21));

} else {
var statearr_15067_16996 = state_15016__$1;
(statearr_15067_16996[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (5))){
var inst_14958 = cljs.core.async.close_BANG_(out);
var state_15016__$1 = state_15016;
var statearr_15068_17002 = state_15016__$1;
(statearr_15068_17002[(2)] = inst_14958);

(statearr_15068_17002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (14))){
var inst_14980 = (state_15016[(7)]);
var inst_14982 = cljs.core.chunked_seq_QMARK_(inst_14980);
var state_15016__$1 = state_15016;
if(inst_14982){
var statearr_15078_17010 = state_15016__$1;
(statearr_15078_17010[(1)] = (17));

} else {
var statearr_15079_17011 = state_15016__$1;
(statearr_15079_17011[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (16))){
var inst_14999 = (state_15016[(2)]);
var state_15016__$1 = state_15016;
var statearr_15080_17017 = state_15016__$1;
(statearr_15080_17017[(2)] = inst_14999);

(statearr_15080_17017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (10))){
var inst_14967 = (state_15016[(10)]);
var inst_14969 = (state_15016[(11)]);
var inst_14974 = cljs.core._nth(inst_14967,inst_14969);
var state_15016__$1 = state_15016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15016__$1,(13),out,inst_14974);
} else {
if((state_val_15017 === (18))){
var inst_14980 = (state_15016[(7)]);
var inst_14990 = cljs.core.first(inst_14980);
var state_15016__$1 = state_15016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15016__$1,(20),out,inst_14990);
} else {
if((state_val_15017 === (8))){
var inst_14968 = (state_15016[(9)]);
var inst_14969 = (state_15016[(11)]);
var inst_14971 = (inst_14969 < inst_14968);
var inst_14972 = inst_14971;
var state_15016__$1 = state_15016;
if(cljs.core.truth_(inst_14972)){
var statearr_15094_17021 = state_15016__$1;
(statearr_15094_17021[(1)] = (10));

} else {
var statearr_15095_17022 = state_15016__$1;
(statearr_15095_17022[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11970__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11970__auto____0 = (function (){
var statearr_15096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15096[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11970__auto__);

(statearr_15096[(1)] = (1));

return statearr_15096;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11970__auto____1 = (function (state_15016){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_15016);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e15097){var ex__11973__auto__ = e15097;
var statearr_15098_17028 = state_15016;
(statearr_15098_17028[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_15016[(4)]))){
var statearr_15099_17029 = state_15016;
(statearr_15099_17029[(1)] = cljs.core.first((state_15016[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17030 = state_15016;
state_15016 = G__17030;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11970__auto__ = function(state_15016){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11970__auto____1.call(this,state_15016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11970__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11970__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_15100 = f__12798__auto__();
(statearr_15100[(6)] = c__12797__auto__);

return statearr_15100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));

return c__12797__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15102 = arguments.length;
switch (G__15102) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15106 = arguments.length;
switch (G__15106) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15110 = arguments.length;
switch (G__15110) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12797__auto___17051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_15145){
var state_val_15146 = (state_15145[(1)]);
if((state_val_15146 === (7))){
var inst_15139 = (state_15145[(2)]);
var state_15145__$1 = state_15145;
var statearr_15159_17056 = state_15145__$1;
(statearr_15159_17056[(2)] = inst_15139);

(statearr_15159_17056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (1))){
var inst_15115 = null;
var state_15145__$1 = (function (){var statearr_15160 = state_15145;
(statearr_15160[(7)] = inst_15115);

return statearr_15160;
})();
var statearr_15161_17058 = state_15145__$1;
(statearr_15161_17058[(2)] = null);

(statearr_15161_17058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (4))){
var inst_15124 = (state_15145[(8)]);
var inst_15124__$1 = (state_15145[(2)]);
var inst_15125 = (inst_15124__$1 == null);
var inst_15126 = cljs.core.not(inst_15125);
var state_15145__$1 = (function (){var statearr_15162 = state_15145;
(statearr_15162[(8)] = inst_15124__$1);

return statearr_15162;
})();
if(inst_15126){
var statearr_15163_17061 = state_15145__$1;
(statearr_15163_17061[(1)] = (5));

} else {
var statearr_15166_17063 = state_15145__$1;
(statearr_15166_17063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (6))){
var state_15145__$1 = state_15145;
var statearr_15169_17066 = state_15145__$1;
(statearr_15169_17066[(2)] = null);

(statearr_15169_17066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (3))){
var inst_15142 = (state_15145[(2)]);
var inst_15143 = cljs.core.async.close_BANG_(out);
var state_15145__$1 = (function (){var statearr_15170 = state_15145;
(statearr_15170[(9)] = inst_15142);

return statearr_15170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15145__$1,inst_15143);
} else {
if((state_val_15146 === (2))){
var state_15145__$1 = state_15145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15145__$1,(4),ch);
} else {
if((state_val_15146 === (11))){
var inst_15124 = (state_15145[(8)]);
var inst_15133 = (state_15145[(2)]);
var inst_15115 = inst_15124;
var state_15145__$1 = (function (){var statearr_15181 = state_15145;
(statearr_15181[(10)] = inst_15133);

(statearr_15181[(7)] = inst_15115);

return statearr_15181;
})();
var statearr_15182_17075 = state_15145__$1;
(statearr_15182_17075[(2)] = null);

(statearr_15182_17075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (9))){
var inst_15124 = (state_15145[(8)]);
var state_15145__$1 = state_15145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15145__$1,(11),out,inst_15124);
} else {
if((state_val_15146 === (5))){
var inst_15124 = (state_15145[(8)]);
var inst_15115 = (state_15145[(7)]);
var inst_15128 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15124,inst_15115);
var state_15145__$1 = state_15145;
if(inst_15128){
var statearr_15185_17092 = state_15145__$1;
(statearr_15185_17092[(1)] = (8));

} else {
var statearr_15186_17094 = state_15145__$1;
(statearr_15186_17094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (10))){
var inst_15136 = (state_15145[(2)]);
var state_15145__$1 = state_15145;
var statearr_15190_17095 = state_15145__$1;
(statearr_15190_17095[(2)] = inst_15136);

(statearr_15190_17095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15146 === (8))){
var inst_15115 = (state_15145[(7)]);
var tmp15184 = inst_15115;
var inst_15115__$1 = tmp15184;
var state_15145__$1 = (function (){var statearr_15191 = state_15145;
(statearr_15191[(7)] = inst_15115__$1);

return statearr_15191;
})();
var statearr_15192_17108 = state_15145__$1;
(statearr_15192_17108[(2)] = null);

(statearr_15192_17108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11970__auto__ = null;
var cljs$core$async$state_machine__11970__auto____0 = (function (){
var statearr_15195 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15195[(0)] = cljs$core$async$state_machine__11970__auto__);

(statearr_15195[(1)] = (1));

return statearr_15195;
});
var cljs$core$async$state_machine__11970__auto____1 = (function (state_15145){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_15145);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e15199){var ex__11973__auto__ = e15199;
var statearr_15202_17117 = state_15145;
(statearr_15202_17117[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_15145[(4)]))){
var statearr_15203_17118 = state_15145;
(statearr_15203_17118[(1)] = cljs.core.first((state_15145[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17123 = state_15145;
state_15145 = G__17123;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$state_machine__11970__auto__ = function(state_15145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11970__auto____1.call(this,state_15145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11970__auto____0;
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11970__auto____1;
return cljs$core$async$state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_15204 = f__12798__auto__();
(statearr_15204[(6)] = c__12797__auto___17051);

return statearr_15204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15207 = arguments.length;
switch (G__15207) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12797__auto___17136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_15252){
var state_val_15253 = (state_15252[(1)]);
if((state_val_15253 === (7))){
var inst_15248 = (state_15252[(2)]);
var state_15252__$1 = state_15252;
var statearr_15262_17137 = state_15252__$1;
(statearr_15262_17137[(2)] = inst_15248);

(statearr_15262_17137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15253 === (1))){
var inst_15212 = (new Array(n));
var inst_15213 = inst_15212;
var inst_15214 = (0);
var state_15252__$1 = (function (){var statearr_15263 = state_15252;
(statearr_15263[(7)] = inst_15213);

(statearr_15263[(8)] = inst_15214);

return statearr_15263;
})();
var statearr_15267_17141 = state_15252__$1;
(statearr_15267_17141[(2)] = null);

(statearr_15267_17141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15253 === (4))){
var inst_15217 = (state_15252[(9)]);
var inst_15217__$1 = (state_15252[(2)]);
var inst_15218 = (inst_15217__$1 == null);
var inst_15219 = cljs.core.not(inst_15218);
var state_15252__$1 = (function (){var statearr_15269 = state_15252;
(statearr_15269[(9)] = inst_15217__$1);

return statearr_15269;
})();
if(inst_15219){
var statearr_15270_17142 = state_15252__$1;
(statearr_15270_17142[(1)] = (5));

} else {
var statearr_15271_17143 = state_15252__$1;
(statearr_15271_17143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15253 === (15))){
var inst_15242 = (state_15252[(2)]);
var state_15252__$1 = state_15252;
var statearr_15272_17146 = state_15252__$1;
(statearr_15272_17146[(2)] = inst_15242);

(statearr_15272_17146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15253 === (13))){
var state_15252__$1 = state_15252;
var statearr_15273_17152 = state_15252__$1;
(statearr_15273_17152[(2)] = null);

(statearr_15273_17152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15253 === (6))){
var inst_15214 = (state_15252[(8)]);
var inst_15235 = (inst_15214 > (0));
var state_15252__$1 = state_15252;
if(cljs.core.truth_(inst_15235)){
var statearr_15274_17159 = state_15252__$1;
(statearr_15274_17159[(1)] = (12));

} else {
var statearr_15275_17164 = state_15252__$1;
(statearr_15275_17164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15253 === (3))){
var inst_15250 = (state_15252[(2)]);
var state_15252__$1 = state_15252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15252__$1,inst_15250);
} else {
if((state_val_15253 === (12))){
var inst_15213 = (state_15252[(7)]);
var inst_15240 = cljs.core.vec(inst_15213);
var state_15252__$1 = state_15252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15252__$1,(15),out,inst_15240);
} else {
if((state_val_15253 === (2))){
var state_15252__$1 = state_15252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15252__$1,(4),ch);
} else {
if((state_val_15253 === (11))){
var inst_15229 = (state_15252[(2)]);
var inst_15230 = (new Array(n));
var inst_15213 = inst_15230;
var inst_15214 = (0);
var state_15252__$1 = (function (){var statearr_15280 = state_15252;
(statearr_15280[(7)] = inst_15213);

(statearr_15280[(10)] = inst_15229);

(statearr_15280[(8)] = inst_15214);

return statearr_15280;
})();
var statearr_15281_17189 = state_15252__$1;
(statearr_15281_17189[(2)] = null);

(statearr_15281_17189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15253 === (9))){
var inst_15213 = (state_15252[(7)]);
var inst_15227 = cljs.core.vec(inst_15213);
var state_15252__$1 = state_15252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15252__$1,(11),out,inst_15227);
} else {
if((state_val_15253 === (5))){
var inst_15213 = (state_15252[(7)]);
var inst_15217 = (state_15252[(9)]);
var inst_15222 = (state_15252[(11)]);
var inst_15214 = (state_15252[(8)]);
var inst_15221 = (inst_15213[inst_15214] = inst_15217);
var inst_15222__$1 = (inst_15214 + (1));
var inst_15223 = (inst_15222__$1 < n);
var state_15252__$1 = (function (){var statearr_15285 = state_15252;
(statearr_15285[(11)] = inst_15222__$1);

(statearr_15285[(12)] = inst_15221);

return statearr_15285;
})();
if(cljs.core.truth_(inst_15223)){
var statearr_15287_17198 = state_15252__$1;
(statearr_15287_17198[(1)] = (8));

} else {
var statearr_15288_17199 = state_15252__$1;
(statearr_15288_17199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15253 === (14))){
var inst_15245 = (state_15252[(2)]);
var inst_15246 = cljs.core.async.close_BANG_(out);
var state_15252__$1 = (function (){var statearr_15290 = state_15252;
(statearr_15290[(13)] = inst_15245);

return statearr_15290;
})();
var statearr_15292_17201 = state_15252__$1;
(statearr_15292_17201[(2)] = inst_15246);

(statearr_15292_17201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15253 === (10))){
var inst_15233 = (state_15252[(2)]);
var state_15252__$1 = state_15252;
var statearr_15296_17207 = state_15252__$1;
(statearr_15296_17207[(2)] = inst_15233);

(statearr_15296_17207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15253 === (8))){
var inst_15213 = (state_15252[(7)]);
var inst_15222 = (state_15252[(11)]);
var tmp15289 = inst_15213;
var inst_15213__$1 = tmp15289;
var inst_15214 = inst_15222;
var state_15252__$1 = (function (){var statearr_15297 = state_15252;
(statearr_15297[(7)] = inst_15213__$1);

(statearr_15297[(8)] = inst_15214);

return statearr_15297;
})();
var statearr_15298_17216 = state_15252__$1;
(statearr_15298_17216[(2)] = null);

(statearr_15298_17216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11970__auto__ = null;
var cljs$core$async$state_machine__11970__auto____0 = (function (){
var statearr_15299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15299[(0)] = cljs$core$async$state_machine__11970__auto__);

(statearr_15299[(1)] = (1));

return statearr_15299;
});
var cljs$core$async$state_machine__11970__auto____1 = (function (state_15252){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_15252);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e15300){var ex__11973__auto__ = e15300;
var statearr_15301_17231 = state_15252;
(statearr_15301_17231[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_15252[(4)]))){
var statearr_15302_17232 = state_15252;
(statearr_15302_17232[(1)] = cljs.core.first((state_15252[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17235 = state_15252;
state_15252 = G__17235;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$state_machine__11970__auto__ = function(state_15252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11970__auto____1.call(this,state_15252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11970__auto____0;
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11970__auto____1;
return cljs$core$async$state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_15303 = f__12798__auto__();
(statearr_15303[(6)] = c__12797__auto___17136);

return statearr_15303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15311 = arguments.length;
switch (G__15311) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12797__auto___17315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12798__auto__ = (function (){var switch__11969__auto__ = (function (state_15364){
var state_val_15368 = (state_15364[(1)]);
if((state_val_15368 === (7))){
var inst_15360 = (state_15364[(2)]);
var state_15364__$1 = state_15364;
var statearr_15373_17335 = state_15364__$1;
(statearr_15373_17335[(2)] = inst_15360);

(statearr_15373_17335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15368 === (1))){
var inst_15313 = [];
var inst_15314 = inst_15313;
var inst_15315 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15364__$1 = (function (){var statearr_15374 = state_15364;
(statearr_15374[(7)] = inst_15315);

(statearr_15374[(8)] = inst_15314);

return statearr_15374;
})();
var statearr_15375_17337 = state_15364__$1;
(statearr_15375_17337[(2)] = null);

(statearr_15375_17337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15368 === (4))){
var inst_15318 = (state_15364[(9)]);
var inst_15318__$1 = (state_15364[(2)]);
var inst_15320 = (inst_15318__$1 == null);
var inst_15321 = cljs.core.not(inst_15320);
var state_15364__$1 = (function (){var statearr_15376 = state_15364;
(statearr_15376[(9)] = inst_15318__$1);

return statearr_15376;
})();
if(inst_15321){
var statearr_15377_17338 = state_15364__$1;
(statearr_15377_17338[(1)] = (5));

} else {
var statearr_15378_17339 = state_15364__$1;
(statearr_15378_17339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15368 === (15))){
var inst_15314 = (state_15364[(8)]);
var inst_15352 = cljs.core.vec(inst_15314);
var state_15364__$1 = state_15364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15364__$1,(18),out,inst_15352);
} else {
if((state_val_15368 === (13))){
var inst_15347 = (state_15364[(2)]);
var state_15364__$1 = state_15364;
var statearr_15385_17341 = state_15364__$1;
(statearr_15385_17341[(2)] = inst_15347);

(statearr_15385_17341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15368 === (6))){
var inst_15314 = (state_15364[(8)]);
var inst_15349 = inst_15314.length;
var inst_15350 = (inst_15349 > (0));
var state_15364__$1 = state_15364;
if(cljs.core.truth_(inst_15350)){
var statearr_15386_17342 = state_15364__$1;
(statearr_15386_17342[(1)] = (15));

} else {
var statearr_15387_17344 = state_15364__$1;
(statearr_15387_17344[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15368 === (17))){
var inst_15357 = (state_15364[(2)]);
var inst_15358 = cljs.core.async.close_BANG_(out);
var state_15364__$1 = (function (){var statearr_15394 = state_15364;
(statearr_15394[(10)] = inst_15357);

return statearr_15394;
})();
var statearr_15395_17349 = state_15364__$1;
(statearr_15395_17349[(2)] = inst_15358);

(statearr_15395_17349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15368 === (3))){
var inst_15362 = (state_15364[(2)]);
var state_15364__$1 = state_15364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15364__$1,inst_15362);
} else {
if((state_val_15368 === (12))){
var inst_15314 = (state_15364[(8)]);
var inst_15334 = cljs.core.vec(inst_15314);
var state_15364__$1 = state_15364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15364__$1,(14),out,inst_15334);
} else {
if((state_val_15368 === (2))){
var state_15364__$1 = state_15364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15364__$1,(4),ch);
} else {
if((state_val_15368 === (11))){
var inst_15323 = (state_15364[(11)]);
var inst_15318 = (state_15364[(9)]);
var inst_15314 = (state_15364[(8)]);
var inst_15331 = inst_15314.push(inst_15318);
var tmp15399 = inst_15314;
var inst_15314__$1 = tmp15399;
var inst_15315 = inst_15323;
var state_15364__$1 = (function (){var statearr_15400 = state_15364;
(statearr_15400[(7)] = inst_15315);

(statearr_15400[(8)] = inst_15314__$1);

(statearr_15400[(12)] = inst_15331);

return statearr_15400;
})();
var statearr_15406_17361 = state_15364__$1;
(statearr_15406_17361[(2)] = null);

(statearr_15406_17361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15368 === (9))){
var inst_15315 = (state_15364[(7)]);
var inst_15327 = cljs.core.keyword_identical_QMARK_(inst_15315,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15364__$1 = state_15364;
var statearr_15407_17372 = state_15364__$1;
(statearr_15407_17372[(2)] = inst_15327);

(statearr_15407_17372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15368 === (5))){
var inst_15315 = (state_15364[(7)]);
var inst_15323 = (state_15364[(11)]);
var inst_15318 = (state_15364[(9)]);
var inst_15324 = (state_15364[(13)]);
var inst_15323__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15318) : f.call(null, inst_15318));
var inst_15324__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15323__$1,inst_15315);
var state_15364__$1 = (function (){var statearr_15409 = state_15364;
(statearr_15409[(11)] = inst_15323__$1);

(statearr_15409[(13)] = inst_15324__$1);

return statearr_15409;
})();
if(inst_15324__$1){
var statearr_15410_17380 = state_15364__$1;
(statearr_15410_17380[(1)] = (8));

} else {
var statearr_15411_17382 = state_15364__$1;
(statearr_15411_17382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15368 === (14))){
var inst_15323 = (state_15364[(11)]);
var inst_15318 = (state_15364[(9)]);
var inst_15336 = (state_15364[(2)]);
var inst_15337 = [];
var inst_15338 = inst_15337.push(inst_15318);
var inst_15314 = inst_15337;
var inst_15315 = inst_15323;
var state_15364__$1 = (function (){var statearr_15412 = state_15364;
(statearr_15412[(7)] = inst_15315);

(statearr_15412[(14)] = inst_15336);

(statearr_15412[(15)] = inst_15338);

(statearr_15412[(8)] = inst_15314);

return statearr_15412;
})();
var statearr_15413_17389 = state_15364__$1;
(statearr_15413_17389[(2)] = null);

(statearr_15413_17389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15368 === (16))){
var state_15364__$1 = state_15364;
var statearr_15422_17390 = state_15364__$1;
(statearr_15422_17390[(2)] = null);

(statearr_15422_17390[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15368 === (10))){
var inst_15329 = (state_15364[(2)]);
var state_15364__$1 = state_15364;
if(cljs.core.truth_(inst_15329)){
var statearr_15429_17392 = state_15364__$1;
(statearr_15429_17392[(1)] = (11));

} else {
var statearr_15438_17393 = state_15364__$1;
(statearr_15438_17393[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15368 === (18))){
var inst_15354 = (state_15364[(2)]);
var state_15364__$1 = state_15364;
var statearr_15443_17395 = state_15364__$1;
(statearr_15443_17395[(2)] = inst_15354);

(statearr_15443_17395[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15368 === (8))){
var inst_15324 = (state_15364[(13)]);
var state_15364__$1 = state_15364;
var statearr_15454_17398 = state_15364__$1;
(statearr_15454_17398[(2)] = inst_15324);

(statearr_15454_17398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11970__auto__ = null;
var cljs$core$async$state_machine__11970__auto____0 = (function (){
var statearr_15462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15462[(0)] = cljs$core$async$state_machine__11970__auto__);

(statearr_15462[(1)] = (1));

return statearr_15462;
});
var cljs$core$async$state_machine__11970__auto____1 = (function (state_15364){
while(true){
var ret_value__11971__auto__ = (function (){try{while(true){
var result__11972__auto__ = switch__11969__auto__(state_15364);
if(cljs.core.keyword_identical_QMARK_(result__11972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11972__auto__;
}
break;
}
}catch (e15463){var ex__11973__auto__ = e15463;
var statearr_15464_17400 = state_15364;
(statearr_15464_17400[(2)] = ex__11973__auto__);


if(cljs.core.seq((state_15364[(4)]))){
var statearr_15465_17402 = state_15364;
(statearr_15465_17402[(1)] = cljs.core.first((state_15364[(4)])));

} else {
throw ex__11973__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17403 = state_15364;
state_15364 = G__17403;
continue;
} else {
return ret_value__11971__auto__;
}
break;
}
});
cljs$core$async$state_machine__11970__auto__ = function(state_15364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11970__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11970__auto____1.call(this,state_15364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11970__auto____0;
cljs$core$async$state_machine__11970__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11970__auto____1;
return cljs$core$async$state_machine__11970__auto__;
})()
})();
var state__12799__auto__ = (function (){var statearr_15473 = f__12798__auto__();
(statearr_15473[(6)] = c__12797__auto___17315);

return statearr_15473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12799__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
