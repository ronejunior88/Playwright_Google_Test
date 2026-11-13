# Plano de testes - DuckDuckGo e Udemy

## Application Overview

Validar o DuckDuckGo como mecanismo de busca, pesquisar Udemy, confirmar que um resultado aponta para o domínio oficial e abrir a página inicial da Udemy.

## Test Scenarios

### 1. DuckDuckGo

**Seed:** `tests/DuckDuckGo/seed.spec.ts`

#### 1.1. Exibe a página inicial oficial do DuckDuckGo

**File:** `tests/DuckDuckGo/duckduckgo-homepage.spec.ts`

**Steps:**
  1. Abra https://duckduckgo.com/ em uma página nova, sem estado ou navegação anterior.
    - expect: A página carrega com título identificando DuckDuckGo.
    - expect: O endereço pertence ao domínio duckduckgo.com.
  2. Localize o campo de pesquisa acessível na página inicial.
    - expect: O campo de pesquisa está visível e pode receber texto.

#### 1.2. Pesquisa Udemy no DuckDuckGo e abre o resultado oficial

**File:** `tests/DuckDuckGo/duckduckgo-search-udemy.spec.ts`

**Steps:**
  1. Em uma página nova, acesse https://duckduckgo.com/ e pesquise por Udemy usando o campo de pesquisa.
    - expect: A página de resultados é exibida e indica a consulta Udemy.
  2. Localize um resultado de pesquisa cujo destino final seja https://www.udemy.com/ e cujo nome acessível identifique Udemy.
    - expect: O resultado oficial está visível.
    - expect: O nome acessível do resultado inclui Udemy.
    - expect: O destino do resultado pertence ao domínio www.udemy.com.
  3. Abra o resultado oficial da Udemy.
    - expect: A navegação termina em uma URL HTTPS do domínio www.udemy.com.
    - expect: A página da Udemy carrega e apresenta um título não vazio.
