import Alert from 'react-bootstrap/Alert'

function Welcome() {
  return (
    <>
      {[
        'warning',
      ].map((variant) => (
        <Alert key={variant} variant={variant} className='text-center fw-bold fs-1'>
          EPICBOOKS
        </Alert>
      ))}
    </>
  );
}

export default Welcome