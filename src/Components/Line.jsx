import Result from "./Result";

const Line = (props) => {
  const { value, data } = props;
  return (
    <div className="allResults">
      {data.map((emoji, index) => {
        if (value === "" && index < 20) {
          console.log(index);
          return (
            <Result
              key={emoji.title}
              title={emoji.title}
              symbol={emoji.symbol}
            />
          );
        } else if (emoji.keywords.includes(value) !== false) {
          return (
            <Result
              key={emoji.title}
              title={emoji.title}
              symbol={emoji.symbol}
            />
          );
        } else {
          return false;
        }
      })}
    </div>

    // <div>
    //   {data.map((emoji, index) => {
    //     if (value === "" && index === 0) {
    //       return (
    //         <Result
    //           key={emoji.title}
    //           title={emoji.title}
    //           symbol={emoji.symbol}
    //         />
    //       );
    //     } else if (emoji.keywords.includes(value) !== false) {
    //       return (
    //         <Result
    //           key={emoji.title}
    //           title={emoji.title}
    //           symbol={emoji.symbol}
    //         />
    //       );
    //     } else {
    //       return <Result key={emoji.title} title="none" />;
    //     }
    //   })}
    // </div>
  );
};
export default Line;
