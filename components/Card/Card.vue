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
            <div v-if="favorites && favorites.find(el => el.id === picture.id)">
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
import Vue from "vue";
import { Picture } from "@/types/types";

export default Vue.extend({
    name: "Card",
    props: {
        picture: Object
    },
    computed: {
        favorites() {
            return this.$store.getters["pictures/favorites"];
        }
    },
    methods: {
        addToFavorites(obj: Picture): void {
            this.$store.dispatch("pictures/setFavorites", obj);
        },
        removeFromFavorites(id: String): void {
            this.$store.dispatch("pictures/deleteFavorites", id);
        }
    }
});
</script>

<style></style>
