import react from "react";
import {useSubscription,useMutation,gql} from '@apollo/client';
import './colors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import setBg from "./random";
import AddColor from "./addcolor";




const COLORS = gql`
  {
  color {
    id
    hex
    label
    rgb
  }
  }
`;
const DEL_COLOR=gql`
mutation MyMutation($id: Int!) {
  delete_color(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
`;
  export default function Color(){
      const{ loading, error, data }=useSubscription(COLORS);
      const[delColor]=useMutation(DEL_COLOR); 

      if(loading) return <p>loading...</p>;
      if(error) return <p>error</p>;
      

      
      
      return data.color.map(({id,hex,label,rgb})=>(
  
        
        <div style={{ right: '20px' }}>
  
        <Card key={id} className="my-4 mx-4"style={{ width: '16rem' }}>
  <Card.Body>
    <p contenteditable="true"  ><h2>{label}</h2></p>
    <button onClick={() => {
        delColor({ variables: { id:`${id}` } })
          
      }}  className="del mb-2 text-muted"style={{ height: '80px', width:'100%'
      ,backgroundColor:`${hex}`}} ></button>
    <Card.Text>
     HEX: {hex}
    </Card.Text>
    <Card.Text>
      {rgb}
      
    </Card.Text>
    <Card.Text>
      
    </Card.Text>
    
    
  </Card.Body>
</Card>


</div>
 ));}
