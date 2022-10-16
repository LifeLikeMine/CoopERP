(function(){"use strict";var e={1315:function(e,t,n){var o=n(9963),r=n(6252);function a(e,t,n,o,a,s){const i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(i)}var s={name:"App",components:{},data(){return{}}},i=n(3744);const l=(0,i.Z)(s,[["render",a]]);var c=l,u=(n(8877),n(2201));const d=e=>((0,r.dD)("data-v-78b1a50c"),e=e(),(0,r.Cn)(),e),m={class:"text-center"},p={class:"form-signin w-100 m-auto"},g=d((()=>(0,r._)("h2",{class:"mb-5 fw-normal"},"Please sign in",-1))),h={class:"form-floating"},b=d((()=>(0,r._)("label",{for:"loginId"},"User name",-1))),_={class:"form-floating"},v=d((()=>(0,r._)("label",{for:"loginPw"},"Password",-1))),f=d((()=>(0,r._)("div",{class:"checkbox mb-3"},[(0,r._)("label",null,[(0,r._)("input",{type:"checkbox",value:"remember-me"}),(0,r.Uk)(" Remember me ")])],-1))),w=d((()=>(0,r._)("button",{class:"w-100 btn btn-lg btn-primary",type:"submit"},"Sign in",-1))),y={class:"mt-3 mb-3 text-muted"},M=(0,r.Uk)("If you don't have an account, please proceed with the "),P=(0,r.Uk)(" Sign up"),k=(0,r.Uk)(" first!"),U={class:"mt-3 mb-3 text-muted"},S=(0,r.Uk)("You can preview the "),D=(0,r.Uk)("InventoryPage");function C(e,t,n,a,s,i){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("body",m,[(0,r._)("main",p,[(0,r._)("form",{onSubmit:t[2]||(t[2]=(0,o.iM)(((...e)=>i.onSubmit&&i.onSubmit(...e)),["prevent"]))},[g,(0,r._)("div",h,[(0,r.wy)((0,r._)("input",{type:"id",class:"form-control",id:"id",placeholder:"username","onUpdate:modelValue":t[0]||(t[0]=e=>s.id=e)},null,512),[[o.nr,s.id]]),b]),(0,r._)("div",_,[(0,r.wy)((0,r._)("input",{type:"password",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=e=>s.password=e)},null,512),[[o.nr,s.password]]),v]),f,w,(0,r._)("p",y,[M,(0,r.Wm)(l,{to:"/signup"},{default:(0,r.w5)((()=>[P])),_:1}),k]),(0,r._)("div",null,[(0,r._)("p",U,[S,(0,r.Wm)(l,{to:"/home"},{default:(0,r.w5)((()=>[D])),_:1})])])],32)])])}n(7658);var x=n(9669),L=n.n(x),O={name:"loginPage",data(){return{id:null,password:null}},methods:{onSubmit(){const e=this.id,t=this.password;L().post("api/login/signIn",{id:e,password:t},{"Content-Type":"application-json"}).then((e=>{e.data.user?(this.$store.commit("setUser",e.data.user),this.$router.push({name:"home"})):e.data.message&&alert(e.data.message)})).catch((e=>{console.error(e)}))},login(){this.$router.replace("/")}}};const Z=(0,i.Z)(O,[["render",C],["__scopeId","data-v-78b1a50c"]]);var R=Z;const z=e=>((0,r.dD)("data-v-7afdffdc"),e=e(),(0,r.Cn)(),e),N={class:"text-center"},W={class:"container"},I=z((()=>(0,r._)("div",{class:"py-4 text-center"},[(0,r._)("h2",null,"Sign up form")],-1))),V=z((()=>(0,r._)("h4",{class:"mb-5"},"User Information",-1))),j={class:"mb-4"},T=z((()=>(0,r._)("label",{for:"user name",class:"form-label"},"Username",-1))),q={class:"input-group has-validation"},Y=z((()=>(0,r._)("div",{class:"invalid-feedback"}," Your username is required. ",-1))),$={class:"mb-4"},H=z((()=>(0,r._)("label",{for:"password",class:"form-label"},"Password",-1))),G={class:"input-group has-validation"},F=z((()=>(0,r._)("div",{class:"invalid-feedback"}," Your password is required. ",-1))),A={class:"mb-4"},K=z((()=>(0,r._)("label",{for:"cooperative",class:"form-label"},"Cooperative ",-1))),B=z((()=>(0,r._)("div",{class:"invalid-feedback"}," Please enter a your cooperative. ",-1))),E={class:"mb-5"},X=z((()=>(0,r._)("label",{for:"address",class:"form-label"},"Address",-1))),J=z((()=>(0,r._)("div",{class:"invalid-feedback"}," Please enter your address. ",-1))),Q=z((()=>(0,r._)("button",{class:"w-100 btn btn-primary btn-lg",type:"submit"},"Sign Up!",-1))),ee={class:"mt-3 mb-3 text-muted"},te=(0,r.Uk)("Return to "),ne=(0,r.Uk)("Login");function oe(e,t,n,a,s,i){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("body",N,[(0,r._)("div",W,[I,(0,r._)("div",null,[V,(0,r._)("form",{class:"needs-validation",onSubmit:t[4]||(t[4]=(0,o.iM)(((...e)=>i.signSubmit&&i.signSubmit(...e)),["prevent"]))},[(0,r._)("div",j,[T,(0,r._)("div",q,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"username",placeholder:"Username","onUpdate:modelValue":t[0]||(t[0]=e=>s.id=e)},null,512),[[o.nr,s.id]]),Y])]),(0,r._)("div",$,[H,(0,r._)("div",G,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=e=>s.password=e)},null,512),[[o.nr,s.password]]),F])]),(0,r._)("div",A,[K,(0,r.wy)((0,r._)("input",{type:"cooperative",class:"form-control",id:"cooperative",placeholder:"cooperative name","onUpdate:modelValue":t[2]||(t[2]=e=>s.coop=e)},null,512),[[o.nr,s.coop]]),B]),(0,r._)("div",E,[X,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"address",placeholder:"1234 Main St","onUpdate:modelValue":t[3]||(t[3]=e=>s.address=e)},null,512),[[o.nr,s.address]]),J]),Q,(0,r._)("p",ee,[te,(0,r.Wm)(l,{to:"/"},{default:(0,r.w5)((()=>[ne])),_:1})])],32)])])])}var re={name:"signUp",data(){return{id:null,password:null,coop:null,address:null}},methods:{signSubmit(){L().post("/api/login/signUp",{id:this.id,password:this.password,coop:this.coop,address:this.address}).then((()=>{this.$router.push({name:"loginPage"})})).catch((e=>{console.error(e)}))}}};const ae=(0,i.Z)(re,[["render",oe],["__scopeId","data-v-7afdffdc"]]);var se=ae;const ie={class:"top"},le=(0,r._)("div",{class:"maincontent"},[(0,r._)("h4",null,"hello~"),(0,r._)("p",null,"welecome")],-1);function ce(e,t,n,o,a,s){const i=(0,r.up)("TopNavbar");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",ie,[(0,r.Wm)(i)]),le],64)}var ue=n(3907);const de={class:"wrapper hw-100"},me={class:"categoryhome"},pe={class:"hw-100"},ge=(0,r.Uk)("ERP"),he={class:"topnavb"},be={class:"menu hw-100"},_e={class:"menu-item"},ve=(0,r.Uk)("COOP"),fe={class:"menu-item"},we=(0,r.Uk)("Inventory"),ye={class:"menu-item"},Me=(0,r.Uk)("Transaction"),Pe={class:"menu-item"},ke=(0,r.Uk)("Statistics"),Ue={class:"menu-item"},Se=(0,r.Uk)("Monitoring"),De=(0,r._)("div",{class:"line"},null,-1);function Ce(e,t,n,o,a,s){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",de,[(0,r._)("ul",me,[(0,r._)("li",pe,[(0,r.Wm)(i,{class:"cate-home-link hw-100",to:"/home"},{default:(0,r.w5)((()=>[ge])),_:1})])]),(0,r._)("div",he,[(0,r._)("ul",be,[(0,r._)("li",_e,[(0,r.Wm)(i,{onClick:t[0]||(t[0]=t=>e.userSelect("coop-management")),to:"/coop-management",class:"menu-link"},{default:(0,r.w5)((()=>[ve])),_:1})]),(0,r._)("li",fe,[(0,r.Wm)(i,{onClick:t[1]||(t[1]=t=>e.userSelect("inventory-management")),to:"/inventory-management",class:"menu-link"},{default:(0,r.w5)((()=>[we])),_:1})]),(0,r._)("li",ye,[(0,r.Wm)(i,{onClick:t[2]||(t[2]=t=>e.userSelect("transaction-management")),to:"/transaction-management",class:"menu-link"},{default:(0,r.w5)((()=>[Me])),_:1})]),(0,r._)("li",Pe,[(0,r.Wm)(i,{onClick:t[3]||(t[3]=t=>e.userSelect("statistics")),to:"/statistics",class:"menu-link"},{default:(0,r.w5)((()=>[ke])),_:1})]),(0,r._)("li",Ue,[(0,r.Wm)(i,{onClick:t[4]||(t[4]=t=>e.userSelect("monitoring")),to:"/monitoring",class:"menu-link"},{default:(0,r.w5)((()=>[Se])),_:1})])])])]),De],64)}var xe={name:"TopNavbar",data(){return{select:""}},methods:{...(0,ue.OI)(["userSelect"])}};const Le=(0,i.Z)(xe,[["render",Ce]]);var Oe=Le,Ze={name:"mainPage",components:{TopNavbar:Oe},methods:{...(0,ue.nv)(["getMemberList","getProductList"])},created(){this.getMemberList(),this.getProductList()},data(){return{}}};const Re=(0,i.Z)(Ze,[["render",ce]]);var ze=Re;const Ne={class:"top"},We={class:"main"},Ie={class:"sidebar"},Ve={class:"mainPage"};function je(e,t,n,o,a,s){const i=(0,r.up)("TopNavbar"),l=(0,r.up)("side-navbar"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",Ne,[(0,r.Wm)(i)]),(0,r._)("div",We,[(0,r._)("div",Ie,[(0,r.Wm)(l)]),(0,r._)("div",Ve,[(0,r.Wm)(c)])])],64)}var Te=n(3577);const qe={class:"sidemenu-list"},Ye=["onClick"];function $e(e,t,n,o,a,s){return(0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.categoryData[e.category],(t=>((0,r.wg)(),(0,r.iD)("ul",{class:"sidemenu",key:t},[(0,r._)("li",qe,[(0,r._)("div",{class:"sidemenu-item",onClick:n=>e.$router.push(`/${e.category}/${t.replace(/\s/gi,"-").toLowerCase()}`)},(0,Te.zw)(t),9,Ye)])])))),128)}var He={"coop-management":["Member","COOP Management","menu1-3"],"inventory-management":["Product","Inventory Status"],"transaction-management":["Sales","Warehousing","Shipment"],statistics:["menu4-1","menu4-2","menu4-3"],monitoring:["menu1","menu2","menu3"]},Ge={name:"SideNavbar",computed:{...(0,ue.rn)(["category"])},data(){return{categoryData:He}},methods:{}};const Fe=(0,i.Z)(Ge,[["render",$e]]);var Ae=Fe,Ke={components:{SideNavbar:Ae,TopNavbar:Oe}};const Be=(0,i.Z)(Ke,[["render",je]]);var Ee=Be;function Xe(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("p",null,"coop main")}var Je={name:"coopMain"};const Qe=(0,i.Z)(Je,[["render",Xe]]);var et=Qe;function tt(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("p",null," coop management page ")}var nt={name:"coopManagement",components:{},data(){return{}}};const ot=(0,i.Z)(nt,[["render",tt]]);var rt=ot;const at={class:"register"},st={class:"user-table"},it=(0,r._)("caption",null,"List of Members",-1),lt=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{scope:"col"},"#"),(0,r._)("th",{scope:"col"},"Name"),(0,r._)("th",{scope:"col"},"Address"),(0,r._)("th",{scope:"col"},"phone"),(0,r._)("th",{scope:"col"},"Delete")])],-1),ct={scope:"row"},ut=["onClick"];function dt(e,t,n,o,a,s){const i=(0,r.up)("MemebrRegister");return(0,r.wg)(),(0,r.iD)(r.HY,null,[1==e.memberModal?((0,r.wg)(),(0,r.j4)(i,{key:0,onMemberRegister:t[0]||(t[0]=t=>{e.closeMemberModal(),e.getMemberList()})})):(0,r.kq)("",!0),(0,r._)("div",at,[(0,r._)("table",st,[it,lt,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.memberList,((e,t)=>((0,r.wg)(),(0,r.iD)("tr",{class:"memberList",scope:"row",key:e},[(0,r._)("th",ct,(0,Te.zw)(t+1),1),(0,r._)("td",null,(0,Te.zw)(e.Member_name),1),(0,r._)("td",null,(0,Te.zw)(e.Member_address),1),(0,r._)("td",null,(0,Te.zw)(e.Member_phone),1),(0,r._)("td",null,[(0,r._)("button",{type:"button",class:"btn btn-light",onClick:t=>s.deleteMember(e.Member_id)},"X",8,ut)])])))),128))])]),(0,r._)("div",null,[(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=t=>e.openMemberModal())}," New Member ")])])],64)}const mt={class:"modal-bg"},pt={class:"registerModal"},gt={class:"modalContent"},ht=(0,r._)("div",{class:"modalHeader"},[(0,r._)("h1",null,"New Member Register")],-1),bt={class:"modalBody"},_t={class:"input-group mb-4"},vt=(0,r._)("label",{class:"input-group-text",id:"inputGroup-sizing-default"},"Name",-1),ft=(0,r._)("label",{class:"input-group-text",id:"inputGroup-sizing-default",type:"password"},"Password",-1),wt={class:"input-group mb-4"},yt=(0,r._)("label",{class:"input-group-text",id:"inputGroup-sizing-default"},"Phone Number",-1),Mt={class:"input-group mb-4"},Pt=(0,r._)("label",{class:"input-group-text",id:"inputGroup-sizing-default"},"Address",-1),kt={class:"modalFooter"};function Ut(e,t,n,a,s,i){return(0,r.wg)(),(0,r.iD)("div",mt,[(0,r._)("div",pt,[(0,r._)("div",gt,[ht,(0,r._)("form",{id:"registerForm",onSubmit:t[6]||(t[6]=(0,o.iM)((()=>{}),["prevent"]))},[(0,r._)("div",bt,[(0,r._)("div",_t,[vt,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",name:"name",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>s.name=e)},null,512),[[o.nr,s.name]]),ft,(0,r.wy)((0,r._)("input",{type:"password",class:"form-control",name:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>s.password=e)},null,512),[[o.nr,s.password]])]),(0,r._)("div",wt,[yt,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",name:"phone",id:"phone","onUpdate:modelValue":t[2]||(t[2]=e=>s.phone=e)},null,512),[[o.nr,s.phone]])]),(0,r._)("div",Mt,[Pt,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",name:"address",id:"address","onUpdate:modelValue":t[3]||(t[3]=e=>s.address=e)},null,512),[[o.nr,s.address]])])]),(0,r._)("div",kt,[(0,r._)("button",{type:"submit",class:"btn btn-primary",onClick:t[4]||(t[4]=e=>i.registerMember())},"Register"),(0,r._)("button",{class:"btn btn-secondary",onClick:t[5]||(t[5]=t=>e.closeMemberModal())},"Close")])],32)])])])}var St={name:"memberRegister",computed:{...(0,ue.rn)(["memberModal"])},data(){return{errors:[],name:null,id:null,address:null,phone:null,password:null}},methods:{...(0,ue.OI)(["closeMemberModal"]),sendMemberData(){L().post("/api/member/registration",{name:this.name,phone:this.phone,password:this.password,address:this.address}).then((e=>{this.$emit("memberRegister"),console.log(e)})).catch((e=>{console.log(e)}))},registerMember(){if(this.name&&this.address&&this.phone&&this.password)return this.sendMemberData(),!0;this.errors=[],this.name||this.errors.push("Name required\n"),this.address||this.errors.push("address require\n"),this.password||this.errors.push("password require"),alert(this.errors)}}};const Dt=(0,i.Z)(St,[["render",Ut]]);var Ct=Dt,xt={name:"coopRegister",computed:{...(0,ue.rn)(["memberModal","memberList"])},methods:{...(0,ue.OI)(["closeMemberModal","openMemberModal"]),...(0,ue.nv)(["getMemberList"]),deleteMember(e){L()["delete"](`/api/member/delete/${e}`).then((()=>{this.getMemberList()})).catch((e=>{console.error(e)}))}},components:{MemebrRegister:Ct}};const Lt=(0,i.Z)(xt,[["render",dt]]);var Ot=Lt;function Zt(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("p",null,"inventory main")}var Rt={name:"inventoryMain"};const zt=(0,i.Z)(Rt,[["render",Zt]]);var Nt=zt;function Wt(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("div")}var It={name:"inventoryStatus"};const Vt=(0,i.Z)(It,[["render",Wt]]);var jt=Vt;const Tt={class:"register"},qt={class:"user-table"},Yt=(0,r._)("caption",null,"List of Product",-1),$t=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{scope:"col"},"#"),(0,r._)("th",{scope:"col"},"Name"),(0,r._)("th",{scope:"col"},"Category"),(0,r._)("th",{scope:"col"},"Unit"),(0,r._)("th",{scope:"col"},"Price"),(0,r._)("th",{scope:"col"},"Delete")])],-1),Ht={scope:"row"},Gt=["onClick"];function Ft(e,t,n,o,a,s){const i=(0,r.up)("ProductRegister");return(0,r.wg)(),(0,r.iD)(r.HY,null,[1==e.productModal?((0,r.wg)(),(0,r.j4)(i,{key:0,onProductRegister:t[0]||(t[0]=t=>{e.closeProductModal(),e.getProductList()})})):(0,r.kq)("",!0),(0,r._)("div",Tt,[(0,r._)("table",qt,[Yt,$t,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.productList,((e,t)=>((0,r.wg)(),(0,r.iD)("tr",{class:"memberList",scope:"row",key:e},[(0,r._)("th",Ht,(0,Te.zw)(t+1),1),(0,r._)("td",null,(0,Te.zw)(e.Product_name),1),(0,r._)("td",null,(0,Te.zw)(e.Product_category),1),(0,r._)("td",null,(0,Te.zw)(e.Product_unit),1),(0,r._)("td",null,(0,Te.zw)(e.Product_price),1),(0,r._)("td",null,[(0,r._)("button",{type:"button",class:"btn btn-light",onClick:t=>s.deleteProduct(e.Product_id)},"X",8,Gt)])])))),128))])]),(0,r._)("div",null,[(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=t=>e.openProductModal())}," New Product ")])])],64)}const At={class:"modal-bg"},Kt={class:"registerModal"},Bt={class:"modalContent"},Et=(0,r._)("div",{class:"modalHeader"},[(0,r._)("h1",null,"New Product Register")],-1),Xt={class:"modalBody"},Jt={class:"input-group mb-4"},Qt=(0,r._)("label",{class:"input-group-text",id:"inputGroup-sizing-default"},"Name",-1),en={class:"input-group mb-4"},tn=(0,r._)("label",{class:"input-group-text",id:"inputGroup-sizing-default"},"Category",-1),nn={class:"input-group mb-4"},on=(0,r._)("label",{class:"input-group-text",id:"inputGroup-sizing-default"},"Unit",-1),rn={class:"input-group mb-4"},an=(0,r._)("label",{class:"input-group-text",id:"inputGroup-sizing-default"},"Price",-1),sn={class:"modalFooter"};function ln(e,t,n,a,s,i){return(0,r.wg)(),(0,r.iD)("div",At,[(0,r._)("div",Kt,[(0,r._)("div",Bt,[Et,(0,r._)("form",{id:"registerForm",onSubmit:t[6]||(t[6]=(0,o.iM)((()=>{}),["prevent"]))},[(0,r._)("div",Xt,[(0,r._)("div",Jt,[Qt,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",name:"name",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>s.name=e)},null,512),[[o.nr,s.name]])]),(0,r._)("div",en,[tn,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",name:"category",id:"category","onUpdate:modelValue":t[1]||(t[1]=e=>s.category=e)},null,512),[[o.nr,s.category]])]),(0,r._)("div",nn,[on,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",name:"unit",id:"unit","onUpdate:modelValue":t[2]||(t[2]=e=>s.unit=e)},null,512),[[o.nr,s.unit]])]),(0,r._)("div",rn,[an,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",name:"price",id:"price","onUpdate:modelValue":t[3]||(t[3]=e=>s.price=e)},null,512),[[o.nr,s.price]])])]),(0,r._)("div",sn,[(0,r._)("button",{type:"submit",class:"btn btn-primary",onClick:t[4]||(t[4]=e=>i.registerProduct())},"Register"),(0,r._)("button",{class:"btn btn-secondary",onClick:t[5]||(t[5]=t=>e.closeProductModal())},"Close")])],32)])])])}var cn={name:"productRegister",computed:{...(0,ue.rn)(["productModal"])},data(){return{errors:[],name:null,category:null,unit:null,price:null}},methods:{...(0,ue.OI)(["closeProductModal"]),sendProdcutData(){L().post("/api/product/registration",{name:this.name,category:this.category,unit:this.unit,price:this.price}).then((()=>{this.$emit("productRegister")})).catch((e=>{console.error(e)}))},registerProduct(){if(this.name&&this.category&&this.unit&&this.price)return this.sendProdcutData(),!0;this.errors=[],this.name||this.errors.push("Name required"),this.category||this.errors.push("category require"),this.unit||this.errors.push("unit require"),this.price||this.errors.push("price require"),alert(this.errors)}}};const un=(0,i.Z)(cn,[["render",ln]]);var dn=un,mn={name:"inventoryProduct",computed:{...(0,ue.rn)(["productList","productModal"])},methods:{...(0,ue.OI)(["closeProductModal","openProductModal"]),...(0,ue.nv)(["getProductList"]),deleteProduct(e){L()["delete"](`/api/product/delete/${e}`).then((()=>{this.getProductList()})).catch((e=>{console.error(e)}))}},components:{ProductRegister:dn}};const pn=(0,i.Z)(mn,[["render",Ft]]);var gn=pn;function hn(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("p",null,"transaction main")}var bn={};const _n=(0,i.Z)(bn,[["render",hn]]);var vn=_n;function fn(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("p",null," order page ")}var wn={name:"transactionOrder"};const yn=(0,i.Z)(wn,[["render",fn]]);var Mn=yn;function Pn(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("p",null," warehousing ")}var kn={name:"transactionWarehousing"};const Un=(0,i.Z)(kn,[["render",Pn]]);var Sn=Un;function Dn(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("p",null,"shipment")}var Cn={name:"transactionShipment"};const xn=(0,i.Z)(Cn,[["render",Dn]]);var Ln=xn;function On(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("p",null,"statistics main")}var Zn={};const Rn=(0,i.Z)(Zn,[["render",On]]);var zn=Rn;const Nn=[{path:"/login",component:R,name:"login"},{path:"/signup",component:se,name:"singup"},{path:"/home",component:ze,name:"home"},{path:"/coop-management",component:Ee,name:"coop-main",redirect:"/coop-management/main",children:[{path:"main",name:"coopmain",component:et},{path:"coop-management",name:"coopManagement",component:rt},{path:"member",name:"register",component:Ot}]},{path:"/inventory-management",component:Ee,name:"category2",redirect:"/inventory-management/main",children:[{path:"main",name:"inventoryMain",component:Nt},{path:"inventory-status",name:"inventoryStatus",component:jt},{path:"product",name:"inventoryRegister",component:gn}]},{path:"/transaction-management",component:Ee,name:"category3",redirect:"/transaction-management/main",children:[{path:"main",name:"transactionMain",component:vn},{path:"sales",name:"transaction sales",component:Mn},{path:"warehousing",name:"transaction warehousing",component:Sn},{path:"shipment",name:"transaction shipment",component:Ln}]},{path:"/statistics",component:Ee,name:"category4",redirect:"/statistics/main",children:[{path:"main",name:"statisticsMain",component:zn}]},{path:"/monitoring",component:Ee,name:"monitoring",redirect:"/monitoring/main",children:[{path:"main",name:"communicationMain"}]},{path:"/",redirect:"/login"}],Wn=(0,u.p7)({history:(0,u.PO)(),routes:Nn});var In=Wn;const Vn=(0,ue.MT)({state(){return{category:"",memberModal:!1,productModal:!1,productList:{},memberList:{}}},mutations:{userSelect(e,t){e.category=t},openMemberModal(e){e.memberModal=!0},closeMemberModal(e){e.memberModal=!1},openProductModal(e){e.productModal=!0},closeProductModal(e){e.productModal=!1},setProductList(e,t){e.productList=t},setMemberList(e,t){e.memberList=t}},actions:{getProductList(e){L().get("/api/product/data").then((t=>{e.commit("setProductList",t.data)})).catch((e=>{console.error(e)}))},getMemberList(e){L().get("/api/member/data").then((t=>{e.commit("setMemberList",t.data)})).catch((e=>{console.error(e)}))}}});var jn=Vn;(0,o.ri)(c).use(In).use(jn).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,s=o[0],i=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var u=l(n)}for(t&&t(o);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkfront"]=self["webpackChunkfront"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1315)}));o=n.O(o)})();
//# sourceMappingURL=app.ce1c0a98.js.map