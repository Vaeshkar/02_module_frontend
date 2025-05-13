// Initial array
const fruits = ['apple', 'banana', 'cherry', 'date'];

/*  1. */
const [first, second] = fruits;
console.log(first, second);

const [firstElement, thirdElement] = fruits;
console.log(firstElement, thirdElement);

// Initial object
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};

/* 2. */
const {name, age, address} = person
console.log(name)
console.log(age)
console.log(address)


// Initial function
function displayPerson({name, age}) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

/* 3. */
displayPerson(person)
