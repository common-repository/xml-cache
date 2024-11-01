(()=>{"use strict";const e=window.React,t=window.wp.plugins,c=window.wp.editPost,a=window.wp.components,n=window.wp.i18n,l=window.wp.data;(0,t.registerPlugin)("xml-cache-settings",{render:()=>{const{metaValue:t}=(0,l.useSelect)((e=>({metaValue:e("core/editor").getEditedPostAttribute("meta")._xml_cache_enabled})),["_xml_cache_enabled"]),{editPost:i}=(0,l.useDispatch)("core/editor");return(0,e.createElement)(c.PluginDocumentSettingPanel,{className:"xml-cache-settings",title:"XML Cache",name:"xml-cache"},(0,e.createElement)(a.CheckboxControl,{label:(0,n.__)("Enable","xml-cache"),help:(0,n.__)("Enable XML cache sitemap for this post?","xml-cache"),checked:t,onChange:e=>i({meta:{_xml_cache_enabled:e}})}))}})})();