import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persiste = (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "City_Event",
      storage,
      whitelist: ["auth", "user"],
    },
    reducers
  );

  return persistedReducer;
};

export default persiste;
