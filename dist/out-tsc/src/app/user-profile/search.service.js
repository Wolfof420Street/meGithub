import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { Repos } from '../repos';
var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.users = new Users("", "", "", "", 0, false, new Date(), 0, 0);
        this.repos = new Repos("", "", "", new Date());
    }
    SearchService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SearchService);
    return SearchService;
}());
export { SearchService };
User(searchName);
{
}
//# sourceMappingURL=search.service.js.map