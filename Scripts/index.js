// Write code related to Home page here


function makeobj(n,d,t,c,sp,sh){
   this.name=n,
   this.desc=d,
   this.type=t,
   this.course=c,
   this.sprint=sp,

   this.schedule=sh

}



// form.addEventListener("submit",function(event){
   function alldata(event){
      
      event.preventDefault();
      let form=document.querySelector("form")


   // let name=document.querySelector("#name").value
   // let desc=document.querySelector("#desc").value
   // let type=document.querySelector("#type").value
   // let course=document.querySelector("#course").value
   // let sprint=document.querySelector("#sprint").value
   // let schedule=document.querySelector("#schedule").value

   let name=form.name.value;
   let desc=form.desc.value;
   let type=form.type.value;
   let course=form.course.value;
   let sprint=form.sprint.value;
   let schedule=form.schedule.value;

   // let dataobj={
   //  name,
   //  desc,
   //  type,
   //  course,
   //  sprint,
   //  schedule
   // }

   let datas=new makeobj(name,desc,type,course,sprint,schedule)


//    console.log(dataobj)

let dataarr=JSON.parse(localStorage.getItem("Formdata"))||[]

dataarr.push(datas)

localStorage.setItem("Formdata",JSON.stringify(dataarr))

 console.log(dataarr)

}