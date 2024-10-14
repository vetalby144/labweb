"use strict";
class OnlineCourse {
    constructor(name, duration) {
        this.students = [];
        this.name = name;
        this.duration = duration;
    }
    registerStudent(student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} has been registered for the course: ${this.name}`);
        }
        else {
            console.log(`${student} is already registered for the course: ${this.name}`);
        }
    }
    isStudentRegistered(student) {
        return this.students.includes(student);
    }
}
class CourseManager {
    constructor() {
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
        console.log(`Course ${course.name} has been added.`);
    }
    removeCourse(courseName) {
        this.courses = this.courses.filter(course => course.name !== courseName);
        console.log(`Course ${courseName} has been removed.`);
    }
    findCourse(courseName) {
        return this.courses.find(course => course.name === courseName);
    }
    listCourses() {
        this.courses.forEach(course => {
            console.log(`Course: ${course.name}, Duration: ${course.duration} hours`);
            console.log(`Students: ${course.students.length > 0 ? course.students.join(', ') : 'No students registered'}`);
        });
    }
}
const course1 = new OnlineCourse('UXUI', 228);
const course2 = new OnlineCourse('Js', 50);
const course3 = new OnlineCourse('Ts', 10);
const courseManager = new CourseManager();
courseManager.addCourse(course1);
courseManager.addCourse(course2);
courseManager.addCourse(course3);
course1.registerStudent('Vitaliy Mateiuk');
course1.registerStudent('Dima Havrish');
course2.registerStudent('Vadim Dolya');
course2.registerStudent('Taras Antoshchenko');
courseManager.listCourses();
courseManager.removeCourse('UXUI');
courseManager.listCourses();
