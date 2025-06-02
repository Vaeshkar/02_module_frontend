// color my Grade:
const getGradeColor = (grade) => {
  if (grade.startsWith('A')) return 'green';
  if (grade.startsWith('B')) return 'blue';
  if (grade.startsWith('C')) return 'orange';
  if (grade.startsWith('D')) return 'orangered';
  return 'red';
};


// prop gpa
const Grade = ({ gpa }) => {
  let grade;

  if (gpa >= 97) grade = 'A+';
  else if (gpa >= 93) grade = 'A';
  else if (gpa >= 90) grade = 'A-';
  else if (gpa >= 87) grade = 'B+';
  else if (gpa >= 83) grade = 'B';
  else if (gpa >= 80) grade = 'B-';
  else if (gpa >= 77) grade = 'C+';
  else if (gpa >= 73) grade = 'C';
  else if (gpa >= 70) grade = 'C-';
  else if (gpa >= 67) grade = 'D+';
  else if (gpa >= 63) grade = 'D';
  else if (gpa >= 60) grade = 'D-';
  else grade = 'F';

  return <p>Grade: <span style={{ color: getGradeColor(grade) }}>{grade}</span></p>;
};

export default Grade;