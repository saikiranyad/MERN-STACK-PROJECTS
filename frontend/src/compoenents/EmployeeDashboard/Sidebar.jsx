// import { useState } from "react";
// import { Home, ShoppingBag, Package, BarChart2, AlertCircle, User } from "lucide-react";
// import Employeeprofile from "./Employeeprofile";
// import Productadded from "./Productadded";
// import Orderstatus from "./Orderstatus";
// import Outofstock from "./Outofstock";

// const SellerDashboard = () => {
//     const [activeSection, setActiveSection] = useState("Profile");

//     const sections = [
//         { name: "Profile", icon: <User /> },
//         { name: "Products Added", icon: <ShoppingBag /> },
//         // { name: "Order Status", icon: <Package /> },
        
//         // { name: "Out of Stock", icon: <AlertCircle /> },
//     ];

//     const renderContent = () => {
//         switch (activeSection) {
//             case "Profile":
//                 return <div>
//                     👤 Seller Profile Information
//                     <Employeeprofile />
//                 </div>;
//             case "Products Added":
//                 return <div>
//                     🛍️ List of Products Added
//                     <Productadded/>
//                     </div>;
//             case "Order Status":
//                 return <div>📦
//                     {/* <Orderstatus/> */}
//                 </div>;
            
//             case "Out of Stock":
//                 return <div>⚠️ 
//                     {/* <Outofstock/> */}
//                 </div>;
//             default:
//                 return <div>Welcome to Seller Dashboard!</div>;
//         }
//     };

//     return (
//         <div className="flex h-screen">
//             <aside className="w-1/4 bg-gray-900 text-white p-6">
//                 <h2 className="text-xl font-bold mb-8">🛍️ Seller Dashboard</h2>
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

// export default SellerDashboard;
import { useState } from "react";
import {
  ShoppingBag,
  User,
  Menu,
  X,
} from "lucide-react";
import Employeeprofile from "./Employeeprofile";
import Productadded from "./Productadded";

const SellerDashboard = () => {
  const [activeSection, setActiveSection] = useState("Profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = [
    { name: "Profile", icon: <User size={20} /> },
    { name: "Products Added", icon: <ShoppingBag size={20} /> },
    // You can uncomment these when needed:
    // { name: "Order Status", icon: <Package size={20} /> },
    // { name: "Out of Stock", icon: <AlertCircle size={20} /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "Profile":
        return (
          <div>
            👤 Seller Profile Information
            <Employeeprofile />
          </div>
        );
      case "Products Added":
        return (
          <div>
            🛍️ List of Products Added
            <Productadded />
          </div>
        );
      default:
        return <div>Welcome to Seller Dashboard!</div>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between bg-gray-900 text-white px-4 py-3">
        <h2 className="text-lg font-bold">🛍️ Seller Dashboard</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white w-full md:w-1/4 p-4 space-y-2 transition-all duration-300 z-10 md:static absolute ${
          sidebarOpen ? "block" : "hidden md:block"
        }`}
      >
        <h2 className="text-xl font-bold mb-6 hidden md:block">
          🛍️ Seller Dashboard
        </h2>
        {sections.map((section) => (
          <button
            key={section.name}
            onClick={() => {
              setActiveSection(section.name);
              setSidebarOpen(false);
            }}
            className={`flex items-center gap-3 py-2 px-4 w-full rounded-lg text-left transition hover:bg-gray-700 ${
              activeSection === section.name ? "bg-gray-700" : ""
            }`}
          >
            {section.icon}
            <span className="text-sm sm:text-base">{section.name}</span>
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-4 sm:p-8 overflow-y-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
          {activeSection}
        </h2>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default SellerDashboard;
