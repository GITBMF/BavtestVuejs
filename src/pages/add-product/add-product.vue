<template>
      <div class="forms-body body w-full bg-white md:bg-gray-100 h-screen py-8">
        <div class="p-5 md:shadow-lg text-base rounded max-w-screen-sm mx-auto pb-4 bg-white rounded">
          <h1 class=" heading text-center text-4xl pt-5 mb-8 color-primary font-semibold">Add a Product or Service</h1>
          <div class="grid grid-cols-10 gap-x-4 mr-2">
            <div class="product-name relative sm:mx-2 mb-2 col-span-7">
              <input
                v-model="product_name"
                type="text"
                placeholder="product name*"
                class="border focus-border-primary outline-none pl-4 mr-1 text-sm rounded w-full h-12"
                required
              />
            </div>
            <div class="upload-image relative col-span-3 row-span-2 bg-gray-200 mb-3 rounded border-2 border-dashed border-gray-400 cursor-pointer">
              <input
                @change="imChanged"
                accept="image/*"
                class="absolute cursor-pointer top-0 opacity-0 left-0 z-20 w-full h-full"
                type="file"
                name="productImage"
                id="file-input"
              />
              <img
                class="cursor-pointer top-0 z-10 left-0 w-full h-full px-2 py-2"
                width="90"
                height="90"
                alt=""
                src=" "
                ref="product_preview"
              />
            </div>
            
            <div class="description relative sm:mx-2 mb-2 col-span-7">
              <textarea
                v-model="description"
                placeholder="product description*"
                class="border focus-border-primary outline-none pl-4 mr-1 text-sm rounded w-full h-36 py-2"
                required
              />
            </div>
          </div>
          
          <div class="price relative sm:mx-2 mb-2">
            <input
              v-model="price"
              type="number"
              placeholder="price*($)"
              class="border focus-border-primary outline-none pl-4 mr-1 text-sm rounded w-full h-12"
              required
            />
          </div>
          <div class="condition relative sm:mx-2 mb-2">
            <select 
              @change="change_condition"
              name="condition" 
              id="condition"
              required
              class="border focus-border-primary outline-none pl-4 mr-1 text-sm rounded w-full h-12">
              <option value="none" selected disabled>Product Condition*</option>
              <option value="Option1">Excellent</option>
              <option value="Option2">Good</option>
              <option value="Option3">Bad</option>
            </select>
          </div>
            <div class="flex justify-between items-center w-full px-4">
              <label for="discount" class="flex items-center">
                
                <input
                  style="width: 18px; height: 18px"
                  class="mr-1"
                  type="checkbox"
                  name="dicount"
                  id="discount"
                />
                  Discount
              </label>
              <label for="is-service" class="flex items-center">
                
                <input
                  style="width: 18px; height: 18px"
                  class="mr-1"
                  type="checkbox"
                  name="is-service"
                  id="is-service"
                />
                  Item is a Service
              </label>
              <label for="published" class="flex items-center">
                
                <input
                  style="width: 18px; height: 18px"
                  class="mr-1"
                  type="checkbox"
                  name="published"
                  id="published"
                />
                  Published
              </label>
            </div>
          <div
            class="log-in flex mr-2 justify-center md:justify-end mt-4"
          >
            <button
                type="button"
                class="py-2 px-4 btn-primary rounded font-bold w-40"
                :disabled="!validator"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      product_name: '',
      description: '',
      price: '',
      condition: 'none',
      imageFile: null,
      image: null,
    };
  },
  computed: {
    validator() {
      return (this.product_name != '') && (this.description != '') && (this.price != '') && (this.imageFile != null) && (this.condition != 'none')
    }
  },
  methods: {
    change_condition(event) {
      this.condition = event.target.value;
    },
    imChanged(event) {
      if(event.target.files[0]) {
        this.imageFile = event.target.files[0];
        const imageEl = this.$refs.product_preview;

        const reader = new FileReader();

        reader.onload = e => {
          this.image = imageEl;
          this.image.src = e.target.result;
        };

        reader.readAsDataURL(this.imageFile);
      }
    },
  }
};
  
</script>

<style scoped>
.upload-image {
  background-image: url('../../assets/add_photo.png');
  background-position: center;
  background-size: contain;
}

img:not([src = " "]) {
  background-color: white;
}
</style>

