export default class apiProducts {
  url = `https://dev-ogon.herokuapp.com`;
  async getResourse(value) {
    const res = await fetch(`${this.url}/${value}`);
    if(!res.ok) {
      throw new Error(`Could not fetch ${this.url}` +
      `, received ${res.status}`)
    }
    return await res.json();
  };

  getProducts = () => this.getResourse('products');
  getCategories = () => this.getResourse('categories');
  getFunctionCategories = () => this.getResourse('function-categories');
  getCategorie = (id) => this.getResourse(`categories/${id}`);
  getProduct = (id) => this.getResourse(`products/${id}`);
  getFaqs = () => this.getResourse('faqs');
  getHome = () => this.getResourse('home');
};

// const api = new apiProducts();
// api.getFunctionCategories().then(products => console.log(products));
// api.getFaqs().then(products => console.log(products));
// api.getHome().then(products => console.log(products));