var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Storage = /** @class */ (function () {
    function Storage() {
        this.items = [];
    }
    Storage.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Storage.prototype.getItem = function (index) {
        return this.items[index];
    };
    Storage.prototype.updateItem = function (index, newItem) {
        if (index >= 0 && index < this.items.length) {
            this.items[index] = newItem;
        }
    };
    Storage.prototype.clearStorage = function () {
        this.items = [];
    };
    Storage.prototype.getAllItems = function () {
        return __spreadArray([], this.items, true);
    };
    return Storage;
}());
