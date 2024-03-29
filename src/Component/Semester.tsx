import GradeNote from "./GradeNote.tsx";
import InputValue from "./InputValue.tsx";
import {useState} from "react";
import {CalculateAverage, RoundNumber} from "../lib.ts";


export default function Semester({numberSemester, grades}: {numberSemester:number, grades:number[]}) {
    const [input, setInput] = useState<number[]>(grades);
    const average = RoundNumber(CalculateAverage(input), 0.5)

    return <div
        className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-900 py-2">
            <h2>Semestre {numberSemester}</h2>
        </dt>
        <dd
            className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5">
            <div className="flex flex-row flex-nowrap overflow-y-scroll gap-x-1.5">
                {
                    input.map(
                        grade =>
                            <GradeNote grade={grade} bold={false} big={false}/>
                    )
                }
            </div>
            <div className="flex">
                <InputValue inputValue={(i: number) => {
                    setInput((j) => [...j, i])
                }}/>
                {average == 0 ? "": <GradeNote grade={average} bold={true} big={false}/>}

            </div>
        </dd>
    </div>;
}