import { useEffect , useState} from "react";
import axios from 'axios';
import { navigate } from "@reach/router";


const PeopleComponent = ({id}) => {
    
    const [responseData, setResponseData] = useState({});
    

    useEffect(() => {
    
        axios.get("https://swapi.dev/api/people/" + id)
            .then(response=> {setResponseData(response.data)
                console.log(response);
            }).catch(err=> {
                console.log(err);
                navigate("/404");
            })
            
    }, []);
    return (
        <div className="results-body">
            <h2>{responseData.name}</h2>
            <hr className="body-seperator"/>
            <ul className="results-list">

                <li><b>Height: </b> {responseData.height} cm</li>
                <li><b>Mass: </b> {responseData.mass} kg</li>
                <li><b>Hair Color: </b> {responseData.hair_color}</li>
                <li><b>Skin Color: </b> {responseData.skin_color}</li>

            </ul>

        </div>
    );
}
export default PeopleComponent;