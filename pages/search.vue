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

<script>
export default {
    data() {
        return {
            pictures: [],
            searchText: ""
        };
    },
    mounted() {
        this.focusInput();
    },
    methods: {
        async search() {
            this.pictures = await this.$axios
                .get(
                    `https://api.giphy.com/v1/gifs/search?api_key=QSLQ6m8Xpd4QPTsWCBgXDQaYwN1OL2od&q=${this.searchText}&limit=8`
                )
                .then(resp => resp.data.data);
        },
        focusInput() {
            this.$refs.searchRef.focus();
        }
    }
};
</script>

<style scoped>
.card-wrapper {
    box-sizing: border-box;
    margin-right: 30px;
}
</style>
