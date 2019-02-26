import React from 'react'

export default function Footer (props) {
    return (
        <footer className="footer"> {props.ime} <br/>Sva prava prepustena <br/> Preduzece osnovano {props.osnovano} </footer>
    )
}