import { useEffect, useState } from "react";

interface State {
  code: string;
  name: string;
}

const useCountryState = (country_id: string) => {
  const [states, setStates] = useState<State[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!country_id) {
      setStates([]);
      return;
    }

    const controller = new AbortController(); // For cleanup
    const fetchStates = async () => {
      setLoading(true);
      setError(null);
      try {
        const url =
          "https://qa2.franchise.backend.shipgl.in/api/v1/location/statesv2";
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ state_country_code: country_id }),
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setStates(result?.data?.states || []);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error("Error fetching states:", err);
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStates();

    return () => controller.abort(); // Cleanup on unmount or country_id change
  }, [country_id]);

  return { states, loading, error };
};

export default useCountryState;