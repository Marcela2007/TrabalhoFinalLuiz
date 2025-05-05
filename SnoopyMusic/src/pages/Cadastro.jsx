import { useState } from 'react';
import './Cadastro.css';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmSenha: '',
    imgUrl: '',
  });

  const [mensagemSucesso, setMensagemSucesso] = useState(''); // NOVO

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (formData.senha !== formData.confirmSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    const requestBody = {
      Nome: formData.nome,
      Email: formData.email,
      Senha: formData.senha,
      ImgUrl: formData.imgUrl || null,
    };

    try {
      const response = await fetch('https://localhost:7278/api/Usuario/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        setMensagemSucesso('Usuário cadastrado com sucesso!');
        setFormData({ nome: '', email: '', senha: '', confirmSenha: '', imgUrl: '' }); // Limpa os campos
      } else {
        alert(`Erro: ${data.error || data.message}`);
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  const irParaLogin = () => {
    const painel = document.getElementById('painelRedirectCadastro');
    painel.classList.add('expandir-e-cobrir'); // Inicia a animação

    // Aguarda o tempo da animação (1 segundo) para redirecionar
    setTimeout(() => {
      window.location.href = '/login'; // Redireciona após a animação
    }, 1000); // Espera 1 segundo, o tempo da animação
  };

  return (
    <div className="container-cadastro">
      <div className="painel-redirect-cadastro" id="painelRedirectCadastro">
        <h2>Welcome Back!</h2>
        <p>Already have an account?</p>
        <button onClick={irParaLogin}>Login</button>
      </div>

      <div className="painel-formulario-cadastro">
        <h2 className="titulo-cadastro">Register</h2>

        {mensagemSucesso && (
          <div className="mensagem-sucesso">{mensagemSucesso}</div>
        )}

        <div className="grupo-input">
          <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
        </div>

        <div className="grupo-input">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="grupo-input">
          <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} />
        </div>

        <div className="grupo-input">
          <input type="password" name="confirmSenha" placeholder="Confirmar Senha" value={formData.confirmSenha} onChange={handleChange} />
        </div>

        <div className="grupo-input">
          <label>Imagem de Perfil (URL opcional):</label>
          <input type="text" name="imgUrl" placeholder="Cole a URL da imagem" value={formData.imgUrl} onChange={handleChange} />
        </div>

        <button className="botao-cadastrar" onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}
