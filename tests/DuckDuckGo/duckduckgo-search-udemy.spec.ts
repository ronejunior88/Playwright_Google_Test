import { test, expect } from '@playwright/test';

test.describe('DuckDuckGo', () => {
  test('Pesquisa Udemy no DuckDuckGo e abre o resultado oficial', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await expect(page).toHaveTitle(/DuckDuckGo/i);
    await expect(page).toHaveURL(/^https:\/\/duckduckgo\.com\//);

    
    const searchBox = page.getByRole('combobox', { name: 'Search with DuckDuckGo' });
    await expect(searchBox).toBeVisible();

    await page.goto('https://duckduckgo.com/');
    const searchField = page.getByRole('combobox', { name: /Search|Pesquisar/i });
    await searchField.fill('Udemy');
    await searchField.press('Enter');

    const udemyResult = await page.getByRole('link', {
      name: 'Udemy: Online Courses for Skills, Careers & AI',
      exact: true,
    });
    
    await expect(udemyResult).toHaveAttribute('href', 'https://www.udemy.com/');
    await expect(udemyResult).toBeVisible();
  
    await udemyResult.click();

    await expect(page).toHaveURL(/^https:\/\/www\.udemy\.com\//);
    await expect(page).toHaveTitle(/.+/);
  });
});
