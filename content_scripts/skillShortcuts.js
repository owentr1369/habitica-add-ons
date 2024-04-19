const findDrawerContent = setInterval(() => {
  const drawerContent = document.querySelector(".drawer-content");
  if (drawerContent) {
    console.log(drawerContent);
    clearInterval(findDrawerContent);
    const spellEls = drawerContent.querySelectorAll(
      ".spell-container div[id^='spell_']"
    );
    // spellEls.forEach((el, index) => {});
    const spellShortcutBtns = [1, 2, 3, 4];
    spellShortcutBtns.forEach((btn, index) => {
      window.addEventListener("keydown", (e) => {
        if (e.key === btn.toString()) {
          spellEls[index].click();
        }
      });
    });
  }
}, 100);
