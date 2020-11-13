document.getElementById("search").addEventListener("click",showInfromation);
function showInfromation(){
    let id1=document.getElementById("IdSubject").value;
    let number_set1=document.getElementById("number_set").value;
    console.log(id1);
    fetch('http://localhost:3000/subject/'+id1+'/'+number_set1, {
    method: 'GET',
  
})
.then(res => res.json())
.then(data =>{
    console.log(data);
   
    document.getElementById("tablesearch").innerHTML ='';
    document.getElementById("tablesearch").innerHTML ='<input value="'+ data.name_subject + '"> <input value="'+ data.name_teacher + '">  <input value="'+ data.number_set + '">  <input value="'+ data.time + '">';

    
}
);

}