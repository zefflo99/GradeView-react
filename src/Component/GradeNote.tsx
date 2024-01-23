
export default function GradeNote({grade, bold = false, big = false}: {grade: number, bold: boolean, big: boolean}) {
    return (
    <>
        <span
            className={`inline-flex items-center gap-x-1.5 rounded-md text-gray-900 ring-1 ring-inset
                ${bold ? "ml-1 font-bold ring-gray-300" : "font-medium ring-gray-200"}
                ${big ? "px-3 py-1 text-lg" : "px-2 py-2 text-sm"}
            `}>
            <svg className={`
                h-1.5 w-1.5
                ${grade >= 4 && grade <= 4.5 ? "fill-yellow-500" : ""}
                ${grade > 4.5 ? "fill-green-500" : ""}
                ${grade < 4 ? "fill-red-500" : ""}
            `} viewBox="0 0 6 6"
                 aria-hidden="true">
              <circle cx="3" cy="3" r="3"/>
            </svg>
            {grade}
        </span>
    </>
    )
}
/*
 px-3 py-1 text-lg
 */