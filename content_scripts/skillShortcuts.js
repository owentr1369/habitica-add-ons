const findDrawerContent = setInterval(() => {
  const drawerContent = document.querySelector(".drawer-content");
  if (drawerContent) {
    console.log(drawerContent);
    clearInterval(findDrawerContent);
    const spellEls = drawerContent.querySelectorAll(
      ".spell-container div[id^='spell_']"
    );
    console.log(spellEls);
  }
}, 100);
