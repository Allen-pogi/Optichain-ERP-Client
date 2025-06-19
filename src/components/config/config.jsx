import React from "react";
//Endpoints for API calls
export const API_BASE_URL = "http://localhost:5001/api";

//sidebar
export const sidebarItems = [
  {
    label: "Dashboard",
    to: "/home/dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
      </svg>
    ),
  },
  {
    label: "Sales",
    to: "/home/sales",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path>
      </svg>
    ),
  },
  {
    label: "Inventory",
    to: "/home/inventory",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path>
      </svg>
    ),
  },
  {
    label: "Purchases",
    to: "/home/request",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
      </svg>
    ),
  },
  {
    label: "Reports",
    to: "/home/reports",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
      </svg>
    ),
  },
  {
    label: "Settings",
    to: "/home/settings",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
      </svg>
    ),
  },

  {
    label: "Log Out",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
      </svg>
    ),
  },
];

export const DUMMY_ITEMS = [
  {
    inventory: "Item001232323",
    itemclass: "MHE-SPR-LND asasdasd",
    subitem: "A1",
    itemstatus: "Active",
    type: "Finishe Goods",
    baseunit: "PIECE",
    salesunit: "PIECE",
    purchaseunit: "PIECE",
    defaultprice: 20,
    description: "Paper A4 axsasaassaasdassdasdasdadssdasadasdsasadsadsda",
    uom: "Ream",
    orderQty: 1,
    unitCost: 100,
    extVendorCost: 100,
    vendor: "",
    location: "",
    vendorName: "",
    vendorRef: "",
    vendorDescription: "",
    alternateID: "",
    requiredDate: "2025-06-11",
    promisedDate: "2025-06-11",
    issueStatus: "Open",
  },

  {
    inventory: "Item002",
    itemclass: "MHE-SPR-LND",
    subitem: "B2",
    itemstatus: "Active",
    type: "Finishe Goods",
    baseunit: "PIECE",
    salesunit: "PIECE",
    purchaseunit: "PIECE",
    defaultprice: 0,
    description: "Pen Blue",
    uom: "Box",
    orderQty: 2,
    unitCost: 50,
    extVendorCost: 1200,
    location: "",
    vendor: "",
  },
  {
    inventory: "Item003",
    itemclass: "MHE-SPR-LND",
    subitem: "C3",
    itemstatus: "Active",
    type: "Finishe Goods",
    baseunit: "PIECE",
    salesunit: "PIECE",
    purchaseunit: "PIECE",
    defaultprice: 0,
    description: "Notebook",
    uom: "Piece",
    orderQty: 5,
    unitCost: 20,
    extVendorCost: 1300,
    location: "",
    vendor: "",
  },
  {
    inventory: "Item004",
    itemclass: "MHE-SPR-LND",
    subitem: "C3",
    itemstatus: "Active",
    type: "Finishe Goods",
    baseunit: "PIECE",
    salesunit: "PIECE",
    purchaseunit: "PIECE",
    defaultprice: 0,
    description: "Notebook",
    uom: "Piece",
    orderQty: 5,
    unitCost: 20,
    extVendorCost: 300,
    location: "",
    vendor: "",
  },
];

export const requests = [
  {
    ref: "RS1",
    status: "Open",
    priority: "High",
    date: "6/11/2025",
    requestClass: "RNTLPRTSRQ",
    requestedBy: "BA00000258",
    location: "MAIN",
    department: "MHESER",
    description: "Purchase of Linde for Royal Cargo ADY6113 SN: 20240409V154",
    extCost: "0.00",
    icon: "description",
    statusIcon: "chevron_right",
    notes: true,
    items: [
      {
        inventory: "Item001232323323",
        itemclass: "MHE-SPR-LND edited",
        subitem: "A1",
        itemstatus: "Active",
        type: "Finished Goods",
        baseunit: "PIECE",
        salesunit: "PIECE",
        purchaseunit: "PIECE",
        defaultprice: 25,
        description: "Paper A4 (edited)",
        uom: "Ream",
        orderQty: 2,
        unitCost: 105,
        extVendorCost: 210,
        vendor: "VEND001",
        location: "WH1",
        vendorName: "VendorCorp",
        vendorRef: "VC001",
        vendorDescription: "Bulk paper supply",
        alternateID: "ALT-PAPER-001",
        requiredDate: "2025-06-15",
        promisedDate: "2025-06-20",
        issueStatus: "Open",
      },
      {
        inventory: "Item002",
        itemclass: "MHE-SPR-LND",
        subitem: "B2",
        itemstatus: "Active",
        type: "Finished Goods",
        baseunit: "PIECE",
        salesunit: "PIECE",
        purchaseunit: "PIECE",
        defaultprice: 10,
        description: "Pen Blue (edited)",
        uom: "Box",
        orderQty: 3,
        unitCost: 40,
        extVendorCost: 120,
        vendor: "VEND002",
        location: "WH2",
        vendorName: "InkExpress",
        vendorRef: "INK001",
        vendorDescription: "Office pens",
        alternateID: "ALT-PEN-002",
        requiredDate: "2025-06-16",
        promisedDate: "2025-06-21",
        issueStatus: "Open",
      },
    ],
  },

  // You can keep the rest of your request objects the same or add `items` to any of them as needed.
];
