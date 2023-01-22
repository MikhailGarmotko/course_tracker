import { formattedReturn } from "./helpers/formattedReturn";
import { getCourses } from "./helpers/getCourses";
import { createCourse } from "./helpers/createCourse";
import { deleteCourse } from "./helpers/deleteCourse";
import { updateCourse } from "./helpers/updateCourse";

addEventListener("fetch", (event) => {
  return event.respondWith(handleRequest(event.request));
});

const corsHeaders = {
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, DELETE, GET, OPTIONS",
};

function handleOptions(request) {
  // Make sure the necessary headers are present
  // for this to be a valid pre-flight request
  let headers = request.headers;
  if (
    headers.get("Origin") !== null &&
    headers.get("Access-Control-Request-Method") !== null &&
    headers.get("Access-Control-Request-Headers") !== null
  ) {
    // Handle CORS pre-flight request.
    // If you want to check or reject the requested method + headers
    // you can do that here.
    let respHeaders = {
      ...corsHeaders,
      // Allow all future content Request headers to go back to browser
      // such as Authorization (Bearer) or X-Client-Name-Version
      "Access-Control-Allow-Headers": request.headers.get(
        "Access-Control-Request-Headers"
      ),
    };
    return new Response(null, {
      headers: respHeaders,
    });
  } else {
    // Handle standard OPTIONS request.
    // If you want to allow other HTTP Methods, you can do that here.
    return new Response(null, {
      headers: {
        Allow: "GET, HEAD, POST, OPTIONS",
      },
    });
  }
}

const handleRequest = async (request) => {
  // if (request.method === "OPTIONS") {
  //   response = handleOptions(request);
  // } else {
  //   response = await fetch(request);
  //   response = new Response(response.body, response);
  //   response.headers.set("Access-Control-Allow-Origin", "*");
  //   response.headers.set(
  //     "Access-Control-Allow-Methods",
  //     "GET, POST, PUT, DELETE, OPTIONS"
  //   );
  // }

  if (request.method === "OPTIONS") {
    
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
