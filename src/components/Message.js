import { useEffect, useState} from 'react';

function Message({ size }) {
  const [classSize, setClassSize] = useState('')

  useEffect(() => {
    console.log('Message size', size);
    let cname = "";
    switch (size){
      case 'm':
        cname = "medium";
        break;
      case 'l':
        cname = "large";
        break;
      case 'xl':
        cname = "xlarge";
        break;
      default:
        cname = "small";
        break;
    }
    setClassSize(cname);
  }, [size]);



  return (
    <div className={`message ${classSize}`}>
      (Oh my! Your bird is naked!)
    </div>
  );
};

export default Message;