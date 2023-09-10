import * as ical from 'ical/ical';
import { useMemo } from 'react';
import useFetch from 'react-fetch-hook';

export default function useEvents(url) {
    const {
        isLoading,
        data,
        error,
    } = useFetch(url, {
        formatter: response => response.text(),
    });

    return useMemo(function() {
        if (error) {
            console.error(error);
        }

        if (isLoading || error || !data) {
            return [];
        }

        return Object.entries(ical.parseICS(data))
            .filter(([, entry]) => entry.type === 'VEVENT')
            .map(([, event]) => event);
    }, [isLoading, data, error]);
}
