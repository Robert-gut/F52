export default function SuperButton(props){
  console.log(props);
  return(
    <button onClick={()=>{console.log(props.title)}} style={{color: props.color, background: props.bg}}>
      {props.title}
    </button>
  )
}