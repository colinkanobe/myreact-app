import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  getCourses() {
    return _courses;
  }
  getCourseBySlug(slug) {
    return _courses.find(course => course.slug === slug);
  }
  deleteCourseById(id) {
    return _courses.filter(course => course.id !== id);
  }
}
const store = new CourseStore();
Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      //Any time the store changes emitChange is
      //called(user added a new course then any react components registered with this store needs to be notified)
      store.emitChange();
      break;
    case actionTypes.UPDATE_COURSE:
      _courses = _courses.map(course =>
        course.id === action.course.id ? action.course : course
      );
      //Any time the store changes emitChange is
      //called(user added a new course then any react components registered with this store needs to be notified)
      store.emitChange();
      break;
    case actionTypes.DELETE_COURSE:
      _courses = _courses.filter(
        course => course.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      //Any time the store changes emitChange is
      //called(user added a new course then any react components registered with this store needs to be notified)
      store.emitChange();
      break;
    default:
    //nothing to do
  }
});
export default store;
