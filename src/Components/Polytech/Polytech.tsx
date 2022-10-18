import './Polytech.css'
import PolytechLogo from '../../assets/Polytech.webp';

function Polytech(){
    return (
        <div className="App-body">
            <img src={PolytechLogo} alt={'Polytech'} className={"polytech_logo"}/>
        </div>
    );
}

export default Polytech;