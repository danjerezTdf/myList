import React, {useState, useEffect} from "react";
import './list.css';

const List = ()=> {
    const names = ["Juan","Pedro","Lucas","Marcos","Tomas"]

    return(
        <>
            <div className="containet-list">
                <h1>List</h1>
                <ul className="list">
                    {names.map((persona, index) => (
                        <ul key={index}>{persona}</ul>
                    ))}
                </ul>
            </div>
        </>
    )

};
export default List;