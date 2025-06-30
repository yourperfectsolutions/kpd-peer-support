// Team member data with professional headshot photos
const teamMembers = [
  {
    id: 1,
    name: "Sergeant Maria Rodriguez",
    rank: "Sergeant",
    title: "Team Lead",
    specialization: "Crisis Intervention & Family Support",
    description: "Certified in Critical Incident Stress Management with 15+ years experience. Available 24/7 for emergency situations.",
    email: "mrodriguez@kpd.gov",
    phone: "(254) 555-0101",
    availability: "24/7 Emergency Response",
    certifications: ["CISM Certified", "Mental Health First Aid", "Crisis Intervention"],
    photo: "https://pplx-res.cloudinary.com/image/upload/v1751275049/pplx_project_search_images/6d758926cb76f8b0a7a02e1e9923826583745a1d.jpg"
  },
  {
    id: 2,
    name: "Officer David Chen",
    rank: "Officer", 
    title: "Wellness Specialist",
    specialization: "Stress Management & Substance Abuse Support",
    description: "Mental Health First Aid certified. Specializes in wellness programs and substance abuse support.",
    email: "dchen@kpd.gov",
    phone: "(254) 555-0102",
    availability: "Monday-Friday 8AM-6PM",
    certifications: ["Mental Health First Aid", "Substance Abuse Counseling", "Wellness Coaching"],
    photo: "https://pplx-res.cloudinary.com/image/upload/v1751273451/pplx_project_search_images/9ce788623d6599fee5335e9210f68800b5fa0550.jpg"
  },
  {
    id: 3,
    name: "Detective Lisa Thompson",
    rank: "Detective",
    title: "Trauma Support Specialist", 
    specialization: "Critical Incidents & PTSD Support",
    description: "Trauma counseling specialist with expertise in officer-involved incidents and PTSD support.",
    email: "lthompson@kpd.gov",
    phone: "(254) 555-0103",
    availability: "Tuesday-Saturday 10AM-8PM",
    certifications: ["Trauma Counseling", "PTSD Support", "Critical Incident Response"],
    photo: "https://pplx-res.cloudinary.com/image/upload/v1750687030/pplx_project_search_images/90e4e5756a53c1f4cc4abb50012b949580fa6fbb.jpg"
  },
  {
    id: 4,
    name: "Corporal James Wilson",
    rank: "Corporal",
    title: "Financial Counselor",
    specialization: "Financial Planning & Career Guidance", 
    description: "Provides confidential financial counseling and retirement planning for officers and families.",
    email: "jwilson@kpd.gov",
    phone: "(254) 555-0104",
    availability: "Monday-Thursday 9AM-5PM",
    certifications: ["Financial Planning", "Career Counseling", "Retirement Planning"],
    photo: "https://pplx-res.cloudinary.com/image/upload/v1751275049/pplx_project_search_images/702827b85ec6b80a6a1ea754bf5de474d5b49c2b.jpg"
  },
  {
    id: 5,
    name: "Officer Amanda Foster",
    rank: "Officer",
    title: "Family Relations Specialist",
    specialization: "Work-Life Balance & Family Support",
    description: "Specializes in family counseling and work-life balance for law enforcement families.",
    email: "afoster@kpd.gov", 
    phone: "(254) 555-0105",
    availability: "Monday-Friday 7AM-3PM",
    certifications: ["Family Counseling", "Work-Life Balance", "Marriage & Family Therapy"],
    photo: "https://pplx-res.cloudinary.com/image/upload/v1751275048/pplx_project_search_images/bd0b18296fb9d925d1aaf656e7e3c9ccc9a1ce0c.jpg"
  },
  {
    id: 6,
    name: "Lieutenant Robert Martinez", 
    rank: "Lieutenant",
    title: "Program Coordinator",
    specialization: "Program Administration & Wellness Coordination",
    description: "Oversees peer support program administration and coordinates wellness initiatives.",
    email: "rmartinez@kpd.gov",
    phone: "(254) 555-0106", 
    availability: "Monday-Friday 8AM-4PM",
    certifications: ["Program Management", "Wellness Coordination", "Administrative Leadership"],
    photo: "https://pplx-res.cloudinary.com/image/upload/v1751275048/pplx_project_search_images/947e4a62675f83998c3f7e7ee426e4d0f1dc2c82.jpg"
  }
];

// DOM elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const teamGrid = document.getElementById('teamGrid');
const modal = document.getElementById('teamModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  renderTeamMembers();
  initializeModal();
  initializeHeroCTA();
  initializeSearch();
  initializeScrollToTop();
});

// Navigation functionality
function initializeNavigation() {
  // Mobile menu toggle
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      navMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = 70;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu after clicking
      if (navMenu) {
        navMenu.classList.remove('active');
      }
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove('active');
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (navMenu && mobileMenuBtn && 
        !navMenu.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
      navMenu.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
    }
  });

  // Close mobile menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
    }
  });
}

// Render team member cards
function renderTeamMembers() {
  if (!teamGrid) return;
  
  teamGrid.innerHTML = '';
  
  teamMembers.forEach(member => {
    const teamCard = createTeamCard(member);
    teamGrid.appendChild(teamCard);
  });
}

// Create individual team member card
function createTeamCard(member) {
  const card = document.createElement('div');
  card.className = 'team-card';
  card.setAttribute('data-member-id', member.id);
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `View details for ${member.name}`);
  
  card.innerHTML = `
    <img src="${member.photo}" alt="${member.name} - ${member.title}" class="team-photo" loading="lazy" onerror="handleImageError(this)">
    <h3 class="team-name">${member.name}</h3>
    <p class="team-title">${member.rank} • ${member.title}</p>
    <p class="team-specialization">${member.specialization}</p>
    <p class="team-description">${member.description}</p>
    <button class="team-contact-btn">View Contact Details</button>
    <p class="team-availability">Available: ${member.availability}</p>
  `;
  
  // Add click event listener
  card.addEventListener('click', function() {
    openTeamModal(member);
  });
  
  // Add keyboard support
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openTeamModal(member);
    }
  });
  
  return card;
}

// Modal functionality
function initializeModal() {
  if (!modal || !modalClose) return;
  
  // Close modal when clicking the X button
  modalClose.addEventListener('click', closeModal);
  
  // Close modal when clicking outside the modal content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });
}

// Open team member modal
function openTeamModal(member) {
  if (!modal || !modalBody) return;
  
  modalBody.innerHTML = createModalContent(member);
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  
  // Focus management for accessibility
  if (modalClose) {
    modalClose.focus();
  }
}

// Close modal
function closeModal() {
  if (!modal) return;
  
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Create modal content
function createModalContent(member) {
  return `
    <div style="text-align: center;">
      <img src="${member.photo}" alt="${member.name}" class="modal-team-photo" onerror="handleImageError(this)">
      <h2 class="modal-team-name">${member.name}</h2>
      <p class="modal-team-title">${member.rank} • ${member.title}</p>
      <div class="modal-specialization">${member.specialization}</div>
    </div>
    
    <p class="modal-description">${member.description}</p>
    
    <div class="modal-contact-info">
      <div class="contact-item">
        <strong>Email:</strong>
        <a href="mailto:${member.email}" target="_blank">${member.email}</a>
      </div>
      <div class="contact-item">
        <strong>Phone:</strong>
        <a href="tel:${member.phone}">${member.phone}</a>
      </div>
      <div class="contact-item">
        <strong>Available:</strong>
        <span>${member.availability}</span>
      </div>
    </div>
    
    <div class="modal-certifications">
      <h4>Certifications & Specializations</h4>
      <div class="certifications-list">
        ${member.certifications.map(cert => `<span class="certification-tag">${cert}</span>`).join('')}
      </div>
    </div>
  `;
}

// Hero CTA functionality
function initializeHeroCTA() {
  const heroCTA = document.querySelector('.hero-cta');
  
  if (heroCTA) {
    heroCTA.addEventListener('click', function() {
      const teamSection = document.getElementById('team');
      if (teamSection) {
        const headerHeight = 70;
        const targetPosition = teamSection.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
}

// Search functionality
function initializeSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-btn');
  
  if (searchInput && searchBtn) {
    // Search on button click
    searchBtn.addEventListener('click', performSearch);
    
    // Search on Enter key
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
    
    // Live search as user types (debounced)
    let searchTimeout;
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(performSearch, 300);
    });
  }
}

// Perform search
function performSearch() {
  const searchInput = document.querySelector('.search-input');
  if (!searchInput) return;
  
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  if (!searchTerm) {
    renderTeamMembers(); // Show all members if search is empty
    return;
  }
  
  const filteredMembers = teamMembers.filter(member => {
    return member.name.toLowerCase().includes(searchTerm) ||
           member.title.toLowerCase().includes(searchTerm) ||
           member.specialization.toLowerCase().includes(searchTerm) ||
           member.description.toLowerCase().includes(searchTerm) ||
           member.certifications.some(cert => cert.toLowerCase().includes(searchTerm));
  });
  
  renderFilteredTeamMembers(filteredMembers);
}

// Render filtered team members
function renderFilteredTeamMembers(filteredMembers) {
  if (!teamGrid) return;
  
  teamGrid.innerHTML = '';
  
  if (filteredMembers.length === 0) {
    teamGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
        <h3>No team members found</h3>
        <p>Try adjusting your search terms or <button onclick="clearSearch()" style="color: var(--color-primary); background: none; border: none; cursor: pointer; text-decoration: underline;">view all team members</button></p>
      </div>
    `;
    return;
  }
  
  filteredMembers.forEach(member => {
    const teamCard = createTeamCard(member);
    teamGrid.appendChild(teamCard);
  });
}

// Clear search function
function clearSearch() {
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.value = '';
  }
  renderTeamMembers();
}

// Handle image loading errors
function handleImageError(img) {
  // Create a professional placeholder SVG for police officers
  const placeholderSVG = `data:image/svg+xml;base64,${btoa(`
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="150" fill="#21808D"/>
      <circle cx="75" cy="55" r="20" fill="white" opacity="0.8"/>
      <path d="M45 95c0-16.5 13.5-30 30-30s30 13.5 30 30v20H45V95z" fill="white" opacity="0.8"/>
      <rect x="65" y="25" width="20" height="8" rx="4" fill="white" opacity="0.6"/>
      <text x="75" y="130" text-anchor="middle" fill="white" font-size="10" font-family="Arial">OFFICER</text>
    </svg>
  `)}`;
  
  img.src = placeholderSVG;
  img.alt = 'Police Officer Profile';
}

// Initialize scroll to top functionality
function initializeScrollToTop() {
  // Create scroll to top button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.className = 'scroll-to-top';
  scrollToTopBtn.innerHTML = '↑';
  scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollToTopBtn);
  
  // Show/hide scroll to top button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });
  
  // Scroll to top when clicked
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Intersection Observer for scroll animations
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

// Apply scroll animations to team cards
function applyScrollAnimations() {
  setTimeout(() => {
    document.querySelectorAll('.team-card').forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });
  }, 100);
}

// Active navigation highlighting
function updateActiveNavigation() {
  const sections = ['home', 'about', 'services', 'team', 'resources', 'contact', 'emergency'];
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = 'home';
  
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = sectionId;
      }
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Performance optimization: debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounced scroll handler
window.addEventListener('scroll', debounce(updateActiveNavigation, 10));

// Initialize scroll animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  applyScrollAnimations();
});

// Re-apply animations when team members are re-rendered
const originalRenderTeamMembers = renderTeamMembers;
renderTeamMembers = function() {
  originalRenderTeamMembers();
  applyScrollAnimations();
};

// Accessibility improvements
document.addEventListener('keydown', function(e) {
  // Allow Enter key to trigger clicks on focusable elements
  if (e.key === 'Enter') {
    const activeElement = document.activeElement;
    if (activeElement && activeElement.classList.contains('team-card')) {
      activeElement.click();
    }
  }
});

// Error handling for missing elements
function safeElementAction(selector, action) {
  const element = document.querySelector(selector);
  if (element && typeof action === 'function') {
    action(element);
  }
}

// Improved image loading with retry mechanism
function loadImageWithRetry(img, retryCount = 3) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    
    function attemptLoad() {
      attempts++;
      
      const tempImg = new Image();
      tempImg.onload = () => {
        img.src = tempImg.src;
        resolve();
      };
      
      tempImg.onerror = () => {
        if (attempts < retryCount) {
          setTimeout(attemptLoad, 1000 * attempts); // Exponential backoff
        } else {
          handleImageError(img);
          resolve(); // Resolve even on failure to prevent hanging
        }
      };
      
      tempImg.src = img.getAttribute('data-src') || img.src;
    }
    
    attemptLoad();
  });
}

// Enhanced error handling
window.addEventListener('error', function(e) {
  console.error('Application error:', e.error);
  // Graceful degradation - ensure basic functionality still works
});

// Ensure proper cleanup on page unload
window.addEventListener('beforeunload', function() {
  // Clean up any ongoing operations
  document.body.style.overflow = 'auto';
  if (modal) {
    modal.style.display = 'none';
  }
});