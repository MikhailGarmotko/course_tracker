import { table } from "./airtable";
import { formattedReturn } from "./formattedReturn";

export const createCourse = async (body) => {
  return fetch(
    'https://api.airtable.com/v0/appa7EGL6KN6MxYGj/Course_table',
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer keyI8AYaeJARJyrhZ`,
        "Content-type": `application/json`,
      },
    }
  );
};
