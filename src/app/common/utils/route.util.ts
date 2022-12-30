export function findParameter(url: string) {
    if (!url) return '';
    const urlTree = url.split('/');
    return urlTree[urlTree.length - 1];
}
