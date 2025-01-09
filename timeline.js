const timelineData = [
  {
    date: "Oct 2023 - Present",
    title: "Business Data and Strategy Specialist",
    company: "Fastenal",
    location: "Winona, Minnesota, USA",
    responsibilities: [
      "<strong>Microsoft-certified Fabric Analytics Engineer</strong>.",
      "Collaborating with multiple teams to develop and implement a <strong>data strategy</strong>, aligning with organizational goals.",
      "<strong>Building self-service environments</strong> for over 5 teams and <strong>training</strong> them to effectively use a data analytics platform, resulting in <strong>80% reduction</strong> in reporting and data delays.",
      "<strong>Leading 10+ strategic projects</strong> focused on establishing data strategy and modernizing legacy data systems, optimizing data accessibility processes.",
      "Hosting an <strong>internal data podcast,</strong> called 'Bonkers 4 BI', to promote data literacy and increase inter-team cooperation.'"
    ],
    techStack: ["Microsoft Fabric", "SQL", "PySpark", "Python", "SparkR", "Microsoft Power BI", "Excel", "Power Query", "Smartsheet"]
  },
  {
    date: "Aug 2022 - Oct 2023",
    title: "Business Data and Strategy Analyst",
    company: "Fastenal",
    location: "Winona, Minnesota, USA",
    responsibilities: [
      "<strong>Microsoft-certified Fabric Analytics Engineer</strong>.",
      "Led a pilot program to <strong>develop and implement a self-service environment</strong> and train the client regarding its use resulting in a <strong>60% reduction in manual work</strong>.",
      "Automated transactional, operational reports <strong>reducing reporting efforts by more than 25%.</strong>"
    ],
    techStack: ["Microsoft Power BI", "Microsoft Fabric", "Python", "SQL", "PySpark", "R", "Excel", "Power Query", "MS Access", "Smartsheet", "Power Automate", "Visual Basic for Applications"]
  },
  {
    date: "Oct 2021 - May 2022",
    title: "Marketing Operations Assistant",
    company: "Luther College",
    location: "Decorah, Iowa, USA",
    responsibilities: [
      "Conducting <strong>email engagement analysis</strong> using 5+ years of data to improve open and click rates for prospective students, enhancing communication strategies.",
      "Maintaining <strong>Slate CRM system</strong> to ensure data hygiene, streamline email segmentation, and enable accurate reporting for admissions.",
      "Delivering <strong>data-driven insights</strong> to inform enrollment strategies and support decision-making for operational improvements."
    ],
    techStack: ["Slate CRM", "Excel"]
  },
  {
    date: "Jun 2021 - Aug 2022",
    title: "Digital Marketing and Analytics Intern",
    company: "Thomson Reuters",
    location: "Remote",
    responsibilities: [
      "Automated <strong>data analysis tasks</strong>, reducing debugging time by <strong>90%</strong> and enabling the creation of <strong>28 legal blogs</strong>.",
      "Developed a <strong>machine learning model</strong> using classification and neural networks to produce relevant legal information, enhancing user experience and data relevance.",
      "Built <strong>new analytics capabilities by integrating APIs</strong> and analyzing key web metrics, driving data-informed business decisions using Power BI."
    ],
    techStack: ["Python", "Power BI", "APIs", "Python", "R", "VS Code"]
  },
  {
    date: "Feb 2021 - May 2021",
    title: "Web and Data Analytics Intern",
    company: "Diversity Council",
    location: "Rochester, Minnesota, USA",
    responsibilities: [
      "Built a <strong>public-facing resource database</strong> using Microsoft SharePoint, enhancing access to cultural and community resources via the Diversity Council website.",
      "Developed a <strong>cultural competency assessment</strong> for educational systems in collaboration with 'Cradle 2 Career' and Winona State academic leaders."
    ],
    techStack: ["MS SharePoint", "Power Automate", "Wix"]
  },
  {
    date: "Oct 2020 - Jan 2021",
    title: "Assistant to the Media Relations and Content Specialist",
    company: "Luther College",
    location: "Decorah, Iowa, USA",
    responsibilities: [
      "Authored over <strong>10 press releases</strong>, showcasing achievements of Luther College's students, staff, and faculty.",
      "Conducted research to identify <strong>media opportunities</strong> and tracked press placements to enhance institutional visibility.",
      "Managed <strong>departmental communications</strong> and collaborated with the community to ensure accurate and compelling storytelling."
    ],
    techStack: ["MS Word"]
  },
  {
    date: "Oct 2020 - Jan 2021",
    title: "Career Peer Advisor",
    company: "Luther College",
    location: "Decorah, Iowa, USA",
    responsibilities: [
      "Increased social media engagement by over <strong>300%</strong> on Instagram and Facebook by creating engaging posts and stories, enhancing the Career Center's outreach.",
      "Reviewed and improved <strong>20+ student resumes</strong>, assisting students in securing internships and job opportunities.",
      "<strong>Acted as a liaison to affinity groups</strong> and contributed to diversity, equity, and inclusion initiatives within the department."
    ],
    techStack: ["MS PowerPoint", "MS Word", "Handshake", "Instagram"]
  },
  {
    date: "May 2020 - Sep 2020",
    title: "Economics Researcher",
    company: "Luther College",
    location: "Decorah, Iowa, USA",
    responsibilities: [
      "<strong>Collected, cleaned, and analyzed</strong> agricultural decision-making data from sub-Saharan Africa, focusing on gender-based variance in harvesting methods.",
      "Conducted <strong>exploratory data analysis</strong> and developed <strong>10+ data visualizations</strong> and tables to highlight variable trends and results from <strong>multiple linear regression</strong> models.",
      "Documented findings in a comprehensive <strong>30-page data appendix</strong> using Stata Markdown and co-authored a theory paper presented at the <strong>AAEA conference</strong>."
    ],
    techStack: ["Stata", "R", "MS Word"]
  },
  {
    date: "Aug 2019 - Sep 2020",
    title: "Social Media and Student Manager at Technology Help Desk",
    company: "Luther College",
    location: "Decorah, Iowa, USA",
    responsibilities: [
      "Resolved <strong>50+ technical issues weekly</strong> for students, faculty, and staff, covering software, hardware, and network troubleshooting for campus-issued and personal devices.",
      "Increased social media engagement by <strong>20%</strong> and followers by <strong>10%</strong> through content creation and campaigns for Instagram and Twitter accounts.",
      "Designed and implemented <strong>2+ training programs</strong> for onboarding new technicians and supported ongoing development by coaching team members during troubleshooting processes."
    ],
    techStack: ["Adobe Photoshop", "Adobe Illustrator", "Instagram", "Canva", "Slack"]
  },
  {
    date: "Oct 2018 - Aug 2019",
    title: "Technician at Technology Help Desk",
    company: "Luther College",
    location: "Decorah, Iowa, USA",
    responsibilities: [
      "<strong>Resolved 100+ technical issues</strong> involving operating systems, hardware, networks, and device syncing for students, faculty, and staff across campus.",
      "Provided individual and event on-campus IT support, addressing software and hardware challenges to <strong>enhance operational efficiency</strong>."
    ],
    techStack: ["ServiceNow", "Slack"]
  },
  {
    date: "Jun 2018 - Aug 2018",
    title: "Intern",
    company: "Sapna NGO",
    location: "New Delhi, Delhi, India",
    responsibilities: [
      "<strong>Prepared a comprehensive impact report</strong>, detailing organizational successes, including 30+ patients housed, 100+ meals provided, and tracking donations received to aid operational transparency.",
      "<strong>Assisted in patient intake and administrative tasks</strong> at Safdarjung Hospital and Dharamshala, supporting social workers and improving inpatient care processes."
    ],
    techStack: ["MS Word", "Canva"]
  }
];

const timelineContainer = document.querySelector(".timeline");

timelineData.forEach((item, index) => {
  const timelineItem = document.createElement("div");
  timelineItem.classList.add("timeline-item");

  const responsibilitiesHTML = item.responsibilities
    .map((responsibility) => `<li>${responsibility}</li>`)
    .join("");

  const techStackHTML = item.techStack
    .map((tech) => `<li>${tech}</li>`)
    .join("");

  timelineItem.innerHTML = `
    <div class="timeline-date">${item.date}</div>
    <div class="timeline-content">
      <h3><u>${item.title}</u></h3>
      <p><strong>Company: </strong>${item.company}</p>
      <p><strong>Location:</strong> ${item.location}</p>
      <div class="responsibilities">
        <button onclick="toggleSection(${index}, 'responsibilities-list')" class="toggle-btn">Show Key Accomplishments</button>
        <ul class="responsibilities-list hidden">
          ${responsibilitiesHTML}
        </ul>
      </div>
      <div class="tech-stack">
        <button onclick="toggleSection(${index}, 'tech-stack-list')" class="toggle-btn">Show Tech Stack</button>
        <ul class="tech-stack-list hidden">
          ${techStackHTML}
        </ul>
      </div>
    </div>
  `;

  timelineContainer.appendChild(timelineItem);
});

function toggleSection(index, className) {
  const sectionList = document.querySelectorAll(`.${className}`)[index];
  const toggleBtn = sectionList.previousElementSibling;

  if (sectionList.classList.contains("hidden")) {
    sectionList.classList.remove("hidden");
    toggleBtn.textContent = toggleBtn.textContent.replace("Show", "Hide");
  } else {
    sectionList.classList.add("hidden");
    toggleBtn.textContent = toggleBtn.textContent.replace("Hide", "Show");
  }
}
