const Redux = require("redux")

import { rootReducer, defaultState as rootDefaultState } from "./Root.js"
import { configBarReducer, defaultState as configBarDefaultState } from "./ConfigBar.js"
import { chartsReducer, defaultState as chartsDefaultState } from "./Charts.js"

const initialState = {
	rootReducer: rootDefaultState,
	configBarReducer: configBarDefaultState,
	chartsReducer: chartsDefaultState,
}

const reducer = Redux.combineReducers({
	rootReducer,
	configBarReducer,
	chartsReducer,
})

export const store = Redux.createStore(
	reducer,
	initialState,
	Redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f	
	)
)
