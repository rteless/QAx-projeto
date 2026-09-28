import { expect } from "@playwright/test";
export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator(".cart_item");
    this.continueShoppingButton = page.locator("#continue-shopping");
  }

  async verificarProdutoNoCarrinho(nomeProduto) {
    const cartItemLocator = this.page.locator(
      `.cart_item:has-text("${nomeProduto}")`,
    );
    await expect(cartItemLocator).toBeVisible();
  }
}
