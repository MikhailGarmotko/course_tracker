import React, { useState } from 'react';
import Tags from './Tags';
import Airtable from 'airtable';

export default function CourseForm({ courseAdded }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [tags, setTags] = useState([]);
    const [count, setCount] = useState(0);
    const base = new Airtable({apiKey:'keyI8AYaeJARJyrhZ'}).base('appa7EGL6KN6MxYGj');

    const resetForm = () => {
        setName('');
        setLink('');
        setCount(count + 1);
    };


    const submitCourse = async (e) => {
        e.preventDefault();
        const body = { name, link, tags};
        
        try {
            await fetch(
                
                "https://course-worker.httpsworkers-airtable-form-bg9pagesdev.workers.dev", {
                method: "POST",
                body: JSON.stringify(
                {fields:body}
                ),
                headers: {
                    "Content-Type": "application/json",
                  },
            });
            resetForm();
            courseAdded();
        } catch (err) {
            console.error(err);
        }
    };
    
    return (
        <div className="card">
            <div className="card-header">Add a New Course</div>
            <div className="card-body">
                <form className="" method ='POST' onSubmit={submitCourse}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="link">Link</label>
                        <input
                            type="text"
                            name="link"
                            value={link}
                            className="form-control"
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <p>Tags</p>
                        <Tags tagsUpdated={setTags} key={count} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
