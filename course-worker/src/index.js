// export default {
// 	async fetch(request, env, ctx) {
// 		return new Response("Hello World!");
// 	},
// };

addEventListener("fetch", (event) => {
  return event.respondWith(handleRequest(event.request));
});

const corsHeaders = {
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,DELETE,POST,OPTIONS",
};

import { formattedReturn } from "./helpers/formattedReturn";
import { getCourses } from "./helpers/getCourses";
import { createCourse } from "./helpers/createCourse";
import {deleteCourse} from'./helpers/deleteCourse';
import { updateCourse } from "./helpers/updateCourse";

const handleRequest = async (request) => {
  if (request.method === "OPTION") {
    return new Response("OK", { headers: corsHeaders });
  }
  if (request.method === "GET") {
    // return new Response ("Hello world")
    return await getCourses();
  } else if (request.method === "POST") {
    return await createCourse(request.body);
  } else if (request.method === "PUT") {
    return await updateCourse(request.body);
  } else if (request.method === "DELETE") {
    return await deleteCourse(request.body);
  }
  // } else {
  //     return formattedReturn(405, {});
  // }
};
