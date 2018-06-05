"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pub = exports.Pub = function () {
    function Pub(name, owner, openDays, openHours, beers) {
        _classCallCheck(this, Pub);

        this._name = name;
        this._owner = owner;
        this._openDays = openDays;
        this._openHours = openHours;
        this._beers = beers;
    }

    _createClass(Pub, [{
        key: "name",
        set: function set(name) {
            this._name = name;
        },
        get: function get() {
            return this._name;
        }
    }, {
        key: "owner",
        set: function set(owner) {
            this._owner = owner;
        },
        get: function get() {
            return this._owner;
        }
    }, {
        key: "openDays",
        set: function set(openDays) {
            this._openDays = openDays;
        },
        get: function get() {
            return this._openDays;
        }
    }, {
        key: "openHours",
        set: function set(openHours) {
            this._openHours = openHours;
        },
        get: function get() {
            return this._openHours;
        }
    }, {
        key: "beers",
        set: function set(beers) {
            this._beers = beers;
        }
    }]);

    return Pub;
}();
//# sourceMappingURL=Pub.js.map