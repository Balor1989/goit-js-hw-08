parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TTyb":[function(require,module,exports) {
const e={form:document.querySelector(".feedback-form"),email:document.querySelector("input"),textarea:document.querySelector("textarea")};console.log(e.form),console.log(e.email),console.log(e.textarea);const t=e=>{e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")},o=e=>{const t=e.currentTarget.value;localStorage.setItem("feedback-form-state",t)},r=e=>{const t=e.currentTarget.value;localStorage.setItem("feedback-form-state",t)};console.log(localStorage),e.form.addEventListener("submit",t),e.email.addEventListener("input",o),e.textarea.addEventListener("input",r);
},{}]},{},["TTyb"], null)
//# sourceMappingURL=/goit-js-hw-08/03-feedback.e0031098.js.map