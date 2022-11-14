import {AssertionError} from "chai";

export function checkNullable<TKey extends keyof Types>(val: any, expectedType: Types[TKey]) : true | Error {
    function checkPassed() {
        return !val || typeof val == expectedType;
    }
    if(checkPassed()) return true;
    throw new AssertionError(`expected ${val} to be ${expectedType}`);
}

interface Types {
    string: "string",
    object: "object",
    boolean: "boolean",
    number: "number",
    symbol: "symbol",
    function: "function"
}

/**
 * Check if data has a format of "yyyy-mm-dd hh:mm:ss"
 * @param date - string
 * @returns - boolean
 */
export function lDateValidation(date: string) {
    const lDateRegex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
    return lDateRegex.test(date);
}

/**
 * Check if data has a format of "yyyy-mm-dd"
 * @param date - string
 * @returns - boolean
 */
export function sDateValidation(date: string) {
    const sDateRegex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
    return sDateRegex.test(date);
}

/**
 * Check if date format is valid for parameters that could be "null"
 * @param date - string
 * @param format - use "long" for "yyyy-mm-dd hh:mm:ss" format or "short" for "yyyy-mm-dd" format
 *
 * @return - true | AssertionError
 */
export function checkNullableDate(date: string, format: "long"|"short"|never) {
    let passed: boolean;
    const longDate = 'yyyy-mm-dd hh:mm:ss';
    const shortDate = 'yyyy-mm-dd';

    if(!date) return true;
    if(format == 'short') passed = sDateValidation(date);
    if(format == 'long') passed = lDateValidation(date);

    if(passed) return true;

    const expected = (format=="short") ? shortDate : longDate
    throw new AssertionError(`expected "${date}" to be a format of: "${expected}"`);
}
