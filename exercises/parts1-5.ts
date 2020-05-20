import { SpaceLocation } from './SpaceLocation';

// Part 1: Declare (5) Variables With Type

// let spacecraftName: string="Determination";
// let speedMph: number=17500;
let kilometersToMars: number=225000000;
let kilometersToTheMoon: number=384400;
// let milesPerKilometer: number=0.621;

// Part 4: Create a Spacecraft Class

class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
    constructor (name: string, speedMph: number) {
        this.name=name;
        this.speedMph=speedMph;
    }
    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number=kilometersAway*this.milesPerKilometer;
        let hoursToLocation: number=milesAway/this.speedMph;
        let daysToLocation: number=hoursToLocation/24;
        return daysToLocation;
    }
    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
}

// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));