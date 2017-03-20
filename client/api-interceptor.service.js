"use strict";
var APIInterceptorService = (function () {
    function APIInterceptorService(http) {
        this.http = http;
        this.BASE_URL = '/';
    }
    APIInterceptorService.prototype.get = function (url, queryParams) {
        return this.http.get(url);
    };
    return APIInterceptorService;
}());
exports.APIInterceptorService = APIInterceptorService;
//# sourceMappingURL=api-interceptor.service.js.map