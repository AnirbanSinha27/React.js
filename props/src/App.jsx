import Student from "./Student"

function App() {
    return(
        <>
          <Student name="Anirban" age="20" isStudent={1}></Student>
          <Student name="Anannya" age={21} isStudent={1}></Student>
          <Student name="Pattrik" age={42} isStudent={0}></Student>
          <Student name="Harry" age={25} isStudent={1}></Student>
          <Student></Student>
        </>
    );
}

export default App
