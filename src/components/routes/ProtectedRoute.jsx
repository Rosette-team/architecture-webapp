import React from "react";
import {UserDataStoreContext} from "../../index";
import {Navigate} from "react-router-dom";
import {observer} from "mobx-react";

function ProtectedRoute({children}) {
    const userDataStore = React.useContext(UserDataStoreContext)

    console.log(userDataStore)

    if (!userDataStore.username) {
        return <Navigate to="/login"/>;
    }
    return children;
}

export default observer(ProtectedRoute);