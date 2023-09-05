import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const info = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(info || null);
  const [docInfo, setDocInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [templateData, setTemplateData] = useState({
    poster_url: null,
    poster_name: null,
  });
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);
  const store = {
    user,
    setUser,
    docInfo,
    setDocInfo,
    isLoading,
    setIsLoading,
    templateData,
    setTemplateData,
  };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
