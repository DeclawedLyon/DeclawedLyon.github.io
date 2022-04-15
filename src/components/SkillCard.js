export default function SkillCard(props) {
  return (
    <>
      <img src={props.logo} alt="skill logo"></img>
      <h1>{props.name}</h1>
    </>
  )
}