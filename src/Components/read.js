import { useState } from "react";
import Books from "./Books";
import { useEffect } from "react";
import axios from "axios";

  
    function Read(){
        const [data, setData] = useState([]);

        useEffect(
            ()=>{
                axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
                .then(
                    (response)=>(
                        setData(response.data.books)
                    )
                )
                .catch(
                    (error)=>{
                        console.log(error);
                    }
                );
            },[]
        );

    return(
        
        <div>
            <Books myBooks={data}></Books> 
        </div>
    )

    }

    //export the "Read" component so that it can be used by other parts of the application
    export default Read;