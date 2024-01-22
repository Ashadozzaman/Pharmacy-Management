<template>
    <div class="">
        <div :class="getToastClass()">
            <div class="flex flex-row relative">
                <span class="font-bold text-lg" :class="getToastTypeClass()"> {{ toastType }} !!</span>
                <span class="absolute top-0 right-0 text-red-500 cursor-pointer  hover:font-semibold">X</span>
            </div>
            <div class="text-sm font-bold text-red-500">
                {{ message }}
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
        getToastClass(){
            return `mt-2 rounded-md p-2 ${this.toastType === 'Error' ? 'bg-red-300' : 'bg-green-100'}`;
        },
        getToastTypeClass(){
            return this.toastType === 'Error' ? 'text-red-700' : 'text-green-700';
        }
    },
    created() {

    },
    props: {
        toastType: {
            type: String,
            default: "Success"
        },
        message: {
            type: String,
            default: "Test Message"
        }
    }
}
</script>
<style scoped></style>