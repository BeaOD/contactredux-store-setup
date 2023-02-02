{/*import React, {useState} from 'react'*/}

{/*const Edit = (props) => {
    const [name, setName] = useState(props.userscontact.name);
    const [contact, setContact] = useState(props.userscontact.contact);
    const [location, setLocation] = useState(props.userscontact.location);

    const handlesubmit = (e) => {
        e.preventDefault()
        // console.log({name,contact,location})
        props.userEdit({ name, contact, location, id :props.userscontact.id });
        setName("");
        setContact("");
        setLocation("");
    }


  return (
    <>


    <form >
        <div>
            <label>Name</label>
            <br />
            <input type='text' placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
        </div>

        <div>
            <label>Contact</label>
            <br />
            <input type='number' placeholder="contact" value={contact} onChange={(e) => { setContact(e.target.value) }}></input>
        </div>

        <div>
            <label>Location</label>
            <br />
            <input type='text' placeholder="location" value={location} onChange={(e) => { setLocation(e.target.value) }} ></input>
        </div>


        <button onClick={handlesubmit} >Submit</button>

    </form>

</>
  )
}

export default Edit*/}