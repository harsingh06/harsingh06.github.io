document.addEventListener('DOMContentLoaded', () => {
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const posts = [...document.querySelectorAll('.blog-list article[data-category]')];
  const count = document.querySelector('#blog-count');
  for (const button of buttons) button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    let visible = 0;
    for (const post of posts) {
      const show = selected === 'all' || post.dataset.category === selected;
      post.hidden = !show;
      if (show) visible++;
    }
    for (const item of buttons) {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    }
    count.textContent = `${visible} ${visible === 1 ? 'topic' : 'topics'}`;
  });
});
