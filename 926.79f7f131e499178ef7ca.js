"use strict";(self.webpackChunkherbie21=self.webpackChunkherbie21||[]).push([[926],{5926:(D,m,l)=>{l.r(m),l.d(m,{PressaoModule:()=>Q});var u=l(8583),r=l(3679),e=l(7716),d=l(2305),c=l(4794),p=l(8424),g=l(4436),_=l(521);function v(a,i){if(1&a&&(e.TgZ(0,"option",20),e._uU(1),e.qZA()),2&a){const t=i.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.name," ")}}function b(a,i){1&a&&e._UZ(0,"app-vmessage",21)}function Z(a,i){1&a&&e._UZ(0,"app-vmessage",22)}function P(a,i){1&a&&e._UZ(0,"app-vmessage",23)}function x(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"div",4),e.TgZ(1,"form",5),e.NdJ("ngSubmit",function(){return e.CHM(t),e.oxw().submit()}),e.TgZ(2,"div",6),e.TgZ(3,"label",7),e._uU(4,"Posi\xe7\xe3o do pneu no carro: "),e.qZA(),e._UZ(5,"br"),e.TgZ(6,"select",8),e.TgZ(7,"option",9),e._uU(8,"Selecione a posi\xe7\xe3o..."),e.qZA(),e.YNc(9,v,2,2,"option",10),e.qZA(),e.qZA(),e.TgZ(10,"div",6),e.TgZ(11,"label",7),e._uU(12,"Press\xe3o antiga do pneu: "),e.qZA(),e._UZ(13,"mat-slider",11),e.YNc(14,b,1,0,"app-vmessage",12),e.qZA(),e.TgZ(15,"div",6),e.TgZ(16,"label",7),e._uU(17,"Press\xe3o nova do pneu: "),e.qZA(),e._UZ(18,"mat-slider",13),e.YNc(19,Z,1,0,"app-vmessage",14),e.qZA(),e.TgZ(20,"div",6),e.TgZ(21,"label",7),e._uU(22,"Data de Calibragem: "),e.qZA(),e._UZ(23,"input",15),e.YNc(24,P,1,0,"app-vmessage",16),e.qZA(),e.TgZ(25,"div",6),e.TgZ(26,"label",7),e._uU(27,"Observa\xe7\xf5es: "),e.qZA(),e._UZ(28,"input",17),e.qZA(),e.TgZ(29,"div",18),e.TgZ(30,"button",19),e._uU(31," Cadastrar "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&a){const t=e.oxw();let o,s,n;e.xp6(1),e.Q6J("formGroup",t.cadastraPressaoForm),e.xp6(8),e.Q6J("ngForOf",t.opcoes),e.xp6(5),e.Q6J("ngIf",null==(o=t.cadastraPressaoForm.get("pressure_old"))||null==o.errors?null:o.errors.required),e.xp6(5),e.Q6J("ngIf",null==(s=t.cadastraPressaoForm.get("pressure_new"))||null==s.errors?null:s.errors.required),e.xp6(5),e.Q6J("ngIf",null==(n=t.cadastraPressaoForm.get("date"))||null==n.errors?null:n.errors.required),e.xp6(6),e.Q6J("disabled",t.cadastraPressaoForm.invalid)}}let C=(()=>{class a{constructor(t,o,s,n){this.fb=t,this.route=o,this.PressaoService=s,this.router=n,this.title="",this.loading=!1,this.opcoes=[{name:"Frente Esquerda",value:"fl"},{name:"Frente Direita",value:"fr"},{name:"Traseira Esquerda",value:"bl"},{name:"Traseira Direita",value:"br"}],this.title=o.snapshot.data.title}ngOnInit(){this.loading=!0,this.initForm(),setTimeout(()=>{this.loading=!1},500)}initForm(){this.cadastraPressaoForm=this.fb.group({position:["Selecione a posi\xe7\xe3o...",[r.kI.required]],pressure_old:["",[r.kI.required]],pressure_new:["",[r.kI.required]],date:["",[r.kI.required]],observation:[""]})}submit(){this.loading=!0,this.PressaoService.create(this.cadastraPressaoForm.value).subscribe(t=>{this.loading=!1,this.router.navigate(["home/pressao/registros"])},t=>{console.log(t),this.loading=!1})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(r.qu),e.Y36(d.gz),e.Y36(c.I),e.Y36(d.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-cadastra-pressao"]],decls:6,vars:3,consts:[[1,"titulo"],[1,"linha"],["class","pt-3 mb-4 container",4,"ngIf"],[3,"loading"],[1,"pt-3","mb-4","container"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"label-cad-pressao"],["formControlName","position",1,"form-select"],["disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","pressure_old","color","primary","thumbLabel","","tickInterval","1","step","1","min","0","max","50","aria-label","units"],["text","Preencha a pres\xe3o antiga.",4,"ngIf"],["color","primary","formControlName","pressure_new","thumbLabel","","tickInterval","1","step","1","min","0","max","50","aria-label","units"],["text","Preencha a pres\xe3o atualizada.",4,"ngIf"],["type","date","formControlName","date",1,"form-control","form-control-lg"],["text","Preencha a data de calibragem.",4,"ngIf"],["id","observacoes","formControlName","observation",1,"form-control"],[1,"col","text-center"],["type","submit",1,"btn","btn-primary","mb-3",3,"disabled"],[3,"value"],["text","Preencha a pres\xe3o antiga."],["text","Preencha a pres\xe3o atualizada."],["text","Preencha a data de calibragem."]],template:function(t,o){1&t&&(e.TgZ(0,"header"),e.TgZ(1,"h2",0),e._uU(2),e.qZA(),e._UZ(3,"hr",1),e.qZA(),e.YNc(4,x,32,6,"div",2),e._UZ(5,"app-loading",3)),2&t&&(e.xp6(2),e.Oqu(o.title),e.xp6(2),e.Q6J("ngIf",!o.loading),e.xp6(1),e.Q6J("loading",o.loading))},directives:[u.O5,p.N,r._Y,r.JL,r.sg,r.EJ,r.JJ,r.u,r.YN,r.Kr,u.sg,g.pH,r.Fj,_.g],styles:["label.label-cad-pressao[_ngcontent-%COMP%]{color:#fff}.btn-primary[_ngcontent-%COMP%]{color:#fff;background-color:#656565;border-color:#656565}[_ngcontent-%COMP%]::placeholder{color:#999;font-size:1rem}input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{font-size:1rem}.titulo[_ngcontent-%COMP%]{font-size:1.2rem;color:#eee;text-align:center;margin-top:1rem}.linha[_ngcontent-%COMP%]{background-color:#eee;width:10px}select[_ngcontent-%COMP%]{width:100%;padding:10px;border-radius:4px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{color:#495057}mat-slider[_ngcontent-%COMP%]{width:100%}"]}),a})();var f=l(6738);function T(a,i){if(1&a&&(e.TgZ(0,"h2",4),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Oqu(t.titleView)}}function E(a,i){if(1&a&&(e.TgZ(0,"h2",4),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Oqu(t.titleEdit)}}function q(a,i){if(1&a&&(e.TgZ(0,"option",29),e._uU(1),e.qZA()),2&a){const t=i.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.name," ")}}function A(a,i){1&a&&e._UZ(0,"app-vmessage",30)}function U(a,i){1&a&&e._UZ(0,"app-vmessage",31)}function F(a,i){1&a&&e._UZ(0,"app-vmessage",32)}function w(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"button",33),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).liberarEdicao()}),e._UZ(1,"i",34),e._uU(2," Editar"),e.qZA()}}function I(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"button",35),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).liberarEdicao()}),e._UZ(1,"i",36),e._uU(2," Salvar"),e.qZA()}if(2&a){const t=e.oxw(2);e.Q6J("disabled",!t.save)}}function Y(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"div",5),e.TgZ(1,"form",6),e.TgZ(2,"div",7),e.TgZ(3,"label",8),e._uU(4,"Posi\xe7\xe3o do pneu no carro: "),e.qZA(),e._UZ(5,"br"),e.TgZ(6,"select",9),e.TgZ(7,"option",10),e._uU(8,"Selecione a posi\xe7\xe3o..."),e.qZA(),e.YNc(9,q,2,2,"option",11),e.qZA(),e.qZA(),e.TgZ(10,"div",7),e.TgZ(11,"label",8),e._uU(12,"Press\xe3o antiga do pneu: "),e.qZA(),e._UZ(13,"mat-slider",12),e.YNc(14,A,1,0,"app-vmessage",13),e.qZA(),e.TgZ(15,"div",7),e.TgZ(16,"label",8),e._uU(17,"Press\xe3o nova do pneu: "),e.qZA(),e._UZ(18,"mat-slider",14),e.YNc(19,U,1,0,"app-vmessage",15),e.qZA(),e.TgZ(20,"div",7),e.TgZ(21,"label",8),e._uU(22,"Data de Calibragem: "),e.qZA(),e._UZ(23,"input",16),e.YNc(24,F,1,0,"app-vmessage",17),e.qZA(),e.TgZ(25,"div",7),e.TgZ(26,"label",8),e._uU(27,"Observa\xe7\xf5es: "),e.qZA(),e._UZ(28,"input",18),e.qZA(),e.TgZ(29,"div",19),e.TgZ(30,"div",20),e.TgZ(31,"button",21),e.NdJ("click",function(){return e.CHM(t),e.oxw().voltar()}),e._UZ(32,"i",22),e._uU(33," Voltar"),e.qZA(),e.qZA(),e.TgZ(34,"div",23),e.YNc(35,w,3,0,"button",24),e.YNc(36,I,3,1,"button",25),e.qZA(),e.TgZ(37,"div",26),e.TgZ(38,"button",27),e.NdJ("click",function(){return e.CHM(t),e.oxw().remover()}),e._UZ(39,"i",28),e._uU(40," Excluir"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&a){const t=e.oxw();let o,s,n;e.xp6(1),e.Q6J("formGroup",t.editPressaoForm),e.xp6(8),e.Q6J("ngForOf",t.opcoes),e.xp6(5),e.Q6J("ngIf",null==(o=t.editPressaoForm.get("pressure_old"))||null==o.errors?null:o.errors.required),e.xp6(5),e.Q6J("ngIf",null==(s=t.editPressaoForm.get("pressure_new"))||null==s.errors?null:s.errors.required),e.xp6(5),e.Q6J("ngIf",null==(n=t.editPressaoForm.get("date"))||null==n.errors?null:n.errors.required),e.xp6(11),e.Q6J("ngIf",!t.edit),e.xp6(1),e.Q6J("ngIf",t.edit)}}let J=(()=>{class a{constructor(t,o,s,n,k){this.route=t,this.PressaoService=o,this.router=s,this.fb=n,this.location=k,this.id="",this.titleView="",this.titleEdit="",this.loading=!1,this.edit=!1,this.save=!1,this.opcoes=[{name:"Frente Esquerda",value:"fl"},{name:"Frente Direita",value:"fr"},{name:"Traseira Esquerda",value:"bl"},{name:"Traseira Direita",value:"br"}],this.id=this.route.snapshot.params.id,this.titleView=this.route.snapshot.data.titleView,this.titleEdit=this.route.snapshot.data.titleEdit}ngOnInit(){this.loading=!0,this.buscaDadosPressao(),setTimeout(()=>{this.loading=!1},1e3)}buscaDadosPressao(){this.PressaoService.read_id(this.id).subscribe(t=>{let o=t,s=f(o.date).add(1,"d").format("YYYY-MM-DD");this.editPressaoForm=this.fb.group({date:[{value:s,disabled:!0},[r.kI.required]],position:[{value:o.position,disabled:!0},[r.kI.required]],pressure_old:[{value:o.pressure_old,disabled:!0},[r.kI.required]],pressure_new:[{value:o.pressure_new,disabled:!0},[r.kI.required]],observation:[{value:o.observation,disabled:!0}]})},t=>{console.log(t)})}liberarEdicao(){this.edit?this.editar():(this.loading=!0,this.editPressaoForm.controls.date.enable(),this.editPressaoForm.controls.position.enable(),this.editPressaoForm.controls.pressure_old.enable(),this.editPressaoForm.controls.pressure_new.enable(),this.editPressaoForm.controls.observation.enable(),this.edit=!0,setTimeout(()=>{this.loading=!1},100),setTimeout(()=>{this.save=!0},2e3))}editar(){this.loading=!0,this.PressaoService.update(this.id,this.editPressaoForm.value).subscribe(t=>{this.loading=!1,this.router.navigate(["home/pressao/registros"])},t=>{console.log(t),this.loading=!1})}voltar(){this.location.back()}remover(){this.loading=!0,this.PressaoService.delete(this.id).subscribe(t=>{this.loading=!1,this.router.navigate(["home/pressao/registros"])},t=>{console.log(t),this.loading=!1})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d.gz),e.Y36(c.I),e.Y36(d.F0),e.Y36(r.qu),e.Y36(u.Ye))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-view-edit-pressao"]],decls:6,vars:4,consts:[["class","titulo",4,"ngIf"],[1,"linha"],["class","pt-3 mb-4 container",4,"ngIf"],[3,"loading"],[1,"titulo"],[1,"pt-3","mb-4","container"],[3,"formGroup"],[1,"form-group"],[1,"label-cad-pressao"],["formControlName","position",1,"form-select"],["disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","pressure_old","color","primary","thumbLabel","","tickInterval","1","step","1","min","0","max","50","aria-label","units"],["text","Preencha a pres\xe3o antiga.",4,"ngIf"],["color","primary","formControlName","pressure_new","thumbLabel","","tickInterval","1","step","1","min","0","max","50","aria-label","units"],["text","Preencha a pres\xe3o atualizada.",4,"ngIf"],["type","date","formControlName","date",1,"form-control","form-control-lg"],["text","Preencha a data de calibragem.",4,"ngIf"],["id","observacoes","formControlName","observation",1,"form-control"],[1,"row","p-3"],[1,"col-4","text-right"],[1,"btn","btn-secondary",3,"click"],["aria-hidden","false",1,"fa","fa-arrow-circle-left","fa-2x"],[1,"col-4","text-center"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","btn btn-success",3,"disabled","click",4,"ngIf"],[1,"col-4","text-left"],[1,"btn","btn-danger",3,"click"],["aria-hidden","false",1,"fa","fa-trash","fa-2x"],[3,"value"],["text","Preencha a pres\xe3o antiga."],["text","Preencha a pres\xe3o atualizada."],["text","Preencha a data de calibragem."],[1,"btn","btn-primary",3,"click"],["aria-hidden","false",1,"fa","fa-edit","fa-2x"],[1,"btn","btn-success",3,"disabled","click"],["aria-hidden","false",1,"fa","fa-check-circle","fa-2x"]],template:function(t,o){1&t&&(e.TgZ(0,"header"),e.YNc(1,T,2,1,"h2",0),e.YNc(2,E,2,1,"h2",0),e._UZ(3,"hr",1),e.qZA(),e.YNc(4,Y,41,7,"div",2),e._UZ(5,"app-loading",3)),2&t&&(e.xp6(1),e.Q6J("ngIf",!o.edit),e.xp6(1),e.Q6J("ngIf",o.edit),e.xp6(2),e.Q6J("ngIf",!o.loading),e.xp6(1),e.Q6J("loading",o.loading))},directives:[u.O5,p.N,r._Y,r.JL,r.sg,r.EJ,r.JJ,r.u,r.YN,r.Kr,u.sg,g.pH,r.Fj,_.g],styles:["label.label-cad-pressao[_ngcontent-%COMP%]{color:#fff}[_ngcontent-%COMP%]::placeholder{color:#999;font-size:1rem}input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{font-size:1rem}.titulo[_ngcontent-%COMP%]{font-size:1.2rem;color:#eee;text-align:center;margin-top:1rem}.linha[_ngcontent-%COMP%]{background-color:#eee;width:10px}select[_ngcontent-%COMP%]{width:100%;padding:10px;border-radius:4px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{color:#495057}"]}),a})();var h=l(8239),M=l(9976),O=l(9077);function y(a,i){if(1&a&&e._UZ(0,"app-datatable",5),2&a){const t=e.oxw();e.Q6J("columns",t.columns)("data",t.data)}}const N=[{path:"cadastra",component:C,data:{title:"Cadastro de press\xe3o do pneu"}},{path:"registros",component:(()=>{class a{constructor(t,o,s,n){this.route=t,this.PressaoService=o,this.renderer=s,this.router=n,this.title="",this.loading=!1,this.columns=[],this.data=[],this.icon=M.r8p,this.opcoes=[{name:"Frente Esquerda",value:"fl"},{name:"Frente Direita",value:"fr"},{name:"Traseira Esquerda",value:"bl"},{name:"Traseira Direita",value:"br"}],this.title=t.snapshot.data.title}ngOnInit(){var t=this;return(0,h.Z)(function*(){t.loading=!0,t.columns=[{title:"Posi\xe7\xe3o",data:"position"},{title:"Press\xe3o",data:"pressure"},{title:"Data",data:"date"},{title:"Visualizar",data:"_id",render:function(o,s,n){return`\n          <button class="btn btn-primary" item-id="${o}" button-type="view"><i class="fa fa-eye fa-2x" aria-hidden="true"></i></button>\n          `}}],yield t.buscaDados(),setTimeout(()=>{t.loading=!1},500)})()}buscaDados(){var t=this;return(0,h.Z)(function*(){t.data=[],t.PressaoService.read_all().subscribe(o=>{o.forEach(s=>{null==s.pressure_old&&(s.pressure_old=0);let n={position:t.validaPosicao(s.position),pressure:s.pressure_old,date:t.formataData(s.date),_id:s._id};t.data.push(n)})})})()}formataData(t){return f(t).format("YYYY/MM/DD")}validaPosicao(t){return this.opcoes.filter(s=>s.value==t)[0].name}ngAfterViewInit(){this.renderer.listen("document","click",t=>{if(t.target.hasAttribute("item-id"))switch(t.target.getAttribute("button-type")){case"view":this.PressaoService.read_id(t.target.getAttribute("item-id")).subscribe(o=>{this.router.navigate(["home/pressao/visualiza",o._id])})}})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d.gz),e.Y36(c.I),e.Y36(e.Qsj),e.Y36(d.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-visualiza-pressao"]],decls:7,vars:3,consts:[[1,"titulo"],[1,"linha"],[1,"mb-4"],["class","mt-2",3,"columns","data",4,"ngIf"],[3,"loading"],[1,"mt-2",3,"columns","data"]],template:function(t,o){1&t&&(e.TgZ(0,"header"),e.TgZ(1,"h2",0),e._uU(2),e.qZA(),e._UZ(3,"hr",1),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,y,1,2,"app-datatable",3),e.qZA(),e._UZ(6,"app-loading",4)),2&t&&(e.xp6(2),e.Oqu(o.title),e.xp6(3),e.Q6J("ngIf",o.data.length>0),e.xp6(1),e.Q6J("loading",o.loading))},directives:[u.O5,p.N,O.n],styles:[".titulo[_ngcontent-%COMP%]{font-size:1.2rem;color:#eee;text-align:center;margin-top:1rem}"]}),a})(),data:{title:"Registros de Press\xe3o do Pneu"}},{path:"visualiza/:id",component:J,data:{titleView:"Visualiza Press\xe3o do Pneu",titleEdit:"Edita Press\xe3o do Pneu"}}];let V=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[d.Bz.forChild(N)],d.Bz]}),a})();var z=l(1222);let Q=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[u.ez,r.u5,r.UX,V,z.m]]}),a})()}}]);