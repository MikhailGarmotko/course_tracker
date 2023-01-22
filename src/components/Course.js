import React from 'react'

const Course = ({ course, refreshCourses }) => {
    
    const markCoursePurchased = async () => {
        try {
            await fetch('https://course-worker.httpsworkers-airtable-form-bg9pagesdev.workers.dev', {
                method: 'PUT',
                body: JSON.stringify({ ...course, purchased: true }),
                // mode:'no-cors',
            });
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteCourse = async () => {
        if (course) {console.log(course)}
        try {
            await fetch("https://course-worker.httpsworkers-airtable-form-bg9pagesdev.workers.dev/", {
                method: 'DELETE',
                body: JSON.stringify({ id: course.id }),
            });
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="list-group-item">
            <a href={course.link}>
                <h4 className="list-group-item-heading">{course.name}</h4>
            </a>
            <p>
                Tags:{' '}
                {course.tags && course.tags.map((tag, index) => (
                    <span className="badge badge-primary mr-2" key={index}>{tag}</span>
                ))}
            </p>
            {!course.purchased && (
                <button className="btn btn-sm btn-primary" onClick={markCoursePurchased}>Purchased</button>
            )}
            <button className="btn btn-sm btn-danger ml-2" onClick={deleteCourse}>Delete</button>
        </div>
    )
}
export default Course
