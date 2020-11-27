export default class apiOrder {
  async postResourseAdd(url,data) {
    const baseUrl = `https://ogon-pushka.herokuapp.com`;
    const res = await fetch(`${baseUrl}${url}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Origin': '*',
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data),
    });
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
    }
    return await res.json();
  };

  sendFastBuy = (data) => {
    this.postResourseAdd('orders', data);
  }

  sendBuy = (data) => {
    this.postResourseAdd('orders', data);
  }
};