import './styles.scss';
import React, { useContext } from 'react';
import { AppContext} from "../index";

const Title = () => {
    const [, , title] = useContext(AppContext)

    return (
        <g id="title" transform="translate(512 100)">
            <text className="title"><tspan className="green">{title}</tspan></text>
            <g id="arrow" transform="translate(512 0)">
                <text opacity={100} className="arrow"><tspan className="white">{'{}'}</tspan> </text>
            </g>
        </g>
    )
}

export default Title;