const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part nimi = {props.course.parts[0].name} harjoitus = {props.course.parts[0].exercises}/>
      <Part nimi = {props.course.parts[1].name} harjoitus = {props.course.parts[1].exercises}/>
      <Part nimi = {props.course.parts[2].name} harjoitus = {props.course.parts[2].exercises}/>

    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.nimi}:{props.harjoitus}
      </p>
    </div>
  )
}

 const Total = (props) => {
  return props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises

  }

  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App