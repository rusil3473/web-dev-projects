import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const cards = [
    {
      title: "Add Master",
      description: "Add a new master record.",
      image: "https://images.unsplash.com/photo-1573497494673-e660d8b7e3b2", // Master image
      link: "/add-master",
    },
    {
      title: "Display Master",
      description: "View and manage your master records.",
      image: "https://images.unsplash.com/photo-1573497494673-e660d8b7e3b2", // Master display image
      link: "/display-master",
    },
    {
      title: "Add Product",
      description: "Add a new product.",
      image: "https://images.unsplash.com/photo-1521791136060-77b1a7da4e4a", // Product image
      link: "/add-product",
    },
    {
      title: "Display Product",
      description: "View and manage your products.",
      image: "https://images.unsplash.com/photo-1573497494673-e660d8b7e3b2", // Product display image
      link: "/display-product",
    },
    {
      title: "Sales Invoice",
      description: "Create and manage sales invoices.",
      image: "https://images.unsplash.com/photo-1521791136060-77b1a7da4e4a", // Sales invoice image
      link: "/sales-invoice",
    },
    {
      title: "Purchase Invoice",
      description: "Manage purchase invoices.",
      image: "https://images.unsplash.com/photo-1593543484322-b08a25f45b6f", // Purchase invoice image
      link: "/purchase-invoice",
    },
    {
      title: "Quick Entry",
      description: "Quickly add financial entries.",
      image: "https://images.unsplash.com/photo-1506748686213-44f78035a0a6", // Data entry image
      link: "/quick-entry",
    },
    {
      title: "Account Ledger",
      description: "Review account balances and transactions.",
      image: "https://images.unsplash.com/photo-1604079718288-d3ff7ffde369", // Accounting image
      link: "/account-ledger",
    },
    {
      title: "Product Ledger",
      description: "View the history of product movements.",
      image: "https://images.unsplash.com/photo-1523871493065-cc15b377d772", // Product Ledger image
      link: "/product-ledger",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <Link to={card.link} className="btn btn-primary">
                  Go to {card.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
