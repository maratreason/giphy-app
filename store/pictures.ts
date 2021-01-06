export const state = () => {
    return {
        pictures: []
    };
};

export const mutations = {
    setPictures(state: any, pictures: Array<Object>)  {
        state.pictures = pictures;
    }
};

export const actions = {
    async fetchPictures({ commit }: any) {
        const pictures = await this.$axios
            .get(
                "https://api.giphy.com/v1/gifs/trending?api_key=QSLQ6m8Xpd4QPTsWCBgXDQaYwN1OL2od"
            )
            .then((resp: any) => resp.data.data);
        commit("setPictures", pictures);
    }
};

export const getters = {
    pictures: (st: any) => st.pictures
};
