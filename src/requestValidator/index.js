import { runWith } from "firebase-functions";
import { parseISO, toDate } from "date-fns";
import { fs } from "../env/firebase";

const requestValidator = runWith({ memory: "2GB", timeoutSeconds: 40 })
  .firestore.document("requisitionRequests/{requisition}")
  .onCreate(async (context) => {
    // const data = context.data();
    // console.log("Teste");
  });

export default requestValidator;
