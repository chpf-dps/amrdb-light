fetch('content.md')
  .then(res => res.text())
  .then(md => {
    document.getElementById('info-box').innerHTML = marked.parse(md);
  })
  .catch(err => {
    document.getElementById('info-box').textContent = 'Fehler beim Laden der Inhalte.';
    console.error(err);
  });
