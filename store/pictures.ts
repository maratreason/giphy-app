export const state = () => {
    return {
        pictures: [],
        favorites: [],
        searchedPictures: []
    };
};

export const mutations = {
    setPictures(state: any, pictures: Array<Object>) {
        state.pictures = pictures;
    },
    setSearchedPictures(state: any, pictures: Array<Object>) {
        state.searchedPictures = pictures;
    },
    setFavorites(state: any, favorites: Array<Object>) {
        state.favorites.push(favorites);
    },
    deleteFavorites(state: any, id: String) {
        state.favorites = state.favorites.filter((el: any) => el.id !== id);
    }
};

export const actions = {
    async fetchPictures({ commit }: any) {
        const { data } = await this.$axios.get(
            "https://api.giphy.com/v1/gifs/trending?api_key=QSLQ6m8Xpd4QPTsWCBgXDQaYwN1OL2od"
        );
        commit("setPictures", data.data);
    },
    async searchPictures({ commit }: any, searchText: String) {
        const { data } = await this.$axios.get(
            `https://api.giphy.com/v1/gifs/search?api_key=QSLQ6m8Xpd4QPTsWCBgXDQaYwN1OL2od&q=${searchText}&limit=8`
        );
        commit("setSearchedPictures", data.data);
    },
    setFavorites({ commit }: any, favorites: Array<Object>) {
        commit("setFavorites", favorites);
    },
    deleteFavorites({ commit }: any, id: String) {
        commit("deleteFavorites", id);
    }
};

export const getters = {
    pictures: (st: any) => st.pictures,
    favorites: (st: any) => st.favorites,
    searchedPictures: (st: any) => st.searchedPictures
};
