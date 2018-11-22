const headerMod = document.querySelector("#container");

class HelloWorld extends React.Component{
  render(){
    return <div className="names">{this.props.greetTarget}</div>
  }
}

ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Superman"/>
    <HelloWorld greetTarget="Aquaman"/>
    <HelloWorld greetTarget="Arrow"/>
    <HelloWorld greetTarget="Flash"/>
    <HelloWorld greetTarget="Luthor"/>
  </div>,
  headerMod
);
