const app = Vue.createApp({
  data() {
    return {
      activeTipPage: 1,
      activeInspirationsPage: 1,
      activeShopNowPage: 1,
      visibleProductsCount: 8,
      cartItem: 0,
      active: false,
      like: [],
      cart: [],
      cartShown: false,
      tips: [
        { image: './images/main-tips-2.png', title: ' Solution for clean look working space ', date: '10 jan 2020' },
        { image: './images/main-tips-3.png', title: ' Solution for clean look working space ', date: '10 jan 2020' },
        { image: './images/main-tips-1.png', title: ' Solution for clean look working space ', date: '10 jan 2020' },
        { image: './images/main-tips-1.png', title: ' Solution for clean look working space ', date: '10 jan 2020' },
        { image: './images/main-tips-2.png', title: ' Solution for clean look working space ', date: '10 jan 2020' },
        { image: './images/main-tips-3.png', title: ' Solution for clean look working space ', date: '10 jan 2020' },
        { image: './images/main-tips-3.png', title: ' Solution for clean look working space ', date: '10 jan 2020' },
        { image: './images/main-tips-1.png', title: ' Solution for clean look working space ', date: '10 jan 2020' },
        { image: './images/main-tips-2.png', title: ' Solution for clean look working space ', date: '10 jan 2020' },
        { image: './images/main-tips-2.png', title: ' Solution for clean look working space ', date: '10 jan 2020' },
        { image: './images/main-tips-3.png', title: ' Solution for clean look working space ', date: '10 jan 2020' },
        { image: './images/main-tips-1.png', title: ' Solution for clean look working space ', date: '10 jan 2020' },
        { image: './images/main-tips-2.png', title: ' Solution for clean look working space ', date: '10 jan 2020' },
        { image: './images/main-tips-3.png', title: ' Solution for clean look working space ', date: '10 jan 2020' },
        { image: './images/main-tips-1.png', title: ' Solution for clean look working space ', date: '10 jan 2020' }
      ],
      inspirations: [
        { image: './images/second-image-room.png' },
        { image: './images/second-image-room.png' },
        { image: './images/third-image-room.png' },
        { image: './images/second-image-room.png' },
        { image: './images/third-image-room.png' }
      ],
      shopNow: [
        { image: './images/header-center-image.png', title: 'Bohhaus', about: 'Luxury big sofa 2-seat', price: 'Rp 7.000.000' },
        { image: './images/header-center-image-second.png', title: 'Triam', about: 'Big Kingsize bed', price: 'Rp 3.000.000' },
        { image: './images/header-center-image-third.png', title: 'Krien', about: 'Small sofa 3-seat', price: 'Rp 4.200.000' },
        { image: './images/header-center-image.png', title: 'Bohhaus', about: 'Luxury big sofa 2-seat', price: 'Rp 7.000.000' },
        { image: './images/header-center-image-second.png', title: 'Triam', about: 'Big Kingsize bed', price: 'Rp 3.000.000' },
        { image: './images/header-center-image-third.png', title: 'Krien', about: 'Small sofa 3-seat', price: 'Rp 4.200.000' }
      ],
      products: [
        { image: './images/image-1.png', title: 'Slytherine', about: 'Stylish cafe chair', oldPrice: 3500000, price: 2500000, isNew: true, id: 1111, smallImage: './images/cart-image-1.png' },
        { image: './images/image-2.png', title: 'Leviosa', about: 'Stylish cafe chair', price: 250000, id: 2222, smallImage: './images/cart-image-2.png' },
        { image: './images/image-3.png', title: 'Lolito', about: 'Luxury big sofa', oldPrice: 14000000, price: 7000000, id: 3333, smallImage: './images/cart-image-3.png' },
        { image: './images/image-4.png', title: 'Respira', about: 'Minimalist fan', price: 5000000, isNew: true, id: 4444, smallImage: './images/cart-image-1.png' },
        { image: './images/image-4-1.png', title: 'Grifo', about: 'Night lamp', price: 1500000, id: 5555 },
        { image: './images/image-6.png', title: 'Muggo', about: 'Small mug', price: 150000, isNew: true, id: 6666 },
        { image: './images/image-7.png', title: 'Pingky', about: 'Cute bed set', oldPrice: 14000000, price: 7000000, id: 7777 },
        { image: './images/image-8.png', title: 'Potty', about: 'Minimalist flower pot', price: 500000, isNew: true, id: 8888, smallImage: './images/cart-image-1.png' },
        { image: './images/image-1.png', title: 'Slytherine', about: 'Stylish cafe chair', oldPrice: 3500000, price: 2500000, id: 1111 },
        { image: './images/image-2.png', title: 'Leviosa', about: 'Stylish cafe chair', price: 250000, id: 2222 },
        { image: './images/image-3.png', title: 'Lolito', about: 'Luxury big sofa', oldPrice: 14000000, price: 7000000, id: 3333 },
        { image: './images/image-4.png', title: 'Respira', about: 'Minimalist fan', price: 5000000, isNew: true, id: 4444 },
        { image: './images/image-5.png', title: 'Grifo', about: 'Night lamp', price: 1500000, id: 5555 },
        { image: './images/image-6.png', title: 'Muggo', about: 'Small mug', price: 150000, isNew: true, id: 6666 },
        { image: './images/image-7.png', title: 'Pingky', about: 'Cute bed set', oldPrice: 14000000, price: 7000000, id: 7777 },
        { image: './images/image-8.png', title: 'Potty', about: 'Minimalist flower pot', price: 500000, isNew: true, id: 8888, smallImage: './images/cart-image-3.png' },
        { image: './images/image-1.png', title: 'Slytherine', about: 'Stylish cafe chair', oldPrice: 3500000, price: 2500000 },
        { image: './images/image-2.png', title: 'Leviosa', about: 'Stylish cafe chair', price: 250000 },
        { image: './images/image-3.png', title: 'Lolito', about: 'Luxury big sofa', oldPrice: 14000000, price: 7000000 },
        { image: './images/image-4.png', title: 'Respira', about: 'Minimalist fan', price: 5000000, isNew: true },
        { image: './images/image-4-1.png', title: 'Grifo', about: 'Night lamp', price: 1500000 },
        { image: './images/image-6.png', title: 'Muggo', about: 'Small mug', price: 150000, isNew: true },
        { image: './images/image-7.png', title: 'Pingky', about: 'Cute bed set', oldPrice: 14000000, price: 7000000 },
        { image: './images/image-8.png', title: 'Potty', about: 'Minimalist flower pot', price: 500000, isNew: true, smallImage: './images/cart-image-3.png' },
        { image: './images/image-1.png', title: 'Slytherine', about: 'Stylish cafe chair', oldPrice: 3500000, price: 2500000 },
        { image: './images/image-2.png', title: 'Leviosa', about: 'Stylish cafe chair', price: 250000 },
        { image: './images/image-3.png', title: 'Lolito', about: 'Luxury big sofa', oldPrice: 14000000, price: 7000000 },
        { image: './images/image-4.png', title: 'Respira', about: 'Minimalist fan', price: 5000000, isNew: true },
        { image: './images/image-4-1.png', title: 'Grifo', about: 'Night lamp', price: 1500000 },
        { image: './images/image-6.png', title: 'Muggo', about: 'Small mug', price: 150000, isNew: true },
        { image: './images/image-7.png', title: 'Pingky', about: 'Cute bed set', oldPrice: 14000000, price: 7000000 },
        { image: './images/image-8.png', title: 'Potty', about: 'Minimalist flower pot', price: 500000, isNew: true, smallImage: './images/cart-image-3.png' },
        { image: './images/image-1.png', title: 'Slytherine', about: 'Stylish cafe chair', oldPrice: 3500000, price: 2500000 },
        { image: './images/image-2.png', title: 'Leviosa', about: 'Stylish cafe chair', price: 250000 },
        { image: './images/image-3.png', title: 'Lolito', about: 'Luxury big sofa', oldPrice: 14000000, price: 7000000 },
        { image: './images/image-4.png', title: 'Respira', about: 'Minimalist fan', price: 5000000, isNew: true },
        { image: './images/image-4-1.png', title: 'Grifo', about: 'Night lamp', price: 1500000 },
        { image: './images/image-6.png', title: 'Muggo', about: 'Small mug', price: 150000, isNew: true },
        { image: './images/image-7.png', title: 'Pingky', about: 'Cute bed set', oldPrice: 14000000, price: 7000000 },
        { image: './images/image-8.png', title: 'Potty', about: 'Minimalist flower pot', price: 500000, isNew: true, smallImage: './images/cart-image-3.png' },
        { image: './images/image-1.png', title: 'Slytherine', about: 'Stylish cafe chair', oldPrice: 3500000, price: 2500000 },
        { image: './images/image-2.png', title: 'Leviosa', about: 'Stylish cafe chair', price: 250000 },
        { image: './images/image-3.png', title: 'Lolito', about: 'Luxury big sofa', oldPrice: 14000000, price: 7000000 },
        { image: './images/image-4.png', title: 'Respira', about: 'Minimalist fan', price: 5000000, isNew: true },
        { image: './images/image-4-1.png', title: 'Grifo', about: 'Night lamp', price: 1500000 },
        { image: './images/image-6.png', title: 'Muggo', about: 'Small mug', price: 150000, isNew: true },
        { image: './images/image-7.png', title: 'Pingky', about: 'Cute bed set', oldPrice: 14000000, price: 7000000 },
        { image: './images/image-8.png', title: 'Potty', about: 'Minimalist flower pot', price: 500000, isNew: true, smallImage: './images/cart-image-3.png' },
        { image: './images/image-1.png', title: 'Slytherine', about: 'Stylish cafe chair', oldPrice: 3500000, price: 2500000 },
        { image: './images/image-2.png', title: 'Leviosa', about: 'Stylish cafe chair', price: 250000 },
        { image: './images/image-3.png', title: 'Lolito', about: 'Luxury big sofa', oldPrice: 14000000, price: 7000000 },
        { image: './images/image-4.png', title: 'Respira', about: 'Minimalist fan', price: 5000000, isNew: true },
        { image: './images/image-4-4.png', title: 'Grifo', about: 'Night lamp', price: 1500000 },
        { image: './images/image-6.png', title: 'Muggo', about: 'Small mug', price: 150000, isNew: true },
        { image: './images/image-7.png', title: 'Pingky', about: 'Cute bed set', oldPrice: 14000000, price: 7000000 },
        { image: './images/image-8.png', title: 'Potty', about: 'Minimalist flower pot', price: 500000, isNew: true, smallImage: './images/cart-image-3.png' },
        { image: './images/image-1.png', title: 'Slytherine', about: 'Stylish cafe chair', oldPrice: 3500000, price: 2500000 },
        { image: './images/image-2.png', title: 'Leviosa', about: 'Stylish cafe chair', price: 250000 },
        { image: './images/image-3.png', title: 'Lolito', about: 'Luxury big sofa', oldPrice: 14000000, price: 7000000 },
        { image: './images/image-4.png', title: 'Respira', about: 'Minimalist fan', price: 5000000, isNew: true },
        { image: './images/image-4-1.png', title: 'Grifo', about: 'Night lamp', price: 1500000 },
        { image: './images/image-6.png', title: 'Muggo', about: 'Small mug', price: 150000, isNew: true },
        { image: './images/image-7.png', title: 'Pingky', about: 'Cute bed set', oldPrice: 14000000, price: 7000000 },
        { image: './images/image-8.png', title: 'Potty', about: 'Minimalist flower pot', price: 500000, isNew: true, smallImage: './images/cart-image-3.png' }
      ],
    }
  },
  methods: {
    selectTipPage(page) {
      this.activeTipPage = page
    },
    selectShopNowPage(page) {
      this.activeShopNowPage = page - 1
    },
    isTipVisible(index) {
      return index >= 3 * (this.activeTipPage - 1) && index < 3 * (this.activeTipPage)
    },
    isShopNowVisible(index) {
      return index === this.activeShopNowPage
    },
    isShopNowPrevVisible(index) {
      return index >= 0 && index === this.activeShopNowPage - 1
    },
    isShopNowNextVisible(index) {
      return index < this.totalShopNowPages && index === this.activeShopNowPage + 1
    },
    increaseTipPage() {
      if (this.activeTipPage < this.totalPages) {
        this.activeTipPage++
      } else {
        this.activeTipPage = 1
      }

    },
    decreaseTipPage() {
      if (this.activeTipPage > 1) {
        this.activeTipPage--
      } else {
        this.activeTipPage = this.totalPages
      }
    },
    increaseShopNowPage() {
      if (this.activeShopNowPage < this.totalShopNowPages - 1) {
        this.activeShopNowPage++
      } else {
        this.activeShopNowPage = 0
      }
    },
    decreaseShopNowPage() {
      if (this.activeShopNowPage >= 1) {
        this.activeShopNowPage--
      } else {
        this.activeShopNowPage = this.totalShopNowPages - 1
      }
    },
    showMoreProducts() {
      if (this.products.length > this.visibleProductsCount) {
        this.visibleProductsCount += 8
      }
    },

    addToCart(id, title) {
      this.cart.push(id)
      alert(`Product ${title} added to the cart!`)
    },
    addLike(id, title) {
      this.like.push(id)
      alert(`You've liked ${title}!`)
    },
    toggleCard() {
      this.cartShown = !this.cartShown
    },
    removeItemInCart(index) {
      this.cart.splice(index, 1);
    }
  },
  computed: {
    totalPages() {
      return this.tips.length / 3
    },
    totalInspirationsPages() {
      return this.inspirations.length
    },
    totalShopNowPages() {
      return this.shopNow.length
    },
    totalCart() {
      return this.cart.length / 3
    },
    visibleProducts() {
      return this.products.slice(0, this.visibleProductsCount)
    },
    cardProducts() {
      const products = this.cart.map(productId => this.products.find(product => product.id === productId))
      return products
    },
  },
})
