// All site content lives here. Edit this file to update the website.

export const profile = {
  firstName: 'Peshal',
  lastName: 'Parajuli',
  nepaliName: 'पेशल पराजुली',
  email: 'peshalparajuli2006@gmail.com',
  domain: 'peshalparajuli.com.np',
  bases: [
    { place: 'Ephraim, Utah', timeZone: 'America/Denver' },
    { place: 'Kathmandu, Nepal', timeZone: 'Asia/Kathmandu' },
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/peshalparajuli/' },
    { label: 'Snow College', href: 'https://www.snow.edu/' },
  ],
};

export const stats = [
  { value: '4.0', label: 'GPA at Snow College' },
  { value: '3+ yrs', label: 'Leading Everest TechSo' },
  { value: '9', label: 'Roles across 2 countries' },
  { value: '500+', label: 'LinkedIn connections' },
];

export const about = [
  "Namaste! I'm Peshal. I grew up in Nepal studying computer science at Capital College and Research Center, and in 2025 I came to Snow College in Ephraim, Utah as an EducationUSA Opportunity Funds grantee to study Computer Software Engineering in the Honors program.",
  "Wherever I am, I end up starting or leading something. In Nepal I founded Everest TechSo Network to spread knowledge about computer science and AI, co-founded the study platform Mold Skill, and mentored students at Think Big. At Snow College I've led the Computer Science Club, and I now work as a Resident Assistant, Physics Grader and Honors Program Assistant.",
];
export const aboutNote =
  "I'm interested in software engineering, AI and data, and in the people side of tech: teaching, mentoring and bringing communities together.";

export const now = [
  { since: 'Since Aug 2026', title: 'Resident Assistant', text: 'Building a safe, inclusive residence community: rounds, emergency response, conflict resolution and incident reporting.' },
  { since: 'Since Dec 2025', title: 'Physics Grader', text: 'Grading assignments and exams with a focus on problem-solving method and conceptual understanding, plus clear feedback.' },
  { since: 'Since Aug 2025', title: 'Honors Program Assistant', text: 'Running the Honors social media and Canvas course, promoting events and creating written and visual content.' },
];

export const ventures = [
  {
    mark: 'ETN',
    name: 'Everest TechSo Network',
    meta: 'Founding President · Board of Directors · Kathmandu · 2023 to now',
    text: "A student-led network spreading knowledge about computer science and AI. We organized Nepal's first code debugging competition and ran initiatives introducing students and professionals to emerging technology.",
  },
  {
    mark: 'MS',
    name: 'Mold Skill',
    meta: 'Co-Founder · Bhaktapur · 2023 to now',
    text: 'A study website I started in high school to help friends and juniors. It collects notes, guides, exam prep and revision tips in one organized, stress-free place.',
  },
];

// country: 'us' | 'np'
export const experience = [
  { when: 'Aug 2026 – now', current: true, role: 'Resident Assistant', org: 'Snow College · Ephraim, UT', country: 'us',
    text: 'Support student well-being in the residence halls by conducting building rounds, responding to emergencies, resolving conflicts, enforcing residence life policies and keeping accurate incident reports, working closely with Residence Life staff.' },
  { when: 'Dec 2025 – now', current: true, role: 'Physics Grader', org: 'Snow College · Part-time', country: 'us',
    text: 'Evaluate student work for accuracy, method and conceptual understanding, giving constructive feedback while keeping grading consistent and on time.' },
  { when: 'Aug 2025 – now', current: true, role: 'Honors Program Assistant', org: 'Snow College · Part-time', country: 'us',
    text: "Manage the Honors program's social media and Canvas course, help plan and promote events, create written and visual content, and handle administrative work." },
  { when: 'Sep 2025 – Sep 2026', role: 'President, Computer Science Club', org: 'Snow College · Utah', country: 'us',
    text: "Led the club's student initiatives: workshops, events and project-based activities that helped members grow technically and professionally in an inclusive community." },
  { when: 'Apr 2023 – now', current: true, role: 'Founding President', org: 'Everest TechSo Network · Kathmandu', country: 'np',
    text: "Founded and led a network spreading computer science and AI knowledge. Organized Nepal's first code debugging competition. Now serving on the Board of Directors." },
  { when: 'Jan 2024 – now', current: true, role: 'HR Manager', org: 'Think Big · Kathmandu', country: 'np',
    text: 'Mentor students and manage team members, guiding students to explore educational and career opportunities.' },
  { when: 'Jun 2023 – now', current: true, role: 'Co-Founder', org: 'Mold Skill · Bhaktapur · Remote', country: 'np',
    text: 'Built and run a study platform with notes, guides and exam tips that make learning more accessible for students.' },
  { when: 'Jan 2024 – May 2025', role: 'Data Analyst', org: 'Utkristha Sikshya · Jhapa · Remote', country: 'np',
    text: 'Gathered, cleaned and interpreted educational data to produce insights that supported decisions about improving learning outcomes.' },
  { when: 'Nov 2022 – Jul 2024', role: 'IT Head', org: 'CCRC Social Club · Balkumari', country: 'np',
    text: 'Ran all technical operations and digital platforms, designed posts that grew engagement, and resolved technical issues quickly.' },
];

export const education = [
  { years: 'Aug 2025 – Aug 2029 (expected)', school: 'Snow College',
    degree: "Bachelor's degree, Computer Software Engineering · Honors Program",
    grades: [{ value: '4.0', label: 'GPA' }] },
  { years: 'Mar 2021 – Mar 2024', school: 'Capital College and Research Center',
    degree: 'High School (+2), Computer Science · Kathmandu',
    grades: [{ value: '3.84', label: 'Grade 11' }, { value: '3.81', label: 'Grade 12' }] },
];

export const recognition = [
  { title: 'EducationUSA Opportunity Funds Program grantee', year: '2025',
    text: 'Issued by USEF-Nepal, supporting high-achieving students from Nepal applying to study in the United States.' },
  { title: 'International Hackathon: Plastic Free Rivers and Seas for South Asia', year: 'Mar 2025',
    text: 'Certificate from an international hackathon tackling plastic pollution in South Asian rivers and seas. Skills used: React.js and Node.js.' },
];

export const skills = [
  { group: 'Technical', items: ['React.js', 'Node.js', 'Web development', 'Data analysis', 'Data cleaning', 'Canvas LMS'] },
  { group: 'Leadership', items: ['Founding & leading teams', 'Event organization', 'Mentoring', 'Decision-making', 'Crisis management'] },
  { group: 'Communication', items: ['Teamwork', 'Social media', 'Visual content design', 'Writing', 'Conflict resolution'] },
];
