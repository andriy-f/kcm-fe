(function(mod) {
    if (typeof exports === "object" && typeof module === "object") return mod(exports, require("jaydata/core")); // CommonJS
})(function(exports, $data) {

    exports.$data = $data;

    var types = {};

    types["Default.Contact"] = $data("$data.Entity").extend("Default.Contact", {
        _id: {
            "type": "Edm.String",
            "key": true,
            "computed": true
        },
        firstName: {
            "type": "Edm.String"
        },
        lastName: {
            "type": "Edm.String"
        },
        email: {
            "type": "Edm.String"
        },
        phoneNumber: {
            "type": "Edm.String"
        }
    });

    exports.type = types["Default.Default"] = $data("$data.EntityContext").extend("Default.Default", {
        Contacts: {
            "type": "$data.EntitySet",
            "elementType": "Default.Contact"
        },
        initDb: {
            "type": "$data.ServiceAction",
            "returnType": null,
            "params": []
        }
    });

    exports.Default = types["Default.Default"];

    var ctxType = exports.type;
    exports.factory = function(config) {
        if (ctxType) {
            var cfg = $data.typeSystem.extend({
                name: "oData",
                oDataServiceHost: "http://localhost:3000/odata",
                withCredentials: false,
                maxDataServiceVersion: "4.0"
            }, config);
            return new ctxType(cfg);
        } else {
            return null;
        }
    };

    if (typeof Reflect !== "undefined" && typeof Reflect.defineMetadata === "function") {
        Reflect.defineMetadata("Org.OData.Core.V1.Computed", "true", types["Default.Contact"].prototype, "_id")
    }

});