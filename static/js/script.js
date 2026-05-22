document.addEventListener('DOMContentLoaded', () => {

    // Fetch Navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');

    if (navbarPlaceholder) {
        fetch('navbar.html')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(data => {
                navbarPlaceholder.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading navbar:', error);
                navbarPlaceholder.innerHTML =
                    '<p style="color:red; text-align:center; padding: 20px;">Could not load navbar (CORS blocks local fetch). Please run via Live Server.</p>';
            });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            console.log('Form Submitted:', data);

            alert('Thank you! Your message has been sent.');

            this.reset();
        });
    }

    // Smooth Scroll
    window.scrollToSection = function (sectionId) {

        const targetSection = document.getElementById(sectionId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

        } else {

            window.location.href = 'main.html#' + sectionId;
        }
    };
});


// PRELOADER
document.addEventListener("DOMContentLoaded", () => {

    const counterEl = document.getElementById("loader-counter");

    if (counterEl) {

        let startTime = null;

        const duration = 1800;

        document.body.style.overflow = "hidden";

        function updateLoader(timestamp) {

            if (!startTime) startTime = timestamp;

            const progress = timestamp - startTime;

            let count = Math.min((progress / duration) * 100, 100);

            let displayCount = Math.max(1, Math.floor(count));

            counterEl.innerText = `Loading : ${displayCount}%`;

            if (count < 100) {

                requestAnimationFrame(updateLoader);

            } else {

                const preloaderSection = document.getElementById("preloader");

                if (preloaderSection) {

                    preloaderSection.style.opacity = '0';

                    setTimeout(() => {

                        preloaderSection.style.display = 'none';

                        document.body.style.overflow = "";

                    }, 700);

                } else {

                    document.body.style.overflow = "";
                }
            }
        }

        requestAnimationFrame(updateLoader);
    }
});




// GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.config({
    force3D: true
});


// PANELS
let panels = gsap.utils.toArray(".panel");

if (panels.length > 0) {

    panels.forEach((panel, i) => {

        ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            pin: true,
            pinSpacing: false
        });

        if (i < panels.length - 1) {

            let stConfig = {
                trigger: panels[i + 1],
                start: "top bottom",
                end: "top top",
                scrub: 0.3
            };

            // OUTGOING PANEL
            gsap.to(panel, {
                filter: "blur(6px)",
                scale: 0.98,
                opacity: 0.75,
                ease: "none",
                scrollTrigger: stConfig
            });

            // LEFT CONTENT
            const prevLeft =
                panel.querySelector('.w-2\\/5, .w-1\\/2:first-child');

            // RIGHT CONTENT
            const prevRight =
                panel.querySelector('.w-3\\/5, .w-1\\/2:last-child');

            if (prevLeft) {

                gsap.to(prevLeft, {
                    y: -60,
                    rotationZ: -2,
                    rotationY: 5,
                    ease: "none",
                    scrollTrigger: stConfig
                });
            }

            if (prevRight) {

                gsap.to(prevRight, {
                    y: -90,
                    rotationZ: 2,
                    rotationY: -5,
                    ease: "none",
                    scrollTrigger: stConfig
                });
            }

            // INCOMING PANEL
            const nextPanel = panels[i + 1];

            const nextLeft =
                nextPanel.querySelector('.w-2\\/5, .w-1\\/2:first-child');

            const nextRight =
                nextPanel.querySelector('.w-3\\/5, .w-1\\/2:last-child');

            if (nextLeft) {

                gsap.fromTo(
                    nextLeft,
                    {
                        y: 60,
                        rotationZ: 2,
                        opacity: 0
                    },
                    {
                        y: 0,
                        rotationZ: 0,
                        opacity: 1,
                        ease: "none",
                        scrollTrigger: stConfig
                    }
                );
            }

            if (nextRight) {

                gsap.fromTo(
                    nextRight,
                    {
                        y: 90,
                        rotationZ: -2,
                        opacity: 0
                    },
                    {
                        y: 0,
                        rotationZ: 0,
                        opacity: 1,
                        ease: "none",
                        scrollTrigger: stConfig
                    }
                );
            }
        }
    });
}



// SERVICES AUTO ROTATION
const titles = gsap.utils.toArray(".service-title");
const imgs = gsap.utils.toArray(".service-img");

if (titles.length > 0 && imgs.length > 0) {

    let currentIndex = 0;

    gsap.set(titles, {
        opacity: 0.3,
        color: "white"
    });

    gsap.set(imgs, {
        opacity: 0,
        scale: 0.96
    });

    gsap.set(titles[0], {
        opacity: 1,
        color: "#e31e24"
    });

    gsap.set(imgs[0], {
        opacity: 1,
        scale: 1
    });

    setInterval(() => {

        const nextIndex =
            (currentIndex + 1) % titles.length;

        gsap.to(titles[currentIndex], {
            opacity: 0.3,
            color: "white",
            duration: 0.4
        });

        gsap.to(imgs[currentIndex], {
            opacity: 0,
            scale: 0.96,
            duration: 0.4
        });

        gsap.to(titles[nextIndex], {
            opacity: 1,
            color: "#e31e24",
            duration: 0.4
        });

        gsap.to(imgs[nextIndex], {
            opacity: 1,
            scale: 1,
            duration: 0.4
        });

        currentIndex = nextIndex;

    }, 3500);
}




// SERVICE HOVER
document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll('.service-item');

    const images =
        document.querySelectorAll('.service-animated-img');

    items.forEach((item, index) => {

        item.addEventListener('mouseenter', () => {

            items.forEach(el =>
                el.classList.remove('active')
            );

            images.forEach(img =>
                img.classList.remove('active')
            );

            item.classList.add('active');

            if (images[index]) {

                images[index].classList.add('active');
            }
        });
    });
});




// 3D TILT EFFECT
document.addEventListener("DOMContentLoaded", () => {

    const tiltSections = [
        {
            left: '#about .w-2\\/5',
            right: '#about .w-3\\/5'
        },
        {
            left: '#services .w-1\\/2:first-child',
            right: '#services .w-1\\/2:last-child'
        },
        {
            left: '#contact .w-2\\/5',
            right: '#contact .w-3\\/5'
        }
    ];

    tiltSections.forEach(section => {

        const leftEl =
            document.querySelector(section.left);

        const rightEl =
            document.querySelector(section.right);

        if (leftEl) {

            leftEl.style.transition =
                "transform 0.25s ease-out";
        }

        if (rightEl) {

            rightEl.style.transition =
                "transform 0.25s ease-out";
        }
    });

    const mouseGlow =
        document.getElementById("mouse-glow");

    let ticking = false;

    document.addEventListener("mousemove", (e) => {

        if (!ticking) {

            requestAnimationFrame(() => {

                if (mouseGlow) {

                    mouseGlow.style.setProperty(
                        "--mouse-x",
                        `${e.clientX}px`
                    );

                    mouseGlow.style.setProperty(
                        "--mouse-y",
                        `${e.clientY}px`
                    );
                }

                const xAxis =
                    (window.innerWidth / 2 - e.clientX) /
                    (window.innerWidth / 2);

                const yAxis =
                    (window.innerHeight / 2 - e.clientY) /
                    (window.innerHeight / 2);

                tiltSections.forEach(section => {

                    const leftEl =
                        document.querySelector(section.left);

                    const rightEl =
                        document.querySelector(section.right);

                    if (leftEl && rightEl) {

                        leftEl.style.transform =
                            `perspective(800px)
                            rotateY(${xAxis * 6}deg)
                            rotateX(${yAxis * 2}deg)`;

                        rightEl.style.transform =
                            `perspective(800px)
                            rotateY(${xAxis * -6}deg)
                            rotateX(${yAxis * 2}deg)`;
                    }
                });

                ticking = false;

            });

            ticking = true;
        }
    });
});