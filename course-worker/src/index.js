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
  "Access-Control-Allow-Methods": "GET,HEAD,POST,DELETE,OPTIONS",
};

import { formattedReturn } from "./helpers/formattedReturn";
import { getCourses } from "./helpers/getCourses";
import {createCourse} from "./helpers/createCourse"; 
// const deleteCourse = require('./helpers/deleteCourse');
// const updateCourse = require('./helpers/updateCourse');

const handleRequest = async (request) => {
  if (request.method ==='OPTION') {
     return new Response('OK',{headers:corsHeaders});
  }
  if (request.method === "GET") {
    // return new Response ("Hello world")
    return getCourses();
  } else if (request.method === "POST") {
    return await createCourse(request.body);
  }
  // } else if (event.httpMethod === 'PUT') {
  //     return await updateCourse(event);
  // } 
  else if (request.method === 'DELETE') {
       return await deleteCourse(request.method);
  }
  // } else {
  //     return formattedReturn(405, {});
  // }
};
