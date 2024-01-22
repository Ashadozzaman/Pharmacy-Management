<template>
    <div>
        <router-view></router-view>
        <div class="fixed top-0 right-1 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 md:p-0">
            <TransitionGroup name="toastMessage" tag="ul">
                <TheToast v-for="(toast, i) in toasts" :key="i" :toastType="toast.type" :message="toast.message"></TheToast>
            </TransitionGroup>
        </div>
    </div>
</template>
<script>
import TheToast from './components/TheToast.vue';
export default {
    data() {
        return {
            toasts: [
            ]
        }
    },
    components: {
        TheToast
    },
    mounted() {
        this.$eventBus.on('toast', (data) => {
            // console.log(data);
            this.toasts.push(data);
            this.removeToast();
        })
    },
    methods: {
        removeToast() {
            setTimeout(() => {
                this.toasts.shift(); // remove first value
            }, 2000)
        }
    }
}
</script>
<style scoped>

.toastMessage-enter-active,
.toastMessage-leave-active {
    transition: all 0.5s ease;
}

.toastMessage-enter-from,
.toastMessage-leave-to {
    opacity: 0;
    transform: translateX(150px);
}
</style>
