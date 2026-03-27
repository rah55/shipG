
import ShipForm from "./components/ShipForm"
import ShipInfoForm from "./components/ShipInfoForm"
// import ShipmentSteps from "./components/ShipmentSteps"
import { Provider } from "react-redux"
import { store } from "./utils/store"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import ShipmentSteps from "./components/ShipmentSteps"
import NewComponent from "./components/newComponent"


const persistor = persistStore(store)

export function App() {


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="p-10">
          {/* <ShipmentSteps/> */}
          <NewComponent/>

          
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
