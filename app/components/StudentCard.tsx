"use client";
import React from "react";
import Image from "next/image";

// Define the type for the student prop
type Student = {
    name: string;
    age: number;
    rollNumber: string;
    className: string;
    imageUrl: string;
    gender: string;
    city: string;
    phoneNumber: string;
    address: string;
};

interface StudentCardProps {
    student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
    return (
        <div className="student-card">
            <div className="text-left">
                <Image
                    src={student.imageUrl} 
                    alt={student.name} 
                    width={150} // Set desired width
                    height={150} // Set desired height
                    className="rounded-full" // Optional: for styling
                />
                <h2>Name: {student.name}</h2>
                <p>Age: {student.age}</p>
                <p>Roll Number: {student.rollNumber}</p>
                <p>Class: {student.className}</p>
                <p>City: {student.city}</p>
                <p>Phone: {student.phoneNumber}</p>
                <p>Address: {student.address}</p>
            </div>
        </div>
    );
};

export default StudentCard;