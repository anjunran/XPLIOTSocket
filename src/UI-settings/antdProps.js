import React from "react";

const keylist = ["Chat", "SocialMedia", "Live"];
export const menuConfig = (Icon, keyId) => {
  const isLive = keylist[keyId] !== "Live";
  try {
    if (void 0 !== Icon && void 0 !== keyId)
      return {
        itemC: {
          icon: (
            <Icon
              style={{
                color: `${isLive ? "whitesmoke" : "grey"}`,
                margin: "0 .3vw",
                textAlign: "center",
                fontSize: `${isLive ? "1.2rem" : ".8rem"}`
              }}
            />
          ),
          get key() {
            return keylist[keyId];
          },
          get title() {
            switch (this.key) {
              case "SocialMedia":
                return "Publications";
              case "Chat":
                return "Messages";
              case "Live":
                return "En Direct";
              default:
                return;
            }
          }
        }
      };
    return {
      menuC: {
        defaultSelectedKeys: keylist[0],
        mode: "horizontal",
        selectable: true,
        selectedKeys: keylist[0],
        style: {
          color: "white",
          listStyleType: "none",
          letterSpacing: "1px",
          margin: "0 .2vw",
          fontWeight: "300",
          fontFamily: "Monda",
          fontSize: "1em",
          cursor: "pointer",
          width: "auto",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          flex: "1 1 40%"
        },
        theme: "dark",
        onClick: function ({ item, key, keyPath, selectedKeys, domEvent }) {
          console.log("SelectedKey: %s", key);
        }
      }
    };
  } catch (error) {
    console.log(error.message);
  }
};
