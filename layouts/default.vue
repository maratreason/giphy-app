<template>
    <div>
        <Navbar />

        <div class="main">
            <div class="container">
                <Nuxt />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
export default {
    components: {
        Navbar
    }
};
</script>

<style></style>
