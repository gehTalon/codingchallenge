(this["webpackJsonpcoding-challenge"]=this["webpackJsonpcoding-challenge"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),i=s(3),a=s.n(i),o=(s(14),s(8)),l=s(4),r=s(5),h=s(9),u=s(7),d=s(6),b=s.n(d),j=s(0),p=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).save_events=function(){console.log(c.state.events);var e=JSON.stringify(c.state.events).replace(/\[|\]|"/g,"");console.log(e),(new FormData).append("events",e);var t={events:c.state.events};return fetch("https://codingchallenge.jabezonline.net/laravel/public/api/events/store",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))},c.send_to_server=function(){fetch("https://codingchallenge.jabezonline.net/laravel/public/api/events").then((function(e){return e.json()})).then((function(e){var t,s=Object(o.a)(e);try{for(s.s();!(t=s.n()).done;){var n=t.value;c.state.events.push(n)}}catch(i){s.e(i)}finally{s.f()}c.setState({events:c.state.events})}),(function(e){c.setState({isLoaded:!0,error:e})}))},c.state={dateFrom:null,dateTo:null,events:[],monCheck:!1,tueCheck:!1,wedCheck:!1,thuCheck:!1,friCheck:!1,satCheck:!1,sunCheck:!1,colorSelect:"red"},c}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.send_to_server()}},{key:"mondaysInMonth",value:function(e,t){var s=new Date(this.state.dateFrom),c=new Date(this.state.dateTo);console.log(this.state.dateFrom);for(var n=new Date(s),i=0;n<=c;){var a=n.setDate(n.getDate()+1),o=(n=new Date(a)).getFullYear(),l=n.getMonth()+1,r=n.getDate();switch(n.getDay()){case 0:this.state.sunCheck&&this.state.events.push({id:i,color:this.state.colorSelect,from:o+"-"+("0"+l).slice(-2)+"-"+("0"+r).slice(-2)+"T18:00:00+00:00",to:o+"-"+("0"+l).slice(-2)+"-"+("0"+r).slice(-2)+"T18:00:00+00:00",title:this.state.title});break;case 1:this.state.monCheck&&this.state.events.push({id:i,color:this.state.colorSelect,from:o+"-"+("0"+l).slice(-2)+"-"+("0"+r).slice(-2)+"T18:00:00+00:00",to:o+"-"+("0"+l).slice(-2)+"-"+("0"+r).slice(-2)+"T18:00:00+00:00",title:this.state.title});break;case 2:this.state.tueCheck&&this.state.events.push({id:i,color:this.state.colorSelect,from:o+"-"+("0"+l).slice(-2)+"-"+("0"+r).slice(-2)+"T18:00:00+00:00",to:o+"-"+("0"+l).slice(-2)+"-"+("0"+r).slice(-2)+"T18:00:00+00:00",title:this.state.title});break;case 3:this.state.wedCheck&&this.state.events.push({id:i,color:this.state.colorSelect,from:o+"-"+("0"+l).slice(-2)+"-"+("0"+r).slice(-2)+"T18:00:00+00:00",to:o+"-"+("0"+l).slice(-2)+"-"+("0"+r).slice(-2)+"T18:00:00+00:00",title:this.state.title});break;case 4:this.state.thuCheck&&this.state.events.push({id:i,color:this.state.colorSelect,from:o+"-"+("0"+l).slice(-2)+"-"+("0"+r).slice(-2)+"T18:00:00+00:00",to:o+"-"+("0"+l).slice(-2)+"-"+("0"+r).slice(-2)+"T18:00:00+00:00",title:this.state.title});break;case 5:this.state.friCheck&&this.state.events.push({id:i,color:this.state.colorSelect,from:o+"-"+("0"+l).slice(-2)+"-"+("0"+r).slice(-2)+"T18:00:00+00:00",to:o+"-"+("0"+l).slice(-2)+"-"+("0"+r).slice(-2)+"T18:00:00+00:00",title:this.state.title});break;case 6:this.state.satCheck&&this.state.events.push({id:i,color:this.state.colorSelect,from:o+"-"+("0"+l).slice(-2)+"-"+("0"+r).slice(-2)+"T18:00:00+00:00",to:o+"-"+("0"+l).slice(-2)+"-"+("0"+r).slice(-2)+"T18:00:00+00:00",title:this.state.title})}i++}this.setState({events:this.state.events}),console.log(this.state.events),this.save_events()}},{key:"onDateFrom",value:function(e){this.setState({dateFrom:e.target.value})}},{key:"onDateTo",value:function(e){this.setState({dateTo:e.target.value})}},{key:"onTitle",value:function(e){this.setState({title:e.target.value})}},{key:"daysCheck",value:function(e,t){var s=t.target;switch(e){case 0:this.setState({sunCheck:s.checked});break;case 1:this.setState({monCheck:s.checked});break;case 2:this.setState({tueCheck:s.checked});break;case 3:this.setState({wedCheck:s.checked});break;case 4:this.setState({thuCheck:s.checked});break;case 5:this.setState({friCheck:s.checked});break;case 6:this.setState({satCheck:s.checked})}}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{class:"row",children:[Object(j.jsxs)("div",{class:"col-sm-4",children:[Object(j.jsx)("h2",{children:"Create Events"}),Object(j.jsx)("form",{children:Object(j.jsxs)("div",{class:"input-group mb-3",children:[Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{for:"usr",children:"Event Title:"}),Object(j.jsx)("input",{type:"text",value:this.state.title,onChange:this.onTitle.bind(this),class:"form-control",id:"usr"})]}),Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{for:"usr",children:"From"}),Object(j.jsx)("input",{type:"date",id:"",value:this.state.dateFrom,onChange:this.onDateFrom.bind(this),class:"form-control",name:"dateFrom"})]}),Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{for:"usr",children:"To"}),Object(j.jsx)("input",{type:"date",id:"",value:this.state.dateTo,onChange:this.onDateTo.bind(this),class:"form-control",name:"dateTo"})]}),Object(j.jsxs)("div",{class:"input-group-prepend mb-3",children:[Object(j.jsx)("div",{class:"input-group-text",children:Object(j.jsxs)("span",{class:"input-group-text",children:[Object(j.jsx)("input",{type:"checkbox",value:1,onChange:this.daysCheck.bind(this,1)})," Mon"]})}),Object(j.jsx)("div",{class:"input-group-text",children:Object(j.jsxs)("span",{class:"input-group-text",children:[Object(j.jsx)("input",{type:"checkbox",value:1,onChange:this.daysCheck.bind(this,2)})," Tue"]})}),Object(j.jsx)("div",{class:"input-group-text",children:Object(j.jsxs)("span",{class:"input-group-text",children:[Object(j.jsx)("input",{type:"checkbox",value:1,onChange:this.daysCheck.bind(this,3)})," Wed"]})}),Object(j.jsx)("div",{class:"input-group-text",children:Object(j.jsxs)("span",{class:"input-group-text",children:[Object(j.jsx)("input",{type:"checkbox",value:1,onChange:this.daysCheck.bind(this,4)})," Thu"]})}),Object(j.jsx)("div",{class:"input-group-text",children:Object(j.jsxs)("span",{class:"input-group-text",children:[Object(j.jsx)("input",{type:"checkbox",value:1,onChange:this.daysCheck.bind(this,5)})," Fri"]})}),Object(j.jsx)("div",{class:"input-group-text",children:Object(j.jsxs)("span",{class:"input-group-text",children:[Object(j.jsx)("input",{type:"checkbox",value:1,onChange:this.daysCheck.bind(this,6)})," Sat"]})}),Object(j.jsx)("div",{class:"input-group-text",children:Object(j.jsxs)("span",{class:"input-group-text",children:[Object(j.jsx)("input",{type:"checkbox",value:1,onChange:this.daysCheck.bind(this,0)})," Sun"]})})]}),Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{for:"usr",children:"Select Color"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{class:"btn-group mb-3",children:[Object(j.jsx)("button",{type:"button",class:"btn btn-danger",onClick:function(){e.setState({colorSelect:"red"})},children:"Red"}),Object(j.jsx)("button",{type:"button",class:"btn btn-primary",onClick:function(){e.setState({colorSelect:"blue"})},children:"Blue"}),Object(j.jsx)("button",{type:"button",class:"btn btn-warning",onClick:function(){e.setState({colorSelect:"yellow"})},children:"Yellow"}),Object(j.jsx)("button",{type:"button",class:"btn btn-success",onClick:function(){e.setState({colorSelect:"green"})},children:"Green"})]})]}),Object(j.jsx)("div",{class:"form-group btn-block mt-10",children:Object(j.jsx)("button",{type:"button",class:"btn btn-primary btn-block",onClick:function(){return e.mondaysInMonth(8,2021)},children:"Save"})})]})})]}),Object(j.jsx)("div",{class:"col-sm-8",children:Object(j.jsx)(b.a,{events:this.state.events,headerRender:{mode:"dailyMode"}})})]})}}]),s}(n.a.Component),v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.942e4653.chunk.js.map