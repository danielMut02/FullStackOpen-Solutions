const Filter = ({value, onChange, placeholder}) => {

    return (
        <div>
            Persons shown with <input
                  value = {value}
                  onChange = {onChange}
                  placeholder={placeholder}
              />
        </div>
    )
}

export default Filter