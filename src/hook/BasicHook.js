import {useState, useEffect} from 'react';
import Button from "@material-ui/core/Button";

function ChildHook({count, updateCount}) {
    // The same as componentDidMount and componentDidUpdate
    useEffect(() => {
        console.log('Component has updated');
    });

    return (
        <div>
            Counting: {count}
            <Button onClick={updateCount}>Increase</Button>
        </div>
    )
}

function ParentHook() {
    const [count, setCount] = useState(5);

    let updateCount = () => {
        setCount(count + 1);
    };

    return (
        <ChildHook count={count} updateCount={updateCount}/>
    );
}

export default ParentHook;