(window.webpackJsonp=window.webpackJsonp||[]).push([[706,143,158,370],{1173:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(23),r=t(1200),c=t(1274),m=t(1201);var s=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return i.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},i.a.createElement("div",{className:"pagination-nav__item"},t&&i.a.createElement(m.a,{className:"pagination-nav__link",to:t},i.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),i.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&i.a.createElement(m.a,{className:"pagination-nav__link",to:n},i.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},o=t(1237);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,m=Object(l.default)().siteConfig.title,u=a.blogDescription,d=a.blogTitle,v="/"===a.permalink?m:d;return i.a.createElement(r.a,{title:v,description:u,wrapperClassName:"blog-wrapper"},i.a.createElement("div",{className:"container margin-vert--lg"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--2"},i.a.createElement(o.a,{sidebar:n})),i.a.createElement("main",{className:"col col--8"},t.map((function(e){var a=e.content;return i.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},i.a.createElement(a,null))})),i.a.createElement(s,{metadata:a})))))}},1200:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=t(1235),r=t(1202),c=function(){var e=Object(r.useLocation)().pathname;return e.endsWith("/")?i.a.createElement(r.Redirect,{to:e.slice(0,-1)}):e.endsWith(".html")?i.a.createElement(r.Redirect,{to:e.slice(0,-5)}):null};a.a=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,null),i.a.createElement(l.a,e))}},1237:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),i=t.n(n),l=t(1201),r=t(69),c=t.n(r);function m(e){var a=e.sidebar;if(0===a.items.length)return null;var t=null;return i.a.createElement("div",{className:c.a.sidebar},i.a.createElement("h3",{className:c.a.sidebarItemTitle},a.title),i.a.createElement("ul",{className:c.a.sidebarItemList},a.items.map((function(e){var a=e.permalink.split("/")[2],n=t!==a?i.a.createElement("h4",{className:c.a.sidebarItemTitle},a):null;return t=a,i.a.createElement(i.a.Fragment,null,n,i.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},i.a.createElement(l.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title)))}))))}}}]);