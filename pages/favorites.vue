<template>
    <div>
        <div class="mt-4">
            <div class="row">
                <div
                    class="card-wrapper col-md-3 mb-4"
                    v-for="picture of favorites"
                    :key="picture.id"
                >
                    <Card :picture="picture" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            favorites: []
        };
    },
    mounted() {
        this.favorites = JSON.parse(localStorage.getItem("pictures") || "[]");
    }
};
</script>

<style></style>
