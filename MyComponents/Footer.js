import React from 'react'

export default function Footer() {
    let footerstyle={
        position: "relative",
         top: "100vh",
         width: "100%"
    }
    return (
        <div className="bg-dark text-light py-3" style={footerstyle}>
            <p className="text-center">Copyright &copy; newplayer.com</p>
        </div>

    )
}
