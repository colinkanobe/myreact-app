import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

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
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);
  return <CourseList courses={courses} />;
}
export default CoursesPage;
