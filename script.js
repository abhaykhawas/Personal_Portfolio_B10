// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   
    anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
   
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }

    })
})


// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('.nav-links a')

    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >= (sectionTop - 200 )){
            current = section.getAttribute('id')
        }
    })

    navLinks.forEach(link => {
        link.classList.remove('active')
        if(link.getAttribute('href').slice(1) === current) {
            link.classList.add('active')
        }
    })
})




// form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault()
    alert('Thank you for your message!! I will get back to you soon.')
    this.reset()
})

