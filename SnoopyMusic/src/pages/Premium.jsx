import './Premium.css';

const Premium = () => {
  return (
    <>
      {/* Seção Hero */}
      <div className="premium-hero">
        <h1>Aproveite 1 mês de Premium de graça</h1>
        <p className="premium-subtitle">
          Um teste sem estresse — vamos lembrar você 7 dias antes do fim.
        </p>
      </div>

      <br/><br/><br/><br/><br/>
      
      {/* Seção Planos com Alternância */}
      <div className="plans-switch-wrapper">
        <div className="plans-switch-buttons">
          <button className="selected-plan">Mensal</button>
          <button>Anual</button>
        </div>

        <div className="plans-wave">
          <svg viewBox="0 0 1440 320">
            <path
              fill="#1171ee"
              fillOpacity="1"
              d="M0,160L60,176C120,192,240,224,360,213.3C480,203,600,149,720,122.7C840,96,960,96,1080,122.7C1200,149,1320,203,1380,229.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </svg>
        </div>
      </div>

      <div className="plans-container">
        <div className="plan-card">
          <span className="plan-tag premium">PREMIUM</span>
          <p>1 mês grátis</p>
          <p className="plan-price">a partir daí, R$ 24,90/mês</p>
          <a href="#" className="plan-btn">Experimente de graça</a>
        </div>
        <div className="plan-card">
          <p><strong>Desconto de estudante</strong> <span className="plan-tag">Melhor valor</span></p>
        </div>
        <div className="plan-card">
          <span className="plan-tag duo">DUO</span>
          <p>1 mês grátis</p>
          <p className="plan-price">a partir daí, R$ 32,90/mês</p>
          <a href="#" className="plan-btn">Experimente de graça</a>
        </div>
        <div className="plan-card">
          <span className="plan-tag family">FAMILY</span>
          <p>1 mês grátis</p>
          <p className="plan-price">a partir daí, R$ 39,90/mês</p>
          <a href="#" className="plan-btn">Experimente de graça</a>
        </div>
      </div>

      {/* Seção Comparativa */}
      <div className="compare-plans-section">
        <h2>Compare todos os planos</h2>
        <div className="compare-table">
          <div>
            <select><option>Free</option></select>
            <select><option>Premium</option></select>
          </div>
          <div className="compare-row"><span>1</span><span>Número de contas independentes</span><span>1</span></div>
          <div className="compare-row"><span>✔</span><span>Mais de 120 milhões de músicas</span><span>✔</span></div>
          <div className="compare-row"><span>✔</span><span>Milhares de podcasts</span><span>✔</span></div>
          <div className="compare-row"><span>✔</span><span>Mixes e playlists personalizados</span><span>✔</span></div>
          <div className="compare-row"><span>-</span><span>Experiência sem publicidade</span><span>✔</span></div>
          <div className="compare-row"><span>-</span><span>Dê o play quando e onde quiser</span><span>✔</span></div>
          <div className="compare-row"><span>-</span><span>Escute offline</span><span>✔</span></div>
          <div className="compare-row"><span>-</span><span>Som de altíssima qualidade</span><span>✔</span></div>
        </div>
      </div>

      {/* Seção Vale Presente */}
      <section className="gift-card-section">
        <h1>Vale Presente</h1>
        <p>
        O que pode ser melhor do que dar a alguém especial uma experiência de música ilimitada por 2, 4 ou até 6 meses? Se você tem alguém que ama ouvir música, esse é o presente perfeito! Com acesso a milhões de músicas, playlists exclusivas e a possibilidade de descobrir novos artistas, é uma forma incrível de mostrar carinho e oferecer momentos de puro prazer sonoro. Afinal, nada melhor do que proporcionar a liberdade de ouvir suas músicas favoritas sem interrupções, a qualquer hora e em qualquer lugar!
        </p>
        <div className="gift-buttons-group">
          <button>Comprar Carde</button>
          <button>Mais Informações</button>
        </div>
        <div className="gift-coupon-container">
          <img className="gift-coupon" src="data:image/png;base64,..." alt="Cupom 3 Meses" width="150" />
          <img className="gift-coupon" src="data:image/png;base64,..." alt="Cupom 6 Meses" width="150" />
        </div>
      </section>

      {/* Section 5  */}
  <div class="legal">
    Estas ofertas não têm exigência de fidelidade: você pode cancelar sua assinatura a qualquer momento. Estas ofertas estão
    disponíveis apenas para usuários sem assinatura atual ou anterior para qualquer outra assinatura Deezer, sem qualquer benefício
    de qualquer promoção Deezer prévia ou teste gratuito prévio para qualquer assinatura Deezer de terceiro a qualquer momento.
    Estas ofertas não são cumulativas. Estas ofertas são válidas apenas por uma vez e para apenas um usuário.
  </div>
    </>
  );
};

export default Premium;
