"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebaseFunctions = require("firebase-functions");

var _cors = require("../env/cors");

var _cors2 = _interopRequireDefault(_cors);

var _firebase = require("../env/firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
var requestDispatcher = (0, _firebaseFunctions.runWith)({
  timeoutSeconds: 540,
  memory: "2GB"
}).https.onCall(async function (data, context) {
  console.log(data);
  console.log(context);
  return _firebase.fs.collection("requisitionRequests").doc(data.requisition).get().then(async function (query) {
    var data = query.data();
    return _firebase.fs.collection("datasources").doc(data.datasource).get().then(async function (datasourceSnap) {
      var datasourceData = datasourceSnap.data();
      return _firebase.fs.collection("datasources").doc(data.datasource).collection(data.type).doc(data.itemKey).get().then(function (itemSnapshot) {
        var itemData = itemSnapshot.data();
        return {
          data: data,
          itemConf: itemData[data.env],
          datasourceConf: datasourceData[data.env]
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

exports.default = requestDispatcher;