import "./Loader.css"

function NavBar(props) {

    if(props.flag){
        return (
            <div id="spinner-cont">
            <div class="spinner"></div>
        </div>

        );
    }
}

export default NavBar;