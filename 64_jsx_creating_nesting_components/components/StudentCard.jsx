import Grade from './Grade';

// Prop student
const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <img
        className="student-img"
        src={student.picture}
        alt={`${student.firstName} ${student.lastName}`}
      />
      <h2>{student.firstName} {student.lastName}</h2>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city}</p>
      {student.graduate && <p className="badge">🎓 Graduated</p>}
      <Grade gpa={student.gpa} />
    </div>
  );
};

export default StudentCard;