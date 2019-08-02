
type CallBackError = Error | null;
type CallBack      = (error: CallBackError, response: Object) => void;
type SendRequest   = (cb: CallBack) => void;

const sendRequest: SendRequest = (cb: CallBack): void => {
    if (cb) {
        cb(null, {message: 'todo salio como lo planeamos'});
    }
}

/*********/
type AreaRectangulo = (altura: number, base: number) => number;

const getAreaRectangulo: AreaRectangulo = (altura: number, base: number ): number => {
    return altura * base;
}