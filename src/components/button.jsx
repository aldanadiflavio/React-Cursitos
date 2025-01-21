const Button = (props) => {
  
    const {name} = props
    
    return (
      <>
        <button className="px-5 py-2 text-white rounded shadow-md bg-indigo-500 hover:bg-indigo-700">{name}</button>
      </>
      
    )
  }
  
  export default Button;