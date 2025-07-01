# Guia de Manutenção - Portfólio

Este documento contém informações atualizadas por mim para facilitar a manutenção.

## 📁 Estrutura de Arquivos

### Arquivos de Configuração
- `src/config/appConfig.js` - Configurações centralizadas
- `src/util/DataThemes.jsx` - Temas pré-definidos
- `src/util/language.js` - Sistema de idiomas

### Componentes Principais
- `src/App.jsx` - Componente raiz
- `src/components/HomePage.jsx` - Página principal
- `src/components/NavBar.jsx` - Navegação
- `src/components/Home.jsx` - Seção inicial
- `src/components/Projects.jsx` - Seção de projetos
- `src/components/Contact.jsx` - Formulário de contato

## 🔧 Manutenção Regular

### 1. Atualizar Informações Pessoais

#### Dados Básicos
Edite `src/util/language.js` para atualizar:
- Nome
- Descrição profissional
- Links sociais
- Informações de contato

#### Links Sociais
Atualize em `src/config/appConfig.js`:
```javascript
socialLinks: {
  linkedin: "seu-linkedin",
  github: "seu-github", 
  resume: "link-do-curriculo"
}
```

### 2. Adicionar/Remover Projetos

Edite `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: "Nome do Projeto",
    href: "https://link-do-projeto.com",
    description: "Descrição do projeto",
    dates: "2024",
    tags: ["React", "Node.js"],
    image: "/imagem-do-projeto.jpg",
    video: "/video-demo.mp4", // opcional
    links: [
      { icon: "🌐", type: "Site", href: "https://site.com" },
      { icon: "💻", type: "GitHub", href: "https://github.com/projeto" }
    ]
  }
];
```

### 3. Atualizar Formação/Experiência

Edite `src/util/language.js` nas seções:
- `Education.formationArray` - Formação acadêmica
- `Education.jobsArray` - Experiência profissional

### 4. Adicionar Novos Temas

Edite `src/util/DataThemes.jsx`:
```javascript
{
  name: "Nome do Tema",
  "--bg-color": "#cor-de-fundo",
  "--second-bg-color": "#cor-secundaria", 
  "--text-color": "#cor-do-texto",
  "--main-color": "#cor-principal"
}
```

### 5. Adicionar Novos Idiomas

1. Adicione o novo idioma em `src/util/language.js`
2. Adicione a bandeira em `src/components/NavBar.jsx`
3. Atualize as mensagens de erro em `src/config/appConfig.js`

## 🎨 Personalização Visual

### Cores e Temas
- Use o sistema de temas integrado
- Acesse `/create-theme` para criar temas personalizados
- Temas são salvos automaticamente no localStorage

### CSS Customizado
- Edite `src/styles/style.css` para mudanças visuais
- Use variáveis CSS para consistência:
  - `--bg-color`
  - `--second-bg-color`
  - `--text-color`
  - `--main-color`

## 📧 Configuração do EmailJS

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template de email
4. Atualize as credenciais em `src/config/appConfig.js`:
```javascript
emailjs: {
  serviceId: "SEU_SERVICE_ID",
  templateId: "SEU_TEMPLATE_ID", 
  publicKey: "SUA_PUBLIC_KEY"
}
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Netlify
1. Conecte o repositório
2. Configure o build command: `npm run build`
3. Configure o publish directory: `build`

### GitHub Pages
1. Adicione `"homepage": "https://seu-usuario.github.io/repositorio"` no `package.json`
2. Execute: `npm run deploy`

## 🔍 Troubleshooting

### Problemas Comuns

#### Email não está sendo enviado
- Verifique as credenciais do EmailJS
- Confirme se o template está configurado corretamente
- Verifique o console do navegador para erros

#### Temas não estão salvando
- Verifique se o localStorage está habilitado
- Limpe o cache do navegador
- Verifique se há erros no console

#### Problemas de responsividade
- Teste em diferentes dispositivos
- Verifique os breakpoints em `src/styles/style.css`
- Use as ferramentas de desenvolvedor do navegador

#### Animações não funcionando
- Verifique se o CSS está sendo carregado
- Confirme se as classes CSS estão corretas
- Verifique se há conflitos de CSS

## 📝 Boas Práticas

1. **Sempre teste** as mudanças antes de fazer deploy
2. **Mantenha backups** do código antes de grandes mudanças
3. **Use branches** para novas funcionalidades
4. **Documente** mudanças significativas
5. **Otimize imagens** antes de adicionar ao projeto
6. **Mantenha dependências** atualizadas regularmente

## 🔄 Atualizações de Dependências

Execute regularmente:
```bash
npm audit
npm update
npm outdated
```

Para atualizações maiores:
```bash
npm-check-updates -u
npm install
```

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique este guia
2. Consulte a documentação do React
3. Verifique issues no GitHub
4. Entre em contato através do LinkedIn 
