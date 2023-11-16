(()=>{"use strict";var e={402:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),i=n(645),s=n.n(i)()(r());s.push([e.id,"*{\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n    list-style: none;\n    text-decoration: none;\n}\n\n#container{\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    overflow: hidden;\n}\n\n#container .proj-panel{\n    height: 100%;\n    width: 25vw;\n    background-color: #0284c7;\n    padding: 20px 40px;\n    box-sizing: border-box;\n    font-size: 1rem;\n}\n\n.proj-header{\n    font-size: 2em;\n    margin-top: 20px;\n    line-height: 30px;\n    font-weight: 700;\n    color: white;\n    border-bottom: 2px solid #fffd71;\n    padding-bottom: 6px;\n}\n\n.project{\n    font-size: 1em;\n    padding: 10px;\n    border-radius: 4px;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 10px;\n    font-weight: 500;\n    color: #fff;\n    background-color: #00000048;\n}\n.project:hover{\n    cursor: pointer;\n    border: 2px solid #ffffff;\n}\n\n.add-proj-container{\n    align-items: center;\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 12px;\n}\n.add-box{\n    width: 40px;\n    justify-content: center;\n    display: flex;\n    align-items: center;\n}\n.project-link{\n    cursor: pointer;\n    font-size: 2em;\n    font-weight: 800;\n    color: #ffffff;\n}\n/* .project-link:hover{\n    font-size: 3em;\n} */\n\n.main-panel{\n    height: 100%;\n    width: 75%;\n    padding: 20px 20px;\n    box-sizing: border-box;\n    font-size: 1rem;\n}\n\n/* img{\n    width: 30px\n} */\n\n.proj-info-container{\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 2px solid rgb(65, 60, 60);\n    /* position: relative; */\n}\n.proj-info-name{\n    font-size: 2em;\n    font-weight: 700;\n    margin-bottom: 4px;\n}\n.proj-info-description{\n    font-size: 1.2em;\n    font-weight: 200;\n    padding-left: 5px;\n}\n\n.proj-icon-container{\n    display: flex;\n    margin-right: 10px;\n    align-items: center;\n    /* position: relative; */\n}\n.icon-box{\n    cursor: pointer;\n    margin-right: 5px;\n    border-radius: 50%;\n    /* position: absolute; */\n    /* transition: 0.4s ease-in-out; */\n}\n.icon-box:hover {\n    width: 30px;\n    height: 30px;\n}\n.proj-edit-icon, .proj-trash-icon{\n    width: 25px;\n    height: 25px;\n    margin: 10px;\n}\n.proj-info-icon:hover{\n    opacity: 1;\n}\n.task{\n    border: 2px solid rgb(65, 60, 60);\n    border-radius: 5px;\n    margin-top: 12px;\n    padding: 15px;\n}\n.onCheckbox{\n    opacity: 0.5;\n    text-decoration: line-through;\n}\n.task-content{\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n}\n.task-area{\n    align-items: center;\n    display: flex;\n}\n.checkmark-proj{\n    border: 2px solid rgb(65, 60, 60);\n    border-radius: 50%;\n    height: 25px;\n    width: 25px;\n    cursor: pointer;\n}\n.task-name{\n    margin-left: 12px;\n}\n.edit-task, .delete-task{\n    cursor: pointer;\n    width: 20px;\n    margin-left: 12px;\n}\n\n.add-task-container{\n    display: flex;\n    margin-left: auto;\n    margin-top: 8px;\n    background-color: rgba(8, 194, 8, 0.479);\n    border-radius: 50%;\n    height: 25px;\n    width: 25px;\n    \n}\n.add-task-container:hover{\n    background-color: rgb(8, 194, 8)\n}\n\n#add-proj-container , #add-task-forum-container{\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    z-index: 3;\n}\n.forum-container{\n    width: 200px;\n    border: 8px;\n    box-shadow: 4px 4px 5px 0px #000000af;\n    padding: 2vh 2vw\n}\n\n.forum-container h2{\n    /* margin: 1vh;\n    padding: .25vh; */\n    text-align: center;\n    width: 100%;\n    font-size: 1rem;\n    /* color: #78788c; */\n    border-bottom: 2px solid #000000;\n}\n.input-content{\n    display: flex;\n    flex-direction: column;\n    /* margin-top: 2vh; */\n}\n.forum-container input{\n    width: 100%;\n    padding-top: 1vh;\n    box-sizing: border-box;\n    background: none;\n    outline: none;\n    border: 0;\n    border-bottom: 2px solid #a1a1a1;\n    resize: none;\n}\n.forum-bttns{\n    display: flex;\n    /* justify-content: center; */\n    gap: 1rem;\n    padding-top: 1vh;\n}\n#add-proj-forum-bttn, #add-task-forum-bttn{\n    background: green;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    display: block;\n    text-align: center;\n    width: 100%;\n    color:#fff;\n    font-size: 14px;\n    font-weight: 700;\n}\n#close-add-proj-forum-bttn, #close-add-task-forum-bttn{\n    background: red;\n    border-radius: 5px;\n    cursor: pointer;\n    display: block;\n    font-size: 12px;\n    font-weight: 800;\n    padding: 0 15px;\n    border: none;\n    color: #fff;\n\n}\n\n\n",""]);const a=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(s[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},s=[],a=0;a<e.length;a++){var d=e[a],c=o.base?d[0]+o.base:d[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var m=n(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=r(u,o);o.byIndex=a,t.splice(a,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var d=o(e,r),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),s=n.n(i),a=n(565),d=n.n(a),c=n(216),l=n.n(c),p=n(589),m=n.n(p),u=n(402),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let g;const k=new Uint8Array(16);function y(){if(!g&&(g="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(k)}const b=[];for(let e=0;e<256;++e)b.push((e+256).toString(16).slice(1));const v=function(e,t,n){if(f.randomUUID&&!t&&!e)return f.randomUUID();const o=(e=e||{}).random||(e.rng||y)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return function(e,t=0){return b[e[t+0]]+b[e[t+1]]+b[e[t+2]]+b[e[t+3]]+"-"+b[e[t+4]]+b[e[t+5]]+"-"+b[e[t+6]]+b[e[t+7]]+"-"+b[e[t+8]]+b[e[t+9]]+"-"+b[e[t+10]]+b[e[t+11]]+b[e[t+12]]+b[e[t+13]]+b[e[t+14]]+b[e[t+15]]}(o)};class x{constructor(e,t,n,o,r,i){this.name=e,this.description=t,this.dueDate=n,this.project=o,this.priority=r,this.id=v(),this.checkboxStatus=i}}class I{constructor(){this.itemsById={}}add(e){this.itemsById[e.id]=e}get items(){return Object.values(this.itemsById)}getItemByID(e){return this.itemsById[e]}removeById(e){delete this.itemsById[e]}}class j{constructor(e){this.name=e,this.id=v()}}class w{constructor(){this.projectsById={}}add(e){this.projectsById[e.id]=e}get items(){return Object.values(this.itemsById)}getItemByID(e){return this.projectsById[e]}removeById(e){delete this.projectsById[e]}}class B{constructor(e,t){this.element=e,this.model=t,this.id=t.id,this.name=t.name,this.description=t.description,this.due=t.dueDate,this.project=t.project}get checkbox(){return this.element.querySelector("input[name=checkmark-proj")}get taskName(){return this.element.querySelector("task-name")}get taskDueDate(){return this.element.querySelector("due-date")}get deleteBttn(){return this.element.querySelector("delete-task")}get editBttn(){return this.element.querySelector("edit-task")}get id(){return this.element.getAttribute("id")}set id(e){this.element.setAttribute("id",e);const t=`checkbox-${e}`;this.checkbox.setAttribute("id",t)}set name(e){this.taskName.textContent=e}set due(e){this.taskDueDate.textContent=e}}class T{constructor(e,t){return this.element=e,this.model=t,this.id=t.id,this.name=t.name,this.element}get projectName(){return this.element.querySelector("proj-name")}get id(){return this.element.getAttribute("id")}get deleteBttn(){return this.element.querySelector("proj-trash-icon")}get editBttn(){return this.element.querySelector("proj-edit-icon")}set id(e){this.element.setAttribute("id",e)}set name(e){this.projectName.textContent=e}}const D=new class{constructor(){this.taskList=new I,this.projectList=new w}createAndAddNewTaskItem(e,t,n,o,r){const i=new x(e,t,n,o,r);return this.taskList.add(i),i}updateTaskItem(e,t,n,o,r){return e.model.name=t,e.model.description=n,e.model.dueDate=o,e.model.project=r,e}removeItemById(e){this.taskList.removeById(e)}createNewProject(e){const t=new j(e);return this.projectList.add(t),t}removeProjectById(e){this.projectList.removeById(e)}updateTaskListLocalStorage(){window.localStorage.setItem("taskList",JSON.stringify(this.taskList))}updateProjectListLocalStorage(){window.localStorage.setItem("projectList",JSON.stringify(this.projectList))}updateCheckBox(e,t){this.taskList.getItemByID(e).checkboxStatus=t}getTodayDate(){let e=new Date;function t(e){return(e<10?"0":"")+e}return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())}},L=new class{getByID(e){return document.getElementById(e)}toggleAddTaskForumVisibility(e,t){const n=e?"block":"none";this.getByID(t).style.display=n}toggleFilterVisiblity(e,t){const n=e?"grid":"none";this.getByID(t).style.display=n}getAddProjectForumElementValueByName(e){return this.getByID("add-proj-forum").elements[e].value}getAddTaskForumElementValueByName(e){return this.getByID("add-task-forum").elements[e].value}resetAndCloseForumByID(e,t){this.getByID(e).reset(),this.toggleAddTaskForumVisibility(!1,t)}appendTaskItem(e){let t=this.getByID("task-template").content.cloneNode(!0).querySelector("div"),n=new B(t,e);return this.getByID("task-container").append(n.element),n}appendProject(e){let t=this.getByID("project-template").content.cloneNode(!0).querySelector("div"),n=new T(t,e);this.getByID("proj-container").append(n.element);let o=document.createElement("option");return o.value=e.element,o.text=e.element,o.id=`checkbox-${e.id}`,this.getByID("task-project").appendChild(o),n}fillAddForumWhenEdit(e){this.getByID("add-task-forum").elements["task-name"].value=e.model.name,this.getByID("add-task-forum").elements["task-due-date"].value=e.model.dueDate,this.getByID("add-task-forum").elements["task-project"].value=e.model.project}updateTaskItem(e){let t=this.getByID(e.id);new TaskView(t,e.model)}updateTaskItemAfterProjectDeleted(e){let t=this.getByID(e.id);new TaskView(t,e)}};new class{constructor(e,t){this.model=e,this.view=t,this.onEditTaskItem={status:"false",element:""},t.getByID("close-add-proj-forum-bttn").addEventListener("click",(()=>this.resetAndCloseForumByID("add-proj-forum","add-proj-container"))),t.getByID("add-task-forum").addEventListener("submit",(e=>this.onAddTaskForumSubmit(e))),t.getByID("add-project-bttn").addEventListener("click",(()=>t.toggleAddTaskForumVisibility(!0,"add-proj-container"))),t.getByID("close-add-proj-forum-bttn").addEventListener("click",(()=>t.resetAndCloseForumByID("add-proj-forum","add-proj-container"))),t.getByID("task-add").addEventListener("click",(()=>t.toggleAddTaskForumVisibility(!0,"add-task-forum-container"))),t.getByID("add-proj-forum").addEventListener("submit",(e=>this.onAddProjectForumSubmit(e))),window.addEventListener("load",(()=>this.retrieveRecords()))}onAddTaskForumSubmit(e){e.preventDefault(),1==this.onEditTaskItem.status?this.updateTaskItem():this.createNewTaskItem(),this.view.resetAndCloseForumByID("add-task-forum","add-task-forum-container")}createNewTaskItem(){const e=this.createNewTaskFromForumInputs();this.appendAndHookUpNewTaskItemFromModel(e),this.model.updateTaskListLocalStorage()}updateTaskItem(){const e=this.getElementsFromForumInputs(),t=this.model.updateTaskItem(this.onEditTaskItem.element,e.name,e.dueDate,e.project);this.view.updateTaskItem(t),this.onEditTaskItem.status=!1,this.model.updateTaskListLocalStorage()}getElementsFromForumInputs(){return{name:this.view.getAddTaskForumElementValueByName("task-name"),dueDate:this.view.getAddTaskForumElementValueByName("task-due-date"),project:this.view.getAddTaskForumElementValueByName("task-project")}}createNewTaskFromForumInputs(){const e=this.getElementsFromForumInputs();return this.model.createAndAddNewTaskItem(e.name,e.dueDate,e.project)}appendAndHookUpNewTaskItemFromModel(e){const t=this.view.appendTaskItem(e);return t.deleteButton.addEventListener("click",(()=>this.deleteTaskItem(t))),t.editButton.addEventListener("click",(()=>this.editTaskItem(t))),t.deleteButton.addEventListener("change",(()=>this.checkCheckbox(t))),t}deleteTaskItem(e){this.model.removeItemById(e.id),e.element.remove(),this.model.updateTaskListLocalStorage()}editTaskItem(e){this.view.toggleAddTaskFormVisibility(!0,"add-task-forum-container"),this.view.fillAddForumWhenEdit(e),this.onEditTaskItem.status=!0,this.onEditTaskItem.element=e}checkCheckbox(e){parent=this.view.getByID("task-container"),e.checkbox.checked?(e.element.classList.add("onCheckbox"),parent.append(e.element),this.model.updateCheckBox(e.id,!0)):(e.element.classList.remove("onCheckbox"),parent.prepend(e.element),this.model.updateCheckBox(e.id,!1)),this.model.updateTaskListLocalStorage()}onAddProjectForumSubmit(e){e.preventDefault(),this.createNewProject(),this.view.resetAndCloseForumByID("add-proj-forum","add-proj-container")}createNewProject(){const e=this.view.getAddProjectForumElementValueByName("proj-name"),t=this.model.createNewProject(e);this.appendAndHookUpNewProjectFromModel(t),this.model.updateProjectListLocalStorage()}appendAndHookUpNewProjectFromModel(e){const t=this.view.appendProject(e);t.deleteButton.addEventListener("click",(()=>this.deleteProject(t)))}deleteProject(e){this.updateProjectToInbox(e.model.name),this.model.removeProjectById(e.id),this.view.getByID(`checkbox-${e.id}`).remove(),e.element.remove(),this.model.updateProjectListLocalStorage(),this.model.updateTaskListLocalStorage()}updateDeletedProjectToInbox(e){let t=this.model.taskList.itemsById;Object.keys(t).forEach((n=>{t[n].project==e&&(t[n].project="Inbox",this.view.updateTaskItemAfterProjectDeleted(t[n]))}))}retrieveRecords(){this.retrieveProjects(),this.retrieveTaskList()}retrieveProjects(){if(null!==window.localStorage.getItem("projectList")){let e=JSON.parse(localStorage.getItem("projectList")).projectsById;Object.keys(e).forEach((t=>{const n=this.model.createNewProject(e[t].name);this.appendAndHookUpNewProjectFromModel(n)}))}}retrieveTaskList(){null!==window.localStorage.getItem("taskList")&&(JSON.parse(localStorage.getItem("taskList")).itemsById,Object.keys(taskListObj).forEach((e=>{const t=this.model.createAndAddNewTaskItem(taskListObj[e].name,taskListObj[e].dueDate,taskListObj[e].project);this.appendAndHookUpNewTaskItemFromModel(t)})),this.retrieveCheckbox())}retrieveCheckbox(){let e=this.model.taskList.itemsById;Object.keys(e).forEach((t=>{if(1==e[t].checkboxStatus){let n=this.view.getByID(e[t].id);n.classList.add("onCheckbox"),this.view.getByID(`checkbox-${e[t].id}`).checked=!0,parent=this.view.getByID("task-container"),parent.append(n)}}))}}(D,L)})()})();