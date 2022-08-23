console.log("Hi this is the JS file for Magic Notes app");

viewNotes();

let addBtn = document.getElementById("addBtn");
console.log("clicked")
addBtn.addEventListener("click", function(e) {
  let notetxt = document.getElementById("notetxt");
  let notes = localStorage.getItem("notes");
    console.log(notes)

  if (notes == null) {
    Noteslst = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  //console.log(notetxt)
  Noteslst.push(notetxt.value);
  localStorage.setItem("notes", JSON.stringify(Noteslst));
  txt.value = "";

  viewNotes();

});


function viewNotes(){
    let notes = localStorage.getItem("notes");
    console.log(notes);
    if (notes == null) {
      Noteslst = [];
    } else {
      Noteslst = JSON.parse(notes);
    }
    let htmlquery="";
    Noteslst.forEach(function(element, index) {
        console.log("html+");
        htmlquery+= `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>
        
        `

    });
    console.log(Noteslst);

    let notesElm = document.getElementById("notes");
    if (Noteslst.length != 0) {
        notesElm.innerHTML = htmlquery;
      } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
      }
}

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        Noteslst = [];
      } else {
        Noteslst = JSON.parse(notes);
      }
      Noteslst.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(Noteslst));
      viewNotes();
}


