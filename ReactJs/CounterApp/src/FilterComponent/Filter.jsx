import React, { useEffect, useState } from 'react'
import { products } from '../../public/data';

function Filter() {
    const [search,setSearch] = useState("");

    useEffect(
        () => {
            console.log(search);
        }
    )

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    }

  return (
    <>
        <div>
            <input type="text" placeholder='enter product name' onChange={onChangeHandler}/>
        </div>
        <div className="containers">
            {
                products
                .filter(item => item.title.toLowerCase().includes(search))
                .map(
                    (item) => {
                        return <div key={item.id} className='container'>
                            <div className="image-container">
                                <img src={item.images[0]} alt={item.title} />
                            </div>
                            <div className="details">
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="description">
                                    {item.description}
                                </div>
                                <div className="price">
                                    {item.price}
                                </div>
                                <button>Learn More</button>
                            </div>
                        </div>
                    }
                )
            }
        </div>
    </>
  )
}

export default Filter