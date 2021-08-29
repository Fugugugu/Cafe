const anim = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0){
    entry.target.style.animation = `anime 2s ${entry.target.dataset.delay} forwards ease-out`;
  } else{
    entry.target.style.animation = 'none';
  }
  })
})     

anim.forEach(ani => {
  observer.observe(ani)
})

