import React,{useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { 
  List,
  ListItem,
  MotionList,
  MotionListItem,
  Box
} from '../sc-lib';

const IndexPage = () => {


 return <Layout>
    <SEO title="styled" />
    <h1>
      Physics of Intractive Web 
    </h1>
    <p>
   
    </p>
   <ListPhysics/>
   <NavigationPhysics/>
   <ScrollPhysics/>
   <ProgressPhysics/>
   <IntractionPhysics/>
  </Layout>
};

export default IndexPage

const ListPhysics  = () => {
  const [list,setList] = useState([      'First Class',
  'Dark Phoenix',]);

  setTimeout(()=>{
    setList([
      'First Class',
      'Days of Future Past',
      'Origin',
      'Dark Phoenix',
    ]);
  },1000);
  return  <><h2>
    List Items
    </h2>

  <List as={MotionList}  >
   {list.map( item => {
     return <ListItem key={item} as={MotionListItem}>
       <Box p={2}>
         {item}
       </Box>
     </ListItem>;
   })}
  </List></>;
}

export const NavigationPhysics = () => {
  return <div>
       <h2>
  Navigation Physics
</h2>
  </div>;
};

export const ScrollPhysics = () => {
  return <h2> Scroll </h2>;
};

export const ProgressPhysics = () => {
  return <div>
        <h2>
      Progress
</h2>
  </div>;
};

export const IntractionPhysics = () => {
  return <div>
        <h2>
      Intraction
</h2>
  </div>;
};
