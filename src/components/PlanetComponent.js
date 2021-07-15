import { useEffect , useState} from "react";
import axios from 'axios';
import { navigate } from "@reach/router";


const PlanetComponent = ({id}) => {

    const [responseData, setResponseData] = useState({});

    useEffect(() => {
    
        axios.get("https://swapi.dev/api/planets/" + id)
            .then(response=> {setResponseData(response.data)
                console.log(response);
            }).catch(err=> {
                navigate("/404");
            })
            
    }, []);
    return (
        <div className="results-body">
            <h2>Planet: {responseData.name}</h2>
            <hr className="body-seperator"/>
            <ul className="results-list">

                <li><b>Climate:</b> {responseData.climate} </li>
                <li><b>Terrain:</b> {responseData.terrain} </li>
                <li><b>Surface Water:</b> {responseData.surface_water} </li>
                <li><b>Population:</b> {responseData.population} </li>
            </ul>


        </div>
    );
}
export default PlanetComponent;