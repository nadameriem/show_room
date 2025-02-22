// Toggle links visibility
function toggleLinks(id) {
  const links = document.getElementById(id);
  links.classList.toggle('show');
}

// Open preview modal
function openPreview(url) {
  const modal = document.getElementById('preview-modal');
  const previewFrame = document.getElementById('preview-frame');
  const goToSiteBtn = document.getElementById('go-to-site');
  previewFrame.src = url;
  goToSiteBtn.href = url;
  modal.style.display = 'flex';
}

// Close preview modal
function closePreview() {
  const modal = document.getElementById('preview-modal');
  const previewFrame = document.getElementById('preview-frame');
  const goToSiteBtn = document.getElementById('go-to-site');
  previewFrame.src = '';
  goToSiteBtn.href = '#';
  modal.style.display = 'none';
}

// Add click event to links for preview
document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    openPreview(link.href);
  });
});