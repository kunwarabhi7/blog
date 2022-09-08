import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from './firebase'




const NavBar = ({ isAuth, setIsAuth }) => {
    const navigate = useNavigate()
    const signOutUser = () => {
        signOut(auth).then(() => {
            setIsAuth(false)
            navigate('/login')
        })
    }
    return (
        <div className='navbar' >
            <Link to='/'>Home</Link>

            {!isAuth ? <Link to='/login'>Login</Link> :
                <>
                    <Link to='/createpost'>Create Post</Link>
                    <button onClick={signOutUser}>Log Out </button>
                </>}
        </div>
    )
}

export default NavBar