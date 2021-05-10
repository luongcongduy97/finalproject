import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { logout } from "../../redux/action"

const LogoutPage = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.isLoggedIn)

    if(isLoggedIn) {
        dispatch(logout())
        return (
            <h1>Logging out ... Please wait</h1>
        )
    }

    else return <Redirect to='/login' />

}

export default LogoutPage