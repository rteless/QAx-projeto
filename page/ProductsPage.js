import { expect } from "@playwright/test";
export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.cartIcon = page.locator(".shopping_cart_link");
    this.productsTitle = page.getByText("Products");
  }

  async verificarPaginaProdutos() {
    await expect(this.productsTitle).toBeVisible();
  }

  async adicionarProdutoAoCarrinho(nomeProduto) {
    const productLocator = this.page.locator(
      `.inventory_item:has-text("${nomeProduto}")`,
    );
    const addToCartButton = productLocator.locator(
      'button:has-text("Add to cart")',
    );
    await addToCartButton.click();
  }

  async abrirCarrinho() {
    await this.cartIcon.click();
  }
}
