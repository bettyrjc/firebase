const usuariosRef = db.collection("usuarios");
let lastDocument: any = null;
let firstDocument: any = null;

## boton de next

const btnNext = document.createElement("button");
btnNext.innerText = "next Page";
document.body.append(btnNext);

btnNext.addEventListener("click", () => {
const query = usuariosRef.orderBy("nombre").startAfter(lastDocument);

query
.limit(2)
.get()
.then((snap) => {
firstDocument = snap.docs[0] || null;
lastDocument = snap.docs[snap.docs.length - 1] || null;
retornaDoc(snap);
});
console.log("click");
});
btnNext.click();

///////////////////////

## boton previo

const btnPrev = document.createElement("button");
btnPrev.innerText = "previous Page";
document.body.append(btnPrev);

btnPrev.addEventListener("click", () => {
const query = usuariosRef.orderBy("nombre").endBefore(firstDocument);

query
.limit(2)
.get()
.then((snap) => {
firstDocument = snap.docs[0] || null;
lastDocument = snap.docs[snap.docs.length - 1] || null;
retornaDoc(snap);
});
console.log("click");
});
