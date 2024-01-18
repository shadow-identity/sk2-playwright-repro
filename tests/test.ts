import { expect, test } from '@playwright/test';
import { baz } from '$lib/baz';

test('about page has expected h1', async ({ page }) => {
	baz()
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
});
