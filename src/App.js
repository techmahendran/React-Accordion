import Accordion from "./components/Accordion";

function App() {
  const accordionContent = [
    {
      title: `what is react?`,
      content: `The React. js framework is an open-source JavaScript framework and library 
      developed by Facebook. It's used for building interactive user interfaces and web applications 
      quickly and efficiently with significantly less code than you would with vanilla JavaScript`,
    },
    {
      title: `what is react components?`,
      content: `Components are independent and reusable bits of code. They serve the same purpose as
      JavaScript functions, but work in isolation and return HTML.`,
    },
    {
      title: `How to js to react convert?`,
      content: `JSX is a syntactical sugar for React developers to easily 
      create components. We use transpilers like Babel to convert JSX to JavaScript`,
    },
  ];

  return (
    <div className="container">
      {accordionContent.map((accordion, index) => {
        return (
          <Accordion
            key={index}
            title={accordion.title}
            content={accordion.content}
          />
        );
      })}
    </div>
  );
}

export default App;
