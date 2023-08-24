export const HeaderComponentQuestion = (props) => {
  const headerStyle = {
    fontSize: '1.5rem', // Puedes ajustar el tamaño de fuente aquí
    fontWeight: 'bold', // Aplica negritas al título
  };

  return (
    <div className="header-component-question">
      <span style={headerStyle}>{props.title}</span>
    </div>
  );
};