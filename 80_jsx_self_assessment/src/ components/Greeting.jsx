const Greeting = ({name}) => {
  // TODO: read `name` from props and render “Hello, <name>!” within a div
  // TODO: if no name is provided, render "Hello, stranger!"
  // TODO: if name is empty, render "Hello, stranger!"
  // TODO: if name is NOT a string, render "Hello???"

  //! Updated version
  // TODO: Wrap the greeting inside a <div> element
  // TODO: If `name` is a string and not empty, render “Hello, <name>!”
  // TODO: If `name` is missing or an empty string, render “Hello, stranger!”
  // TODO: If `name` is not a string (e.g. a number), render “Hello???”
  // INFO: (In React, rendering means what the component returns)

  const nameCheck = () => {
    if (name === undefined) {
      return 'Hello, stranger!';
    }
    if (name === '') {
      return 'Hello, stranger!';
    }
    if (typeof name !== 'string') {
      return 'Hello???';
    }
    return `Hello, ${name}!`;
  };

  return (
    <div>{nameCheck()}</div>
  );
};

export default Greeting;
