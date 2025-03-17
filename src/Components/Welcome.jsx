import Alert from 'react-bootstrap/Alert';

function BasicExample() {
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

export default BasicExample;