(()=>{"use strict";var n,e,t,o,r,i,a,p,d,s,c,f,l,u,x={402:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"*{\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n    list-style: none;\n    text-decoration: none;\n}\n\n#container{\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    overflow: hidden;\n}\n\n#container .proj-panel{\n    height: 100%;\n    width: 25vw;\n    background-color: #0284c7;\n    padding: 20px 40px;\n    box-sizing: border-box;\n    font-size: 1rem;\n}\n\n.proj-header{\n    font-size: 2em;\n    margin-top: 20px;\n    line-height: 30px;\n    font-weight: 700;\n    color: white;\n    border-bottom: 2px solid #fffd71;\n    padding-bottom: 6px;\n}\n\n.project{\n    font-size: 1em;\n    padding: 10px;\n    border-radius: 4px;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 10px;\n    font-weight: 500;\n    color: #fff;\n    background-color: #00000048;\n}\n.project:hover{\n    cursor: pointer;\n    border: 2px solid #ffffff;\n}\n\n.add-proj-container{\n    align-items: center;\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 12px;\n}\n.add-box{\n    width: 40px;\n    justify-content: center;\n    display: flex;\n    align-items: center;\n}\n.project-link{\n    cursor: pointer;\n    font-size: 2em;\n    font-weight: 800;\n    color: #ffffff;\n}\n/* .project-link:hover{\n    font-size: 3em;\n} */\n\n.main-panel{\n    height: 100%;\n    width: 75%;\n    padding: 20px 20px;\n    box-sizing: border-box;\n    font-size: 1rem;\n}\n\n/* img{\n    width: 30px\n} */\n\n.proj-info-container{\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 2px solid rgb(65, 60, 60);\n    /* position: relative; */\n}\n.proj-info-name{\n    font-size: 2em;\n    font-weight: 700;\n    margin-bottom: 4px;\n}\n.proj-info-description{\n    font-size: 1.2em;\n    font-weight: 200;\n    padding-left: 5px;\n}\n\n.proj-icon-container{\n    display: flex;\n    margin-right: 10px;\n    align-items: center;\n    /* position: relative; */\n}\n.icon-box{\n    cursor: pointer;\n    margin-right: 5px;\n    border-radius: 50%;\n    /* position: absolute; */\n    /* transition: 0.4s ease-in-out; */\n}\n.icon-box:hover {\n    width: 30px;\n    height: 30px;\n}\n.proj-edit-icon, .proj-trash-icon{\n    width: 25px;\n    height: 25px;\n    margin: 10px;\n}\n.proj-info-icon:hover{\n    opacity: 1;\n}\n.task{\n    border: 2px solid rgb(65, 60, 60);\n    border-radius: 5px;\n    margin-top: 12px;\n    padding: 15px;\n}\n.task-content{\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n}\n.task-area{\n    align-items: center;\n    display: flex;\n}\n.checkmark-proj{\n    border: 2px solid rgb(65, 60, 60);\n    border-radius: 50%;\n    height: 25px;\n    width: 25px;\n    cursor: pointer;\n}\n.task-name{\n    margin-left: 12px;\n}\n.edit-task, .delete-task{\n    cursor: pointer;\n    width: 20px;\n    margin-left: 12px;\n}\n\n.add-task-container{\n    display: flex;\n    margin-left: auto;\n    margin-top: 8px;\n    background-color: rgba(8, 194, 8, 0.479);\n    border-radius: 50%;\n    height: 25px;\n    width: 25px;\n    \n}\n.add-task-container:hover{\n    background-color: rgb(8, 194, 8)\n}\n\n#add-proj-container{\n    display: block;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    z-index: 3;\n}\n.forum-container{\n    width: 200px;\n    border: 8px;\n    box-shadow: 4px 4px 5px 0px #000000af;\n    padding: 2vh 2vw;\n}\n.forum-container h2{\n    /* margin: 1vh;\n    padding: .25vh; */\n    text-align: center;\n    width: 100%;\n    font-size: 1rem;\n    /* color: #78788c; */\n    border-bottom: 2px solid #000000;\n}\n.input-content{\n    display: flex;\n    flex-direction: column;\n    /* margin-top: 2vh; */\n}\n.forum-container input{\n    width: 100%;\n    padding-top: 1vh;\n    box-sizing: border-box;\n    background: none;\n    outline: none;\n    border: 0;\n    border-bottom: 2px solid #a1a1a1;\n    resize: none;\n}\n.forum-bttns{\n    display: flex;\n    /* justify-content: center; */\n    gap: 1rem;\n    padding-top: 1vh;\n}\n#add-proj-forum-bttn{\n    background: green;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    display: block;\n    text-align: center;\n    width: 100%;\n    color:#fff;\n    font-size: 14px;\n    font-weight: 700;\n}\n#close-add-proj-forum-bttn{\n    background: red;\n    border-radius: 5px;\n    cursor: pointer;\n    display: block;\n    font-size: 12px;\n    font-weight: 800;\n    padding: 0 15px;\n    border: none;\n    color: #fff;\n\n}",""]);const p=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var p=0;p<this.length;p++){var d=this[p][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],p=0;p<n.length;p++){var d=n[p],s=o.base?d[0]+o.base:d[0],c=i[s]||0,f="".concat(s," ").concat(c);i[s]=c+1;var l=t(f),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)e[l].references++,e[l].updater(u);else{var x=r(u,o);o.byIndex=p,e.splice(p,0,{identifier:f,updater:x,references:1})}a.push(f)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var p=t(i[a]);e[p].references--}for(var d=o(n,r),s=0;s<i.length;s++){var c=t(i[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function g(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return x[n](t,t.exports,g),t.exports}g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),g.nc=void 0,n=g(379),e=g.n(n),t=g(795),o=g.n(t),r=g(569),i=g.n(r),a=g(565),p=g.n(a),d=g(216),s=g.n(d),c=g(589),f=g.n(c),l=g(402),(u={}).styleTagTransform=f(),u.setAttributes=p(),u.insert=i().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=s(),e()(l.Z,u),l.Z&&l.Z.locals&&l.Z.locals})();