import { useState } from 'react';
import './Cadastro.css';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://localhost:7278/api/Usuario/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        window.location.href = '/login';
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message}`);
      }
    } catch (error) {
      alert('Erro ao conectar com o servidor.');
    }
  };

  const irParaLogin = () => {
    const painel = document.getElementById('painelRedirectCadastro');
    painel.classList.add('deslizar-esquerda');

    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  };

  return (
    <div className="container-cadastro">

      {/* PAINEL DE REDIRECIONAMENTO PARA LOGIN */}
      <div className="painel-redirect-cadastro" id="painelRedirectCadastro">
        <h2>Welcome Back!</h2>
        <p>Already have an account?</p>
        <button onClick={irParaLogin}>Login</button>
      </div>

      {/* FORMULÁRIO DE CADASTRO */}
      <div className="painel-formulario-cadastro">
        <h2 className="titulo-cadastro">Register</h2>

        <div className="grupo-input">
          <input type="text" name="username" placeholder="Username" onChange={handleChange} value={formData.username} />
          <span className="icon"><i className="fas fa-user"></i></span>
        </div>

        <div className="grupo-input">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
          <span className="icon"><i className="fas fa-envelope"></i></span>
        </div>

        <div className="grupo-input">
          <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} />
          <span className="icon"><i className="fas fa-lock"></i></span>
        </div>

        <button className="botao-cadastrar" onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}
