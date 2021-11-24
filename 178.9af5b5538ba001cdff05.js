"use strict";(self.webpackChunkherbie21=self.webpackChunkherbie21||[]).push([[178],{8178:(x,d,n)=>{n.r(d),n.d(d,{QuilometragemModule:()=>M});var s=n(8583),i=n(665),c=n(8239),f=n(6738),t=n(639),m=n(711),g=n(9743),p=n(8424),h=n(9077);function v(e,r){if(1&e&&t._UZ(0,"app-datatable",5),2&e){const a=t.oxw();t.Q6J("columns",a.columns)("data",a.data)}}let b=(()=>{class e{constructor(a,o){this.route=a,this.kmService=o,this.title="",this.loading=!1,this.columns=[],this.data=[],this.title=a.snapshot.data.title}ngOnInit(){var a=this;return(0,c.Z)(function*(){a.loading=!0,a.columns=[{title:"km",data:"km"},{title:"Data",data:"date"},{title:"Observa\xe7\xe3o",data:"observation"}],yield a.buscaDados(),setTimeout(()=>{a.loading=!1},500)})()}buscaDados(){var a=this;return(0,c.Z)(function*(){a.data=[],a.kmService.read_all().subscribe(o=>{o.forEach(l=>{null==l.km&&(l.km=0);let u={km:l.km,date:a.formataData(l.date),observation:l.observation};a.data.push(u)})})})()}formataData(a){return f(a).format("DD/MM/YYYY")}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(m.gz),t.Y36(g.I))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-visualiza-quilometragem"]],decls:7,vars:3,consts:[[1,"titulo"],[1,"linha"],[1,"mb-4"],["class","mt-2",3,"columns","data",4,"ngIf"],[3,"loading"],[1,"mt-2",3,"columns","data"]],template:function(a,o){1&a&&(t.TgZ(0,"header"),t.TgZ(1,"h2",0),t._uU(2),t.qZA(),t._UZ(3,"hr",1),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,v,1,2,"app-datatable",3),t.qZA(),t._UZ(6,"app-loading",4)),2&a&&(t.xp6(2),t.Oqu(o.title),t.xp6(3),t.Q6J("ngIf",o.data.length>0),t.xp6(1),t.Q6J("loading",o.loading))},directives:[s.O5,p.N,h.n],styles:[".titulo[_ngcontent-%COMP%]{font-size:1.2rem;color:#eee;text-align:center;margin-top:1rem}"]}),e})();function Z(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"div",4),t.TgZ(1,"form",5),t.NdJ("ngSubmit",function(){return t.CHM(a),t.oxw().submit()}),t.TgZ(2,"div",6),t.TgZ(3,"label",7),t._uU(4,"Data: "),t.qZA(),t._UZ(5,"input",8),t.qZA(),t.TgZ(6,"div",6),t.TgZ(7,"label",7),t._uU(8,"Quilometragem: "),t.qZA(),t._UZ(9,"input",9),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"label",7),t._uU(12,"Observa\xe7\xf5es: "),t.qZA(),t._UZ(13,"textarea",10),t.qZA(),t.TgZ(14,"div",11),t.TgZ(15,"button",12),t._uU(16,"Cadastrar"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const a=t.oxw();t.xp6(1),t.Q6J("formGroup",a.cadastraQuilometragemForm),t.xp6(14),t.Q6J("disabled",a.cadastraQuilometragemForm.invalid)}}const C=[{path:"cadastra",component:(()=>{class e{constructor(a,o,l,u){this.fb=a,this.route=o,this.kmService=l,this.router=u,this.title="",this.loading=!1,this.title=o.snapshot.data.title}ngOnInit(){this.loading=!0,this.initForm(),setTimeout(()=>{this.loading=!1},500)}initForm(){this.cadastraQuilometragemForm=this.fb.group({date:["",[i.kI.required]],km:["",[i.kI.required]],observation:[""]})}submit(){this.loading=!0,this.kmService.create(this.cadastraQuilometragemForm.value).subscribe(a=>{this.loading=!1,this.router.navigate(["home/quilometragem/visualiza"])},a=>{console.log(a),this.loading=!1})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(i.qu),t.Y36(m.gz),t.Y36(g.I),t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cadastra-quilometragem"]],decls:6,vars:3,consts:[[1,"titulo"],[1,"linha"],["class","pt-3 mb-4 container",4,"ngIf"],[3,"loading"],[1,"pt-3","mb-4","container"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"label-cad-pneu"],["type","date","formControlName","date",1,"form-control","form-control-lg"],["type","number","formControlName","km","placeholder","Digite o valor da quilometragem",1,"form-control","form-control-lg"],["id","observacoes","rows","3","formControlName","observation",1,"form-control"],[1,"col","text-center"],["type","submit",1,"btn","btn-primary","mb-3",3,"disabled"]],template:function(a,o){1&a&&(t.TgZ(0,"header"),t.TgZ(1,"h2",0),t._uU(2),t.qZA(),t._UZ(3,"hr",1),t.qZA(),t.YNc(4,Z,17,2,"div",2),t._UZ(5,"app-loading",3)),2&a&&(t.xp6(2),t.Oqu(o.title),t.xp6(2),t.Q6J("ngIf",!o.loading),t.xp6(1),t.Q6J("loading",o.loading))},directives:[s.O5,p.N,i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,i.wV],styles:["label.label-cad-pneu[_ngcontent-%COMP%]{color:#fff}.btn-primary[_ngcontent-%COMP%]{color:#fff;background-color:#656565;border-color:#656565}[_ngcontent-%COMP%]::placeholder{color:#999;font-size:1rem}input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{font-size:1rem}.titulo[_ngcontent-%COMP%]{font-size:1.2rem;color:#eee;text-align:center;margin-top:1rem}.linha[_ngcontent-%COMP%]{background-color:#eee;width:10px}select[_ngcontent-%COMP%]{width:100%;padding:10px;border-radius:4px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{color:#495057}"]}),e})(),data:{title:"Cadastra Quilometragem"}},{path:"visualiza",component:b,data:{title:"Visualiza Quilometragem"}}];let Q=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.Bz.forChild(C)],m.Bz]}),e})();var T=n(5474);let M=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,i.u5,i.UX,Q,T.m]]}),e})()}}]);