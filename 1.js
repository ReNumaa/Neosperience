// Inizializzazione delle tre variabili che rappresentano i primi due numeri di Fibonacci e il terzo (che è la loro somma)
let prev = BigInt(1);
let curr = BigInt(1);
let next = BigInt(2);

// Inizializzazione della variabile che tiene traccia del numero di cifre del numero di Fibonacci corrente
let digits = 0;

// Ciclo while che continua finché il numero di cifre del numero di Fibonacci corrente è inferiore a 1000
while (digits < 1000) {
  // Aggiornamento delle variabili prev, curr e next
  prev = curr;
  curr = next;
  next = prev + curr;

  // Calcolo del numero di cifre del numero di Fibonacci corrente
  digits = next.toString().length;
}
