import {faker} from '@faker-js/faker';
import {Mappable} from "./CustomMap";

export class Company implements Mappable{
    companyName: string;
    catchPhrase: string;
    location: {
        lng: number
        lat: number,
    };
    color: string = "blue";

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return `
        <div>
            Company Name: ${this.companyName}
            Catch Phrase: ${this.catchPhrase} 
        </div>
        `;
    }
}