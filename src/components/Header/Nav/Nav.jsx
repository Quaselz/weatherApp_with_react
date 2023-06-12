import NavBtn from "./NavBtn";
import './Nav.css'
const Nav = ({setLocation, fetchClicker, setFetchClicker}) => {
    const citys = ["Düsseldorf","Köln","Berlin","Hamburg"]
    return ( 
        <nav>
            {citys.map((city, i) => <NavBtn name={city} setLocation={setLocation} fetchClicker={fetchClicker} setFetchClicker={setFetchClicker} key={i}/>)}
        </nav>
     );
}
 
export default Nav;