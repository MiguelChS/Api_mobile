import { Hotel } from '../schema/hoteles';
export async function getListHoteles(text: string): Promise<Array<any>> {
    let resut = await Hotel.aggregate([
        { $match: { name: { $regex: `${text}.*`, $options: 'i' } } }
    ])
    return resut;
}