console.log("Hi this is the JS file for Magic Notes app");

showNotes();

let addbtn = document.getElementById("Submit")
addbtn.addEventListener("click" , function(e){
    let txt = document.getElementById("txt");
    let notes = localStorage.getItem("notes");
    if (notes==null){
        Noteslst =[]
    }
    else{
        Noteslst  = JSON.parse(notes)
    }
    notes.push(txt.value);
    localStorage.setItem("notes" , JSON.stringify("notes"));
    txt.value="";
    showNotes();

});


function showNotes(){
    let allNotes = localStorage.getItem("allNotes");
    if (allNotes==null){
        Noteslst =[];
    }
    else{
        Noteslst  = JSON.parse(allNotes)
    }
    let htmlquery="";
    Noteslst.forEach(function(element, index) {
        //console.log("html+");
        html+= `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>
        
        `

    });

    let notesElm = document.getElementById("notes");
    if (Noteslst.length != 0) {
        notesElm.innerHTML = html;
      } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
      }
}


