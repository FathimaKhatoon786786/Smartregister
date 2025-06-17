// static/script.js

// Global state variables 

let inventory = []; 

let totalProfit = 0; 

let totalLoss = 0; 

let editingItemId = null; // To keep track of the item being edited

// DOM Elements 
// Navigation

const navAddItemBtn = document.getElementById('navAddItem'); 

const navInventoryViewBtn = document.getElementById('navInventoryView'); 

const navStockModificationBtn = document.getElementById('navStockModification');

const navButtons = document.querySelectorAll('.nav-button');

// Screens 

const addItemScreen = document.getElementById('addItemScreen'); 

const inventoryViewScreen = document.getElementById('inventoryViewScreen'); 

const stockModificationScreen = document.getElementById('stockModificationScreen');

// Add Item Screen Elements 

const itemForm = document.getElementById('itemForm'); 

const itemIdInput = document.getElementById('itemId'); 

const itemNameInput = document.getElementById('itemName'); 

const itemQuantityInput = document.getElementById('itemQuantity');

const itemPriceInput = document.getElementById('itemPrice'); // Now "Cost Price" 

const saveItemBtn = document.getElementById('saveItemBtn'); 

const clearFormBtn = document.getElementById('clearFormBtn'); 

// Inventory View Screen Elements 

const totalUniqueItemsDisplay = document.getElementById('totalUniqueItems'); 

const totalQuantityDisplay = document.getElementById('totalQuantity');

const totalValuationDisplay = document.getElementById('totalValuation');

const inventorySearchBar = document.getElementById('inventorySearchBar'); 

const inventoryList = document.getElementById('inventoryList'); 

const noItemsMessage = document.getElementById('noItemsMessage'); 
// Stock Modification Screen Elements

const stockModificationForm = document.getElementById('stockModificationForm');

const modifyItemIdSelect = document.getElementById('modifyItemId'); 

const modifyQuantityInput = document.getElementById('modifyQuantity');

const reasonSaleRadio = document.getElementById('reasonSale'); 

const reasonDamageRadio = document.getElementById('reasonDamage'); 

const salePriceContainer = document.getElementById('salePriceContainer'); 

const salePriceInput = document.getElementById('salePrice'); 

const totalProfitDisplay = document.getElementById('totalProfitDisplay'); 

const totalLossDisplay = document.getElementById('totalLossDisplay'); 

// Global Message Box 

const globalMessageBox = document.getElementById('globalMessageBox'); 

/** 

 * Shows a message in the global message box. 

 * @param {string} message - The message to display. 

 * @param {string} type - 'success', 'error', or 'info' to determine styling. 

 */ 

function showMessage(message, type) {

 globalMessageBox.textContent = message; 

 globalMessageBox.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-

100', 'text-red-800', 'bg-blue-100', 'text-blue-800'); 

 if (type === 'success') { 

 globalMessageBox.classList.add('bg-green-100', 'text-green-800'); 

 } else if (type === 'error') { 

 globalMessageBox.classList.add('bg-red-100', 'text-red-800'); 
 globalMessageBox.classList.add('bg-blue-100', 'text-blue-800'); 

 } 

 globalMessageBox.classList.remove('hidden'); 

 setTimeout(() => { 

 globalMessageBox.classList.add('hidden'); 

 }, 3000); // Hide aŌer 3 seconds

} 

/** 

 * Saves the current inventory, total profit, and total loss to local storage. 

 */ 

function saveState() {

 try { 

 localStorage.setItem('inventory', JSON.stringify(inventory)); 

 localStorage.setItem('totalProfit', totalProfit.toFixed(2)); 

 localStorage.setItem('totalLoss', totalLoss.toFixed(2)); 

 } catch (e) { 

 console.error("Error saving to local storage:", e); 

 showMessage("Error saving data locally.", 'error'); 

 } 

} 

/** 

 * Loads inventory, total profit, and total loss data from local storage. 

 */ 

function loadState() {

 try { 

 const storedInventory = localStorage.getItem('inventory'); 
 } else if (type === 'info') {
   
   
