import { AuthContext } from "./security/AuthContext"
import { useContext } from "react"

function FooterComponent() {
    
    const authContext = useContext(AuthContext)
    console.log(authContext.number)

    return (
        <footer className="FooterComponent">
            <div className='container'>
                Your footer
            </div>
        </footer>
    )
}

export default FooterComponent