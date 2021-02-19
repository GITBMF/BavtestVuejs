<template>
    <div class="productPreview-item relative rounded">
        <div class="image-div">
            <img
                class="image-proper w-full h-full outline-none border-0"
                :src="src != ''? src: require('@/' + image)"
                
            />
        </div>
        <div class="below-image px-4 py-2 flex flex-col justify-start">
            <div class="product-name font-semibold text-xl">
                <span>{{ prodname }}</span>
            </div>
            <div class="prices flex items-center">
                <div class="price color-primary font-bold text-2xl mr-4">
                    <span>
                        ${{ price }}
                    </span>
                </div>
                <div 
                    class="old-price text-base line-through  opacity-50"
                    v-if="old_price">
                    <span>
                        ${{ old_price }}
                    </span>
                </div>
            </div>
            <div class="description text-sm whitespace-nowrap overflow-ellipsis overflow-hidden w-full">
                <span class="">
                    {{ description }}
                </span>
            </div>
            <div 
                class="discount absolute top-0 right-0 font-semibold text-white px-1 py-2 rounded-sm bg-primary text-sm"
                v-if="discount"
            >
                -{{ discount }}%
            </div>
        </div>
        <a href="../product-page" class="absolute top-0 left-0 w-full h-full"></a>
    </div>
</template>

<script>
export default {
    name: 'productPreview',
    props: {
        prodname: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        src: {
            type: String,
            default: ""
        },

        discount: String,
        old_price: String,
    },
    // computed: {
    //     styles() {
    //         return {
    //             '--bg-image-url': `url('../${this.image}')` 
    //         }
    //     }
    // }
}
</script>

<style scoped>
.productPreview-item {
    height: 300px;
    overflow: hidden;
    box-shadow: 0 0px 25px -5px rgba(0, 0, 0, 0.1), 0 0px 10px -5px rgba(0, 0, 0, 0.04)
}
.productPreview-item::before {
    content: 'Discover ...';
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    left: 0;
    color: rgb(190, 65, 19);
    width: 0;
    height: 0;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.3s;
    overflow: hidden;
}

.productPreview-item:hover::before {
    width: 100%;
    height: 100%;
}

.image-div {
    height: 65%;
    overflow: hidden;
}
.image-proper {
    /* background-image: url('../assets/image1.jpg'); */
    /*background-image: var(--bg-image-url); */ 
    /* background-size: cover;
    background-position: center; */
}
</style>