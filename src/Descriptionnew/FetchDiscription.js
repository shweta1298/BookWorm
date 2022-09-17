import React, { Component, useState, useEffect } from 'react';
import Description from './Description'



const FetchDiscription=()=>{

    const [Books, setBooks] = useState([]);


    let bookid=2004//localStorage.getItem("bookid")

    useEffect(() => {
        fetch('https://localhost:44356/api/Discription/'+bookid)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setBooks(result);
                }
            );
    },[])
    return (
        <div>

            <Description object={Books}></Description>

        </div>
    )

};
export default FetchDiscription;

