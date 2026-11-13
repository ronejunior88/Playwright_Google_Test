# Plano de testes - Google

## Application Overview

Validar a página inicial do Google e pesquisar o site da Udemy, verificando o resultado por nome e URL e abrindo o link oficial.

## Test Scenarios

### 1. Google

**Seed:** `tests/Google/seed.spec.ts`

#### 1.1. Exibe Google ao acessar o site oficial

**File:** `tests/Google/google-homepage.spec.ts`

**Steps:**
  1. Abra https://www.google.com/ em uma página nova.
    - expect: A página carrega com o título Google e o logotipo acessível Google visível.
  2. Verifique o endereço atual.
    - expect: O endereço pertence ao domínio www.google.com.

#### 1.2. Pesquisa e abre o site oficial da Udemy

**File:** `tests/Google/google-search-udemy.spec.ts`

**Steps:**
  1. Acesse https://www.google.com/ e pesquise por Udemy.
    - expect: A página de resultados da pesquisa é exibida.
  2. Localize o resultado cujo link aponta para https://www.udemy.com/ e valide que o nome Udemy aparece no link.
    - expect: O link do resultado aponta para www.udemy.com e seu texto inclui Udemy.
  3. Clique no link oficial da Udemy.
    - expect: O navegador abre o site em www.udemy.com.
