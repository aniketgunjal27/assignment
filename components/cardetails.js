const cardata = (props) => {

    return (
      <div>
        My name is
      </div>
    )
  
  }
  
  
  export async function getStaticProps() { 
    return {
      props: { mydata: { name: 'Prashant'} } 
    }
  }
  
  export default cardata;
  
  
  