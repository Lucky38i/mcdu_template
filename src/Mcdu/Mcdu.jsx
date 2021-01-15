import React, { useState, useEffect, useContext } from 'react';
import { BasePage, McduLabels, McduText }  from "../BasePage/BasePage";
import {AppContext} from "../index";

const Mcdu = () => {
    const [labels, setLabels] = useState(McduLabels);
    const [text, ] = useState(McduText);
    const [scratchpad, , , setTitle] = useContext(AppContext)

    useEffect(() => {
        setTitle('MCDU MENU');

        setLabels((prevState) => ({
            ...prevState,
            L0: {
                ...prevState.L0,
                text: 'FMGC',
            },
            L1: {
                ...prevState.L3,
                text: 'ATSU',
            },
            L2: {
                ...prevState.L2,
                text: 'AIDS',
            },
            L3: {
                ...prevState.L1,
                text: 'CFDS',
            },
            L4: {
                ...prevState.L4,
                text: 'Return'
            },
        }));
    }, []);

    return (
        <BasePage data={text} labels={labels} />
    );
}

export default Mcdu;