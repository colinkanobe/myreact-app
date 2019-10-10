import React, { useState, useEffect } from "react";
//import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStore";
import { loadCourses, deleteCourse } from "../actions/courseActions";
/*
//Commented out for now but this is an example of using Hooks(useState,useEffect)
//In a function this is the modern approach 
function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => {
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
*/
//Used Composing components here to pass data to component CourseList
//It's an example of a controllerView with a toplevel component
//CoursePage that passes data to another component CourseList
function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange); //cleanup when component unmounts ie navigate to different page
  }, []);
  function onChange() {
    setCourses(courseStore.getCourses());
  }
  return (
    <>
      <h2>Courses..</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>

      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}
export default CoursesPage;
