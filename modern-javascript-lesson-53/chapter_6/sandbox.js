   const button = document.querySelector('button');

   button.addEventListener('click', e => {
   console.log('you clicked me');
   e.target.style.textDecoration = 'line-through';
 });

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log('item clicked');
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    e.target.style.textDecoration = 'line-through';
  });
});