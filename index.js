console.log("Hi this is the JS file for Magic Notes app");

showNotes();

let addbtn = document.getElementById("Submit")
addbtn.addEventListener("click" , function(e){
    let txt = document.getElementById("txt");
    let allNotes = localStorage.getItem("allNotes");
    if (allNotes==null){
        Noteslst =[]
    }
    else{
        Noteslst  = JSON.parse(allNotes)
    }
    allNotes.push(txt.value);
    localStorage.setItem("allnotes" , JSON.stringify("allnotes"));
    txt.value="";
    showNotes();

});