interface Course {
    name: string;
    duration: number; 
    students: string[]; 
  }
  
  class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[] = [];
  
    constructor(name: string, duration: number) {
      this.name = name;
      this.duration = duration;
    }
  
    registerStudent(student: string): void {
      if (!this.isStudentRegistered(student)) {
        this.students.push(student);
        console.log(`${student} has been registered for the course: ${this.name}`);
      } else {
        console.log(`${student} is already registered for the course: ${this.name}`);
      }
    }
  
    isStudentRegistered(student: string): boolean {
      return this.students.includes(student);
    }
  }
  
  class CourseManager {
    private courses: Course[] = [];
  
    addCourse(course: Course): void {
      this.courses.push(course);
      console.log(`Course ${course.name} has been added.`);
    }
  
    removeCourse(courseName: string): void {
      this.courses = this.courses.filter(course => course.name !== courseName);
      console.log(`Course ${courseName} has been removed.`);
    }
  
    findCourse(courseName: string): Course | undefined {
      return this.courses.find(course => course.name === courseName);
    }
  
    listCourses(): void {
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
  