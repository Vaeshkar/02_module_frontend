
const Button = ({ label, onClick, disabled }) => {
  // TODO: Render a <button> element
  // TODO: Use the `label` prop as the button's text
  // TODO: Call the `onClick` handler when clicked
  // TODO: Apply the `disabled` prop if provided

  //! Updated version
  // TODO: Create a <button> element inside the return statement
  // TODO: Display the value of the `label` prop as the button's visible text
  // TODO: When the button is clicked, run the `onClick` function passed as a prop
  // TODO: If the `disabled` prop is true, disable the button (add `disabled` attribute)
  
  return (
    <>
      <button disabled={disabled} onClick={onClick}>{label}</button>
    </>
  );
};

export default Button;
