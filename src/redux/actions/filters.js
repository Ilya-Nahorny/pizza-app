export const setSortBy = (name) => ({   // есть функция setSortBy которая получает значение (name), и это значение будет передоваться в обьект ниже
  type: 'SET_SORT_BY',  // тут мы обьясняем что есть тип SET_SORT_BY
  payload : name,       // тут мы обьясняем какое значение (popular, price or alphabet)
})

export const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY', 
  payload : catIndex,       
})