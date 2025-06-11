# 🎴 Anime Card Collection

Um simulador de coleção de cartas de anime interativo e responsivo, onde você pode "roletar" personagens de diferentes animes com sistema de raridade.

## 🎯 Sobre o Projeto

Este projeto simula um sistema de coleção de cartas de personagens de anime, onde o usuário pode:
- **Roletar cartas** com diferentes níveis de raridade
- **Filtrar personagens** por nome, anime ou raridade
- **Revelar cartas** conforme as obtém através do sistema de roleta
- **Visualizar modais** com informações detalhadas das cartas obtidas

## 🚀 Funcionalidades

### 🎲 Sistema de Roleta
- **7 níveis de raridade** com probabilidades diferentes:
  - Comum (35% de chance)
  - Incomum (25% de chance)  
  - Rara (20% de chance)
  - Épica (10% de chance)
  - Lendária (6% de chance)
  - Mítica (3% de chance)
  - Secreta (1% de chance)

### 🔍 Sistema de Filtros
- **Pesquisa por nome**: Digite parte do nome do personagem
- **Filtro por anime**: Selecione um anime específico
- **Filtro por raridade**: Filtre por nível de raridade

### 🎨 Interface Interativa
- **Cartas ocultas**: Personagens não obtidos aparecem como "???" em tons de cinza
- **Revelação dinâmica**: Cartas são reveladas automaticamente ao serem obtidas
- **Modal de recompensa**: Popup mostra a carta obtida
- **Design responsivo**: Funciona perfeitamente em desktop, tablet e mobile

### 📱 Scroll Personalizado
- Implementação de scroll suave usando a biblioteca Smooth Scrollbar
- Controle de posição de scroll para melhor experiência do usuário

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com flexbox e responsividade
- **JavaScript Vanilla**: Lógica de negócio e manipulação do DOM
- **Smooth Scrollbar**: Biblioteca para scroll personalizado

## 📁 Estrutura do Projeto

```
anime-card-collection/
├── index.html              # Página principal
├── src/
│   ├── css/
│   │   ├── styles.css      # Estilos principais
│   │   └── responsivo.css  # Media queries para responsividade
│   ├── js/
│   │   └── index.js        # Lógica principal da aplicação
│   └── images/
│       ├── logo.png        # Logo da aplicação
│       ├── seta-para-baixo.png # Ícone dos selects
│       └── Personagens/    # Imagens dos personagens
│           ├── sung-jin-woo.jpeg
│           ├── murata.jpg
│           ├── l.jpeg
│           ├── desconhecido.png
│           └── completo.png
└── README.md
```

## 🎮 Como Usar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/anime-card-collection.git
   cd anime-card-collection
   ```

2. **Abra o arquivo `index.html`** em seu navegador

3. **Comece a roletar**:
   - Clique no botão "Roletar" para obter cartas aleatórias
   - Use os filtros para encontrar personagens específicos
   - Cartas obtidas serão reveladas automaticamente

## 🎨 Personagens Incluídos

### Solo Leveling
- **Sung Jin Woo** (Mítica) - O protagonista Shadow Monarch

### Demon Slayer  
- **Murata** (Comum) - Demon Slayer Corps member

### Death Note
- **L** (Épica) - O famoso detetive consultor

## 🔧 Principais Algoritmos

### Sistema de Probabilidade
O sistema de roleta utiliza números aleatórios de 1-100 para determinar a raridade:
- A função `aleatorioEntre()` gera números aleatórios no intervalo especificado
- Verificação se ainda existem cartas disponíveis na raridade sorteada
- Prevenção de cartas duplicadas

### Filtragem Dinâmica
- Filtragem em tempo real conforme o usuário digita ou seleciona opções
- Combinação de múltiplos filtros simultaneamente
- Controle de visibilidade das cartas baseado nos filtros ativos

### Gerenciamento de Estado
- Array `cartasDoJogador` mantém registro das cartas obtidas
- Sistema de reveal/hide para cartas usando classes CSS
- Preservação dos dados originais usando data attributes

## 📱 Responsividade

O projeto inclui breakpoints para diferentes tamanhos de tela:
- **Desktop** (1024px+): Layout em grid com múltiplas colunas
- **Tablet** (768px-1024px): Ajustes no layout dos filtros
- **Mobile** (até 768px): Layout em coluna única e elementos empilhados

## 🎯 Próximas Melhorias

- [ ] Adicionar mais personagens e animes
- [ ] Sistema de conquistas/achievements  
- [ ] Estatísticas de coleção (% completo)
- [ ] Animações de roleta mais elaboradas
- [ ] Sistema de favoritos
- [ ] Sistema de login com save

---

⭐ **Desenvolvido com paixão por anime e programação!** ⭐
