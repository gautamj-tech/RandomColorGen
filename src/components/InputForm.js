import react from "react";
import {useQuery,useMutation,gql} from '@apollo/client';
//import './colors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import setBg from "./random";
//import Rgb from "./randomRGB";
import AddColor from "./addcolor";


function Rgb(hex){
    return 'rgb(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).join(',') + ')';
}

const ADD_COLOR=gql`
mutation AddNewColor($hex: String!, $rgb: String!) {
  insert_color(objects: {hex: $hex, rgb: $rgb}) {
    affected_rows
  }
}
`;
  export default function InputColor(){
     
      const[addColor]=useMutation(ADD_COLOR); 
      let inputhex=setBg();
      let inputrgb= Rgb(inputhex);

      
      
      return (<AddColor
      
      onSubmit={() => {
        addColor({ variables: { hex:inputhex, rgb: inputrgb } })
          
      }}
      />

      )
    }
 



















