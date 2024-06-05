import { useEffect, useState } from "react";

export const API_URL = "https://jsonplaceholder.typicode.com";

const useFetch = (url: string, numberOfResults: number) => {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);

                const response = await fetch(`${API_URL}${url}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const json = await response.json();

                setData(json.slice(0, numberOfResults));
            } catch (err) {
                setError(err as Error);
                console.error("Failed to fetch data:", err);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, [url, numberOfResults]);

    return { data, setData, isLoading, error };
};

export default useFetch;
