import React from "react";

const Course = ({ course, refreshCourses }) => {
    // debugger;
  const markCoursePurchased = async () => {
    try {
      await fetch(
        "https://course-worker.httpsworkers-airtable-form-bg9pagesdev.workers.dev",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...course, purchased: true }),
        }
      );
      refreshCourses();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCourse = async () => {
    if (course) {
      console.log(course);
    }
    try {
        // debugger;
      await fetch(
    'https://course-worker.httpsworkers-airtable-form-bg9pagesdev.workers.dev',
        {
          method: "DELETE",
          body:JSON.stringify({id:course.id}),
          headers: {
            "Content-Type": "application/json"
          },
        }
      );
      refreshCourses();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="list-group-item">
      <a href={course.fields.link}>
        <h4 className="list-group-item-heading">{course.fields.name}</h4>
      </a>
      <p>
        Tags:{" "}
        {course.fields.tags &&
          course.fields.tags.map((tag, index) => (
            <span className="badge badge-primary mr-2" key={index}>
              {tag}
            </span>
          ))}
      </p>
      {!course.fields.purchased && (
        <button
          className="btn btn-sm btn-primary"
          onClick={markCoursePurchased}
        >
          Purchased
        </button>
      )}
      <button className="btn btn-sm btn-danger ml-2" onClick={deleteCourse}>
        Delete
      </button>
    </div>
  );
};
export default Course;
