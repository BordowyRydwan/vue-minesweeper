(function(t){function e(e){for(var n,o,s=e[0],u=e[1],c=e[2],d=0,h=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,s=1;s<i.length;s++){var u=i[s];0!==a[u]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},r=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-minesweeper/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"1fe2":function(t,e,i){"use strict";var n=i("c173"),a=i.n(n);a.a},4350:function(t,e,i){},4986:function(t,e,i){"use strict";var n=i("4350"),a=i.n(n);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},r=[],o={name:"App"},s=o,u=(i("5c0b"),i("2877")),c=Object(u["a"])(s,a,r,!1,null,null,null),l=c.exports,d=i("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game"},[n("Board",{ref:"board",attrs:{boardWidth:t.boardWidth,boardHeight:t.boardHeight,mines:t.mines,isPaused:t.isPaused,isMobile:t.isMobile},on:{isWin:t.checkIfWin,isLost:t.checkIfLost,flags:t.countFlags}}),n("div",{staticClass:"game__panel"},[n("div",{staticClass:"game__panel__flags"},[n("img",{attrs:{src:i("5a25"),alt:"Flags",srcset:""}}),n("p",[t._v(t._s(t.flags)+"/"+t._s(t.mines))])]),n("div",{staticClass:"game__panel__buttons"},[n("button",{attrs:{disabled:t.isPaused},on:{click:function(e){return t.resetGame()}}},[t._v(" Start again ")]),n("router-link",{attrs:{to:"/"}},[n("button",[t._v(" Change difficulty ")])]),n("button",{attrs:{disabled:t.isLost||t.isWin},on:{click:function(e){return t.pause()}}},[t._v(" Pause ")])],1)])],1)},m=[],f=(i("a9e3"),i("5377"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"board"},[t.isPaused?i("div",{staticClass:"board__pause"},[t._v(" Game paused ")]):t._e(),t._l(t.gameBoard.slice(1,t.boardHeight+1),(function(e,n){return i("div",{key:n,staticClass:"board__row"},t._l(e.slice(1,t.boardWidth+1),(function(t,e){return i("tile",{key:e,attrs:{content:t.toString(),x:e+1,y:n+1}})})),1)}))],2)}),p=[],b=(i("99af"),i("cb29"),i("4160"),i("caad"),i("d81d"),i("13d5"),i("2532"),i("159b"),i("2909")),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"tile",attrs:{"data-x":t.x,"data-y":t.y},domProps:{innerHTML:t._s(t.displayedContent)},on:{click:function(e){!(t.$parent.isWin||t.$parent.isLost||t.isFlagged)&&t.revealTile(t.x,t.y)},contextmenu:function(e){e.preventDefault(),!t.$parent.isWin&&!t.$parent.isLost&&t.colourFlagged(t.x,t.y)}}})},g=[],_=(i("a434"),{name:"Tile",props:{content:String,x:Number,y:Number},computed:{tileHeight:function(){var t=Math.floor((window.innerHeight-100*this.$parent.isMobile)/this.$parent.boardHeight*.8),e=Math.floor((window.innerWidth-30*!this.$parent.isMobile)/this.$parent.boardWidth*.8);return Math.min(e,t)},isFlagged:function(){return"|"===this.content},isMined:function(){return"*"===this.content},displayedContent:function(){return this.isFlagged?"<img src=".concat(i("5a25"),' style="width:50%;">'):this.isMined?"<img src=".concat(i("8350"),' style="width:50%;">'):this.content}},methods:{getTileDOM:function(t,e){return document.querySelector('.tile[data-x="'.concat(t,'"][data-y="').concat(e,'"]'))},getTile:function(t,e){return this.$parent.gameBoard[e][t]},getSolutionTile:function(t,e){return this.$parent.completedBoard[e][t]},setTile:function(t,e){var i=this.getSolutionTile(t,e);if(this.$parent.gameBoard[e].splice(t,1,i),"*"===i)for(var n=1;n<this.$parent.boardHeight+1;++n)for(var a=1;a<this.$parent.boardWidth+1;++a){var r=this.getSolutionTile(a,n);"*"===r&&this.$parent.gameBoard[n].splice(a,1,r)}this.colourClicked(t,e)},colourClicked:function(t,e){var i=this.getTileDOM(t,e);i.classList.contains("tile--clicked")||i.classList.add("tile--clicked")},colourFlagged:function(t,e){if(""===this.content&&this.$parent.flags<this.$parent.mines)this.$parent.gameBoard[e].splice(t,1,"|"),this.$parent.flags+=1;else{if("|"!==this.content)return;this.$parent.gameBoard[e].splice(t,1,""),this.$parent.flags-=1}},revealTile:function(t,e){if(t>0&&t<this.$parent.boardWidth+1&&e>0&&e<this.$parent.boardHeight+1&&(this.setTile(t,e),this.colourClicked(t,e)," "===this.getTile(t,e)))for(var i=-1;i<=1;++i)for(var n=-1;n<=1;++n)""!==this.getTile(t+i,e+n)&&"|"!==this.getTile(t+i,e+n)||"*"===this.getSolutionTile(t+i,e+n)||this.revealTile(t+i,e+n)}},mounted:function(){var t=this;Object(b["a"])(document.querySelectorAll(".tile")).forEach((function(e){e.style.height=t.tileHeight+"px",e.style.width=t.tileHeight+"px"}))},watch:{content:function(){var t="",e=this.getTileDOM(this.x,this.y);switch(this.content){case"1":t="one";break;case"2":t="two";break;case"3":t="three";break;case"4":t="four";break;case"5":t="five";break;case"6":t="six";break;case"7":t="seven";break;case"8":t="eight";break;default:t="";break}""!==t&&e.classList.add(t)}}}),w=_,W=(i("5d97"),Object(u["a"])(w,v,g,!1,null,"305bf2ed",null)),x=W.exports,y={name:"Board",components:{Tile:x},props:{boardWidth:Number,boardHeight:Number,mines:Number,isPaused:Boolean,isMobile:Boolean},data:function(){return{gameBoard:[],completedBoard:[],isLost:!1,isWin:!1,flags:0}},methods:{initializeBoard:function(){var t=this;return Object(b["a"])(Array(this.boardHeight+2)).map((function(){return Array(t.boardWidth+2).fill("")}))},initializeCompletedBoard:function(){for(var t=this,e=[],i=Object(b["a"])(Array(this.boardHeight+2)).map((function(){return Array(t.boardWidth+2).fill(" ")})),n=this.boardWidth*this.boardHeight,a=0;e.length<this.mines;++a){var r=Math.floor(Math.random()*n);e.includes(r)||e.push(r)}e.forEach((function(e){var n=e%t.boardWidth+1,a=Math.floor(e/t.boardWidth)+1;i[a][n]="*"}));for(var o=1;o<this.boardHeight+1;o+=1)for(var s=1;s<this.boardWidth+1;s+=1)if("*"!==i[o][s]){var u=["*"===i[o-1][s-1],"*"===i[o-1][s],"*"===i[o-1][s+1],"*"===i[o][s-1],"*"===i[o][s+1],"*"===i[o+1][s-1],"*"===i[o+1][s],"*"===i[o+1][s+1]],c=u.map((function(t){return+t})).reduce((function(t,e){return t+e}),0);i[o][s]=0===c?" ":c}return i},colorReset:function(){var t=["one","two","three","four","five","six","seven","eight"];Object(b["a"])(document.querySelectorAll(".tile")).forEach((function(e){var i;return(i=e.classList).remove.apply(i,["tile--clicked"].concat(t))}))},resetGame:function(){this.gameBoard=this.initializeBoard(),this.completedBoard=this.initializeCompletedBoard(),this.flags=0,this.$parent.time=0,this.colorReset(),this.isLost=!1,this.isWin=!1}},mounted:function(){this.resetGame()},watch:{gameBoard:function(){for(var t=0,e=0,i=1;i<this.boardHeight+1;++i){this.gameBoard[i].includes("*")&&(this.isLost=!0);for(var n=1;n<this.boardWidth+1;++n)"|"===this.gameBoard[i][n]&&"*"===this.completedBoard[i][n]&&(t+=1),""===this.gameBoard[i][n]&&(e+=1)}t===this.mines&&0===e&&(this.isWin=!0),this.$emit("isLost",this.isLost),this.$emit("isWin",this.isWin),this.$emit("flags",this.flags)}}},M=y,$=(i("1fe2"),Object(u["a"])(M,f,p,!1,null,"2bf95d8d",null)),C=$.exports,H={name:"Game",components:{Board:C},props:{boardWidth:Number,boardHeight:Number,mines:Number},data:function(){return{isPaused:!1,isWin:!1,isLost:!1,isMobile:window.innerWidth<600,flags:0}},methods:{checkIfLost:function(t){this.isLost=t},checkIfWin:function(t){this.isWin=t},countFlags:function(t){this.flags=t},resetGame:function(){return this.$refs.board.resetGame()},pause:function(){this.isPaused=!this.isPaused}},mounted:function(){var t=this;void 0!==this.boardWidth&&void 0!==this.boardHeight&&void 0!==this.mines||this.$router.go(-1),window.addEventListener("resize",(function(){t.isMobile=window.innerWidth<600}))},watch:{isWin:function(){if(this.isWin)alert("Congrats! You have won!")}}},k=H,T=(i("b122"),Object(u["a"])(k,h,m,!1,null,"6198a0a1",null)),O=T.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu"},[i("h1",[t._v("MINESWEEPER")]),t._m(0),i("div",{staticClass:"menu__options"},[i("router-link",{attrs:{to:{name:"Game",params:{boardWidth:8,boardHeight:8,mines:10}}}},[i("div",{staticClass:"menu__option easy"},[i("p",[t._v("EASY")]),i("p",[t._v("8 x 8")]),i("p",[t._v("Mines: "),i("b",[t._v("10")])])])]),i("router-link",{attrs:{to:{name:"Game",params:{boardWidth:16,boardHeight:16,mines:40}}}},[i("div",{staticClass:"menu__option medium"},[i("p",[t._v("MEDIUM")]),i("p",[t._v("16 x 16")]),i("p",[t._v("Mines: "),i("b",[t._v("40")])])])]),t.maxWidth>30&&t.maxHeight>16?i("router-link",{attrs:{to:{name:"Game",params:{boardWidth:30,boardHeight:16,mines:99}}}},[i("div",{staticClass:"menu__option hard"},[i("p",[t._v("HARD")]),i("p",[t._v("30 x 16")]),i("p",[t._v("Mines: "),i("b",[t._v("99")])])])]):i("div",{staticClass:"menu__option hard"},[i("p",[t._v("HARD")]),i("p",[t._v("disabled "),i("br"),t._v(" on mobiles")])]),i("router-link",{attrs:{to:"/custom"}},[i("div",{staticClass:"menu__option custom"},[i("p",[t._v("CUSTOM "),i("br"),t._v(" MODE")])])])],1)])},L=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",[t._v("LEFT CLICK (tap) - reveal tile, "),i("br"),t._v(" RIGHT CLICK (long tap) - flag")])}],S={name:"MainMenu",data:function(){return{maxWidth:Math.floor((window.innerWidth-100)/20*.8)-1,maxHeight:Math.floor((window.innerHeight-100)/20*.8)-1}},mounted:function(){var t=this;window.addEventListener("resize",(function(){t.maxWidth=Math.floor((window.innerWidth-100)/20*.8)-1,t.maxHeight=Math.floor((window.innerHeight-100)/20*.8)-1}))}},E=S,P=(i("4986"),Object(u["a"])(E,B,L,!1,null,"47665f48",null)),j=P.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"custom"},[i("h2",[t._v("CUSTOM SETTINGS")]),i("div",{staticClass:"custom__option"},[i("label",{attrs:{for:"width"}},[t._v("Width: ")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.width,expression:"width",modifiers:{number:!0}}],attrs:{type:"number",name:"width",id:"width",min:"5",max:t.maxWidth},domProps:{value:t.width},on:{input:function(e){e.target.composing||(t.width=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"custom__option"},[i("label",{attrs:{for:"height"}},[t._v("Height: ")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.height,expression:"height",modifiers:{number:!0}}],attrs:{type:"number",name:"heigth",id:"height",min:"5",max:t.maxHeight},domProps:{value:t.height},on:{input:function(e){e.target.composing||(t.height=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"custom__option"},[i("label",{attrs:{for:"mines"}},[t._v("Mines: ")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.mines,expression:"mines",modifiers:{number:!0}}],attrs:{type:"number",name:"mines",id:"mines",min:"5",max:t.width*t.height-1},domProps:{value:t.mines},on:{input:function(e){e.target.composing||(t.mines=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"custom__buttons"},[i("router-link",{attrs:{to:{name:"Game",params:{boardWidth:parseInt(t.width),boardHeight:parseInt(t.height),mines:parseInt(t.mines)}}}},[i("button",[t._v(" Start a game ")])]),i("router-link",{attrs:{to:"/"}},[i("button",[t._v(" Cancel ")])])],1)])},I=[],N={name:"CustomSettings",data:function(){return{width:5,height:5,mines:5,maxWidth:Math.floor((window.innerWidth-100)/20*.8)-1,maxHeight:Math.floor((window.innerHeight-100)/20*.8)-1}}},A=N,F=(i("58a7"),Object(u["a"])(A,G,I,!1,null,"6a3eeea0",null)),D=F.exports;n["a"].use(d["a"]);var z=new d["a"]({routes:[{path:"/game",name:"Game",component:O,props:!0},{path:"/",name:"MainMenu",component:j},{path:"/custom",name:"Custom",component:D}]});n["a"].config.productionTip=!1,new n["a"]({router:z,render:function(t){return t(l)}}).$mount("#app")},"58a7":function(t,e,i){"use strict";var n=i("b2b6"),a=i.n(n);a.a},"5a25":function(t,e,i){t.exports=i.p+"img/flag.65f44736.png"},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),a=i.n(n);a.a},"5d97":function(t,e,i){"use strict";var n=i("7b50"),a=i.n(n);a.a},"7a25":function(t,e,i){},"7b50":function(t,e,i){},8350:function(t,e,i){t.exports=i.p+"img/mine.42d34467.png"},"9c0c":function(t,e,i){},b122:function(t,e,i){"use strict";var n=i("7a25"),a=i.n(n);a.a},b2b6:function(t,e,i){},c173:function(t,e,i){}});
//# sourceMappingURL=app.25d36131.js.map