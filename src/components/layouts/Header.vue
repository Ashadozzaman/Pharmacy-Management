<template>
    <div class="top-bar border-b">
        <div class="w-100 bg-slate-50">
            <div class="flex">
                <div class="left w-1/2 px-2 py-4">
                    <div class="flex gap-4 justify-start items-center">
                        <div id="hamburger" class="space-y-1 z-10">
                            <div class="w-6 h-1 bg-gray-700"></div>
                            <div class="w-3 h-1 bg-gray-700"></div>
                            <div class="w-6 h-1 bg-gray-700"></div>
                        </div>
                        <img class="w-12" src="../../assets/images/pharmacy-logo.png" alt="">
                        <input class="p-2 rounded-md ring-2 ring-gray-700 h-10" type="text" placeholder="Search">
                    </div>
                </div>
                <div class="right w-1/2 px-2 py-4">
                    <div class="flex justify-end items-center gap-4">
                        <img id="dark" src="../../assets/images/moon.png" class="hidden md:block w-10 cursor-pointer" alt="" />
                        <div class="profile">
                            <img class="w-10 ring-2 ring-offset-purple-500 rounded-full transform hover:scale-105 duration-500"
                                src="../../assets/images/file.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    created() {

    }
}
</script>
<style scoped></style>