
   // Initialize AOS
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
      });

      // Initialize Swiper
      const swiper = new Swiper(".testimonials-slider", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

   // Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');

            // Change icon based on menu state
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-menu a').forEach((link) => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }
});

      // Sticky header
      window.addEventListener("scroll", function () {
        const header = document.querySelector(".main-header");
        header.classList.toggle("sticky", window.scrollY > 0);
      });
      // Initialize AOS animations
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
      });

      // Mobile menu toggle functionality
      const mobileMenuBtn = document.getElementById("mobileMenuBtn");
      const navLinks = document.getElementById("navLinks");

      mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        // Change icon based on menu state
        if (navLinks.classList.contains("active")) {
          mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
          mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
      });

      // Close mobile menu when clicking a link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
      });

      // Navbar scroll effect
      window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });





      function learnMore(service) {
            const serviceInfo = {
                sales: "Our Property Sales service includes comprehensive market analysis, exclusive property access, professional photography, virtual tours, and expert negotiation to ensure you get the best deal possible.",
                rentals: "Property Rentals service offers extensive database search, tenant background checks, lease agreement preparation, and ongoing support throughout your rental period.",
                valuation: "Property Valuation provides detailed market analysis using the latest data, comparable sales reports, and future market projections to give you accurate property values.",
                management: "Property Management includes tenant screening, rent collection, maintenance coordination, financial reporting, and 24/7 emergency response for your peace of mind.",
                investment: "Investment Consulting offers strategic advice on property investment, portfolio optimization, market analysis, and risk assessment to maximize your returns.",
                development: "Property Development service covers everything from land acquisition and planning permits to construction management and final sales and marketing."
            };

            alert(`${service.charAt(0).toUpperCase() + service.slice(1)} Service Details:\n\n${serviceInfo[service]}\n\nContact us today to learn more about how we can help you!`);
        }

        // Intersection Observer for animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe all service cards
        document.querySelectorAll('.service-card').forEach(function(card) {
            observer.observe(card);
        });

        // Add stagger animation delay
        document.querySelectorAll('.service-card').forEach(function(card, index) {
            card.style.animationDelay = `${index * 0.1}s`;
        });



 // Enhanced form validation and submission
        class ContactForm {
            constructor() {
                this.form = document.getElementById('contactForm');
                this.submitBtn = document.getElementById('submitBtn');
                this.successMessage = document.getElementById('successMessage');
                this.init();
            }

            init() {
                this.form.addEventListener('submit', (e) => this.handleSubmit(e));
                
                // Real-time validation
                const inputs = this.form.querySelectorAll('input, select, textarea');
                inputs.forEach(input => {
                    input.addEventListener('blur', () => this.validateField(input));
                    input.addEventListener('input', () => this.clearError(input));
                });
            }

            validateField(field) {
                const formGroup = field.closest('.form-group');
                let isValid = true;

                // Remove previous states
                formGroup.classList.remove('error', 'success');

                // Check if required field is empty
                if (field.hasAttribute('required') && !field.value.trim()) {
                    this.showError(formGroup, 'This field is required');
                    isValid = false;
                } else if (field.type === 'email' && field.value) {
                    // Email validation
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(field.value)) {
                        this.showError(formGroup, 'Please enter a valid email address');
                        isValid = false;
                    }
                } else if (field.type === 'tel' && field.value) {
                    // Phone validation
                    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                    if (!phoneRegex.test(field.value.replace(/\s/g, ''))) {
                        this.showError(formGroup, 'Please enter a valid phone number');
                        isValid = false;
                    }
                }

                if (isValid && field.value.trim()) {
                    formGroup.classList.add('success');
                }

                return isValid;
            }

            showError(formGroup, message) {
                formGroup.classList.add('error');
                const errorElement = formGroup.querySelector('.error-message');
                if (errorElement) {
                    errorElement.textContent = message;
                }
            }

            clearError(field) {
                const formGroup = field.closest('.form-group');
                formGroup.classList.remove('error');
            }

            async handleSubmit(e) {
                e.preventDefault();
                
                // Validate all fields
                const inputs = this.form.querySelectorAll('input, select, textarea');
                let isFormValid = true;
                
                inputs.forEach(input => {
                    if (!this.validateField(input)) {
                        isFormValid = false;
                    }
                });

                if (!isFormValid) {
                    return;
                }

                // Show loading state
                this.submitBtn.classList.add('loading');
                this.submitBtn.disabled = true;

                try {
                    // Simulate API call
                    await this.simulateFormSubmission();
                    
                    // Show success message
                    this.showSuccess();
                    
                    // Reset form
                    this.form.reset();
                    
                    // Clear validation states
                    inputs.forEach(input => {
                        input.closest('.form-group').classList.remove('success', 'error');
                    });
                    
                } catch (error) {
                    console.error('Form submission error:', error);
                    alert('There was an error sending your message. Please try again.');
                } finally {
                    // Reset button state
                    this.submitBtn.classList.remove('loading');
                    this.submitBtn.disabled = false;
                }
            }

            simulateFormSubmission() {
                return new Promise((resolve) => {
                    setTimeout(resolve, 2000); // Simulate network delay
                });
            }

            showSuccess() {
                this.successMessage.classList.add('show');
                setTimeout(() => {
                    this.successMessage.classList.remove('show');
                }, 5000);
            }
        }

        // Initialize the contact form
        document.addEventListener('DOMContentLoaded', () => {
            new ContactForm();
        });

        // Add smooth hover effects to contact items
        document.querySelectorAll('.contact-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(10px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });


        


        