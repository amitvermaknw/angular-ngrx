
export const saveItem = (key: string, data: any) => {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(key, serializedState);
}

export const getItem = (stateName: string) => {
    try {
        const serializedState = localStorage.getItem(stateName);
        if (serializedState === null) { return undefined }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined
    }
}
