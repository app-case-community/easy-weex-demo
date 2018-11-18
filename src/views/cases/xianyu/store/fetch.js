const stream = weex.requireModule('stream')
const baseURL = 'https://hacker-news.firebaseio.com/v0'

export const fetch = (path) => {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'GET',
      url: `${baseURL}/${path}.json`,
      type: 'json'
    }, (response) => {
      if (response.status == 200) {
        resolve(response.data)
      }
      else {
        reject(response)
      }
    }, () => {})
  })
}

export const fetchIdsByType = (type) => {
  return fetch(`${type}stories`)
}

export const fetchItem = (id) => {
  return fetch(`item/${id}`)
}

export const fetchItems = (ids) => {
  return Promise.all(ids.map(id => fetchItem(id)))
}

export const fetchUser = (id) => {
  return fetch(`user/${id}`)
}
