import {useContext} from 'react';
import {AuthContext} from '../Context/authContext';

export function useAuth(){
    const value = useContext(AuthContext)
    return value;
}