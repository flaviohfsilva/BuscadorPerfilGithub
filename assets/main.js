//RECUPERANDO DADOS - RESTORE DATES 
 const nameUser = document.querySelector(".user-name");
 const bioUser = document.querySelector(".user-data");
 const imgUser = document.querySelector(".user-img");
 const locUser = document.querySelector(".user-location");
 const follUser = document.querySelector(".user-followers");
 const followUser = document.querySelector(".user-follow");
 

 const form = document.querySelector(".form");
 const input = document.querySelector(".form-control");



//FUNÇÃO DE BUSCA E RENDERIZAÇÃO - SEARCH AND RENDER FUNCTION 
const loadData = (username) =>{
    const xhr = new XMLHttpRequest()

    xhr.open("GET", `https://api.github.com/users/${username}`)
    xhr.send(null);

    
    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4){
        
          const res = JSON.parse(xhr.responseText);
        
          imgUser.style.display = 'block';
          nameUser.innerHTML = res.name;
          bioUser.innerHTML = res.bio;
          imgUser.src = res.avatar_url;
          locUser.innerHTML = "Localização: " + res.location;
          follUser.innerHTML = "Seguidores: " + res.followers;
          followUser.innerHTML = "Seguindo: " + res.following;
          input.value = '';
            
          console.log([nameUser, bioUser, imgUser, follUser]);

          }
       }
    }



//ADICIONANDO EVENTOS NO INPUT - INPUT EVENT 
form.addEventListener('submit', (event) =>{
  event.preventDefault();
  loadData(input.value);
});


