<template>
    <div class="card" style="width: 18rem;">
        <img
            :src="picture.images.downsized.url"
            class="card-img-top"
            :alt="picture.embed_url"
        />
        <div class="card-body">
            <h5 class="card-title">{{ picture.title }}</h5>
            <p class="card-text">
                {{ picture.import_datetime }}
            </p>
            <div v-if="favorites.find(el => el.id === picture.id)">
                <button
                    class="btn btn-warning"
                    @click="removeFromFavorites(picture.id)"
                >
                    Remove from favorites
                </button>
            </div>
            <div v-else>
                <button
                    class="btn btn-primary"
                    @click="addToFavorites(picture)"
                >
                    Add to favorites
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Card",
    props: {
        picture: Object
    },
    data() {
        return {
            favorites: []
        };
    },
    mounted() {
        this.favorites = JSON.parse(localStorage.getItem("pictures") || "[]");
    },
    methods: {
        addToFavorites(obj: Object) {
            let favoritesArray = JSON.parse(
                localStorage.getItem("pictures") || "[]"
            );
            if (!favoritesArray.includes(obj)) {
                favoritesArray.push(obj);
            }
            localStorage.setItem("pictures", JSON.stringify(favoritesArray));
            this.favorites = favoritesArray;
        },
        removeFromFavorites(id: String) {
            const oldFavorites = JSON.parse(
                localStorage.getItem("pictures") || "[]"
            );
            const newFavorites = oldFavorites.filter((el: any) => el.id !== id);
            localStorage.setItem("pictures", JSON.stringify(newFavorites));
            this.favorites = newFavorites;
        }
    }
};
</script>

<style></style>
