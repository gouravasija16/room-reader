import useLocalStorage from "./components/shared/useLocalStorage"
export function useAuth() {
    const [islogin,setIslogin] = useLocalStorage('islogin', false);
    const login = () => {
        setIslogin(true);
    }
    const logout = () => {
        setIslogin(false);
    }
    return { islogin, login, logout };
}