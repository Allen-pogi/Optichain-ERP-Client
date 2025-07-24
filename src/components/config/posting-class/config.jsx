export const posting_class_columns = [
  {
    key: "select",
    label: <input type="checkbox" className="w-4 h-4" />,
  },
  { key: "icon", label: "", type: "icon" },
  { key: "classId", label: "Class ID" },
  { key: "description", label: "Description" },
  { key: "inventoryAccount", label: "Inventory/Accrual Account" },
  { key: "salesAccount", label: "Sales Account" },
  { key: "cogsAccount", label: "COGS/Expense Account" },
  { key: "poAccrualAccount", label: "PO Accrual Account" },
  { key: "poDescription", label: "Description" },
  { key: "poSub", label: "PO Accrual Sub." },
];

export const posting_mock_data = [
  {
    classId: "13TH",
    description: "13TH Month",
    inventoryAccount: "1011010000",
    salesAccount: "1011010000",
    cogsAccount: "6210500000",
    poAccrualAccount: "2030200000",
    poDescription: "PO ACCRUAL",
    poSub: "000-000-000-000-",
  },
  // Add more rows here...
];
