/* Salvar como mainscript.js */

// nav toggle mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    navLinks.classList.toggle('visible');
  });
}

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      window.scrollTo({top: target.offsetTop - 60, behavior: 'smooth'});
      // close mobile nav
      if(navLinks.classList.contains('visible')) navLinks.classList.remove('visible');
    }
  });
});

// set current year
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

/* Dicas:
- Troque 'youremail@example.com' no form para seu e-mail (ou configure FormSubmit)
- Substitua 'background.png' e 'foto.jpg' pelas suas imagens
- Se quiser salvar contatos num DB real depois, posso te mostrar integração com Firebase ou Supabase
*/
