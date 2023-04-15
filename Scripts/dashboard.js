// Write code related to Dashboard page here

var courses=document.querySelector("#course")
let sprint_1=document.querySelector("#sprint-1")
let sprint_2=document.querySelector("#sprint-2")
let sprint_3=document.querySelector("#sprint-3")
let sprint_4=document.querySelector("#sprint-4")
// let assignments=document.querySelector(".assignments")

  

 let FormData=JSON.parse(localStorage.getItem("Formdata"))
 console.log(FormData)

 append(FormData)


/////// filter ////////


courses.addEventListener("change",function(){
    let filterdata=FormData.filter((el)=>{
        return el.course===courses.value
    })

    console.log(filterdata)
    append(filterdata)
})


 function append(data){

    sprint_1.innerHTML=null
    sprint_2.innerHTML=null
    sprint_3.innerHTML=null
    sprint_4.innerHTML=null
    
  
        data?.map((el,index)=>{
        //  if(el.course===courses.value)
        //     {
        let div=document.createElement("div")

        let H1=document.createElement("h3")
        H1.innerText=el.name

        let H2=document.createElement("h3")
        H2.innerText=el.desc

        let H3=document.createElement("h3")
        H3.innerText=`Course Type:- ${el.type}`

        let H4=document.createElement("h3")
        H4.innerText=`Course:- ${el.course}`

        let H5=document.createElement("h3")
        H5.innerText=el.schedule

        let H6=document.createElement("h3")
        H6.innerText=`Sprint:- ${el.sprint}`
        
        // let selecttag=document.createElement("select")
        // selecttag.options.value="sprint1"
        // // selecttag.innerText="sprint1"
        // selecttag.options.value="sprint2"
        // selecttag.options.value="sprint3"
        // selecttag.options.value="sprint4"
        // update.addEventListener("change",function(){
        //     let updateData=FormData.filter((el,i)=>{
                
        //             return el.sprint=update.value
                
        //     })

        // localStorage.setItem("Formdata",JSON.stringify(updateData))


        // })

        let update=document.createElement("input")
        update.addEventListener("change",function(){
            
                update(index,el.value)

        


        })

        let deletebtn=document.createElement("button")
        deletebtn.innerText="Delete"

        deletebtn.style.background="red"
        deletebtn.style.color="white"

        deletebtn.addEventListener("click",function(){

            remove(index)
        })
        

        div.append(H1,H2,H3,H4,H5,H6,update,deletebtn)


        if(el.sprint==="sprint-1")
        {
            sprint_1.append(div)
        }
        else if(el.sprint==="sprint-2")
        {
            sprint_2.append(div)
        }
       else if(el.sprint==="sprint-3")
        {
            sprint_3.append(div)
        }
       else if(el.sprint==="sprint-4")
        {
            sprint_4.append(div)
        }


    // }


    })



}




function remove(index){

    console.log(index)

    let deleteData=FormData.filter((el,i)=>{
        return i!==index
    })

    localStorage.setItem("Formdata",JSON.stringify(deleteData))
    location.reload()
    console.log("delete")
}


function update(index,value){
    console.log(index)
    
    if(i===index)
    {
        let updateData=FormData.filter((el,i)=>{
                
            return el.sprint=value
            
        })
    }
    
    localStorage.setItem("Formdata",JSON.stringify(updateData))

}