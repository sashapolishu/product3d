function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }else {
        change.target.classList.remove('element-show');
        }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }

  let burger = document.querySelector('.header__burger');
  let header = document.querySelector('.header')

  burger.onclick = function(){
    burger.classList.toggle('active')
    header.classList.toggle('active')
  }