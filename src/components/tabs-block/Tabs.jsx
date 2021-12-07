import { useState } from "react";

import { ReactComponent as Home } from "../../icons/home.svg";
import { ReactComponent as Heart } from "../../icons/heart.svg";
import { ReactComponent as Settings } from "../../icons/settings.svg";
import { ReactComponent as Trash } from "../../icons/trash.svg";

import "./tabs.css";

// Import in svg Icons as React Components to be rendered by function depending on Icon name in data
const assignComponent = (icon) => {
  if (icon === "TrashIcon") {
    return <Trash />;
  }
  if (icon === "HeartIcon") {
    return <Heart />;
  }
  if (icon === "SettingsIcon") {
    return <Settings />;
  }
  if (icon === "HomeIcon") {
    return <Home />;
  }
  return null;
};

// Set Whether Tabs' content areas should start closed and be closable
const closableTabs = true;

// Must use this data structure
const tabData = [
  {
    tabTitle: "Home",
    tabContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt accusamus hic rem animi, impedit, consequatur nesciunt dolor voluptates error aliquam minima fugiat tenetur odit atque. Vero asperiores labore dolores id cumque esse placeat dignissimos velit excepturi, sequi, nam, ratione deleniti voluptas et assumenda soluta eligendi! Deserunt a provident at, excepturi unde culpa, repellat porro ea doloremque consequuntur hic adipisci! Adipisci reprehenderit ea vel, fugit perferendis totam nam. Corporis impedit officia fuga id obcaecati doloribus nisi nemo recusandae quis debitis? Totam, aspernatur, deserunt ab ipsa est quaerat mollitia, maxime aut cupiditate necessitatibus soluta ea eius esse dolorum odit. Temporibus, placeat.`,
    icon: "HomeIcon",
  },
  {
    tabTitle: "Favorites",
    tabContent: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, impedit ea dolores sit quod dolore iure nulla. Expedita, molestias rem.`,
    icon: "HeartIcon",
  },
  {
    tabTitle: "Settings",
    tabContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor culpa excepturi hic, magnam ab fugit dolorum in soluta nihil! Quae cumque architecto fugiat. Nulla molestias modi deleniti laborum voluptatem repellendus?`,
    icon: "SettingsIcon",
  },
  {
    tabTitle: "Trash",
    tabContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate dolores distinctio doloribus quo sunt inventore pariatur blanditiis ipsum exercitationem. Dolor omnis quod suscipit vero quaerat iste, voluptatibus neque recusandae incidunt, ad dolore. Dolorum perferendis distinctio consequuntur provident vitae sed autem nemo illum at, cumque culpa amet impedit. Eum sed saepe itaque velit quis veniam quo modi ratione ea accusantium consequuntur, porro quibusdam, repudiandae ipsam ut fugiat nemo voluptas at dignissimos, incidunt blanditiis quas laborum vitae optio? Esse, commodi necessitatibus!`,
    icon: "TrashIcon",
  },
];

const Tabs = () => {
  const [ currentTab, setCurrentTab ] = useState(closableTabs ? null : 0);

  return (
    <div className="tab-wrapper">
      <div className="tabs-container">
        <div
          className={
            currentTab !== null ? (
              "tab-buttons-container tab-buttons-container-open"
            ) : (
              "tab-buttons-container tab-buttons-container-closed"
            )
          }
        >
          {tabData.map((tab, index) => {
            return (
              <div
                key={index}
                className={
                  currentTab !== null && index === tabData.length - 1 ? (
                    "tab-button last-tab-open"
                  ) : (
                    "tab-button"
                  )
                }
                onClick={() =>
                  closableTabs && currentTab === index
                    ? setCurrentTab(null)
                    : setCurrentTab(index)}
              >
                <div className="tab-text-wrapper">
                  <div className="tab-svg-wrapper">{assignComponent(tab.icon)}</div>
                  <h3>{tab.tabTitle}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={
            currentTab !== null ? (
              "tab-content-container tab-content-container-open"
            ) : (
              "tab-content-container"
            )
          }
        >
          {tabData.map((tab, index) => {
            return (
              <div
                key={index}
                className={
                  currentTab === index ? "tab-content" : "tab-content tab-hidden"
                }
              >
                <p>{tab.tabContent}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
