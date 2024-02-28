// prototipos con la sintaxis de clases 

class Studen2{
    // aqui podemos crear  métodos y atributos que necesitemos
    //  este es igual a la instancia de prototipo o instancia de clase
    constructor({
        name,
        age,
        curses=[]
    }) {
        this.name = name;
        this.age = age
        this.curses = curses
         
    }

    aprobarCurso(NuevocURSO) {
        this.curses.push(NuevocURSO);
    }

    
    
}

const miguel = new Studen2(
    "Miguel",
    23, 
  
);