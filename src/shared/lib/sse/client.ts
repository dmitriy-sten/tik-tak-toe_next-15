import React from "react";

export function useEventSource<T>(url: string) {
    const [isPending, setIsPending] = React.useState(true)
    const [data, setData] = React.useState<T>();
    const [error, setError] = React.useState<unknown | undefined>()

    React.useEffect(() => {
        const gameEvents = new EventSource(url);

        gameEvents.addEventListener("message", (message) => {
            try {
                setIsPending(false)
                setData(JSON.parse(message.data));
                setError(undefined)
            }
            catch (e) {
                setError(e)
            }
        });
        gameEvents.addEventListener('error', (e) => {
            setError(e)
        })

        return () => gameEvents.close();
    }, [url]);


    return { dataStream: data, error, isPending }
}