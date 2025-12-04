export default function ContactItem({ stor }){
 
  return(
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {stor.map((contact, index) => (
          <tr key={contact.id}>
            <th scope="row">{++index}</th>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}