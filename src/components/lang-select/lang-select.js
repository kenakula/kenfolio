export const initLangSelect = () => {
  const langSelect = document.querySelector('[data-lang-select]');

  if (!langSelect) return;

  const toggler = langSelect.querySelector('[data-lang-toggler]');
  const dropdown = langSelect.querySelector('[data-lang-dropdown]');
  const toggledClass = toggler.dataset.toggledClass;

  const windowClickCloseSelect = evt => {
    const target = evt.target.closest('[data-lang-select]');

    if (!target) {
      dropdown.classList.remove(toggledClass);
      document.removeEventListener('click', windowClickCloseSelect);
    }
  };

  const toggleLangSelect = () => {
    if (dropdown.classList.contains(toggledClass)) {
      dropdown.classList.remove(toggledClass);
      document.removeEventListener('click', windowClickCloseSelect);

      return;
    }

    if (!dropdown.classList.contains(toggledClass)) {
      dropdown.classList.add(toggledClass);
      document.addEventListener('click', windowClickCloseSelect);
    }
  };

  toggler.addEventListener('click', toggleLangSelect);
};
