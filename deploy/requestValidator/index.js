"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebaseFunctions = require("firebase-functions");

var _dateFns = require("date-fns");

var _firebase = require("../env/firebase");

var requestValidator = (0, _firebaseFunctions.runWith)({ memory: "2GB", timeoutSeconds: 40 }).firestore.document("requisitionRequests/{requisition}").onCreate(async function (context) {
  // const data = context.data();
  // console.log("Teste");
});

exports.default = requestValidator;