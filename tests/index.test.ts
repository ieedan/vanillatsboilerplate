import { describe, expect, test } from "@jest/globals";
import { MouseMove } from '../src/TS/index'

describe('Mouse move calculation tests',() => {
    
    test('Mouse moved half of width should be 50%',() => {
        const clientWidth = 1000;
        const e = {
            clientX: 500
        };

        const expected = 50;

        const actual = MouseMove(e,clientWidth);

        expect(actual).toBe(expected);
    });

    test('Mouse moved 1/4 of width should be 25%',() => {
        const clientWidth = 1000;
        const e = {
            clientX: 250
        };

        const expected = 25;

        const actual = MouseMove(e,clientWidth);

        expect(actual).toBe(expected);
    });

    test('Mouse moved none of width should be 0%',() => {
        const clientWidth = 1000;
        const e = {
            clientX: 0
        };

        const expected = 0;

        const actual = MouseMove(e,clientWidth);

        expect(actual).toBe(expected);
    });
});