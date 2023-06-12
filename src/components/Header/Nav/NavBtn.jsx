const NavBtn = ({name, setLocation, fetchClicker, setFetchClicker}) => {
    return ( 
        <>
        <button onClick={(e) => {e.preventDefault(); setLocation(name); setFetchClicker(fetchClicker +1)}}>
            {name}
        </button>
        </>
     );
}
 
export default NavBtn;