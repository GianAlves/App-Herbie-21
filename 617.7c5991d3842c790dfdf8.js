"use strict";(self.webpackChunkherbie21=self.webpackChunkherbie21||[]).push([[617],{6617:(I,g,l)=>{l.r(g),l.d(g,{QuilometragemModule:()=>O});var u=l(8583),r=l(3679),p=l(6738),t=l(7716),s=l(2305),d=l(9743),c=l(8424),f=l(521);function _(i,n){if(1&i&&(t.TgZ(0,"h2",4),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(e.titleView)}}function b(i,n){if(1&i&&(t.TgZ(0,"h2",4),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(e.titleEdit)}}function v(i,n){1&i&&t._UZ(0,"app-vmessage",24)}function Z(i,n){1&i&&t._UZ(0,"app-vmessage",25)}function x(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).liberarEdicao()}),t._UZ(1,"i",27),t._uU(2," Editar"),t.qZA()}}function Q(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).liberarEdicao()}),t._UZ(1,"i",29),t._uU(2," Salvar"),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("disabled",!e.save)}}function C(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",5),t.TgZ(1,"form",6),t.TgZ(2,"div",7),t.TgZ(3,"label",8),t._uU(4,"Data: "),t.qZA(),t._UZ(5,"input",9),t.YNc(6,v,1,0,"app-vmessage",10),t.qZA(),t.TgZ(7,"div",7),t.TgZ(8,"label",8),t._uU(9,"Quilometragem: "),t.qZA(),t._UZ(10,"input",11),t.YNc(11,Z,1,0,"app-vmessage",12),t.qZA(),t.TgZ(12,"div",7),t.TgZ(13,"label",8),t._uU(14,"Observa\xe7\xf5es: "),t.qZA(),t._UZ(15,"input",13),t.qZA(),t.TgZ(16,"div",14),t.TgZ(17,"div",15),t.TgZ(18,"button",16),t.NdJ("click",function(){return t.CHM(e),t.oxw().voltar()}),t._UZ(19,"i",17),t._uU(20," Voltar"),t.qZA(),t.qZA(),t.TgZ(21,"div",18),t.YNc(22,x,3,0,"button",19),t.YNc(23,Q,3,1,"button",20),t.qZA(),t.TgZ(24,"div",21),t.TgZ(25,"button",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().remover()}),t._UZ(26,"i",23),t._uU(27," Excluir"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=t.oxw();let a,o;t.xp6(1),t.Q6J("formGroup",e.editQuilometragemForm),t.xp6(5),t.Q6J("ngIf",null==(a=e.editQuilometragemForm.get("date"))||null==a.errors?null:a.errors.required),t.xp6(5),t.Q6J("ngIf",null==(o=e.editQuilometragemForm.get("km"))||null==o.errors?null:o.errors.required),t.xp6(11),t.Q6J("ngIf",!e.edit),t.xp6(1),t.Q6J("ngIf",e.edit)}}let T=(()=>{class i{constructor(e,a,o,m,F){this.route=e,this.kmService=a,this.router=o,this.fb=m,this.location=F,this.id="",this.titleView="",this.titleEdit="",this.loading=!1,this.edit=!1,this.save=!1,this.id=this.route.snapshot.params.id,this.titleView=this.route.snapshot.data.titleView,this.titleEdit=this.route.snapshot.data.titleEdit}ngOnInit(){this.loading=!0,this.buscaDadosKM(),setTimeout(()=>{this.loading=!1},1e3)}buscaDadosKM(){this.kmService.read_id(this.id).subscribe(e=>{let o=p(e.date).add(1,"d").format("YYYY-MM-DD");this.editQuilometragemForm=this.fb.group({date:[{value:o,disabled:!0},[r.kI.required]],km:[{value:e.km,disabled:!0},[r.kI.required]],observation:[{value:e.observation,disabled:!0}]})},e=>{console.log(e)})}liberarEdicao(){this.edit?this.editar():(this.loading=!0,this.editQuilometragemForm.controls.date.enable(),this.editQuilometragemForm.controls.km.enable(),this.editQuilometragemForm.controls.observation.enable(),this.edit=!0,setTimeout(()=>{this.loading=!1},100),setTimeout(()=>{this.save=!0},2e3))}editar(){this.loading=!0,this.kmService.update(this.id,this.editQuilometragemForm.value).subscribe(e=>{this.loading=!1,this.router.navigate(["home/quilometragem/registros"])},e=>{console.log(e),this.loading=!1})}voltar(){this.location.back()}remover(){this.loading=!0,this.kmService.delete(this.id).subscribe(e=>{this.loading=!1,this.router.navigate(["home/quilometragem/registros"])},e=>{console.log(e),this.loading=!1})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.gz),t.Y36(d.I),t.Y36(s.F0),t.Y36(r.qu),t.Y36(u.Ye))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-view-edit-quilometragem"]],decls:6,vars:4,consts:[["class","titulo",4,"ngIf"],[1,"linha"],["class","pt-3 mb-4 container",4,"ngIf"],[3,"loading"],[1,"titulo"],[1,"pt-3","mb-4","container"],[3,"formGroup"],[1,"form-group"],[1,"label-cad-pneu"],["type","date","formControlName","date",1,"form-control","form-control-lg"],["text","Preencha a data.",4,"ngIf"],["type","number","formControlName","km","placeholder","Digite o valor da quilometragem",1,"form-control","form-control-lg"],["text","Preencha a quilometragem.",4,"ngIf"],["id","observacoes","type","text","formControlName","observation",1,"form-control","form-control-lg"],[1,"row","p-3"],[1,"col-4","text-right"],[1,"btn","btn-secondary",3,"click"],["aria-hidden","false",1,"fa","fa-arrow-circle-left","fa-2x"],[1,"col-4","text-center"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","btn btn-success",3,"disabled","click",4,"ngIf"],[1,"col-4","text-left"],[1,"btn","btn-danger",3,"click"],["aria-hidden","false",1,"fa","fa-trash","fa-2x"],["text","Preencha a data."],["text","Preencha a quilometragem."],[1,"btn","btn-primary",3,"click"],["aria-hidden","false",1,"fa","fa-edit","fa-2x"],[1,"btn","btn-success",3,"disabled","click"],["aria-hidden","false",1,"fa","fa-check-circle","fa-2x"]],template:function(e,a){1&e&&(t.TgZ(0,"header"),t.YNc(1,_,2,1,"h2",0),t.YNc(2,b,2,1,"h2",0),t._UZ(3,"hr",1),t.qZA(),t.YNc(4,C,28,5,"div",2),t._UZ(5,"app-loading",3)),2&e&&(t.xp6(1),t.Q6J("ngIf",!a.edit),t.xp6(1),t.Q6J("ngIf",a.edit),t.xp6(2),t.Q6J("ngIf",!a.loading),t.xp6(1),t.Q6J("loading",a.loading))},directives:[u.O5,c.N,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.wV,f.g],styles:["label.label-cad-pneu[_ngcontent-%COMP%]{color:#fff}[_ngcontent-%COMP%]::placeholder{color:#999;font-size:1rem}input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{font-size:1rem}.titulo[_ngcontent-%COMP%]{font-size:1.2rem;color:#eee;text-align:center;margin-top:1rem}.linha[_ngcontent-%COMP%]{background-color:#eee;width:10px}select[_ngcontent-%COMP%]{width:100%;padding:10px;border-radius:4px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{color:#495057}"]}),i})();var h=l(8239),q=l(9077);function k(i,n){if(1&i&&t._UZ(0,"app-datatable",5),2&i){const e=t.oxw();t.Q6J("columns",e.columns)("data",e.data)}}let w=(()=>{class i{constructor(e,a,o,m){this.route=e,this.kmService=a,this.renderer=o,this.router=m,this.title="",this.loading=!1,this.columns=[],this.data=[],this.title=e.snapshot.data.title}ngOnInit(){var e=this;return(0,h.Z)(function*(){e.loading=!0,e.columns=[{title:"km",data:"km"},{title:"Data",data:"date"},{title:"Observa\xe7\xe3o",data:"observation"},{title:"Visualizar",data:"_id",render:function(a,o,m){return`\n          <button class="btn btn-primary fa fa-eye fa-2x" item-id="${a}" button-type="view"></button>          `}}],yield e.buscaDados(),setTimeout(()=>{e.loading=!1},500)})()}buscaDados(){var e=this;return(0,h.Z)(function*(){e.data=[],e.kmService.read_all().subscribe(a=>{a.forEach(o=>{null==o.km&&(o.km=0);let m={km:o.km,date:e.formataData(o.date),observation:o.observation,_id:o._id};e.data.push(m)})})})()}formataData(e){return p(e).add(1,"d").format("YYYY/MM/DD")}ngAfterViewInit(){this.renderer.listen("document","click",e=>{if(e.target.hasAttribute("item-id"))switch(e.target.getAttribute("button-type")){case"view":this.kmService.read_id(e.target.getAttribute("item-id")).subscribe(a=>{this.router.navigate(["home/quilometragem/visualiza",a._id])})}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.gz),t.Y36(d.I),t.Y36(t.Qsj),t.Y36(s.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-visualiza-quilometragem"]],decls:7,vars:3,consts:[[1,"titulo"],[1,"linha"],[1,"mb-4"],["class","mt-2",3,"columns","data",4,"ngIf"],[3,"loading"],[1,"mt-2",3,"columns","data"]],template:function(e,a){1&e&&(t.TgZ(0,"header"),t.TgZ(1,"h2",0),t._uU(2),t.qZA(),t._UZ(3,"hr",1),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,k,1,2,"app-datatable",3),t.qZA(),t._UZ(6,"app-loading",4)),2&e&&(t.xp6(2),t.Oqu(a.title),t.xp6(3),t.Q6J("ngIf",a.data.length>0),t.xp6(1),t.Q6J("loading",a.loading))},directives:[u.O5,c.N,q.n],styles:[".titulo[_ngcontent-%COMP%]{font-size:1.2rem;color:#eee;text-align:center;margin-top:1rem}"]}),i})();function A(i,n){1&i&&t._UZ(0,"app-vmessage",15)}function M(i,n){1&i&&t._UZ(0,"app-vmessage",16)}function U(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",4),t.TgZ(1,"form",5),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().submit()}),t.TgZ(2,"div",6),t.TgZ(3,"label",7),t._uU(4,"Data: "),t.qZA(),t._UZ(5,"input",8),t.YNc(6,A,1,0,"app-vmessage",9),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"label",7),t._uU(9,"Quilometragem: "),t.qZA(),t._UZ(10,"input",10),t.YNc(11,M,1,0,"app-vmessage",11),t.qZA(),t.TgZ(12,"div",6),t.TgZ(13,"label",7),t._uU(14,"Observa\xe7\xf5es: "),t.qZA(),t._UZ(15,"input",12),t.qZA(),t.TgZ(16,"div",13),t.TgZ(17,"button",14),t._uU(18,"Cadastrar"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=t.oxw();let a,o;t.xp6(1),t.Q6J("formGroup",e.cadastraQuilometragemForm),t.xp6(5),t.Q6J("ngIf",(null==(a=e.cadastraQuilometragemForm.get("date"))||null==a.errors?null:a.errors.required)&&e.validaSubmit),t.xp6(5),t.Q6J("ngIf",(null==(o=e.cadastraQuilometragemForm.get("km"))||null==o.errors?null:o.errors.required)&&e.validaSubmit)}}const y=[{path:"cadastra",component:(()=>{class i{constructor(e,a,o,m){this.fb=e,this.route=a,this.kmService=o,this.router=m,this.title="",this.loading=!1,this.validaSubmit=!1,this.title=a.snapshot.data.title}ngOnInit(){this.loading=!0,this.initForm(),setTimeout(()=>{this.loading=!1},500)}initForm(){this.cadastraQuilometragemForm=this.fb.group({date:["",[r.kI.required]],km:["",[r.kI.required]],observation:[""]})}submit(){this.loading=!0,this.validaSubmit=!0,this.cadastraQuilometragemForm.invalid?this.loading=!1:this.kmService.create(this.cadastraQuilometragemForm.value).subscribe(e=>{this.loading=!1,this.router.navigate(["home/quilometragem/registros"])},e=>{console.log(e),this.loading=!1,this.validaSubmit=!1})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r.qu),t.Y36(s.gz),t.Y36(d.I),t.Y36(s.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-cadastra-quilometragem"]],decls:6,vars:3,consts:[[1,"titulo"],[1,"linha"],["class","pt-3 mb-4 container",4,"ngIf"],[3,"loading"],[1,"pt-3","mb-4","container"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"label-card-km"],["type","date","formControlName","date",1,"form-control","form-control-lg"],["text","Preencha a data.",4,"ngIf"],["type","number","formControlName","km","placeholder","Digite o valor da quilometragem",1,"form-control","form-control-lg"],["text","Preencha a quilometragem.",4,"ngIf"],["id","observacoes","type","text","formControlName","observation",1,"form-control","form-control-lg"],[1,"col","text-center"],["type","submit",1,"btn","btn-primary","mb-3"],["text","Preencha a data."],["text","Preencha a quilometragem."]],template:function(e,a){1&e&&(t.TgZ(0,"header"),t.TgZ(1,"h2",0),t._uU(2),t.qZA(),t._UZ(3,"hr",1),t.qZA(),t.YNc(4,U,19,3,"div",2),t._UZ(5,"app-loading",3)),2&e&&(t.xp6(2),t.Oqu(a.title),t.xp6(2),t.Q6J("ngIf",!a.loading),t.xp6(1),t.Q6J("loading",a.loading))},directives:[u.O5,c.N,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.wV,f.g],styles:["label.label-card-km[_ngcontent-%COMP%]{color:#fff}.btn-primary[_ngcontent-%COMP%]{color:#fff;background-color:#656565;border-color:#656565}[_ngcontent-%COMP%]::placeholder{color:#999;font-size:1rem}input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{font-size:1rem}.titulo[_ngcontent-%COMP%]{font-size:1.2rem;color:#eee;text-align:center;margin-top:1rem}.linha[_ngcontent-%COMP%]{background-color:#eee;width:10px}select[_ngcontent-%COMP%]{width:100%;padding:10px;border-radius:4px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{color:#495057}"]}),i})(),data:{title:"Cadastra Quilometragem"}},{path:"registros",component:w,data:{title:"Registros de Quilometragem"}},{path:"visualiza/:id",component:T,data:{titleView:"Visualiza Quilometragem",titleEdit:"Edita Quilometragem"}}];let Y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[s.Bz.forChild(y)],s.Bz]}),i})();var E=l(1222);let O=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[u.ez,r.u5,r.UX,Y,E.m]]}),i})()}}]);