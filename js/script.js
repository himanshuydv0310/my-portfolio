const typedPhrases = [
  'HTML',
  'CSS',
  'JavaScript',
  'Responsive Design',
  'Beginner Web Development'
];

const typedText = document.querySelector('.typed-text');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const modalClose = document.getElementById('modalClose');
const skillCards = document.querySelectorAll('.skill-card');

let phraseIndex = 0;
let characterIndex = 0;

function typeWriter() {
  if (!typedText) return;
  const currentPhrase = typedPhrases[phraseIndex];

  if (characterIndex < currentPhrase.length) {
    typedText.textContent += currentPhrase.charAt(characterIndex);
    characterIndex += 1;
    setTimeout(typeWriter, 90);
  } else {
    setTimeout(eraseText, 1400);
  }
}

function eraseText() {
  if (!typedText) return;
  if (characterIndex > 0) {
    typedText.textContent = typedText.textContent.slice(0, -1);
    characterIndex -= 1;
    setTimeout(eraseText, 40);
  } else {
    phraseIndex = (phraseIndex + 1) % typedPhrases.length;
    setTimeout(typeWriter, 500);
  }
}

function toggleMenu() {
  navMenu.classList.toggle('show');
}

function closeMenu() {
  navMenu.classList.remove('show');
}

navToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  toggleMenu();
});

navMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    closeMenu();
  }
});

document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    hideModal();
  }
});

function showModal(title, message) {
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modal.classList.add('show');
}

function hideModal() {
  modal.classList.remove('show');
}

function setLoading(isLoading) {
  const submitBtn = document.getElementById('submitBtn');
  if (isLoading) {
    submitBtn.classList.add('loading');
  } else {
    submitBtn.classList.remove('loading');
  }
}

function validateForm(formData) {
  const name = formData.get('from_name').trim();
  const email = formData.get('from_email').trim();
  const subject = formData.get('subject').trim();
  const message = formData.get('message').trim();

  if (!name || !email || !subject || !message) {
    showModal('Incomplete form', 'Please complete all fields before sending your message.');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showModal('Invalid email', 'Please enter a valid email address.');
    return false;
  }

  return true;
}

function animateSkillBars() {
  skillCards.forEach((card) => {
    const bar = card.querySelector('.skill-bar span');
    const value = card.dataset.value || 0;
    bar.style.transform = `scaleX(${value / 100})`;
  });
}

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(this);

  if (!validateForm(formData)) {
    return;
  }

  setLoading(true);

  if (!window.emailjs) {
    setLoading(false);
    showModal('EmailJS unavailable', 'EmailJS is not loaded. Please check the script and try again.');
    return;
  }

  const serviceID = 'YOUR_SERVICE_ID';
  const templateID = 'YOUR_TEMPLATE_ID';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      setLoading(false);
      showModal('Message sent', 'Thank you! I will get back to you soon.');
      contactForm.reset();
    })
    .catch((error) => {
      setLoading(false);
      console.error('EmailJS error:', error);
      showModal('Send failed', 'Something went wrong while sending your message. Please try again later.');
    });
});

modalClose.addEventListener('click', hideModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    hideModal();
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('[data-animate], .reveal').forEach((element) => observer.observe(element));

window.addEventListener('load', () => {
  if (window.emailjs) {
    emailjs.init('YOUR_PUBLIC_KEY');
  }

  animateSkillBars();
  typeWriter();
});
