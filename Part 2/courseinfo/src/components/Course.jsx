const Header = ({course}) => <h1> {course} </h1>

const Part = ({part, exercise}) => <p>{part} {exercise}</p>

const Content = ({course}) => {
    //const content = course.map(course => course.parts)
    //console.log(content)

  return (
    <div>
    {course.map(parte =>
          <Part key = {parte.id} part={parte.name} exercise={parte.exercises} />
      )
      }
    </div>
  )
}

const Total = ({course}) => {
    const exercisesArray = course.map(array => array.exercises)
    const initialValue = 0;
    const sumResult = exercisesArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
)

    return (
        <p><b>Total of {sumResult} exercises </b></p>
    )

}

const Course = ({course}) => {
    return (
    <>
      <Header course = {course.name} />
      <Content course = {course.parts} />
      <Total course = {course.parts} />
    </>
    )
}

export default Course

