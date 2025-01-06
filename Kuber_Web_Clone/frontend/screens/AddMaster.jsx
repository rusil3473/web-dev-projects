import React, { useState } from "react";

function AccountMaster() {
  const [formData, setFormData] = useState({
    name: "",
    alias: "",
    group: "",
    billType: "Tax Invoice",
    openingBalance: "",
    balanceType: "Debit",
    gstin: "",
    vatTin: "",
    panNo: "",
    aadhaarNo: "",
    dealerType: "Regular/Register",
    creditDays: "",
    creditLimit: "",
    state: "",
    district: "",
    city: "",
    village: "",
    contactPerson: "",
    mobileNo: "",
    phoneOffice: "",
    phoneResidence: "",
    email: "",
    website: "",
  });

  const [groups, setGroups] = useState([
    "Sundry Debtors",
    "Sundry Creditors",
    "Cash in Hand",
    "Bank Account",
    "Fixed Assets",
  ]);

  const [states] = useState(["Maharashtra", "Gujarat", "Delhi"]); // Example states
  const [districts] = useState(["Pune", "Mumbai", "Nashik"]); // Example districts
  const [cities] = useState(["Pune City", "Mumbai City", "Nashik City"]); // Example cities

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddGroup = () => {
    const newGroup = prompt("Enter a new group name:");
    if (newGroup) {
      setGroups([...groups, newGroup]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Account Master</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Alias</label>
              <input
                type="text"
                className="form-control"
                name="alias"
                value={formData.alias}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Group</label>
              <div className="d-flex">
                <select
                  className="form-select"
                  name="group"
                  value={formData.group}
                  onChange={handleChange}
                >
                  <option value="">Select Group</option>
                  {groups.map((group, index) => (
                    <option key={index} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="btn btn-info ms-2"
                  onClick={handleAddGroup}
                >
                  Add Group
                </button>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Bill Type</label>
              <select
                className="form-select"
                name="billType"
                value={formData.billType}
                onChange={handleChange}
              >
                <option value="Tax Invoice">Tax Invoice</option>
                <option value="Cash Memo">Cash Memo</option>
              </select>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Opening Balance</label>
                <input
                  type="number"
                  className="form-control"
                  name="openingBalance"
                  value={formData.openingBalance}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label className="form-label">Balance Type</label>
                <select
                  className="form-select"
                  name="balanceType"
                  value={formData.balanceType}
                  onChange={handleChange}
                >
                  <option value="Debit">Debit</option>
                  <option value="Credit">Credit</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Credit Days</label>
              <input
                type="number"
                className="form-control"
                name="creditDays"
                value={formData.creditDays}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Credit Limit</label>
              <input
                type="number"
                className="form-control"
                name="creditLimit"
                value={formData.creditLimit}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">GSTIN</label>
              <input
                type="text"
                className="form-control"
                name="gstin"
                value={formData.gstin}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">VAT TIN</label>
              <input
                type="text"
                className="form-control"
                name="vatTin"
                value={formData.vatTin}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">PAN No.</label>
              <input
                type="text"
                className="form-control"
                name="panNo"
                value={formData.panNo}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Aadhaar No.</label>
              <input
                type="text"
                className="form-control"
                name="aadhaarNo"
                value={formData.aadhaarNo}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">State</label>
              <select
                className="form-select"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">District</label>
              <select
                className="form-select"
                name="district"
                value={formData.district}
                onChange={handleChange}
              >
                <option value="">Select District</option>
                {districts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <select
                className="form-select"
                name="city"
                value={formData.city}
                onChange={handleChange}
              >
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Village</label>
              <input
                type="text"
                className="form-control"
                name="village"
                value={formData.village}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contact Person</label>
              <input
                type="text"
                className="form-control"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AccountMaster;
