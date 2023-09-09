export const state = () => ({
  isMenuOpen: true,
})

export const mutations = {
  toggle(state) {
    state.isMenuOpen = !state.isMenuOpen
  },
  menuSetter(state, value) {
    state.isMenuOpen = value
  }
}

export const actions = {
  setMenu({ commit }, newValue) {
    commit("menuSetter", newValue);
  },
};


export const getters = {
  getToggleState(state) {
    return state.isMenuOpen;
  }
};
