import { useNavigate } from 'react-router-dom'

const PropertyTile = (props) => {

    const navigate = useNavigate();

    const price = props.price.toLocaleString('en-US', { style: 'currency', currency: 'USD'})

    return (
        <div className="property-tile rounded-lg" onClick={() =>{
                localStorage.setItem('property_id', props._id);
                localStorage.setItem('image', props.index + 1)
                navigate(`/property`);
            }}>
            {console.log(props.index)}
            <div className="h-[70%]"><img className="rounded-lg w-full h-full" src={`./property/image${props.index + 1}.jpeg`} alt="img" /></div>
            <div id="details" className="flex justify-between px-4 py-2">
                <div id="location">
                    <p className="font-bold text-sm">{props.location}</p>
                    <p className="text-sm font-light">Owned by, {props.owner}</p>
                    <p>{price}</p>
                </div>
                <div id="rating" className="flex items-center"><img src="./star.svg" width={"20px"} alt="" />{props.rating}</div>
            </div>
            <div className="w-50 h-50 bg-black"></div>

        </div>
    )
}

export default PropertyTile;