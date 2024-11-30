// Dynamic alert for contact form submission
document.querySelector("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = e.target.name.value;
    alert(`Thank you, ${name}! Your message has been received.`);
    e.target.reset();
  });
  