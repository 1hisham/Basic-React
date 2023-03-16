import React from "react";

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const userConsumer = UserContext.Consumer

export { UserProvider,userConsumer}