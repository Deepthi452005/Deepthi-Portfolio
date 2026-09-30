/**
 * DEEPTHI V S — CYBERSECURITY PORTFOLIO
 * APPLICATION LOGIC & INTERACTION SYSTEM
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Dynamic Year in Footer ---
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // =========================================================================
  // 1. DATA REPOSITORIES (Strict adherence to authorized specifications)
  // =========================================================================

  const experienceData = {
    'exp-soc': {
      title: 'SOC Intern',
      company: 'Supraja Technologies',
      duration: 'July 2026 – Present',
      category: 'SOC OPERATIONS & THREAT MONITORING',
      responsibilities: [
        'Monitoring security events and analyzing alerts using Splunk.',
        'Applying CVSS scoring to assess and prioritize vulnerabilities.',
        'Working with IDS/IPS systems for network-based threat detection and monitoring.'
      ],
      areas: ['SOC Operations', 'Threat Detection', 'CVSS Scoring', 'Network Monitoring', 'IDS/IPS'],
      tools: ['Splunk', 'IDS/IPS Systems'],
      careerRelevance: 'Directly supports the primary SOC Analyst career direction with active log analysis, event triaging, and alert management.'
    },
    'exp-vapt': {
      title: 'Ethical Hacking & VAPT Intern',
      company: 'Supraja Technologies',
      duration: 'July 2025 – October 2025',
      category: 'VULNERABILITY ASSESSMENT & PENETRATION TESTING',
      responsibilities: [
        'Conducted structured penetration testing.',
        'Performed OWASP Top 10 testing on web applications.',
        'Developed an Advanced SQL Injection Scanner.',
        'Gained practical experience in reconnaissance, exploitation, and security report writing.'
      ],
      areas: ['VAPT', 'Web Application Security', 'Reconnaissance', 'Exploitation', 'Security Reporting'],
      tools: ['Advanced SQL Injection Scanner', 'Web Security Tools'],
      careerRelevance: 'Provides thorough offensive testing foundation that strengthens defensive threat modeling and vulnerability remediation.'
    },
    'exp-appsec': {
      title: 'Application Security Intern',
      company: 'Skillcraft Technologies',
      duration: 'September 2025 – October 2025',
      category: 'APPLICATION SECURITY & TESTING',
      responsibilities: [
        'Contributed to security-focused project development.',
        'Applied authentication bypass and privilege escalation testing.'
      ],
      areas: ['Application Security', 'Authentication Testing', 'Privilege Escalation Analysis'],
      tools: ['Security Testing Tools'],
      careerRelevance: 'Deepens understanding of access control vulnerabilities and secure application logic.'
    },
    'exp-redteam': {
      title: 'Red Team Intern',
      company: 'Elevate Labs',
      duration: 'October 2025 – December 2025',
      category: 'ADVERSARY SIMULATION & EXPLOITATION',
      responsibilities: [
        'Worked on simulated red-team scenarios.',
        'Practiced web vulnerability discovery and exploitation.'
      ],
      areas: ['Red Team Simulation', 'Vulnerability Discovery', 'Web Exploitation'],
      tools: ['Adversary Simulation Methodologies'],
      careerRelevance: 'Gives firsthand insight into attacker techniques to better predict and detect threats in a SOC environment.'
    }
  };

  const projectData = {
    'proj-nyx': {
      title: 'NYX NEXUS',
      subtitle: 'Gamified Cybersecurity Learning Platform',
      category: 'LEARNING & AI INTEGRATION',
      purpose: 'Create an engaging, gamified platform with AI assistance to make cybersecurity education intuitive and interactive.',
      description: 'Gamified cybersecurity learning platform with AI integration using Ollama. Built using React.js. Designed interactive challenges and progress tracking for cybersecurity learning.',
      keyFunctionality: [
        'Gamified cybersecurity learning modules and challenge progression',
        'AI integration powered by Ollama for interactive assistance',
        'Built with a responsive React.js frontend interface',
        'Hands-on interactive challenges and student progress tracking'
      ],
      technologies: ['React.js', 'Ollama'],
      securityRelevance: 'Promotes cybersecurity awareness and practical skills acquisition through guided, interactive problem-solving.'
    },
    'proj-aura': {
      title: 'AURA',
      subtitle: 'CIS Benchmark Auditing Tool',
      category: 'SECURITY AUDITING & COMPLIANCE',
      purpose: 'Automate manual security audit checklists against recognized Center for Internet Security (CIS) Benchmarks.',
      description: 'Automated security auditing against CIS Benchmarks. Detects security misconfigurations and gaps. Generates compliance reports and supports remediation workflows.',
      keyFunctionality: [
        'Automated scanning and configuration checking against CIS Benchmarks',
        'Detection of system security misconfigurations and vulnerabilities',
        'Generation of structured compliance audit reports',
        'Actionable support for remediation workflows'
      ],
      technologies: ['CIS Benchmarks', 'Python', 'Security Auditing'],
      securityRelevance: 'Core defensive security and compliance auditing tool that hardens enterprise systems and enforces baseline configurations.'
    },
    'proj-logmon': {
      title: 'LOG MONITORING & ALERT SYSTEM',
      subtitle: 'Windows Security Event Monitoring System',
      category: 'SOC MONITORING & DETECTION',
      purpose: 'Monitor Windows Event Logs in real-time to rapidly identify unauthorized access attempts and suspicious patterns.',
      description: 'Python-based Windows security event monitoring system. Detects failed login attempts and suspicious activities. Uses Windows Event Logs and provides centralized alert visualization.',
      keyFunctionality: [
        'Monitors Windows Security Event Logs using Python scripts',
        'Detects repeated failed login attempts and anomalous behaviors',
        'Centralized alert visualization for efficient SOC review',
        'Immediate flagging of suspicious event IDs'
      ],
      technologies: ['Python', 'Windows Event Logs', 'Centralized Alerting'],
      securityRelevance: 'Directly mirrors enterprise SIEM / SOC alert triaging, enabling fast detection and incident response.'
    },
    'proj-recon': {
      title: 'AUTOMATED RECONNAISSANCE TOOL',
      subtitle: 'Port Scanning & Service Enumeration Tool',
      category: 'RECONNAISSANCE & SCANNING',
      purpose: 'Automate the tedious early discovery phase of penetration testing and network auditing.',
      description: 'Python-based reconnaissance tool. Automates port scanning and service enumeration. Supports information gathering during penetration testing.',
      keyFunctionality: [
        'Automated network port scanning',
        'Service version enumeration and banner inspection',
        'Fast and reliable initial reconnaissance data aggregation',
        'Reduces manual effort during testing engagements'
      ],
      technologies: ['Python', 'Port Scanning', 'Service Enumeration'],
      securityRelevance: 'Identifies active ports and exposed attack surfaces, supporting both defensive hardening and penetration testing.'
    },
    'proj-blocksec': {
      title: 'BLOCKSECURE',
      subtitle: 'Incident Ticketing System',
      category: 'INCIDENT RESPONSE & DASHBOARD',
      purpose: 'Provide a structured, centralized workflow for reporting, tracking, and resolving security incidents.',
      description: 'Security incident ticketing system with a frontend dashboard. Supports incident tracking and management. Built with React.js.',
      keyFunctionality: [
        'Frontend incident dashboard for visibility across tickets',
        'Lifecycle incident management from logging to remediation',
        'Structured ticketing interface for security personnel',
        'Built with modern React.js architecture'
      ],
      technologies: ['React.js', 'Frontend Dashboard', 'Incident Tracking'],
      securityRelevance: 'Essential for SOC team operations to coordinate incident lifecycle tracking, escalation, and post-incident analysis.'
    },
    'proj-phish': {
      title: 'PHISHING EMAIL GENERATOR',
      subtitle: 'Phishing Simulation & Awareness Tool',
      category: 'SECURITY AWARENESS & SIMULATION',
      purpose: 'Simulate realistic email-based social engineering campaigns to measure and improve human security awareness.',
      description: 'Python-based phishing simulation tool. Uses HTML templates and SMTP. Designed for security awareness and phishing simulation exercises.',
      keyFunctionality: [
        'Customizable HTML phishing email templates',
        'SMTP-driven delivery system for controlled simulations',
        'Support for organizational awareness campaigns',
        'Assists in evaluating user susceptibility'
      ],
      technologies: ['Python', 'HTML templates', 'SMTP'],
      securityRelevance: 'Validates email defenses and provides actionable data to train personnel against social engineering attacks.'
    },
    'proj-brute': {
      title: 'BRUTE FORCE LOGIN SIMULATOR',
      subtitle: 'Credential Attack Simulator & Security Automation',
      category: 'AUTHENTICATION TESTING & AUTOMATION',
      purpose: 'Demonstrate the risks of weak password policies and provide scheduled automated alerting.',
      description: 'Python-based credential attack simulation. Used to demonstrate authentication weaknesses and password-policy validation. CronX provides scheduled security automation and alert generation.',
      keyFunctionality: [
        'Simulated dictionary and brute force authentication attacks',
        'Validation of rate-limiting and password strength policies',
        'CronX automation for scheduled background runs and security alerts',
        'Demonstrates risk mitigation against automated credential attacks'
      ],
      technologies: ['Python', 'Credential Attack Simulation', 'CronX Automation'],
      securityRelevance: 'Highlights the critical importance of multi-factor authentication (MFA), account lockouts, and automated scheduled monitoring.'
    },
    'proj-aegis': {
      title: 'AegisGuard — Adaptive ML-Driven DoS Detection & Defense Engine',
      subtitle: 'Adaptive ML-Driven DoS Detection & Defense Engine',
      category: 'AI / ML SECURITY & ADAPTIVE DEFENSE',
      purpose: 'Controlled cybersecurity lab platform that combines machine-learning-based anomaly detection with adaptive rate limiting to identify abnormal HTTP traffic and dynamically strengthen defenses against DoS-like traffic patterns.',
      description: 'AegisGuard is a controlled cybersecurity lab platform that combines machine-learning-based anomaly detection with adaptive rate limiting to identify abnormal HTTP traffic and dynamically strengthen defenses against DoS-like traffic patterns.',
      technologies: ['Python', 'Flask', 'Machine Learning', 'Isolation Forest', 'Traffic Analysis', 'Adaptive Rate Limiting'],
      whatIBuilt: [
        'Developed a controlled HTTP traffic simulation engine for generating configurable normal and high-volume traffic against a local Flask test environment.',
        'Built a telemetry collection pipeline to continuously capture traffic behaviour and convert it into ML-ready features.',
        'Implemented an Isolation Forest anomaly-detection model to identify unusual traffic patterns without requiring labelled attack datasets.',
        'Engineered traffic features including: requests per second, request count, average inter-request time, burst ratio, success/error ratio, rate-limit ratio, average response time, active clients.',
        'Developed an Adaptive Defense Engine that converts detected anomaly risk into different security states.',
        'Implemented dynamic defense levels: NORMAL → WATCH → SUSPICIOUS → HIGH RISK.',
        'Integrated a sliding-window rate limiter into the Flask test environment to restrict excessive requests.',
        'Used HTTP response behaviour, including 429 Too Many Requests, to validate rate-limiting decisions.',
        'Designed the system as a foundation for a real-time security monitoring dashboard showing traffic, ML detection, risk level, and defense status.'
      ],
      machineLearning: 'The ML component uses Isolation Forest, an unsupervised anomaly-detection algorithm. The model learns the characteristics of normal traffic and identifies observations that differ significantly from those patterns.',
      mlPipeline: 'Traffic → Feature Extraction → Feature Vectors → Isolation Forest → Anomaly Detection → Risk Assessment → Adaptive Defense',
      adaptiveDefense: [
        'NORMAL → Normal rate limiting',
        'WATCH → Increased monitoring',
        'SUSPICIOUS → Strict rate limiting',
        'HIGH RISK → Temporary restriction'
      ],
      securityConcepts: [
        'DoS/DDoS traffic behaviour analysis',
        'Anomaly detection',
        'Network/HTTP telemetry',
        'Rate limiting',
        'Defensive automation',
        'Security monitoring',
        'Feature engineering',
        'Machine learning for cybersecurity',
        'Incident-risk classification',
        'Flask-based security testing'
      ],
      projectOutcome: 'AegisGuard demonstrates an end-to-end defensive security pipeline where traffic is generated in a controlled environment, behavioural features are extracted, ML identifies anomalies, and the defense layer automatically adapts its response.',
      safetyNote: 'The traffic generator is intended for controlled local/lab testing and does not perform attacks against external systems.',
      securityRelevance: 'Bridges machine learning with defensive security operations, proving automated threat detection and adaptive telemetry-driven protection.'
    },
    'proj-forensics': {
      title: 'AI + BLOCKCHAIN DIGITAL FORENSICS',
      subtitle: 'Forensic Investigation with Blockchain Chain of Custody',
      category: 'DIGITAL FORENSICS & AI',
      purpose: 'Develop a forensic investigation tool that leverages AI to assist in evidence analysis while using blockchain to guarantee chain of custody integrity and prevent evidence tampering.',
      description: 'Final Year Project. A forensic investigation tool combining AI-powered anomaly detection and pattern recognition for evidence analysis with an immutable blockchain ledger that records and verifies every access and modification to digital evidence.',
      keyFunctionality: [
        'AI-assisted digital evidence analysis and pattern recognition',
        'Blockchain-based chain of custody with immutable audit trail',
        'Tamper-detection mechanisms for digital artifacts',
        'Forensic reporting and evidence documentation'
      ],
      technologies: ['Python', 'Blockchain Logic', 'AI/ML', 'Digital Forensics Tools'],
      securityConcepts: [
        'Digital Forensics Methodology',
        'Chain of Custody Integrity',
        'Blockchain Immutability',
        'AI-Assisted Investigation',
        'Evidence Tamper Detection'
      ],
      lessonsLearned: 'Learned how combining AI with blockchain addresses both the analytical and integrity challenges in digital forensics, ensuring evidence admissibility and investigative accuracy.',
      securityRelevance: 'Directly addresses the core challenges of digital forensic investigations: evidence integrity, analytical accuracy, and chain of custody — critical for legal admissibility and incident response.'
    }
  };

  const achievementData = {
    'ach-1': {
      title: '1st Place – Inter-College CTF Competition',
      institution: 'Acharya Institute of Technology',
      year: 'Winner',
      image: 'assets/Acharya CTF Winner.jpeg',
      description: 'Awarded 1st Place in the prestigious Inter-College Capture The Flag competition hosted by Acharya Institute of Technology, demonstrating top-tier problem solving across reverse engineering, cryptography, and web exploitation.'
    },
    'ach-2': {
      title: '1st Place – CTF Competition',
      institution: 'Supraja Technologies',
      year: 'Winner',
      image: 'assets/CTF winner - Supraja 3.jpeg',
      description: 'Secured 1st Place in the competitive CTF tournament conducted by Supraja Technologies, excelling in log analysis, web testing, and network intrusion detection.'
    },
    'ach-3': {
      title: 'CTF Winner – Ghost Wire, 2026',
      institution: 'Acharya Institute of Technology',
      year: '2026',
      image: 'assets/Atria CTF winner.jpeg',
      description: 'Winner of Ghost Wire 2026 CTF, solving complex multi-stage defensive and offensive security challenges.'
    },
    'ach-4': {
      title: 'CTF Winner – Tech Habba, 2025',
      institution: 'Acharya Institute of Technology',
      year: '2025',
      image: 'assets/Acharya CTF Winner.jpeg',
      description: 'Winner of the Tech Habba 2025 CTF competition hosted by Acharya Institute of Technology, demonstrating agility in rapid threat analysis and vulnerability exploitation.'
    },
    'ach-5': {
      title: 'CTF Winner – Supraja Technologies SDP Level 4',
      institution: 'Supraja Technologies',
      year: '2026',
      image: 'assets/CTF winner - Supraja 4.jpeg',
      description: 'Winner of Level 4 Skill Development Program CTF focusing on Industrial Cybersecurity, Modbus protocols, ICS tools, Snort, and network-based intrusion detection.'
    },
    'ach-6': {
      title: 'CTF Winner – Supraja Technologies SDP Level 3',
      institution: 'Supraja Technologies',
      year: '2025',
      image: 'assets/CTF winner - Supraja 3.jpeg',
      description: 'Winner of Level 3 Skill Development Program CTF covering SOC operations, log analysis, incident detection, and advanced web pentesting.'
    },
    'ach-7': {
      title: 'CTF Winner – Supraja Technologies SDP Level 2',
      institution: 'Supraja Technologies',
      year: '2025',
      image: 'assets/CTF winner - Supraja 2.jpeg',
      description: 'Winner of Level 2 Skill Development Program CTF covering VAPT, web application testing, and exploitation techniques.'
    },
    'ach-8': {
      title: 'CTF Runner-Up – Supraja Technologies SDP Level 1',
      institution: 'Supraja Technologies',
      year: '2024',
      image: 'assets/CTF runner up - Supraja 1.jpeg',
      description: 'Runner-Up in Level 1 Skill Development Program CTF covering cybersecurity foundations, networking protocols, and core security fundamentals.'
    }
  };

  const opportunityData = {
    'software-engineer': {
      title: 'SOFTWARE ENGINEER',
      focus: 'Secure, practical, and scalable application development.',
      desc: 'Open to software engineering opportunities involving secure, practical and scalable application development.',
      areas: ['Python', 'System Architecture', 'Security Tooling', 'Clean Code'],
      dropdownOption: 'Software Engineering Opportunity'
    },
    'full-stack': {
      title: 'FULL STACK DEVELOPER',
      focus: 'Frontend, backend, and complete web application development.',
      desc: 'Open to full-stack development opportunities involving frontend, backend and complete web application development.',
      areas: ['React.js', 'Python', 'REST APIs', 'Database Integration'],
      dropdownOption: 'Full Stack Developer Opportunity'
    },
    'frontend': {
      title: 'FRONTEND DEVELOPER',
      focus: 'Responsive, modern, and user-friendly web experiences.',
      desc: 'Open to frontend development opportunities focused on responsive, modern and user-friendly web experiences.',
      areas: ['React.js', 'Semantic HTML5', 'Vanilla CSS Design Systems', 'Accessibility'],
      dropdownOption: 'Frontend Developer Opportunity'
    },
    'vapt': {
      title: 'VAPT / PENETRATION TESTING',
      focus: 'Vulnerability assessment, penetration testing, and application security.',
      desc: 'Open to vulnerability assessment, penetration testing and application security opportunities.',
      areas: ['OWASP Top 10', 'Web Penetration Testing', 'Reconnaissance', 'Vulnerability Assessment'],
      dropdownOption: 'VAPT / Penetration Testing Opportunity'
    },
    'soc': {
      title: 'SOC ANALYST (PRIMARY AIM)',
      focus: 'Security monitoring, alert analysis, and threat detection.',
      desc: 'Open to SOC operations, security monitoring, alert analysis and threat detection opportunities.',
      areas: ['Splunk Log Analysis', 'Event Monitoring', 'CVSS Prioritization', 'IDS/IPS Detection', 'Incident Triage'],
      dropdownOption: 'SOC Opportunity'
    },
    'blue-team': {
      title: 'BLUE TEAM',
      focus: 'Defensive security, monitoring, incident detection, and security operations.',
      desc: 'Open to defensive security, monitoring, incident detection and security operations opportunities.',
      areas: ['Defensive Hardening', 'CIS Benchmarks', 'Network Analysis', 'Incident Detection'],
      dropdownOption: 'Blue Team Opportunity'
    },
    'ethical-hacker': {
      title: 'ETHICAL HACKER',
      focus: 'Authorized security testing, vulnerability research, and ethical hacking.',
      desc: 'Open to authorized security testing, vulnerability research and ethical hacking opportunities.',
      areas: ['Authorized Testing', 'Vulnerability Research', 'Exploit Analysis', 'Remediation Advisory'],
      dropdownOption: 'Ethical Hacking Opportunity'
    },
    'ctf': {
      title: 'CTF INVITATIONS',
      focus: 'Capture The Flag competitions, cybersecurity events, and security challenge invitations.',
      desc: 'Open to Capture The Flag competitions, cybersecurity events, CTF teams and security challenge invitations.',
      areas: ['CTF Team Roster', 'Inter-College Competitions', 'Hands-on Challenge Tracks'],
      dropdownOption: 'CTF Invitation'
    },
    'freelance': {
      title: 'FREELANCE PROJECTS',
      focus: 'Selected freelance software, web development, and cybersecurity tooling solutions.',
      desc: 'Open to selected freelance projects involving software development, web development, cybersecurity and security-focused solutions.',
      areas: ['Security Tools', 'Web Applications', 'Automation Scripts', 'Security Audits'],
      dropdownOption: 'Freelance Project'
    }
  };

  // =========================================================================
  // 2. MODAL SYSTEM IMPLEMENTATION
  // =========================================================================

  const modal = document.getElementById('appModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalHeaderTitle = document.getElementById('modalHeaderTitle');
  const modalTypeBadge = document.getElementById('modalTypeBadge');
  const modalBodyContent = document.getElementById('modalBodyContent');
  let lastActiveElement = null;

  function openModal(typeBadge, headerTitle, contentHTML) {
    if (!modal) return;
    lastActiveElement = document.activeElement;

    modalTypeBadge.textContent = typeBadge;
    modalHeaderTitle.textContent = headerTitle;
    modalBodyContent.innerHTML = contentHTML;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus on close button for keyboard accessibility
    setTimeout(() => {
      if (modalCloseBtn) modalCloseBtn.focus();
    }, 50);
  }

  function closeModal() {
    if (!modal || !modal.classList.contains('open')) return;

    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Keyboard navigation: Escape key closes modal & drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal && modal.classList.contains('open')) {
        closeModal();
      }
      closeMobileDrawer();
    }
  });

  // Attach Click Handlers for Experience Cards
  const expCards = document.querySelectorAll('.experience-card');
  expCards.forEach(card => {
    const expId = card.getAttribute('data-exp-id');
    const data = experienceData[expId];
    if (!data) return;

    const triggerOpen = () => {
      const content = `
        <div class="modal-detail-row">
          <div class="modal-detail-label">Role &amp; Company</div>
          <div class="modal-detail-val" style="font-size: 1.15rem; font-weight: 700; color: var(--cyan-light);">
            ${data.title} &mdash; <span style="color: var(--text-primary);">${data.company}</span>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--cyan-primary); margin-top: 4px;">
            ${data.duration}
          </div>
        </div>

        <div class="modal-detail-row" style="margin-top: 18px;">
          <div class="modal-detail-label">Key Responsibilities</div>
          <ul style="padding-left: 20px; margin-top: 6px; display: flex; flex-direction: column; gap: 8px;">
            ${data.responsibilities.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-detail-row" style="margin-top: 18px;">
          <div class="modal-detail-label">Relevant Security Domains</div>
          <div class="modal-tags-wrap">
            ${data.areas.map(a => `<span class="tag tag-cyan">${a}</span>`).join('')}
          </div>
        </div>

        <div class="modal-detail-row" style="margin-top: 18px;">
          <div class="modal-detail-label">Operational Tooling &amp; Scope</div>
          <div class="modal-tags-wrap">
            ${data.tools.map(t => `<span class="tag tag-green">${t}</span>`).join('')}
          </div>
        </div>

        <div class="modal-detail-row" style="margin-top: 18px;">
          <div class="modal-detail-label">Career Relevance</div>
          <p style="font-size: 0.94rem; color: var(--text-secondary); margin-top: 4px;">
            ${data.careerRelevance}
          </p>
        </div>

        <div class="modal-actions-footer">
          <a href="#contact" class="btn btn-cyan btn-sm" onclick="selectPurposeAndScroll('SOC Opportunity')">
            Inquire About SOC Experience &rarr;
          </a>
        </div>
      `;
      openModal('EXPERIENCE_RECORD', `${data.title} @ ${data.company}`, content);
    };

    card.addEventListener('click', triggerOpen);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerOpen();
      }
    });
  });

  // Attach Click Handlers for Project Cards (Handles all 8 projects including AegisGuard)
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    const projId = card.getAttribute('data-project-id');
    const data = projectData[projId];
    if (!data) return;

    const triggerOpen = () => {
      let content = `
        <div class="modal-detail-row">
          <div class="modal-detail-label">Project Title</div>
          <div class="modal-detail-val" style="font-size: 1.25rem; font-weight: 800; color: var(--cyan-light);">
            ${data.title}
          </div>
          <div style="font-size: 0.96rem; font-weight: 600; color: var(--text-secondary); margin-top: 2px;">
            ${data.subtitle}
          </div>
        </div>

        <div class="modal-detail-row" style="margin-top: 16px;">
          <div class="modal-detail-label">Overview</div>
          <p style="font-size: 0.95rem; color: var(--text-primary); margin-top: 4px;">
            ${data.description}
          </p>
        </div>

        <div class="modal-detail-row" style="margin-top: 16px;">
          <div class="modal-detail-label">Technologies</div>
          <div class="modal-tags-wrap">
            ${data.technologies.map(t => `<span class="tag tag-cyan">${t}</span>`).join('')}
          </div>
        </div>
      `;

      // If AegisGuard: render specialized sections
      if (data.whatIBuilt) {
        content += `
          <div class="modal-detail-row" style="margin-top: 16px;">
            <div class="modal-detail-label">What I Built</div>
            <ul style="padding-left: 20px; margin-top: 6px; display: flex; flex-direction: column; gap: 8px;">
              ${data.whatIBuilt.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>

          <div class="modal-detail-row" style="margin-top: 16px;">
            <div class="modal-detail-label">Machine Learning</div>
            <p style="font-size: 0.94rem; color: var(--text-secondary); margin-top: 4px;">
              ${data.machineLearning}
            </p>
          </div>

          <div class="modal-detail-row" style="margin-top: 16px;">
            <div class="modal-detail-label">ML Pipeline</div>
            <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--cyan-pale); background: var(--bg-primary); padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border-subtle); margin-top: 6px;">
              ${data.mlPipeline}
            </div>
          </div>

          <div class="modal-detail-row" style="margin-top: 16px;">
            <div class="modal-detail-label">Adaptive Defense (Risk State &rarr; System Response)</div>
            <ul style="padding-left: 20px; margin-top: 6px; display: flex; flex-direction: column; gap: 6px;">
              ${data.adaptiveDefense.map(d => `<li><code>${d}</code></li>`).join('')}
            </ul>
          </div>

          <div class="modal-detail-row" style="margin-top: 16px;">
            <div class="modal-detail-label">Security Concepts Demonstrated</div>
            <div class="modal-tags-wrap">
              ${data.securityConcepts.map(c => `<span class="tag tag-green">${c}</span>`).join('')}
            </div>
          </div>

          <div class="modal-detail-row" style="margin-top: 16px;">
            <div class="modal-detail-label">Project Outcome</div>
            <p style="font-size: 0.94rem; color: var(--text-secondary); margin-top: 4px;">
              ${data.projectOutcome}
            </p>
          </div>

          <div class="modal-detail-row" style="margin-top: 16px;">
            <div class="modal-detail-label">Important Safety / Context Note</div>
            <p style="font-size: 0.88rem; color: var(--text-muted); font-style: italic; margin-top: 4px;">
              ${data.safetyNote}
            </p>
          </div>
        `;
      } else {
        // Standard projects
        content += `
          <div class="modal-detail-row" style="margin-top: 16px;">
            <div class="modal-detail-label">Key Functionality</div>
            <ul style="padding-left: 20px; margin-top: 6px; display: flex; flex-direction: column; gap: 8px;">
              ${data.keyFunctionality.map(k => `<li>${k}</li>`).join('')}
            </ul>
          </div>
        `;

        if (data.securityConcepts) {
          content += `
          <div class="modal-detail-row" style="margin-top: 16px;">
            <div class="modal-detail-label">Security Concepts & Methodologies</div>
            <div class="modal-tags-wrap">
              ${data.securityConcepts.map(c => `<span class="tag tag-green">${c}</span>`).join('')}
            </div>
          </div>
          `;
        }

        content += `
          <div class="modal-detail-row" style="margin-top: 16px;">
            <div class="modal-detail-label">Security Relevance</div>
            <p style="font-size: 0.94rem; color: var(--text-secondary); margin-top: 4px;">
              ${data.securityRelevance}
            </p>
          </div>
        `;

        if (data.lessonsLearned) {
          content += `
          <div class="modal-detail-row" style="margin-top: 16px;">
            <div class="modal-detail-label">Lessons Learned</div>
            <p style="font-size: 0.94rem; color: var(--text-secondary); margin-top: 4px;">
              ${data.lessonsLearned}
            </p>
          </div>
          `;
        }
      }

      content += `
        <div class="modal-actions-footer">
          <a href="https://github.com/Deepthi452005" target="_blank" rel="noopener noreferrer" class="btn btn-panel btn-sm">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
            <span>GitHub Profile</span>
          </a>
          <a href="#contact" class="btn btn-cyan btn-sm" onclick="selectPurposeAndScroll('Security Automation Opportunity')">
            Discuss Project Scope &rarr;
          </a>
        </div>
      `;
      openModal('PROJECT_CASE_STUDY', data.title, content);
    };

    card.addEventListener('click', triggerOpen);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerOpen();
      }
    });
  });

  // =========================================================================
  // 3. DOMAIN-WISE PROJECT FILTERING INTERACTION
  // =========================================================================

  const filterButtons = document.querySelectorAll('.domain-filter-btn');
  const allProjectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedDomain = btn.getAttribute('data-domain');

      // Update button active state
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filter cards
      allProjectCards.forEach(card => {
        const cardDomains = (card.getAttribute('data-domains') || '').split(/\s+/);
        if (selectedDomain === 'all' || cardDomains.includes(selectedDomain)) {
          card.classList.remove('filter-hidden');
        } else {
          card.classList.add('filter-hidden');
        }
      });
    });
  });

  // Attach Click Handlers for Achievement Cards (with images)
  const achievementCards = document.querySelectorAll('.achievement-card.with-image');
  achievementCards.forEach(card => {
    const achId = card.getAttribute('data-achieve-id');
    const data = achievementData[achId];
    if (!data) return;

    const triggerOpen = () => {
      const content = `
        <div style="text-align: center; margin-bottom: 16px;">
          <img src="${data.image}" alt="${data.title} Certificate" class="modal-image-view">
        </div>

        <div class="modal-detail-row">
          <div class="modal-detail-label">Achievement Honor</div>
          <div class="modal-detail-val" style="font-size: 1.2rem; font-weight: 800; color: var(--cyan-light);">
            ${data.title}
          </div>
        </div>

        <div class="modal-detail-row" style="margin-top: 12px;">
          <div class="modal-detail-label">Host Organization / Institution</div>
          <div class="modal-detail-val">
            ${data.institution} (${data.year})
          </div>
        </div>

        <div class="modal-detail-row" style="margin-top: 14px;">
          <div class="modal-detail-label">Event Details</div>
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 4px;">
            ${data.description}
          </p>
        </div>

        <div class="modal-actions-footer">
          <a href="#contact" class="btn btn-cyan btn-sm" onclick="selectPurposeAndScroll('CTF Invitation')">
            Invite to CTF Event &rarr;
          </a>
        </div>
      `;
      openModal('CTF_CERTIFICATE_VERIFICATION', data.title, content);
    };

    card.addEventListener('click', triggerOpen);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerOpen();
      }
    });
  });

  // Attach Click Handlers for Opportunity Cards
  const oppCards = document.querySelectorAll('.opportunity-card');
  oppCards.forEach(card => {
    const oppKey = card.getAttribute('data-opp-key');
    const data = opportunityData[oppKey];
    if (!data) return;

    const triggerOpen = () => {
      const content = `
        <div class="modal-detail-row">
          <div class="modal-detail-label">Opportunity Category</div>
          <div class="modal-detail-val" style="font-size: 1.3rem; font-weight: 800; color: var(--cyan-light);">
            ${data.title}
          </div>
        </div>

        <div class="modal-detail-row" style="margin-top: 14px;">
          <div class="modal-detail-label">Focus Scope</div>
          <p style="font-size: 1.05rem; font-weight: 600; color: var(--text-primary); margin-top: 4px;">
            ${data.focus}
          </p>
        </div>

        <div class="modal-detail-row" style="margin-top: 14px;">
          <div class="modal-detail-label">Engagement Description</div>
          <p style="font-size: 0.96rem; color: var(--text-secondary); margin-top: 4px;">
            ${data.desc}
          </p>
        </div>

        <div class="modal-detail-row" style="margin-top: 16px;">
          <div class="modal-detail-label">Relevant Capabilities &amp; Stack</div>
          <div class="modal-tags-wrap">
            ${data.areas.map(a => `<span class="tag tag-cyan">${a}</span>`).join('')}
          </div>
        </div>

        <div class="modal-actions-footer">
          <button type="button" class="btn btn-cyan btn-block" id="modalOppContactBtn">
            <span>CONTACT FOR ${data.title.replace(' (PRIMARY AIM)', '')} OPPORTUNITY &rarr;</span>
          </button>
        </div>
      `;
      openModal('OPPORTUNITY_ENGAGEMENT', data.title, content);

      // Bind button inside modal to select purpose and scroll
      setTimeout(() => {
        const modalBtn = document.getElementById('modalOppContactBtn');
        if (modalBtn) {
          modalBtn.addEventListener('click', () => {
            selectPurposeAndScroll(data.dropdownOption);
          });
        }
      }, 50);
    };

    card.addEventListener('click', triggerOpen);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerOpen();
      }
    });
  });

  // Global helper to select purpose dropdown in Contact Form & scroll smoothly
  window.selectPurposeAndScroll = function (purposeOptionValue) {
    closeModal();
    const select = document.getElementById('contactPurpose');
    const contactSection = document.getElementById('contact');
    if (select && purposeOptionValue) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === purposeOptionValue) {
          select.selectedIndex = i;
          break;
        }
      }
    }
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // =========================================================================
  // 4. HEADER SCROLL & NAVIGATION SPY
  // =========================================================================

  const siteHeader = document.getElementById('siteHeader');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  function handleScroll() {
    const scrollY = window.pageYOffset;

    // Header background change
    if (siteHeader) {
      if (scrollY > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Scroll spy for active link
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // =========================================================================
  // 5. MOBILE NAVIGATION DRAWER
  // =========================================================================

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-hire-btn');

  function openMobileDrawer() {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.add('open');
    mobileNavDrawer.setAttribute('aria-hidden', 'false');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    if (!mobileNavDrawer || !mobileNavDrawer.classList.contains('open')) return;
    mobileNavDrawer.classList.remove('open');
    mobileNavDrawer.setAttribute('aria-hidden', 'true');
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileDrawer);
  }
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeMobileDrawer);
  }
  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeMobileDrawer);
  }
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  // =========================================================================
  // 6. COPY TO CLIPBOARD BUTTONS
  // =========================================================================

  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const textSpan = btn.querySelector('.copy-text');
        const origText = textSpan ? textSpan.textContent : 'Copy';
        if (textSpan) textSpan.textContent = 'Copied!';
        btn.style.borderColor = 'var(--green-security)';
        btn.style.color = 'var(--green-security)';

        setTimeout(() => {
          if (textSpan) textSpan.textContent = origText;
          btn.style.borderColor = '';
          btn.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy to clipboard:', err);
      });
    });
  });

  // =========================================================================
  // 7. CONTACT FORM SUBMISSION & VALIDATION
  // =========================================================================

  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const purposeSelect = document.getElementById('contactPurpose');
  const messageInput = document.getElementById('userMessage');
  const formStatusAlert = document.getElementById('formStatusAlert');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const purposeError = document.getElementById('purposeError');
  const messageError = document.getElementById('messageError');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError.classList.add('visible');
        nameInput.style.borderColor = 'var(--red-threat)';
        isValid = false;
      } else {
        nameError.classList.remove('visible');
        nameInput.style.borderColor = '';
      }

      // Validate Email
      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        emailError.classList.add('visible');
        emailInput.style.borderColor = 'var(--red-threat)';
        isValid = false;
      } else {
        emailError.classList.remove('visible');
        emailInput.style.borderColor = '';
      }

      // Validate Purpose
      if (!purposeSelect.value) {
        purposeError.classList.add('visible');
        purposeSelect.style.borderColor = 'var(--red-threat)';
        isValid = false;
      } else {
        purposeError.classList.remove('visible');
        purposeSelect.style.borderColor = '';
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageError.classList.add('visible');
        messageInput.style.borderColor = 'var(--red-threat)';
        isValid = false;
      } else {
        messageError.classList.remove('visible');
        messageInput.style.borderColor = '';
      }

      if (!isValid) {
        if (formStatusAlert) {
          formStatusAlert.className = 'form-status-alert error';
          formStatusAlert.textContent = 'Please fill out all required fields marked above.';
          formStatusAlert.style.display = 'block';
        }
        return;
      }

      // Build structured transmission payload
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const purpose = purposeSelect.value;
      const message = messageInput.value.trim();

      const subject = encodeURIComponent(`[${purpose}] Inquiry from ${name}`);
      const body = encodeURIComponent(
        `Dear Deepthi,\n\n` +
        `Sender Name: ${name}\n` +
        `Sender Email: ${email}\n` +
        `Opportunity / Purpose: ${purpose}\n\n` +
        `Message:\n${message}\n\n` +
        `Best regards,\n${name}`
      );

      const mailtoUri = `mailto:deepudeepthi452005@gmail.com?subject=${subject}&body=${body}`;

      if (formStatusAlert) {
        formStatusAlert.className = 'form-status-alert success';
        formStatusAlert.innerHTML = `
          <strong>Message Prepared!</strong> Opening default mail client for transmission to 
          <code>deepudeepthi452005@gmail.com</code>...
        `;
        formStatusAlert.style.display = 'block';
      }

      // Trigger user's mail client
      setTimeout(() => {
        window.location.href = mailtoUri;
      }, 600);

      // Reset Form fields
      contactForm.reset();
    });
  }

});
