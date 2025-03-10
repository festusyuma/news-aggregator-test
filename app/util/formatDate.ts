export function formatDate(dataString: string) {
    const date = new Date(dataString);
    return `${date.getDate()}`.padStart(2, '0') + `/${date.getFullYear()}`
}