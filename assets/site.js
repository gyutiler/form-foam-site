(() => {
  const config = window.FORM_FOAM_RELEASE || {};
  document.querySelectorAll('[data-download]').forEach((link) => {
    const url = config[link.dataset.download === 'installer' ? 'installerUrl' : 'portableUrl'];
    if (!url) {
      link.addEventListener('click', (event) => event.preventDefault());
      return;
    }
    link.href = url;
    link.classList.remove('button-disabled');
    link.removeAttribute('aria-disabled');
    link.textContent = link.dataset.download === 'installer' ? '설치 파일 받기' : 'ZIP 다운로드';
    link.setAttribute('download', '');
  });
  document.querySelectorAll('[data-release-link]').forEach((link) => {
    if (!config.releaseUrl) return;
    link.href = config.releaseUrl;
    link.hidden = false;
  });
  document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = String(new Date().getFullYear()); });
})();
