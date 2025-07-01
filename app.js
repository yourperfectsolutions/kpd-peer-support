// Application data
const teamMembers = [
  {
    "name": "Sergeant Maria Rodriguez",
    "title": "Crisis Intervention Team Lead",
    "specialization": "Crisis Intervention & Family Support",
    "availability": "24/7 Emergency Response",
    "email": "m.rodriguez@killeenpd.gov",
    "phone": "(254) 501-8830",
    "certifications": ["Critical Incident Stress Management (CISM)", "Mental Health First Aid", "Crisis Intervention Team (CIT) Certified"],
    "bio": "Sergeant Rodriguez brings over 15 years of law enforcement experience to the peer support team. She specializes in crisis intervention and family support, providing 24/7 emergency response for officers in critical situations. Her compassionate approach and extensive training make her a trusted resource for officers and their families during challenging times.",
    "profileImage": "https://pplx-res.cloudinary.com/image/upload/v1751380366/gpt4o_images/gp2eabhescnz5rkdfmtx.png"
  },
  {
    "name": "Officer David Chen",
    "title": "Wellness Specialist",
    "specialization": "Stress Management & Substance Abuse Support",
    "availability": "Monday-Friday, 8am-6pm",
    "email": "d.chen@killeenpd.gov",
    "phone": "(254) 501-8831",
    "certifications": ["Certified Addiction Counselor", "Stress Management Specialist", "Mental Health First Aid"],
    "bio": "Officer Chen focuses on proactive wellness strategies and substance abuse support. With specialized training in stress management and addiction counseling, he helps officers develop healthy coping mechanisms and provides confidential support for substance-related concerns.",
    "profileImage": "https://pplx-res.cloudinary.com/image/upload/v1751380450/gpt4o_images/x0zih8rtlqprkzdmff4a.png"
  },
  {
    "name": "Detective Lisa Thompson",
    "title": "Trauma Support Specialist",
    "specialization": "Critical Incidents & PTSD Support",
    "availability": "24/7 On-Call",
    "email": "l.thompson@killeenpd.gov",
    "phone": "(254) 501-8832",
    "certifications": ["PTSD Specialist", "Critical Incident Stress Management", "Trauma-Informed Care"],
    "bio": "Detective Thompson specializes in supporting officers who have experienced traumatic incidents. Her expertise in PTSD and trauma recovery helps officers process difficult experiences and develop resilience strategies for continued service.",
    "profileImage": "https://pplx-res.cloudinary.com/image/upload/v1751380541/gpt4o_images/pcacidaytobawlggj704.png"
  },
  {
    "name": "Corporal James Wilson",
    "title": "Financial Counselor",
    "specialization": "Financial Planning & Career Guidance",
    "availability": "Tuesday-Thursday, 9am-5pm",
    "email": "j.wilson@killeenpd.gov",
    "phone": "(254) 501-8833",
    "certifications": ["Certified Financial Planner", "Career Counseling Certificate", "Employee Assistance Program Specialist"],
    "bio": "Corporal Wilson provides financial counseling and career guidance to officers and their families. He helps with budgeting, retirement planning, and navigating career transitions within law enforcement.",
    "profileImage": "https://pplx-res.cloudinary.com/image/upload/v1751380591/gpt4o_images/ltsjcgc8v8jwkxbrupb3.png"
  },
  {
    "name": "Officer Amanda Foster",
    "title": "Family Relations Specialist",
    "specialization": "Work-Life Balance & Family Support",
    "availability": "Monday-Friday, 10am-7pm",
    "email": "a.foster@killeenpd.gov",
    "phone": "(254) 501-8834",
    "certifications": ["Family Systems Therapy", "Work-Life Balance Coach", "Mental Health First Aid"],
    "bio": "Officer Foster specializes in helping officers maintain healthy relationships and work-life balance. She provides support for family issues, relationship challenges, and strategies for managing the unique stresses that law enforcement places on families.",
    "profileImage": "https://pplx-res.cloudinary.com/image/upload/v1751380654/gpt4o_images/lcpkmg586nnajuude8mf.png"
  },
  {
    "name": "Lieutenant Robert Martinez",
    "title": "Program Coordinator",
    "specialization": "Administration & Wellness Coordination",
    "availability": "Monday-Friday, 8am-5pm",
    "email": "r.martinez@killeenpd.gov",
    "phone": "(254) 501-8835",
    "certifications": ["Peer Support Program Administration", "Leadership in Crisis Management", "Mental Health First Aid Instructor"],
    "bio": "Lieutenant Martinez oversees the entire peer support program, ensuring quality services and program development. He coordinates training, manages resources, and serves as the liaison between the peer support team and department administration.",
    "profileImage": "https://pplx-res.cloudinary.com/image/upload/v1751380721/gpt4o_images/umqdmt7h3tdydci9t1v5.png"
  }
];

const emergencyResources = [
  {
    "name": "National Suicide & Crisis Lifeline",
    "number": "988",
    "description": "24/7 free and confidential emotional support"
  },
  {
    "name": "SAFE-CALL-NOW",
    "number": "1-800-SAFE-CALL",
    "description": "24/7 confidential help for law enforcement"
  },
  {
    "name": "Police1st",
    "number": "1-800-267-7267",
    "description": "Peer support for law enforcement officers"
  },
  {
    "name": "Texas Crisis Text Line",
    "number": "Text HOME to 741741",
    "description": "Crisis support via text messaging"
  },
  {
    "name": "KPD Emergency Dispatch",
    "number": "911",
    "description": "Immediate emergency response"
  }
];

// DOM Elements
const header = document.getElementById('header');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const teamGrid = document.getElementById('teamGrid');
const emergencyGrid = document.getElementById('emergencyGrid');
const teamModal = document.getElementById('teamModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const connectBtn = document.getElementById('connectBtn');

// Store the scroll position before opening modal
let scrollPosition = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  populateTeamGrid();
  populateEmergencyGrid();
  handleSmoothScrolling();
}

function setupEventListeners() {
  // Header scroll effect
  window.addEventListener('scroll', handleHeaderScroll);
  
  // Mobile navigation
  mobileToggle.addEventListener('click', toggleMobileNav);
  
  // Search functionality
  searchBtn.addEventListener('click', handleSearch);
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
  
  // Modal functionality
  modalBackdrop.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);
  
  // Connect button
  connectBtn.addEventListener('click', function() {
    document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Form submission
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', handleFormSubmission);
  }
  
  // Close mobile nav when clicking on links
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });
}

function handleHeaderScroll() {
  if (window.scrollY > 100) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
}

function toggleMobileNav() {
  navMenu.classList.toggle('show');
}

function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    alert('Please enter a search term.');
    return;
  }
  
  // Simple search functionality
  const searchableElements = document.querySelectorAll('.team__member, .about__card, .emergency__card');
  let found = false;
  
  searchableElements.forEach(element => {
    const text = element.textContent.toLowerCase();
    if (text.includes(query)) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.style.outline = '3px solid #21808d';
      setTimeout(() => {
        element.style.outline = '';
      }, 3000);
      found = true;
      return;
    }
  });
  
  if (!found) {
    alert('No results found for "' + query + '"');
  }
  
  searchInput.value = '';
}

function populateTeamGrid() {
  teamGrid.innerHTML = teamMembers.map(member => `
    <div class="team__member" onclick="openTeamModal('${member.name}')">
      <img src="${member.profileImage}" alt="${member.name}" class="team__image" loading="lazy">
      <h3 class="team__name">${member.name}</h3>
      <p class="team__title">${member.title}</p>
      <p class="team__specialization">${member.specialization}</p>
      <p class="team__availability">${member.availability}</p>
    </div>
  `).join('');
}

function populateEmergencyGrid() {
  emergencyGrid.innerHTML = emergencyResources.map(resource => `
    <div class="emergency__card">
      <h3 class="emergency__name">${resource.name}</h3>
      <p class="emergency__number">${resource.number}</p>
      <p class="emergency__description">${resource.description}</p>
    </div>
  `).join('');
}

function openTeamModal(memberName) {
  const member = teamMembers.find(m => m.name === memberName);
  if (!member) return;
  
  // Store current scroll position
  scrollPosition = window.pageYOffset;
  
  modalBody.innerHTML = `
    <img src="${member.profileImage}" alt="${member.name}" class="modal__image">
    <h2 class="modal__name">${member.name}</h2>
    <p class="modal__title">${member.title}</p>
    
    <div class="modal__section">
      <h3 class="modal__section-title">Specialization</h3>
      <p class="modal__text">${member.specialization}</p>
    </div>
    
    <div class="modal__section">
      <h3 class="modal__section-title">Availability</h3>
      <p class="modal__text">${member.availability}</p>
    </div>
    
    <div class="modal__contact">
      <h3 class="modal__section-title">Contact Information</h3>
      <p class="modal__text"><strong>Email:</strong> ${member.email}</p>
      <p class="modal__text"><strong>Phone:</strong> ${member.phone}</p>
    </div>
    
    <div class="modal__section">
      <h3 class="modal__section-title">About</h3>
      <p class="modal__text">${member.bio}</p>
    </div>
    
    <div class="modal__section">
      <h3 class="modal__section-title">Certifications</h3>
      <ul class="modal__certifications">
        ${member.certifications.map(cert => `<li class="modal__certification">${cert}</li>`).join('')}
      </ul>
    </div>
  `;
  
  teamModal.classList.add('show');
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';
}

function closeModal() {
  teamModal.classList.remove('show');
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  
  // Restore scroll position
  window.scrollTo(0, scrollPosition);
}

function handleSmoothScrolling() {
  // Handle navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function handleFormSubmission(e) {
  e.preventDefault();
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  const name = nameInput.value.trim() || 'Anonymous';
  const email = emailInput.value.trim() || 'Not provided';
  const message = messageInput.value.trim();
  
  // Form validation
  if (!message) {
    alert('Please enter a message before submitting.');
    messageInput.focus();
    return;
  }
  
  if (message.length < 10) {
    alert('Please provide a more detailed message (at least 10 characters).');
    messageInput.focus();
    return;
  }
  
  // Email validation if provided
  if (emailInput.value.trim() && !isValidEmail(emailInput.value.trim())) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }
  
  // Simulate form submission
  alert(`Thank you for reaching out, ${name}. Your message has been received and a peer support specialist will contact you soon. Remember, help is available 24/7.`);
  
  // Reset form
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Emergency contact quick access
function callEmergency(number) {
  if (confirm(`Call ${number}?`)) {
    window.open(`tel:${number}`);
  }
}

// Add emergency contact functionality to emergency cards
document.addEventListener('click', function(e) {
  if (e.target.closest('.emergency__card')) {
    const card = e.target.closest('.emergency__card');
    const number = card.querySelector('.emergency__number').textContent;
    callEmergency(number);
  }
});

// Keyboard accessibility
document.addEventListener('keydown', function(e) {
  // Close modal with Escape key
  if (e.key === 'Escape' && teamModal.classList.contains('show')) {
    closeModal();
  }
  
  // Toggle mobile nav with Enter/Space on mobile toggle
  if ((e.key === 'Enter' || e.key === ' ') && e.target === mobileToggle) {
    e.preventDefault();
    toggleMobileNav();
  }
});

// Focus management for modal
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  });
}

// Apply focus trap when modal opens
const originalOpenTeamModal = openTeamModal;
openTeamModal = function(memberName) {
  originalOpenTeamModal(memberName);
  setTimeout(() => {
    trapFocus(teamModal);
    modalClose.focus();
  }, 100);
};

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    const animatedElements = document.querySelectorAll('.team__member, .about__card, .emergency__card');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });
  }, 500);
});

// Performance optimization - lazy loading for images
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver';
  document.head.appendChild(script);
}

// Error handling for images
document.addEventListener('error', function(e) {
  if (e.target.tagName === 'IMG') {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik03NSA0MEMyOC4zIDQwIDQwIDI4LjMgNDAgNzVTMjguMyAxMTAgNzUgMTEwUzExMCAxMjEuNyAxMTAgNzVTMTIxLjcgNDAgNzUgNDBaTTc1IDk1QzQxLjkgOTUgNTUgODEuMSA1NSA3NVM2OC45IDU1IDc1IDU1Uzk1IDY4LjkgOTUgNzVTODEuMSA5NSA3NSA5NVoiIGZpbGw9IiM5Q0E4QjAiLz4KPC9zdmc+';
    e.target.alt = 'Profile image not available';
  }
}, true);