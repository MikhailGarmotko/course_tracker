import { formattedReturn } from "./helpers/formattedReturn";
import { getCourses } from "./helpers/getCourses";
import { createCourse } from "./helpers/createCourse";
import { deleteCourse } from "./helpers/deleteCourse";
import { updateCourse } from "./helpers/updateCourse";

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request)
    // For ease of debugging, we return exception stack
    // traces in response bodies. You are advised to
    // remove this .catch() in production.
    .catch(e => new Response(e.stack, {
      status: 500,
      statusText: "Internal Server Error"
    }))
  )
})


const handleRequest = async (request) => {
  if (request.method === "OPTIONS") {
    return handleOptions(request);
   
  } 
  //else if (request.method === "GET" || request.method == "HEAD") {
  //   // Pass-through to origin.
  //   return await getCourses();
  // }
  if (request.method === "GET") {return await getCourses(request.body)}
  if (request.method === "POST") {return await createCourse(request.body)}
  if (request.method === "DELETE") {return await deleteCourse(request.body)}
  if (request.method === "PUT") {return await updateCourse(request.body)}
}
  
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, POST, DELETE, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  }
  
  function handleOptions(request) {
    if (request.headers.get("Origin") !== null &&
      request.headers.get("Access-Control-Request-Method") !== null &&
      request.headers.get("Access-Control-Request-Headers") !== null) {
      // Handle CORS pre-flight request.
      return new Response(null, {
        headers: corsHeaders
      })
    } else {
      // Handle standard OPTIONS request.
      return new Response(null, {
        headers: {
          "Allow": "GET, HEAD, POST, DELETE, PUT, OPTIONS",
        }
      })
    }
  }
