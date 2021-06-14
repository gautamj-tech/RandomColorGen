
import './addcolor.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

 const AddColor = ({ onSubmit}) => {
    return (
        <div className="center">
       
        <button onClick={onSubmit} className="button button4 mx-4">
  <h1>+</h1> 
</button>
</div>

    );
  };
  
export default AddColor;