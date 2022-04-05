import React from "react";
//Give a info about file path in react js-https://medium.com/@Linda_Ikechukwu/understanding-file-paths-165c07ec5cf0
// import { UserContext } from "C:/Users/prajw/Desktop/codeevolution React/hooks/src/App.js";
// import { UserContext } from "../../App.js";
import { UserContext, ChannalContext, NameContext } from "../../App.js"; //it represent two directories backward
function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {/* we get the value from app component direct hear */}
        {(user) => {
          return (
            <ChannalContext.Consumer>
              {(channal) => {
                return (
                  <NameContext.Consumer>
                    {(name) => {
                      return (
                        <div>
                          {user}---
                          {channal}--
                          {name}
                        </div>
                      );
                    }}
                  </NameContext.Consumer>
                );
              }}
            </ChannalContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
