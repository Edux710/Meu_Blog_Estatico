/**
 * Chaves de conexão ccom o Firebase.
 * ATENÇÃO! Sempre troque essas chaves pelas chaves do seu projeto.
 **/
 const firebaseConfig = {
  apiKey: "AIzaSyAcYRnT3bCo3UnZUzVXwosr9antBasJlSw",
  authDomain: "blog-6b4da.firebaseapp.com",
  projectId: "blog-6b4da",
  storageBucket: "blog-6b4da.firebasestorage.app",
  messagingSenderId: "283482281940",
  appId: "1:283482281940:web:44a08cb33d6beff8dbe841",
  measurementId: "G-93NT6PZR7E"
};



/**
 * Configuração do site;
 **/
 const site = {

    /**
      * Nome do site usado na tag <title>...</title> e nas interações dinâmicas
      **/
    nome: "Meu Blog Cansado",

    /**
     * Logotipo do site, usado na tag <header>...</title>
     */
    logo: "img/logo.png",

    /**
     * Controla a ação ao clicar no link do usuário logado no menu principal
     * Se `true`, exibe o perfil do usuário → perfil.html
     * Se `false`, faz logout direto
     **/
    verPerfil: true,

    /**
     * Ano de lançamento do site
     **/
    ano: 2024,

    /**
     * Licensa do site usada no rodapé
     **/
    licensa: `
    <i class="fa-regular fa-copyright fa-rotate-180 fa-fw"></i>
    <span>Copyleft <span id="footerAno"></span>  Lapis da Silva</span>
    `,

}