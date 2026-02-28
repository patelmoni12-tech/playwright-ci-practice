test('CI update test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.locator('text=Get started')).toBeVisible();
});