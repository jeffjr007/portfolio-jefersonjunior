# Portfólio Pessoal - Jeferson Junior

Um portfólio moderno e responsivo desenvolvido em React, com sistema de temas personalizáveis e suporte a múltiplos idiomas.

## 🚀 Características

- **Design Responsivo**: Adaptável a diferentes tamanhos de tela
- **Sistema de Temas**: 8 temas pré-definidos + criação de temas personalizados
- **Múltiplos Idiomas**: Suporte para Português, Inglês e Espanhol
- **Animações Suaves**: Transições e animações CSS para melhor UX
- **Formulário de Contato**: Integração com EmailJS para envio de emails
- **Navegação Suave**: Scroll suave entre seções
- **PWA Ready**: Configurado para Progressive Web App

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **React Router** - Roteamento
- **Framer Motion** - Animações
- **EmailJS** - Envio de emails
- **SweetAlert2** - Notificações
- **React Best Gradient Color Picker** - Seletor de cores
- **CSS3** - Estilização com variáveis CSS
- **Boxicons** - Ícones

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Home.jsx        # Seção inicial
│   ├── NavBar.jsx      # Navegação
│   ├── Projects.jsx    # Seção de projetos
│   ├── Skills.jsx      # Habilidades
│   ├── Contact.jsx     # Formulário de contato
│   ├── ThemeModal.jsx  # Modal de temas
│   └── ...
├── util/               # Utilitários
│   ├── language.js     # Sistema de idiomas
│   └── DataThemes.jsx  # Temas pré-definidos
├── styles/             # Estilos CSS
└── images/             # Imagens e assets
```

## 🎨 Sistema de Temas

O portfólio possui um sistema robusto de temas com:

### Temas Pré-definidos:
- Purple Theme
- Blue Theme  
- Green Theme
- Orange Theme
- Pink Theme
- Blue/Purple Theme
- Flamengo (Red & Black)
- Brasil (Green & Yellow)

### Criação de Temas Personalizados:
- Seletor de cores interativo
- Preview em tempo real
- Salvamento no localStorage
- 4 variáveis de cor: fundo, secundário, texto e principal

## 🌍 Sistema de Idiomas

Suporte completo para:
- **Português (pt)** - Idioma padrão
- **Inglês (en)**
- **Espanhol (es)**

O idioma é persistido no localStorage e pode ser alterado através das bandeiras na navegação.

## 📱 Responsividade

O design é totalmente responsivo com breakpoints para:
- Desktop (1330px+)
- Tablet (991px - 1329px)
- Mobile (768px - 990px)
- Mobile pequeno (520px - 767px)
- Mobile muito pequeno (< 520px)

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm start
```

4. Acesse `http://localhost:3000` no navegador

### Build para Produção

```bash
npm run build
```

## ⚙️ Configuração

### EmailJS
Para o formulário de contato funcionar, configure suas credenciais do EmailJS em `src/components/Contact.jsx`:

```javascript
emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", templateParams, "SUA_PUBLIC_KEY")
```

### Temas Personalizados
Os temas são salvos automaticamente no localStorage do navegador. Para adicionar novos temas pré-definidos, edite `src/util/DataThemes.jsx`.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Jeferson Junior**
- LinkedIn: [jeferson-junior-as](https://www.linkedin.com/in/jeferson-junior-as/)
- GitHub: [jeffjr007](https://github.com/jeffjr007)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através do formulário no portfólio ou diretamente via LinkedIn.
