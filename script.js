function initTabNav() {

    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    const activeClass = 'ativo';
    if (tabMenu.length && tabContent.length) { 
        //verifica see tabMenu e tabContent existem
        //o .length é pq são array-like, então existirão se tiverem mais de um item
        tabContent[0].classList.add(activeClass);

        function activeTab(index) {

            tabContent.forEach((desc) => {
                desc.classList.remove(activeClass);
            })

            tabContent[index].classList.add(activeClass);

        }

        tabMenu.forEach((img, index) => {
            img.addEventListener('click', () => {
                activeTab(index);
            });
        })
    }
}

initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'ativo';

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass); //deixar o primeiro elemento ativo
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function ativoAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        };

        accordionList.forEach((item) => {
            item.addEventListener('click', ativoAccordion);
        });

    }
}

initAccordion();

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href); 
        //a linha acima vai pegar as seções com id igual ao currentTarget, faq, contato etc
        const topo = section.offsetTop; 

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            //alinhar o bloco ao inicio da seção
        }); //funciona no chrome e firefox

        //forma alternativa:
    /*     window.scrollTo({
            top: topo,
            behavior: 'smooth'
        }); */
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

initScrollSuave();

const sections = document.querySelectorAll('.js-scroll');

function initAnimationScroll() {
    if (sections.length) {

        const windowMetade = window.innerHeight * 0.6;
        //pega o valor de 60% da altura da tela da pessoa; 
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                // a linha de cima vai pegar a distancia da seção até o topo
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) 
                    section.classList.add('ativo')
                else   
                    section.classList.remove('ativo');
            });
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}

initAnimationScroll();