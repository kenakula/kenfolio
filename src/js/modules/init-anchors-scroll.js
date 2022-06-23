export const initAnchorsScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');

  const scrollTo = evt => {
    evt.preventDefault();

    const target = evt.target.closest('a');
    const id = target.getAttribute('href');

    if (id.length <= 1) {
      return;
    }

    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  links.forEach(link => {
    link.addEventListener('click', scrollTo);
  });
};
