// ─────────────────────────────────────────────────────────────
//  Everything about *you* lives here. Edit this file first.
//  Work history lives in src/content/experience/ (one file per role).
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Dhyanshekar B M',
  fullName: 'Dhyanshekar Mallikarjunaswamy Bettahalsoor',
  role: 'Cybersecurity graduate & former software engineer',
  description:
    'Dhyanshekar B M: Cybersecurity Master’s student at RMIT, DevSecOps intern and former software engineer, heading into SOC and DFIR work. Projects, experience and a learning log.',
  location: 'Melbourne, AU',

  // Home page hero, shown under your name.
  hero: {
    position: 'DevSecOps & Security Automation Intern at XSPECTRE Cybersecurity',
    intro:
      'I build things, then figure out how to break and defend them. Former software engineer turned security practitioner, I spent 1.5 years shipping Spring Boot microservices and GenAI prototypes. Today I’m a DevSecOps intern at a Melbourne MSSP, building a CI/CD pipeline with automated security gates, and finishing my Master of Cyber Security at RMIT. I’m always looking for opportunities to learn and showcase my skills. Currently, I’m focused on SOC operations and incident response.',
  },

  // The four boxes under the hero. Keep these short.
  status: [
    { key: 'Status', value: 'Open to graduate roles', live: true },
    { key: 'Current role', value: 'DevSecOps & Security Automation Intern, XSPECTRE Cybersecurity SIP Connect' },
    { key: 'Study', value: 'Master of Cyber Security, RMIT University' },
    {
      key: 'Roles of interest',
      value: 'SOC Analyst · DFIR Analyst · Threat Hunter · Detection Engineer',
    },
  ],

  // "What I bring" cards on the home page.
  pitch: [
    {
      title: 'I read code',
      body: 'I’ve written the REST APIs, service calls and JDBC layers that attackers go after, so I know where the soft spots usually are.',
    },
    {
      title: 'I think in systems',
      body: 'CI/CD, containers, cloud, IaC. I’ve trained across the whole delivery pipeline and now audit it for a living (well, an internship).',
    },
    {
      title: 'I learn fast',
      body: 'From trainee to full-time engineer in 7 months. Now it’s a Master’s, an internship and Security+ prep, all at the same time.',
    },
  ],

  // Skills grouped like columns of a MITRE ATT&CK matrix.
  skills: [
    {
      tactic: 'Detect & Respond',
      items: ['MITRE ATT&CK', 'Cyber Kill Chain', 'Incident response', 'SOC workflows', 'Splunk', 'Microsoft Sentinel'],
    },
    {
      tactic: 'Govern & Protect',
      items: ['RBAC auditing', 'CIA triad', 'Cryptography', 'Privacy in ML', 'ISO 27001'],
    },
    {
      tactic: 'Build',
      items: ['Java', 'Spring Boot', 'Python', 'Django REST', 'React', 'JUnit'],
    },
    {
      tactic: 'Ship',
      items: ['CI/CD', 'Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'AWS', 'Azure'],
    },
    {
      tactic: 'GenAI',
      items: ['LangChain', 'OpenAI', 'Mistral', 'Llama'],
    },
  ],

  // Certs / practice in progress. Move to `skills` or a "Certifications" list once you pass.
  inProgress: ['CompTIA Security+', 'DevSecOps', 'HackTheBox', 'SIEM home lab'],

  // What you're currently learning (used on the notes page).
  nowLearning: ['Incident response', 'SIEM home lab', 'CompTIA Security+', 'DevSecOps'],

  // The closing pitch at the bottom of the home page, in your own words from LinkedIn.
  closing:
    'If you’re hiring for a graduate security program and value engineers who can read code, think about systems, and learn fast, I’d love to connect.',

  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhyanshekar-b-m' },
    { label: 'GitHub', href: 'https://github.com/dannyshekar' },
  ],
  // Shown on the site. Set to '' to hide it.
  email: 'dannyshekar2001@gmail.com',
};

export const NAV = [
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Notes', href: '/notes' },
  { label: 'About', href: '/about' },
];
