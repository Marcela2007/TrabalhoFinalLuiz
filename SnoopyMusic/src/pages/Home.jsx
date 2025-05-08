import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
    <div>
      <div className="hero">
        <h1>Uma experiência única</h1>
        <p>Sua música. Sem limites.</p>
        <div className="hero-buttons">       
          <Link to="/premium">
            <button className="btn-blue">Premium</button>
          </Link>
          <Link to="/cadastro">
            <button className="btn-white">Cadastrar-se</button>
          </Link>
        </div>
      </div>

     <div className="about">
        <h2>O aplicativo de música sem limites</h2>
        <p>
          O Snoopy Music é uma plataforma gratuita de streaming de música onde
          você pode ouvir, salvar e descobrir seus artistas e músicas favoritas
          sem restrições. Tudo de forma rápida, fácil e divertida.
        </p>
      </div> 

      <div className="cards">
        <div className="card" style={{ backgroundColor: '#b62062' }}>
          <img src="/img/card1.png" alt="Busca" />
        </div>
        <div className="card" style={{ backgroundColor: '#d42f45' }}>
          <img src="/img/card2.png" alt="Sugestões" />
        </div>
        <div className="card" style={{ backgroundColor: '#1db6aa' }}>
          <img src="/img/card3.png" alt="Player" />
        </div>
        <div className="card" style={{ backgroundColor: '#0057ff' }}>
          <img src="/img/card4.png" alt="Letra da música" />
        </div>
      </div> 

     <div className="features">
        <h2>Explorar funcionalidades</h2>
        <p>
          Descubra tudo o que o Snoopy Music tem a oferecer! Milhões de faixas? Aqui estão elas.
          Streaming em todas as plataformas? Claro. Letras e playlists ilimitadas? Você tem.
        </p>
      </div>  

      </div>
    </>
  );
};

export default Home;
