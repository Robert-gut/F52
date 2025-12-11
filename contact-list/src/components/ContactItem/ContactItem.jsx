import { Link } from "react-router-dom";

export default function ContactItem({ stor, onDeleteContact }){
  console.log(stor.search);
  
  return(
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col"></th>
          <th className="text-center" scope="col">Name</th>
          <th className="text-center" scope="col">Email/Phone</th>
          <th className="text-center" scope="col">Status</th>
          <th className="text-center" scope="col">Edit/Del</th>
        </tr>
      </thead>
      <tbody>
        {stor.contacts.map(contact => (
          <tr key={contact.id}>
            <td><img className="rounded-circle" src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt="avatar" /></td>
            <td className="fs-5 align-middle text-center">{contact.firstName}<br/>{contact.lastName}</td>
            <td className="fs-5 align-middle text-center">{contact.email}<br/>{contact.phone}</td>
            <td className="fs-6 align-middle text-center">{contact.status.toUpperCase()}</td>
            <td className="fs-5 align-middle text-center">
              <Link to={`/update-contact/${contact.id}`}><button>Edit</button></Link>
              <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}