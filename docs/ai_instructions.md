# Padrão de Estruturação e Design do Portfólio

Este documento define as diretrizes visuais, estruturais e de comunicação do portfólio. Sempre que um agente de IA adicionar ou editar seções e projetos, deve seguir estritamente as regras abaixo.

---

## 1. Diretrizes Gerais e Privacidade

- **Comunicação e Tom de Voz**: Os textos de apresentação dos projetos ("O Desafio" e "A Jornada dos Dados") devem usar uma linguagem **clara, fluida e acessível para recrutadores (RH) e gestores**, explicando o valor de negócio e o papel de cada tecnologia sem jargões excessivamente densos (detalhes de código ficam no GitHub).
- **Privacidade**: **Nunca** incluir número de telefone pessoal em páginas HTML, scripts ou imagens do projeto. Os canais oficiais de contato são exclusivamente LinkedIn, GitHub e E-mail.
- **Responsividade (Mobile-First)**: Todos os componentes devem funcionar perfeitamente em telas mobile e desktop (`sm:`, `md:`, `lg:`).
- **Padronização de Badges de Tecnologias**: Tanto em `#experiencia`, `#formacao` (`index.html`) quanto nos cards de projetos, utilizar sempre a mesma classe:
  ```html
  <span class="text-xs px-2.5 py-1 rounded-md bg-github-bg border border-github-border text-accent-lightblue font-mono">Tecnologia</span>
  ```

---

## 2. Organização de Assets

Todo novo projeto deve ter seus arquivos isolados em uma pasta própria dentro de `assets/`:
- Exemplo: `assets/projeto_1/`, `assets/projeto_2/`, `assets/projeto_3/`
- A primeira imagem (`aws_1.jpeg`, diagrama de arquitetura, etc.) fica fixa em evidência; as demais imagens compõem o carrossel interativo em sequência.

---

## 3. Inserção no `index.html` (Seção `#projetos`)

Na seção `#projetos`, cada projeto é exibido em um card horizontal (`flex-col lg:flex-row`), com imagem de capa à esquerda (`lg:w-2/5`) e conteúdo à direita (`lg:w-3/5`):

```html
<div class="group relative rounded-xl border border-github-border bg-github-card overflow-hidden flex flex-col lg:flex-row transition-all hover:border-[COR_DESTAQUE] shadow-2xl">
    <!-- Imagem de Capa -->
    <div class="relative w-full lg:w-2/5 min-h-[220px] lg:min-h-[260px] overflow-hidden shrink-0 bg-github-bg border-b lg:border-b-0 lg:border-r border-github-border">
        <img src="assets/NOME_PASTA/IMAGEM_CAPA.png" alt="Título" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
    </div>
    
    <!-- Conteúdo -->
    <div class="relative z-10 p-6 md:p-8 flex flex-col justify-between w-full lg:w-3/5">
        <div>
            <div class="flex items-center gap-2 mb-3">
                <span class="text-xs font-mono text-[COR_DESTAQUE] bg-[COR_DESTAQUE]/10 px-2.5 py-1 rounded border border-[COR_DESTAQUE]/20">Categoria · Tema</span>
            </div>
            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-3">Título do Projeto</h3>
            <p class="text-github-muted mb-6 leading-relaxed text-sm md:text-base">
                Resumo objetivo destacando a arquitetura End-to-End e o impacto de negócio.
            </p>
        </div>
        
        <div>
            <div class="flex flex-wrap gap-2 mb-5">
                <span class="text-xs px-2.5 py-1 rounded bg-github-bg border border-github-border text-accent-lightblue font-mono">Tech 1</span>
            </div>
            <a href="projetos.html#id-do-projeto" class="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md font-medium text-sm transition-all bg-accent-blue hover:bg-blue-600 text-white shadow-lg shadow-blue-900/20 group/btn">
                Ver detalhes do projeto <i class="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
            </a>
        </div>
    </div>
</div>
```

---

## 4. Inserção no `projetos.html`

A página `projetos.html` funciona com sistema de abas controlado por `showProject(projectId)` e suporte a hash na URL.

### 4.1. Botão na Barra de Abas
```html
<button onclick="showProject('id-do-projeto')" id="btn-id-do-projeto" class="project-btn px-3 sm:px-4 py-1.5 rounded-md font-medium transition-all text-xs sm:text-sm whitespace-nowrap text-github-muted hover:text-white border border-transparent hover:border-github-border">
    [EMOJI] Título Curto
</button>
```
*Nota: Atualizar a função `showProject()` no final do `projetos.html` caso o projeto utilize uma cor de destaque própria.*

### 4.2. Estrutura do Conteúdo do Projeto
1. **Header & Introdução**:
   - Ícone do projeto (`w-14 h-14 sm:w-16 sm:h-16`), badge da stack e título.
   - Subtítulo e parágrafo introdutório **ocupando a largura total do card** (não usar `max-w-3xl` no parágrafo inicial).
   - Botões de ação (`Ver Repositório` e `Acessar Dashboard`).
2. **Narrativa (Full Width)**:
   - **1. O Desafio**: Contexto do problema e por que a solução é necessária.
   - **2. A Jornada dos Dados (Solução End-to-End)**: Explicação fluida e acessível das etapas (Bronze, Silver, Gold e consumo no BI).
   - **3. Destaques da Arquitetura**: Grid `md:grid-cols-2` com 4 cards objetivos.
3. **Bloco de Imagens & Galeria Interativa (`w-full`)**:
   - O container de imagens deve usar `<div class="space-y-10 w-full">` (sem limitar largura máxima interna).
   - A imagem de arquitetura em evidência usa `w-full max-h-[70vh] object-contain mx-auto`.
   - O visualizador principal da galeria usa `min-h-[220px] sm:min-h-[300px] md:min-h-[480px]` e a imagem usa `max-w-full max-h-[68vh] object-contain`.
   - **Regra das Miniaturas (Sem corte na última foto)**: Usar `flex gap-3 sm:gap-4 lg:grid lg:grid-cols-[N] overflow-x-auto pb-2 lg:pb-0 hide-scrollbar`, onde `[N]` é o número exato de fotos na galeria (ex.: `lg:grid-cols-7` para 7 fotos, `lg:grid-cols-8` para 8 fotos), e `w-28 h-16 sm:w-32 sm:h-20 lg:w-full lg:h-24 shrink-0` em cada botão. Assim, todas as miniaturas ficam 100% visíveis lado a lado no desktop sem cortar a última imagem, mantendo scroll horizontal no mobile.

### Exemplo do Bloco de Galeria:
```html
<div class="space-y-10 w-full">
    <!-- Imagem Fixa em Evidência (Arquitetura) -->
    <div class="rounded-xl overflow-hidden border border-github-border bg-github-bg shadow-2xl relative">
        <img src="assets/NOME_PASTA/arquitetura.png" alt="Arquitetura" class="w-full max-h-[70vh] object-contain mx-auto">
    </div>

    <!-- Galeria Interativa -->
    <div class="border border-github-border rounded-xl bg-github-bg p-3 sm:p-4 shadow-2xl">
        <div class="rounded-lg overflow-hidden mb-4 bg-[#0a0d13] flex items-center justify-center min-h-[220px] sm:min-h-[300px] md:min-h-[480px]">
            <img id="galeria-NOME-main" src="assets/NOME_PASTA/img_2.png" alt="Visualização" class="max-w-full max-h-[68vh] object-contain">
        </div>
        
        <!-- Substituir lg:grid-cols-7 pela quantidade exata de miniaturas -->
        <div class="flex gap-3 sm:gap-4 lg:grid lg:grid-cols-7 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
            <button onclick="document.getElementById('galeria-NOME-main').src='assets/NOME_PASTA/img_2.png'" class="w-28 h-16 sm:w-32 sm:h-20 lg:w-full lg:h-24 shrink-0 rounded-lg overflow-hidden border-2 border-github-border hover:border-accent-blue focus:border-accent-blue transition-colors bg-[#0a0d13]">
                <img src="assets/NOME_PASTA/img_2.png" class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity">
            </button>
        </div>
    </div>
</div>
```
