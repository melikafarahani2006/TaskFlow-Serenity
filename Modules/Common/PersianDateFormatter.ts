export function persianDate(value?: string): string {
    if (!value)
        return '';

    const date = new Date(value);

    return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(date);
}