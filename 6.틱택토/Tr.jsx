import React, { useRef, useEffect, memo } from "react";
import Td from "./Td";

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
    console.log('tr render');
    const ref = useRef([]);
    useEffect(() => {
        console.log(rowIndex === ref.current[0], rowData === ref.current[1], dispatch === ref.current[2]);
        ref.current = [rowIndex, rowData, dispatch];
    }, [rowIndex, rowData, dispatch]);
    
    return (
        <tr>
            { Array(rowData.length).fill().map((td, i) => (
                <Td dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} key={i} cellData={rowData[i]}>{''}</Td>
            ))}
        </tr>
        
    );
});

export default Tr;