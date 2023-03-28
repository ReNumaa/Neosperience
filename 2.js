// Definizione dell'oggetto Student
const Student = {
  firstname: '', // Proprietà per il nome dello studente
  lastname: '', // Proprietà per il cognome dello studente
  birthdate: '', // Proprietà per la data di nascita dello studente
  grades: [], // Proprietà per i voti dello studente
  // Metodo per calcolare l'età dello studente
  getAge: function() {
    // Crea un nuovo oggetto Data per la data odierna
    const today = new Date();
    // Crea un nuovo oggetto Data per la data di nascita dello studente
    const birthdate = new Date(this.birthdate);
    // Calcola l'età sottraendo l'anno di nascita dall'anno odierno
    let age = today.getFullYear() - birthdate.getFullYear();
    // Verifica se lo studente ha già compiuto gli anni
    const month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
      // Se lo studente non ha ancora compiuto gli anni, sottrai 1 all'età calcolata in precedenza
      age--;
    }
    // Restituisce l'età dello studente
    return age;
  },
  // Metodo per calcolare la media dei voti dello studente
  getAvgGrade: function() {
    // Se l'array dei voti è vuoto, restituisci 0 come media
if (this.grades.length === 0) {
      return 0;
    }
    // Somma tutti i voti dell'array dei voti utilizzando il metodo reduce
    const total = this.grades.reduce((acc, grade) => acc + grade);
    // Calcola la media dividendo la somma dei voti per il numero di voti
    return total / this.grades.length;
  } 
};


const studente1 = Object.create(Student);
studente1.firstname = 'Mario';
studente1.lastname = 'Rossi';
studente1.birthdate = '1998-05-21';
studente1.grades = [8, 7, 6];

// Stampare i dati dello studente e la sua media dei voti
console.log(studente1.firstname);
console.log(studente1.lastname);
console.log(studente1.getAge());
console.log(studente1.getAvgGrade())