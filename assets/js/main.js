// Google Antigravity Blog Client Interactivity Script

document.addEventListener('DOMContentLoaded', () => {
  // 1. Reading Progress Bar
  const progressBar = document.querySelector('.reading-progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }
    }, { passive: true });
  }

  // 2. Code Block Copy Functionality
  const copyButtons = document.querySelectorAll('.code-copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const container = btn.closest('.code-container');
      if (!container) return;
      const snippet = container.querySelector('.code-snippet pre');
      if (!snippet) return;

      const codeText = snippet.innerText || snippet.textContent || '';
      try {
        await navigator.clipboard.writeText(codeText);
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="material-icon">check</span> Copied!';
        btn.style.color = '#188038';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.color = '';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code:', err);
      }
    });
  });

  // 3. Share Dropdown Menu
  const shareTrigger = document.querySelector('.share-dropdown-trigger');
  const shareMenu = document.querySelector('.share-menu');
  if (shareTrigger && shareMenu) {
    shareTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      shareMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!shareMenu.contains(e.target) && e.target !== shareTrigger) {
        shareMenu.classList.remove('active');
      }
    });

    const copyLinkBtn = shareMenu.querySelector('[data-action="copy-link"]');
    if (copyLinkBtn) {
      copyLinkBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          const label = copyLinkBtn.querySelector('.share-label');
          if (label) {
            const old = label.textContent;
            label.textContent = 'Link copied!';
            setTimeout(() => {
              label.textContent = old;
              shareMenu.classList.remove('active');
            }, 1500);
          }
        } catch (err) {
          console.error('Failed to copy link:', err);
        }
      });
    }
  }

  // 4. Initialize Mermaid Diagrams with Google Palette
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        fontFamily: 'Google Sans Flex, sans-serif',
        primaryColor: '#e8f0fe',
        primaryTextColor: '#1a73e8',
        primaryBorderColor: '#1a73e8',
        lineColor: '#5f6368',
        secondaryColor: '#fef7e0',
        tertiaryColor: '#e6f4ea',
        background: '#ffffff',
        mainBkg: '#f8f9fa',
        nodeBorder: '#dadce0',
        clusterBkg: '#f8f9fa',
        clusterBorder: '#dadce0'
      }
    });
  }
});
