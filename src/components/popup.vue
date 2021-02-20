<template>
    <div
        class="flex justify-center items-center popup-outer-container fixed top-0 right-0 bottom-0 left-0 z-30"
    >
        <div 
            class="popup-background absolute w-full h-full z-30"
            @click="btn_click"
        >

        </div>
        <div class="popup-proper relative z-40 flex flex-col items-center justify-center rounded-lg bg-white shadow-lg pb-8 pt-8 px-2">
            <div class="message text-base sm:text-xl text-center pb-8">
                <span>{{ popup_message }}</span>
            </div>
            <button 
                class="btn-primary uppercase text-base sm:text-xl w-32 py-2 rounded"
                @click="btn_click">
                ok
            </button>
        </div>
        <a 
          :href="_link"
          class="hidden w-10 h-10"
          ref="hidden_link"
        ></a>
    </div>
</template>

<script>
export default {
    name: 'popup',
    props: {
        popup_message: {
            type: String,
            required: true
        },
        _link: String
    },
    methods: {
        btn_click() {
            this.$refs.hidden_link.click();
        }
    }
}
</script>

<style scoped>
    .popup-background {
        background-color: rgba(0, 0, 0, 0.5);
    }
    .popup-proper {
        width: 50%;
        min-width: 280px;
    }
</style>