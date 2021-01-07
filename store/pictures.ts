import { Picture } from "@/types/types";
import { ActionTree, MutationTree, GetterTree  } from "vuex";

export type StoreType = {
    dispatch: Function;
    commit: Function;
    getters: Object;
    state: Object;
    rootGetters: Object;
    rootState: Object;
};

export type StateType = {
    pictures: Array<Picture>,
    favorites: Array<Object>,
    searchedPictures: Array<Picture>,
}

export type Getters = {
    pictures(state: StateType): Array<Picture>
    favorites(state: StateType): Array<Object>
    searchedPictures(state: StateType): Array<Picture>
}

export const state = () => {
    return {
        pictures: [],
        favorites: [],
        searchedPictures: []
    };
};

export const mutations: MutationTree<StateType> = {
    setPictures(state: StateType, pictures: Array<Picture>) {
        state.pictures = pictures;
    },
    setSearchedPictures(state: StateType, pictures: Array<Picture>) {
        state.searchedPictures = pictures;
    },
    setFavorites(state: StateType, favorites: Array<Picture>) {
        state.favorites.push(favorites);
    },
    deleteFavorites(state: StateType, id: String) {
        state.favorites = state.favorites.filter((el: any) => el.id !== id);
    }
};

export const actions: ActionTree<StoreType, StoreType> = {
    async fetchPictures({ commit }: StoreType) {
        const { data } = await this.$axios.get(
            "https://api.giphy.com/v1/gifs/trending?api_key=QSLQ6m8Xpd4QPTsWCBgXDQaYwN1OL2od"
        );
        commit("setPictures", data.data);
    },
    async searchPictures({ commit }: StoreType, searchText: String) {
        const { data } = await this.$axios.get(
            `https://api.giphy.com/v1/gifs/search?api_key=QSLQ6m8Xpd4QPTsWCBgXDQaYwN1OL2od&q=${searchText}&limit=8`
        );
        commit("setSearchedPictures", data.data);
    },
    setFavorites({ commit }: StoreType, favorites: Array<Picture>) {
        commit("setFavorites", favorites);
    },
    deleteFavorites({ commit }: StoreType, id: String) {
        commit("deleteFavorites", id);
    }
};

export const getters: GetterTree<StateType, StateType> & Getters = {
    pictures: (st: StateType) => st.pictures,
    favorites: (st: StateType) => st.favorites,
    searchedPictures: (st: StateType) => st.searchedPictures
};
