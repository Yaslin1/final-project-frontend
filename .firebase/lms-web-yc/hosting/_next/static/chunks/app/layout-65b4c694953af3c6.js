(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1108:function(e,t,s){Promise.resolve().then(s.bind(s,2014)),Promise.resolve().then(s.bind(s,1419)),Promise.resolve().then(s.bind(s,8410)),Promise.resolve().then(s.t.bind(s,8808,23))},1419:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}});var r=s(9268),l=s(6006),n=s(2014);function a(){let{user:e}=(0,l.useContext)(n.AuthContext);return console.log(e),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{className:"z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700",children:(0,r.jsx)("div",{className:"relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center",children:(0,r.jsxs)("div",{className:"relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0",children:[(0,r.jsx)("div",{className:"container relative left-0 z-50 flex w-3/4 h-auto h-full",children:(0,r.jsxs)("div",{className:"relative flex items-center w-full h-full lg:w-64 group",children:[(0,r.jsx)("div",{className:"absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden",children:(0,r.jsx)("svg",{fill:"none",className:"relative w-5 h-5","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,r.jsx)("svg",{className:"absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),(0,r.jsx)("input",{type:"text",className:"block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input",placeholder:"Search"}),(0,r.jsx)("div",{className:"absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block",children:"+"})]})}),(0,r.jsxs)("div",{className:"relative flex items-center w-1/4 justify-end p-1 ml-5 mr-4 sm:mr-0 sm:right-auto",children:[(0,r.jsx)("div",{class:"flex items-center",children:(0,r.jsx)("div",{class:"w-px h-6 bg-gray-300"})}),(0,r.jsxs)("a",{href:"#",className:"relative flex items-center",children:[(0,r.jsx)("img",{alt:"profil",src:(null==e?void 0:e.photoURL)||"/images/profile.png",className:"ml-4 mr-2 object-cover rounded-full h-10 w-10 "}),(0,r.jsx)("p",{children:(null==e?void 0:e.displayName)||"Welcome"})]})]})]})})})})}},2014:function(e,t,s){"use strict";s.r(t),s.d(t,{AuthContext:function(){return h},default:function(){return x}});var r=s(9268),l=s(5846),n=s.n(l),a=s(6008),i=s(6006),o=s(1313),c=s(4734);let u=(0,o.ZF)({apiKey:"AIzaSyBCxIyAShmt2H9GFCic4oUj5b53gTEwMSw",authDomain:"chekov-yc.firebaseapp.com",projectId:"chekov-yc",storageBucket:"chekov-yc.appspot.com",messagingSenderId:"861407056407",appId:"1:861407056407:web:935c2cc40563f9b0f7c252"}),d=(0,c.v0)(u);function m(){let{setUser:e}=(0,i.useContext)(h);return(0,r.jsxs)("section",{className:"bg-violet-950 p-6 rounded-lg max-w-[420px] w-full",children:[(0,r.jsxs)("form",{onSubmit:t=>{t.preventDefault();let s=t.target.email.value,r=t.target.password.value;(0,c.e5)(d,s,r).then(t=>{e(t.user)}).catch(e=>alert(e.message))},className:"flex flex-col items-start justify-around min-h-[30vh]",children:[(0,r.jsxs)("label",{htmlFor:"email",className:"flex justify-between w-full",children:[(0,r.jsx)("span",{children:" Email "}),(0,r.jsx)("input",{required:!0,type:"email",name:"email",className:"rounded-lg border-transparent border border-violet-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400  text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent"})]}),(0,r.jsxs)("label",{htmlFor:"password",className:"flex justify-between w-full",children:[(0,r.jsx)("span",{children:"Password"}),(0,r.jsx)("input",{required:!0,type:"password",name:"password",className:"rounded-lg border-transparent border border-violet-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400  text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent"})]}),(0,r.jsx)("input",{type:"submit",value:"Login",className:"bg-green-300 text-violet-950 py-2 px-8  rounded-lg shadow-lg transition duration-300 hover:bg-violet-300 hover:shadow-sm  cursor-pointer w-full"})]}),(0,r.jsx)("button",{onClick:()=>{let t=new c.hJ;(0,c.rh)(d,t).then(t=>{e(t.user)}).catch(e=>alert(e.message))},className:"bg-sky-300 text-violet-950 py-2 px-8  rounded-lg shadow-lg transition duration-300 hover:bg-violet-300 hover:shadow-sm  cursor-pointer",children:"Login With Google"}),(0,r.jsx)("br",{})]})}let h=(0,i.createContext)();function x(e){let{children:t}=e,s=(0,a.usePathname)(),[l,o]=(0,i.useState)();return(0,i.useEffect)(()=>{if(l)return;let e=sessionStorage.getItem("user");e&&"undefined"!==e&&o(JSON.parse(e))},[]),(0,r.jsxs)(h.Provider,{value:{user:l,setUser:e=>{sessionStorage.setItem("user",JSON.stringify(e)),o(e)}},children:[" ",l||"/signup"===s?(0,r.jsx)(r.Fragment,{children:t}):(0,r.jsxs)("main",{className:"bg-violet-900 min-h-screen text-orange-50 px-4 py-8 text-center",children:[(0,r.jsx)("h1",{children:"Login"}),(0,r.jsx)(m,{}),(0,r.jsxs)("p",{className:"mt-4",children:["Not a user? ",(0,r.jsx)(n(),{href:"/signup",className:"text-sky-300",children:"Sign Up"})]})]})]})}},8410:function(e,t,s){"use strict";s.r(t),t.default="ac2353319419"},8808:function(e){e.exports={style:{fontFamily:"'__Inter_20951f', '__Inter_Fallback_20951f'",fontStyle:"normal"},className:"__className_20951f"}}},function(e){e.O(0,[271,608,253,698,744],function(){return e(e.s=1108)}),_N_E=e.O()}]);