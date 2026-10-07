# Padrão de Estruturação de Projetos no Portfólio

Este documento define o padrão esperado para a inserção de novos projetos no portfólio. Sempre que a IA for orientada a adicionar um novo projeto, ela deve seguir estritamente as regras e a estrutura abaixo.

## 1. Organização de Assets

Todo novo projeto deve ter seus assets (imagens, ícones) isolados em uma pasta própria dentro de `assets/`.
Exemplo: `assets/projeto_3/`

- As imagens devem ser otimizadas e ter nomes descritivos.
- A imagem principal (capa) será utilizada tanto no `index.html` quanto no cabeçalho do projeto no `projetos.html`.

## 2. Inserção no `index.html`

Na seção `#projetos`, o projeto deve ser inserido como um card longo, seguindo o padrão flexbox (Imagem à esquerda, conteúdo à direita). O card deve manter a estética adotada (sombras profundas, bordas, hover com transição de cor).

### Estrutura do Card no Index:
```html
<div class="group relative rounded-xl border border-github-border bg-github-card overflow-hidden flex flex-col lg:flex-row transition-all hover:border-[COR_DE_DESTAQUE] shadow-2xl">
    <!-- Imagem de Capa -->
    <div class="relative w-full lg:w-2/5 min-h-[220px] lg:min-h-[260px] overflow-hidden shrink-0 bg-github-bg border-b lg:border-b-0 lg:border-r border-github-border">
        <img src="assets/NOME_PASTA/IMAGEM_CAPA.png" alt="Título" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
    </div>
    
    <!-- Conteúdo -->
    <div class="relative z-10 p-6 md:p-8 flex flex-col justify-between w-full lg:w-3/5">
        <div>
            <!-- Tags / Categoria -->
            <div class="flex items-center gap-2 mb-3">
                <span class="text-xs font-mono text-[COR] bg-[COR]/10 px-2.5 py-1 rounded border border-[COR]/20">Categoria · Tema</span>
            </div>
            
            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-3">Título do Projeto</h3>
            <p class="text-github-muted mb-6 leading-relaxed text-sm md:text-base">
                Breve resumo chamativo sobre o projeto.
            </p>
        </div>
        
        <div>
            <!-- Tecnologias (Badges) -->
            <div class="flex flex-wrap gap-2 mb-5">
                <span class="text-xs px-2.5 py-1 rounded bg-github-bg border border-github-border text-accent-lightblue font-mono">Tech 1</span>
                <!-- ... -->
            </div>
            
            <!-- Botão de redirecionamento -->
            <a href="projetos.html#id-do-projeto" class="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md font-medium text-sm transition-all bg-accent-blue hover:bg-blue-600 text-white shadow-lg shadow-blue-900/20 group/btn">
                Ver detalhes do projeto <i class="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
            </a>
        </div>
    </div>
</div>
```

## 3. Inserção no `projetos.html`

A página `projetos.html` funciona com sistema de abas via JavaScript. Para adicionar um projeto:

### 3.1. Adicionar Botão na Navbar de Abas
```html
<button onclick="showProject('id-do-projeto')" id="btn-id-do-projeto" class="project-btn px-4 py-1.5 rounded-md font-medium transition-all text-sm whitespace-nowrap text-github-muted hover:text-white border border-transparent hover:border-github-border">
    [EMOJI] Título Curto
</button>
```
*Lembrar de atualizar a lógica JS no final do arquivo caso a nova cor do projeto precise ser manipulada na função `showProject()`.*

### 3.2. Estrutura do Corpo do Projeto
O conteúdo do projeto segue a ordem lógica do Framework de Solução de Problemas:

1. **Header**: Ícone principal (`w-16 h-16`), Tags, Título e Resumo. Botões externos (Repositório / Dashboard).
2. **Desdobramento**:
   - **Contexto** (Por que o projeto existe?)
   - **Dor** (Qual o problema enfrentado?)
   - **Solução** (Como foi resolvido?)
   - **Decisões Técnicas** (Grid com cards explicando arquitetura e ferramentas)
3. **Galeria de Imagens**:
   - Uma imagem estática de destaque (geralmente arquitetura).
   - Uma galeria interativa abaixo (baseado no Projeto 2), onde há uma `div` de visualização principal e uma `div` de miniaturas (thumbnails).

### Exemplo do Padrão da Galeria:
```html
<div class="space-y-12">
    <!-- Imagem Fixa de Destaque -->
    <div class="rounded-xl overflow-hidden border border-github-border bg-github-bg shadow-2xl relative">
        <img src="assets/NOME_PASTA/ARQUITETURA.png" alt="Arquitetura" class="w-full h-auto object-cover">
    </div>

    <!-- Galeria Interativa -->
    <div class="border border-github-border rounded-xl bg-github-bg p-4 shadow-2xl">
        <div class="rounded-lg overflow-hidden mb-4 bg-black flex items-center justify-center min-h-[300px] md:min-h-[500px]">
            <img id="galeria-NOME-main" src="assets/NOME_PASTA/img1.png" class="max-w-full max-h-[70vh] object-contain">
        </div>
        
        <div class="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
            <button onclick="document.getElementById('galeria-NOME-main').src='assets/NOME_PASTA/img1.png'" class="...">
                <img src="assets/NOME_PASTA/img1.png" class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity">
            </button>
            <button onclick="document.getElementById('galeria-NOME-main').src='assets/NOME_PASTA/img2.png'" class="...">
                <img src="assets/NOME_PASTA/img2.png" class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity">
            </button>
        </div>
    </div>
</div>
```

**Nota para a IA:** Ao seguir este documento, o portfólio manterá a consistência visual em cores, sombras e transições (`transition-all`, hover effects) e usará estritamente os estilos do TailwindCSS (ex: bordas `border-github-border`, fundos `bg-github-card`, text `text-github-muted`).
