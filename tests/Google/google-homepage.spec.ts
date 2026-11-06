import { test, expect } from '@playwright/test';

test.describe('Verificação básica da página inicial', () => {
  test('Exibe Google ao acessar o site oficial', async ({ page }) => {
    // 1. Inicie o teste com uma página nova, sem estado ou navegação anterior, e acesse https://www.google.com/.
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');

    // 2. Verifique se o endereço atual pertence ao domínio www.google.com.
    await expect(page).toHaveURL(/^https:\/\/www\.google\.com\/(?:\?.*)?$/);

    // 3. Procure na página o logotipo com o nome acessível "Google" e verifique se está visível.
    await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
  });
});
