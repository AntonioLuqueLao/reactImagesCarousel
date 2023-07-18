import { useEffect, useState } from "react";

const array= [
    {nombre : "./imagesCarrousel/buenosaires.jpg"},
    {nombre : "./imagesCarrousel/iguazu.jpg"},
    {nombre : "./imagesCarrousel/rosario.webp"},
    {nombre : "./imagesCarrousel/san_nicolas_de_los_arrayos.jpg"},
]

const Carrusel=()=> {

    const [contador, setContador]=useState(0);
    const [prevContador, setPrevContador]=useState(array.length-1);
    const [postContador, setPostContador]=useState(contador+1);

    const mover=(e)=> {
        if (e.target.className==="izquierda") {
            if (contador===0) {
                setContador(array.length-1);
                return contador;
            }
            else {
                setContador(contador-1);
                return contador;
        }

        }
        if (e.target.className==="derecha") {
            if (contador===array.length-1) {
                setContador(0);
                return contador;
            }
            else {
                setContador(contador+1);
                return contador;
        }
        }
    }

    useEffect(()=> {
        if (contador===0) {
            setPrevContador(array.length-1)
        } else {
            setPrevContador(contador-1);
        }
    }, [contador]);

    useEffect(()=> {
        if (contador===array.length-1) {
            setPostContador(0)
        } else {
            setPostContador(contador+1);
        }
    }, [contador]);



    return (
        <>
        <button id="flechas" className="izquierda" onClick={e=> mover(e)}>IZQ</button>
        <img  id="imagenlateral" className="imagenes" alt={array[prevContador].nombre} src={array[prevContador].nombre}/>
        <img id="imagenPrincipal" className="imagenes" alt={array[contador].nombre} src={array[contador].nombre} />
        <img  id="imagenlateral" className="imagenes" alt={array[postContador].nombre} src={array[postContador].nombre}/>
        <button id="flechas" className="derecha"onClick={e=> mover(e)}>DCH</button>
        </>
    )
};

export default Carrusel;