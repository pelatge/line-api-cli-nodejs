"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _liffAddRequest = _interopRequireDefault(require("./apis/liff-add-request"));

var _liffListRequest = _interopRequireDefault(require("./apis/liff-list-request"));

var _liffRemoveRequest = _interopRequireDefault(require("./apis/liff-remove-request"));

var _liffRequest = _interopRequireDefault(require("./apis/liff-request"));

var _oauthIssueTokenRequest = _interopRequireDefault(require("./apis/oauth-issue-token-request"));

var _oauthRequest = _interopRequireDefault(require("./apis/oauth-request"));

var _oauthRevokeTokenRequest = _interopRequireDefault(require("./apis/oauth-revoke-token-request"));

var _richMenuAddRequest = _interopRequireDefault(require("./apis/rich-menu-add-request"));

var _richMenuListRequest = _interopRequireDefault(require("./apis/rich-menu-list-request"));

var _richMenuRemoveRequest = _interopRequireDefault(require("./apis/rich-menu-remove-request"));

var _richMenuRequest = _interopRequireDefault(require("./apis/rich-menu-request"));

var _richMenuSetDefaultRequest = _interopRequireDefault(require("./apis/rich-menu-set-default-request"));

var _richMenuUploadRequest = _interopRequireDefault(require("./apis/rich-menu-upload-request"));

var _thingsListTrialProductsRequest = _interopRequireDefault(require("./apis/things-list-trial-products-request"));

var _thingsRemoveTrialProductRequest = _interopRequireDefault(require("./apis/things-remove-trial-product-request"));

var _thingsRequest = _interopRequireDefault(require("./apis/things-request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const apis = {
  LIFFAddRequest: _liffAddRequest.default,
  LIFFListRequest: _liffListRequest.default,
  LIFFRemoveRequest: _liffRemoveRequest.default,
  LIFFRequest: _liffRequest.default,
  OAuthIssueTokenRequest: _oauthIssueTokenRequest.default,
  OAuthRequest: _oauthRequest.default,
  OAuthRevokeTokenRequest: _oauthRevokeTokenRequest.default,
  RichMenuAddRequest: _richMenuAddRequest.default,
  RichMenuListRequest: _richMenuListRequest.default,
  RichMenuRemoveRequest: _richMenuRemoveRequest.default,
  RichMenuRequest: _richMenuRequest.default,
  RichMenuSetDefaultRequest: _richMenuSetDefaultRequest.default,
  RichMenuUploadRequest: _richMenuUploadRequest.default,
  ThingsListTrialProductsRequest: _thingsListTrialProductsRequest.default,
  ThingsRemoveTrialProductRequest: _thingsRemoveTrialProductRequest.default,
  ThingsRequest: _thingsRequest.default
};
var _default = apis;
exports.default = _default;
//# sourceMappingURL=index.js.map