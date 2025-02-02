import { Fragment } from "react";
import myimage from './photo/img1.jpg';

const abhi="https://th.bing.com/th/id/OIP.iZSGztm8JFodKPVmqWkc6QHaEK?rs=1&pid=ImgDetMain";

function Abc()
{
    return(
        <Fragment>
        <h1>this is heading</h1>
        <h2>this is heading2</h2>
        <img src={myimage} alt="yes"/>
        <img src="photo/img1.jpg" alt="yes1"/>
        <img src={abhi} alt="yes3"/>

        </Fragment>
        
    )
}
export default Abc;