import{T as c,a as s}from"./index.59151019.js";import{I as S}from"./index.fc97feb1.js";import{u as z}from"./use-translate.a8ac0154.js";import{T as I}from"./function-call.544b7b0b.js";import{z as P,C as v,r as V,o as d,a as f,e as l,w as i,A as e,F as b,b as p,h as o,t as n}from"./vue-libs.4d090e76.js";import"./with-install.6409cc32.js";import"./use-route.2644a9f9.js";import"./index.58c8c900.js";import"./use-touch.66e4202e.js";import"./use-expose.7071738f.js";import"./on-popup-reopen.8d8043ad.js";import"./utils.39620306.js";import"./index.4a4661ca.js";import"./useChildren.e93f4c15.js";import"./useParent.fa48ddd0.js";import"./constant.bdedcaa1.js";import"./interceptor.92cc09c7.js";import"./use-refs.5b149b49.js";import"./index.7232bb06.js";import"./index.cbbbdc40.js";import"./mount-component.7f7f8bd9.js";import"./index.f74d82c4.js";import"./use-lazy-render.a4eed0b1.js";import"./index.af34d444.js";import"./index.12b7cbe6.js";const rt=P({setup(L){const a=z({"zh-CN":{tab:"\u6807\u7B7E ",title2:"\u6807\u7B7E\u680F\u6EDA\u52A8",title3:"\u7981\u7528\u6807\u7B7E",title4:"\u6837\u5F0F\u98CE\u683C",title5:"\u70B9\u51FB\u4E8B\u4EF6",title6:"\u7C98\u6027\u5E03\u5C40",title7:"\u81EA\u5B9A\u4E49\u6807\u7B7E",title8:"\u5207\u6362\u52A8\u753B",title9:"\u6ED1\u52A8\u5207\u6362",title10:"\u6EDA\u52A8\u5BFC\u822A",disabled:" \u5DF2\u88AB\u7981\u7528",matchByName:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",beforeChange:"\u5F02\u6B65\u5207\u6362"},"en-US":{tab:"Tab ",content:"content of tab",title2:"Swipe Tabs",title3:"Disabled Tab",title4:"Card Style",title5:"Click Event",title6:"Sticky",title7:"Custom Tab",title8:"Switch Animation",title9:"Swipeable",title10:"Scrollspy",disabled:" is disabled",matchByName:"Match By Name",beforeChange:"Before Change"}}),y=v(0),j=v(0),C=v(0),k=v(0),B=v(0),E=v(0),U=v(0),A=v(0),F=v(0),T=v(0),g=v(0),w=v("b"),_=[1,2,3,4],D=({title:m})=>{I(m)},N=m=>m===1?!1:new Promise(u=>{u(m!==3)});return(m,u)=>{const r=V("demo-block");return d(),f(b,null,[l(r,{title:e(a)("basicUsage")},{default:i(()=>[l(e(c),{active:y.value,"onUpdate:active":u[0]||(u[0]=t=>y.value=t)},{default:i(()=>[(d(),f(b,null,p(_,t=>l(e(s),{title:e(a)("tab")+t,key:t},{default:i(()=>[o(n(e(a)("content"))+" "+n(t),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(r,{title:e(a)("matchByName")},{default:i(()=>[l(e(c),{active:w.value,"onUpdate:active":u[1]||(u[1]=t=>w.value=t)},{default:i(()=>[l(e(s),{name:"a",title:e(a)("tab")+1},{default:i(()=>[o(n(e(a)("content"))+" 1 ",1)]),_:1},8,["title"]),l(e(s),{name:"b",title:e(a)("tab")+2},{default:i(()=>[o(n(e(a)("content"))+" 2 ",1)]),_:1},8,["title"]),l(e(s),{name:"c",title:e(a)("tab")+3},{default:i(()=>[o(n(e(a)("content"))+" 3 ",1)]),_:1},8,["title"])]),_:1},8,["active"])]),_:1},8,["title"]),l(r,{title:e(a)("title2")},{default:i(()=>[l(e(c),{active:j.value,"onUpdate:active":u[2]||(u[2]=t=>j.value=t)},{default:i(()=>[(d(),f(b,null,p(8,t=>l(e(s),{title:e(a)("tab")+t,key:t},{default:i(()=>[o(n(e(a)("content"))+" "+n(t),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(r,{title:e(a)("title3")},{default:i(()=>[l(e(c),{active:C.value,"onUpdate:active":u[3]||(u[3]=t=>C.value=t)},{default:i(()=>[(d(),f(b,null,p(3,t=>l(e(s),{title:e(a)("tab")+t,disabled:t===2,key:t},{default:i(()=>[o(n(e(a)("content"))+" "+n(t),1)]),_:2},1032,["title","disabled"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(r,{title:e(a)("title4")},{default:i(()=>[l(e(c),{active:k.value,"onUpdate:active":u[4]||(u[4]=t=>k.value=t),type:"card"},{default:i(()=>[(d(),f(b,null,p(3,t=>l(e(s),{title:e(a)("tab")+t,key:t},{default:i(()=>[o(n(e(a)("content"))+" "+n(t),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(r,{title:e(a)("title5")},{default:i(()=>[l(e(c),{active:B.value,"onUpdate:active":u[5]||(u[5]=t=>B.value=t),onClickTab:D},{default:i(()=>[(d(),f(b,null,p(2,t=>l(e(s),{title:e(a)("tab")+t,key:t},{default:i(()=>[o(n(e(a)("content"))+" "+n(t),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(r,{title:e(a)("title6")},{default:i(()=>[l(e(c),{active:E.value,"onUpdate:active":u[6]||(u[6]=t=>E.value=t),sticky:""},{default:i(()=>[(d(),f(b,null,p(_,t=>l(e(s),{title:e(a)("tab")+t,key:t},{default:i(()=>[o(n(e(a)("content"))+" "+n(t),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(r,{title:e(a)("title7")},{default:i(()=>[l(e(c),{active:U.value,"onUpdate:active":u[7]||(u[7]=t=>U.value=t)},{default:i(()=>[(d(),f(b,null,p(2,t=>l(e(s),{key:t},{title:i(()=>[l(e(S),{name:"more-o"}),o(n(e(a)("tab")),1)]),default:i(()=>[o(" "+n(e(a)("content"))+" "+n(t),1)]),_:2},1024)),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(r,{title:e(a)("title8")},{default:i(()=>[l(e(c),{active:A.value,"onUpdate:active":u[8]||(u[8]=t=>A.value=t),animated:""},{default:i(()=>[(d(),f(b,null,p(_,t=>l(e(s),{title:e(a)("tab")+t,key:t},{default:i(()=>[o(n(e(a)("content"))+" "+n(t),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(r,{title:e(a)("title9")},{default:i(()=>[l(e(c),{active:F.value,"onUpdate:active":u[9]||(u[9]=t=>F.value=t),swipeable:""},{default:i(()=>[(d(),f(b,null,p(_,t=>l(e(s),{title:e(a)("tab")+t,key:t},{default:i(()=>[o(n(e(a)("content"))+" "+n(t),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(r,{title:e(a)("title10")},{default:i(()=>[l(e(c),{active:T.value,"onUpdate:active":u[10]||(u[10]=t=>T.value=t),scrollspy:"",sticky:""},{default:i(()=>[(d(),f(b,null,p(8,t=>l(e(s),{title:e(a)("tab")+t,key:t},{default:i(()=>[o(n(e(a)("content"))+" "+n(t),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(r,{title:e(a)("beforeChange")},{default:i(()=>[l(e(c),{active:g.value,"onUpdate:active":u[11]||(u[11]=t=>g.value=t),"before-change":N},{default:i(()=>[(d(),f(b,null,p(4,t=>l(e(s),{title:e(a)("tab")+t,key:t},{default:i(()=>[o(n(e(a)("content"))+" "+n(t),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"])],64)}}});export{rt as default};