document.querySelector('#img').addEventListener('click', function() {

  this.classList.add('animate-pulse'); 

  setTimeout(() => {
      this.classList.remove('animate-pulse');
  }, 5000); 

  
  this.classList.remove('sepia-100'); 
});



