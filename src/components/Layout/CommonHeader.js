import { Fragment } from "react";
import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import "./CommonHeader.css";
import recipelogo from "../../assets/ShashankRecipelogo.png";
import contactimg from "../../assets/contact.png";

const CommonHeader = (props) => {
  return (
    // <Fragment>
    //   <header className={classes.header}>
    //     <Link to="/">
    //       <h1>ReactMeals</h1>
    //     </Link>
    //   </header>
    // </Fragment>
    <nav id="navbar" class="nav">
      <Link to="/" className="logoLink">
        <img src={recipelogo} alt="logo" className="logo" />
      </Link>

      <div className="desktopMenu">
        <Link
          to="/recipe"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Recipe
        </Link>
        <Link
          to="/calorieCount"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Calculate Calories
        </Link>
        <Link
          to="/nutrtionAnalysis"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Nutrition Analysis
        </Link>
        <Link
          to="/order-food"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Order Now
        </Link>
      </div>
      <Link
        to="/contactUs"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
        className=""
      >
        <button className="desktopMenuBtn">
          <img src={contactimg} alt="contactMe" className="desktopMenuImg" />
          Contact Me
        </button>
      </Link>
    </nav>
  );
};

export default CommonHeader;
