document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true
    });

    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#FFD700"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#FFD700",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    // Service tabs functionality
    const serviceTabs = document.querySelectorAll('.service-tab');
    
    serviceTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            serviceTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Here you would typically filter services based on the category
            // For now we'll just log the category
            const category = this.getAttribute('data-category');
            console.log(`Selected category: ${category}`);
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add hover effect to pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.3)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.boxShadow = 'none';
            } else {
                this.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
            }
        });
    });
    
    // Parallax effect for background elements
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const circle1 = document.querySelector('.circle-1');
        const circle2 = document.querySelector('.circle-2');
        const line1 = document.querySelector('.line-1');
        const line2 = document.querySelector('.line-2');
        
        if (circle1) circle1.style.transform = `translateY(${scrollPosition * 0.2}px) translateX(${scrollPosition * 0.1}px)`;
        if (circle2) circle2.style.transform = `translateY(${scrollPosition * 0.3}px) translateX(${-scrollPosition * 0.1}px)`;
        if (line1) line1.style.transform = `translateX(${scrollPosition * 0.15}px)`;
        if (line2) line2.style.transform = `translateX(${-scrollPosition * 0.15}px)`;
    });
    
    // Text animation for hero section
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const letters = heroTitle.textContent.split('');
        heroTitle.textContent = '';
        
        letters.forEach((letter, i) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${i * 0.05}s`;
            heroTitle.appendChild(span);
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
  // Select elements
  const navbar = document.querySelector('.navbar');
  const toggleBtn = document.querySelector('.navbar-toggle');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburger = document.querySelector('.hamburger');

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  toggleBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    
    // Toggle body overflow
    if (mobileOverlay.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  // Close mobile menu when link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileOverlay.classList.remove('active');
      toggleBtn.classList.remove('active');
      document.body.style.overflow = 'auto';
      
      // Update active link
      mobileLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Update active nav link on scroll
  window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (section) {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          link.classList.add('active');
          
          // Also update mobile link
          const mobileLink = document.querySelector(`.mobile-link[href="${link.getAttribute('href')}"]`);
          if (mobileLink) {
            mobileLinks.forEach(l => l.classList.remove('active'));
            mobileLink.classList.add('active');
          }
        } else {
          link.classList.remove('active');
        }
      }
    });
  });

  // Smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
/* ==================== */
/* INICIALIZAÇÃO DO HERO */
/* ==================== */
document.addEventListener('DOMContentLoaded', function() {
  // Efeito de digitação no subtítulo (opcional)
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < originalText.length) {
        heroSubtitle.textContent += originalText.charAt(i);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);
  }

  // Efeito de pulso contínuo no botão
  const consultBtn = document.querySelector('.btn-consult');
  if (consultBtn) {
    setInterval(() => {
      consultBtn.classList.toggle('pulse-effect');
    }, 3000);
    
    consultBtn.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#contact') {
        e.preventDefault();
        
        // Animação de clique
        this.classList.add('clicked');
        
        // Rolar suavemente para a seção de contato
        setTimeout(() => {
          const contactSection = document.querySelector('#contact');
          if (contactSection) {
            window.scrollTo({
              top: contactSection.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }, 300);
        
        // Resetar animação
        setTimeout(() => {
          this.classList.remove('clicked');
        }, 1000);
      }
    });
  }

  // Inicializar partículas (se estiver usando particles.js)
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      /* configuração das partículas */
    });
  }
});document.addEventListener('DOMContentLoaded', function() {
  // Efeito de partículas douradas
  class GoldParticle {
    constructor(canvas) {
      this.canvas = canvas;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.color = `rgba(212, 175, 55, ${Math.random() * 0.5 + 0.3})`;
      this.angle = 0;
      this.va = Math.random() * 0.1 - 0.05;
    }
    
    update() {
      this.angle += this.va;
      this.x += this.speedX + Math.cos(this.angle) * 0.5;
      this.y += this.speedY + Math.sin(this.angle) * 0.5;
      
      if (this.x > this.canvas.width || this.x < 0) this.speedX *= -1;
      if (this.y > this.canvas.height || this.y < 0) this.speedY *= -1;
    }
    
    draw(ctx) {
      ctx.save();
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }

  function initGoldParticles() {
    const container = document.querySelector('.gold-particle-network');
    if (!container) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    container.appendChild(canvas);
    
    function resizeCanvas() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const particles = [];
    const particleCount = Math.floor(canvas.width * canvas.height / 5000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new GoldParticle(canvas));
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
  }

  initGoldParticles();

  // Efeito de hover no botão de CTA
  const ctaBtn = document.querySelector('.gold-cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('mouseenter', function() {
      this.style.backgroundPosition = '100% 0';
    });
    
    ctaBtn.addEventListener('mouseleave', function() {
      this.style.backgroundPosition = '0 0';
    });
  }

  // Efeito de scroll suave para o indicador
  const scrollIndicator = document.querySelector('.luxury-scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  // Animação ao scroll
  function animateOnScroll() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (cardPosition < screenPosition) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }

  // Inicializa estado para animação
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
  });

  // Ativa animação quando carrega
  setTimeout(animateOnScroll, 300);
  
  // Ativa animação ao scrollar
  window.addEventListener('scroll', animateOnScroll);

  // Efeito hover nos cards
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.gold-icon');
      icon.style.transform = 'scale(1.1)';
      icon.style.textShadow = '0 0 15px rgba(212, 175, 55, 0.6)';
      
      const border = this.querySelector('.card-border');
      border.style.animation = 'borderShine 2s infinite linear';
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.gold-icon');
      icon.style.transform = 'scale(1)';
      icon.style.textShadow = 'none';
      
      const border = this.querySelector('.card-border');
      border.style.animation = 'borderPulse 4s infinite linear';
    });
  });

  // Smooth scroll para links
  document.querySelectorAll('.service-cta').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
  // sobre

  document.addEventListener('DOMContentLoaded', function() {
  // Animação das palavras alternadas
  const words = document.querySelectorAll('.word');
  if (words.length > 0) {
    setInterval(() => {
      const currentWord = document.querySelector('.word:not([style*="opacity: 0"])') || document.querySelector('.word:first-child');
      const nextWord = currentWord.nextElementSibling || document.querySelector('.word:first-child');
      
      currentWord.style.opacity = '0';
      currentWord.style.transform = 'translateY(-100%)';
      
      nextWord.style.opacity = '1';
      nextWord.style.transform = 'translateY(0)';
    }, 3000);
  }

  // Animação da timeline ao scroll
  function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (itemPosition < screenPosition) {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }
    });
  }

  // Inicializa estado para animação
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transition = 'all 0.6s ease-out';
    
    if (index % 2 === 0) {
      item.style.transform = 'translateX(-50px)';
    } else {
      item.style.transform = 'translateX(50px)';
    }
  });

  // Ativa animação quando carrega
  setTimeout(animateTimeline, 300);
  
  // Ativa animação ao scrollar
  window.addEventListener('scroll', animateTimeline);

  // Efeito hover nos itens da timeline
  timelineItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.timeline-icon');
      icon.style.background = 'var(--luxury-gold)';
      icon.style.color = 'var(--luxury-black)';
      icon.style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.timeline-icon');
      icon.style.background = 'rgba(212, 175, 55, 0.1)';
      icon.style.color = 'var(--luxury-gold)';
      icon.style.transform = 'scale(1)';
    });
  });

  // Inicializa partículas douradas
  function initGoldParticles() {
    const container = document.querySelector('.gold-particles');
    if (!container) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    container.appendChild(canvas);
    
    function resizeCanvas() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.color = `hsla(46, 70%, 50%, ${Math.random() * 0.3 + 0.1})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }
    
    const particles = [];
    const particleCount = Math.floor(canvas.width * canvas.height / 5000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
  }

  initGoldParticles();
});
//contato
document.addEventListener('DOMContentLoaded', function() {
  // Animação das palavras alternadas
  const words = document.querySelectorAll('.dynamic-word .word');
  if (words.length > 0) {
    setInterval(() => {
      const currentWord = document.querySelector('.dynamic-word .word:not([style*="opacity: 0"])') || document.querySelector('.dynamic-word .word:first-child');
      const nextWord = currentWord.nextElementSibling || document.querySelector('.dynamic-word .word:first-child');
      
      currentWord.style.opacity = '0';
      currentWord.style.transform = 'translateY(-100%)';
      
      nextWord.style.opacity = '1';
      nextWord.style.transform = 'translateY(0)';
    }, 3000);
  }

  // Interatividade do mapa
  const officeMarkers = document.querySelectorAll('.office-marker');
  const officeListItems = document.querySelectorAll('.office-list li');
  
  officeMarkers.forEach(marker => {
    marker.addEventListener('click', function() {
      const location = this.getAttribute('data-location');
      
      // Ativar item correspondente na lista
      officeListItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-location') === location) {
          item.classList.add('active');
        }
      });
      
      // Efeito visual no marcador
      this.querySelector('.marker-pulse').style.animation = 'none';
      void this.querySelector('.marker-pulse').offsetWidth; // Trigger reflow
      this.querySelector('.marker-pulse').style.animation = 'pulse 2s infinite';
    });
  });
  
  officeListItems.forEach(item => {
    item.addEventListener('click', function() {
      const location = this.getAttribute('data-location');
      
      // Ativar item na lista
      officeListItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      
      // Efeito visual no marcador correspondente
      const marker = document.querySelector(`.office-marker[data-location="${location}"]`);
      if (marker) {
        marker.querySelector('.marker-pulse').style.animation = 'none';
        void marker.querySelector('.marker-pulse').offsetWidth; // Trigger reflow
        marker.querySelector('.marker-pulse').style.animation = 'pulse 2s infinite';
      }
    });
  });

  // Animação dos elementos ao scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(el => {
      const elementPosition = el.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }

  // Inicializa estado para animação
  const animatedElements = document.querySelectorAll('[data-aos]');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'all 0.6s ease-out';
    
    if (el.getAttribute('data-aos').includes('fade-left')) {
      el.style.transform = 'translateX(-50px)';
    } else if (el.getAttribute('data-aos').includes('fade-right')) {
      el.style.transform = 'translateX(50px)';
    } else {
      el.style.transform = 'translateY(30px)';
    }
  });

  // Ativa animação quando carrega
  setTimeout(animateOnScroll, 300);
  
  // Ativa animação ao scrollar
  window.addEventListener('scroll', animateOnScroll);

  // Validação do formulário
  const contactForm = document.getElementById('luxuryContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulação de envio
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.querySelector('.btn-text').textContent;
      
      submitBtn.querySelector('.btn-text').textContent = 'Enviando...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.querySelector('.btn-text').textContent = 'Mensagem Enviada!';
        submitBtn.querySelector('.btn-icon').innerHTML = '<i class="fas fa-check"></i>';
        
        // Reset após 3 segundos
        setTimeout(() => {
          submitBtn.querySelector('.btn-text').textContent = originalText;
          submitBtn.querySelector('.btn-icon').innerHTML = '<i class="fas fa-paper-plane"></i>';
          submitBtn.disabled = false;
          contactForm.reset();
        }, 3000);
      }, 1500);
    });
  }

  // Inicializa partículas douradas
  function initGoldParticles() {
    const container = document.querySelector('.gold-particles');
    if (!container) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    container.appendChild(canvas);
    
    function resizeCanvas() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `hsla(46, 70%, 50%, ${Math.random() * 0.3 + 0.1})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }
    
    const particles = [];
    const particleCount = Math.floor(canvas.width * canvas.height / 5000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
  }

  initGoldParticles();
});document.addEventListener('DOMContentLoaded', function() {
    // Efeito de scroll suave para os CTAs
    document.querySelectorAll('.card-cta, .services-cta').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação dos cards ao aparecer na tela
    const animateCards = () => {
        const cards = document.querySelectorAll('.service-card');
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `all 0.5s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    };

    animateCards();

    // Efeito de hover dinâmico
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;

            card.querySelector('.card-inner').style.transform = `
                rotateX(${angleX}deg)
                rotateY(${angleY}deg)
                translateZ(10px)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.querySelector('.card-inner').style.transform = 'rotateX(0) rotateY(0)';
        });
    });
});document.addEventListener('DOMContentLoaded', function() {
  const particlesContainer = document.querySelector('.particles');
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Posição e tamanho aleatórios
    const size = Math.random() * 3 + 1;
    const posX = Math.random() * 100;
    const duration = Math.random() * 10 + 5;
    const delay = Math.random() * 5;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    particlesContainer.appendChild(particle);
  }
});<script>
// Animação de caracteres
document.querySelectorAll('.char').forEach((char, index) => {
  char.style.animationDelay = `${index * 0.05}s`;
});

// Ativar link atual
const currentPath = window.location.pathname.split('/')[1] || 'home';
document.querySelector(`[data-active="${currentPath}"]`).classList.add('active');

// Menu mobile (se necessário)
const menuButton = document.querySelector('.mobile-menu-button');
const navList = document.querySelector('.nav-list');

menuButton.addEventListener('click', () => {
  navList.classList.toggle('active');
  menuButton.classList.toggle('active');
});
</script>