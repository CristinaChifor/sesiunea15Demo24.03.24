console.log('hello');

/**
 * OOP, sau Programare Orientată pe Obiect (în engleză, Object-Oriented Programming), 
 * este o paradigmă de programare care utilizează conceptul de obiecte pentru a organiza și structura codul sursă. 
OOP este bazată pe ideea că un program poate fi văzut ca o colecție de obiecte individuale, 
fiecare dintre acestea având propriile sale caracteristici și funcționalități.
Pentru a putea implementa paradigma OOP JavaScript oferă posibilitatea de a crea 
clase ce ne permit crearea de obiecte într-un mod facil.
 */

// OOP - Clase
// Clasele sunt tipare pentru obiecte și sunt folosite pentru a crea obiecte cu proprietăți și comportament similar.
/**
 * Sintaxa: class NumeClasa { constructor(){} alteMembre… }
class - defineste începutul definiției unei clase;
NumeClasa - numele dat de noi clasei (trebuie sa fie un nume reprezentativ pentru clasa). 
Acesta trebuie sa respecte notația PascalCase;
constructor - este o metoda (funcție ce aparține clasei) ce se apelează în 
momentul creării unui nou obiect din clasa și are rol de initializare obiect
 */

class Product {
    constructor(productName, price, stockQuantity) {
        this.productName = productName;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }
}

const product1 = new Product('Bicicleta', 750, 1000);


const product2 = {
    productName: 'Bicicleta',
    price: 750,
    stockQuantity: 1000
}

const product3 = new Product('Laptop', 2500, 300);

console.log(product1);
console.log(product2);
console.log(product3);