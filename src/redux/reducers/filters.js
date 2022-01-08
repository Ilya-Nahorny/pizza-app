const initialState = {  // инициализация первого значения state которое хранит объект
  category : 0,
  sortBy: 'popular'
}

const filters = (state = initialState, action) => {
  if(action.type === 'SET_SORT_BY'){                    // если пришло действие SET_SORT_BY, 
    return {                                          // то возьми весь state(старые данные),
      ...state,
      sortBy: action.payload,                     // и замени свойство sortBy на новое значение (action.payload)      
    };
  }
  if(action.type === 'SET_CATEGORY'){
    return {                                          
      ...state,
      category: action.payload,                     
    };
  }
  return state              // вернёт старые данные, если условие выше не сработает
}

export default filters