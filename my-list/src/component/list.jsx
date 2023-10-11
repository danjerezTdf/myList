import React, {useState, useEffect} from "react";
import './list.css';

const List = ()=> {
    // const names = ["Juan","Pedro","Lucas","Marcos","Tomas"]
    const [names, setNames] = useState([])

    useEffect(()=>{
        fetch ('http://localhost:3002/list')
        .then((response=>response.json()))
        .then(data => setNames(data))
        .catch(error => {
            console.log("Error no se pudo obtener los Nombres", error)
        })
    }, [])

    return (
        <div className="container-list">
            <h1>List of Names</h1>
            <ul className="name-list">
                {names.map((persona, index) => (
                <ul className="ul-list" key={index}>
                    <p>
                    <strong>Nombre:</strong> {persona.name}
                    </p>
                    <p>
                    <strong>Apellido:</strong> {persona.lastName}
                    </p>
                    <p>
                    <strong>Nacionalidad:</strong> {persona.nationality}
                    </p>
                </ul>
                ))}
            </ul>
            </div>
        );

};
export default List;