import "./App.css";
// import Header from "./components/Header";
import User from "./components/User";


function App() {
  return(
    <div>
      
      <User  
        name="Mithat" 
        surname="Kara" 
        isLoggedIn={true} 
        age={29}
        friends={["Ahmet", "Tayfun", "Gökhan", "Ayşe", "Fatma"]}
        adres= {{
          title: "Kavaklı/Beylikdüzü",
          zip: 34455
        }}
        />
      
      {/* <Header />
      <p className="xyz">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt, laborum eligendi vel delectus debitis dolor voluptates accusantium quis error voluptatibus ea ducimus eos distinctio aperiam dolore iusto? Harum, ratione.
      </p>
      <label htmlFor="myinput">
        Name
        <input id="myinput" />
      </label> */}
    </div>
  )
}



export default App;