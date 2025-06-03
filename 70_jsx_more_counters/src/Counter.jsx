const Counter = ({ count, setCounter, incrementBy = 1 }) => {


    const handleIncClick = () => {
        setCounter(count + incrementBy);
    }

    const handleDecClick = () => {
        setCounter(count - incrementBy);
    }


    return (
        <div className="p-6 bg-white rounded shadow space-y-2">
            <h3 className='text-lg font-bold'>
                Counter
            </h3>
            <p className='text-sm text-gray-600'>
                Increase the counter by using the plus button: {' '}
                <code>setCounter(counter + 1)</code>
            </p>
            <p className='text-2xl font-semibold text-yellow-700'>Counter Value: {count}</p>
            <div className="inline-flex gap-4">
                <button onClick={handleDecClick} className='px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700'>
                -</button>
                <button onClick={handleIncClick} className='px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 ml-4'>
                +</button>
            </div>

        </div>
    )
}

export default Counter;