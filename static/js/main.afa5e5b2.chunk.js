(this["webpackJsonpmy-first-react-app"]=this["webpackJsonpmy-first-react-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(8),s=n.n(i),l=(n(14),n(2)),o=n(3),j=n(5),u=n(4),b=(n(15),n(6)),h=n.p+"static/media/RiotGamesLogo.1422e278.svg",O=n.p+"static/media/ValorantLogo.3b326306.svg",p=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(b.a)(a)),a}return Object(o.a)(n,[{key:"handleClick",value:function(e){e.preventDefault(),console.log("\u041f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u043b\u043e\u0433\u043e.")}},{key:"render",value:function(){return Object(a.jsx)("a",{href:" ",className:"riot-games",onClick:this.handleClick,children:Object(a.jsx)("img",{src:this.props.company.logoUrl,alt:this.props.company.name})})}}]),n}(r.a.Component),d=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(b.a)(a)),a}return Object(o.a)(n,[{key:"handleClick",value:function(e){e.preventDefault(),console.log("\u041f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u043b\u043e\u0433\u043e.")}},{key:"render",value:function(){return Object(a.jsx)("a",{href:" ",className:"valorant",onClick:this.handleClick,children:Object(a.jsx)("img",{src:this.props.game.logoUrl,alt:this.props.game.name})})}}]),n}(r.a.Component),m={company:{name:"RIOT Games",logoUrl:h},game:{name:"Valorant",logoUrl:O}},f=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"logotips",children:[Object(a.jsx)(p,{company:m.company}),Object(a.jsx)("div",{className:"logo-line"}),Object(a.jsx)(d,{game:m.game})]})}}]),n}(r.a.Component),v=n.p+"static/media/droplistIcon.af504d5b.svg",k=[{li:"GAME",droplist:!1},{li:"CHAMPIONS",droplist:!1},{li:"NEWS",droplist:!0},{li:"PATCH NOTES",droplist:!1},{li:"DISCOVER",droplist:!0},{li:"ESPORTS",droplist:!1},{li:"UNIVERSE",droplist:!1},{li:"SHOP",droplist:!1},{li:"SUPPORT",droplist:!1}],x=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(b.a)(a)),a}return Object(o.a)(n,[{key:"handleClick",value:function(e){e.preventDefault(),console.log("\u041f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438.")}},{key:"render",value:function(){return this.props.menuList.droplist?Object(a.jsxs)("a",{href:" ",className:"nav__dropdown",onClick:this.handleClick,children:[this.props.menuList.li,Object(a.jsx)("img",{className:"nav__droplist-icon",src:v,alt:"Droplist Menu"})]}):this.props.menuList.droplist?void 0:Object(a.jsx)("a",{href:" ",onClick:this.handleClick,children:this.props.menuList.li})}}]),n}(r.a.Component),C=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=[];return this.props.menu.forEach((function(t){e.push(Object(a.jsx)(x,{menuList:t},t.li))})),Object(a.jsx)("li",{children:e})}}]),n}(r.a.Component),g=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("nav",{className:"nav",children:Object(a.jsx)("ul",{children:Object(a.jsx)(C,{menu:k})})})}}]),n}(r.a.Component),y={name:"Alex",srcAvarat:n.p+"static/media/UserAvatar.30cb3334.png"},N=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(b.a)(a)),a}return Object(o.a)(n,[{key:"handleClick",value:function(e){e.preventDefault(),console.log("\u041f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438.")}},{key:"render",value:function(){return Object(a.jsxs)("a",{href:" ",className:"user-info",onClick:this.handleClick,children:[Object(a.jsx)("img",{className:"user-avatar",src:this.props.user.srcAvarat,alt:this.props.user.name}),Object(a.jsx)("p",{children:this.props.user.name})]})}}]),n}(r.a.Component),S=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(b.a)(a)),a}return Object(o.a)(n,[{key:"handleClick",value:function(e){e.preventDefault(),console.log("\u041f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438.")}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"user-settings",onClick:this.handleClick,children:Object(a.jsx)("img",{className:"user-settings__droplist",src:this.props.droplistIcon,alt:"Droplist settings"})})}}]),n}(r.a.Component),A=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"user-profile",children:[Object(a.jsx)(N,{user:y}),Object(a.jsx)(S,{droplistIcon:v})]})}}]),n}(r.a.Component),E=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsxs)("div",{className:"header__left-side",children:[Object(a.jsx)(f,{}),Object(a.jsx)(g,{})]}),Object(a.jsx)(A,{})]})}}]),n}(r.a.Component),T=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("section",{className:"section",children:Object(a.jsx)("div",{className:"title-block",children:Object(a.jsx)("h1",{className:"title",children:"AGENTS"})})})}}]),n}(r.a.Component),_=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("main",{className:"main",children:[Object(a.jsx)(T,{}),Object(a.jsx)("div",{className:"bg-image"})]})}}]),n}(r.a.Component),D=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsx)("a",{href:"https://github.com/AlexSimakhin",target:"_blank",rel:"noreferrer",className:"author",children:"Alexandr Simakhin \u2014 React Test Work."}),Object(a.jsx)("a",{href:"https://www.figma.com/community/file/828904636600001452",target:"_blank",rel:"noreferrer",className:"figma-partner",children:"Figma Template."})]})}}]),n}(r.a.Component),I=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(E,{}),Object(a.jsx)(_,{}),Object(a.jsx)(D,{})]})}}]),n}(r.a.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root")),L()}},[[16,1,2]]]);
//# sourceMappingURL=main.afa5e5b2.chunk.js.map