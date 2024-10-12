function Counter() {
    const [state, setState] = ForReact.useState(1);
    return ForReact.createElement(
      "h1",
      { onClick: () => setState(c => c + 1) },
      `Count: ${state}`
    );
  }
  
  // Get the root DOM node
  const container = document.getElementById("root");
  
  // Render the Counter component to the root node
  const element = ForReact.createElement(Counter, null);
  ForReact.render(element, container);
  