<template>
    <div>
        <div class="h-screen bg-white">

            <!-- top bar  -->
            <Header></Header>
            <!-- body section  -->
            <div class="flex text-gray-700">
                <!-- left sidebar -->
                <TheSidebar></TheSidebar>
                <!-- right sidebar -->
                <div class="right-sidebar p-2 w-full">
                    <RouterView></RouterView>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TheSidebar from '../components/layouts/TheSidebar.vue';
import Header from '../components/layouts/Header.vue';

export default {
    data() {
        return {

        }
    },
    methods: {

    },
    created() {

    },
    components:{
        TheSidebar,Header
    }
}
</script>
<style scoped></style>