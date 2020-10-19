function main() {
  const matcher = window.matchMedia('(prefers-color-scheme:dark)');
  matcher.addListener(onUpdate);
  function onUpdate() {
    const lightSchemeIcon = document.querySelector('link#light-mode');
    const darkSchemeIcon = document.querySelector('link#dark-mode');
    if (matcher.matches) {
      if (lightSchemeIcon) {
        lightSchemeIcon.remove();
      }
      addDarkIconToHead();
    } else {
      if (darkSchemeIcon) {
        darkSchemeIcon.remove();
      }
      addLightIconToHead();
    }
  }

  function addAndroidIconToHead() {
    const isAndroid = navigator.userAgent.match(/Android/i);
    if (isAndroid) {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/png';
      link.sizes = '192x192';
      link.href = '/static/icons/android-icon-192x192.png';
      document.head.append(link);
    }
  }

  function addDarkIconToHead() {
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = 'image/svg+xml';
    link.href = '/static/icons/favicon-dark-mode.svg';
    link.id = 'dark-mode';
    document.head.append(link);
  }

  function addLightIconToHead() {
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = 'image/svg+xml';
    link.href = '/static/icons/favicon-light-mode.svg';
    link.id = 'light-mode';
    document.head.append(link);
  }

  addAndroidIconToHead();
  onUpdate();
}

main();
