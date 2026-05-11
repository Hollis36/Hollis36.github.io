function setupToggles(): void {
  const toggles = document.querySelectorAll<HTMLButtonElement>('[data-toggle-target]');
  toggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.toggleTarget;
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      const isHidden = target.hasAttribute('hidden');
      if (isHidden) {
        target.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        target.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

function setupCopyButtons(): void {
  const copyButtons = document.querySelectorAll<HTMLButtonElement>('[data-copy-source]');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const sourceId = btn.dataset.copySource;
      if (!sourceId) return;
      const source = document.getElementById(sourceId);
      if (!source) return;
      const text = source.textContent ?? '';
      try {
        await navigator.clipboard.writeText(text);
        const copied = btn.dataset.copiedLabel ?? 'Copied';
        const label = btn.dataset.copyLabel ?? 'Copy';
        btn.textContent = copied;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = label;
          btn.classList.remove('copied');
        }, 1600);
      } catch (err) {
        console.error('Failed to copy BibTeX:', err);
      }
    });
  });
}

setupToggles();
setupCopyButtons();
