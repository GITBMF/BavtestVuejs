<template>
  <e-header/>
  <div class="main w-full h-full bg-gray-100">
    <div class="product-page-main shadow-lg bg-white max-w-screen-xl mx-auto">
      <div class="product-proper">
        <aside class="description-aside">
          <div class="content">
            <h2 class="description-heading">
                DESCRIPTION
            </h2>
            <ul class="description-info">
              <li>
                <span class="type">
                  Mark : 
                </span>
                <span class="answer">
                  STARSAT
                </span>
              </li>
              <li>
                <span class="type">
                  Category : 
                </span>
                <span class="answer">
                  Televisions and Electronics
                </span>
              </li>
              <li>
                <span class="type">
                  Specifics : 
                </span>
                <span class="answer">
                  Functions with a rechargeable battery either by solar charging or by an A.C voltage of 220V.
                </span>
              </li>
              <li>
                <span class="type">
                  Screen size : 
                </span>
                <span class="answer">
                  19 inches
                </span>
              </li>
              <li>
                <span class="type">
                  Intro Versatile System : 
                </span>
                <span class="answer">
                  LED
                </span>
              </li>
              <li>
                <span class="type">
                  Specifics : 
                </span>
                <span class="answer">
                  Functions with a rechargeable battery either by solar charging or by an A.C voltage of 220V.
                </span>
              </li>
              <li>
                <span class="type">
                  Connectivity : 
                </span>
                <span class="answer">
                  HDMI, USB 2.0
                </span>
              </li>
              <li>
                <span class="type">
                  Specifics : 
                </span>
                <span class="answer">
                  Functions with a rechargeable battery either by solar charging or by an A.C voltage of 220V.
                </span>
              </li>
              <li>
                <span class="type">
                  Model : 
                </span>
                <span class="answer">
                  SVX, HVC Amoled 2.0 CES
                </span>
              </li>
              <li>
                <span class="type">
                  Specifics : 
                </span>
                <span class="answer">
                  Functions with a rechargeable battery either by solar charging or by an A.C voltage of 220V.
                </span>
              </li>
              <li>
                <span class="type">
                  Screen Type : 
                </span>
                <span class="answer">
                  ultra thin
                </span>
              </li>
              <li>
                <span class="type">
                  Specifics : 
                </span>
                <span class="answer">
                  Functions with a rechargeable battery either by solar charging or by an A.C voltage of 220V.
                </span>
              </li>
              <li>
                <span class="type">
                  Connectivity : 
                </span>
                <span class="answer">
                  HDMI, USB 2.0
                </span>
              </li>
              <li>
                <span class="type">
                  Coulor : 
                </span>
                <span class="answer">
                  Black
                </span>
              </li>
              <li>
                <span class="type">
                  Battery : 
                </span>
                <span class="answer">
                  4500 mAH
                </span>
              </li>
              <li class="garanty text-white">
                <span class="type bg-primary">
                  GARANTY : 
                </span>
                <span class="answer bg-primary">
                  12 MONTHS
                </span>
              </li>
            </ul>
          </div>
        </aside>
        <section class="proper-section">
          <div class="product-details" id="product-details">
            <div class="product-pics">
              <div class="main-pic" ref="main_pic">
                <img
                  class="w-full h-full"
                  alt=""
                  :src="require('@/' + main_pic)"
                  
                />
              </div>
              <div class="other-pics">
                <div class="slider" id="other-pics-slider">
                  <div class="slide-item s1 active" ref="first_pic" @click="setMainPic">

                  </div>
                  <div class="slide-item s2" @click="setMainPic">

                  </div>
                  <div class="slide-item s3" @click="setMainPic">

                  </div>
                  <div class="slide-item s4" @click="setMainPic">

                  </div>
                  <div class="slide-item s5" @click="setMainPic">

                  </div>
                  <div class="slide-item s6" @click="setMainPic">

                  </div>
                </div>
              </div>
            </div>
            <div class="beside-pics">
              <div class="product-info pr-4">
                <div class="promotion-tree">
                  <span class="black-circle">&#x25cf;</span> 
                  <span>Electronics, TV LED</span>
                </div>
                <div class="name">
                    <h2>
                        {{ prodname }}
                    </h2>
                </div>
                <div class="reference-rating text-gray-500 text-lg">
                  <div class="reference">
                    <p><span class="font-bold">REFERENCE</span>: TD-140587353843</p>
                    <p><span class="font-bold">MARK</span>: STARSAT</p>
                  </div>
                  <div class="rating-box">
                    <div class="rating">
                      <ul class="flex text-gray-400 text-3xl">
                        <li class="star1 color-primary mr-2">
                          &#x2605;
                        </li>
                        <li class="star2 color-primary mr-2">
                          &#x2605;
                        </li>
                        <li class="star3 color-primary mr-2">
                          &#x2605;
                        </li>
                        <li class="star4 color-primary mr-2">
                          &#x2605;
                        </li>
                        <li class="star5 not-selected">
                          &#x2605;
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="price-quantity">
                  <div class="old-new-price">
                    <span class="old-price">
                      $ {{old_price}}
                    </span>
                    <span class="price color-primary">
                      $ {{price}}
                    </span>
                  </div>
                  <div class="discount-quantity">
                    <div class="discount bg-primary">
                      <span>-{{discount}}%</span>
                    </div>
                    <div class="quantity">
                      <span>{{qty_in_stock}} IN STOCK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="more pl-4">
              <div class="other-info">
                  <div class="product-notes">
                      <div class="notes-item">
                          <div class="heading">
                              <h2>
                                  <span class="bg-primary text-white">
                                      {{ heading}}
                                  </span>
                              </h2>
                          </div>
                          <div class="notes">
                              <p>{{ description }}</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="product-rating">
                  <div class="heading uppercase">
                      <h3>
                          Rate this product
                      </h3>
                  </div>
                  <div class="your-rating-container">
                      <span>Note moyenne</span>
                      <h1>
                          <label class="your-rating">0</label><span>/5</span>
                      </h1>
                      <div class="rating">
                        <ul class="flex text-gray-400 text-3xl">
                          <li class="star1 not-selected cursor-pointer mr-2">
                            &#x2605;
                          </li>
                          <li class="star2 not-selected cursor-pointer mr-2">
                            &#x2605;
                          </li>
                          <li class="star3 not-selected cursor-pointer mr-2">
                            &#x2605;
                          </li>
                          <li class="star4 not-selected cursor-pointermr-2">
                            &#x2605;
                          </li>
                          <li class="star5 not-selected cursor-pointer">
                            &#x2605;
                          </li>
                        </ul>
                      </div>
                  </div>
                  <div class="others-rating">
                      <ul>
                          <li>
                              <span>5 Star </span><span class="box-to-fill"></span> <span> 0%</span>
                          </li>
                          <li>
                              <span>4 Star </span><span class="box-to-fill"></span> <span> 0%</span>
                          </li>
                          <li>
                              <span>3 Star </span><span class="box-to-fill"></span> <span> 0%</span>
                          </li>
                          <li>
                              <span>2 Star </span><span class="box-to-fill"></span> <span> 0%</span>
                          </li>
                          <li>
                              <span>1 Star </span><span class="box-to-fill"></span> <span> 0%</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import eHeader from '../../components/e-header.vue'
export default {
  components: { eHeader },
  name: 'productPage',
  data() {
    return {
      main_pic: 'assets/television-front.png',
      active_pic: '',
      product_images: {
        s1: "assets/television-front.png",
        s2: "assets/television-side.png",
        s3: "assets/television-side-front.png",
        s4: "assets/television-back.png",
        s5: "assets/television-front.png",
        s6: "assets/television-side.png"
      },
      prodname: 'FLAT SCREEN TV LED STARSAT - 19" - SOLAR ENERGY BATTERY - 12 MONTHS',
      price: '1000',
      image: 'assets/image4.jpg',
      discount: '10',
      old_price: '1200',
      qty_in_stock: '8',
      description: `Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id 
                    est laborum."
                    <br><br>
                    "Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. 
                    `,
      heading: 'DISCOVER THE FLAT SCREEN TV LED STARSAT - 19" - SOLAR ENERGY BATTERY - 12 MONTHS'
    }
  },
  methods: {
    getImagePath(element) {
    if(element.classList.contains("s1"))
        return this.product_images.s1
    if(element.classList.contains("s2"))
        return this.product_images.s2
    if(element.classList.contains("s3"))
        return this.product_images.s3
    if(element.classList.contains("s4"))
        return this.product_images.s4
    if(element.classList.contains("s5"))
        return this.product_images.s5
    if(element.classList.contains("s6"))
        return this.product_images.s6
    },
    setMainPic(event) {
      console.log('entered')
      if(event.target != this.active_pic) {
        console.log('entered')
          this.active_pic.classList.remove("active");
          event.target.classList.add("active");
          this.main_pic = this.getImagePath(event.target);
          this.active_pic = event.target;
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.active_pic = this.$refs.first_pic;
    });
  }
}
</script>

<style scoped>
.product-page-main {
  width: 90%;
}

@media only screen and (max-width: 769px) {
  .product-page-main {
    width: 100%;
  }
}

.product {
  overflow: hidden;
}

.product-proper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  margin-bottom: 10px;
  padding-bottom: 20px;
  -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
}

.description-aside {
  -webkit-box-flex: 1;
      -ms-flex: 1 0 200px;
          flex: 1 0 200px;
  max-width: 250px;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(128, 128, 128, 0.2);
          box-shadow: 0px 0px 10px 5px rgba(128, 128, 128, 0.2);
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin-bottom: 20px;
  border-radius: 0 0 8px 8px;
}

.description-aside .description-heading {
  padding: 0 15px 0;
  font-size: 18px;
  font-weight: bold;
  height: 70px;
  line-height: 80px;
  border-bottom: 1px solid #e6e6e6;
}

.description-aside .description-info {
  padding-top: 15px;
  padding-bottom: 25px;
  -webkit-transition: opacity 0.6s 0.2s;
  transition: opacity 0.6s 0.2s;
}

.description-aside .description-info li {
  font-size: 11px;
  font-weight: normal;
  padding: 0px 15px 0px;
  line-height: 1.8em;
}

.description-aside .description-info .type {
  font-weight: bold;
}

.description-aside .description-info .answer {
  white-space: normal;
}

.description-aside .livraison-rapide {
  text-align: center;
  font-size: 11px;
  font-weight: bold;
  padding: 25px 15px;
  background-color: rgba(166, 166, 166, 0.2);
  border-radius: 0 0 8px 8px;
  line-height: 1.5em;
}

.description-aside .livraison-rapide .green-color {
  color: green;
}

.description-aside .livraison-rapide .custom-check {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url("/img/category/custom-check.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  -webkit-transform: translateY(4px);
          transform: translateY(4px);
}

.proper-section {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.proper-section .product-details {
  margin-left: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  position: relative;
}

.proper-section .product-details > div {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 360px;
          flex: 1 1 360px;
  margin-bottom: 25px;
}

.proper-section .product-details .product-pics {
  margin-right: 30px;
}

.proper-section .product-details .main-pic {
  height: 300px;
}

.proper-section .product-details .other-pics {
  overflow: hidden;
}

.proper-section .product-details .other-pics .slider {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 2px 2px 10px 0;
  max-width: 10px;
}

.proper-section .product-details .other-pics .slider .slide-item {
  -ms-flex-negative: 0;
      flex-shrink: 0;
  width: 110px;
  height: 110px;
  margin-left: 5px;
  border-radius: 8px;
  position: relative;
  -webkit-box-shadow: 0px 0px 10px 6px rgba(128, 128, 128, 0.2);
          box-shadow: 0px 0px 10px 6px rgba(128, 128, 128, 0.2);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  overflow: hidden;
}

.proper-section .product-details .other-pics .slider .slide-item:hover {
  cursor: pointer;
  -webkit-transform: scale(1.05);
          transform: scale(1.05);
}

.proper-section .product-details .other-pics .slider .s1 {
  background-image: url("../../assets/television-front.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  background-size: contain;
}

.proper-section .product-details .other-pics .slider .s2 {
  background-image: url("../../assets/television-side.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  background-size: contain;
}

.proper-section .product-details .other-pics .slider .s3 {
  background-image: url("../../assets/television-side-front.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  background-size: contain;
}

.proper-section .product-details .other-pics .slider .s4 {
  background-image: url("../../assets/television-back.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  background-size: contain;
}

.proper-section .product-details .other-pics .slider .s5 {
  background-image: url("../../assets/television-front.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  background-size: contain;
}

.proper-section .product-details .other-pics .slider .s6 {
  background-image: url("../../assets/television-side.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  background-size: contain;
}

.proper-section .product-details .other-pics .slider .active::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 5px;
  background-color: #e75c18;
  bottom: 10%;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
}

.proper-section .product-details .beside-pics {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.proper-section .product-details .product-info {
  overflow: hidden;
}

.proper-section .product-details .product-info .promotion-tree {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #33a8fb;
  font-size: 14px;
}

.proper-section .product-details .product-info .promotion-tree span {
  white-space: normal;
}

.proper-section .product-details .product-info .promotion-tree .black-circle {
  width: 15px;
}

.proper-section .product-details .product-info .name h2 {
  white-space: normal;
  font-size: 20px;
  font-weight: bold;
}

.proper-section .product-details .product-info .reference-rating {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 5px 0 5px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

.proper-section .product-details .product-info .reference-rating .reference {
  font-size: 13px;
  color: #9a9a9a;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.proper-section .product-details .product-info .reference-rating .rating-box {
  padding-right: 25px;
  font-size: 24px;
}

.proper-section .product-details .product-info .price-quantity {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
}

.proper-section .product-details .product-info .price-quantity .old-new-price {
  background-color: rgba(166, 166, 166, 0.2);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  -ms-flex-preferred-size: 300px;
      flex-basis: 300px;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px 0;
}

.proper-section .product-details .product-info .price-quantity span {
  display: inline-block;
}

.proper-section .product-details .product-info .price-quantity .old-price {
  padding: 10px;
  text-decoration: line-through;
  font-size: 11px;
}

.proper-section .product-details .product-info .price-quantity .price {
  font-size: 24px;
  font-weight: 900;
}

.proper-section .product-details .product-info .price-quantity .discount-quantity {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  margin-right: 5px;
  margin-bottom: 5px;
  min-height: 36px;
}

.proper-section .product-details .product-info .price-quantity .discount {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0px 5px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: white;
  font-size: 14px;
}

.proper-section .product-details .product-info .price-quantity .quantity {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: black;
  padding: 0px 10px;
  margin-left: 5px;
  color: white;
  font-size: 14px;
}

.proper-section .product-details .buying-section {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  padding-top: 20px;
  padding-bottom: 20px;
}

.proper-section .product-details .buying-section .order-quantity {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 15px;
}

.proper-section .product-details .buying-section .order-quantity .qty-text {
  font-size: 12px;
  color: #4d4d4d;
}

.proper-section .product-details .buying-section .order-quantity button {
  background-color: rgba(166, 166, 166, 0.2);
  border: none;
  font-size: 20px;
  border-radius: 5px;
  display: inline-block;
  width: 34px;
  height: 34px;
  padding-bottom: 6px;
  outline: none;
  color: #4d4d4d;
  cursor: default;
}

.proper-section .product-details .buying-section .order-quantity button.disabled {
  opacity: 0.4;
}

.proper-section .product-details .buying-section .order-quantity button:not(.disabled):hover {
  background-color: rgba(90, 90, 90, 0.2);
}

.proper-section .product-details .buying-section .order-quantity .qty-selected {
  display: inline-block;
  font-size: 11px;
  font-weight: bold;
  width: 33px;
  height: 33px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #4d4d4d;
  outline: none;
  -webkit-transform: translateY(-1px);
          transform: translateY(-1px);
}

.proper-section .product-details .buying-section .order-quantity .qty-selected::-webkit-outer-spin-button, .proper-section .product-details .buying-section .order-quantity .qty-selected::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.proper-section .product-details .buying-section .order-quantity .qty-selected[type=number] {
  -moz-appearance: textfield;
}

.proper-section .product-details .buying-section .add-to-cart {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  min-width: 180px;
}

.proper-section .product-details .buying-section .add-to-cart .add-to-cart-button {
  max-width: 400px;
}

.proper-section .product-details .buying-section .add-to-cart button {
  padding-top: 7px;
  padding-bottom: 2px;
}

.proper-section .product-details .below-buying .vendeur {
  font-size: 11px;
  text-align: center;
  line-height: 30px;
}

.proper-section .product-details .below-buying .trader {
  font-size: 13px;
  font-weight: bold;
  color: #f6b220;
}

.proper-section .product-details .below-buying .livraison {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

.proper-section .product-details .below-buying .livraison > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  min-width: 400px;
  -ms-flex-negative: 1;
      flex-shrink: 1;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.proper-section .product-details .below-buying .livraison > div > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 45%;
          flex: 1 1 45%;
  margin-left: 10px;
  min-width: 190px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 12px 5px 12px 8px;
  opacity: 0.2;
  -webkit-transition: opacity 0.6s 0.2s;
  transition: opacity 0.6s 0.2s;
  cursor: default;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.proper-section .product-details .below-buying .livraison > div > div:hover {
  opacity: 1;
}

.proper-section .product-details .below-buying .livraison > div > div .icon {
  display: inline-block;
  position: relative;
  margin-right: 5px;
}

.proper-section .product-details .below-buying .livraison > div > div .icon .pl-lil {
  padding-left: 0;
}

.proper-section .product-details .below-buying .livraison > div > div .icon i.absolute {
  top: 16px;
  left: 10px;
}

.proper-section .product-details .below-buying .livraison > div > div .icon i.fa-credit-card {
  top: 19px;
  left: 0px;
}

.proper-section .product-details .below-buying .livraison > div > div .icon i.number2 {
  top: 16px;
}

.proper-section .product-details .below-buying .livraison > div > div .service-client i.fa-comment {
  top: 25px;
  left: 3px;
}

.proper-section .product-details .below-buying .livraison > div > div .service-client i.fa-user-friends {
  top: 10px;
  left: 0px;
}

.proper-section .product-details .below-buying .livraison > div > div .icon-text {
  display: inline-block;
  white-space: normal;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.proper-section .product-details .below-buying .livraison > div > div .icon-text * {
  white-space: normal;
}

.proper-section .product-details .below-buying .livraison > div > div .orangeTxt {
  color: inherit;
}

.proper-section .product-details .below-buying .livraison .livraison-proper {
  background-color: green;
  color: white;
}

.proper-section .more {
  padding-top: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.proper-section .other-info {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  margin-right: 30px;
}

.proper-section .product-notes .notes {
  max-height: unset;
}

.proper-section .product-notes .notes-item {
  margin-right: 10px;
  min-width: unset;
}

.proper-section .command-iziway .command-quote {
  padding: 0px 0px 0px 15px;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
}

.proper-section .command-iziway .command-quote span {
  white-space: normal;
}

.proper-section .command-iziway .command-container {
  padding: 0px 0px 0px 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

.proper-section .command-iziway .command-container .command-item {
  -webkit-box-flex: 1;
      -ms-flex: 1 0 28%;
          flex: 1 0 28%;
  min-width: 220px;
  max-width: 500px;
  background-color: rgba(166, 166, 166, 0.2);
  margin-right: 10px;
  margin-bottom: 10px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.proper-section .command-iziway .command-container .command-item:hover {
  background-color: rgba(103, 103, 103, 0.2);
}

.proper-section .command-iziway .command-container .command-item a {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 5px 15px 5px 25px;
}

.proper-section .command-iziway .command-container .vendre-iziway {
  background-color: #f6b220;
}

.proper-section .command-iziway .command-container .vendre-iziway:hover {
  background-color: #a97607;
}

.proper-section .command-iziway .command-container .politique {
  background-color: black;
  color: white;
}

.proper-section .command-iziway .command-container .politique:hover {
  background-color: #333333;
}

.proper-section .product-rating {
  padding-left: 25px;
  padding-right: 25px;
}

.proper-section .product-rating .heading {
  font-size: 20px;
  font-weight: bold;
  color: #0c2c74;
  padding-bottom: 25px;
}

.proper-section .product-rating .heading h3 {
  line-height: 1em;
}

.proper-section .product-rating .your-rating-container {
  text-align: center;
  background-color: rgba(166, 166, 166, 0.2);
  font-size: 11px;
  padding: 0px 60px 0px 60px;
}

.proper-section .product-rating .your-rating-container > span {
  color: #9a9a9a;
}

.proper-section .product-rating .your-rating-container h1 {
  font-size: 35px;
  font-weight: bold;
  color: green;
}

.proper-section .product-rating .your-rating-container .rating {
  font-size: 24px;
}

.proper-section .product-rating .others-rating {
  font-size: 13px;
  padding-top: 20px;
  padding-right: 10px;
  padding-left: 10px;
  color: #9a9a9a;
}

.proper-section .product-rating .others-rating li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  line-height: 2em;
}

.proper-section .product-rating .others-rating li span {
  display: inline-block;
}

.proper-section .product-rating .others-rating li .box-to-fill {
  margin-left: 4px;
  margin-right: 4px;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  height: 8px;
  background-color: rgba(166, 166, 166, 0.2);
}

.promotion .promotion-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-right: -20px;
}

.promotion .promotion-container > div {
  height: 220px;
  min-width: 300px;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  border-radius: 10px;
  margin-right: 20px;
  position: relative;
  margin-bottom: 20px;
}

.promotion .promotion-container > div::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-transition: all 0.3s 0s ease;
  transition: all 0.3s 0s ease;
  border-radius: 10px;
}

.promotion .promotion-container > div:hover::after {
  width: 100%;
  height: 100%;
}

.promotion .promotion-container > div a {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
}

.promotion .promotion-container .promotion1 {
  background-image: url("/img/category/promotion1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
}

.promotion .promotion-container .promotion2 {
  background-image: url("/img/category/promotion2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
}

.recent .heading {
  font-size: 24px;
  font-weight: bold;
}

.product-page-notes .notes-item .heading h2 {
  font-size: 24px;
}

.product-page-notes .notes-item .heading .after-highlight {
  color: black;
}

.product-page-notes .notes {
  max-height: unset;
}

@media only screen and (max-width: 1300px) {
  .proper-section .product-details .below-buying {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}

@media only screen and (max-width: 700px) {
  .product-proper {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  .description-aside {
    border-top: 1px solid #e6e6e6;
    -webkit-box-flex: 1;
        -ms-flex: 1 0 90%;
            flex: 1 0 90%;
    max-width: unset;
    -webkit-box-shadow: none;
            box-shadow: none;
    border-radius: 0px;
    -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
            order: 2;
    margin-top: 20px;
  }
  .description-aside .description-heading {
    border-bottom: none;
    line-height: 40px;
    height: 40px;
  }
  .description-aside .description-info {
    opacity: 1;
    padding-top: 0;
  }
  .description-aside .livraison-rapide {
    border-radius: 0px;
  }
  .proper-section {
    -webkit-box-flex: 1;
        -ms-flex: 1 0 90%;
            flex: 1 0 90%;
    -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
            order: 1;
  }
  .proper-section .product-rating {
    padding-top: 20px;
    padding-left: 0;
    padding-right: 0;
  }
  .proper-section .product-details {
    margin-right: 20px;
  }
  .proper-section .product-details .below-buying .livraison > div > div {
    opacity: 1;
  }
  .tree {
    font-size: 13px;
  }
}

@media only screen and (max-width: 600px) {
  .proper-section .other-info {
    -ms-flex-preferred-size: 90%;
        flex-basis: 90%;
  }
}

</style>