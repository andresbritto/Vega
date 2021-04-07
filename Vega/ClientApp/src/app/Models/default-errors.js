"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FORM_ERRORS = exports.defaultErrors = void 0;
var core_1 = require("@angular/core");
exports.defaultErrors = {
    required: function (error) { return "This field is required"; },
    minlength: function (_a) {
        var requiredLength = _a.requiredLength, actualLength = _a.actualLength;
        return "Expect " + requiredLength + " but got " + actualLength;
    }
};
exports.FORM_ERRORS = new core_1.InjectionToken('FORM_ERRORS', {
    providedIn: 'root',
    factory: function () { return exports.defaultErrors; }
});
//# sourceMappingURL=default-errors.js.map