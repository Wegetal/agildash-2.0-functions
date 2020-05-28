"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configuredCors = (0, _cors2.default)({ origin: true });
exports.default = configuredCors;