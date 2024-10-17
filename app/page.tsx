"use client";
//page.tsx
import React from "react";
import StudentCard from "./components/StudentCard";

const students = [
  {
    name: "M.Sameer",
    age: 17,
    rollNumber: "1070",
    className: "GIAIC",
    imageUrl: "/images/sameer.jpg.jpg",
    gender: "Male",
    city: "Karachi",
    phoneNumber: "03097528599",
    address: "7th Floor, Gulshan-e-Iqbal, Karachi, Pakistan."
  },
  {
    name: "Baseer Khan",
    age: 15,
    rollNumber: "313185",
    className: "M.A",
    imageUrl: "/images/baseer.jpg.jpg",
    gender: "Male",
    city: "Lahore",
    phoneNumber: "03057530560",
    address: "24 First Floor Marhaba Tower Karim Block Allama Iqbal Town."
  },
  {
    name: "Aliyan Ali",
    age: 16,
    rollNumber: "163292",
    className: "BBA",
    imageUrl: "/images/aliyan.jpg.jpg",
    gender: "Male",
    city: "Sialkot",
    phoneNumber: "03013529549",
    address: "Daska Road Opp, Farooqia Rice Mill."
  },
];

export default function Home () {
  return (
    <div className="home">
      <h1 className="title text-center text-bold text-5xl text-transform: uppercase ">Student ID Cards</h1>
    <div className="student-cards">
      {students.map((student, index) => (
      <StudentCard key={index} student={student} />
      ))}
    </div>

      <style jsx>{`
      .home {
        text-align: center;
        padding: 20px;
       }
      .student-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px
        margin-top: 20px
      }
      
      `}</style><br />
      <div>
        <h2 className="text-center text-3xl font-bold text-transform: uppercase text-white">
        Made By M.Sameer Khan
        </h2>
      </div>

    </div>
  );
};