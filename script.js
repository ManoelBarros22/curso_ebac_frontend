document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.querySelector('#avatarUser'); //ok
    const name = document.querySelector('#nomeUsuario'); //ok
    const userName = document.querySelector('#user'); //ok
    const repositorios = document.querySelector('#numeroDeRepositorios'); //ok
    const seguidores = document.querySelector('#numeroDeSeguidores');
    const seguindo = document.querySelector('#seguindo');
    const linkPerfil = document.querySelector('#link');

    fetch ('https://api.github.com/users/manoelbarros22')
        .then(function(res){
            console.log(res);
            return res.json();
        })
        .then(function(json){
            name.innerHTML = json.name;
            userName.innerHTML = json.login;
            avatar.src = json.avatar_url;
            repositorios.innerHTML = json.public_repos;
            seguidores.innerHTML = json.followers;
            seguindo.innerHTML = json.following;
            linkPerfil.href = json.html_url;
        })
})