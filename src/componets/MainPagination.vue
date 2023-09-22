<script setup>
import { ref } from 'vue' 
const pages = ref(10)
const activePage = ref(4)

const prePage = () => {
    if (activePage.value > 1) {
        activePage.value--
    }
}

const nextPage = () => {
    if (activePage.value < pages.value) {
        activePage.value++
    }
}

</script>



<template>

    <!-- This code below activates the page numbers at the bottom of the page.-->
    <div class="pageination">
         <button class="action" :disabled="activePage === 1" @click="prePage">Prev</button>
            <button class="page" v-for="page in pages" :class="page === activePage ? 'active' : ''" @click="activePage = page">
                {{ page }}
                </button>
            <button class="action" :disabled="activePage === pages" @click="nextPage">Next</button>
         <button> </button>
    </div>
    <!---------------------------------------------------------------------------------------------->
    <!---------------------------------------------------------------------------------------------->
</template>


<!---------------- STYLING OF THE ICONS OF THE PAGE INATION   -------------------------------------->
<style lang="postcss" scoped>
    .pageination {

    
        

        @apply flex justify-center gap-4;
        .action {
            @apply rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md hover:bg-blue-200 disabled:text-slate-200 hover:disabled:bg-slate-100;
            
        }
        .page {
            @apply rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md hover:bg-blue-200;
            &.active {
                @appply bg-yellow-700 text-slate-100 hover:bg-yellow-600;
            }
        }
    }
</style>
<!---------------- STYLING OF THE ICONS OF THE PAGE INATION   -------------------------------------->
