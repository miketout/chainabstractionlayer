(()=>{"use strict";var t={554:function(t,e,n){var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__assign||function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},a.apply(this,arguments)},o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,a){function o(t){try{u(r.next(t))}catch(t){a(t)}}function s(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}u((r=r.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},u=this&&this.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t};Object.defineProperty(e,"__esModule",{value:!0});var c=n(522),p=n(882),h=n(524),d=n(157),f=n(543),l=function(t){function e(e){var n=t.call(this)||this,r=e.network,i=e.mode,a=void 0===i?c.bitcoin.SwapMode.P2WSH:i,o=Object.values(c.bitcoin.SwapMode);if(!o.includes(a))throw new Error("Mode must be one of "+o.join(","));return n._network=r,n._mode=a,n}return i(e,t),e.prototype.validateSwapParams=function(t){d.validateValue(t.value),h.validateAddress(t.recipientAddress,this._network),h.validateAddress(t.refundAddress,this._network),d.validateSecretHash(t.secretHash),d.validateExpiration(t.expiration)},e.prototype.getSwapOutput=function(t){this.validateSwapParams(t);var e=Buffer.from(t.secretHash,"hex"),n=h.getPubKeyHash(d.addressToString(t.recipientAddress),this._network),r=h.getPubKeyHash(d.addressToString(t.refundAddress),this._network),i=f.script.OPS,a=f.script.compile([i.OP_IF,i.OP_SIZE,f.script.number.encode(32),i.OP_EQUALVERIFY,i.OP_SHA256,e,i.OP_EQUALVERIFY,i.OP_DUP,i.OP_HASH160,n,i.OP_ELSE,f.script.number.encode(t.expiration),i.OP_CHECKLOCKTIMEVERIFY,i.OP_DROP,i.OP_DUP,i.OP_HASH160,r,i.OP_ENDIF,i.OP_EQUALVERIFY,i.OP_CHECKSIG]);if(![97,98].includes(Buffer.byteLength(a)))throw new Error("Invalid swap script");return a},e.prototype.getSwapInput=function(t,e,n,r){var i=f.script.OPS,a=n?i.OP_TRUE:i.OP_FALSE,o=n?[Buffer.from(r,"hex")]:[];return f.script.compile(u(u([t,e],o),[a]))},e.prototype.getSwapPaymentVariants=function(t){var e,n=f.payments.p2wsh({redeem:{output:t,network:this._network},network:this._network}),r=f.payments.p2sh({redeem:n,network:this._network}),i=f.payments.p2sh({redeem:{output:t,network:this._network},network:this._network});return(e={})[c.bitcoin.SwapMode.P2WSH]=n,e[c.bitcoin.SwapMode.P2SH_SEGWIT]=r,e[c.bitcoin.SwapMode.P2SH]=i,e},e.prototype.initiateSwap=function(t,e){return o(this,void 0,void 0,(function(){var n,r;return s(this,(function(i){return this.validateSwapParams(t),n=this.getSwapOutput(t),r=this.getSwapPaymentVariants(n)[this._mode].address,[2,this.client.chain.sendTransaction({to:r,value:t.value,fee:e})]}))}))},e.prototype.fundSwap=function(){return o(this,void 0,void 0,(function(){return s(this,(function(t){return[2,null]}))}))},e.prototype.claimSwap=function(t,e,n,r){return o(this,void 0,void 0,(function(){return s(this,(function(i){switch(i.label){case 0:return this.validateSwapParams(t),d.validateSecret(n),d.validateSecretAndHash(n,t.secretHash),[4,this.verifyInitiateSwapTransaction(t,e)];case 1:return i.sent(),[2,this._redeemSwap(t,e,!0,n,r)]}}))}))},e.prototype.refundSwap=function(t,e,n){return o(this,void 0,void 0,(function(){return s(this,(function(r){switch(r.label){case 0:return this.validateSwapParams(t),[4,this.verifyInitiateSwapTransaction(t,e)];case 1:return r.sent(),[2,this._redeemSwap(t,e,!1,void 0,n)]}}))}))},e.prototype._redeemSwap=function(t,e,n,r,i){return o(this,void 0,void 0,(function(){var a,o;return s(this,(function(s){return a=n?t.recipientAddress:t.refundAddress,o=this.getSwapOutput(t),[2,this._redeemSwapOutput(e,t.value,d.addressToString(a),o,t.expiration,n,r,i)]}))}))},e.prototype._redeemSwapOutput=function(t,e,n,r,i,a,u,p){return o(this,void 0,void 0,(function(){var o,d,l,w,v,S,y,m,_,g,b,P,x,T,O,M,H,I,k,E,B,A,R,F,j,q,K,V;return s(this,(function(s){switch(s.label){case 0:return o=this._network,d=this.getSwapPaymentVariants(r),[4,this.getMethod("getRawTransactionByHash")(t)];case 1:for(l=s.sent(),w=h.decodeRawTransaction(l,this._network),m=function(t){var n=Object.entries(d).find((function(e){return e[1].output.toString("hex")===t.scriptPubKey.hex})),r=new c.BigNumber(t.value).times(1e8);n&&r.eq(new c.BigNumber(e))&&(S=n[0],y=n[1],v=t)},_=0,g=w.vout;_<g.length;_++)b=g[_],m(b);if(!v)throw new Error("Valid swap output not found");return(x=p)?[3,3]:[4,this.getMethod("getFeePerByte")()];case 2:x=s.sent(),s.label=3;case 3:if(P=x,T=h.calculateFee(1,1,P),(O=new c.BigNumber(v.value).times(1e8).toNumber())-T<0)throw new Error("Transaction amount does not cover fee.");return M=new f.Psbt({network:o}),a||M.setLocktime(i),H=S===c.bitcoin.SwapMode.P2WSH||S===c.bitcoin.SwapMode.P2SH_SEGWIT,I={hash:t,index:v.n,sequence:0},H?(I.witnessUtxo={script:y.output,value:O},I.witnessScript=d.p2wsh.redeem.output):(I.nonWitnessUtxo=Buffer.from(l,"hex"),I.redeemScript=y.redeem.output),k={address:n,value:O-T},M.addInput(I),M.addOutput(k),[4,this.getMethod("getWalletAddress")(n)];case 4:return E=s.sent(),[4,this.getMethod("signPSBT")(M.toBase64(),[{index:0,derivationPath:E.derivationPath}])];case 5:return B=s.sent(),A=f.Psbt.fromBase64(B,{network:o}),R=A.data.inputs[0].partialSig[0].signature,F=this.getSwapInput(R,Buffer.from(E.publicKey,"hex"),a,u),j={redeem:{output:r,input:F,network:o},network:o},q=H?f.payments.p2wsh(j):f.payments.p2sh(j),K=function(){var t,e;return H&&(e=h.witnessStackToScriptWitness(q.witness)),S===c.bitcoin.SwapMode.P2SH_SEGWIT?t=f.script.compile([d.p2shSegwit.redeem.output]):S===c.bitcoin.SwapMode.P2SH&&(t=q.input),{finalScriptSig:t,finalScriptWitness:e}},M.finalizeInput(0,K),V=M.extractTransaction().toHex(),[4,this.getMethod("sendRawTransaction")(V)];case 6:return s.sent(),[2,h.normalizeTransactionObject(h.decodeRawTransaction(V,this._network),T)]}}))}))},e.prototype.extractSwapParams=function(t){var e=f.script.decompile(Buffer.from(t,"hex"));if(20!==e.length)throw new Error("Invalid swap output script");var n=e[5].reverse().toString("hex"),r=e[9].reverse().toString("hex"),i=parseInt(e[11].reverse().toString("hex"),16);return{recipientPublicKey:r,refundPublicKey:e[16].reverse().toString("hex"),secretHash:n,expiration:i}},e.prototype.UNSAFE_isSwapRedeemTransaction=function(t){return o(this,void 0,void 0,(function(){var e,n,r,i;return s(this,(function(a){switch(a.label){case 0:return 1!==t._raw.vin.length||1!==t._raw.vout.length?[3,2]:(e=t._raw.vin[0],n=this.getInputScript(e),[4,this.getMethod("getTransactionByHash")(t._raw.vin[0].txid)]);case 1:if(r=a.sent(),i=r._raw.vout[t._raw.vin[0].vout].scriptPubKey.type,["scripthash","witness_v0_scripthash"].includes(i)&&[4,5].includes(n.length))return[2,!0];a.label=2;case 2:return[2,!1]}}))}))},e.prototype.updateTransactionFee=function(t,e){return o(this,void 0,void 0,(function(){var n,r,i,a,o,u,p,h,d,f,l,w,v;return s(this,(function(s){switch(s.label){case 0:return n="string"==typeof t?t:t.hash,[4,this.getMethod("getTransactionByHash")(n)];case 1:return r=s.sent(),[4,this.UNSAFE_isSwapRedeemTransaction(r)];case 2:return s.sent()?(i=r._raw.vin[0],a=this.getInputScript(i),o=i.txid,[4,this.getMethod("getTransactionByHash")(o)]):[3,4];case 3:return u=s.sent(),p=u._raw.vout[i.vout],h=new c.BigNumber(p.value).times(1e8),d=r._raw.vout[0].scriptPubKey.addresses[0],f=5===a.length,l=f?a[2]:void 0,w=f?a[4]:a[3],v=this.extractSwapParams(w).expiration,[2,this._redeemSwapOutput(o,h,d,Buffer.from(w,"hex"),v,f,l,e)];case 4:return[2,this.getMethod("updateTransactionFee")(t,e)]}}))}))},e.prototype.getInputScript=function(t){return t.txinwitness?t.txinwitness:f.script.decompile(Buffer.from(t.scriptSig.hex,"hex")).map((function(t){return Buffer.isBuffer(t)?t.toString("hex"):t}))},e.prototype.doesTransactionMatchRedeem=function(t,e,n){var r=e._raw.vin.find((function(e){return e.txid===t}));if(!r)return!1;var i=this.getInputScript(r);if(!i)return!1;if(n){if(4!==i.length)return!1}else if(5!==i.length)return!1;return!0},e.prototype.doesTransactionMatchInitiation=function(t,e){var n=this.getSwapOutput(t),r=this.getSwapPaymentVariants(n),i=e._raw.vout.find((function(e){return Object.values(r).find((function(n){return n.output.toString("hex")===e.scriptPubKey.hex&&new c.BigNumber(e.value).times(1e8).eq(new c.BigNumber(t.value))}))}));return Boolean(i)},e.prototype.verifyInitiateSwapTransaction=function(t,e){return o(this,void 0,void 0,(function(){var n;return s(this,(function(r){switch(r.label){case 0:return this.validateSwapParams(t),[4,this.getMethod("getTransactionByHash")(e)];case 1:return n=r.sent(),[2,this.doesTransactionMatchInitiation(t,n)]}}))}))},e.prototype.findSwapTransaction=function(t,e,n){return o(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this.getMethod("getBlockByNumber")(e,!0)];case 1:return[2,t.sent().transactions.find(n)]}}))}))},e.prototype.findInitiateSwapTransaction=function(t,e){return o(this,void 0,void 0,(function(){var n=this;return s(this,(function(r){return this.validateSwapParams(t),[2,this.getMethod("findSwapTransaction",!1)(t,e,(function(e){return n.doesTransactionMatchInitiation(t,e)}))]}))}))},e.prototype.findClaimSwapTransaction=function(t,e,n){return o(this,void 0,void 0,(function(){var r,i,o,u,c=this;return s(this,(function(s){switch(s.label){case 0:return this.validateSwapParams(t),[4,this.getMethod("findSwapTransaction",!1)(t,n,(function(t){return c.doesTransactionMatchRedeem(e,t,!1)}))];case 1:if(r=s.sent()){if(!(i=r._raw.vin.find((function(t){return t.txid===e}))))throw new Error("Claim input missing");return o=this.getInputScript(i),u=o[2],d.validateSecretAndHash(u,t.secretHash),[2,a(a({},r),{secret:u})]}return[2]}}))}))},e.prototype.findRefundSwapTransaction=function(t,e,n){return o(this,void 0,void 0,(function(){var r=this;return s(this,(function(i){switch(i.label){case 0:return this.validateSwapParams(t),[4,this.getMethod("findSwapTransaction",!1)(t,n,(function(t){return r.doesTransactionMatchRedeem(e,t,!0)}))];case 1:return[2,i.sent()]}}))}))},e.prototype.findFundSwapTransaction=function(){return o(this,void 0,void 0,(function(){return s(this,(function(t){return[2,null]}))}))},e}(p.Provider);e.default=l},175:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.VerusSwapProvider=void 0;var i=r(n(554));e.VerusSwapProvider=i.default},524:t=>{t.exports=require("@liquality/bitcoin-utils")},882:t=>{t.exports=require("@liquality/provider")},522:t=>{t.exports=require("@liquality/types")},157:t=>{t.exports=require("@liquality/utils")},543:t=>{t.exports=require("bitcoinjs-lib")}},e={},n=function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}(175);module.exports=n})();
//# sourceMappingURL=index.js.map