export const UIQuestionBank = [
  {
    id: 1,
    question:
      'How is the role of a UI Developer different from that of a UX Developer?',
    content:
      'UX design is the careful planning and creation of the user experience and everything it entails. It focuses first and foremost on creating a product or service that solves a particular user problem, making sure the proposed solution is easy and enjoyable to use. UI design is the process of designing how digital interfaces look and behave. It covers all the visual and interactive properties of websites, software and apps—from colours and typography to buttons, scroll functions, animations and more.',
  },
  {
    id: 2,
    question:
      'What is the difference between a UI Developer and a Front-end Developer?',
    content:
      'A front-end developer is responsible for creating a web interface on the client side. This is done by using CSS, HTML, JavaScript, and other technologies. Front-end developers work on whole pages and develop a website as a combination of these pages. It is their responsibility to ensure that the website functions properly along with all its elements. A UI/UX developer also uses CSS, HTML, JavaScript, and other technologies. They majorly use HTML and CSS. They are responsible for the visual elements that constitute the finished product such as buttons, tooltips, etc. A UI developer has to make sure that all the elements on the website are user-friendly and look pleasing.',
  },
  {
    id: 3,
    question: 'What is the full form of HTML and what is it used for?',
    content: `The full form of HTML is HyperText Markup Language. HTML is the most popular language for creating websites. It comes with a series of elements and helps explain the structure of a web page. HTML elements are responsible for telling the browser how to display the content. How do you optimize a website's assets? We can optimize a website's assets by file concatenation, CDN hosting, file compression, offloading assets, refining code, reorganizing, etc. Want to become a professional? Enroll in our UI UX Design course in Chennai!`,
  },
  {
    id: 4,
    question:
      'What is the syntax difference between a bulleted list and a numbered list?',
    content:
      'A bulleted list will use the ul tag, which means unordered list. A numbered list, on the other hand, will use the ol tag, which means ordered list.',
  },
  {
    id: 5,
    question: 'Explain the layout of HTML',
    content: `HTML layout specifies how a web page will be arranged. There are various HTML5 elements that are used to define various parts of a web page:

    <header>: This defines the header for a section or document
    <nav>: This defines a container for navigation links
    <section>: This defines a section in a document
    <article>: This defines a self-contained, independent article
    <aside>: This defines stuff that is aside from the content, for example, a sidebar
    <footer>: This defines the footer of a document`,
  },
  {
    id: 6,
    question: `Describe the Request-response model or Client-server Architecture`,
    content: `(1) Client executes DNS Lookup (2)DNS Sends back real IP address (where server lives) (3)Client calls IP Address (4)TCP/IP socket connection between client/browser and the server (5) Client makes HTTP Request to Server (HTTP: Protocol that allows clients and servers to communicate via request/response messages) (6) Server sends back data, usually in the form of JSON`,
  },
  {
    id: 7,
    question: `what is memoization and caching?`,
    content: `memoization is an optimization technique that makes applications more efficient and hence faster. It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again`,
  },
  {
    id: 8,
    question: `What is the TCP/IP protocls used for?`,
    content: `The job of the TCP is to break the requests and responses down into thousands of small chunks called “Packets” before they are sent. Once they arrive at the final destination, TCP reassembles all the packets into the original response → necessary so each packet can take a different route through the internet and arrives at the destination as quick as possible. The job of the IP protocol is to actually send and route these packets through the internet by using IP addresses on each packet.`,
  },
  {
    id: 9,
    question: `What are the main parts of the Javascript Runtime in the Browser?`,
    content: `The JS Engine (the heart of the runtime), which holds the Heap (where objects are stored in memory) and the callstack (where code is actually executed). You have the callback Queue, which is where your asynchronous code gets pushed to, and waits for the execution. You then have the Event Loop which keeps running continuously and checks the Main stack for any frames to execute and the Callback queue for any codes to execute. If the Callback Queque has code to execite it pops the message from it to the Main Stack for the execution. Finally, you have the Microtask Queue which gets the callback functions coming through Promises and the Mutation Observer. It has priority over the Callback Queue.`,
  },
  {
    id: 10,
    question: `What is a Promise?`,
    content: `An object used as a placeholder for the future result of an async operation`,
  },
  {
    id: 11,
    question: `How do you Consume a Promise?`,
    content: `By using Promises<br/><br/>const getCountryData = function (country)<br/>fetch(https://restcountries.com/v2/name/$(country))<br/>.then(function(response)<br/>console.log(response);<br/>);<br/><br/>getCountryData('portugal');<br/><br/>`,
  },
]

export const ReactQuestionBank = [
  {
    id: 1,
    question: 'What is React?',
    content: `React is an open-source front-end JS library used for building user interfaces, especially for single-page-applications
        (only load app code once, and the JS file updates the HTML/CSS to display new things). Created by FB in 2011 and uses a component-based approach, which ensures to help you build componenets that possess reusability.`,
  },
  {
    id: 2,
    question: 'What are the major features in react?',
    content: `VirtualDOM: instead of RealDOM considering that RealDOM manipulations are expensive. Supports Server-side rendering. Follows Unidirectional data flow or data binding. Uses reausable/composable UI components to develop the view`,
  },
  {
    id: 3,
    question: 'What is JSX?',
    content: `XML-like syntax extention to ECMAScript (JavaScript XML); provides syntactic sugar for the React.createElement() function, gives us HTML-like syntax`,
  },
  {
    id: 4,
    question: 'Difference between element and component?',
    content: `An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other elements in thier props. Once it's created, it's never mutated. A component can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. In either case, it takes props as an input and returns a JSX tree as the output.`,
  },
  {
    id: 5,
    question: 'What are Props?',
    content: `Props are inputs to components: Single values or objects containing a set of values that are passed to components; data passed down from a parent component to a child component; Use Cases: Primary: passed custom data, and they also trigger state changes`,
  },
  {
    id: 6,
    question: 'When does react determine it needs to re-render the DOM?',
    content: `When state is a completely different object in memory. You change state using a built-in-method called setState(). You can give setState an object you want to Shallow Merge with your current state object`,
  },
  {
    id: 7,
    question: 'What are the use of Refs?',
    content: `The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.`,
  },
  {
    id: 8,
    question: 'What is lifting state up in React?',
    content: `When several components need to share changing data then it's recommended to lift the shared state up to thier closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.`,
  },
  {
    id: 9,
    question: 'What are the different phases of component lifecycle?',
    content: `There are 3 distinct lifecycle events:
    (1) Mounting: The component is ready to mount in the browser DOM. This phase covers initialization from constructor(),
    getDerivedStateFromProps(), render(), and componentDidMount() lifecycle methods.
    (2) Updating: In this phase, the component gets updated in two ways, sending the new props and updating the state either from setState() or forceUpdate().
    This phase covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate() lifecycle methods.
    (3) Unmounting: In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes componentWillUnmount() lifecycle method`,
  },
  {
    id: 10,
    question: 'What are the lifecycle methods of React?',
    content: `getDerivedStateFromProps: Invoked right before calling render() and is invoked on every render.
    componentDidMount: Executed after first rendering and where all AJAX requests, DOM or state updates, and set up event listeners should occur.
    shouldComponentUpdate: Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn't need to render after the state or props are updated, you can return a false value.
    getSnapshotBeforeUpdate: Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into componentDidUpdate(). This is useful to capture information from the DOM i.e. scroll position.
    componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes. This will not fire if shouldComponentUpdate() returns false.
    componentWillUnmount: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component`,
  },
  {
    id: 12,
    question: 'What is State in React?',
    content: `State of a component is an object that holds some information that may change over the lifetime of the component. State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.`,
  },
  {
    id: 12,
    question: 'What is Context?',
    content: `Context provides a way to pass data through the component tree without having to pass props down manually at every level (prop drilling). For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components. Try and stay away from context, as every state stored in context is re-rendered when one state changes`,
  },
  {
    id: 13,
    question: 'Why we need to pass a function to setState()?',
    content: `The reason behind for this is that setState() is an asynchronous operation. React batches state changes for performance reasons, so the state may not change immediately after setState() is called. `,
  },
  {
    id: 14,
    question: 'What is strict mode in React?',
    content: `React.StrictMode is a useful component for highlighting potential problems in an application. Just like Fragment, StrictMode does not render any extra DOM elements. It activates additional checks and warnings for its descendants. These checks apply for development mode only.`,
  },
  {
    id: 15,
    question: 'What does the useEffect hook do?',
    content: `By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.`,
  },
]
