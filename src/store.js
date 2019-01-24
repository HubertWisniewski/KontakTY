import { createStore } from 'redux'

const initialState = {
    data: {
        abc: {
          name: 'Janusz',
          number: 123000421,
        },
        def: {
          name: 'Andrzej',
          number: 1231241,
        },
      },
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state
    }
  }


  const store = createStore(reducer)

  export default store