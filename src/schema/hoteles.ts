import { Schema, Document, Model, model } from 'mongoose';

export interface Location {
    type: string,
    coordinates: Array<number>
}

export interface Hoteles {
    name?: string
    starts?: number
    price?: number
    image?: string
    address?: string
    latitud?: number
    longitud?: number
}

export interface IHotelesModel extends Hoteles, Document {
}

export var UserSchema: Schema = new Schema({
    name: String,
    starts: Number,
    price: Number,
    image: String,
    address: String,
    latitud: Number,
    longitud: Number
}, { collection: "Hoteles", versionKey: false });

export const Hotel: Model<IHotelesModel> = model<IHotelesModel>("Hoteles", UserSchema);