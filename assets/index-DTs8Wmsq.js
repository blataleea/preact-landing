(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();var B,p,h_,S,t_,p_,K,X,G,J,L={},m_=[],w_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Y=Array.isArray;function H(e,_){for(var t in _)e[t]=_[t];return e}function v_(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function C_(e,_,t){var c,n,r,s={};for(r in _)r=="key"?c=_[r]:r=="ref"?n=_[r]:s[r]=_[r];if(arguments.length>2&&(s.children=arguments.length>3?B.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return D(e,s,c,n,null)}function D(e,_,t,c,n){var r={type:e,props:_,key:t,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++h_,__i:-1,__u:0};return n==null&&p.vnode!=null&&p.vnode(r),r}function R(e){return e.children}function I(e,_){this.props=e,this.context=_}function T(e,_){if(_==null)return e.__?T(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?T(e):null}function g_(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return g_(e)}}function n_(e){(!e.__d&&(e.__d=!0)&&S.push(e)&&!W.__r++||t_!==p.debounceRendering)&&((t_=p.debounceRendering)||p_)(W)}function W(){var e,_,t,c,n,r,s,l;for(S.sort(K);e=S.shift();)e.__d&&(_=S.length,c=void 0,r=(n=(t=e).__v).__e,s=[],l=[],t.__P&&((c=H({},n)).__v=n.__v+1,p.vnode&&p.vnode(c),Z(t.__P,c,n,t.__n,t.__P.namespaceURI,32&n.__u?[r]:null,s,r??T(n),!!(32&n.__u),l),c.__v=n.__v,c.__.__k[c.__i]=c,N_(s,c,l),c.__e!=r&&g_(c)),S.length>_&&S.sort(K));W.__r=0}function y_(e,_,t,c,n,r,s,l,f,a,u){var o,N,d,g,k,y=c&&c.__k||m_,m=_.length;for(t.__d=f,P_(t,_,y),f=t.__d,o=0;o<m;o++)(d=t.__k[o])!=null&&(N=d.__i===-1?L:y[d.__i]||L,d.__i=o,Z(e,d,N,n,r,s,l,f,a,u),g=d.__e,d.ref&&N.ref!=d.ref&&(N.ref&&__(N.ref,null,d),u.push(d.ref,d.__c||g,d)),k==null&&g!=null&&(k=g),65536&d.__u||N.__k===d.__k?f=b_(d,f,e):typeof d.type=="function"&&d.__d!==void 0?f=d.__d:g&&(f=g.nextSibling),d.__d=void 0,d.__u&=-196609);t.__d=f,t.__e=k}function P_(e,_,t){var c,n,r,s,l,f=_.length,a=t.length,u=a,o=0;for(e.__k=[],c=0;c<f;c++)(n=_[c])!=null&&typeof n!="boolean"&&typeof n!="function"?(s=c+o,(n=e.__k[c]=typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?D(null,n,null,null,null):Y(n)?D(R,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?D(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n).__=e,n.__b=e.__b+1,r=null,(l=n.__i=$_(n,t,s,u))!==-1&&(u--,(r=t[l])&&(r.__u|=131072)),r==null||r.__v===null?(l==-1&&o--,typeof n.type!="function"&&(n.__u|=65536)):l!==s&&(l==s-1?o--:l==s+1?o++:(l>s?o--:o++,n.__u|=65536))):n=e.__k[c]=null;if(u)for(c=0;c<a;c++)(r=t[c])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=T(r)),k_(r,r))}function b_(e,_,t){var c,n;if(typeof e.type=="function"){for(c=e.__k,n=0;c&&n<c.length;n++)c[n]&&(c[n].__=e,_=b_(c[n],_,t));return _}e.__e!=_&&(_&&e.type&&!t.contains(_)&&(_=T(e)),t.insertBefore(e.__e,_||null),_=e.__e);do _=_&&_.nextSibling;while(_!=null&&_.nodeType===8);return _}function $_(e,_,t,c){var n=e.key,r=e.type,s=t-1,l=t+1,f=_[t];if(f===null||f&&n==f.key&&r===f.type&&!(131072&f.__u))return t;if(c>(f!=null&&!(131072&f.__u)?1:0))for(;s>=0||l<_.length;){if(s>=0){if((f=_[s])&&!(131072&f.__u)&&n==f.key&&r===f.type)return s;s--}if(l<_.length){if((f=_[l])&&!(131072&f.__u)&&n==f.key&&r===f.type)return l;l++}}return-1}function o_(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||w_.test(_)?t:t+"px"}function U(e,_,t,c,n){var r;_:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof c=="string"&&(e.style.cssText=c=""),c)for(_ in c)t&&_ in t||o_(e.style,_,"");if(t)for(_ in t)c&&t[_]===c[_]||o_(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")r=_!==(_=_.replace(/(PointerCapture)$|Capture$/i,"$1")),_=_.toLowerCase()in e||_==="onFocusOut"||_==="onFocusIn"?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+r]=t,t?c?t.u=c.u:(t.u=X,e.addEventListener(_,r?J:G,r)):e.removeEventListener(_,r?J:G,r);else{if(n=="http://www.w3.org/2000/svg")_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!="width"&&_!="height"&&_!="href"&&_!="list"&&_!="form"&&_!="tabIndex"&&_!="download"&&_!="rowSpan"&&_!="colSpan"&&_!="role"&&_!="popover"&&_ in e)try{e[_]=t??"";break _}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,_=="popover"&&t==1?"":t))}}function c_(e){return function(_){if(this.l){var t=this.l[_.type+e];if(_.t==null)_.t=X++;else if(_.t<t.u)return;return t(p.event?p.event(_):_)}}}function Z(e,_,t,c,n,r,s,l,f,a){var u,o,N,d,g,k,y,m,v,F,$,A,M,e_,j,z,w=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(f=!!(32&t.__u),r=[l=_.__e=t.__e]),(u=p.__b)&&u(_);_:if(typeof w=="function")try{if(m=_.props,v="prototype"in w&&w.prototype.render,F=(u=w.contextType)&&c[u.__c],$=u?F?F.props.value:u.__:c,t.__c?y=(o=_.__c=t.__c).__=o.__E:(v?_.__c=o=new w(m,$):(_.__c=o=new I(m,$),o.constructor=w,o.render=S_),F&&F.sub(o),o.props=m,o.state||(o.state={}),o.context=$,o.__n=c,N=o.__d=!0,o.__h=[],o._sb=[]),v&&o.__s==null&&(o.__s=o.state),v&&w.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=H({},o.__s)),H(o.__s,w.getDerivedStateFromProps(m,o.__s))),d=o.props,g=o.state,o.__v=_,N)v&&w.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),v&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(v&&w.getDerivedStateFromProps==null&&m!==d&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(m,$),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(m,o.__s,$)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(o.props=m,o.state=o.__s,o.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.some(function(q){q&&(q.__=_)}),A=0;A<o._sb.length;A++)o.__h.push(o._sb[A]);o._sb=[],o.__h.length&&s.push(o);break _}o.componentWillUpdate!=null&&o.componentWillUpdate(m,o.__s,$),v&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(d,g,k)})}if(o.context=$,o.props=m,o.__P=e,o.__e=!1,M=p.__r,e_=0,v){for(o.state=o.__s,o.__d=!1,M&&M(_),u=o.render(o.props,o.state,o.context),j=0;j<o._sb.length;j++)o.__h.push(o._sb[j]);o._sb=[]}else do o.__d=!1,M&&M(_),u=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++e_<25);o.state=o.__s,o.getChildContext!=null&&(c=H(H({},c),o.getChildContext())),v&&!N&&o.getSnapshotBeforeUpdate!=null&&(k=o.getSnapshotBeforeUpdate(d,g)),y_(e,Y(z=u!=null&&u.type===R&&u.key==null?u.props.children:u)?z:[z],_,t,c,n,r,s,l,f,a),o.base=_.__e,_.__u&=-161,o.__h.length&&s.push(o),y&&(o.__E=o.__=null)}catch(q){if(_.__v=null,f||r!=null){for(_.__u|=f?160:128;l&&l.nodeType===8&&l.nextSibling;)l=l.nextSibling;r[r.indexOf(l)]=null,_.__e=l}else _.__e=t.__e,_.__k=t.__k;p.__e(q,_,t)}else r==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=H_(t.__e,_,t,c,n,r,s,f,a);(u=p.diffed)&&u(_)}function N_(e,_,t){_.__d=void 0;for(var c=0;c<t.length;c++)__(t[c],t[++c],t[++c]);p.__c&&p.__c(_,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){p.__e(r,n.__v)}})}function H_(e,_,t,c,n,r,s,l,f){var a,u,o,N,d,g,k,y=t.props,m=_.props,v=_.type;if(v==="svg"?n="http://www.w3.org/2000/svg":v==="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),r!=null){for(a=0;a<r.length;a++)if((d=r[a])&&"setAttribute"in d==!!v&&(v?d.localName===v:d.nodeType===3)){e=d,r[a]=null;break}}if(e==null){if(v===null)return document.createTextNode(m);e=document.createElementNS(n,v,m.is&&m),l&&(p.__m&&p.__m(_,r),l=!1),r=null}if(v===null)y===m||l&&e.data===m||(e.data=m);else{if(r=r&&B.call(e.childNodes),y=t.props||L,!l&&r!=null)for(y={},a=0;a<e.attributes.length;a++)y[(d=e.attributes[a]).name]=d.value;for(a in y)if(d=y[a],a!="children"){if(a=="dangerouslySetInnerHTML")o=d;else if(!(a in m)){if(a=="value"&&"defaultValue"in m||a=="checked"&&"defaultChecked"in m)continue;U(e,a,null,d,n)}}for(a in m)d=m[a],a=="children"?N=d:a=="dangerouslySetInnerHTML"?u=d:a=="value"?g=d:a=="checked"?k=d:l&&typeof d!="function"||y[a]===d||U(e,a,d,y[a],n);if(u)l||o&&(u.__html===o.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),_.__k=[];else if(o&&(e.innerHTML=""),y_(e,Y(N)?N:[N],_,t,c,v==="foreignObject"?"http://www.w3.org/1999/xhtml":n,r,s,r?r[0]:t.__k&&T(t,0),l,f),r!=null)for(a=r.length;a--;)v_(r[a]);l||(a="value",v==="progress"&&g==null?e.removeAttribute("value"):g!==void 0&&(g!==e[a]||v==="progress"&&!g||v==="option"&&g!==y[a])&&U(e,a,g,y[a],n),a="checked",k!==void 0&&k!==e[a]&&U(e,a,k,y[a],n))}return e}function __(e,_,t){try{if(typeof e=="function"){var c=typeof e.__u=="function";c&&e.__u(),c&&_==null||(e.__u=e(_))}else e.current=_}catch(n){p.__e(n,t)}}function k_(e,_,t){var c,n;if(p.unmount&&p.unmount(e),(c=e.ref)&&(c.current&&c.current!==e.__e||__(c,null,_)),(c=e.__c)!=null){if(c.componentWillUnmount)try{c.componentWillUnmount()}catch(r){p.__e(r,_)}c.base=c.__P=null}if(c=e.__k)for(n=0;n<c.length;n++)c[n]&&k_(c[n],_,t||typeof e.type!="function");t||v_(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function S_(e,_,t){return this.constructor(e,t)}function E_(e,_,t){var c,n,r,s;p.__&&p.__(e,_),n=(c=typeof t=="function")?null:_.__k,r=[],s=[],Z(_,e=(!c&&t||_).__k=C_(R,null,[e]),n||L,L,_.namespaceURI,!c&&t?[t]:n?null:_.firstChild?B.call(_.childNodes):null,r,!c&&t?t:n?n.__e:_.firstChild,c,s),N_(r,e,s)}B=m_.slice,p={__e:function(e,_,t,c){for(var n,r,s;_=_.__;)if((n=_.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,c||{}),s=n.__d),s)return n.__E=n}catch(l){e=l}throw e}},h_=0,I.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof e=="function"&&(e=e(H({},t),this.props)),e&&H(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),n_(this))},I.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),n_(this))},I.prototype.render=R,S=[],p_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,K=function(e,_){return e.__v.__b-_.__v.__b},W.__r=0,X=0,G=c_(!1),J=c_(!0);var T_=0;function i(e,_,t,c,n,r){_||(_={});var s,l,f=_;"ref"in _&&(s=_.ref,delete _.ref);var a={type:e,props:f,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--T_,__i:-1,__u:0,__source:n,__self:r};if(typeof e=="function"&&(s=e.defaultProps))for(l in s)f[l]===void 0&&(f[l]=s[l]);return p.vnode&&p.vnode(a),a}const F_="_header_v0mst_1",M_="_header__container_v0mst_8",L_="_header__background_v0mst_18",A_="_header__content_v0mst_27",j_="_header__title_v0mst_31",q_="_header__logo_img_v0mst_36",U_="_header__nav_v0mst_40",D_="_header__nav_list_v0mst_44",I_="_header__nav_item_v0mst_50",O_="_link_v0mst_53",W_="_fixedNav_v0mst_79",B_="_fixedNav__list_v0mst_88",R_="_fixedNav__item_v0mst_95",h={header:F_,header__container:M_,header__background:L_,header__content:A_,header__title:j_,header__logo_img:q_,header__nav:U_,header__nav_list:D_,header__nav_item:I_,link:O_,fixedNav:W_,fixedNav__list:B_,fixedNav__item:R_};var P,V,r_,x_=[],b=p,i_=b.__b,s_=b.__r,a_=b.diffed,l_=b.__c,d_=b.unmount,f_=b.__;function z_(){for(var e;e=x_.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(O),e.__H.__h.forEach(Q),e.__H.__h=[]}catch(_){e.__H.__h=[],b.__e(_,e.__v)}}b.__b=function(e){P=null,i_&&i_(e)},b.__=function(e,_){e&&_.__k&&_.__k.__m&&(e.__m=_.__k.__m),f_&&f_(e,_)},b.__r=function(e){s_&&s_(e);var _=(P=e.__c).__H;_&&(V===P?(_.__h=[],P.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(_.__h.forEach(O),_.__h.forEach(Q),_.__h=[])),V=P},b.diffed=function(e){a_&&a_(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(x_.push(_)!==1&&r_===b.requestAnimationFrame||((r_=b.requestAnimationFrame)||V_)(z_)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),V=P=null},b.__c=function(e,_){_.some(function(t){try{t.__h.forEach(O),t.__h=t.__h.filter(function(c){return!c.__||Q(c)})}catch(c){_.some(function(n){n.__h&&(n.__h=[])}),_=[],b.__e(c,t.__v)}}),l_&&l_(e,_)},b.unmount=function(e){d_&&d_(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(c){try{O(c)}catch(n){_=n}}),t.__H=void 0,_&&b.__e(_,t.__v))};var u_=typeof requestAnimationFrame=="function";function V_(e){var _,t=function(){clearTimeout(c),u_&&cancelAnimationFrame(_),setTimeout(e)},c=setTimeout(t,100);u_&&(_=requestAnimationFrame(t))}function O(e){var _=P,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),P=_}function Q(e){var _=P;e.__c=e.__(),P=_}const K_=()=>{const e=_=>{const t=document.getElementById(_);t&&t.scrollIntoView({behavior:"smooth",block:"start"})};return i("header",{className:h.header,children:[i("container",{className:h.header__container,children:[i("div",{className:h.header__background}),i("div",{className:h.header__content,children:[i("h1",{className:h.header__title,children:["Hard ",i("br",{}),"Facility ",i("br",{}),"Manager"]}),i("div",{className:h.header__logo,children:i("img",{src:"/path-to-your-logo.png",alt:"Логотип компании",className:h.header__logo_img})}),i("nav",{className:h.header__nav,children:i("ul",{className:h.header__nav_list,children:[i("li",{className:h.header__nav_item,children:i("button",{className:h.link,onClick:()=>e("about"),children:"О нас"})}),i("li",{className:h.header__nav_item,children:i("button",{className:h.link,onClick:()=>e("team"),children:"Команда"})}),i("li",{className:h.header__nav_item,children:i("button",{className:h.link,onClick:()=>e("projects"),children:"Проекты"})}),i("li",{className:h.header__nav_item,children:i("button",{className:h.link,onClick:()=>e("contacts"),children:"Контакты"})})]})})]})]}),i("nav",{className:h.fixedNav,children:i("ul",{className:h.fixedNav__list,children:[i("li",{className:h.fixedNav__item,children:i("button",{className:h.link,onClick:()=>e("about"),children:"О нас"})}),i("li",{className:h.fixedNav__item,children:i("button",{className:h.link,onClick:()=>e("team"),children:"Команда"})}),i("li",{className:h.fixedNav__item,children:i("button",{className:h.link,onClick:()=>e("projects"),children:"Проекты"})}),i("li",{className:h.fixedNav__item,children:i("button",{className:h.link,onClick:()=>e("contacts"),children:"Контакты"})})]})})]})},G_="_about_1qkde_1",J_="_about__title_1qkde_11",Q_="_about__intro_1qkde_18",X_="_about__content_1qkde_25",Y_="_about__content__section_1qkde_34",Z_="_about__content__section_title_1qkde_40",_e="_about__content__section_text_1qkde_46",C={about:G_,about__title:J_,about__intro:Q_,about__content:X_,about__content__section:Y_,about__content__section_title:Z_,about__content__section_text:_e},ee=()=>i("div",{id:"about",className:C.about,children:[i("h2",{className:C.about__title,children:"Добро пожаловать в Hard FM"}),i("p",{className:C.about__intro,children:"Hard Facility Management — это управление недвижимостью, инженерной инфраструктурой, техническое обслуживание инженерного оборудования и систем, а также строительно-монтажные работы, подготовка торговых площадей, проектирование. Монтаж и ремонт систем жизнеобеспечения зданий, обеспечение пожарной безопасности, выполнение общестроительных и отделочных работ."}),i("div",{className:C.about__content,children:[i("div",{className:C.about__section,children:[i("h3",{className:C.about__section_title,children:"Наша миссия"}),i("p",{className:C.about__section_text,children:"Избежать незапланированных поломок, простоев и поддерживать высокий уровень обслуживания. Управление услугами по техническому обслуживанию зданий."})]}),i("div",{className:C.about__section,children:[i("h3",{className:C.about__section_title,children:"Мы работаем"}),i("p",{className:C.about__section_text,children:"На объектах социально-культурного назначения, торгово-развлекательных центрах, офисных зданиях и помещениях. Выполняем оценку качества/экспертизу смр, общестроительных работ и инженерных систем, экспертизу и выявление причин возникновения тех или иных последствий, оценка причиненного ущерба, определение стоимости работ и затрат. Проводим рекламационные процедуры."})]})]})]}),te="_contacts_1xct9_1",ne="_contacts__section_1xct9_11",oe="_contacts__title_1xct9_14",ce="_contacts__description_1xct9_22",re="_contacts__container_1xct9_27",ie="_contacts__details_1xct9_32",se="_contacts__info_1xct9_35",ae="_contacts__name_1xct9_43",le="_contacts__phone_1xct9_50",de="_contacts__address_1xct9_50",fe="_img_1xct9_61",x={contacts:te,contacts__section:ne,contacts__title:oe,contacts__description:ce,contacts__container:re,contacts__details:ie,contacts__info:se,contacts__name:ae,contacts__phone:le,contacts__address:de,img:fe},ue=()=>i("div",{id:"contacts",className:x.contacts,children:i("section",{className:x.section,children:[i("h2",{className:x.contacts__title,children:"Контакты"}),i("p",{className:x.contacts__description,children:"Мы всегда рады ответить на ваши вопросы."}),i("div",{className:x.contacts__container,children:[i("div",{className:x.contacts__details,children:i("p",{className:x.contacts__info,children:[i("span",{className:x.contacts__name,children:"Можаев Виктор"}),"Должность: Генеральный директор",i("a",{href:"tel:+79252752555",className:x.contacts__phone,children:"Телефон: +7 (925) 275-2555"}),i("a",{href:"https://yandex.ru/maps/?text=г. Москва, ул. Душинская, д. 7, стр. 3, офис 11",target:"_blank",rel:"noopener noreferrer",className:x.contacts__address,children:"Адрес: г. Москва, ул. Душинская, д. 7, стр. 3, офис 11"})]})}),i("img",{src:"src\\assets\\images\\map.jpg",loading:"lazy",className:x.img})]})]})}),he="_footer_wsj8c_1",pe="_footer__container_wsj8c_9",me="_footer__logo_wsj8c_18",ve="_footer__company_name_wsj8c_25",ge="_footer__copyrighting_wsj8c_29",ye="_footer__contacts_wsj8c_34",E={footer:he,footer__container:pe,footer__logo:me,"footer__logo-img":"_footer__logo-img_wsj8c_22",footer__company_name:ve,footer__copyrighting:ge,footer__contacts:ye},be=()=>i("footer",{className:E.footer,children:i("div",{className:E.footer__container,children:[i("div",{className:E.footer__logo,children:i("span",{className:E.footer__company_name,children:"ООО «ХАРД ФМ»"})}),i("div",{className:E.footer__copyrighting,children:"ООО ХАРД ФМ. ВСЕ ПРАВА ЗАЩИЩЕНЫ"}),i("div",{className:E.footer__contacts,children:[i("p",{children:"Email: info@company.com"}),i("p",{children:"Tel: +7 (925)-275-2555"})]})]})}),Ne=()=>i("div",{id:"root",children:[i(K_,{}),i(ee,{id:"about"}),i(ue,{id:"contacts"}),i(be,{})]});E_(i(Ne,{}),document.getElementById("app"));
