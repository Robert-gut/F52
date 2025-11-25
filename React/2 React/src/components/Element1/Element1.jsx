
function Element1(){

  const styles = {
    header: {
      color: 'blue',
      fontSize: '32px'
    },
    title:{
      fontSize: '12px'
    }
  }

  const objStyle = {
    fontSize: '60px',
    color: 'red',
  }

  const testF = () => {
    console.log(1+1+'p');
  }

  const add = (a,b) => {
    console.log(a + b);
  }

  return(
    <>
      <h2 onClick={() => {console.log('H2')}} className="testForClassName" style={objStyle} >Element 1</h2>
      <p onClick={testF} style={styles.header}>Lorem, ipsum dolor.</p>
      <button onClick={()=>{add(10,5)}} style={styles.header}>Add</button>
    </>
  )
}

export default Element1