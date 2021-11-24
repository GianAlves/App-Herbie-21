"use strict";(self.webpackChunkherbie21=self.webpackChunkherbie21||[]).push([[442],{442:(q,c,s)=>{s.r(c),s.d(c,{PneuModule:()=>M});var u=s(8583),o=s(665),p=s(8239),f=s(6738),v=s(9976),e=s(639),l=s(711),m=s(3483),g=s(8424),h=s(9077);function P(a,r){if(1&a&&e._UZ(0,"app-datatable",5),2&a){const t=e.oxw();e.Q6J("columns",t.columns)("data",t.data)}}let Z=(()=>{class a{constructor(t,n){this.route=t,this.pneuService=n,this.title="",this.loading=!1,this.columns=[],this.data=[],this.icon=v.r8p,this.opcoes=[{name:"Frente Esquerda",value:"fl"},{name:"Frente Direita",value:"fr"},{name:"Traseira Esquerda",value:"bl"},{name:"Traseira Direita",value:"br"}],this.title=t.snapshot.data.title}ngOnInit(){var t=this;return(0,p.Z)(function*(){t.loading=!0,t.columns=[{title:"Posi\xe7\xe3o",data:"position"},{title:"Press\xe3o",data:"pressure"},{title:"Data",data:"date"},{title:"Obs",data:"observation"}],yield t.buscaDados(),setTimeout(()=>{t.loading=!1},500)})()}buscaDados(){var t=this;return(0,p.Z)(function*(){t.data=[],t.pneuService.read_all().subscribe(n=>{n.forEach(i=>{null==i.pressure_old&&(i.pressure_old=0);let d={position:t.validaPosicao(i.position),pressure:i.pressure_old,date:t.formataData(i.date),observation:i.observation};t.data.push(d)})})})()}formataData(t){return f(t).format("DD/MM/YYYY")}validaPosicao(t){return this.opcoes.filter(i=>i.value==t)[0].name}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(l.gz),e.Y36(m.g))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-visualiza-pressao-pneu"]],decls:7,vars:3,consts:[[1,"titulo"],[1,"linha"],[1,"mb-4"],["class","mt-2",3,"columns","data",4,"ngIf"],[3,"loading"],[1,"mt-2",3,"columns","data"]],template:function(t,n){1&t&&(e.TgZ(0,"header"),e.TgZ(1,"h2",0),e._uU(2),e.qZA(),e._UZ(3,"hr",1),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,P,1,2,"app-datatable",3),e.qZA(),e._UZ(6,"app-loading",4)),2&t&&(e.xp6(2),e.Oqu(n.title),e.xp6(3),e.Q6J("ngIf",n.data.length>0),e.xp6(1),e.Q6J("loading",n.loading))},directives:[u.O5,g.N,h.n],styles:[".titulo[_ngcontent-%COMP%]{font-size:1.2rem;color:#eee;text-align:center;margin-top:1rem}"]}),a})();var b=s(5635);function C(a,r){if(1&a&&(e.TgZ(0,"option",17),e._uU(1),e.qZA()),2&a){const t=r.$implicit;e.Q6J("value",t.value),e.xp6(1),e.Oqu(t.name)}}function T(a,r){if(1&a){const t=e.EpF();e.TgZ(0,"div",4),e.TgZ(1,"form",5),e.NdJ("ngSubmit",function(){return e.CHM(t),e.oxw().submit()}),e.TgZ(2,"div",6),e.TgZ(3,"label",7),e._uU(4,"Posi\xe7\xe3o do pneu no carro: "),e.qZA(),e._UZ(5,"br"),e.TgZ(6,"select",8),e.TgZ(7,"option",9),e._uU(8,"Selecione a posi\xe7\xe3o..."),e.qZA(),e.YNc(9,C,2,2,"option",10),e.qZA(),e.qZA(),e.TgZ(10,"div",6),e.TgZ(11,"label",7),e._uU(12,"Press\xe3o antiga do pneu: "),e.qZA(),e._UZ(13,"mat-slider",11),e.qZA(),e.TgZ(14,"div",6),e.TgZ(15,"label",7),e._uU(16,"Press\xe3o nova do pneu: "),e.qZA(),e._UZ(17,"mat-slider",12),e.qZA(),e.TgZ(18,"div",6),e.TgZ(19,"label",7),e._uU(20,"Data de Calibragem: "),e.qZA(),e._UZ(21,"input",13),e.qZA(),e.TgZ(22,"div",6),e.TgZ(23,"label",7),e._uU(24,"Observa\xe7\xf5es: "),e.qZA(),e._UZ(25,"textarea",14),e.qZA(),e.TgZ(26,"div",15),e.TgZ(27,"button",16),e._uU(28,"Cadastrar"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&a){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.cadastraPneuForm),e.xp6(8),e.Q6J("ngForOf",t.opcoes),e.xp6(18),e.Q6J("disabled",t.cadastraPneuForm.invalid)}}const x=[{path:"cadastra",component:(()=>{class a{constructor(t,n,i,d){this.fb=t,this.route=n,this.pneuService=i,this.router=d,this.title="",this.loading=!1,this.opcoes=[{name:"Frente Esquerda",value:"fl"},{name:"Frente Direita",value:"fr"},{name:"Traseira Esquerda",value:"bl"},{name:"Traseira Direita",value:"br"}],this.title=n.snapshot.data.title}ngOnInit(){this.loading=!0,this.initForm(),setTimeout(()=>{this.loading=!1},500)}initForm(){this.cadastraPneuForm=this.fb.group({position:["Selecione a posi\xe7\xe3o...",[o.kI.required]],pressure_old:["",[o.kI.required]],pressure_new:["",[o.kI.required]],date:["",[o.kI.required]],observation:[""]})}submit(){this.loading=!0,this.pneuService.create(this.cadastraPneuForm.value).subscribe(t=>{this.loading=!1,this.router.navigate(["home/pneu/visualiza"])},t=>{console.log(t),this.loading=!1})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(o.qu),e.Y36(l.gz),e.Y36(m.g),e.Y36(l.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-cadastra-pressao-pneu"]],decls:6,vars:3,consts:[[1,"titulo"],[1,"linha"],["class","pt-3 mb-4 container",4,"ngIf"],[3,"loading"],[1,"pt-3","mb-4","container"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"label-cad-pneu"],["formControlName","position",1,"form-select"],["disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","pressure_old","color","primary","thumbLabel","","tickInterval","1","step","1","min","0","max","100","aria-label","units"],["formControlName","pressure_old","color","primary","formControlName","pressure_new","thumbLabel","","tickInterval","1","step","1","min","0","max","100","aria-label","units"],["type","date","formControlName","date",1,"form-control","form-control-lg"],["id","observacoes","rows","3","formControlName","observation",1,"form-control"],[1,"col","text-center"],["type","submit",1,"btn","btn-primary","mb-3",3,"disabled"],[3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"header"),e.TgZ(1,"h2",0),e._uU(2),e.qZA(),e._UZ(3,"hr",1),e.qZA(),e.YNc(4,T,29,3,"div",2),e._UZ(5,"app-loading",3)),2&t&&(e.xp6(2),e.Oqu(n.title),e.xp6(2),e.Q6J("ngIf",!n.loading),e.xp6(1),e.Q6J("loading",n.loading))},directives:[u.O5,g.N,o._Y,o.JL,o.sg,o.EJ,o.JJ,o.u,o.YN,o.Kr,u.sg,b.pH,o.Fj],styles:["label.label-cad-pneu[_ngcontent-%COMP%]{color:#fff}.btn-primary[_ngcontent-%COMP%]{color:#fff;background-color:#656565;border-color:#656565}[_ngcontent-%COMP%]::placeholder{color:#999;font-size:1rem}input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{font-size:1rem}.titulo[_ngcontent-%COMP%]{font-size:1.2rem;color:#eee;text-align:center;margin-top:1rem}.linha[_ngcontent-%COMP%]{background-color:#eee;width:10px}select[_ngcontent-%COMP%]{width:100%;padding:10px;border-radius:4px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{color:#495057}mat-slider[_ngcontent-%COMP%]{width:100%}"]}),a})(),data:{title:"Cadastro de press\xe3o do pneu"}},{path:"visualiza",component:Z,data:{title:"Visualiza press\xe3o do pneu"}}];let A=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[l.Bz.forChild(x)],l.Bz]}),a})();var O=s(5474);let M=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[u.ez,o.u5,o.UX,A,O.m]]}),a})()}}]);