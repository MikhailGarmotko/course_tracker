import { table } from "./airtable";
import { formattedReturn } from "./formattedReturn";

export const createCourse = async (body) => {

  const data = await fetch(
    'https://api.airtable.com/v0/appa7EGL6KN6MxYGj/Course_table',
    {
      method: "POST",
      body: JSON.stringify({fields:body}),
      headers: {
        Authorization: `Bearer keyI8AYaeJARJyrhZ`,
        "Content-type": `application/json`,
      },
    }
  );
  
  const result = await data.json();

  return result; 
};
