export function percentage(x: number, y: number) {
    return 100 / (y / x);
}

export function debounce(
    limit: number | undefined,
    callback: (args_0: any[]) => void,
) {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(callback, limit, args);
    };
}

export function HexToRGB(hex: string) {
    if (hex.startsWith('#') && hex.length === 7) {
        const dissected = hex.split('#');
        const clearedHex = dissected[1];
        const aRgbHex = clearedHex.match(/.{1,2}/g);

        if (aRgbHex) {
            const aRgb = {
                r: parseInt(aRgbHex[0], 16),
                g: parseInt(aRgbHex[1], 16),
                b: parseInt(aRgbHex[2], 16),
            };

            return aRgb;
        }
    }

    return false;
}

export function imageInputInstruction() {
    return 'Drop your image here or click this area';
}

type ErrorWithMessage = {
    message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
    return (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof (error as Record<string, unknown>).message === 'string'
    );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
    if (isErrorWithMessage(maybeError)) return maybeError;

    try {
        return new Error(JSON.stringify(maybeError));
    } catch {
        // fallback in case there's an error stringifying the maybeError
        // like with circular references for example.
        return new Error(String(maybeError));
    }
}

export function getErrorMessage(error: unknown) {
    return toErrorWithMessage(error).message;
}
