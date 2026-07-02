export const personalInfo = {
  name: "Vedant Desai",
  initials: "VD",
  role: "Full Stack Developer",
  subtitle: "CSE student at Uka Tarsadia University building polished full-stack experiences with React, backend systems, databases, and a strong product mindset.",
  shortBio: "I'm a passionate developer who loves building clean, efficient, and user-friendly applications that solve real-world problems.",
  profileImage: "/photo.jpg",
  location: "Surat, Gujarat, India",
  address: "Surat, Gujarat, India",
  email: "vedantdesai2409@gmail.com",
  phone: "+917861978787",
  resumePdf: "/CSE VEDANT RAKESHBHAI DESAI.pdf",
  heroBackground: "/portfolio-hero-bg.png",
};

export const socialLinks = [
  { key: "github", title: "GitHub", label: "GitHub", description: "Code, experiments, and repositories", link: "https://github.com/VEDANTDESAI2409" },
  { key: "linkedin", title: "LinkedIn", label: "LinkedIn", description: "Professional updates and profile", link: "https://www.linkedin.com/in/vedant-desai-350181321/" },
  { key: "whatsapp", title: "WhatsApp", label: "WhatsApp", description: "Quick contact for direct conversations", link: "https://wa.me/+917861978787" },
  { key: "instagram", title: "Instagram", label: "Instagram", description: "Personal updates and moments", link: "https://www.instagram.com/07_vedant__?igsh=MTRzanljdzdrNWFiOQ==" },
  { key: "facebook", title: "Facebook", label: "Facebook", description: "Connect on Facebook", link: "https://www.facebook.com/share/1EmH4Q2QS5/" },
  { key: "email", title: "Email", label: "Email", description: "Reach out for work or collaboration", link: "mailto:vedantdesai2409@gmail.com" },
];

export const homeContent = {
  kicker: "Hi, I'm",
  title: personalInfo.name,
  role: personalInfo.role,
  tagline: personalInfo.subtitle,
  aboutTitle: "About Me",
  workOverviewEyebrow: "Work Overview",
  workOverviewTitle: "Focused builds, steady growth, and proof of practice.",
  socialEyebrow: "Social Links",
  socialTitle: "Connect With Me",
  socialText: "Professional profiles and direct contact channels in one clean place.",
  ctaButtons: [
    { label: "Download Resume", href: personalInfo.resumePdf, download: true, icon: "download", variant: "primary" },
    { label: "View Projects", href: "/projects", icon: "arrow", variant: "secondary" },
  ],
};

export const pageContent = {
  projects: {
    eyebrow: "Selected Work",
    title: "Projects as product stories.",
    description: "Alternating showcase layouts, large visuals, technology pills, and clean actions instead of ordinary cards.",
    codeLabel: "GitHub",
    liveLabel: "Live Demo",
  },
  skills: {
    eyebrow: "Skills",
    title: "A tactile wall of tools I use.",
    description: "No progress rings, no charts. Just practical technologies, grouped with clear experience signals.",
  },
  certificates: {
    eyebrow: "Proof Gallery",
    title: "Certificates And Achievements",
    description: "A polished gallery with previews, metadata, and download actions for each credential.",
    emptyTitle: "Certificates will be added soon.",
    emptyText: "This section is ready. Add certificate objects to the certificates data when you want them to appear here automatically.",
  },
  blog: {
    eyebrow: "Field Notes",
    title: "Modern Blog",
    description: "Personal reflections with persistent votes, bookmark states, categories, read time, and smooth feedback.",
  },
  resume: {
    eyebrow: "Resume",
    title: "Professional Snapshot",
    description: "A premium resume viewer with timeline details, skills, project highlights, download, print, and the original PDF.",
  },
  about: {
    eyebrow: "About Me",
    title: "Engineer In Progress, Builder By Habit",
    description: `${personalInfo.name}, a Computer Science and Engineering student focused on clean code, practical systems, and useful products.`,
  },
  contact: {
    eyebrow: "Contact",
    title: "Let Us Build Something Useful",
    description: "Reach out for internships, projects, collaborations, or a quick technical conversation.",
  },
};

export const qualityHighlights = [
  { icon: "code", title: "Clean Code", text: "I prioritize writing clean, readable, and maintainable code." },
  { icon: "idea", title: "Problem Solver", text: "I enjoy solving complex problems with simple and efficient solutions." },
  { icon: "rocket", title: "Fast Learner", text: "I love learning new technologies and applying them in real projects." },
];

export const workOverview = [
  { value: 5, suffix: "+", label: "Projects", detail: "Full-stack, ML, and product-style builds" },
  { value: 13, suffix: "+", label: "Core Skills", detail: "Frontend, backend, data, and tools" },
  { value: 6, suffix: "+", label: "Certificates", detail: "Hackathons, coding, and tech events" },
  { value: 2, suffix: "+", label: "Years Learning", detail: "Consistent engineering practice" },
];

export const liveLinks = socialLinks;

export const projects = [
  {
    title: "Remaining Useful Life Prediction",
    category: "Machine Learning",
    desc: "A predictive maintenance workflow using CMAPSS FD001 data, ML baselines, and LSTM time-series modeling for turbofan engine RUL prediction.",
    image: "/Data Science.jpg",
    tech: ["Python", "Pandas", "TensorFlow", "Scikit-learn"],
    live: "",
    code: "https://colab.research.google.com/drive/1WIK7iOzeIcjxoEguSr9KbTEyfBGYVRP8?usp=sharing",
  },
  {
    title: "CookWithMe",
    category: "Interactive Food App",
    desc: "A warm recipe experience where users explore dishes, follow steps, and move through a community-oriented cooking flow.",
    image: "/CookWithMe.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "",
    code: "https://github.com/VEDANTDESAI2409/CookWithMe.git",
  },
  {
    title: "Bus Ticket Booking App",
    category: "ASP.NET MVC Platform",
    desc: "A booking system with seat selection, ticket management, payment flow, and database-backed application structure.",
    image: "/Bus Ticket Booking.jpg",
    tech: ["ASP.NET Core", "Bootstrap 5", "SQL"],
    live: "",
    code: "https://github.com/VEDANTDESAI2409/Bus_Booking_Application_by_VedantDesai.git",
  },
  {
    title: "Portfolio Website",
    category: "Personal Brand",
    desc: "A React and Framer Motion portfolio system focused on storytelling, motion, responsive pages, and recruiter-friendly presentation.",
    image: "/portfolio.jpg",
    tech: ["React", "Framer Motion", "CSS"],
    live: "",
    code: "https://github.com/VEDANTDESAI2409/My_Potfolio.git",
  },
  {
    title: "Smart Parking System",
    category: "MERN Collaboration",
    desc: "Parking slot booking, availability tracking, user management, responsive interfaces, and integrated backend APIs.",
    image: "/14.jpg",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    live: "",
    code: "https://github.com/Rudrasinh03/Park_N_Go.git",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    note: "Interfaces, interaction, and responsive UI polish",
    skills: [
      { name: "React", level: "", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", level: "", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML", level: "", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", level: "", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "UI/UX", level: "" },
    ],
  },
  {
    title: "Backend & Data",
    note: "APIs, storage, and practical data flows",
    skills: [
      { name: "Node.js", level: "", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", level: "", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", level: "", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "ASP.NET Core", level: "", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    ],
  },
  {
    title: "Programming & Tools",
    note: "Core languages, ML tooling, and engineering workflow",
    skills: [
      { name: "Python", level: "", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", level: "", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C#", level: "", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "Git", level: "", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "TensorFlow", level: "Projects", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Pandas", level: "Projects", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    ],
  },
  {
    title: "Soft Skills",
    note: "Habits that help real teams move better",
    skills: [
      { name: "Teamwork", level: "Daily" },
      { name: "Problem Solving", level: "Daily" },
      { name: "Creativity", level: "Daily" },
      { name: "Adaptability", level: "Daily" },
      { name: "Communication", level: "Daily" },
      { name: "Management", level: "Daily" },
    ],
  },
];

export const certificates = {
  tech: [],
  other: [],
};

export const blogPosts = [
  { id: 1, title: "Learning from Failed Models", category: "Machine Learning", date: "2026", text: "Not every model performs well on the first try. Failed experiments have taught me more than successful ones about data quality, feature selection, and the importance of patience in machine learning workflow.", readMoreLink: "" },
  { id: 2, title: "The Importance of Data Before Code", category: "Data", date: "2026", text: "Great models start with great data. I have learned that understanding data patterns, cleaning noise, and asking the right questions often matters more than choosing complex algorithms.", readMoreLink: "" },
  { id: 3, title: "Consistency Beats Motivation in Tech", category: "Career", date: "2026", text: "Building skills in technology is not about motivation. It is about consistency. Writing small amounts of code daily has helped me improve far more than waiting for the perfect time to learn.", readMoreLink: "" },
  { id: 4, title: "Technology as a Problem-Solving Tool", category: "Engineering", date: "2026", text: "For me, technology is not just about writing code; it is about solving real problems. Whether it is automation or analytics, the goal is always to make systems simpler, faster, and more reliable.", readMoreLink: "" },
  { id: 5, title: "Focus on Fundamentals First", category: "Learning", date: "2026", text: "Trends change quickly, but strong fundamentals last. Investing time in core concepts has given me confidence to adapt to new technologies with ease.", readMoreLink: "" },
  { id: 6, title: "Learning Is a Continuous Process", category: "Growth", date: "2026", text: "In tech, learning never stops. Every project introduces something new, and staying curious is more important than knowing everything.", readMoreLink: "" },
  { id: 7, title: "Progress Over Perfection", category: "Mindset", date: "2026", text: "Waiting for perfection often delays growth. Shipping simple solutions and improving them over time has helped me learn faster and build better systems.", readMoreLink: "" },
  { id: 8, title: "Building Skills with Patience", category: "Career", date: "2026", text: "Career growth does not happen overnight. Consistent effort, patience, and learning from mistakes have been key drivers in my development journey.", readMoreLink: "" },
];

export const education = [
  { level: "10th", title: "Secondary Education", org: "Shree Vasishtha Vidhtalaya", meta: "Gujarat Board / Completed 2021", result: "Percentile 87.98%", text: "The starting point where discipline, fundamentals, and curiosity began shaping my technical direction." },
  { level: "Diploma", title: "Diploma in Computer Engineering", org: "N.G. Patel Polytechnic", meta: "Gujarat Technological University / Completed 2024", result: "CGPA 8.48", text: "Built a strong base in programming, databases, software fundamentals, and project-based learning." },
  { level: "B.Tech", title: "B.Tech in Computer Science and Engineering", org: "Asha M. Tarsadia Institute of Computer Science and Engineering", meta: "Uka Tarsadia University / 2024 - 2027", result: "CGPA 7.63", text: "Currently expanding into modern web development, data-driven systems, and real-world software practice." },
];

export const resumeInfo = {
  headline: "Final year B.Tech CSE student",
  summary: "AMTICS, Uka Tarsadia University. Skilled in Python, React, JavaScript, HTML, CSS, Node.js, and databases. Passionate about building useful software and contributing to real-world projects.",
  socialKeys: ["github", "linkedin"],
  actions: {
    downloadLabel: "Download Resume",
    printLabel: "Print",
  },
  infoCards: [
    { label: "Email", value: personalInfo.email },
    { label: "Location", value: personalInfo.location },
    { label: "Focus", value: personalInfo.role },
  ],
  experience: [
    { role: "Project-Based Developer", organization: "Academic and personal projects", period: "2024 - Present", text: "Building full-stack, data-driven, and responsive web projects with clean implementation and practical workflows." },
  ],
  skills: ["Python", "React", "JavaScript", "HTML", "CSS", "Node.js", "MongoDB", "Git", "Problem Solving", "Teamwork", "Adaptability", "Creativity", "Management"],
};

export const contactInfo = {
  title: "Direct Channels",
  intro: `Available from ${personalInfo.location}. I usually respond fastest through email or LinkedIn.`,
  email: personalInfo.email,
  phone: personalInfo.phone,
  address: personalInfo.address,
  socialLinks,
  formFields: [
    { name: "name", label: "Your Name", type: "text" },
    { name: "contact", label: "Email or Phone", type: "text" },
    { name: "subject", label: "Subject", type: "text" },
  ],
  messageLabel: "Your Message",
  submitLabel: "Send Message",
  statuses: {
    required: "Please fill in all fields.",
    invalidContact: "Please enter a valid email or phone number.",
    sending: "Sending...",
    success: "Message sent successfully.",
    failure: "Failed to send. Try again later.",
  },
};

export const aboutInfo = {
  title: "My Direction",
  text: [
    "I enjoy building practical, real-world applications and improving my technical skills across frontend, backend, databases, and software fundamentals. My academic journey has helped me develop a foundation in programming, data structures, databases, and web technologies through academic and personal projects.",
    "I value clean code, logical problem solving, performance-aware interfaces, and learning technologies that make applications easier to use and maintain.",
  ],
  currentGoal: "Looking for opportunities to apply software development skills, learn from real teams, and grow as an engineer.",
};

export const galleryCollections = {
  personal: [
    {
      id: 1,
      caption: "Profile moments",
      photos: ["/gallery/profilex.jpeg", "/gallery/profilex2.jpeg", "/gallery/profilex3.jpeg", "/gallery/profilex4.jpeg"],
    },
    {
      id: 2,
      caption: "Travel memories",
      photos: ["/gallery/goa.jpg", "/gallery/goa2.jpg", "/gallery/lonawala.jpg", "/gallery/lonawala2.jpg", "/gallery/matheran.jpg", "/gallery/matheran2.jpg"],
    },
  ],
  projects: [
    { id: 1, caption: "Project visuals", photos: projects.map((project) => project.image) },
  ],
  achievements: [
    { id: 1, caption: "Achievement snapshots", photos: ["/gallery/leet.jpeg", "/gallery/techlead.png", "/certs/adira.png", "/certs/dataloom.png"] },
  ],
};
