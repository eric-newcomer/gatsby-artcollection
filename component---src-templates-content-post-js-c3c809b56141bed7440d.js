(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return l});var a=n(0),r=n.n(a),i=n(199),o=n(229),u=n.n(o),c=n(207);t.default=function(e){var t=e.data.markdownRemark,n=new u.a({createElement:r.a.createElement,components:{"g-link":i.Link}}).Compiler;return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,t.frontmatter.title),n(t.htmlAst)))};var l="210488134"},199:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(12),o=n.n(i),u=n(198),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(201),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var s=n(39);n.d(t,"parsePath",function(){return s.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},201:function(e,t,n){var a;e.exports=(a=n(203))&&a.default||a},203:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),u=n(41),c=n(1),l=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(u.a,{location:t,pageResources:n})};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},204:function(e){e.exports={data:{site:{siteMetadata:{title:"University Art Collection"}}}}},205:function(e,t,n){},207:function(e,t,n){"use strict";var a=n(204),r=n(0),i=n.n(r),o=n(12),u=n.n(o),c=n(214),l=n.n(c),d=n(199),s=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(d.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},m=(n(215),n(205),function(e){var t=e.children;return e.data,i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});m.propTypes={children:u.a.node.isRequired},t.a=m}}]);
//# sourceMappingURL=component---src-templates-content-post-js-c3c809b56141bed7440d.js.map