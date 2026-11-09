// Convierte bytes a texto Base64 para poder enviarlos como JSON.
const toBase64 = (bytes: Uint8Array): string => {
    return btoa(Array.from(bytes, byte => String.fromCharCode(byte)).join(""));
};

export const encryptLogin = async (email: string, password: string) => {
    const keyBase64 = import.meta.env.VITE_LOGIN_KEY;

    if (!keyBase64) {
        throw new Error("Falta configurar VITE_LOGIN_KEY");
    }

    // Convierte la clave Base64 a bytes.
    const keyBytes = Uint8Array.from(
        atob(keyBase64),
        char => char.charCodeAt(0)
    );

    const key = await crypto.subtle.importKey(
        "raw",
        keyBytes,
        "AES-GCM",
        false,
        ["encrypt"]
    );

    // Debe generarse un IV nuevo para cada cifrado.
    const iv = crypto.getRandomValues(new Uint8Array(12));

    const credentials = JSON.stringify({ email, password });
    const bytes = new TextEncoder().encode(credentials);

    const encrypted = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        key,
        bytes
    );

    return {
        iv: toBase64(iv),
        encryptedData: toBase64(new Uint8Array(encrypted)),
    };
};