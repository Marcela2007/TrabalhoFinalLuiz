import { useState } from 'react';
import './Premium.css';

const Premium = () => {
  const [selectedPlan1, setSelectedPlan1] = useState('Free');
  const [selectedPlan2, setSelectedPlan2] = useState('Premium');

  const handlePlanChange1 = (e) => {
    setSelectedPlan1(e.target.value);
  };

  const handlePlanChange2 = (e) => {
    setSelectedPlan2(e.target.value);
  };

  // Informações dos planos
  const planosComparacao = {
    Free: {
      accounts: '1',
      music: '✔',
      podcasts: '✔',
      mixes: '✔',
      noAds: '-',
      playAnytime: '-',
      offline: '-',
      quality: '-'
    },
    Premium: {
      accounts: '1',
      music: '✔',
      podcasts: '✔',
      mixes: '✔',
      noAds: '✔',
      playAnytime: '✔',
      offline: '✔',
      quality: '✔'
    },
    Duo: {
      accounts: '2',
      music: '✔',
      podcasts: '✔',
      mixes: '✔',
      noAds: '✔',
      playAnytime: '✔',
      offline: '✔',
      quality: '✔'
    },
    Family: {
      accounts: 'Até 6',
      music: '✔',
      podcasts: '✔',
      mixes: '✔',
      noAds: '✔',
      playAnytime: '✔',
      offline: '✔',
      quality: '✔'
    }
  };
  return (
    <div className="premium-wrapper">
      {/* Seção Hero */}
      <div className="premium-hero">
        <h1>Aproveite 1 mês de Premium de graça</h1>
        <p className="premium-subtitle">
          Um teste sem estresse — vamos lembrar você 7 dias antes do fim.
        </p>
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

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
            <select onChange={handlePlanChange1} value={selectedPlan1}>
              <option value="Free">Free</option>
              <option value="Premium">Premium</option>
              <option value="Duo">Duo</option>
              <option value="Family">Family</option>
            </select>
            <select onChange={handlePlanChange2} value={selectedPlan2}>
              <option value="Free">Free</option>
              <option value="Premium">Premium</option>
              <option value="Duo">Duo</option>
              <option value="Family">Family</option>
            </select>
          </div>
          <div className="compare-row">
            <span>{planosComparacao[selectedPlan1].accounts}</span>
            <span>Número de contas independentes</span>
            <span>{planosComparacao[selectedPlan2].accounts}</span>
          </div>
          <div className="compare-row">
            <span>{planosComparacao[selectedPlan1].music}</span>
            <span>Mais de 120 milhões de músicas</span>
            <span>{planosComparacao[selectedPlan2].music}</span>
          </div>
          <div className="compare-row">
            <span>{planosComparacao[selectedPlan1].podcasts}</span>
            <span>Milhares de podcasts</span>
            <span>{planosComparacao[selectedPlan2].podcasts}</span>
          </div>
          <div className="compare-row">
            <span>{planosComparacao[selectedPlan1].mixes}</span>
            <span>Mixes e playlists personalizados</span>
            <span>{planosComparacao[selectedPlan2].mixes}</span>
          </div>
          <div className="compare-row">
            <span>{planosComparacao[selectedPlan1].noAds}</span>
            <span>Experiência sem publicidade</span>
            <span>{planosComparacao[selectedPlan2].noAds}</span>
          </div>
          <div className="compare-row">
            <span>{planosComparacao[selectedPlan1].playAnytime}</span>
            <span>Dê o play quando e onde quiser</span>
            <span>{planosComparacao[selectedPlan2].playAnytime}</span>
          </div>
          <div className="compare-row">
            <span>{planosComparacao[selectedPlan1].offline}</span>
            <span>Escute offline</span>
            <span>{planosComparacao[selectedPlan2].offline}</span>
          </div>
          <div className="compare-row">
            <span>{planosComparacao[selectedPlan1].quality}</span>
            <span>Som de altíssima qualidade</span>
            <span>{planosComparacao[selectedPlan2].quality}</span>
          </div>
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

      {/* Seção Legal */}
      <div className="legal">
        Estas ofertas não têm exigência de fidelidade: você pode cancelar sua assinatura a qualquer momento. Estas ofertas estão
        disponíveis apenas para usuários sem assinatura atual ou anterior para qualquer outra assinatura Deezer, sem qualquer benefício
        de qualquer promoção Deezer prévia ou teste gratuito prévio para qualquer assinatura Deezer de terceiro a qualquer momento.
        Estas ofertas não são cumulativas. Estas ofertas são válidas apenas por uma vez e para apenas um usuário.
      </div>
    </div>
  );
};

export default Premium;
