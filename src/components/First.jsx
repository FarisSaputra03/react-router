import { Navigate, useNavigate } from "react-router-dom"

const First = () => {
    const navigate = useNavigate()
    return (
        <>
        <h3>Hompage Route</h3>
        <button onClick={() => navigate('/about')}>Move About</button>
        </>
    )
}
export default First