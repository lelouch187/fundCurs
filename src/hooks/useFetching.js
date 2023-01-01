import { useState } from "react"

export const useFetching = (callback) => {
    const [loading, isLoading] = useState(false)
    const [error, setError] = useState('')
    const fetching = async () => { 
    try{
        isLoading(true)
        await callback()
    }
    catch (e) {
        setError(e.message)
    }
    finally {
        isLoading(false)
    }
}
    return [fetching, loading, error]
}