<template>
    <div>
        <ol class="w-full flex items whitespace-nowrap p-3 rounded-md ring-1 ring-gray-200 box-border"
            aria-label="Breadcrumb">
            <li class="inline-flex items-center">
                <router-link to="/dashboard" class="breadcrumb-link-class">Dashboard</router-link>
                <SVGIcons name="lessArrow"></SVGIcons>

            </li>
            <li class="inline-flex items-center">
                <router-link to="" class="breadcrumb-link-class">
                    {{ label }}
                </router-link>
            </li>
        </ol>
    </div>
</template>
<script>
export default {
    props: {
        breadcrumbs: {
            type: Array,
            default: () => [],
        },
        label: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
    },
    watch: {
        breadcrumbs: {
            handler(newVal) {
                console.log('Breadcrumbs updated:', newVal);
            },
            deep: true,
        },
    },
}
</script>
<style scoped></style>