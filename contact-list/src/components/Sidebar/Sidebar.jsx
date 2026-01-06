import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar(){
  const contacts = useSelector(state => state.contacts)
  const filter = useSelector(state => state.filter)
  const contactStatuses = useSelector(state => state.contactStatuses)
  const dispatch = useDispatch()

  const statusCaunts = useMemo(()=>{
    const counts = {...contactStatuses}
    Object.keys(counts).forEach(status => (counts[status].count = 0))
    contacts.forEach(contact=> {
      if(counts[contact.status]){
        counts[contact.status].count++
      }
    })
    return counts
  }, [contacts, contactStatuses])

  console.log(statusCaunts);
  
  const totalContacts = contacts.length

  return(
    <aside className="container border-end">
      <div className="row">
        <div className="col-12">
          <div className="contacts-labels">
            <div className="title">
              All contact<span>{totalContacts}</span>
            </div>
            <div className="list">
              {
                Object.keys(statusCaunts).map(status => (
                <div key={status} className="unit">
                  <div className="lab lab-success">{status}</div>
                  <span>{statusCaunts[status].count}</span>
                </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}