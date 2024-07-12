// src/components/TabContent.tsx
import React, {ReactNode} from 'react';

interface TabContentProps {
    label: string;
    children: ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({children}) => {
    return (
        <div className="tab-content">
            {children}
        </div>
    );
};

export default TabContent;
