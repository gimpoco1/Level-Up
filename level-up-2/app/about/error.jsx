'use client'

export default function Error() {   
    return(
        <div>
            This ain't loading up: {Error.message}
            <button onClick={() => reset()}>Reload</button>
        </div>
    )
}