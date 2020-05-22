"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var cargoSum = 0;
        //let astronautSum = 0;
        for (var _i = 0, _a = this.cargoItems; _i < _a.length; _i++) {
            var item = _a[_i];
            cargoSum += item.massKg;
        }
        /*for (let astronaut of this.astronauts) {
            astronautSum += astronaut.massKg;
        }*/
        return cargoSum; // + astronautSum; //Returns the sum of all items using each item's massKg property
    };
    Rocket.prototype.currentMassKg = function () {
        var astronautSum = 0;
        for (var _i = 0, _a = this.astronauts; _i < _a.length; _i++) {
            var astronaut = _a[_i];
            astronautSum += astronaut.massKg;
        }
        return this.sumMass(this.cargoItems) + astronautSum;
    };
    /*
    Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    */
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    /*
    Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    */
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    /*
    Uses this.canAdd() to see if another item can be added.
    If true, adds cargo to this.cargoItems and returns true.
    If false, returns false.
    */
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
