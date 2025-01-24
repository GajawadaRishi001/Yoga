import React, { useState } from "react";
import "./Events.css";
import { TextField, MenuItem, Button } from "@mui/material";

const Events = ({ addToCart }) => {
  // Subscription options with detailed information for filtering
  const subscriptionOptions = [
    { type: "HathaYoga", duration: "1 month", price: "$30", level: "Beginner", batch: "Morning" },
    { type: "HathaYoga", duration: "3 months", price: "$80", level: "Intermediate", batch: "Evening" },
    { type: "Iyengar", duration: "1 month", price: "$50", level: "Advanced", batch: "Morning" },
    { type: "Iyengar", duration: "6 months", price: "$250", level: "Intermediate", batch: "Evening" },
    { type: "Jivamukti Yoga", duration: "3 months", price: "$130", level: "Advanced", batch: "Morning" },
    { type: "HotYoga", duration: "1 month", price: "$40", level: "Beginner", batch: "Evening" },
    { type: "HathaVinyasa", duration: "6 months", price: "$190", level: "Beginner", batch: "Morning" },
    { type: "Meditation", duration: "1 month", price: "$50", level: "All Levels", batch: "Evening" },
    { type: "Kundalini", duration: "3 months", price: "$100", level: "Intermediate", batch: "Morning" },
    { type: "PowerYoga", duration: "6 months", price: "$150", level: "Advanced", batch: "Evening" },
  ];

  const [filter, setFilter] = useState({
    type: "",
    level: "",
    batch: "",
  });

  // Update the filter values
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  // Filtered cards based on the selected filters
  const filteredOptions = subscriptionOptions.filter(
    (option) =>
      (filter.type === "" || option.type === filter.type) &&
      (filter.level === "" || option.level === filter.level) &&
      (filter.batch === "" || option.batch === filter.batch)
  );

  const yogaTypes = [
    "HathaYoga",
    "Iyengar",
    "Jivamukti Yoga",
    "HotYoga",
    "HathaVinyasa",
    "Meditation",
    "Kundalini",
    "PowerYoga",
  ];

  const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"];
  const batches = ["Morning", "Evening"];

  return (
    <div className="events-page">
      <h1 data-aos="fade-up">Explore Our Yoga Classes</h1>

      {/* Filter Section */}
      <div className="filters" data-aos="fade-up">
        <TextField
          select
          label="Yoga Type"
          name="type"
          value={filter.type}
          onChange={handleFilterChange}
          variant="outlined"
          className="filter-input"
        >
          <MenuItem value="">All Types</MenuItem>
          {yogaTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Level"
          name="level"
          value={filter.level}
          onChange={handleFilterChange}
          variant="outlined"
          className="filter-input"
        >
          <MenuItem value="">All Levels</MenuItem>
          {levels.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Batch"
          name="batch"
          value={filter.batch}
          onChange={handleFilterChange}
          variant="outlined"
          className="filter-input"
        >
          <MenuItem value="">All Batches</MenuItem>
          {batches.map((batch) => (
            <MenuItem key={batch} value={batch}>
              {batch}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setFilter({ type: "", level: "", batch: "" })}
        >
          Clear Filters
        </Button>
      </div>

      {/* Cards Section */}
      <div className="events-cards">
        {filteredOptions.map((option, idx) => (
          <div key={idx} className="event-card" data-aos="fade-up">
            <div className="event-card-img">
              <img src="/images/image1.jpg" alt={option.type} />
            </div>
            <h3>{option.type} Subscription</h3>
            <p>
              Duration: {option.duration}
              <br />
              Price: {option.price}
              <br />
              Level: {option.level}
              <br />
              Batch: {option.batch}
              <br />
              Batch Size: 20
              <br />
              Timings: 6 AM - 7 AM
            </p>
            <button onClick={() => addToCart(option.type, option)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
