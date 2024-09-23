const isProduction = process.env.NODE_ENV === 'production';

export function setObjectId(objectId: string) {
    return !isProduction ? { 'data-sb-object-id': objectId } : {};
}

export function setFieldPath(fieldPath: string) {
    return !isProduction ? { 'data-sb-field-path': fieldPath } : {};
}

export function getAnnotations(props: Record<string, any>) {
    return Object.keys(props).reduce((acc, key) => {
        if (key.startsWith('data-sb-')) {
            acc[key] = props[key];
        }

        return acc;
    }, {} as Record<string, any>);
}

export function getFieldPath(props: Record<string, any>) {
    return props['data-sb-field-path'] || '';
}

export function getObjectId(props: Record<string, any>) {
    return props['data-sb-object-id'] || '';
}
