import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type props = {
    treshold?: number;
    root?: null | Element;
    rootMargin?: string
} | undefined;

export const useObserver = (options?: props | undefined): [IntersectionObserver, Dispatch<SetStateAction<any>>, IntersectionObserverEntry[]] => {
    const [elements, setElements] = useState<Element[] | null  | JSX.IntrinsicElements[]>([]);
    const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

    const observer = useRef(
        new IntersectionObserver((entries) => {
            setEntries(entries);
            // console.log(entries[0]);
        }, options)
    );
    useEffect(() => {
        const currentObserver = observer.current;
        currentObserver.disconnect();
        if (elements && elements.length > 0) {
            elements?.forEach((item: any) => currentObserver.observe(item));
        }

        return () => {
            if (currentObserver) {
                currentObserver.disconnect();
            }
        };
    }, [elements]);

    return [observer.current, setElements, entries];
};
