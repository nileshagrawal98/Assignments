import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ store, children }) => {
  const { dispatch, getState } = store;

  // Dummy for force update
  const [dummy, setDummy] = useState(0);
  const forceUpdate = () => setDummy((prev) => prev + 1);
  store.subscribe(forceUpdate);

  return (
    <AppContext.Provider value={{ dispatch, getState }}>
      {children}
    </AppContext.Provider>
  );
};
