export default class apiProducts {
  url = `https://ogon-pushka.herokuapp.com`;
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
  getCategorie = (id) => this.getResourse(`products?_where[categories]=${id}`);
  getProduct = (id) => this.getResourse(`products/${id}`);
  getFaqs = () => this.getResourse('faqs');
  getHome = () => this.getResourse('home');
  getAbout = () => this.getResourse('about');
  getNew = () => this.getResourse('products?_where[new]=true')
};

const api = new apiProducts();
api.getNew().then(products => console.log(products));

api.getAbout().then(products => console.log(products));