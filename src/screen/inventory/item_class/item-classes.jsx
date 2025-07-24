import React, { useState } from "react";
import Header from "../../../components/header";
import ItemClassList from "../../../components/config/item-c;lass-list";
import { DUMMY_ITEM_CLASSES } from "../../../components/config/config";

const ItemClassesPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemList, setItemList] = useState(DUMMY_ITEM_CLASSES);

  const handleSave = () => {
    if (!selectedItem?.classID || !selectedItem?.description) {
      alert("Class ID and Description are required");
      return;
    }

    setItemList((prev) => {
      const index = prev.findIndex(
        (item) => item.classID === selectedItem.classID
      );
      if (index !== -1) {
        // Update existing
        const updatedList = [...prev];
        updatedList[index] = selectedItem;
        return updatedList;
      } else {
        // Add new
        return [...prev, selectedItem];
      }
    });
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const handleAddNew = () => {
    // Clear everything to prepare a blank form
    setSelectedItem({
      classID: "",
      description: "",
      itemType: "",
      valuationMethod: "",
      planningMethod: "",
      taxCategory: "",
      postingClass: "",
      stockItem: false,
      allowNegativeQty: false,
      lotSerialClass: "",
      priceClass: "",
      defaultWarehouse: "",
      baseUnit: "",
      salesUnit: "",
      purchaseUnit: "",
    });
  };

  return (
    <div className="bg-slate-50 h-screen  flex flex-col">
      <Header />
      <div className="  overflow-y-auto   ">
        {/* header */}
        <div className=" flex-1  ">
          <div className="flex-grow flex p-4 space-x-4 ">
            <ItemClassList
              items={itemList}
              onSelect={handleSelect}
              onAddNew={handleAddNew}
              onSave={handleSave}
              selectedItem={selectedItem}
            />
            <div className="w-3/4 bg-white rounded-lg shadow p-6 flex flex-col space-y-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex items-center">
                  <label
                    className="text-sm font-medium text-gray-700 w-1/3"
                    htmlFor="class-id"
                  >
                    Class ID:
                  </label>
                  <div className="relative w-2/3">
                    <input
                      id="class-id"
                      type="text"
                      name="classID"
                      value={selectedItem?.classID || ""}
                      onChange={(e) =>
                        setSelectedItem({
                          ...selectedItem,
                          classID: e.target.value,
                        })
                      }
                      className="border px-2 py-1 w-full rounded"
                    />
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                      <span className="material-icons text-lg">search</span>
                    </span>
                  </div>
                </div>
                <div></div>
                <div className="flex items-center">
                  <label
                    className="text-sm font-medium text-gray-700 w-1/3"
                    htmlFor="description"
                  >
                    Description:
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={selectedItem?.description || ""}
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectedItem,
                        description: e.target.value,
                      })
                    }
                    className="border px-2 py-1 w-full rounded"
                  />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-x-12">
                <div class="space-y-4">
                  <h3 class="text-sm font-medium text-sky-600 uppercase tracking-wider">
                    General Settings
                  </h3>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="item-type"
                    >
                      Item Type:
                    </label>
                    <select
                      class="border-gray-300 rounded-md p-2 w-3/5 text-sm focus:ring-sky-500 focus:border-sky-500"
                      id="item-type"
                      value={selectedItem?.itemType || ""}
                      onChange={(e) =>
                        setSelectedItem({
                          ...selectedItem,
                          itemType: e.target.value,
                        })
                      }
                    >
                      <option>-</option>
                    </select>
                  </div>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="valuation-method"
                    >
                      Valuation Method:
                    </label>
                    <select
                      class="border-gray-300 rounded-md p-2 w-3/5 text-sm focus:ring-sky-500 focus:border-sky-500"
                      id="valuation-method"
                      value={selectedItem?.valuationMethod || ""}
                    >
                      <option>Standard</option>
                    </select>
                  </div>
                  {selectedItem?.stockItem && (
                    <div className="flex items-center">
                      <label
                        className="text-sm font-medium text-gray-700 w-1/3"
                        htmlFor="planning-method"
                      >
                        Planning Method:
                      </label>
                      <input
                        id="planning-method"
                        type="text"
                        value={selectedItem?.planningMethod || ""}
                        readOnly
                        className="border-gray-300 rounded-md p-2 w-2/3 text-sm focus:ring-sky-500 focus:border-sky-500 bg-gray-50"
                      />
                    </div>
                  )}
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="tax-category"
                    >
                      Tax Category:
                    </label>
                    <div class="relative w-3/5">
                      <input
                        class="border-gray-300 rounded-md p-2 w-full text-sm focus:ring-sky-500 focus:border-sky-500"
                        id="tax-category"
                        type="text"
                        value={selectedItem?.taxCategory || ""}
                        onChange={(e) =>
                          setSelectedItem({
                            ...selectedItem,
                            taxCategory: e.target.value,
                          })
                        }
                      />
                      <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                        <span class="material-icons text-lg">search</span>
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="posting-class"
                    >
                      Posting Class:
                    </label>
                    <div class="relative w-3/5">
                      <input
                        class="border-gray-300 rounded-md p-2 w-full text-sm focus:ring-sky-500 focus:border-sky-500"
                        id="posting-class"
                        type="text"
                        value={selectedItem?.postingClass || ""}
                        onChange={(e) =>
                          setSelectedItem({
                            ...selectedItem,
                            postingClass: e.target.value,
                          })
                        }
                      />
                      <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                        <span class="material-icons text-lg">search</span>
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="post-cost-to-expenses"
                    >
                      Post Cost to Expenses:
                    </label>
                    <select
                      class="border-gray-300 rounded-md p-2 w-3/5 text-sm focus:ring-sky-500 focus:border-sky-500"
                      id="post-cost-to-expenses"
                      value={selectedItem?.postCostToExpenses || ""}
                      onChange={(e) =>
                        setSelectedItem({
                          ...selectedItem,
                          postCostToExpenses: e.target.value,
                        })
                      }
                    >
                      <option>Purchases</option>
                    </select>
                  </div>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="lot-serial-class"
                    >
                      Lot/Serial Class:
                    </label>
                    <div class="relative w-3/5">
                      <input
                        class="border-gray-300 rounded-md p-2 w-full text-sm focus:ring-sky-500 focus:border-sky-500"
                        id="lot-serial-class"
                        type="text"
                        value={selectedItem?.lotSerialClass || ""}
                        onChange={(e) =>
                          setSelectedItem({
                            ...selectedItem,
                            lotSerialClass: e.target.value,
                          })
                        }
                      />
                      <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                        <span class="material-icons text-lg">tune</span>
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="price-class"
                    >
                      Price Class:
                    </label>
                    <div class="relative w-3/5">
                      <input
                        class="border-gray-300 rounded-md p-2 w-full text-sm focus:ring-sky-500 focus:border-sky-500"
                        id="price-class"
                        type="text"
                      />
                      <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                        <span class="material-icons text-lg">search</span>
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="default-warehouse"
                    >
                      Default Warehouse:
                    </label>
                    <div class="relative w-3/5">
                      <input
                        class="border-gray-300 rounded-md p-2 w-full text-sm focus:ring-sky-500 focus:border-sky-500"
                        id="default-warehouse"
                        type="text"
                      />
                      <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                        <span class="material-icons text-lg">search</span>
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="availability-calculation"
                    >
                      Availability Calculation ...:
                    </label>
                    <select
                      class="border-gray-300 rounded-md p-2 w-3/5 text-sm focus:ring-sky-500 focus:border-sky-500"
                      id="availability-calculation"
                      value={selectedItem?.availabilityCalculation || ""}
                      onChange={(e) =>
                        setSelectedItem({
                          ...selectedItem,
                          availabilityCalculation: e.target.value,
                        })
                      }
                    >
                      <option>On Hand</option>
                      <option>Projected</option>
                    </select>
                  </div>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="country-of-origin"
                    >
                      Country of Origin:
                    </label>
                    <div class="relative w-3/5">
                      <input
                        class="border-gray-300 rounded-md p-2 w-full text-sm focus:ring-sky-500 focus:border-sky-500"
                        id="country-of-origin"
                        type="text"
                        value={selectedItem?.countryOrigin || ""}
                        onChange={(e) =>
                          setSelectedItem({
                            ...selectedItem,
                            countryOrigin: e.target.value,
                          })
                        }
                      />
                      <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                        <span class="material-icons text-lg">search</span>
                      </span>
                    </div>
                  </div>
                  <h3 class="text-sm font-medium text-sky-600 uppercase tracking-wider pt-4">
                    Shipping Thresholds
                  </h3>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="undership-threshold"
                    >
                      Undership Threshold (%):
                    </label>
                    <input
                      class="border-gray-300 rounded-md p-2 w-3/5 text-sm text-right focus:ring-sky-500 focus:border-sky-500"
                      id="undership-threshold"
                      type="text"
                      value={selectedItem?.undershiThreshold || "0.00"}
                      onChange={(e) =>
                        setSelectedItem({
                          ...selectedItem,
                          undershiThreshold: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="overship-threshold"
                    >
                      Overship Threshold (%):
                    </label>
                    <input
                      class="border-gray-300 rounded-md p-2 w-3/5 text-sm text-right focus:ring-sky-500 focus:border-sky-500"
                      id="overship-threshold"
                      type="text"
                      value={selectedItem?.overshipThreshold || "0.00"}
                      onChange={(e) =>
                        setSelectedItem({
                          ...selectedItem,
                          overshipThreshold: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div class="space-y-4">
                  <div class="flex items-start pt-6 space-x-8">
                    <div class="space-y-2">
                      <div class="flex items-center">
                        <input
                          class="h-4 w-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                          id="stock-item"
                          type="checkbox"
                          checked={selectedItem?.stockItem || false}
                          onChange={(e) =>
                            setSelectedItem({
                              ...selectedItem,
                              stockItem: e.target.checked,
                            })
                          }
                        />
                        <label
                          class="ml-2 block text-sm text-gray-700"
                          for="stock-item"
                        >
                          Stock Item
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          class="h-4 w-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                          id="allow-negative-qty"
                          type="checkbox"
                          checked={selectedItem?.allowNegativeQty || false}
                          onChange={(e) =>
                            setSelectedItem({
                              ...selectedItem,
                              allowNegativeQty: e.target.checked,
                            })
                          }
                        />
                        <label
                          class="ml-2 block text-sm text-gray-700"
                          for="allow-negative-qty"
                        >
                          Allow Negative Quantity
                        </label>
                      </div>
                    </div>
                  </div>
                  <h3 class="text-sm font-medium text-sky-600 uppercase tracking-wider pt-5">
                    Unit of Measure
                  </h3>
                  <div class="space-y-3">
                    <div class="flex items-center">
                      <label class="text-sm font-medium text-gray-700 w-1/4">
                        * Base Unit
                      </label>
                      <div class="relative w-1/2">
                        <input
                          class="border-gray-300 rounded-md p-2 w-full text-sm focus:ring-sky-500 focus:border-sky-500"
                          type="text"
                          value={selectedItem?.baseUnit || ""}
                          onChange={(e) =>
                            setSelectedItem({
                              ...selectedItem,
                              baseUnit: e.target.value,
                            })
                          }
                        />
                        <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                          <span class="material-icons text-lg">search</span>
                        </span>
                      </div>
                      <div class="w-1/4 flex items-center justify-end pl-2">
                        <input
                          checked=""
                          class="h-4 w-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                          id="divisible-unit-1"
                          type="checkbox"
                        />
                        <label
                          class="ml-2 block text-sm text-gray-700"
                          for="divisible-unit-1"
                        >
                          Divisible Unit
                        </label>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <label class="text-sm font-medium text-gray-700 w-1/4">
                        * Sales Unit
                      </label>
                      <div class="relative w-1/2">
                        <input
                          class="border-gray-300 rounded-md p-2 w-full text-sm focus:ring-sky-500 focus:border-sky-500"
                          type="text"
                          value={selectedItem?.salesUnit || ""}
                          onChange={(e) =>
                            setSelectedItem({
                              ...selectedItem,
                              salesUnit: e.target.value,
                            })
                          }
                        />
                        <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                          <span class="material-icons text-lg">search</span>
                        </span>
                      </div>
                      <div class="w-1/4 flex items-center justify-end pl-2">
                        <input
                          checked=""
                          class="h-4 w-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                          id="divisible-unit-2"
                          type="checkbox"
                        />
                        <label
                          class="ml-2 block text-sm text-gray-700"
                          for="divisible-unit-2"
                        >
                          Divisible Unit
                        </label>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <label class="text-sm font-medium text-gray-700 w-1/4">
                        * Purchase Unit
                      </label>
                      <div class="relative w-1/2">
                        <input
                          class="border-gray-300 rounded-md p-2 w-full text-sm focus:ring-sky-500 focus:border-sky-500"
                          type="text"
                          value={selectedItem?.purchaseUnit || ""}
                          onChange={(e) =>
                            setSelectedItem({
                              ...selectedItem,
                              purchaseUnit: e.target.value,
                            })
                          }
                        />
                        <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                          <span class="material-icons text-lg">search</span>
                        </span>
                      </div>
                      <div class="w-1/4 flex items-center justify-end pl-2">
                        <input
                          checked=""
                          class="h-4 w-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                          id="divisible-unit-3"
                          type="checkbox"
                        />
                        <label
                          class="ml-2 block text-sm text-gray-700"
                          for="divisible-unit-3"
                        >
                          Divisible Unit
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2 pt-2">
                    <button class="p-1.5 bg-gray-200 hover:bg-gray-300 rounded text-gray-600">
                      <span class="material-icons text-lg">add</span>
                    </button>
                    <button class="p-1.5 bg-gray-200 hover:bg-gray-300 rounded text-gray-600">
                      <span class="material-icons text-lg">remove</span>
                    </button>
                    <button class="p-1.5 bg-gray-200 hover:bg-gray-300 rounded text-gray-600">
                      <span class="material-icons text-lg">edit</span>
                    </button>
                  </div>
                  <div class="grid grid-cols-3 gap-x-2 text-xs text-gray-500 font-medium pt-1">
                    <span>* From Unit</span>
                    <span>Multiply/Divide</span>
                    <span>Conversion To Unit Factor</span>
                  </div>
                  <div class="border rounded-md p-2 h-16 bg-gray-50"></div>
                  <h3 class="text-sm font-medium text-sky-600 uppercase tracking-wider pt-4">
                    Price Management
                  </h3>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="price-workgroup"
                    >
                      Price Workgro...
                    </label>
                    <div class="relative w-3/5">
                      <input
                        class="border-gray-300 rounded-md p-2 w-full text-sm focus:ring-sky-500 focus:border-sky-500"
                        id="price-workgroup"
                        type="text"
                      />
                      <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                        <span class="material-icons text-lg">search</span>
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="price-manager"
                    >
                      Price Manager:
                    </label>
                    <div class="relative w-3/5">
                      <input
                        class="border-gray-300 rounded-md p-2 w-full text-sm focus:ring-sky-500 focus:border-sky-500"
                        id="price-manager"
                        type="text"
                      />
                      <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                        <span class="material-icons text-lg">search</span>
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="min-markup"
                    >
                      Min. Markup %
                    </label>
                    <input
                      class="border-gray-300 rounded-md p-2 w-3/5 text-sm text-right focus:ring-sky-500 focus:border-sky-500"
                      id="min-markup"
                      type="text"
                      value="0.00"
                    />
                  </div>
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 w-2/5"
                      for="markup"
                    >
                      Markup %
                    </label>
                    <input
                      class="border-gray-300 rounded-md p-2 w-3/5 text-sm text-right focus:ring-sky-500 focus:border-sky-500"
                      id="markup"
                      type="text"
                      value="0.000000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemClassesPage;
