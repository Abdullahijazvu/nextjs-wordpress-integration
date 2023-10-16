import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: "http://localhost/wordpress",
  consumerKey: "ck_589031ae86104662d1f829fbb391ccf1b6de5edb",
  consumerSecret: "cs_bca0680fa924259791281bb1030a15058f09f1da",
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products");
    return response;
  } catch (error:any) {
    throw new Error(error);
  }
}