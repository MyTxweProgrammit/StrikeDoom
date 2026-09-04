import LZString from 'lz-string';

export function compressString(input) {
    try {
        const jsonSTR = JSON.stringify(input);
        return LZString.compressToEncodedURIComponent(jsonSTR);
    } catch(err) {
        alert(`Compression error: ${err.message}`);
        return null;
    }
}

export function decompressString(token) {
    try {
        if (!token) return null;
        const jsonSTR = LZString.decompressFromEncodedURIComponent(token);
        if (!jsonSTR) return null;
        return JSON.parse(jsonSTR);
    } catch(err) {
        alert(`Decompression error: ${err.message}`);
        return null;
    }
}