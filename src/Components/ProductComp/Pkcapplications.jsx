import { useState } from "react";

const tabs = [
  {
    id: "livestock",
    label: "Livestock",
    items: [
      {
        icon: "ti-pig",
        title: "Livestock Feed Production",
        desc: "Commonly used in livestock feed formulation for animals that require supplementary feed, included in blends to support animal feeding programmes in commercial and small-scale farming.",
      },
      {
        icon: "ti-cow",
        title: "Cattle Feed",
        desc: "Widely used for dairy and beef cattle — blended with other feed ingredients to support routine feeding, weight maintenance, and general livestock nutrition.",
      },
      {
        icon: "ti-plant-2",
        title: "Goat & Sheep Feed",
        desc: "Used in feed mixtures for goats and sheep, providing a dependable feed ingredient for farmers raising ruminant animals.",
      },
    ],
  },
  {
    id: "poultry",
    label: "Poultry & Pigs",
    items: [
      {
        icon: "ti-feather",
        title: "Poultry Feed Formulation",
        desc: "Used in controlled quantities as part of a balanced feed mix for poultry, combined with other ingredients based on the nutritional requirements of the birds.",
      },
      {
        icon: "ti-meat",
        title: "Pig Feed Formulation",
        desc: "Used in pig feed production when properly processed and blended with suitable feed materials, serving farms and feed mills in the piggery sector.",
      },
    ],
  },
  {
    id: "mills",
    label: "Feed Mills",
    items: [
      {
        icon: "ti-building-factory-2",
        title: "Feed Mills & Feed Producers",
        desc: "Valuable to feed mills and manufacturers that require reliable bulk supply for processing, supporting the production of blended animal feed for different livestock markets.",
      },
      {
        icon: "ti-tractor",
        title: "Commercial Farming Operations",
        desc: "Used by large farms and agricultural businesses as part of their feed supply chain, supporting regular feeding schedules and larger livestock populations.",
      },
    ],
  },
  {
    id: "distribution",
    label: "Distribution",
    items: [
      {
        icon: "ti-truck",
        title: "Agricultural Distribution",
        desc: "Supplied to distributors and traders who serve farmers, feed mills, and rural agricultural markets — making it a key product within the wider livestock supply chain.",
      },
      {
        icon: "ti-recycle",
        title: "Resource Efficiency",
        desc: "By converting a by-product of oil production into a useful agricultural input, De-Oil Cake supports responsible manufacturing and reduces waste across the processing chain.",
      },
    ],
  },
];

const PKCApplications = () => {
  const [activeTab, setActiveTab] = useState("livestock");

  const current = tabs.find((t) => t.id === activeTab);

  return (
    <section className="pk-section">
      <div className="pk-inner">
        {/* LEFT — image */}
        <div className="pk-image">
          <img src="/zitelle/pk6.png" alt="De-Oil Cake" />
        </div>

        {/* RIGHT — content */}
        <div className="pk-content">
          <p className="pk-label">Applications</p>

          <h2 className="pk-title">
            From Oil Press <span>to Feed Bag</span>
          </h2>

          <p className="pk-text">
            De-Oil Cake is a valuable by-product of our oil production process —
            turned into a practical, high-demand agricultural ingredient serving
            farmers, feed producers, and agricultural businesses across Nigeria.
          </p>

          {/* Tabs */}
          <div className="pk-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pk-tab ${activeTab === tab.id ? "pk-tab--active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="pk-items">
            {current.items.map((item, i) => (
              <div key={i} className="pk-item">
                <div className="pk-item__icon">
                  <i className={`ti ${item.icon}`} aria-hidden="true" />
                </div>
                <div className="pk-item__body">
                  <p className="pk-item__title">{item.title}</p>
                  <p className="pk-item__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PKCApplications;
