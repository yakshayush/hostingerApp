const AccessControl = require('accesscontrol');
const accesscontrol = new AccessControl();

exports.roles = (function () {
    accesscontrol.grant("basic")
    .readOwn("profile")
    .updateOwn("profile")
    .deleteOwn("profile");

    ac.grant("supervisor")
    .extend("basic")
    .readAny("profile")

    accesscontrol.grant("admin")
    .extend("basic")
    .extend("supervisor")
    .updateAny("profile")
    .deleteAny("profile")
    
   return ac;
})