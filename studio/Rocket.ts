import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Array = Cargo[item];
    astronauts: Astronaut = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = cargoItems
    }

    sumMass( items: Payload[] ): number {


    }
    /*

Methods:
sumMass( items: Payload[] ): number
Returns the sum of all items using each item's massKg property

currentMassKg(): number
Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems

canAdd(item: Payload): boolean
Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg

addCargo(cargo: Cargo): boolean
Uses this.canAdd() to see if another item can be added.
If true, adds cargo to this.cargoItems and returns true.
If false, returns false.

addAstronaut(astronaut: Astronaut): boolean
Uses this.canAdd() to see if another astronaut can be added.
If true, adds astronaut to this.astronauts and returns true.
If false, returns false
    */
 }