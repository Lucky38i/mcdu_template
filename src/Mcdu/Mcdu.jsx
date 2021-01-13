import React, { useState, useEffect } from 'react';
import { BasePage, McduLabels, McduText }  from "../BasePage/BasePage";

const Mcdu = () => {
    const [labels, setLabels] = useState(McduLabels);
    const [text, setText] = useState(McduText);

    useEffect(() => {
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