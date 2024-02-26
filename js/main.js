// Nuestro objeto literal
const natalia = {
    name: "Natalia", 
    lastName:"castaño",
    age: 24,
    city: "Aguascalientes",
    country: "México",
    isEstudent: "No",
    isWorkend: "Yes",
    Job: "Recursos humanos",
    company: "Medical sur", 
    courses: [
        "Curso de gestión en empresas Tech", 
        "Curso Práctico linkedin", 
        "Curso de seleccion de perfiles Tech"
    ],
  approvedCourses(curs){
          //métodos del objeto literal
        // para ingresar  cursos en el array del objeto literal 
        this.courses.push(curs)
      
}
    
};
 //Creando prototipo 

function student(name,lastName,age,city,country,isEstudent,isWorkend,Job,company,courses,approvedCourses) {
    this.name = name; 
    this.lastName = lastName;
    this.age = age;
    this.city = city; 
    this.country = country; 
    this.isEstudent = isEstudent;
    this.isWorkend = isWorkend; 
    this.Job = Job; 
    this.company = company; 
    this.courses = courses;
    
    //  este es otro tipo de  ejemplo de como usar el metodo que esta en nuestra clase natalai 
    
    //this.approvedCourses = function (newcourses) {
        //this.approvedCourses.push(newcourses);
//}
    
}
// podemos usar  esto para emplearlo sobre nuestro prototipo 

// añade nuevos  cursos
student.prototype.approvedCourses = function (newcourses) {
    this.courses.push(newcourses);
}

// para ingresar  cursos en el array del objeto literal 
natalia.courses.push("Curso de herramientas avanzadas en likedin");

// creamos  instancia y vamos a mandar argumentos a  un prototipo

const juanita = new student("Juana Maria","Rocha",35,"Estado de México","México","Yes","Yes","Diseñadora UI/UX","Química del centro",["Diseño de producto", "Expericia de usaurio", "Desarrollo e implementación de proyectos"])
