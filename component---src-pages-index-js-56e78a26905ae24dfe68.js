(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(146),s=a(152),l=a(163),o=a(164),c=a.n(o),d=function(){return n.a.createElement(i.b,{query:"580147862",render:function(e){return n.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:l})},u=a(150);t.default=function(){return n.a.createElement(s.a,null,n.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react"]}),n.a.createElement("div",{class:"ctn-curtain section-footer"},n.a.createElement("div",{class:"section-inner masthead container"},n.a.createElement("section",{class:"profile"},n.a.createElement("div",{class:"kaizo-mario-container"},n.a.createElement("div",{class:"kaizo-mario-image-container"},n.a.createElement(d,{className:"kaizo-mario-image"})),n.a.createElement("div",{class:"kaizo-mario-pulse"})),n.a.createElement("div",{class:"kaizo-mario-name"},"Chung-Min Cheng"),n.a.createElement("div",{class:"tagline"},"Web developer in Tokyo.")),n.a.createElement("section",{class:"social"},n.a.createElement("ul",{class:"social list-inline"},n.a.createElement("li",null,n.a.createElement("a",{class:"links",target:"_blank",href:"https://www.facebook.com/chungmin.cheng.9",rel:"noopener noreferrer"},n.a.createElement("i",{class:"icon-facebook-sign"}))),n.a.createElement("li",null,n.a.createElement("a",{class:"links",target:"_blank",href:"http://github.com/cchungmin",rel:"noopener noreferrer"},n.a.createElement("i",{class:"icon-github-sign"}))),n.a.createElement("li",null,n.a.createElement("a",{class:"links",target:"_blank",href:"http://plus.google.com/101928195101978330342",rel:"noopener noreferrer"},n.a.createElement("i",{class:"icon-google-plus-sign"}))),n.a.createElement("li",null,n.a.createElement("a",{class:"links",target:"_blank",href:"https://jp.linkedin.com/in/chungmincheng",rel:"noopener noreferrer"},n.a.createElement("i",{class:"icon-linkedin-sign"}))),n.a.createElement("li",null,n.a.createElement("a",{class:"links",target:"_blank",href:"https://twitter.com/ChungMinCheng",rel:"noopener noreferrer"},n.a.createElement("i",{class:"icon-twitter-sign"})))),n.a.createElement("div",null,n.a.createElement("a",{target:"_blank",class:"blog-link",href:"https://www.kaizomario.com/blog/",rel:"noopener noreferrer"},"Blog"))),n.a.createElement("section",{class:"experience"},n.a.createElement("div",{class:"experience-left"}),n.a.createElement("div",{class:"experience-right"})))))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),i=a(4),s=a.n(i),l=a(32),o=a.n(l);a.d(t,"a",function(){return o.a});a(147);var c=n.a.createContext({}),d=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},147:function(e,t,a){var r;e.exports=(r=a(149))&&r.default||r},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},149:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),l=a(54),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},150:function(e,t,a){"use strict";var r=a(151),n=a(0),i=a.n(n),s=a(4),l=a.n(s),o=a(154),c=a.n(o),d=function(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,l=e.title,o=r.data.site,d=t||o.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})};d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},152:function(e,t,a){"use strict";var r=a(148),n=a(0),i=a.n(n),s=a(4),l=a.n(s),o=a(146),c=function(e){e.siteTitle;return i.a.createElement("div",{class:"menu"},i.a.createElement("div",{class:"left links"},i.a.createElement("div",{class:"sticky"},i.a.createElement("div",{class:"sticky-image"},i.a.createElement(o.a,{className:"nav-link home-link",to:"/"},"Home"),i.a.createElement(o.a,{className:"nav-link about-link",to:"/about/"},"About"),i.a.createElement(o.a,{className:"nav-link work-link",to:"/work/"},"Work")),i.a.createElement("div",{class:"sticky-social"},i.a.createElement("ul",{class:"list-inline"},i.a.createElement("li",null,i.a.createElement("a",{class:"links",target:"_blank",href:"https://www.facebook.com/chungmin.cheng.9",rel:"noopener noreferrer"},i.a.createElement("i",{class:"icon-facebook-sign"}))),i.a.createElement("li",null,i.a.createElement("a",{class:"links",target:"_blank",href:"http://github.com/cchungmin",rel:"noopener noreferrer"},i.a.createElement("i",{class:"icon-github-sign"}))),i.a.createElement("li",null,i.a.createElement("a",{class:"links",target:"_blank",href:"http://plus.google.com/101928195101978330342",rel:"noopener noreferrer"},i.a.createElement("i",{class:"icon-google-plus-sign"}))),i.a.createElement("li",null,i.a.createElement("a",{class:"links",target:"_blank",href:"https://jp.linkedin.com/in/chungmincheng",rel:"noopener noreferrer"},i.a.createElement("i",{class:"icon-linkedin-sign"}))),i.a.createElement("li",null,i.a.createElement("a",{class:"links",target:"_blank",href:"https://twitter.com/ChungMinCheng",rel:"noopener noreferrer"},i.a.createElement("i",{class:"icon-twitter-sign"}))))))))};c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var d=c,u=(a(153),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))},data:r})});u.propTypes={children:l.a.node.isRequired};t.a=u},163:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwH/2gAMAwEAAhADEAAAAbqNEysySs+brM0KD//EABsQAQEBAAIDAAAAAAAAAAAAAAECAwARBBIT/9oACAEBAAEFAs5IryWhz1ScqeqGuah7fVly0rRa7f/EABYRAAMAAAAAAAAAAAAAAAAAAAAQEv/aAAgBAwEBPwEp/wD/xAAXEQEBAQEAAAAAAAAAAAAAAAABABAS/9oACAECAQE/AbgZz//EABsQAAIDAQEBAAAAAAAAAAAAAAABESExAlFh/9oACAEBAAY/ApW+io06fUN/BOBZhKqSyT//xAAbEAEAAwEBAQEAAAAAAAAAAAABABExIUFxkf/aAAgBAQABPyE7aq7tsTBF+krJ+2NQK38xtMZfIbhhkxGydAiMvZ//2gAMAwEAAgADAAAAEJgnfv/EABgRAQADAQAAAAAAAAAAAAAAAAEAEBFR/9oACAEDAQE/EDkcOZBa/8QAGREBAAIDAAAAAAAAAAAAAAAAAQAQESEx/9oACAECAQE/EFDcAZgO1//EAB0QAQACAgIDAAAAAAAAAAAAAAEAETFBIYFRYZH/2gAIAQEAAT8QAnaoLJZqrSEFRVjlV04gkIDBTVgi74aO4aQBaDwfJmCBcXIq3qCpsigY516gk1L8ldFq6ME//9k=",aspectRatio:.95260663507109,src:"/static/480d7e29940d91062e3bd491836e0bdc/2cc41/cmcheng.jpg",srcSet:"/static/480d7e29940d91062e3bd491836e0bdc/d15e9/cmcheng.jpg 75w,\n/static/480d7e29940d91062e3bd491836e0bdc/3e4d1/cmcheng.jpg 150w,\n/static/480d7e29940d91062e3bd491836e0bdc/2cc41/cmcheng.jpg 300w,\n/static/480d7e29940d91062e3bd491836e0bdc/59f8a/cmcheng.jpg 402w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},164:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(34)),l=r(a(74)),o=r(a(75)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=[];var m=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+"<img "+l+o+a+n+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},u,{onLoad:s,onError:d,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,m=e.fixed,E=e.backgroundColor,b=e.Tag,y=e.itemProp,w="boolean"==typeof E?"lightgray":E,k=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,A),v=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),S={title:t,alt:this.state.isVisible?"":a,style:k,className:f};if(p){var B=p;return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),B.base64&&c.default.createElement(g,(0,o.default)({src:B.base64},S)),B.tracedSVG&&c.default.createElement(g,(0,o.default)({src:B.tracedSVG},S)),w&&c.default.createElement(b,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,B.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),c.default.createElement(g,{alt:a,title:t,sizes:B.sizes,src:B.src,srcSet:B.srcSet,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t},B))}}))}if(m){var j=m,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete R.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},j.base64&&c.default.createElement(g,(0,o.default)({src:j.base64},S)),j.tracedSVG&&c.default.createElement(g,(0,o.default)({src:j.tracedSVG},S)),w&&c.default.createElement(b,{title:t,style:{backgroundColor:w,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement(g,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,srcSet:j.srcSet,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t,width:j.width,height:j.height},j))}}))}return null},t}(c.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:b,sizes:y,fixed:b,fluid:y,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=E;t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-js-56e78a26905ae24dfe68.js.map