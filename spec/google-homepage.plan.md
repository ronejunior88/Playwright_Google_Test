# Plano de teste - Verificação da página inicial do Google

## Application Overview

Validar, em uma sessão nova do navegador, que https://www.google.com/ abre a página inicial correta do Google e apresenta visivelmente a palavra "Google" no logotipo acessível.

## Test Scenarios

### 1. Verificação básica da página inicial

**Seed:** `tests/Google/seed.spec.ts`

#### 1.1. Exibe Google ao acessar o site oficial

**File:** `tests/Google/google-homepage.spec.ts`

**Steps:**
  1. Inicie o teste com uma página nova, sem estado ou navegação anterior, e acesse https://www.google.com/.
    - expect: A navegação termina sem erro e a página do Google é carregada.
  2. Verifique se o endereço atual pertence ao domínio www.google.com.
    - expect: O endereço atual é https://www.google.com/ (parâmetros de URL adicionais são aceitáveis).
  3. Procure na página o logotipo com o nome acessível "Google" e verifique se está visível.
    - expect: A palavra "Google" está visível no logotipo da página inicial.
