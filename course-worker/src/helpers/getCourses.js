import { table } from "./airtable";
import { formattedReturn } from "./formattedReturn";

import Airtable from "airtable";
const base = new Airtable({ apiKey: "keyI8AYaeJARJyrhZ" }).base(
  "appa7EGL6KN6MxYGj"
);

export const getCourses = () => {
  return fetch("https://api.airtable.com/v0/appa7EGL6KN6MxYGj/Course_table", {
    method: "GET",
    headers: {
      "Authorization": `Bearer keyI8AYaeJARJyrhZ`,
      "Content-type": `application/json`,
    },
  });
};

// export const getCourses = (event) => {
//   base("Course table")
//     .select({
//       // Selecting the first 3 records in Grid view:
//       maxRecords: 3,
//       view: "Grid view",
//     })
//     .eachPage(
//       function page(records, fetchNextPage) {
//         // This function (`page`) will get called for each page of records.

//         records.forEach(function (record) {
//           console.log("Retrieved", record.get("name"));
//         });

//         // To fetch the next page of records, call `fetchNextPage`.
//         // If there are more records, `page` will get called again.
//         // If there are no more records, `done` will get called.
//         fetchNextPage();
//       },
//       function done(err) {
//         if (err) {
//           console.error(err);
//           return;
//         }
//       }
//     );
// };

// export const getCourses = async (event) => {
//     try {
//         const courses = await table.select().firstPage();
//         const formattedCourses = courses.map((course) => ({
//             id: course.id,
//             ...course.fields,
//         }));
//         return formattedReturn(200, formattedCourses);
//     } catch (err) {
//         console.error(err);
//         return formattedReturn(500, {msg: 'Something went wrong'});
//     }
// };
