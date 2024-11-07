import React, { useState } from "react";

const DerivedState = (props) => {
    const [students, setStudents] = useState([
        { name: "student1", mark: 24 },
        { name: "student2", mark: 78 },
        { name: "student3", mark: 44 },
        { name: "student4", mark: 94 },

    ]);

    console.log(students);


    const studentLength = students.length;

    const studentsMark = students.reduce((acc, student) => {
        return acc + student.mark; // Use 'mark' instead of 'marks'
    }, 0);

    console.log(studentsMark);

    const avarageMark =studentsMark / studentLength;

    return (
        <>
            <h2>----------- DerivedState -----------</h2>


             <h4>Total Students : {studentLength}</h4>
             <h4>Total Marks : {studentsMark}</h4>
            <h4>Avarage Marks : {avarageMark}</h4>

            
            <ul>
                {students.map((student, index) => {
                    return (
                        <li key={index} data={student} >{student.name} ---- Marks :- {student.mark}</li>
                    )
                })}

            </ul>
        </>
    )


}

export default DerivedState;