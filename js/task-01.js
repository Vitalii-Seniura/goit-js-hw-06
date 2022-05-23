const listEl = document.querySelectorAll('.item');

console.log('Number of categories:', listEl.length);


listEl.forEach(el => console.log('Category:', el.firstElementChild.textContent,
'Elements:', el.lastElementChild.children.length));
