
              let buy_btn = document.getElementById('buy-btn')
              buy_btn.onclick=()=>{
                  spinner.style.display="block";
                  buy_btn.style.display="none";
              }
              let spinner = document.getElementById('spinner')
              let fullname = document.getElementById('Fullname');
              fullname.oninvalid=()=>{
                  spinner.style.display="none";
                  buy_btn.style.display="block";
                
              };
              let city = document.getElementById('City');
              city.oninvalid=()=>{
                  spinner.style.display="none";
                  buy_btn.style.display="block";
        
              };
              let phone = document.getElementById('Phone');
              phone.oninvalid=()=>{
                  spinner.style.display="none";
                  buy_btn.style.display="block";
              
              };
              
              let show_button = document.getElementById('show_button')
              let close_form = document.querySelector('.form-content-container');
              let close_form_btn = document.querySelector('#close_form_btn');
              close_form_btn.addEventListener('click',()=>{
                close_form.style.display="none";
                show_button.style.display="block";
              });
              show_button.addEventListener('click',()=>{
                  close_form.style.display="block";
                  show_button.style.display="none";
                  
              });
              let contin = document.getElementById('continue');
              contin.onclick=()=>{
                mssj.classList.remove('active');
              };
        
        
        
                var mssj= document.querySelector('.msj-container');
                  const scriptURL = 'https://script.google.com/macros/s/AKfycbz2VMWzvMSomX84EpwzxioDHeWUWanOzqQwNIFUyrHDYwFScSW9HzvJQeW-PDXuxflRyw/exec';
                        const form = document.forms['google-sheet'];
                      
                        form.addEventListener('submit', e => {
                          e.preventDefault()
                          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                            .then(response =>mssj.classList.toggle('active'))
                            .then(response =>spinner.style.display="none")
                            .then(response =>buy_btn.style.display="block")
                            .catch(error => console.error('Error!', error.message))
                        });
                let descript = document.querySelector('.description');
                let how_to_use  = document.querySelector('.how-to-use');
                let descript_details =  document.querySelector('.description-details');
                let how_to_use_details =  document.querySelector('.how-to-use-details');
                descript.addEventListener('click',()=>{
                  descript.classList.toggle('active');
                  how_to_use.classList.toggle('desactive');
                  how_to_use.classList.remove('active');
                  descript.classList.remove('desactive');
                  descript_details.style.display="block";
                  how_to_use_details.style.display="none";
                });
              
                how_to_use.addEventListener('click',()=>{
                  descript.classList.toggle('desactive');
                  how_to_use.classList.toggle('active');
                  descript.classList.remove('active');
                  how_to_use.classList.remove('desactive');
                  descript_details.style.display="none";
                  how_to_use_details.style.display="block";
                });


let navbare = document.querySelector('.navbare');
let menu_btn = document.querySelector('.menu-btn');
menu_btn.addEventListener('click',()=>{
    navbare.classList.toggle('active');
});