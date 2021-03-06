import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import {GiSofa} from "react-icons/gi"

const Rodape = () => {
    return (
<Navbar bg="dark" fixed="bottom">
    <Navbar.Brand href="#inicio" className="text-light">
        <GiSofa/> PlanMo &copy; - Todos os direitos reservados
    </Navbar.Brand>
</Navbar>
    )
}

export default Rodape