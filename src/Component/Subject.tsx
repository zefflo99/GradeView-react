import GradeNote from "./GradeNote.tsx";
import Semester from "./Semester.tsx";
import AddSemester from "./AddSemester.tsx";
import {useState} from "react";



export default function Subject() {
    const [semesterAmount, setSemesterAmount] = useState<number[][]>([])

    return <div className="grid grid-cols-1 gap-4 lg:col-span-2">
        <section aria-labelledby="section-1-title">
            <h2 className="sr-only" id="section-1-title">Grades</h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
                <div className="p-6">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="min-w-0 flex-1">
                            <h2
                                className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                Mathématiques
                            </h2>
                        </div>
                        <div className="mt-4 flex md:ml-4 md:mt-0">
                            <GradeNote grade={4} bold={true} big={true}/>
                        </div>
                    </div>
                    <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">

                            {
                                semesterAmount.map(
                                    (noteList, index) =>
                                        <Semester numberSemester={index+1} grades={noteList}/>
                                )
                            }

                            <AddSemester buttonAdd={() => {
                                setSemesterAmount(semesterAmount => [...semesterAmount, []])
                            }}/>


                        </dl>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}