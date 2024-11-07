import { useState } from "react";
import { TabsBtn } from "./TabsBtn";
import "./tabStyle.css";

export const Tabbings = () => {
    // Initialize the first tab as selected
    const [currentTab, setCurrentTab] = useState("tab1");

    // Function to select a tab
    const selectTab = (target) => {
        setCurrentTab(target);
    };

    // Function to render tab content based on the selected tab
    const renderTabContent = () => {
        switch (currentTab) {
            case "tab1":
                return (
                    <div className="tabContent">
                        <h3>Tab 1 Content</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsam aliquid nihil repellendus, possimus quibusdam architecto nostrum eum, tempore ipsa ad accusamus sunt commodi veniam.</p>
                    </div>
                );
            case "tab2":
                return (
                    <div className="tabContent">
                        <h3>Tab 2 Content</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                    </div>
                );
            case "tab3":
                return (
                    <div className="tabContent">
                        <h3>Tab 3 Content</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <ul className="tabListRow">
                <TabsBtn onSelect={() => selectTab("tab1")} isActive={currentTab === "tab1"}>Tab 1</TabsBtn>
                <TabsBtn onSelect={() => selectTab("tab2")} isActive={currentTab === "tab2"}>Tab 2</TabsBtn>
                <TabsBtn onSelect={() => selectTab("tab3")} isActive={currentTab === "tab3"}>Tab 3</TabsBtn>
            </ul>
            
            {/* Conditionally render the tab content based on the selected tab */}
            {renderTabContent()}
        </>
    );
};
