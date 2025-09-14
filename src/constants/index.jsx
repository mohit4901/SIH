import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "PM Internship Scheme", href: "#" },
  { label: "Assistant", href: "#" },
  { label: "Blogs", href: "#" },
];

export const testimonials = [
  {
    user: "Anant Kumar Rai",
    company: "HDFC Bank Ltd. (Varanasi, Uttar Pradesh)",
    image: user1,
    text: "Anant Kumar Rai, son of a farmer, learned banking operations, customer service, and sales during his HDFC Bank internship. A funny moment when he jammed the printer earned him the nickname 'human paper shredder, breaking the ice and building strong bonds with his team.",
  },
  {
    user: "Elizabeth Lalsim",
    company: "Power Grid Corporation of India Limited (East Jaintia Hills, Meghalaya)",
    image: user2,
    text: "Elizabeth draws inspiration from her mother, a teacher and role model who encouraged her to learn from every opportunity and be independent. During her internship, she is gaining industry exposure while contributing to her family's income. In her own words, I believe this internship will help me secure a job in the future and become financially independent."
  },
  {
    user: "Asjad Khan",
    company: "ONGC Videsh Limited (New Delhi, Delhi)",
    image: user3,
    text: "Asjad worked with the network engineering team and gained hands-on experience in configuration and troubleshooting. A key highlight of his internship was configuring printer access for authorized users and creating a virtual lab to practice network architecture, for which he earned appreciation from his seniors.",
  },
  {
    user: "Harshith A Shetty",
    company: "Mangalore Refinery and Petrochemicals Limited (Dakshina Kannada, Karnataka)",
    image: user4,
    text: "Harshith,an Intern in the Secretarial department, has bridged academic knowledge with practical application, gaining hands-on experience in corporate governance , compliance, and legal frameworks. His duties included drafting minutes, organizing board meetings, and ensuring regulatory filings to bodies like SEBI and MCA were accurate.",
  },
  {
    user: "Karthik Kumar K",
    company: "Mangalore Refinery and Petrochemicals Limited (Dakshina Kannada, Karnataka)",
    image: user5,
    text: "Karthik Kumar, from the finance department has developed strong skills in accounts management, ledger reconciliation, and taxation processes like GST and TDS. His work included SAP Financial Module operations, handling import and export bills, and budget planning, preparing him for a successful career in finance.",
  },
  {
    user: "Garima Sahu",
    company: "ACC Limited (Durg, Chhattisgarh)",
    image: user6,
    text: "From the fields of Balod to ACC's construction site, Garima Sahu stepped in as the only woman intern. With courage ,flexibility, and a helmet, she learned about safety, teamwork, and confidence; proving that skills have no gender and dreams grow with determination.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "12 months real-life experience in India's top companies",
    description:
      "Students get the opportunity to work directly with some of India’s leading organizations across various sectors. This isn’t just training — it’s hands-on exposure to real-world projects, teamwork, and professional environments. The experience gained helps students bridge the gap between classroom knowledge and industry expectations, making them future-ready.",
  },
  {
    icon: <Fingerprint />,
    text: "Monthly Assistance of ₹4,500 by Government of India and ₹500 by Industry",
    description:
      "Every selected intern receives a monthly stipend of ₹5,000, ensuring that financial constraints don’t hold students back from pursuing valuable opportunities. This support covers daily expenses and motivates interns to focus on learning and contributing to their assigned roles.",
  },
  {
    icon: <ShieldHalf />,
    text: "One-Time Grant of ₹6,000 for Incidentals",
    description:
      "To make internships more accessible for students from diverse backgrounds, the government provides a one-time grant of ₹6,000. This grant can be used for incidental costs such as travel, accommodation adjustments, or learning resources — removing hidden barriers that often discourage participation.",
  },
  {
    icon: <BatteryCharging />,
    text: "Choose from Various Sectors and Top Companies of India",
    description:
      "Students can select internships based on their interest areas — whether it’s technology, finance, healthcare, agriculture, or social development. With hundreds of listings from leading companies and institutions across India, every student can find a role that matches their career aspirations.",
  },
  {
    icon: <PlugZap />,
    text: "Job Status – Not Employed Full Time",
    description:
      "The PM Internship Scheme is designed especially for students and fresh graduates who are not yet in full-time employment. This ensures that the opportunities reach those who need industry exposure the most, without conflicting with existing jobs.",
  },
  {
    icon: <GlobeLock />,
    text: "Age – 21 to 24 Years",
    description:
      "Applicants must be between 21–24 years of age at the time of application. This age group represents young individuals ready to enter the workforce, making the internship experience most impactful for their career journey.",
  },
];

export const checklistItems = [
  {
    title: "AI-Powered Personalized Recommendations",
    description:
      "Smart engine suggests only 3–5 top internships based on skills, education, interests, and location — cutting through the confusion of 100s of listings.",
  },
  {
    title: "Regional Language & Simple UI Support",
    description:
      "Designed for first-generation learners and rural youth, with multi-language options and an intuitive card-based interface for easy use.",
  },
  {
    title: "Seamless Integration with PM Internship Schemee",
    description:
      "Fetches updated listings directly from the PM Internship Scheme portal, ensuring authenticity and relevance.",
  },
  {
    title: "Location-Aware & Accessible Anywhere",
    description:
      "Internships mapped with location filters and interactive cards, accessible even on low-end mobile devices with SMS/Email alerts.",
  },
];

export const pricingOptions = [
  {
    title: "Jubilant FoodWorks Limited",
    features: [
      "FMCG / Operations / Sales",
      "Oil & Energy / Manufacturing",
      "One of the top companies posting the most internships",
" Offers strong stipend + brand name, which boosts resume value."
   
    ],
  },
  {
    title: "Reliance Industries Limited",
    features: [
        " Huge number of opportunities in this sector under PMIS. ",
        " Provides exposure to large-scale industrial operations & possibly technical or non-technical roles.",
        "High brand recognition, good for career growth & networking."
   
    ],
  },
  {
    title: "Maruti Suzuki India Limited",
    features: [
      "Automotive / Manufacturing",
      "Frequently listed among top companies participating under PM Internship Scheme.",
"Good mix of technical (engineering, manufacturing) and non-technical roles, increasing match potential across many students.",
    
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Features" },
  { href: "#", text: "About Founders" },
];

export const platformLinks = [
  { href: "#", text: "PM INTERNSHIP SCHEME" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "Eligiblity" },
  { href: "#", text: "Find Internship" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Jobs" },
];