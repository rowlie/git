const isProduction = process.env.NODE_ENV === 'production';

export function setObjectId(objectId: string) {
    return !isProduction && objectId ? { 'data-sb-object-id': objectId } : {};
}

export function setFieldPath(fieldPath: string) {
    return !isProduction && fieldPath ? { 'data-sb-field-path': fieldPath } : {};
}

export function getAnnotations(props: Record<string, unknown>) {
    return Object.keys(props).reduce((acc, key) => {
        if (key.startsWith('data-sb-')) {
            acc[key] = props[key];
        }

        return acc;
    }, {} as Record<string, unknown>);
}

export function getFieldPath(props: Record<string, string>): string {
    return props['data-sb-field-path'] || '';
}

export function getObjectId(props: Record<string, string>): string {
    return props['data-sb-object-id'] || '';
}
