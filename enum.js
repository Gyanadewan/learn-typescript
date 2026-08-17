"use strict";
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["moderator"] = "Moderator";
    Roles["Guest"] = "Guest";
})(Roles || (Roles = {}));
const nanda = {
    name: Roles.Admin
};
console.log(nanda.name);
