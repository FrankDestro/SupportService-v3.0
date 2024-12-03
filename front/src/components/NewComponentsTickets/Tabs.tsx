// src/components/Tabs.tsx
import React, { useState, ReactNode } from 'react';

interface TabProps {
    label: string;
    children: ReactNode;
}

interface TabsProps {
    children: React.ReactElement<TabProps>[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div className="tabs">
                {children.map((child, index) => (
                    <button
                        key={index}
                        className={`tab ${index === activeTab ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>
            <div className="tab-content-wrapper">
                {children[activeTab]}
            </div>
        </div>
    );
};

export default Tabs;
