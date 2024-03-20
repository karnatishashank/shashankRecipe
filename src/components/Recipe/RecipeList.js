import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { fetchData } from "./Service";
import { Modal } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { GiFruitBowl, GiNoodles, GiCheckMark } from "react-icons/gi";
import './Recipe.scss'

function RecipeList(props) {
    const [searchedTerm, setSearchTerm] = useState("");
    const [query, setQuery] = useState("pizza");
    const [data, setData] = useState("");
    const [lgShow, setLgShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null); // Add this state
  
    const searchRecipe = (searchQuery) => {
      fetchData(searchQuery).then((response) => {
        setData(response);
        props.setLoader(false);
        console.log(response);
      });
    };
  
    const openModal = (item) => {
      setSelectedItem(item); // Set the selected item when opening the modal
      setLgShow(true);
    };
  
    useEffect(() => {
      fetchData(query).then((response) => {
        setData(response);
        props.setLoader(false);
        console.log(response);
      });
    }, []);
  
    return (
      <div className="container">
        <div className="heading-line">
          <strong>Search Recipes</strong>
          <div className="input-wrapper">
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchedTerm}
              placeholder="Search your Recipies"
            />
            <button
              onClick={() => (searchRecipe(searchedTerm), props.setLoader(true))}
            >
              <BsSearch />
            </button>
          </div>
        </div>
        <div className="flexbox">
          {data &&
            data.hits.map((item, index) => (
              <div
                key={index}
                onClick={() => openModal(item)} // Call openModal on click
                className="flexItem"
              >
                <div className="img-wrapper">
                  <img src={item.recipe.image} alt={item.recipe.label} />
                </div>
                <p>{item.recipe.label}</p>
              </div>
            ))}
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                {selectedItem && selectedItem.recipe.label}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedItem && (
                <div className="modalData">
                  <Row>
                    <Col className="imageContainer" sm={3} lg={3}>
                      <img
                        src={selectedItem.recipe.image}
                        alt={selectedItem.recipe.label}
                      />
                    </Col>
                    <Col sm={9} lg={9}>
                      <div className="dishDetails">
                        <p>Calories: {selectedItem.recipe.calories}</p>
                        <p>
                          <strong>Recipe by: </strong>
                          <small>{selectedItem.recipe.source}</small>
                        </p>
  
                        <p>
                          <strong>Cuisine Type: </strong>
                          <small>{selectedItem.recipe.cuisineType[0]}</small>
                        </p>
                        <a target="_blank" href={selectedItem.recipe.url}>Full Recipe</a>
                      </div>
                    </Col>
                    {/* You can display other data from the selected item here */}
                  </Row>
                  <div className="modalBottom">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="first"
                    >
                      <Row>
                        <Col className="dishTabs" sm={3}>
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="first">Health Labels</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">Ingredients</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={9}>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <div className="recipeModal">
                                <div className="recipeInner">
                                  <h1>{selectedItem.recipe.label}</h1>
  
                                  <h3>Health label</h3>
                                  <div className="ingredients">
                                    <ul>
                                      {selectedItem.recipe.healthLabels.map(
                                        (list, index) => (
                                          <li key={index}>
                                            <GiCheckMark
                                              size="18px"
                                              color="#fff"
                                            />
                                            &nbsp;<span>{list}</span>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <div className="recipeModal">
                                <div className="recipeInner">
                                  <span className="badge">
                                    {selectedItem.recipe?.cuisineType[0].toUpperCase()}
                                  </span>
                                  <h1>{selectedItem.recipe.label}</h1>
  
                                  <h3>Ingredients</h3>
                                  <div className="ingredients">
                                    <ul>
                                      {selectedItem.recipe.ingredientLines.map(
                                        (list, index) => (
                                          <li key={index}>
                                            <GiCheckMark
                                              size="18px"
                                              color="#fff"
                                            />
                                            &nbsp;<span>{list}</span>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>
                </div>
              )}
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
}

export default RecipeList
