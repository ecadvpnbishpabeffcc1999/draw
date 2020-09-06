/*! For license information please see cl-gs.44a3869bc8dbf7c033e0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1,6],{105:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),o=a(2),n=a(78),l=a(434),c=a(79),u=a(4),i=a(70),p=a(71),d=a(75),m=a(87),b=a(86),f=a(88),h=a(82),g=a(83),v=a(90),w=a(73),j=a(135);var k=Object(o.d)(j.a)`
  &:hover {
    ${e=>!e.noHover&&"background: radial-gradient(#ccf, #ccf)"};
  }
`;const E=o.d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 999px) {
    justify-content: center;
  }
`;var O=Object(s.memo)(({display:e,displayGroups:t,possibleGroups:a,onPick:o})=>{const n=Object(s.useCallback)(e=>{const t=e.target,a=+t.dataset.group;if(Number.isNaN(a))throw new TypeError("Incorrect group ball: "+t.dataset.group);o(a)},[o]);return r.a.createElement(E,null,e&&(null==a?void 0:a.map(e=>r.a.createElement(k,{key:e,"data-group":e,forceVisible:t,onClick:n},Object(w.a)(e)))))}),G=a(85),y=a(84),P=a(98);const x=o.c`
  background-color: #ffc0c0;
`,T=o.c`
  background-color: #c0e0ff;
`;function N(e){const t=e.map(e=>c(e));return{currentPotNum:0,selectedTeam:null,pickedGroup:null,hungPot:t[0],possibleGroups:null,possibleGroupsShuffled:null,pots:t,groups:e[0].map(()=>[])}}t.default=Object(s.memo)(({season:e,pots:t})=>{const[a,o]=Object(i.a)(),[w,j]=Object(p.a)(),[{currentPotNum:k,selectedTeam:E,pickedGroup:S,hungPot:C,possibleGroups:A,possibleGroupsShuffled:I,pots:M,groups:W},$]=Object(s.useState)(()=>N(t));Object(s.useEffect)(()=>{$(N(t))},[t,a]);const[,R]=Object(u.a)(),[D]=Object(d.a)(),H=Object(m.a)(P.default),J=Object(s.useRef)(null),L=Object(s.useCallback)(e=>{if(E)return;const t=M[k][e];if(!t)return;const a=M.slice();a[k]=a[k].filter((t,a)=>a!==e),$({currentPotNum:k,hungPot:C,selectedTeam:t,possibleGroups:A,possibleGroupsShuffled:I,pickedGroup:null,pots:a,groups:W})},[M,W,k,C,E,A,I]),F=Object(s.useCallback)(e=>{if(!E)return void R({error:"No selected team..."});const t=W.slice();t[e]=[...t[e],E];const a=M[k].length>0?k:k+1;$({selectedTeam:null,pickedGroup:e,hungPot:M[a],possibleGroups:null,possibleGroupsShuffled:null,currentPotNum:a,pots:M,groups:t})},[M,W,E,k,C]);Object(s.useEffect)(()=>{E&&(async()=>{if(!E)throw new Error("no selected team");let t;try{t=(await H({season:e,pots:M,groups:W,selectedTeam:E})).possibleGroups}catch(e){return console.error(e),void R({error:"Could not determine the group"})}$({selectedTeam:E,pickedGroup:null,hungPot:C,currentPotNum:k,possibleGroups:t,possibleGroupsShuffled:c(t),pots:M,groups:W})})()},[E]);const V=k>=M.length;Object(s.useEffect)(()=>{const e=null==C?void 0:C.length;if(w&&e){const t=n(e-1);L(t)}},[w,C]),Object(s.useEffect)(()=>{if(w&&(null==I?void 0:I.length)){const e=l(I);F(e)}},[w,I]),Object(s.useEffect)(()=>{V&&w&&j(!1)},[V,w]);const q=W.length,z=Object(s.useCallback)(e=>e<q>>1?x:T,[q]);return r.a.createElement(y.a,null,r.a.createElement(h.a,null,r.a.createElement(b.a,{selectedTeams:E&&[E],initialPots:t,pots:M,currentPotNum:k}),r.a.createElement(f.a,{ref:J,maxTeams:M.length,currentPotNum:k,groups:W,possibleGroups:w?null:A,getGroupHeaderStyles:z})),r.a.createElement(g.a,null,!w&&r.a.createElement(v.a,{display:!V,displayTeams:D,selectedTeam:E,pot:C,onPick:L}),r.a.createElement(G.a,{long:!1,completed:V,selectedTeam:E,pickedGroup:S,possibleGroups:A,isDisplayPossibleGroupsText:!!E,numGroups:q,groupsElement:J,reset:o}),!w&&r.a.createElement(O,{display:!V,displayGroups:D,possibleGroups:I,onPick:F})))})},129:function(e,t,a){var s=a(112);e.exports=function(e){var t=e.length;return t?e[s(0,t-1)]:void 0}},434:function(e,t,a){var s=a(129),r=a(435),o=a(76);e.exports=function(e){return(o(e)?s:r)(e)}},435:function(e,t,a){var s=a(129),r=a(130);e.exports=function(e){return s(r(e))}},87:function(e,t,a){"use strict";var s=a(0);Object.create;Object.create;function r(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function o(e,t,a){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,a),a}var n=class{constructor(){this.callbacks=new Map}add(e,t){this.callbacks.set(e,t)}addAndGetId(e){const t=Math.random().toString(36).slice(2);return this.add(t,e),t}resolve(e,t){this.getCallbackAndDelete(e)(null,t)}reject(e,t){this.getCallbackAndDelete(e)(t)}getCallbackAndDelete(e){const t=this.callbacks.get(e);if(!t)throw new Error("no resolver with id = "+e);return this.callbacks.delete(e),t}};const l=(e,t)=>(a,s)=>{a?t(a):e(s)};var c,u,i,p=class{constructor(){this.manager=new n}getPromise(e){return new Promise(async(t,a)=>{const s=l(t,a);this.manager.add(e,s)})}getPromiseWithId(e){return new Promise(async(t,a)=>{const s=l(t,a),r=this.manager.addAndGetId(s);e&&e(r)})}resolve(e,t){this.manager.resolve(e,t)}reject(e,t){this.manager.reject(e,t)}},d=a(91),m=a.n(d);c=new WeakMap,u=new WeakMap,i=new WeakMap;var b=class{constructor(e,t){c.set(this,void 0),u.set(this,new p),i.set(this,void 0),o(this,i,t),o(this,c,e),r(this,c).onmessage=e=>{const{messageId:t,data:a}=e.data;r(this,u).resolve(t,a)}}sendAndReceive(e){const t=r(this,u).getPromiseWithId(t=>{r(this,c).postMessage({messageId:t,data:e})});return void 0===r(this,i)?t:m()(t,r(this,i))}terminate(){r(this,c).terminate()}};t.a=e=>{const t=Object(s.useMemo)(()=>new b(new e,12e4),[]);return Object(s.useEffect)(()=>()=>{t.terminate()},[]),Object(s.useCallback)(t.sendAndReceive.bind(t),[t])}},88:function(e,t,a){"use strict";var s=a(0),r=a.n(s),o=a(2),n=a(73),l=a(67),c=a(72),u=a(96),i=a(68),p=a(66),d=a(80),m=a(74),b=a(69),f=a(81),h=a(89);const g=o.e`
  from {
    background-color: white;
    box-shadow: 0 0 20px #08f;
  }
  to {}
`,v=o.e`
  from {
    background-color: rgba(255, 255, 0, 0.5);
  }
  to {}
`,w=o.c`
  position: relative; /* enables glow */
  animation: ${g} 1s ease;
  box-shadow: 0 0 5px #6af;
`,j=o.c`
  animation: ${v} 3s ease-out normal forwards;
`;var k=Object(o.d)(p.a)`
  ${e=>e.possible&&w}
  ${e=>e.hasTeam&&j}
`;var E=Object(s.memo)(({team:e,possible:t})=>{var a;const o=Object(d.a)(e),[n,l]=Object(s.useState)(e),c=Object(s.useRef)(null),u=Object(s.useCallback)(()=>{l(e)},[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{hasTeam:!!n,possible:t},n?r.a.createElement(b.a,{country:Object(m.a)(n)},null!==(a=n.shortName)&&void 0!==a?a:n.name):r.a.createElement(f.a,{ref:c})),e&&e!==o&&r.a.createElement(h.a,{from:`[data-cellid='${e.id}']`,to:c,duration:350,team:e,onAnimationEnd:u}))});var O=Object(s.memo)(({maxTeams:e,groupLetter:t,teams:a,potNum:s,possible:o,headerStyles:n})=>r.a.createElement(c.a,null,r.a.createElement("thead",null,r.a.createElement(i.a,null,r.a.createElement(p.a,null,r.a.createElement(u.a,{styles:n},"Group"," ",t)))),r.a.createElement("tbody",null,l(e).map(e=>r.a.createElement(i.a,{key:e},r.a.createElement(E,{team:a[e],possible:e===s&&o}))))));const G=o.d.div`
  display: flex;
  flex-flow: row wrap;

  & > * {
    flex: 1;
    flex-basis: 22%;
  }
`,y=Object(s.forwardRef)(({maxTeams:e,currentPotNum:t,groups:a,possibleGroups:s,getGroupHeaderStyles:o},l)=>r.a.createElement(G,{ref:l},null==a?void 0:a.map((a,l)=>{const c=Object(n.a)(l),u=null==o?void 0:o(l);return r.a.createElement(O,{key:c,maxTeams:e,groupLetter:c,teams:a,potNum:t,possible:!!(null==s?void 0:s.includes(l)),headerStyles:u})})));t.a=Object(s.memo)(y)},98:function(e,t,a){"use strict";a.r(t),t.default=function(){return new Worker(a.p+"worker.7acc9c9be30a5ff545a2.worker.js")}}},0,[80]]);