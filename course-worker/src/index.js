// export default {
// 	async fetch(request, env, ctx) {
// 		return new Response("Hello World!");
// 	},
// };

addEventListener('fetch', event => {
	return event.respondWith(handleRequest(event.request));
  });

import {formattedReturn} from './helpers/formattedReturn';
import {getCourses} from './helpers/getCourses';
// const createCourse = require('./helpers/createCourse');
// const deleteCourse = require('./helpers/deleteCourse');
// const updateCourse = require('./helpers/updateCourse');

const handleRequest = async (request) => {
 
    if (request.method === 'GET') {
      // return new Response ("Hello world")
         return getCourses(request.method);
    } 
    // else if (event.httpMethod === 'POST') {
    //     return await createCourse(event);
    
    // } else if (event.httpMethod === 'PUT') {
    //     return await updateCourse(event);
    // } else if (event.httpMethod === 'DELETE') {
    //     return await deleteCourse(event);
    // } else {
    //     return formattedReturn(405, {});
    // }
};
