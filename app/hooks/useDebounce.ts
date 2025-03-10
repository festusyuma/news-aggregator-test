import {useEffect, useState} from "react";

export function useDebounce<T>(value: T, duration: number) {
    const [updatedValue, setUpdatedValue] = useState<T>(value)

    useEffect(() => {
        const timeout = setTimeout(() => setUpdatedValue(value), duration)
        return () => clearTimeout(timeout);
    }, [value])

    return updatedValue
}