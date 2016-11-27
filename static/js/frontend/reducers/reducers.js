const Redux = require("redux")

import { rootReducer, defaultState as rootDefaultState } from "./Root.js"
import { configBarReducer, defaultState as configBarDefaultState } from "./ConfigBar.js"

const initialState = {
	rootReducer: rootDefaultState,
	configBarReducer: configBarDefaultState,
}

const reducer = Redux.combineReducers({
	rootReducer,
	configBarReducer
})

export const store = Redux.createStore(
	reducer,
	initialState,
	Redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f	
	)
)
