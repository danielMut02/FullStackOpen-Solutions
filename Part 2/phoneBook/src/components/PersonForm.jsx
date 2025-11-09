const PersonForm = (props) => {

    const {onSubmit, value, valueNumber, onChange, onChangeNumber, placeholder, placeholderNumber} = props
 
    return (
        <form onSubmit={onSubmit}>
        <div>
          name: <input 
            value = {value}
            onChange = {onChange}
            placeholder = {placeholder}
            />
        </div>
        <div>
          number: <input 
            value = {valueNumber}
            onChange = {onChangeNumber}
            placeholder = {placeholderNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>


    )
}

export default PersonForm