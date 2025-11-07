const Header = ({course}) => <h1> {course} </h1>

const Part = ({part, exercise}) => <p>{part} {exercise}</p>

const Content = ({course}) => {
    
  return (
    <div>
    {course.parts.map(parte =>
        <Part key = {parte.id} part = {parte.name} exercise = {parte.exercises} />
    )}
    </div>
  )
}

const Total = ({course}) => {
    const exercisesArray = course.parts.map(array => array.exercises)
    const initialValue = 0;
    const sumWithInitial = exercisesArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
)

    return (
        <p><b>Number of exercises {sumWithInitial}</b></p>
    )

}

const Course = ({course}) => {
    return (
    <div key = {course.id}>
      <Header course = {course.name} />
      <Content course = {course} />
      <Total course = {course} />
    </div>
    )
}

export default Course

