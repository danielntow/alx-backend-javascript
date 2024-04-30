export default function getStudentsByLocation(student, city) {
    return (student.filter((obj) => obj.location === city));
}
