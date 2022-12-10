import { useState, useLayoutEffect, useEffect } from 'react';

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated có nghia là cập nhật lại 1 property của DOM hay object gọi là đột biến)

// 3. render lại ui ****************************************************

// 4. Goi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup neu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)

// 5. render lại ui ****************************************************


function Content() {
    const [count, setCount] = useState(0);

    // xử lý bàng useEffect
    // sẽ bị render với count = 4
    // sau đó mói chạy call back
    // và check count > 3
    // thì sẽ set lại count = 0
    // sẽ làm cho ui bị render lại(bị nháp nháy)
    // useEffect(() => {
    //     if (count > 3) {
    //         setCount(0); 
    //     }

    // }, [count])
    
    // ----------------------------------------------
    
    // xử lý bằng useLayoutEffect
    // sẽ ko bị render với count = 4
    // mà sẽ chạy call back trước khi render
    // và check count > 3
    // thì sẽ set lại count = 0
    // sẽ ko làm cho ui bị render lại(bị nháp nháy)

    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }
    }, [count])

    const handleRun = () => {
        setCount(count + 1);
    };
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    );
}

export default Content;
