import './Card.css';

function Card({image, title, para1, para2}){
    
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={image} alt="" />
            </div>
            <div className="card-details">
                <h3 className="title">{title}</h3>
                <div className="paras">
                    <p>
                        {para1}
                    </p>
                    <p>
                        {para2}
                    </p>
                </div>
                <button>Know More</button>
            </div>
        </div>
    );
}

export default Card;