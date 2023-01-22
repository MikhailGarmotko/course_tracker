import { table } from './airtable';
import {formattedReturn} from './formattedReturn';

export const updateCourse = async (event) => {
    const { id, ...fields } = JSON.parse(event.body);
    try {
      await fetch("https://api.airtable.com/v0/appa7EGL6KN6MxYGj/Course_table", {
      method: "PUT",
      body: {id, ...fields},
      headers: {
        "Authorization": `Bearer keyI8AYaeJARJyrhZ`,
        "Content-type": `application/json`,
      },
    });
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};
