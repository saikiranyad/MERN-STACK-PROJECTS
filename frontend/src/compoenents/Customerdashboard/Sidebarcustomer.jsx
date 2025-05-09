// import { useState } from "react";
// import { Home, ShoppingBag, Package, BarChart2, AlertCircle, User } from "lucide-react";
// import Savedproducts from "./Savedproducts";
// import Orderstatus from "./Orderstatus";

// import Profileuser from "./Profileuser";
// import Orderhistory from "./Orderhistory";


// const CustomerDashboard = () => {
//     const [activeSection, setActiveSection] = useState("Profile");

//     const sections = [
//         { name: "Profile", icon: <User /> },
//         { name: "Order Histroy", icon: <ShoppingBag /> },
      
        
//         { name: "Savedproducts", icon: <AlertCircle /> },
//     ];

//     const renderContent = () => {
//         switch (activeSection) {
//             case "Profile":
//                 return <div>
//                     👤  Profile Information
//                     <Profileuser/>
                   
//                 </div>;
            
//             case "Order Histroy":
//                 return <div>📦 Order histroy
                   
//                     <Orderhistory/>
                 
                    
//                 </div>;
            
//             case "Savedproducts":
//                 return <div>📦 order status
                   
                    
//                     <Savedproducts/>
                    
//                 </div>;
//             default:
//                 return <div>Welcome to user Dashboard!</div>;
//         }
//     };

//     return (
//         <div className="flex h-screen">
//             <aside className="w-1/4 bg-gray-900 text-white p-6">
//                 <h2 className="text-xl font-bold mb-8">🛍️ Customer Dashboard</h2>
//                 <nav>
//                     {sections.map((section) => (
//                         <button
//                             key={section.name}
//                             className={`flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-gray-700 mb-2 w-full text-left ${activeSection === section.name ? "bg-gray-700" : ""
//                                 }`}
//                             onClick={() => setActiveSection(section.name)}
//                         >
//                             {section.icon}
//                             {section.name}
//                         </button>
//                     ))}
//                 </nav>
//             </aside>

//             <main className="flex-1 p-8 bg-gray-100">
//                 <h2 className="text-3xl font-semibold mb-6">{activeSection}</h2>
//                 <div className="bg-white p-6 rounded-lg shadow-md">{renderContent()}</div>
//             </main>
//         </div>
//     );
// };

// export default CustomerDashboard;
import { useState } from "react";
import {
  Home,
  ShoppingBag,
  AlertCircle,
  User,
  Menu,
  X,
} from "lucide-react";
import Savedproducts from "./Savedproducts";
import Orderhistory from "./Orderhistory";
import Profileuser from "./Profileuser";

const CustomerDashboard = () => {
  const [activeSection, setActiveSection] = useState("Profile");
  const [sidebarOpen, setSidebarOpen] = useState(false); // for mobile

  const sections = [
    { name: "Profile", icon: <User /> },
    { name: "Order Histroy", icon: <ShoppingBag /> },
    { name: "Savedproducts", icon: <AlertCircle /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "Profile":
        return (
          <div>
            👤 Profile Information
            <Profileuser />
          </div>
        );
      case "Order Histroy":
        return (
          <div>
            📦 Order history
            <Orderhistory />
          </div>
        );
      case "Savedproducts":
        return (
          <div>
            💾 Saved Products
            <Savedproducts />
          </div>
        );
      default:
        return <div>Welcome to user Dashboard!</div>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Mobile Topbar */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-900 text-white">
        <h2 className="text-lg font-bold">🛍️ Customer Dashboard</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white p-6 w-full md:w-1/4 md:block ${
          sidebarOpen ? "block" : "hidden"
        } md:relative absolute z-10`}
      >
        <h2 className="text-xl font-bold mb-8 hidden md:block">
          🛍️ Customer Dashboard
        </h2>
        <nav>
          {sections.map((section) => (
            <button
              key={section.name}
              className={`flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-gray-700 mb-2 w-full text-left ${
                activeSection === section.name ? "bg-gray-700" : ""
              }`}
              onClick={() => {
                setActiveSection(section.name);
                setSidebarOpen(false); // Close sidebar on mobile after selection
              }}
            >
              {section.icon}
              {section.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 bg-gray-100 overflow-y-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {activeSection}
        </h2>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default CustomerDashboard;
