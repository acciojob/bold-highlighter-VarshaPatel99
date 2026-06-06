function highlight() {
  const boldItems = document.querySelectorAll('strong');

  boldItems.forEach(item => {
    item.style.color = 'rgb(0, 128, 0)';
  });
}

function return_normal() {
  const boldItems = document.querySelectorAll('strong');

  boldItems.forEach(item => {
    item.style.color = 'rgb(0, 0, 0)';
  });
}