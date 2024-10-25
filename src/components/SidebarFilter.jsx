import React from 'react';

const SidebarFilter = () => {
  return (
    <div>
      <div className="w-64 p-4 overflow-y-auto  h-[1700px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        {/* Brand Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Brand</h3>
          <input
            type="text"
            placeholder="Search Brand"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="" /> APPARIS (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Badgley Mischka (1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Barefoot Dreams (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> BULA (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Carve Designs (1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Dakine(1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Eileen Fisher (1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Hot Chillys(1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Barefoot Dreams (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> HUE(1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Lauren Ralph Lauren (7)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Lilly Pulitzer(2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" />Madewell(4)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Obermeyer(7)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" />Patricia Nash(2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" />Pendleton(4)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" />Roxy(7)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" />San Diego(2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" />Madewell(4)
              </label>
            </li>
          </ul>
        </div>

        {/* Color Filter */}
        <div>
          <h3 className="text-lg font-bold mb-2">Color</h3>
          <input
            type="text"
            placeholder="Search Color"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="" /> Black (14)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Multi (5)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Beige (4)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> White(4)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Blue (3)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Brown (3)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Gray (3)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Multi (5)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Red (3)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Bone (3)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Navy (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Orange (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" />Pink(2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" />Taupe(2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Burgundy(1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Green (1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Pewter(1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Purple(1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Silver(1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Bone (3)
              </label>
            </li>
          </ul>
        </div>

        {/* Subcategory Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Subcategory</h3>
          <input
            type="text"
            placeholder="Search Brand"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="" /> Oblong Scarves(16)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Wraps (15)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Neck Gaiters (12)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Square Scarves (5)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Infinty Scarves (4)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Scarves Sets (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Bandanas and (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Neckerchiefs(2)
              </label>
            </li>

          </ul>
        </div>


        {/* Sale Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Sale</h3>
          <input
            type="text"
            placeholder="Search Brand"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="" /> On Sale  (30)
              </label>
            </li>

          </ul>
        </div>


        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Price</h3>
          <input
            type="text"
            placeholder="Search Brand"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="" /> $50.00 and Under (29)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> $100.00 and Under(47)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> $200.00 and Under (54)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" />$200.00 and Over (1)
              </label>
            </li>


          </ul>
        </div>


        {/* Materials Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Materials</h3>
          <input
            type="text"
            placeholder="Search Brand"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="" /> Silk (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Cashmere (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Cotton (3)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Wool(15)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Polyester (27)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Acrylic  (15)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Nylon (8)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Spandex (6)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Faux Fur (4)
              </label>
            </li>
          </ul>
        </div>


        {/* Occasion Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Occasion</h3>
          <input
            type="text"
            placeholder="Search Brand"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="" /> Casual (53)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Outdoor (10)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Dress (1)
              </label>
            </li>

          </ul>
        </div>

        {/* Pattern Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Pattern</h3>
          <input
            type="text"
            placeholder="Search Brand"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="" /> APPARIS (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Barefoot Dreams (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> BULA (1)
              </label>
            </li>
          </ul>
        </div>

        {/* Theme Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Theme</h3>
          <input
            type="text"
            placeholder="Search Brand"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="" /> APPARIS (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Barefoot Dreams (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> BULA (1)
              </label>
            </li>
          </ul>
        </div>


      </div>



      
      {/* additional component */}

      <aside className="w-64  overflow-y-auto h-[1000px] bg-gray-100 p-4  scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300" >
        {/* Materials Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Materials</h3>
          <input
            type="text"
            placeholder="Search Brand"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="" /> Silk (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Cashmere (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Cotton (3)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Wool(15)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Polyester (27)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Acrylic  (15)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Nylon (8)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Spandex (6)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Faux Fur (4)
              </label>
            </li>
          </ul>
        </div>

        {/* Theme Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Theme</h3>
          <input
            type="text"
            placeholder="Search Brand"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="" /> APPARIS (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Barefoot Dreams (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> BULA (1)
              </label>
            </li>
          </ul>
        </div>


        {/* Color Filter */}
        <div>
          <h3 className="text-lg font-bold mb-2">Color</h3>
          <input
            type="text"
            placeholder="Search Color"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="" /> Black (14)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Multi (5)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Beige (4)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> White(4)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Blue (3)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Brown (3)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Gray (3)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Multi (5)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Red (3)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Bone (3)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Navy (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Orange (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" />Pink(2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" />Taupe(2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Burgundy(1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Green (1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Pewter(1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Purple(1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Silver(1)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Bone (3)
              </label>
            </li>
          </ul>
        </div>

        {/* Occasion Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Occasion</h3>
          <input
            type="text"
            placeholder="Search Brand"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <ul className="space-y-2">
            <li>
              <label>
                <input type="checkbox" className="" /> Casual (53)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Outdoor (10)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" className="" /> Dress (1)
              </label>
            </li>

          </ul>
        </div>

        

      </aside>

      
    </div>
  );
};

export default SidebarFilter;
