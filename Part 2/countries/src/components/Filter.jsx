const Filter = ({value, onChange, placeholder}) => {

    return (
        <div>
            Find countries <input
                  value = {value}
                  onChange = {onChange}
                  placeholder={placeholder}
              />
        </div>
    )
}

export default Filter