import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  // BUG #9修正: localStorage の値が不正 JSON の場合でもクラッシュしない
  const favorites = ref((() => {
    try {
      return JSON.parse(localStorage.getItem('gunma_favs') || '[]')
    } catch {
      return []
    }
  })())

  function isFav(id) {
    return favorites.value.includes(id)
  }

  function toggleFav(id) {
    if (isFav(id)) {
      favorites.value = favorites.value.filter(f => f !== id)
    } else {
      favorites.value.push(id)
    }
    localStorage.setItem('gunma_favs', JSON.stringify(favorites.value))
  }

  return { favorites, isFav, toggleFav }
})
