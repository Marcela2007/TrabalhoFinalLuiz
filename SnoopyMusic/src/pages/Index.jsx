import React from 'react';
import './css/style.css';

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
          <button className="login">Perfil</button>
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
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
                  alt="Base64 Image"
                />
                <div className="play-btn"><i className="fas fa-play"></i></div>
              </div>
              <p>Título Desconhecido</p>
              <small>Artista Desconhecido</small>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
