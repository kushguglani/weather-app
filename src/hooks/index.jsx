import React, { useState, useEffect } from 'react'

function HookComp(props) {
    const [total, setTotal] = useState(0);
    const {arr} = props;
    console.log(arr);
    
    useEffect(()=>{
        let sum = 0;
        {arr  && arr.forEach(curr=> sum+=curr)}
        setTotal(sum)
    },[arr])
    return (
        <div>
            <p>Counter:{total}</p>
        </div>
    )
}
export default HookComp;