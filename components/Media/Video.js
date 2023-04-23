import { useState, useEffect, useRef } from "react";

const Video = ({ src, className }) => {
  const [loading, setLoading] = useState(true);
  const ref = useRef();

  // useEffect(() => {
  //   console.log(ref);
  //   if (ref.current?.complete) {
  //     setLoading(false);
  //     console.log(ref);
  //   }
  // });

  return (
    <iframe
      ref={ref}
      src={src}
      onLoad={() => {
        setLoading(false);
      }}
      className={`${className} ${
        loading ? "opacity-0" : "opacity-100"
      } transition duration-[0.5s]`}
      allowFullScreen
      frameBorder="0"
    ></iframe>
  );
};

export default Video;

// class Rsvp extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         loading: true
//       };
//     }
//   hideSpinner = () => {
//       this.setState({
//         loading: false
//       });
//     };
//   render() {
//       return (
//         <div className="container rsvp-wrapper">
//           {this.state.loading ? (
//             <Spinner
//               className="loading text-center"
//               name="three-bounce"
//               color="white"
//               fadeIn="none"
//             />
//           ) : null}
//           <iframe
//             src="..."
//             width="100%"
//             height="700"
//             onLoad={this.hideSpinner}
//             frameBorder="0"
//             marginHeight="0"
//             marginWidth="0"
//           />
//         </div>
//       );
//     }
//   }
