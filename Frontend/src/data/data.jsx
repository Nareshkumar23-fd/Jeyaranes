import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  School, 
  MessageSquare, 
  Zap, 
  Book, 
  RefreshCw,
  BarChart,
  Laptop,
  BookCopy,
  Briefcase,
  FolderOpen,
  Target,
  Mail,
  Phone,
  MapPin,
  Link
} from 'lucide-react';

// ==========================================
// Portfolio Data - Jeyarane S
// All portfolio content is managed here.
// Components fetch from this file only.
// ==========================================

export const personalInfo = {
  name: "Jeyarane S",
  firstName: "Jeyarane",
  lastName: "S",
  title: "Aspiring Junior Accountant",
  email: "jeyarane23@gmail.com",
  phone: "+91 8012181974",
  address: "No. 49, Kaliyamman Kovil Street, Mettutheru, Bethaniyapuram, Madurai – 625016",
  city: "Madurai",
  linkedin: "https://linkedin.com/in/jeyarane-s-766105375",
  linkedinDisplay: "linkedin.com/in/jeyarane-s-766105375",
  objective:
    "A highly motivated and detail-oriented B.COM graduate seeking an entry level position in Accounting, Finance, or Business Operations where I can leverage my academic Knowledge, Problem-solving Ability, and enthusiasm to contribute to organizational growth and develop professionally.",
  shortBio:
    "I'm a passionate commerce graduate with hands-on experience in accounting, client management, and financial operations. I bring dedication, quick learning ability, and a strong work ethic to every role.",
  resumeFileName: "Jeyarane_S_Resume.pdf",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jeyarane-s-766105375",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:jeyarane23@gmail.com",
    icon: "email",
  },
  {
    name: "Phone",
    url: "tel:+918012181974",
    icon: "phone",
  },
];

export const workExperience = [
  {
    id: 1,
    role: "Existing Operator",
    company: "ARK Canton Enterprises",
    location: "Chennai",
    period: "02/2026",
    type: "Current",
    responsibilities: [
      "Maintained client relationships",
      "Prepared and maintained client invoices",
      "Maintained accurate client records",
      "Updated customer information in the CRM system",
      "Ensured accurate data entry and record maintenance",
    ],
  },
  {
    id: 2,
    role: "Junior Accountant",
    company: "Rekkon Tax and Accounts Solution",
    location: "Madurai",
    period: "08/2025 – 12/2025",
    type: "Internship",
    description:
      "Appointed by Rekkon Tax & Accounts Solution as a Junior Accountant at Crescent Travels.",
    responsibilities: [
      "Assisted in maintaining daily accounts, invoices, and expense records",
      "Helped in preparing financial statements and balance sheets",
      "Managed petty cash and reconciled bank statements",
      "Learned and applied Tally ERP9 for bookkeeping and accounting",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Commerce",
    institution: "NMS SVN College",
    location: "Madurai",
    period: "2022 – 2025",
    grade: "CGPA: 67%",
    icon: <GraduationCap size={24} />,
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate",
    institution: "Velliveethiyar Corporation Girls Higher Secondary School",
    location: "Madurai",
    period: "2019 – 2020",
    grade: "CGPA: 79%",
    icon: <BookOpen size={24} />,
  },
  {
    id: 3,
    degree: "Secondary School Leaving Certificate",
    institution: "St. Mary of Leuca Matriculation School",
    location: "Madurai",
    period: "2018 – 2019",
    grade: "CGPA: 70%",
    icon: <School size={24} />,
  },
];

export const technicalSkills = [
  { name: "Typewriting (Junior Level)", level: 75, category: "technical" },
  { name: "Typewriting (Senior Level)", level: 85, category: "technical" },
  { name: "Tally ERP9", level: 80, category: "technical" },
  { name: "Master Professional Accounting (MPA)", level: 70, category: "technical" },
];

export const softSkills = [
  { name: "Effective Communication", icon: <MessageSquare size={20} /> },
  { name: "Quick Learner", icon: <Zap size={20} /> },
  { name: "Good Teaching", icon: <Book size={20} /> },
  { name: "Adaptability & Independent Working", icon: <RefreshCw size={20} /> },
];

export const areasOfInterest = [
  { name: "Handling Financial Reporting", icon: <BarChart size={24} />, description: "Preparing and analyzing financial statements and reports for informed decision-making." },
  { name: "Maintaining Accounting Software", icon: <Laptop size={24} />, description: "Working with tools like Tally ERP9 to ensure accurate digital bookkeeping." },
  { name: "Maintaining Bookkeeping", icon: <BookCopy size={24} />, description: "Recording day-to-day financial transactions systematically and accurately." },
];

export const projects = [
  {
    id: 1,
    title: "AI-Driven Work Culture Transformation",
    description:
      "Work Culture Transformation through Artificial Intelligence, A Study among IT Professionals in Madurai City.",
    tags: ["Research", "AI", "Work Culture", "IT Industry"],
    highlights: [
      "Conducted primary research among IT professionals",
      "Analyzed impact of AI on workplace culture",
      "Presented findings on digital transformation trends",
      "Studied adoption patterns in Madurai's IT sector",
    ],
  },
];

export const stats = [
  { label: "Years Experience", value: "1+", icon: <Briefcase size={24} /> },
  { label: "Projects Completed", value: "1", icon: <FolderOpen size={24} /> },
  { label: "Skills Mastered", value: "8+", icon: <Target size={24} /> },
  { label: "Degree", value: "B.Com", icon: <GraduationCap size={24} /> },
];

export const contactFormFields = [
  { id: "name", label: "Your Name", type: "text", placeholder: "Enter your name", required: true },
  { id: "email", label: "Your Email", type: "email", placeholder: "Enter your email", required: true },
  { id: "subject", label: "Subject", type: "text", placeholder: "What's this about?", required: true },
  { id: "message", label: "Message", type: "textarea", placeholder: "Write your message here...", required: true },
];

export const contactDetails = [
  {
    id: 1,
    icon: <Mail size={20} />,
    title: "Email",
    value: "jeyarane23@gmail.com",
    link: "mailto:jeyarane23@gmail.com",
  },
  {
    id: 2,
    icon: <Phone size={20} />,
    title: "Phone",
    value: "+91 8012181974",
    link: "tel:+918012181974",
  },
  {
    id: 3,
    icon: <MapPin size={20} />,
    title: "Location",
    value: "Bethaniyapuram, Madurai – 625016",
    link: "https://maps.google.com/?q=Bethaniyapuram+Madurai",
  },
  {
    id: 4,
    icon: <Link size={20} />,
    title: "LinkedIn",
    value: "jeyarane-s",
    link: "https://linkedin.com/in/jeyarane-s-766105375",
  },
];
