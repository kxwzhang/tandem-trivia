(this["webpackJsonptandem-trivia"]=this["webpackJsonptandem-trivia"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(7),i=n.n(r),o=(n(13),n(5)),u=n(2),j=(n(14),n(15),n(16),function(e){var t=e.handleUpdate,n=e.clicked,a=e.questionNumber,r=e.triviaQuestion,i=r.question,j=r.correct,b=r.incorrect,l=Object(s.useState)([]),d=Object(u.a)(l,2),O=d[0],f=d[1];return Object(s.useEffect)((function(){f([j].concat(Object(o.a)(b)).sort((function(){return Math.random()-.5})))}),[a,j,b]),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"trivia-question-container",children:Object(c.jsxs)("h1",{className:"trivia-question",children:[a,") ",i]})}),Object(c.jsx)("div",{className:"trivia-answers-container",children:O.map((function(e,s){return Object(c.jsx)("button",{disabled:n,onClick:function(n){return t(n,e)},className:"trivia-answer-button",children:e},s)}))})]})}),b=function(e){var t=e.score,n=e.handleStartGame;return Object(c.jsxs)("div",{className:"game-over-container",children:[Object(c.jsxs)("h2",{className:"score",children:["You answered ",t," questions correctly!"]}),Object(c.jsx)("button",{onClick:n,className:"play-again",children:"Play Again"})]})},l=function(e){var t=e.nextQuestion,n=9===e.questionNumber?"Results":"Next Question";return Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:t,className:"next-button",children:n})})};var d=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)([]),i=Object(u.a)(r,2),d=i[0],O=i[1],f=Object(s.useState)(0),m=Object(u.a)(f,2),h=m[0],v=m[1],x=Object(s.useState)(0),N=Object(u.a)(x,2),S=N[0],p=N[1],q=Object(s.useState)(!1),w=Object(u.a)(q,2),k=w[0],g=w[1],y=Object(s.useState)(!1),L=Object(u.a)(y,2),E=L[0],Q=L[1],T=Object(s.useState)(!1),A=Object(u.a)(T,2),M=A[0],C=A[1],G=Object(s.useState)(0),H=Object(u.a)(G,2);function J(e){return Object(o.a)(e).sort((function(){return Math.random()-.5})).slice(0,10)}return H[0],H[1],Object(s.useEffect)((function(){fetch("./Apprentice_TandemFor400_Data.json").then((function(e){return e.json()})).then((function(e){a(e),O(J(e))}))}),[]),Object(s.useEffect)((function(){document.querySelectorAll(".trivia-answer-button").forEach((function(e){e.classList.remove("green"),e.classList.remove("red"),e.classList.remove("user-answer")}))}),[h]),E?Object(c.jsx)(b,{score:S,handleStartGame:function(){O(J(n)),v(0),p(0),g(!1),Q(!1),C(!1)}}):d.length?Object(c.jsxs)("div",{className:"trivia-container",children:[Object(c.jsx)("h1",{className:"trivia-title",children:"Tandem Trivia-Hoot!"}),Object(c.jsx)(j,{questionNumber:h+1,triviaQuestion:d[h],handleUpdate:function(e,t){g(!0),function(e,t){e.classList.add("user-answer"),t.forEach((function(e){e.innerHTML===d[h].correct?e.classList.add("green"):e.classList.add("red")}))}(e.currentTarget,document.querySelectorAll(".trivia-answer-button")),t===d[h].correct&&p(S+1),E||C(!0)},clicked:k}),M?Object(c.jsx)(l,{nextQuestion:function(){h+1<10?(v(h+1),g(!1),C(!1)):Q(!0)},questionNumber:h}):Object(c.jsx)("div",{className:"pick-text shimmer",children:"Pick your answer!"})]}):Object(c.jsx)("div",{})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.13d9429a.chunk.js.map