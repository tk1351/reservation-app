const Product = require('./model/product');

class SampleDb {
  constructor(){
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: '良質なスマートフォン',
        heading1: 'あいうえお',
        heading2: 'かきくけこ',
        heading3: 'さしすせそ',
        headingtext1:'サンプル1',
        headingtext2:'サンプル2',
        headingtext3:'サンプル3',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'コンパクトなスマートフォン',
        heading1: 'たちつてと',
        heading2: 'なにぬねの',
        heading3: 'まみむめも',
        headingtext1:'サンプル1',
        headingtext2:'サンプル2',
        headingtext3:'サンプル3',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 599,
        description: '標準のスマートフォン',
        heading1: 'はひふへほ',
        heading2: 'やゆよ',
        heading3: 'わおん',
        headingtext1:'サンプル1',
        headingtext2:'サンプル2',
        headingtext3:'サンプル3',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Android',
        price: 399,
        description: 'OSが異なるスマートフォン',
        heading1: 'abcde',
        heading2: 'fghij',
        heading3: 'klnmo',
        headingtext1:'サンプル1',
        headingtext2:'サンプル2',
        headingtext3:'サンプル3',
      }
    ]
  }

  async initDb() {
    await this.cleanDb();
    this.pushProcutsToDb();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  pushProcutsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product);
        newProduct.save();
      }
    )
  }

  seeDb() {
    this.pushProcutsToDb();
  }
}

module.exports = SampleDb;