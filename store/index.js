export const state = () => ({
  isMenuOpen: true,
})

export const mutations = {
    toggle(state) {
        state.isMenuOpen = !state.isMenuOpen
    },
}

export  const  getters  = {
    getToggleState(state) {
      return  state.isMenuOpen;
    }
};