document.getElementById('toggleDarkMode').addEventListener('click', function () {
  var body = document.body;
  var header = document.getElementById('encabezado');
  var footer = document.getElementById('footer');

  var pfooter = document.getElementById('pe');
  var pfooter1 = document.getElementById('pe1');

  var sessions= document.getElementsByClassName('session');
  var textos= document.getElementsByClassName('dark-text');

  

  body.classList.toggle('dark-mode');
  if (footer.classList.contains('bg-light')) {
             footer.classList.replace('bg-light', 'bg-dark');
         } else {
             footer.classList.replace('bg-dark', 'bg-light');
         }
         
  if (pfooter.classList.contains('text-dark')) {
             pfooter.classList.replace('text-dark', 'text-light');
         } else {
             pfooter.classList.replace('text-light', 'text-dark');
         }
         
  if (pfooter1.classList.contains('text-dark')) {
             pfooter1.classList.replace('text-dark', 'text-light');
         } else {
             pfooter1.classList.replace('text-light', 'text-dark');
         }


  header.classList.toggle('navbar-light');
  header.classList.toggle('bg-light');
  header.classList.toggle('navbar-dark');
  header.classList.toggle('bg-dark');
  for (var i = 0; i < sessions.length; i++) {
    sessions[i].classList.toggle('section-dark');}
  
});



    
