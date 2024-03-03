// objetos literales

const juan1 = {
    name: "JuanDc",
    userName: "juandc",
    points: 100,
    socialMedia: {
        x: "@juanviejoLoco",
        instagram: "@yosoyjuanito",
        facebook: undefined,
        twich: "devJuanito",
        pinterest: undefined,
        youtube: "jUANADAS"

    },
    approvecurses: [
        "css",
        "desarrollo fontent",
        "typescrip",
        "mysql",
        "wordpress"
    ],
       
    
    learningPaths: [
        {
            name: "Angular",
            curses: [
                "consumo de  Api",
                "implemantación frameworks para frontend",
                "formularios reactivos",
                "jsrx"
            ]
        },
        
        {
            name: "React",
            curses: [
                "consumo de  Api  en react",
                "implemantación de bases de datos para react",
             
            ]
        },
        

    ]

};



// con programacion orientada  a objetos

class  learningPaths {
    constructor({
        name,
        curses=[]
    }) {
        this.name = name;
        this.curses = curses
        
    }
}


const escuelaweb = new learningPaths({
    name: "Fronten de cero a 100",
    curses: [
        "logica de programación", 
        "curso de maquetación web", 
        "curso de html", 
        "curso de css"
 ]   
})

const escuelaBDD = new learningPaths({
    name: "GESTIÓN DE BASES DE DATOs",
    curses: [
        "Firebase",
        "Mongo DB",
        "mysql",
        "QSL"
    ]
});


const escuelAngular = new learningPaths({
   name: "Angular",
            curses: [
                "consumo de  Api",
                "implemantación frameworks para frontend",
                "formularios reactivos",
                "jsrx"
            ] 
    
});

const escuelReact = new learningPaths({
    name: "React",
    curses: [
        "consumo de Api en react",
        "implemantación de bases de datos para react",
    ]
});


class approveCurses{
    constructor(
        {
            namePhat,
            aprovaded = [],
            
            
        }
    ) {
        this.namePhat = namePhat;
        this.aprovaded = aprovaded;
        
    }


}







const aprovadedMiguelAngular = new approveCurses({
    namePhat: "Angular",
    aprovaded: [
         "Frontend css para angular",
         "Conexión con bases de datos par angular",
          "Proyecto con tailwind y angular",
        
    ]
});

   



class Student{
     
    constructor({
         name,
        userName,
        points,
        email,
        x = undefined,
        instagram = undefined,
        facebook = undefined,
        twich = undefined,
        pinterest = undefined,
        youtube = undefined,
    approvecurses =[],
    learningPaths= []
    }) {
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.points = points;
            this.socialMedia = {
        x,
        instagram ,
        facebook ,
        twich,
        pinterest ,
        youtube,
                
            }
     
       this.approvecurses  = approvecurses,
        this.learningPaths = learningPaths
        
    }


}
 

const juan3 = new Student({
    name: "JuanDc", 
    userName: "juandc",
    email: "juandc@gmail.com", 
    x: "@juanelLoco",
    points:100,
    learningPaths: [
        escuelaBDD,
        escuelaweb
    ]
    
    
})



const miguelito = new Student({
    name: "Miguel Mtz", 
    userName: "MiguelTz",
    email: "miguelito.feliz@gmail.com", 
    instagram: "@MIguelCreativo",
    learningPaths: [escuelaweb, escuelAngular], 
    approvecurses: [aprovadedMiguelAngular]
    
})