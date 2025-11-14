import React from 'react'

function BlogList(props) {
    const allName = props.allName
    const title = props.title
    const deleteButton = props.deleteButton
    const viewButton = props.viewButton
  return (
    <>
        <h2>{ title }</h2>
        <table border={1}>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Delete</th>
            </tr>
            {allName.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.city}</td>
                    <td>
                        <button onClick={() => {deleteButton(user.id)}}>Delete</button>
                        <button onClick={() => {viewButton(user.id)}}>View</button>
                    </td>
                </tr>
            ))}
        </table>
    </>
  )
}

export default BlogList