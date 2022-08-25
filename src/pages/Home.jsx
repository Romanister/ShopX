import Head from "../components/HeadNav"
import Popup from '../components/Popup';
import Products from "../components/Products";
import "../style/App.css";
const Home = () => {
    return(
        <>
        <div className="Head__position">
        <Head/>
        <Popup/>
        </div>
        <Products/>
        </>
    )
}

export default Home