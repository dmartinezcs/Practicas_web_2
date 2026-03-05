'use client';
import { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";



const CountryPageNameId = () => {

 const { name } = useParams();


    return(
        <div>
            <h1>el id es : {name}</h1>
            <h1>Esta es la que recibe el id y dicho id es: {name}</h1>

        </div>
    )

};


export default CountryPageNameId;