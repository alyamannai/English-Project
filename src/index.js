window.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit');
    const inputs = document.querySelectorAll('input'); 
  
    submitBtn.addEventListener('click', () => {
      inputs.forEach(input => {
        input.value = ''; 
      });
    });
  });
  