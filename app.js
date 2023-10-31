    const add = document.querySelector('.button');
    const task = document.querySelector('.tasks');
    const input = document.querySelector('.text');
    const listcontainer = document.querySelector("#list-container")
    const clear = document.querySelector(".clear")
    
   
 currentDate();

clear.addEventListener("click",()=>{
    clearall();
    console.log("clicked");
    showdata();

});
function clearall(){
    localStorage.setItem("data","");
}



    add.addEventListener("click",()=>{
        addit();
    });
    
   

    input.addEventListener("keydown",(event)=>{
    if(event.key === 'Enter'){
        addit();
    }
})
function duetime(){

}
function addit(){
    {
        if(input.value!== ''){
            
            let li = document.createElement("li");
            li.innerHTML = input.value;
            listcontainer.appendChild(li)
           li.addEventListener("click",()=>{
            li.classList.toggle("finished")
           })
            let span = document.createElement("span")
            span.innerHTML = "\u00d7";
             li.appendChild(span) 
             
             let div = document.createElement("div")
                div.className = "date";

             const date = new Date();
             div.innerHTML =  date.toShortFormat()+" " + date.toLocaleTimeString();
             li.append(div);
             span.addEventListener("click", ()=>{
                li.classList.toggle("checked");
             })
             
             
        }
        

        else{
            alert('add a task');
        }
        input.value = '';  
        save();
    }
}
function currentDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() ; 
    var yyyy = today.getFullYear();
    
    if (dd < 10) {
       dd = '0' + dd;
    }
    
    if (mm < 10) {
       mm = '0' + mm;
    } 
        
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("due").setAttribute("min", today);
    last = yyyy+1 + '-' + mm + '-' + dd;
    document.getElementById("due").setAttribute("max", last);
}


    
    Date.prototype.toShortFormat = function() {

        const monthNames = ["Jan", "Feb", "Mar", "Apr",
                            "May", "Jun", "Jul", "Aug",
                            "Sep", "Oct", "Nov", "Dec"];
        
        const day = this.getDate();
        
        const monthIndex = this.getMonth();
        const monthName = monthNames[monthIndex];
        
        const year = this.getFullYear();
        
        return `${day}-${monthName}-${year}`;  
    }
    


    function save(){
        localStorage.setItem("data",listcontainer.innerHTML);

    }

    function showdata(){
        listcontainer.innerHTML = localStorage.getItem("data");

    }
    showdata();

const marker = document.querySelector("listMarker");
