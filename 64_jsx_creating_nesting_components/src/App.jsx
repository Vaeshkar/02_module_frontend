// You can work here or download the template
// Your components go here
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import StudentCard from '../components/StudentCard';
import Footer from '../components/Footer';
import './style.css';

// Array of Student objects
const students = [
  {
    id: 1,
    firstName: 'Testy',
    lastName: 'McTest',
    age: 42,
    course: 'Web Development',
    city: 'Berlin',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    gpa: 50,
    graduate: false,
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    course: 'Data Science',
    city: 'New York',
    picture: 'https://randomuser.me/api/portraits/women/2.jpg',
    gpa: 95,
    graduate: true,
  },
  {
    id: 3,
    firstName: 'John',
    lastName: 'Smith',
    age: 28,
    course: 'Web Development',
    city: 'Los Angeles',
    picture: 'https://randomuser.me/api/portraits/men/3.jpg',
    gpa: 85,
    graduate: false,
  },
  {
    id: 4,
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 25,
    course: 'Data Science',
    city: 'San Francisco',
    picture: 'https://randomuser.me/api/portraits/women/4.jpg',
    gpa: 78,
    graduate: true,
  },
  {
    id: 5,
    firstName: 'Bob',
    lastName: 'Brown',
    age: 30,
    course: 'Web Development',
    city: 'Chicago',
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    gpa: 67,
    graduate: false,
  },
  {
    id: 6,
    firstName: 'Charlie',
    lastName: 'Davis',
    age: 23,
    course: 'Data Science',
    city: 'Austin',
    picture: 'https://randomuser.me/api/portraits/men/6.jpg',
    gpa: 92,
    graduate: true,
  },
  {
    id: 7,
    firstName: 'Emily',
    lastName: 'Wilson',
    age: 27,
    course: 'Web Development',
    city: 'Seattle',
    picture: 'https://randomuser.me/api/portraits/women/7.jpg',
    gpa: 88,
    graduate: true,
  },
  {
    id: 8,
    firstName: 'David',
    lastName: 'Martinez',
    age: 29,
    course: 'Data Science',
    city: 'Miami',
    picture: 'https://randomuser.me/api/portraits/men/8.jpg',
    gpa: 73,
    graduate: false,
  },
  {
    id: 11,
    firstName: 'Dennis',
    lastName: 'van Leeuwen',
    age: 47,
    course: 'Software Engineer',
    city: 'Glückstadt',
    picture: 'https://randomuser.me/api/portraits/men/11.jpg',
    gpa: 96,
    graduate: true,
  }
];

// Form for event: submit
const handleSubmit = (e) => {
  
  e.preventDefault();
  const form = e.target.elements;
  const submitBtn = form.submitBtn;
  submitBtn.disabled = true;

  const formData = {
    name: form.name.value.trim(),
    age: Number(form.age.value),
    color: form.color.value,
    recommend: form.recommend.checked,
  };

  if (formData.name.length < 2) {
    alert('Name must be at least 2 characters long.');
    submitBtn.disabled = false;
    return;
  };

  if (formData.age < 5 || formData.age > 120 || isNaN(formData.age)) {
    alert('Age must be between 5 and 120');
    submitBtn.disabled = false;
    return;
  }
  // console log the data and Alert the user
  console.log(formData);
  alert("Thanks for completing the survey!");
  // Reset the form
  e.target.reset();
  // Enable the button after 3 sec.
  setTimeout(() => {
  submitBtn.disabled = false;
  }, 3000);
}


const App = () => {
  return <div>
            <Header />
            <Hero />
            <Services />
            <div className="student-grid">
              {students.map(student => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor='name'>Name:</label>
              <input type="text" id="name" name="name" autoComplete="name" placeholder="Your name" />
              <label htmlFor="age">Age:</label>
              <input type="number" id='age' name='age' autoComplete='age' placeholder='Your age' />

              <label htmlFor="color">Favorite Color:</label>
              <select name="color" id="color" autoComplete='color' >
                <option value="" disabled selected>Select a color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
              <label htmlFor="recommend">
                <input type="checkbox" id="recommend" name="recommend" autoComplete="off" />
                Would you recommend our site?
              </label>
              <button type='submit' name='submitBtn' >Submit</button>
            </form>
            <Footer />
        </div>;
};

export default App;
