<template>
    <div>
        <Breadcrumb label="Vendors" path=""></Breadcrumb>
        <h1>Vendors</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            breadcrumbsData: 
            [
                { label: "Vendors", path: "/dashboard/vendors" },
            ],
        }
    },
}
</script>
<style scoped></style>