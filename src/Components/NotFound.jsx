import Alert from 'react-bootstrap/Alert'

function NotFound() {
  return (
    <>
      {[
        'warning',
      ].map((variant) => (
        <Alert key={variant} variant={variant} className='text-center fw-bold fs-1'>
          PAGINA NON TROVATA, TORNA ALLA HOME !
        </Alert>
      ))}
    </>
  )
}

export default NotFound