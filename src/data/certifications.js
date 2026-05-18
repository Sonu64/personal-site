import { FaJava } from "react-icons/fa";
import javaCertPdf from "../assets/java_dsa_cert.pdf";

// src/data/certifications.js
export const certifications = [
  {
    id: 1,
    title: "CS50x — Introduction to Computer Science",
    issuer: "Harvard University / edX",
    date: "2024",
    category: "CS",
    description: "Harvard's iconic intro CS course — covered C, Python, SQL, web dev fundamentals, and problem-solving at scale.",
    credentialUrl: "https://certificates.cs50.io/3078339c-0bb3-47d7-b078-1a9040b2ad76.pdf?size=letter", // ← replace with your actual CS50 cert link
    badge: "CS50",
    color: "mint",
    placeholder: false,
  },
  {
    id: 2,
    title: "Introduction to Cloud Infrastructure — Describe Cloud Concepts",
    issuer: "Microsoft / LinkedIn Learning",
    date: "2024",
    category: "CS",
    description: "Foundational cloud computing concepts — cloud models, service types (IaaS, PaaS, SaaS), shared responsibility, and core infrastructure principles.",
    credentialUrl: "https://learn.microsoft.com/en-us/users/sourakantimandal-9907/achievements/2j3uukmv", // ← paste your credential/certificate URL here
    badge: "CLOUD",
    color: "orange",
    placeholder: false,
  },
  {
    id: 3,
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "2024",
    category: "CS",
    description: "Demonstrated proficiency in API concepts, REST principles, HTTP methods, request/response cycles, and Postman tooling for API testing and documentation.",
    credentialUrl: "https://badges.parchment.com/public/assertions/QS_wJykFQ_WGZXs_MupQsg", // ← paste your Postman badge/credential URL here
    badge: "API",
    color: "lilac",
    placeholder: false,
  },
  {
    id: 4,
    title: "Data Structures and Algorithms using Java",
    issuer: "ApnaCollege",
    date: "2024",
    category: "CS",
    description: "Mastered fundamental and advanced data structures and algorithms using Java, focusing on optimization and complex problem-solving techniques.",
    credentialUrl: javaCertPdf,
    badge: "JAVA",
    color: "mint",
    icon: FaJava,
    placeholder: false,
  },
];
