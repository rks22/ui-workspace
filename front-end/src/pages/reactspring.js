

import React,{useState,useEffect} from "react";
import {useSpring, animated,config } from 'react-spring';
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  Box,
  Flex
} from '../sc-lib';


const Items = ({configType='default'}) => {
const [final,setFinal] = useState(false);  
const props = useSpring({
transform:`${final ? 'scale(1)' : 'scale(0.4)'}`,
config:config[configType]
}
);
useEffect(()=>{
setFinal(!final)
},[configType]

);

const AnimatedFlexBox = animated(Flex);
  return <Flex
  width={[1/3 ]}
  style={{minHeight:'250px',cursor:'pointer',border:'1px dotted grey'}}
  >
 
  <AnimatedFlexBox
 onClick = {() => {
  console.log('clicked');
  setFinal(!final);
}
 }
 justifyContent={'center'}
  alignItems={'center'}
  style={props}
  fontSize={4}
  p={2}
  width={[1]}
  height={'250px'}
  color='white'
  bg='red'>
  Animate
</AnimatedFlexBox>
</Flex>
}

const Reactions = () => {
  const [config,setConfig] = useState('default');
  const configs = ['default','wobbly','gentle','slow'];
  return <Flex
  flexWrap='wrap'
  width={[1]}
  p={2}
  > 
  <Flex
  width={[1]}
  alignItems='center'
  >
   {configs.map((_config) =>
   <Flex
   alignItems={'center'}
   justifyContent={'center'}
    flex={1}
   >
     <Box
    p={1}
    bg={_config === config ? 'red' :''}
    style={{borderRadius:'2px'}}
    >
      <span
      onClick = {() => setConfig(_config)}
      style={{cursor:'pointer',
      color: _config === config ? 'white' :'black'
      }}
      >
      {_config.toUpperCase()}
      </span>
      </Box> 
      </Flex>
        )
   }  
    </Flex>
    <Box
    p={3}
    width={[1]}
    >
    </Box>
    <Flex
    width={[1]}
    >
      <Items
      configType={config}
      />
    </Flex>
    </Flex>
}



const IndexPage = () => {
  return <Layout>
    <SEO title="react spring" />
    <Box>
      <h1>Spring physics based animations</h1>
      </Box>
    <Reactions/>
  </Layout>
}

export default IndexPage