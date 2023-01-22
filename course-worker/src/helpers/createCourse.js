import { base } from "./airtable.js";
import { formattedReturn } from "./formattedReturn";

export const createCourse = async (body) => {
  const fields = JSON.parse(body);
  console.log(fields);
  try {
    const createdCourse = await base("Course_table").create(
      [
        fields
      ]
    );
    return createdCourse; 
  } catch (error) {
    console.log(error)
  }
  

  // return await fetch("https://api.airtable.com/v0/appa7EGL6KN6MxYGj/Course_table", {
  //   method: "POST",
  //   body: body,
  //   headers: {
  //     "Authorization": `Bearer keyI8AYaeJARJyrhZ`,
  //     "Content-type": `application/json`,
  //   },
  // });
};
