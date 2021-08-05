export default function Footer(props){
    return(
        // props add dynamic value 
        <footer className="flex text-2xl bg-green my-4 text-center text-gray">
        <h4>{props.numOfLocation} Location World Wide</h4>
        

      </footer>
    );
  }