<template>
    <div>
        <ol class="w-full flex items whitespace-nowrap p-3 rounded-md ring-1 ring-gray-200 box-border" aria-label="Breadcrumb">
            <li class="inline-flex items-center">
                <router-link to="/"
                    class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500">Dashboard</router-link>
                <SVGIcons name="lessArrow"></SVGIcons>

            </li>
            <li class="inline-flex items-center">
                <router-link to="/"
                    class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500">Vendors</router-link>

            </li>
        </ol>
    </div>
</template>
<script>
export default {
    data() {
        return {
            breadcrumbs:[],
        }
    },
    methods: {

    },
    created() {

    }
}
</script>
<style scoped></style>