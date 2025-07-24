import React from "react";

const options = ["Posting Class"];
const combineOptions = ["PPP-PPP-PPP-PPP-PPPPPP-PPPI"];
const fields = [
  {
    label: "Use Inventory/Accrual Account from:",
    id: "inventory-account",
    options,
  },
  {
    label: "* Combine Inventory/Accrual Sub. from:",
    id: "combine-inventory",
    options: combineOptions,
  },
  {
    label: "Use Sales Account from:",
    id: "sales-account",
    options,
  },
  {
    label: "* Combine Sales Sub. from:",
    id: "combine-sales",
    options: combineOptions,
  },
  {
    label: "Use COGS/Expense Account from:",
    id: "cogs-account",
    options,
  },
  {
    type: "checkbox",
    label: "Copy COGS Sub. from Sales",
    id: "copy-cogs",
  },
  {
    label: "Combine COGS/Expense Sub. from:",
    id: "combine-cogs",
    options: ["II-II-II-II-II-II-II"],
    disabled: true,
  },
  {
    label: "Use Std. Cost Variance Account from:",
    id: "std-cost-variance",
    options,
  },
  {
    label: "* Combine Std. Cost Variance Sub. from:",
    id: "combine-std-cost-variance",
    options: combineOptions,
    highlight: true,
  },
  {
    label: "Use Std. Cost Revaluation Account from:",
    id: "cost-revaluation",
    options,
  },
  {
    label: "* Combine Std. Cost Revaluation Sub. from:",
    id: "combine-cost-revaluation",
    options: combineOptions,
  },
  {
    label: "Use PO Accrual Account from:",
    id: "po-accrual",
    options,
  },
  {
    label: "* Combine PO Accrual Sub. from:",
    id: "combine-po-accrual",
    options: combineOptions,
  },
  {
    label: "Use Purchase Price Variance Account fr:",
    id: "purchase-price-variance",
    options,
  },
  {
    label: "* Combine Purchase Price Variance Sub. f:",
    id: "combine-purchase-price-variance",
    options: combineOptions,
  },
  {
    label: "Use Landed Cost Variance Account from:",
    id: "landed-cost-variance",
    options,
  },
  {
    label: "* Combine Landed Cost Variance Sub. from:",
    id: "combine-landed-cost-variance",
    options: combineOptions,
  },
];

const General = () => {
  return (
    <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm ">
      {fields.map((field, index) => {
        if (field.type === "checkbox") {
          return (
            <div key={index} className="flex items-center space-x-2">
              <input
                id={field.id}
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={field.id} className="text-gray-600">
                {field.label}
              </label>
            </div>
          );
        }

        return (
          <div key={index} className="grid grid-cols-2 items-center gap-2">
            <label
              htmlFor={field.id}
              className="text-gray-600 justify-self-end"
            >
              {field.label}
            </label>
            <select
              id={field.id}
              className={`w-full rounded-md p-2 ${
                field.highlight
                  ? "border-2 border-blue-500"
                  : "border border-gray-300"
              } ${field.disabled ? "bg-gray-100" : ""}`}
              disabled={field.disabled}
            >
              {field.options.map((option, i) => (
                <option key={i}>{option}</option>
              ))}
            </select>
          </div>
        );
      })}
    </div>
  );
};

export default General;
