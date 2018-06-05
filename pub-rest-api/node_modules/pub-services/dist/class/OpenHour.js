"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OpenHour = exports.OpenHour = function () {
    function OpenHour(start, end) {
        _classCallCheck(this, OpenHour);

        this._start = start;
        this._end = end;
    }

    _createClass(OpenHour, [{
        key: "start",
        get: function get() {
            return this._start;
        },
        set: function set(start) {
            this._start = start;
        }
    }, {
        key: "end",
        get: function get() {
            return this._end;
        },
        set: function set(end) {
            this._end = end;
        }
    }]);

    return OpenHour;
}();
//# sourceMappingURL=OpenHour.js.map