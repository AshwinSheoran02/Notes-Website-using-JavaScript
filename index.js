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

function showNotes(){
    let allNotes = localStorage.getItem();
    if (allNotes==null){
        Noteslst =[]
    }
    else{
        Noteslst  = JSON.parse(allNotes)
    }
    let htmlquery="";
    Noteslst.forEach(function(element, index) {
        html+= `
        <div class="card" style="padding:5px">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text"> ${element}</p>
        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        
        `

    });
    
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
      } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
      }
}


