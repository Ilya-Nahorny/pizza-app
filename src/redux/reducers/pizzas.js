const initialState = {  // инициализация первого значения state которое хранит объект
  items: [],
  isLoaded: false,
}

const pizzas = (state = initialState, action) => {
  if(action.type === 'SET_PIZZAS'){                    // если пришло действие SET_PIZZAS, 
    return {                                          // то возьми весь state(старые данные),
      ...state,
      items: action.payload,                     // и замени свойство items на новое значение (action.payload)      
    };
  }
  return state              // вернёт старые данные, если условие выше не сработает
}

export default pizzas