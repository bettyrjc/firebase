const usuariosRef = db.collection("usuarios");

## insert into en firebase

db.collection("usuarios")
.add(usuario)
.then((docRef) => {
console.log(docRef);
})
.catch((e) => console.log("error", e));

## actualizar con el id

usuariosRef.doc("p6j8tJaWxJ7IrkrGcR5e").update({
activo: false,
});

## set usuario

actualizar usuario pero de manera destructiva, destruye todos los valores del usuarip
y remplaza los campos
usuariosRef.doc("p6j8tJaWxJ7IrkrGcR5e").set({
activo: false,
casado: true,
id: 123,
});

///////////////////////
// eliminar usuario
usuariosRef.doc("p6j8tJaWxJ7IrkrGcR5e").delete();

select \* from usuarios onsnachop es un callback que cambia cunado la tabla cambie
tambien puede ser:

usuariosRef.onSnapshot(retornaDoc);
usuariosRef.onSnapshot((snap) => retornaDoc(snap));

// cuando sea que no quieres que afecte el firebase, sera con una promesa
usuariosRef.get().then((snap) => retornaDoc(snap));

//////////////////////////////////////////////////
// 08- Indices y clausula where
// select \* from usuarios where activo = true
usuariosRef
.where("activo", "==", true)
.get()
.then((snap) => retornaDoc(snap));

// usuariosRef
.where("salario", ">", 1300)
.get()
.then((snap) => retornaDoc(snap));

## compuesta con dos condiciones

usuariosRef
.where("salario", ">=", 1200)
.where("salario", "<=", 1450)
.get()
.then((snap) => retornaDoc(snap));

## select \* from usuarios where salario >1900 and activo = true

usuariosRef
.where("salario", ">=", 1200)
.where("activo", "==", true)
.get()
.then((snap) => retornaDoc(snap));

# orderby

usuariosRef
// .where("salario", ">", 1000)
.orderBy("nombre", "desc")
.orderBy("salario", "desc")
.get()
.then(retornaDoc);
