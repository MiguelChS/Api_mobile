/// <reference types="mongoose" />
import { Schema, Document, Model } from 'mongoose';
export interface Location {
    type: string;
    coordinates: Array<number>;
}
export interface Hoteles {
    name?: string;
    starts?: number;
    price?: number;
    image?: string;
    address?: string;
    latitud?: number;
    longitud?: number;
}
export interface IHotelesModel extends Hoteles, Document {
}
export declare var UserSchema: Schema;
export declare const Hotel: Model<IHotelesModel>;
