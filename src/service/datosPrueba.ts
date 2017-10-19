import { Hotel, Hoteles } from '../schema/hoteles';
import * as fake from 'faker';
import * as fs from 'fs';
export function FisrtLoad() {
    let Hotel_new: Hoteles;
    for (let i = 0; i < 20; i++) {
        Hotel_new = {
            name: fake.company.companyName(),
            starts: fake.random.number({ max: 5, min: 1 }),
            price: fake.random.number({ max: 500, min: 100 }),
            image: fs.readFileSync(`./images/image${fake.random.number({ max: 10, min: 1 })}.jpg`, "Base64"),
            address: fake.address.streetAddress(),
            latitud: fake.random.number({ max: 90.000, min: -90.000, precision: 0.52 }),
            longitud: fake.random.number({ max: 180.000, min: -180.000, precision: 0.52 })
        }
        new Hotel(Hotel_new).save();
    }
}