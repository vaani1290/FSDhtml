console.log("Hello")
const parent=document.getElementById("root");
console.dir(parent);
const root=ReactDOM.createRoot(parent);
//const h2=React.createElement("h2",{style:{color:'cyan'}},"ABES Engineering College");
//const l1=React.createElement("li","{}","orange");
//const l2=React.createElement("li","{}","mango");
//const ul=React.createElement("ul",{style:{backgroundColor:'cyan'}},l1,l2);
//root.render(ul);
//JSX
const h2=<h2>Hello World</h2>
const l1=<li>orange</li>;
const l2=<li>Mango</li>;
const ul=<ul style={{color:'red'}}>{l1}{l2}</ul>
const container=(
    <div style={{backgroundColor:'brown'}}>
        {h2}
        <div>{ul}</div>
    </div>
)
root.render(container);