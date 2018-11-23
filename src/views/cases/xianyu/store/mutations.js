export const SET_ACTIVE_TYPE = (state, { type }) => {
  state.activeType = type
}

export const SET_LIST = (state, { type, ids }) => {
  state.lists[type] = ids
}

export const SET_ITEMS = (state, { items }) => {
  items.forEach(item => {
    if (item) {
      Vue.set(state.items, item.id, item)
    }
  })
}

export const SET_USER = (state, { user }) => {
  Vue.set(state.users, user.id, user)
}
