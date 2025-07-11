// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}



// Typing animation for code
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const codeElement = document.querySelector('.typing-code');
    if (codeElement) {
        const originalText = codeElement.innerHTML;
        setTimeout(() => {
            typeWriter(codeElement, originalText, 30);
        }, 1000);
    }
});

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));
});

// 3D tilt effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
});

// Skill bars animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Trigger skill bars animation when skills section is visible
const skillsSection = document.getElementById('skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

// Particle system for background
class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;
    }
    
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(35, 134, 54, ${this.opacity})`;
        this.ctx.fill();
    }
}

// Initialize particle system
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 50;
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas));
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', initParticles);

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show success message (you can replace this with actual form submission)
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#238636' : '#58a6ff'};
        color: white;
        border-radius: 8px;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Cursor trail effect
class CursorTrail {
    constructor() {
        this.points = [];
        this.maxPoints = 20;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        `;
        
        document.body.appendChild(this.canvas);
        this.resize();
        this.bindEvents();
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        document.addEventListener('mousemove', (e) => {
            this.points.push({
                x: e.clientX,
                y: e.clientY,
                timestamp: Date.now()
            });
            
            if (this.points.length > this.maxPoints) {
                this.points.shift();
            }
        });
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.points.forEach((point, index) => {
            const age = Date.now() - point.timestamp;
            const opacity = Math.max(0, 1 - age / 1000);
            const size = Math.max(0, 3 - age / 200);
            
            this.ctx.beginPath();
            this.ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(35, 134, 54, ${opacity})`;
            this.ctx.fill();
        });
        
        // Remove old points
        this.points = this.points.filter(point => Date.now() - point.timestamp < 1000);
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize cursor trail (optional - can be disabled for performance)
// new CursorTrail();

// Smooth reveal animations for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initialize reveal animations
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state for sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial reveal
    revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = counter.textContent;
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when about section is visible
const aboutSection = document.getElementById('about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
});

// Preloader
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(20px)';
    document.body.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Add some interactive hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
});

// Add CSS custom properties for button hover effects
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .btn::before {
        content: '';
        position: absolute;
        top: var(--y, 50%);
        left: var(--x, 50%);
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.3s ease, height 0.3s ease;
    }
    
    .btn:hover::before {
        width: 300px;
        height: 300px;
    }
`;
document.head.appendChild(style);

// --- Minimal Loader, Intro, and Cosmos ---
window.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const introScreen = document.getElementById('intro-screen');
  const mainContent = document.getElementById('main-content');
  const exploreBtn = document.getElementById('explore-btn');
  const typingText = document.getElementById('typing-text');
  const canvas = document.getElementById('stars-canvas');

  // Debug: log missing elements
  if (!loadingScreen) console.log('Missing: #loading-screen');
  if (!introScreen) console.log('Missing: #intro-screen');
  if (!mainContent) console.log('Missing: #main-content');
  if (!exploreBtn) console.log('Missing: #explore-btn');
  if (!typingText) console.log('Missing: #typing-text');
  if (!canvas) console.log('Missing: #stars-canvas');

  // Fallback: if any critical element is missing, show main content
  if (!loadingScreen || !introScreen || !mainContent || !exploreBtn || !typingText || !canvas) {
    if (mainContent) {
      mainContent.style.display = 'flex';
      mainContent.style.opacity = '1';
      revealSections();
    }
    if (loadingScreen) loadingScreen.style.display = 'none';
    if (introScreen) introScreen.style.display = 'none';
    return;
  }

  // Show loading, then intro
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      introScreen.style.opacity = '1';
      introScreen.style.pointerEvents = 'auto';
    }, 400);
  }, 1200);

  // --- Typing Effect ---
  const message = 'Hello, I am Dilyorbek!';
  let idx = 0;
  function type() {
    if (idx <= message.length) {
      typingText.textContent = message.slice(0, idx);
      idx++;
      setTimeout(type, 80);
    }
  }
  setTimeout(type, 800);

  // --- Minimal Cosmos/Stars Animation ---
  const ctx = canvas.getContext('2d');
  let w, h, stars;
  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    stars = Array.from({length: Math.floor(w * 0.12)}, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 0.7 + 0.2,
      o: Math.random() * 0.4 + 0.3,
      s: Math.random() * 0.2 + 0.05
    }));
  }
  function drawStars() {
    ctx.clearRect(0, 0, w, h);
    for (const star of stars) {
      ctx.globalAlpha = star.o;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.shadowColor = '#fff';
      ctx.shadowBlur = 2;
      ctx.fill();
      ctx.shadowBlur = 0;
      if (Math.random() < 0.008) star.o = Math.random() * 0.4 + 0.3;
    }
    ctx.globalAlpha = 1;
  }
  function animateStars() {
    for (const star of stars) {
      star.x += star.s * 0.1;
      if (star.x > w) star.x = 0;
    }
    drawStars();
    requestAnimationFrame(animateStars);
  }
  window.addEventListener('resize', resize);
  resize();
  animateStars();

  // --- Explore Button ---
  exploreBtn.addEventListener('click', () => {
    introScreen.style.opacity = '0';
    introScreen.style.pointerEvents = 'none';
    setTimeout(() => {
      introScreen.style.display = 'none';
      mainContent.style.display = 'flex';
      setTimeout(() => {
        mainContent.style.opacity = '1';
        revealSections();
      }, 10);
    }, 400);
  });

  // Initial state
  introScreen.style.opacity = '0';
  introScreen.style.pointerEvents = 'none';
  mainContent.style.opacity = '0';

  // Fallback: if something goes wrong, always show main content after 6 seconds
  setTimeout(() => {
    if (mainContent.style.opacity === '0') {
      if (introScreen) introScreen.style.display = 'none';
      if (loadingScreen) loadingScreen.style.display = 'none';
      mainContent.style.display = 'flex';
      mainContent.style.opacity = '1';
      revealSections();
      console.log('Fallback: showing main content after timeout');
    }
  }, 6000);

  // Animate in all [data-animate] sections with a staggered delay
  function revealSections() {
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section, i) => {
      setTimeout(() => {
        section.classList.add('visible');
      }, 200 + i * 200);
    });
  }
}); 