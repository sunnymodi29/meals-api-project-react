import axios from 'axios';
import { useState, useEffect } from "react";

const Main = () => {

    const [items, setItens] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res => {
            setItens(res.data.meals);
            setLoading(false);
        }).catch((err) => { console.log(err); })
    }, [])
    
    return (
        <>
            <div className="items-container" >
                {
                    loading ? "Loading..." : items.map(({ strMeal, strMealThumb, idMeal }) => {
                        return (
                            <section className="card" key={idMeal}>
                                <img src={strMealThumb} alt={strMeal} />
                                <section className='content'>
                                    <p>{strMeal}</p>
                                    <p>#{idMeal}</p>
                                </section>
                            </section>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Main