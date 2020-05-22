import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {

    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let cargoSum = 0;

        for (let item of this.cargoItems) {
            cargoSum += item.massKg;
        }
        
        return cargoSum;
    }
    
    currentMassKg(): number {
        let astronautSum = 0;

        for (let astronaut of this.astronauts) {
            astronautSum += astronaut.massKg;
        }

        return this.sumMass(this.cargoItems) + astronautSum;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {

            return true;

        } else {

            return false;

        }
    }
  
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true) {

            this.cargoItems.push(cargo);
            return true; 

        } else {

            return false;

        }
    }
   
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true) {

            this.astronauts.push(astronaut);
            return true;

        } else {

            return false;

        }
    }

}