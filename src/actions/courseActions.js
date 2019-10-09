import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

//Action Creator
export function saveCourse(course) {
  return courseApi.saveCourse(course).then(saveCourse => {
    //Hey dispatcher go tell all the stores that a course was just created
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: saveCourse
    });
  });
}
export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    //Hey dispatcher go tell all the stores to load courses
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses
    });
  });
}
