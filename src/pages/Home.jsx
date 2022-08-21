import Head from "../components/HeadNav"
import Popup from '../components/Popup';
import "../style/App.css";
const Home = () => {
    return(
        <>
        <div className="Head__position">
        <Head/>
        <Popup/>
        </div>
        </>
    )
}

export default Home