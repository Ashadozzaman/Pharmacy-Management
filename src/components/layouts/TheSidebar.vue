<template>
    <div class="left-sidebar md:w-1/4 xl:w-1/5 h-screen bg-slate-50 border-r p-2">
        <!-- End Navigation Toggle -->
        <div class="px-1 lg:px-4 py-2">
            <router-link to="/dashboard"
                class="flex-none text-sm md:text-lg lg:text-xl font-semibold dark:text-white">Pharmacy
                Management</router-link>
        </div>
        <nav class="hs-according-group p-6 w-full flex flex-col  flex-wrap">
            <ul class="space-y-1.5">
                <!-- <li>
                    <a class="side-bar-class "
                        active-class="active-link" exact>
                        <SVGIcons name="dashboard"></SVGIcons>
                        Dashboard
                    </a>
                </li> -->
                <li>
                    <router-link to="/dashboard/overview"
                        class="side-bar-class ">
                        <SVGIcons name="overview"></SVGIcons>
                        Overview
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/drugs"
                        class="side-bar-class">
                        <SVGIcons name="drugs"></SVGIcons>
                        Drugs
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/vendors"
                        class="side-bar-class ">
                        <SVGIcons name="vendors"></SVGIcons>
                        Vendors
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/selling/history"
                        class="side-bar-class ">
                        <SVGIcons name="history"></SVGIcons>
                        Selling History
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/setting"
                        class="side-bar-class ">
                        <SVGIcons name="setting"></SVGIcons>
                        Setting
                    </router-link>
                </li>
                <li>
                    <button type="button"
                        class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-blue-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        <SVGIcons name="users"></SVGIcons>
                        Users

                        <svg class="hs-accordion-active:block ms-auto hidden w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m18 15-6-6-6 6" />
                        </svg>

                        <svg class="hs-accordion-active:hidden ms-auto block w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                    </button>
                    <ul class="flex flex-col justify-center items-end">
                        <li class="hover:bg-blue-200 py-2 px-2.5 text-sm text-slate-700 rounded-lg mt-1 w-11/12 ">Profile
                        </li>
                        <li class="hover:bg-blue-200 py-2 px-2.5 text-sm text-slate-700 rounded-lg mt-1 w-11/12">Logout</li>
                    </ul>
                </li>
                <li>

                </li>
            </ul>

        </nav>
    </div>
</template>
<script>
import SVGIcons from '../setting/SVGIcons.vue';

export default {
    data() {
        return {};
    },
    methods: {},
    created() {
    },
    components: { SVGIcons }
}
</script>
<style scoped>
</style>