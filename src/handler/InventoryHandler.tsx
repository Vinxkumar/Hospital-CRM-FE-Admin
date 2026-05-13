import api from "../Axios/Api";
import {useEffect, useState} from "react";
import type {Inventory} from "../types/Inventory";

const InventoryHandler = () => {
    const [inventory, setInventory] = useState<Inventory[]>([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found. Please log in.");
            return;
        }
        const fetchInventory = async () => {
            try {
                const response = await api.get('/admin/inventory', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setInventory(response.data);
            } catch (error) {
                console.error('Error fetching inventory:', error);
            }
        };
        fetchInventory();
    }, []);

    return(
        <>
        <div className="overflow-x-auto rounded-xl bg-zinc-800 p-2">
      <table className="w-full text-sm text-white">
        <thead>
          <tr className="border-b border-zinc-600 text-zinc-400">
            <th className="py-2 text-left">Id</th>
            <th className="py-2 text-left">Name</th>
            <th className="py-2 text-left">In Stock</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr
              key={item.id}
              className="border-b border-zinc-700 hover:bg-zinc-700"
            >
                <td className="py-2 text-zinc-400">
                  {item.id}
                </td>
                <td className="py-2 text-zinc-400">
                  {item.name}
                </td>
                <td className="py-2">{item.inStock}</td>
              </tr>
            ))}

        </tbody>
      </table>

      {inventory.length === 0 && (
        <p className="text-center text-zinc-500 py-4">No inventory items found</p>
      )}
    </div>
        
        </>
    )

}

export default InventoryHandler;
