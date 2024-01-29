const Button = function (propsobject) {
  console.log(propsobject)
  return (
    <div>
      <button>{propsobject.TextButton}</button>
    </div>
  )
}

export default Button
