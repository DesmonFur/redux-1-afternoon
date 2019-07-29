import { createStore } from "redux";


const initalState = {
  name: "",
  category: "",
  authorFirst: '',
  authorLast: '',
  ingredients: [],
  instructions: [],
  recipes: []
};



// export const INCREMENT = 'INCREMENT'
// export const DECREMENT = 'DECREMENT'

export const UPDATE_RECIPE = "UPDATE_RECIPE";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_FIRST = 'UPDATE_FIRST'
export const UPDATE_LAST = 'UPDATE_LAST'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION'
export const ADD_RECIPE = 'ADD_RECIPE'
function reducer(state = initalState, action) {
    
  switch (action.type) {
    case UPDATE_RECIPE:
      return {...state, name: action.payload};
    case UPDATE_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
    case UPDATE_FIRST: 
    return {...state, authorFirst: action.payload}
    case UPDATE_LAST: 
    return {...state, authorFirst: action.payload}
    case ADD_INGREDIENT:
        const newIngredients = [...state.ingredients, action.payload]
        return {...state, ingredients:newIngredients }
    case ADD_INSTRUCTION:
        const instruction = [...state.instructions, action.payload]
        return {...state, instructions: instruction}
    case ADD_RECIPE:
        const {
            name,
            catergory,
            authorFirst,
            authorLast,
            ingredients,
            instructions
        } = state
        const recipe = {
            name,catergory,authorFirst,authorLast,ingredients,instructions
        }
        const newRecipe = [...state.recipes, recipe]
        return {...state, recipes: newRecipe}
  }
}

export default createStore(reducer);
