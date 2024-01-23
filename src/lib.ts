export function CalculateAverage (TableNumber:number[]):number {

    if (TableNumber.length === 0)
        return 0
    return TableNumber.reduce((a, b) => a + b ) / TableNumber.length
}


export function RoundNumber (Average: number, precision: number) {
    precision = 1/precision
    return Math.round(Average * precision) / precision;
}

