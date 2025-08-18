# Site Profissional - Dra. Rayssa (Psicóloga)

Um site profissional de uma página única (single page) para uma psicóloga clínica, desenvolvido com HTML5, JavaScript e Tailwind CSS.

## 🎯 Características

- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Single Page Application**: Navegação suave entre seções
- **Design Moderno**: Interface limpa e profissional usando Tailwind CSS
- **Interativo**: JavaScript para funcionalidades dinâmicas
- **SEO Otimizado**: Estrutura semântica e meta tags apropriadas

## 📋 Seções do Site

1. **Header/Navegação**: Menu fixo com navegação suave
2. **Hero Section**: Apresentação principal com foto e CTAs
3. **Sobre**: Informações sobre a psicóloga e formação
4. **Serviços**: Tipos de atendimento e preços
5. **Depoimentos**: Feedback de pacientes
6. **Contato**: Formulário e informações de contato
7. **Footer**: Links e informações adicionais

## 🚀 Funcionalidades

### JavaScript
- Menu mobile responsivo
- Navegação suave (smooth scroll)
- Destacar seção ativa na navegação
- Validação de formulário de contato
- Sistema de notificações
- Formatação automática de telefone
- Botão flutuante do WhatsApp
- Animações on scroll

### Design
- Palette de cores profissional (azul, verde, cinza)
- Tipografia legível e hierárquica
- Ícones Font Awesome
- Imagens do Unsplash para demonstração
- Hover effects e transições suaves
- Cards com sombras e efeitos

## 📁 Estrutura de Arquivos

```
/
├── index.html          # Página principal
├── script.js           # Funcionalidades JavaScript
├── styles.css          # Estilos customizados adicionais
└── README.md           # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos customizados e animações
- **Tailwind CSS**: Framework CSS utilitário
- **JavaScript**: Interatividade e validações
- **Font Awesome**: Ícones
- **Unsplash**: Imagens de demonstração

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `index.html` na configuração do Tailwind:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#2563eb',    // Azul principal
                secondary: '#f8fafc',  // Cinza claro
                accent: '#059669'      // Verde de destaque
            }
        }
    }
}
```

### Conteúdo
Para personalizar o conteúdo:

1. **Informações Pessoais**: Altere nome, CRP, especialização no `index.html`
2. **Imagens**: Substitua as URLs do Unsplash por imagens reais
3. **Contatos**: Atualize telefone, email, endereço nas seções de contato
4. **Serviços**: Modifique tipos de atendimento e preços conforme necessário
5. **Depoimentos**: Substitua por depoimentos reais (com autorização)

### WhatsApp
Para configurar o WhatsApp, altere o número no arquivo `script.js`:

```javascript
const phone = '5511999999999'; // Substitua pelo número real
```

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com 3 colunas
- **Tablet**: Layout adaptado com 2 colunas
- **Mobile**: Layout em coluna única com menu hambúrguer

## 🔧 Como Usar

1. **Desenvolvimento Local**:
   ```bash
   # Clone ou baixe os arquivos
   # Abra index.html em um navegador
   ```

2. **Deploy**:
   - Hospede os arquivos em qualquer servidor web
   - Serviços recomendados: Netlify, Vercel, GitHub Pages

## ✅ Checklist de Configuração

Antes de colocar o site no ar, certifique-se de:

- [ ] Alterar todas as informações pessoais
- [ ] Substituir imagens por fotos reais
- [ ] Configurar número do WhatsApp
- [ ] Atualizar informações de contato
- [ ] Revisar todos os textos e depoimentos
- [ ] Testar formulário de contato
- [ ] Verificar responsividade em diferentes dispositivos
- [ ] Otimizar imagens para web

## 📞 Funcionalidades de Contato

### Formulário de Contato
O formulário inclui:
- Validação de campos obrigatórios
- Validação de email
- Formatação automática de telefone
- Mensagens de confirmação

### Integração com WhatsApp
- Botão flutuante fixo
- Links nos ícones sociais
- Mensagem pré-definida

## 🎯 SEO e Performance

### Otimizações Incluídas
- Tags meta apropriadas
- Estrutura semântica HTML5
- Imagens com atributos alt
- Loading otimizado de recursos
- CSS e JS minificados (recomendado para produção)

### Melhorias Sugeridas para Produção
- Comprimir imagens
- Minificar CSS e JavaScript
- Implementar lazy loading para imagens
- Adicionar Google Analytics
- Configurar sitemap.xml
- Implementar schema.org markup

## 📧 Suporte

Para dúvidas sobre customização ou problemas técnicos, consulte a documentação do Tailwind CSS ou entre em contato com o desenvolvedor.

## 📄 Licença

Este projeto é fornecido como template para uso profissional. Sinta-se à vontade para modificar e usar conforme suas necessidades.
# Rayssa
