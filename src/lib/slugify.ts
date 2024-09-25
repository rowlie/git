export default function slugify(str: string) {
    return str.replace(/^\s+|\s+$/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}
