// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function Element1({children, color}){
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
      <h2 style={{color: color}} className='m-4 testForClassName' onClick={() => {console.log('H2')}} >Element 1</h2>
      <p onClick={testF} style={styles.header}>Lorem, ipsum dolor.</p>
      <button onClick={()=>{add(10,5)}} style={styles.header}>Add</button>
      {children}
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
    </>
  )
}

export default Element1