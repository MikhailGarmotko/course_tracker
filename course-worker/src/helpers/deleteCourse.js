import { base } from './airtable';
import {formattedReturn} from './formattedReturn';

export const deleteCourse = async (body) => {
  
  const {id} = JSON.parse(body)

  const result = await fetch(`https://api.airtable.com/v0/appa7EGL6KN6MxYGj/Course_table/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer keyI8AYaeJARJyrhZ`,
    },
  });

return result.json(); 

};