import Elem from "./Elem.js"

export default function Jatekter(props){


    return(
        <>
        {
            props.LISTA.map((elem, index)=>{
                return(<Elem jel={elem} key={index}/>)
            })
        }
            
        </>
    )
}