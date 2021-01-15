import './styles.scss'
import React, { useContext } from 'react'
import {AppContext} from "../index";

const Scratchpad = ({ arrowOpac=100 }) => {
    const [scratchpad] = useContext(AppContext)
    return (
        <g id="title" transform="translate(0 1024)">
            <text className="scratchpad"><tspan className="amber">{scratchpad}</tspan></text>
            <g id="arrow" transform="translate(1024 0)">
                <text opacity={0} className="arrow"><tspan className="white">{'{}'}</tspan> </text>
            </g>
        </g>
    );
}
export default Scratchpad;