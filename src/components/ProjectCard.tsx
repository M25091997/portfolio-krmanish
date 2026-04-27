"use client";

import { motion } from "framer-motion";

// const projects = [
//   {
//     name: "Picture Factory",
//     title: "Multi Vendor E-Commerce",
//     desc: `Built a scalable multi-vendor e-commerce platform using Laravel, MySQL, and Cloudinary. 
//     Features include vendor onboarding, product & order management, secure payments, and seller commission system. 
//     Supports sale events, vendor campaign participation, promotions & wallets, delivery workflows, and Excel import/export.`,
//     tech: ["Laravel", "MySQL", "Cloudinary"],
//     link: "https://picturefactory.careerfind.in/seller/public/login",
//     role: `Backend Developer • Admin Panel & REST API Development`,
//   },
//   ,
//   {
//     title: "Inventory Management System",
//     desc: "Advanced stock tracking with reporting, alerts, and multi-warehouse support.",
//     tech: ["Laravel", "MySQL"],
//     link: "#",
//   },
//   {
//     title: "CRM Dashboard",
//     desc: "Customer management system with analytics, lead tracking, and automation.",
//     tech: ["React", "API", "MySQL"],
//     link: "#",
//   },
// ];

const projects = [
  {
    name: "Picture Factory",
    category: "Multi Vendor E-Commerce Platform",
    description: `Built a scalable multi-vendor e-commerce platform using Laravel, MySQL, and Cloudinary. 
    Implemented vendor onboarding, product & order management, secure payments, and commission-based system. 
    Developed sale events, vendor campaign participation, promotions, wallets, delivery workflows, and Excel import/export.`,
    role: "Backend Developer • Admin Panel & REST API Development",
    tech: ["Laravel", "MySQL", "Cloudinary", "REST API"],
    link: "https://picturefactory.careerfind.in/seller/public/login",
    status: "Live",
  },

  {
    name: "Bringmart",
    category: "Multi Vendor E-Commerce Platform",
    description: `Developed a scalable e-commerce platform supporting instant delivery (10–30 mins) and nationwide selling. 
    Implemented vendor onboarding with GST validation, product management, order processing, and logistics workflows. 
    Integrated payment gateways, WhatsApp API, and shipping systems.`,
    role: "Software Developer • Full Stack Development",
    tech: ["Laravel", "Vue.js", "React", "MySQL"],
    link: "https://bringmart.in",
    status: "Live",
  },

  {
  name: "Journeyon",
  category: "Homestay & Travel Listing Platform",

  description: `Built a travel listing platform for unique stays across India including homestays, hotels, resorts, houseboats, and camps. 
  Enabled property owners to manage listings and travelers to search and book stays. 
  Implemented booking workflows, payment integration, SMS notifications, and email communication.`,

  role: "Full Stack PHP Developer • Admin Panel, Booking System & Integrations",

  tech: ["PHP", "MySQLi", "PDO", "SMS Gateway", "Email Integration"],

  link: "https://homestay.careerfind.in",

  status: "Completed",
},

  {
    name: "MLM Software Platform",
    category: "Network Marketing System",
    description: `Developed a multi-level marketing system with binary/tree structure, user hierarchy, and automated commission calculations. 
    Implemented dashboards, reporting, notifications, and payment integrations with high concurrency optimization.`,
    role: "Backend Developer • System Architecture & API Development",
    tech: ["Laravel", "MySQL"],
    link: "https://shivbrom.in",
    status: "Process",
  },

{
  "name": "Jagriti Vidyalaya ERP",
  "category": "School Management System (ERP)",
  "description": "Developed an all-in-one School ERP solution to manage end-to-end academic and administrative operations for educational institutions. The system includes student registration, admission management, student information system, fee collection (including partial payments), class routines, exam and result management, subject and teacher management, and role-based access control. Additional modules include hostel and transport management, inventory and expense tracking, timetable scheduling, and multi-language support. Integrated SMS and email notifications to streamline communication and improve overall operational efficiency.",
  "role": "Full Stack Developer • Admin Panel & System Development",
  "tech": ["Laravel", "MySQL"],
  "features": [
    "Student Information System (SIS)",
    "Admission & Registration Management",
    "Fee Collection with Partial Payments",
    "Class Routine & Timetable Management",
    "Exam, Marks & Result Generator",
    "Teacher & Subject Management",
    "Role-Based Access Control (RBAC)",
    "Hostel & Transport Management",
    "Inventory & Expense Tracking",
    "Multi-language Support",
    "SMS & Email Notifications"
  ],
  "link": "https://jagritividyalaya.com/",
  "status": "Live"
},
{
  name: "Rido Cabs",
  category: "Taxi Booking Platform",

  description: `Maintained and enhanced a cab booking platform by developing backend APIs, fixing existing modules, and adding new features. 
  Worked on real-time ride management, improved system performance, and integrated AWS services for scalability and reliability.`,

  role: "Backend Developer • Maintenance, API Development & Cloud Integration",

  tech: ["Laravel", "AWS", "MySQL"],

  responsibilities: [
    "Maintained and optimized existing backend modules",
    "Developed and updated REST APIs for ride management",
    "Fixed bugs and improved system stability",
    "Added new features and enhanced existing functionalities",
    "Integrated AWS services for scalability and deployment",
    "Improved database performance and query efficiency"
  ],

  link: "https://ridocabs.com",
  status: "Live",
},

  {
    name: "Stay Real Chat App",
    category: "Real-Time Communication Platform",
    description: `Built a real-time chat and networking application with instant messaging and friend discovery features. 
    Implemented Firebase for real-time data synchronization and notifications.`,
    role: "Full Stack Developer • Frontend & Backend Integration",
    tech: ["React", "Node.js", "Firebase"],
    link: "#",
    status: "Completed",
  },



  {
    name: "iflyparcel",
    category: "Logistics & Delivery Platform",
    description: `Built a flight-based parcel delivery and shipment tracking system. 
    Implemented tracking modules, booking system, and delivery workflow management.`,
    role: "Backend Developer • API & System Development",
    tech: ["Laravel", "MySQL", "Firebase"],
    link: "https://iflyparcel.com",
    status: "Completed",
  },

  {
    name: "Jharkhand Laparoscopy OPD",
    category: "Healthcare Management System",
    description: `Developed OPD management system including patient registration, billing, and role-based access control. 
    Improved operational efficiency through digital workflow automation.`,
    role: "Backend Developer • System Development",
    tech: ["Laravel", "MySQL"],
    link: "https://jharkhandlaproscopy.com",
    status: "Completed",
  },

  {
  name: "MSTT Booking Platform",
  category: "Taxi & Bus Booking System",

  description: `Developed a full-stack booking platform for car taxi and bus travel, supporting route-based booking from one station to another. 
  Implemented bus seat selection, ride scheduling, and booking workflows. 
  Integrated payment gateway, invoice generation, email notifications, and agent management system for operational efficiency.`,

  role: "Full Stack Developer • Booking System, Payment & Admin Panel",

  tech: ["Laravel", "MySQL", "Blade", "JavaScript", "Payment Gateway","React.js", "Node.js"],

  features: [
    "Taxi & Bus Booking System",
    "Station-to-Station Route Management",
    "Bus Seat Selection Module",
    "Online Payment Integration",
    "Invoice Generation System",
    "Email Notification System",
    "Agent Management Module",
    "Admin Panel & Booking Management"
  ],

  link: "https://mstt.in/",
  status: "Live",
},

  {
    name: "Apex Lab",
    category: "Diagnostic Lab System",
    description: `Created an animal diagnostic lab system with automated PDF report generation and report management. 
    Implemented data handling and reporting modules.`,
    role: "Backend Developer • Reporting System Development",
    tech: ["Laravel", "MySQL", "PDF Generation"],
    link: "#",
    status: "Completed",
  },
  {
  name: "Olofind",
  category: "Buy, Sell & Rental Marketplace",

  description: `Developed a marketplace platform similar to OLX where users can buy, sell, and rent products. 
  Implemented location-based product discovery to show nearby listings within a defined radius (e.g., 20 km). 
  Built secure payment integration and scalable backend APIs to handle user listings, transactions, and search functionality.`,

  role: "Backend Developer • Admin Panel, API Development & Payment Integration",

  tech: ["Laravel", "MySQL", "REST API", "Payment Gateway"],

  features: [
    "Buy, Sell & Rent Listings",
    "Location-Based Product Search (Nearby within 20 km)",
    "User Listing & Management System",
    "Secure Payment Integration",
    "Admin Panel for Listings & User Control",
    "Search & Filter Functionality",
    "Category-Based Product Management"
  ],

  link: "https://olofind.com",
  status: "Completed",
},
{
  name: "Dortoserice",
  category: "Two & Four Wheeler Service Booking Platform",

  description: `Developed an on-demand bike service booking platform where users can schedule services such as washing, denting, polishing, and cleaning. 
  Built a service-based booking system similar to Urban or Hoora Company, allowing users to select services, schedule appointments, and manage bookings. 
  Implemented admin panel for service management, order tracking, and customer handling.`,

  role: "Full Stack Developer • Booking System & Admin Panel",

  tech: ["Laravel", "MySQL", "REST API"],

  features: [
    "Bike Service Booking (Washing, Denting, Polishing, Cleaning)",
    "Service Selection & Scheduling System",
    "Order & Booking Management",
    "Admin Panel for Service & Customer Management",
    "Add-on Services & Custom Packages",
    "User-Friendly Booking Flow",
    "Notification System"
  ],

  link: "https://dortoservices.in/",
  status: "Completed",
},
{
    "name": "Robinat",
    "category": "Multi Vendor E-Commerce Platform",
    "description": "Developed a multi-vendor e-commerce platform enabling multiple sellers to list and sell products. Implemented vendor onboarding, product management, order processing, and secure payment integration.",
    "role": "Backend Developer • Admin Panel & API Development",
    "tech": ["Laravel", "MySQL", "REST API"],
    "features": [
      "Multi-vendor seller system",
      "Product & order management",
      "Vendor onboarding",
      "Admin panel control",
      "Payment integration"
    ],
    "link": "https://robinat.com",
    "status": "Completed"
  },
  {
    "name": "Lashpiri",
    "category": "Franchise-Based E-Commerce Platform",
    "description": "Developed a franchise-based e-commerce platform with stock management and distribution system. Implemented multi-level stock handling, franchise operations, and product distribution workflows.",
    "role": "Full Stack Developer • System Development & Inventory Management",
    "tech": ["Laravel", "MySQL"],
    "features": [
      "Franchise-based system",
      "Stock management & distribution",
      "Inventory tracking",
      "Order processing",
      "Admin & franchise dashboard"
    ],
    "link": "https://newlashpiri.devweaves.com",
    "status": "Completed"
  },
  {
    "name": "Fun Book Kro",
    "category": "Water Park Booking Platform",
    "description": "Developed a pan-India water park booking system with role-based access control, ticket generation, and booking management. Enabled users to book tickets online and manage reservations efficiently.",
    "role": "Full Stack Developer • Booking System & Role Management",
    "tech": ["Laravel", "MySQL", "JavaScript"],
    "features": [
      "Water park booking system",
      "Pan-India booking support",
      "Ticket generation system",
      "Role & permission management",
      "Admin panel & booking control"
    ],
    "link": "https://funbook.devweaves.com",
    "status": "Completed"
  },
  {
  "name": "Star Lotus Hotel",
  "category": "Hotel Room Booking System",
  "description": "Developed a hotel room booking system allowing users to search, view, and reserve rooms online. Implemented room availability management, booking workflows, and customer handling. Integrated payment processing and admin panel for managing rooms, bookings, and pricing.",
  "role": "Full Stack Developer • Booking System & Admin Panel",
  "tech": ["Laravel", "MySQL", "JavaScript"],
  "features": [
    "Hotel room booking system",
    "Room availability & scheduling",
    "Online reservation management",
    "Customer booking management",
    "Admin panel for rooms & pricing",
    "Payment integration",
    "Booking status tracking"
  ],
  "link": "https://hotelstarlotus.tripledotss.com",
  "status": "Completed"
},
{
  "name": "Sava Skincare",
  "category": "Beauty E-Commerce Platform",
  "description": "Developed a D2C beauty product e-commerce platform similar to Bella Vita. Implemented single product and combo-based purchasing options such as Buy 1 Get 1 Free, family packs (2-in-1, 5-in-1), and promotional bundles. Integrated secure payment gateway and shipping system for order processing and delivery management.",
  "role": "Full Stack Developer • E-Commerce System & Payment Integration",
  "tech": ["Laravel", "MySQL", "JavaScript", "Payment Gateway"],
  "features": [
    "Single product & combo pack purchasing",
    "Buy 1 Get 1 Free offers",
    "Family packs (2-in-1, 5-in-1 bundles)",
    "Cart & checkout system",
    "Payment gateway integration",
    "Shipping & order management",
    "Admin panel for product & offer management"
  ],
  "link": "https://savaskincare.com/",
  "status": "Live"
},
{
  "name": "Indian Cultura",
  "category": "International E-Commerce Platform",
  "description": "Worked on an international e-commerce platform delivering products globally with multi-currency support (INR & USD). Enhanced system functionality, fixed critical bugs, and improved UI/UX. Integrated secure payment gateways (Stripe & PayPal), shipping APIs (Shiprocket), and WhatsApp API for real-time order notifications and customer communication.",
  "role": "Full Stack Developer • Maintenance, Integrations & Payment Systems",
  "tech": ["Laravel", "MySQL", "JavaScript", "Stripe", "PayPal", "Shiprocket API", "WhatsApp API"],
  "features": [
    "International product delivery",
    "Multi-currency support (INR & USD)",
    "Payment gateway integration (Stripe, PayPal)",
    "Shipping API integration (Shiprocket)",
    "WhatsApp order notifications",
    "UI/UX improvements",
    "Bug fixing & performance optimization"
  ],
  "link": "https://indiancultura.com/",
  "status": "Live"
},
{
  "name": "Devshree Events",
  "category": "Event Management & Booking Platform",
  "description": "Developed a full-stack inquiry-based event management platform for organizing destination events, holidays, and functions. Users can explore services, request bookings, select menus, and hire artists for events. Built a dynamic inquiry system to manage leads, bookings, and customer interactions efficiently.",
  "role": "Full Stack Developer • Inquiry System & Booking Management",
  "tech": ["Laravel", "MySQL", "JavaScript"],
  "features": [
    "Event & function booking system",
    "Destination event & holiday planning",
    "Menu selection for events",
    "Artist booking & management",
    "Inquiry-based lead management system",
    "Admin panel for managing bookings & users",
    "Customer interaction & follow-up system"
  ],
  "link": "https://devshree.co.in/",
  "status": "Live"
}
];
export default function Portfolio() {
  return (
    <section className="px-6 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            A showcase of my recent work and technical expertise
          </p>
        </div> */}

        {/* Cards */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all p-6"
            >
              {/* Project Name (Main Title) /}
              <h3 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {project.name}
              </h3>

              {/* Subtitle /}
              <p className="text-md text-gray-500 dark:text-gray-400 mt-1 font-bold">
                {project.category}
              </p>

              {/* Role /}
              {/* <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
               <span className="font-bold">Role</span>  : {project.role}
              </p> */}

              {/* Description /}
              <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech /}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button /}
              <div className="mt-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-violet-600 hover:text-violet-700 transition"
                >
                  Explore →
                </a>
              </div>
            </motion.div>
          ))}
        </div> */}


        <div className="grid md:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all p-6 flex flex-col justify-between"
    >
      <div>
        {/* Title */}
        <h3 className="text-lg font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
          {project.name}
        </h3>

        {/* Category */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {project.category}
        </p>

        {/* Role */}
        <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            Role:
          </span>{" "}
          {project.role}
        </p>

        {/* Description */}
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Features (limit to 3 for clean UI) */}
        {project.features && (
          <ul className="mt-3 text-xs text-gray-500 dark:text-gray-400 list-disc pl-4 space-y-1">
            {project.features.slice(0, 3).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        {/* Tech */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between">
        {/* Status */}
        <span
          className={`text-xs font-medium px-2 py-1 rounded ${
            project.status === "Live"
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          {project.status}
        </span>

        {/* Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-violet-600 hover:text-violet-700 transition"
        >
          Explore →
        </a>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}
