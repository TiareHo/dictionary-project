

export default function Images(props){
    
    if (props.images){ return (
        <div className="row">
            <div className="col-5 m-3">
                <img src={props.images.photos[0].src.tiny} alt={props.images.photos[0].alt}></img>
            </div>
            <div className="col-5 m-3">
                <img src={props.images.photos[1].src.tiny} alt={props.images.photos[1].alt}></img>
            </div>
        </div>
    )}else{return null;}
}