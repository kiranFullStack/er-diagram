// src/App.js

import React from 'react';
import MermaidDiagram from './MermaidDiagram';
import './App.css';

const erDiagram = `
erDiagram
  CUSTOMER ||--o{ ORDER : places
  CUSTOMER ||--o{ ADDRESS : has
  CUSTOMER ||--o{ REVIEW : writes
  ORDER ||--|{ LINE-ITEM : contains
  ORDER ||--|{ PAYMENT : involves
  PRODUCT ||--o{ LINE-ITEM : includes
  PRODUCT ||--o{ REVIEW : receives
  PRODUCT ||--o{ INVENTORY : stocks
  SUPPLIER ||--o{ PRODUCT : supplies
  CATEGORY ||--|{ PRODUCT : classifies
  ADDRESS ||--o{ CITY : located_in
  CITY ||--o{ STATE : located_in
  STATE ||--o{ COUNTRY : located_in

  CUSTOMER {
    int customerId
    string name
    string email
    string phoneNumber
  }
  ORDER {
    int orderId
    string date
    float totalAmount
    int customerId
  }
  LINE-ITEM {
    int lineItemId
    int quantity
    float price
    int orderId
    int productId
  }
  PRODUCT {
    int productId
    string name
    string description
    float price
    int categoryId
    int supplierId
  }
  PAYMENT {
    int paymentId
    string type
    float amount
    string date
    int orderId
  }
  REVIEW {
    int reviewId
    int rating
    string comment
    int customerId
    int productId
  }
  SUPPLIER {
    int supplierId
    string name
    string contactInfo
  }
  CATEGORY {
    int categoryId
    string name
  }
  INVENTORY {
    int inventoryId
    int quantity
    int productId
  }
  ADDRESS {
    int addressId
    string street
    string city
    string state
    string postalCode
    int customerId
  }
  CITY {
    int cityId
    string name
    int stateId
  }
  STATE {
    int stateId
    string name
    int countryId
  }
  COUNTRY {
    int countryId
    string name
  }

`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mermaid ER Diagram in React</h1>
      </header>
      <main>
        <MermaidDiagram chart={erDiagram} />
      </main>
    </div>
  );
}

export default App;
