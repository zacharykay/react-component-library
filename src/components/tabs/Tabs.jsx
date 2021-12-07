import { useState } from "react";

import TabButton from "./TabButton";
import TabContent from "./TabContent";

import "./tabs.css";

const tabData = [
  {
    tabTitle: "California",
    tabContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt accusamus hic rem animi, impedit, consequatur nesciunt dolor voluptates error aliquam minima fugiat tenetur odit atque. Vero asperiores labore dolores id cumque esse placeat dignissimos velit excepturi, sequi, nam, ratione deleniti voluptas et assumenda soluta eligendi! Deserunt a provident at, excepturi unde culpa, repellat porro ea doloremque consequuntur hic adipisci! Adipisci reprehenderit ea vel, fugit perferendis totam nam. Corporis impedit officia fuga id obcaecati doloribus nisi nemo recusandae quis debitis? Totam, aspernatur, deserunt ab ipsa est quaerat mollitia, maxime aut cupiditate necessitatibus soluta ea eius esse dolorum odit. Temporibus, placeat.`,
  },
  {
    tabTitle: "Oregon",
    tabContent: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, impedit ea dolores sit quod dolore iure nulla. Expedita, molestias rem.`,
  },
  {
    tabTitle: "Washington",
    tabContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor culpa excepturi hic, magnam ab fugit dolorum in soluta nihil! Quae cumque architecto fugiat. Nulla molestias modi deleniti laborum voluptatem repellendus?`,
  },
  {
    tabTitle: "Arizona",
    tabContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate dolores distinctio doloribus quo sunt inventore pariatur blanditiis ipsum exercitationem. Dolor omnis quod suscipit vero quaerat iste, voluptatibus neque recusandae incidunt, ad dolore. Dolorum perferendis distinctio consequuntur provident vitae sed autem nemo illum at, cumque culpa amet impedit. Eum sed saepe itaque velit quis veniam quo modi ratione ea accusantium consequuntur, porro quibusdam, repudiandae ipsam ut fugiat nemo voluptas at dignissimos, incidunt blanditiis quas laborum vitae optio? Esse, commodi necessitatibus!`,
  },
];

const Tabs = () => {
  const [ currentTab, setCurrentTab ] = useState(null);

  const accordion = true;

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
            // <TabButton {...tab}></TabButton>
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
                  currentTab === index ? setCurrentTab(null) : setCurrentTab(index)}
              >
                <h3>{tab.tabTitle}</h3>
                <div
                  className={
                    accordion && currentTab === index ? (
                      "tab-content accordion-content"
                    ) : (
                      "tab-content tab-hidden"
                    )
                  }
                >
                  <p>{tab.tabContent}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="tab-content-container">
          {tabData.map((tab, index) => {
            //  <TabContent {...tab}></TabContent>
            return (
              <div
                key={index}
                className={
                  currentTab !== index && accordion ? (
                    "tab-content tab-hidden"
                  ) : currentTab === index && accordion ? (
                    "tab-content mobile-tab-hidden"
                  ) : currentTab === index && !accordion ? (
                    "tab-content"
                  ) : (
                    "tab-content tab-hidden"
                  )
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
