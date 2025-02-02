import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/header.js"
import Hero from "./components/hero.js"
import SubText from "./components/subtext.js"
import CardSection from "./components/cardSection.js"
import UnderConstruction from './components/underConstruction.js' 
import ricolaLogo from './assets/RicolaWorldLogos-02.png';
import loadingIcon from './assets/loadingIcon.png';
import './components/landing.css';

const query = 
        `query {
            categoriesCollection(limit: 20)
            {
            items
                {
                number
                name
                }
            }
            footstepCollection(order: footstep_ASC){
              items{
                footstep
                h1
                cardImage{
                  description
                  url
                }
                extract{
                  json
                }
                h2
                description{
                  json
                }
                sdGsCollection{
                  items{
                    description
                    url
                  }
                }
                categoryName
              }
              }
        }`
;

function App() {
  let [data, setData] = useState(null);

  let [hide, setHide] = useState("none");
  let [scrollTo, setScrollTo] = useState(true);

  let [construction, setConstruction] = useState("none");
  let [scrollToUC, setScrollToUC] = useState(true);
  
  const displayCardsSection = () =>{
      setHide("grid");
      setConstruction("none"); 
      setScrollTo(!scrollTo);
  }
  const displayUnderConstruction = () =>{
    setHide("none");
    setConstruction("block");
    setScrollToUC(!scrollToUC);
  }

  useEffect(() => {
      window
  .fetch(
  `https://graphql.contentful.com/content/v1/spaces/hr9iqsg7g59t?access_token=Pgo--ibSOmLEpNQiOr6dOeMUoxTsiBXzFe1DTJ0gk_k`,
  {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify({ query }),
  }
  )
  .then(response => response.json())
  .then((json) => setData(json.data));    
  }, [])

  if (!data) return <span className="loadingSpan">
    <img src={ricolaLogo} alt="The Ricola Logo Loading Icon" className="ricolaWorldLoading"></img>
    <img src={loadingIcon} alt='a spinnging loading icon' className='loadingIcon'></img>
  </span>
  
  const buttonData = data.categoriesCollection.items;
  const cardsData = data.footstepCollection.items;

  return (
    <React.Fragment>
      <Header/>
      <Hero 
      buttonData={buttonData}
      displayCardsSection={displayCardsSection}
      displayUnderConstruction={displayUnderConstruction}
      hide={hide}
      />
      <SubText />
      <CardSection 
        cardsData={cardsData}
        hide={hide}
        scrollTo={scrollTo}
      />
      <UnderConstruction
        construction={construction}
        displayUnderConstruction={displayUnderConstruction}
        scrollToConstruction={scrollToUC}
      />
    </React.Fragment>
  );
}

export default App;
