import { useState } from "react";
import { Home, ShoppingBag, Package, BarChart2, AlertCircle, User } from "lucide-react";


import Approvel from "../compoenets/Approvelemployee";
import ProductApproval from "../compoenets/Productapprovel";


const Sidebar = () => {
    const [activeSection, setActiveSection] = useState("Profile");

    const sections = [
        // { name: "Profile", icon: <User /> },
        { name: "Approvelseller", icon: <ShoppingBag /> },
      
        
        { name: "ProductApprovel", icon: <AlertCircle /> },
    ];

    const renderContent = () => {
        switch (activeSection) {
            // case "Profile":
            //     return <div>
            //         👤  Profile Information
            //         <Profileuser/>
                   
            //     </div>;
            
            case "Approvelseller":
                return <div>📦 Approvelseller
                   
                    <Approvel/>
                 
                    
                </div>;
            
            case "ProductApprovel":
                return <div>📦 ProductApprovel
                   
                    
                    <ProductApproval/>
                    
                </div>;
            default:
                return <div>Welcome to user Dashboard!</div>;
        }
    };

    return (
        <div className="flex h-screen">
            <aside className="w-1/4 bg-gray-900 text-white p-6">
                <h2 className="text-xl font-bold mb-8">🛍️ Admin Dashboard</h2>
                <nav>
                    {sections.map((section) => (
                        <button
                            key={section.name}
                            className={`flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-gray-700 mb-2 w-full text-left ${activeSection === section.name ? "bg-gray-700" : ""
                                }`}
                            onClick={() => setActiveSection(section.name)}
                        >
                            {section.icon}
                            {section.name}
                        </button>
                    ))}
                </nav>
            </aside>

            <main className="flex-1 p-8 bg-gray-100">
                <h2 className="text-3xl font-semibold mb-6">{activeSection}</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">{renderContent()}</div>
            </main>
        </div>
    );
};

export default Sidebar;
