<template>
    <div class="mt-4">
        <div class="row">
            <div
                class="card-wrapper col-md-3 mb-4"
                v-for="picture of pictures"
                :key="picture.id"
            >
                <Card :picture="picture" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "@/components/Card/Card.vue";

export default Vue.extend({
    name: "Index",
    components: {
        Card
    },
    async fetch({ store }) {
        if (store.getters["pictures/pictures"].length === 0) {
            await store.dispatch("pictures/fetchPictures");
        }
    },
    computed: {
        pictures() {
            return this.$store.getters["pictures/pictures"];
        }
    }
});
</script>

<style scoped>
.card-wrapper {
    box-sizing: border-box;
    margin-right: 30px;
}
</style>
