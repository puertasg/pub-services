"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Beer = exports.Beer = function () {
    function Beer(type, name) {
        _classCallCheck(this, Beer);

        this._type = type;
        this._name = name;
    }

    _createClass(Beer, [{
        key: "type",
        get: function get() {
            return this._type;
        },
        set: function set(type) {
            this._type = type;
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        },
        set: function set(name) {
            this._name = name;
        }
    }]);

    return Beer;
}();
//# sourceMappingURL=Beer.js.map