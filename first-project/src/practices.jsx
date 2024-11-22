export const Practices = () => {
    const student = [1]
    console.log(student.length );
    console.log(Boolean(student.length) );
    
    return (
        <>
        {/* <p>{student.length && "No Student Found."}</p> */}
        {/* 1. */}
        {/* <p>{!student.length && "No Student Found."}</p> */}
        {/* 2. */}
        {/* <p>{Boolean(!student.length) && "No Student Found."}</p> */}
        {/* 3. */}
        {/* <p>{student.length === 0 ? "No Student Found" : "Found"}</p> */}
        {/* 4. */}
        <p>{student.length === 0 && "No Student Found."}</p>
        <p>Number Of Students : {student.length}</p>
        </>
    )
}