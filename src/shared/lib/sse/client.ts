import React from "react";

export function useEventSource<T>(url: string, def: T) {
    const [data, setData] = React.useState<T>(def);
    const [error, setError] = React.useState<unknown | undefined>()

    React.useEffect(() => {
        const gameEvents = new EventSource(url);

        gameEvents.addEventListener("message", (message) => {
            try {
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


    return { dataStream: data, error }
}