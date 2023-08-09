import { Provider } from "react-redux";
import { store, persister } from './redux/store.js';
import MainPage from "./pages/MainPage.js";
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <MainPage />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
