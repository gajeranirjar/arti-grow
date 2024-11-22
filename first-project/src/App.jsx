// const name = "piyush"

export const App = () => {
  return (
    <>
      <Card Pro = "nirjar" name="1"/>
      <Card Pro = "piyush"/>
      {/* <Card></Card> */}
    </>
  )
}

const Card = (name) => {
  // const name = prompt("what's your name ?");
  console.log("card" , name);
  

  return (
    <div>
      <div>
        <img src="vite.svg" alt="vite.svg" height='140px' width= '100%'/>
      </div>
      <div className="card">
      <h2>NAME : {name.Pro}</h2>
      <h3>RATING : 4.5</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero id nisi dapibus pulvinar et vel mauris. Sed vel turpis in neque tincidunt bibendum. Sed non condimentum felis, at ultrices nunc. In vel nunc et libero condimentum efficitur.</p>
      </div>
    </div>
  )  
}

// export default App