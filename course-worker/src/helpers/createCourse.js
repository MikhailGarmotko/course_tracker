import { table } from './airtable';
import {formattedReturn} from './formattedReturn';


export const createCourse = async (event) => {
    
}
// export const createCourse = async (event) => {
//     const fields = JSON.parse(event.body);
//     try {
//         const createdCourse = await table.create([{ fields }]);
//         return formattedReturn(200, createdCourse);
//     } catch (err) {
//         console.error(err);
//         return formattedReturn(500, {});
//     }
// };
