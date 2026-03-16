// counter


document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 50; // Increased for slower animation

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        const increment = target / speed;

        const updateCounter = () => {
            if (count < target) {
                count += increment;
                counter.innerText = Math.floor(count) + '+';
                setTimeout(updateCounter, 20); // Increased delay between updates
            } else {
                counter.innerText = target + '+';
            }
        };

        updateCounter();
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});


function redirectToWhatsApp() {
    var phoneNumber = "+917096453655"; // Replace with your WhatsApp number
    var message = ""; // Optional: Replace with your default message
    var url =
      "https://api.whatsapp.com/send?phone=" +
      encodeURIComponent(phoneNumber) +
      "&text=" +
      encodeURIComponent(message);
    window.open(url, "_blank");
  }
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/66e6aabdea492f34bc13f5b3/1i7qgltej';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();