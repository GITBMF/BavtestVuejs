<template>
    <div class="header flex justify-center fixed top-0 left-0 w-full h-full shadow-lg z-50 bg-white">
        <div class="header-container flex color-primary items-center justify-between">
            <div class="dropdown flex-1 flex">
                <button class="flex items-center justify-center px-4 rounded dropbtn md:hidden block">Menu</button>
                <div class="drop-content flex flex-col md:flex-row">
                    <a href=".." class="flex items-center justify-center px-4 py-2 rounded">Home</a>
                    <a href="../login" class="flex items-center justify-center px-4 py-2 rounded">Login Page</a>
                    <a href="../product-page" class="flex items-center justify-center px-4 py-2 rounded">Product Page</a>
                    <a href="../signup" class="flex items-center justify-center px-4 py-2 rounded">SignUp Page</a>
                    <a href="../add-product" class="flex items-center justify-center py-2 px-4 rounded">Add Products</a>
                </div>
            </div>
            <div class="flex">
                <a 
                    @click="alert_window"
                    href="../login" 
                    class="flex items-center justify-center px-4 rounded"
                >Logout</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EHeader',
    methods: {
        alert_window() {
            alert("You have just been logged out of your account");
        },
    }
}
</script>

<style scoped>
    .header {
        height: 60px;
        margin-bottom: 60px;
    }

    .header a {
        border-radius: 20px;
    }
    .header a:hover {
        color: white;
        background: #e75c18;
        transition: all 0.1s;
    }
    .header-container {
        width: 90%;
    }
    .header-container>div {
        height: 70%;
    }

    @media only screen and (max-width: 767px) {
        .dropbtn {
            background-color: #e75c18;
            color: white;
            border: none;
            cursor: pointer;
        }

        .dropdown {
            position: relative;
            flex: 0;
        }

        .drop-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            top: 100%;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 10;
            border-radius: 8px;
            overflow: hidden;
        }

        .drop-content a {
            border-radius: 0px;
            text-decoration: none;
            display: block;
        }

        .dropdown:hover .drop-content {
            display: block;
        }

        .dropdown:hover .dropbtn {
        background-color: #e75c18;
        }

        .header-container button {
            border-radius: 8px;
        }
    }
</style>