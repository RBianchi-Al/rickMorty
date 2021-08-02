/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from "react";
import { AuthContext } from "../Context/authContext";

export function useAuth() {
    const value = useContext(AuthContext);
    return value;
}
