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

const Total = (props) => <p><b>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises + props.parts[3].exercises}</b></p>

const Course = ({course}) => {
    return (
    <div key = {course.id}>
      <Header course = {course.name} />
      <Content course = {course} />
      <Total parts = {course.parts} />
    </div>
    )
}

export default Course

