(this.webpackJsonpCetanilTM_puzzle=this.webpackJsonpCetanilTM_puzzle||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(8),c=n.n(r),s=(n(23),n(24),n(7),n(2)),a=n(4),o="INIT_GAME",u="SHUFFLE_TILES",h="REVERSE_TILES",l="SELECT_TILE",d="HIGHSCORE_LIST_LOADED",m="NAME_CHANGED",j="HIGHSCORE_LIST_SAVED";function b(e,t){return{type:o,gameId:e,imageNumber:t}}function g(){return{type:u}}var f=n(3),O=n.n(f),p=n(6);function x(e,t){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(O.a.mark((function e(t,n){var i,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=="".length){e.next=2;break}return e.abrupt("return");case 2:return i="".concat("","/highscore-lists/").concat(n().highScoreListId),e.prev=3,e.next=6,I(i);case 6:r=e.sent,t({type:d,highScoreList:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Network request failed");case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function N(e,t){return S.apply(this,arguments)}function S(){return(S=Object(p.a)(O.a.mark((function e(t,n){var i,r,c,s,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=="".length){e.next=2;break}return e.abrupt("return");case 2:if(i="".concat("","/highscore-lists/").concat(n().highScoreListId,"/game-results"),(r=n()).userName&&0!==r.userName.length){e.next=6;break}return e.abrupt("return");case 6:return c={userName:r.userName,score:r.turnNo-1,id:r.userId},e.prev=7,e.next=10,L(i,c);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(7),console.error("Network request failed3"),e.abrupt("return");case 16:return s="".concat("","/highscore-lists/").concat(n().highScoreListId),e.next=19,I(s);case 19:a=e.sent,t({type:j,highScoreList:a});case 21:case"end":return e.stop()}}),e,null,[[7,12]])})))).apply(this,arguments)}function I(e){return C.apply(this,arguments)}function C(){return(C=Object(p.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{headers:{ApiKey:"".concat("")}});case 3:if((n=e.sent).ok){e.next=6;break}throw Error("Network request failed");case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(0),Error("Network request failed");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function L(e,t){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"POST",headers:{"Content-Type":"application/json",ApiKey:"".concat("")},body:JSON.stringify(n)});case 3:if(e.sent.ok){e.next=6;break}throw Error("Network request failed");case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),Error("Network request failed");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var T=n(0),w=Object(s.b)((function(e){return{highScorePosition:e.highScorePosition,highScoreList:e.highScoreList}}),(function(e){return{onSubmitNameToHighScore:function(){e(N)},onNameChanged:function(t){e(function(e){return{type:m,name:e}}(t))}}}))((function(e){var t=Object(i.useState)(""),n=Object(a.a)(t,2),r=n[0],c=n[1];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{children:["YOU MADE IT TO #",e.highScorePosition," on the leaderboard!"]}),"Enter your name:",Object(T.jsx)("input",{type:"text",minLength:"3",maxLength:"25",required:!0,onChange:function(t){c(t.target.value),e.onNameChanged(t.target.value)}}),Object(T.jsx)("div",{children:r.length>=3&&r.length<=25&&Object(T.jsx)("button",{className:"game-button",onClick:function(){return e.onSubmitNameToHighScore(r)},children:"Submit"})})]})})),z=function(e){if(!e.highScoreList)return Object(T.jsx)(T.Fragment,{});var t=e.highScoreList.results.map((function(t,n){var i="";return e.userId&&t.id===e.userId&&(i="user-row-in-highscore"),Object(T.jsxs)("tr",{className:i,children:[Object(T.jsxs)("td",{children:["#",n+1]}),Object(T.jsx)("td",{children:t.userName}),Object(T.jsx)("td",{className:"date-column",children:new Date(t.utcDateTime).toLocaleDateString()}),Object(T.jsx)("td",{children:t.score})]},n+1)}));return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:e.highScoreList.name}),Object(T.jsxs)("table",{className:"highscoretable",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"Position"}),Object(T.jsx)("th",{children:"Name"}),Object(T.jsx)("th",{className:"date-column",children:"Date"}),Object(T.jsx)("th",{children:e.highScoreList.unit})]})}),Object(T.jsx)("tbody",{children:t})]})]})})},E=Object(s.b)((function(e){return{gameComplete:e.gameComplete,turnNo:e.turnNo,numClicksWithinTurn:e.numClicksWithinTurn,highScoreList:e.highScoreList,highScorePosition:e.highScorePosition,highScoreListSaved:e.highScoreListSaved,userId:e.userId}}))((function(e){return e.gameComplete?Object(T.jsxs)("div",{className:"game-status",children:[Object(T.jsx)("div",{children:"GAME COMPLETE!"}),Object(T.jsxs)("div",{children:["You used ",e.turnNo-1," turns"]}),e.highScorePosition>0&&!e.highScoreListSaved&&Object(T.jsx)(w,{}),e.highScorePosition>0&&e.highScoreListSaved&&Object(T.jsx)(z,{highScoreList:e.highScoreList,userId:e.userId})]}):Object(T.jsxs)("div",{className:"game-status",children:["Turn: ",Object(T.jsx)("b",{children:e.turnNo}),Object(T.jsxs)("div",{className:"game-instructions",children:[0===e.numClicksWithinTurn&&Object(T.jsx)("div",{children:"Click on the tile that should be moved"}),1===e.numClicksWithinTurn&&Object(T.jsx)("div",{children:"Click on the tile that should be swapped with the first selected tile"})]})]})})),y=n(15);var P=function(e){var t=e.id,n=-Math.floor(t/e.size)*e.tileWidth,i=t<e.size?-t*e.tileWidth:-t%e.size*e.tileWidth,r="".concat(window.location.href,"/images/img").concat(e.imageNumber,".jpg"),c={backgroundPosition:"left ".concat(i,"px top ").concat(n,"px"),backgroundImage:"url('".concat(r,"')"),backgroundSize:"".concat(e.width,"px")};e.correctPos&&(c=Object(y.a)(Object(y.a)({},c),{},{outline:"1px solid white",outlineOffset:"-10px"}));var s=e.selected?"tile selected":"tile";return Object(T.jsx)("div",{className:s,style:c,onClick:function(){return e.onClick(e.id)}})},_=n(18),D=Object(s.b)((function(e){return{size:e.size,tiles:e.tiles,imageNumber:e.imageNumber,selectedId:e.selectedId}}),(function(e){return{onTileClicked:function(t){e(function(e){return{type:l,id:e}}(t))}}}))((function(e){var t=Object(_.a)(),n=Object(a.a)(t,2),i=n[0],r=n[1],c=Math.max(Math.min(i,r-258),200),s=c/e.size,o={width:"".concat(e.size*s,"px")},u={gridTemplateColumns:"repeat(".concat(e.size,",").concat(s,"px)")};return Object(T.jsx)("div",{children:Object(T.jsx)("div",{className:"tile-wrapper",style:o,children:Object(T.jsx)("div",{className:"tile-container",style:u,children:e.tiles.map((function(t,n){return Object(T.jsx)(P,{id:t.id,correctPos:t.id===n,imageNumber:e.imageNumber,onClick:e.onTileClicked,tileWidth:s,size:e.size,selected:e.selectedId===t.id,width:c},n)}))})})})})),M=Object(s.b)(null,(function(e){return{onInitGame:function(t){e(b(t,Math.floor(18*Math.random())+1)),e(g()),e(x)}}}))((function(e){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("button",{className:"game-button",onClick:function(){return e.onInitGame(0)},children:"Restart 4x4"}),Object(T.jsx)("button",{className:"game-button",onClick:function(){return e.onInitGame(1)},children:"Restart 5x5"}),Object(T.jsx)("button",{className:"game-button",onClick:function(){return e.onInitGame(2)},children:"Restart 6x6"}),Object(T.jsx)("button",{className:"game-button",onClick:function(){return e.onInitGame(3)},children:"Restart 7x7"})]})})),W=function(e){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("header",{className:"game-header",children:Object(T.jsx)("div",{className:"game-title",children:" CETANIL"})}),Object(T.jsx)("div",{children:Object(T.jsx)("h2",{children:e.gameName})})]})},A=Object(s.b)((function(e){return{gameName:e.gameName,highScoreList:e.highScoreList}}))((function(e){return Object(T.jsxs)("div",{className:"game",children:[Object(T.jsx)(W,{gameName:e.gameName}),Object(T.jsx)(E,{}),Object(T.jsx)(D,{}),Object(T.jsx)(M,{}),Object(T.jsx)(z,{highScoreList:e.highScoreList})]})}));var F=function(){return Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(A,{})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),c(e),s(e)}))},R=[{name:"4x4 Puzzle",size:4,highscorelistid:"60f69e658210a26979caf438"},{name:"5x5 Puzzle",size:5,highscorelistid:"60f69e808210a26979caf439"},{name:"6x6 Puzzle",size:6,highscorelistid:"60f69eb58210a26979caf43b"},{name:"7x7 Puzzle",size:7,highscorelistid:"60f69ec88210a26979caf43c"}],H=n(10),q=n(16),J=n.n(q);function U(e){for(var t=[],n=0;n<e*e;n++){var i={id:n,top:100*-Math.floor(n/e),left:n<e?100*-n:-n%e*100};t.push(i)}return t}function V(e){return Object(H.a)(e).reverse()}function B(e){return J()(Object(H.a)(e))}function K(e,t,n){var i=Object(H.a)(e),r=i.findIndex((function(e){return e.id===t})),c=i[r],s=i.findIndex((function(e){return e.id===n})),a=Object.assign({},i[s]);return i[s]=c,i[r]=a,i}function X(e){for(var t=0;t<e.length;t++)if(e[t].id!==t)return!1;return!0}function Y(e,t,n,i){var r=i.results.map((function(e){return{id:e.id,score:e.score,time:isNaN(Date.parse(e.utcDateTime))?0:Date.parse(e.utcDateTime)}}));r.push({id:e,score:n,time:t}),r.sort((function(e,t){return e.score-t.score||t.time-e.time}));var c=r.findIndex((function(t){return t.id===e}));return c>-1&&c+1<=i.maxSize?c:-1}var Q=n(33),Z={turnNo:1,numClicksWithinTurn:0,selectedId:void 0,gameComplete:!1,imageNumber:1,tiles:[],size:void 0,gameId:void 0,gameName:void 0,highScoreList:void 0,highScorePosition:-1,userName:void 0,userId:void 0,highScoreListSaved:!1};var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n=R[t.gameId].size;return Object.assign({},Z,{gameId:t.gameId,size:n,gameName:R[t.gameId].name,imageNumber:t.imageNumber,tiles:U(n),highScoreListId:R[t.gameId].highscorelistid});case l:if(e.gameComplete)return e;if(t.id<0||t.id>e.size*e.size-1)return e;var i=e.numClicksWithinTurn+1;if(1===i){var r=e.tiles.map((function(e){return e}));return Object.assign({},e,{selectedId:t.id,numClicksWithinTurn:i,gameComplete:!1,tiles:r})}var c=e.tiles.map((function(e){return e}));if(t.id===e.selectedId)return Object.assign({},e,{selectedId:void 0,numClicksWithinTurn:0,tiles:c});var s=K(c,e.selectedId,t.id),a=X(s);if(a&&e.highScoreList){var b=Object(Q.a)(),g=Date.now(),f=Y(b,g,e.turnNo+1,e.highScoreList);return f>-1?Object.assign({},e,{selectedId:void 0,numClicksWithinTurn:0,gameComplete:a,turnNo:e.turnNo+1,tiles:s,highScorePosition:f+1,userId:b}):Object.assign({},e,{selectedId:void 0,numClicksWithinTurn:0,gameComplete:a,turnNo:e.turnNo+1,tiles:s,highScorePosition:f+1})}return Object.assign({},e,{selectedId:void 0,numClicksWithinTurn:0,gameComplete:a,turnNo:e.turnNo+1,tiles:s});case u:var O=B(e.tiles);return Object.assign({},e,{tiles:O});case h:var p=V(e.tiles);return Object.assign({},e,{tiles:p});case d:return Object.assign({},e,{highScoreList:t.highScoreList});case m:return Object.assign({},e,{userName:t.name});case j:return Object.assign({},e,{highScoreListSaved:!0,highScoreList:t.highScoreList});default:return e}},ee=n(11),te=n(17),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.b,ie=Object(ee.c)($,ne(Object(ee.a)(te.a)));ie.dispatch(b(0,Math.floor(18*Math.random())+1)),ie.dispatch(g()),ie.dispatch(x),c.a.render(Object(T.jsx)(s.a,{store:ie,children:Object(T.jsx)(F,{})}),document.getElementById("root")),G()},7:function(e,t,n){}},[[31,1,2]]]);
//# sourceMappingURL=main.bb1afc5c.chunk.js.map