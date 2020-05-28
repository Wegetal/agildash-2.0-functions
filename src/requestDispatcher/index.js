import { runWith } from "firebase-functions";
import configuredCors from "../env/cors";
import { fs } from "../env/firebase";

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
const requestDispatcher = runWith({
  timeoutSeconds: 540,
  memory: "2GB",
}).https.onCall(async (data, context) => {
  console.log(data);
  console.log(context);
  return fs
    .collection("requisitionRequests")
    .doc(data.requisition)
    .get()
    .then(async (query) => {
      const data = query.data();
      return fs
        .collection("datasources")
        .doc(data.datasource)
        .get()
        .then(async (datasourceSnap) => {
          const datasourceData = datasourceSnap.data();
          return fs
            .collection("datasources")
            .doc(data.datasource)
            .collection(data.type)
            .doc(data.itemKey)
            .get()
            .then((itemSnapshot) => {
              const itemData = itemSnapshot.data();
              return {
                data,
                itemConf: itemData[data.env],
                datasourceConf: datasourceData[data.env],
              };
            });
        });
    });
  // .then((item) => {

  // });

  // fs.collection("requisitionRequest")
  //   .doc()
  //   .set({
  //     teste: request.body.data,
  //     teste1: request.body.name,
  //     teste2: request.query.data,
  //     teste3: request.query.name,
  //     teste4: request.data
  //   });
});

export default requestDispatcher;
