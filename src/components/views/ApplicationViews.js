import { useState } from "react"
import { getCurrentUser } from "../managers/UserManager"
import { AdminViews } from "./AdminViews"
import { EmployeeViews } from "./EmployeeViews"


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({
        is_staff: true
    })
    getCurrentUser().then(setCurrentUser)
  
    if (currentUser.is_staff) {
        return (
            <AdminViews currentUser={currentUser} />
        )
    }
    else {
        return (
            <EmployeeViews currentUser={currentUser} />
        )
    } 

}

