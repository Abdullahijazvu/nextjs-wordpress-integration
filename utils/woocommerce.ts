import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: "https://next-wordpress.local/",
  consumerKey: "ck_05d98f919cade9ecfb6feaf766c68b761376ca30",
  consumerSecret: "cs_d45f48c6a91277e45d190e8de8db4407aa3c6b0d",
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