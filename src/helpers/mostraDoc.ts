import firebase from "firebase/app";

export const retornaDoc = (snapshot: firebase.firestore.QuerySnapshot) => {
  const documentos: any[] = [];
  snapshot.forEach((snapHijo) => {
    // esta no muestra el id
    // users.push(snapHijo.data());
    // aqui se trae toda la data y el id
    documentos.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });

  console.log(documentos);
  return documentos;
};
