import React from 'react';
import './style.css';

const Index = () => {
  return (
    <div>
      {/* FontAwesome */}
      <script src="https://kit.fontawesome.com/a2d9d5fcb8.js" crossOrigin="anonymous"></script>

      {/* Navbar */}
      <nav className="top-nav">
        <div className="nav-left">
          <div className="logo">
            <i className="fas fa-dog"></i>
            Snoopy Songs
          </div>

          <div className="nav-search">
            <input type="text" placeholder="O que você quer ouvir?" />
          </div>
        </div>

        <ul className="nav-links">
          <li><a href="#"><i className="fas fa-home"></i> Início</a></li>
          <li><a href="#">Categotias</a></li>
          <li><a href="#">PlayList</a></li>
        </ul>

        <div className="nav-right">
          <button className="./Profile">Perfil</button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="sidebar">
        <h2>Sua Biblioteca</h2>
        <div className="playlist">
          <p>Crie sua primeira playlist</p>
          <button onClick={() => alert('Criar playlist')}>Criar playlist</button>
        </div>

        <h2>Músicas Favoritas</h2>
        <div className="playlist">
          <p>Explore artistas e faixas recomendadas para você</p>
          <button onClick={() => alert('Explorar agora')}>Favoritas</button>
        </div>

        <h2>Músicas Tocadas Recentemente</h2>
        <div className="playlist">
          <p>Explore artistas e faixas recomendadas para você</p>
          <button onClick={() => alert('Explorar agora')}>Recentementes</button>
        </div>








        <ul className="links">
          <li><a href="#">Legal</a></li>
          <li><a href="#">Política de privacidade</a></li>
        </ul>
      </div>



























































































































                                                                                                                                                                                                                                                                                                                                                                                                                    
      {/* Main Content */}
      <div className="main">
        <section className="highlights">
          <h2>Músicas em alta</h2>
          <div className="albums">
            <div className="album">
              <div className="album-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLzY2mhqMWyE0yMquKQAynTqkv7rN4hFwzA&s"
                  alt="Apaga Apaga"
                />
                <div className="play-btn"><i className="fas fa-play"></i></div>
              </div>
              <p>Apaga Apaga</p>
              <small>Danilo e Davi</small>
            </div>

            <div className="album">
              <div className="album-img">
                <img
                  src="https://i.scdn.co/image/ab67616d0000b2731a65bdc7bf85f5779d1a2fca"
                  alt="Veneno"
                />
                <div className="play-btn"><i className="fas fa-play"></i></div>
              </div>
              <p>Veneno</p>
              <small>Murilo Huff</small>
            </div>

            <div className="album">
              <div className="album-img">
                <img
                  src="https://i.ytimg.com/vi/2JVhmJUqfSM/maxresdefault.jpg"
                  alt="Love Não Era"
                />
                <div className="play-btn"><i className="fas fa-play"></i></div>
              </div>
              <p>Love Não Era</p>
              <small>Luan Pereira, MC Tuto</small>
            </div>

            <div className="album">
              <div className="album-img">
                <img
                  src="https://i.scdn.co/image/ab67616d0000b273dec04b819cf8d034390815a8"
                  alt="Tubarões"
                />
                <div className="play-btn"><i className="fas fa-play"></i></div>
              </div>
              <p>Tubarões</p>
              <small>Diego & Victor Hugo</small>
            </div>

            <div className="album">
              <div className="album-img">
                <img
                  src="https://public-files.gumroad.com/ym6exmbegrbxr93cwcyo7uqwdmj0"
                  alt="BIRDS OF A FEATHER"
                />
                <div className="play-btn"><i className="fas fa-play"></i></div>
              </div>
              <p>BIRDS OF A FEATHER</p>
              <small>Billie Eilish</small>
            </div>

            <div className="album">
              <div className="album-img">
                <img
                  src="https://cdn-images.dzcdn.net/images/cover/dc8a602909b1cd752aad82af47ce4810/0x1900-000000-80-0-0.jpg"
                  alt="Coração Partido (Corazón Partío) (Ao Vivo)"
                />
                <div className="play-btn"><i className="fas fa-play"></i></div>
              </div>
              <p>Coração Partido (Corazón Partío) (Ao Vivo)</p>
              <small>Grupo Menos É Mais</small>
            </div>
        
      </div>
    </section>

    <section className="popular">
  <h2>Artistas populares</h2>
  <div className="artists">
    <div className="artist">
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSfTUMeTDQ3s6qFdJpEi9MdiV67DL7Xb5FUw3hFLRmq2qI2409MPXYLCbtuJayvQGy8ZH1HZRr5RC6JnbDA5eyD_A"
        alt="BrunoM"
      />
      <p>Bruno Mars</p>
    </div>
    <div className="artist">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zC-XGxtbO3cmpH73-i_ipfH6q7cuV2uKwA&s"
        alt="Henrique e Juliano"
      />
      <p>Henrique e Juliano</p>
    </div>
    <div className="artist">
      <img
        src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTs-b7z_K8SpeWWfUBww84zVng7z2iqGm6YyoshAWzwKgzUtmesLSLu41dKR7OemJP1"
        alt="Rihanna"
      />
      <p>Rihanna</p>
    </div>
    <div className="artist">
      <img
        src="https://i.scdn.co/image/ab67706f00000002bce4a897b3710e024a830611"
        alt="Marília Mendonça"
      />
      <p>Marília Mendonça</p>
    </div>
    <div className="artist">
      <img
        src="https://tonamidia.com.br/wp-content/uploads/2021/12/BrunoeBarreto-OlhaOGolpe-02_ToNaMidia.jpg"
        alt="Bruno e Barreto"
      />
      <p>Bruno e Barreto</p>
    </div>
    <div className="artist">
      <img
        src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/04/taylor-swift-eras-tour-4-e1713886488927.jpg?w=1200&h=1200&crop=11"
        alt="Taylor Swift"
      />
      <p>Taylor Swift</p>
    </div>
  </div>
</section>

      </div>
    </div>
  );
};

export default Index;
