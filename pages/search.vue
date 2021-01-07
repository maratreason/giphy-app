<template>
    <div class="mt-4">
        <div class="input-group">
            <input
                type="text"
                class="form-control"
                aria-label="Text input with segmented dropdown button"
                v-model="searchText"
                ref="searchRef"
                @keyup.enter="search"
            />
            <button
                type="button"
                class="btn btn-outline-secondary"
                @click="search"
            >
                Найти
            </button>
        </div>

        <div class="row mt-4">
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

export default Vue.extend({
    name: "Search",
    data() {
        return {
            searchText: ""
        };
    },
    mounted() {
        this.focusInput();
    },
    methods: {
        search() {
            this.$store.dispatch("pictures/searchPictures", this.searchText);
        },
        focusInput() {
            let refs = <HTMLInputElement> this.$refs.searchRef;
            refs.focus();
        }
    },
    computed: {
        pictures() {
            return this.$store.getters["pictures/searchedPictures"];
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
