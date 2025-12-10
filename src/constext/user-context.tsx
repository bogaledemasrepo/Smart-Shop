import { createContext, type ReactNode } from "react"

const UserContext=createContext({});
function UserProvider({children}:{children:ReactNode}) {
  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider