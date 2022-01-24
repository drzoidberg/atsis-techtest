import Button from 'react-bootstrap/Button'

function GenericButton({ contents, to, className, as, props, onClick }) {
  return (
    <Button as={as} to={to} className={className} onClick={onClick} {...props}>
      {contents}
    </Button>
  )
}

export default GenericButton
